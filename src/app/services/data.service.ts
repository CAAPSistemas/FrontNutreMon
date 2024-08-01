import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface LoginResponse {
  success: boolean;
  message: string;
  usuario?: {
    usuarioid: number;
    username: string;
    email: string;
  };
}

export interface PacienteDto {
  id: number,
  nombre: string,
  apellidos: string,
  cedula: string,
  edad: number,
  sexo: string
}

export interface Consultation {
  medicionid?: number;
  pacienteid?: number;
  fechamedicion?: string;
  peso?: string;
  talla?: string;
  triceps?: string;
  biceps?: string;
  subescapular?: string;
  crestailiaca?: string;
  supraespinale?: string;
  abdominal?: string;
  muslofrontal?: string;
  brazorelajado?: string;
  brazoflexionado?: string;
  muneca?: string;
  cintura?: string;
  cadera?: string;
  muslomedial?: string;
  pantorrillamedial?: string;
  perimetromuneca?: string;
  createdAt?: string;
  updatedAt?: string;
  nombre?: string;
  apellidos?: string;
  cedula?: string;
  edad?: number;
  sexo?: string;
}
export interface ResultadoMedicion {
  resultadoid: number;
  medicionid: number;
  pesoTeorico: string;
  porcentajepesoteorico: string;
  cambiopesoreciente: string;
  imc: string;
  c: string;
  m: string;
  densidad: string;
  porcentajegrasa: string;
  masagrasa: string;
  areatotalbrazo: string;
  areamuscularbrazo: string;
  areagrasabrazo: string;
  porcentajegrasabrazo: string;
  masamagra: string;
  areamuscularbrazodisp: string;
  masamuscularesqueletica: string;
  porcentajemasamuscularesqueletica: string;
  perimetrocintura: string;
  indicecinturacadera: string;
  indicecinturatalla: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  //private apiUrl = 'http://181.225.253.143:8080/api';
  //private apiUrl = 'http://localhost:8080/api';
  private apiUrl = 'https://lrbk6lk2-8080.use.devtunnels.ms/api';

  constructor(private http: HttpClient) { }

  // Método asincrónico para login
  async login(email: string, password: string): Promise<LoginResponse> {
    return firstValueFrom(
      this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password })
        .pipe(
          catchError(this.handleError<LoginResponse>('login', undefined))
        )
    );
  }

  guardarDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardar_datos`, datos)
      .pipe(
        catchError(this.handleError<any>('guardarDatos'))
      );
  }

  obtenerHistorial(cedula: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/obtener_historial/${cedula}`)
      .pipe(
        catchError(this.handleError<any>('obtenerHistorial'))
      );
  }

  getData(id: number): Promise<any> {
    return firstValueFrom(this.http.get(`${this.apiUrl}/usuario/${id}`));
  }

  async guardarConsulta(consulta: any): Promise<any> {
    return firstValueFrom(
      this.http.post<any>(`${this.apiUrl}/consultation`, consulta)
        .pipe(

          catchError(this.handleError<any>('guardarConsulta'))
        ))
  }

  async getPacientes(): Promise<PacienteDto[]> {
    return firstValueFrom(this.http.get<PacienteDto[]>(this.apiUrl + "/pacientes"));
  }

  deletePacientes(id: number): Promise<any> {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/pacientes/${id}`));
  }
  updatePacientes(id: number, registrationData: any): Promise<any> {
    return firstValueFrom(this.http.put(`${this.apiUrl}/pacientes/${id}`, registrationData));
  }
  async addPacientes(data: PacienteDto): Promise<any> {
    return firstValueFrom(this.http.post(this.apiUrl + "/pacientes", data));
  }

  async getConsultationByPatient(id: number): Promise<Consultation[]> {
    return firstValueFrom(this.http.get<Consultation[]>(this.apiUrl + "/consultas/" + id));
  }
  async getResults(id: number) {
    return firstValueFrom(this.http.get<ResultadoMedicion>(this.apiUrl + "/results/" + id));
  }
  // Método genérico para manejar errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      if (error.status == 404) {
        return throwError(() => new Error(`El usuario no esta registrado`));
      }
      // Deja que la app siga corriendo retornando un resultado vacío.
      return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
  }
}
