import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Consultation, DataService, ResultadoMedicion } from 'src/app/services/data.service';


interface Resultado {
  id: number;
  apellidos: string;
  nombre: string;
  fecha: Date;
  cedula: string;
  // Otras propiedades necesarias
}

@Component({
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  // Variables para los resultados y datos de los gráficos
  resultado:any ={};
  nombre: string = '';
  apellidos: string = '';
  cedula: string = '';
  edad: number = 0;
  sexo: string = '';
  pesoTeorico: number = 0;
  porcentajePesoTeorico: number = 0;
  cambioPesoReciente: number = 0;
  imc: number = 0;
  c: number = 0;
  m: number = 0;
  densidad: number = 0;
  porcentajeGrasa: number = 0;
  masaGrasa: number = 0;
  areaTotalBrazo: number = 0;
  areaMuscularBrazo: number = 0;
  areaGrasaBrazo: number = 0;
  porcentajeGrasaBrazo: number = 0;
  masaMagra: number = 0;
  areaMuscularBrazoDisponible: number = 0;
  masaMuscularEsqueletica: number = 0;
  perimetroCintura: number = 0;
  indiceCinturaCadera: number = 0;
  indiceCinturaTalla: number = 0;
  indiceMasaCorporal: number = 0;
  valorC: number = 0;
  valorM: number = 0;
  altura: number = 0;
  pesoReal: number = 0;
  pesoActual: number = 0;
  pesoAnterior: number = 0;
  peso: number = 0;
  triceps: number = 0;
  subescapular: number = 0;
  suprailiaco: number = 0;
  abdominal: number = 0;
  biceps: number = 0;
  crestaIliaca: number = 0;
  musloFrontal: number = 0;
  pantorrillaMedial: number = 0;
  brazoRelajado: number = 0;
  brazoFlexionado: number = 0;
  datosFormulario: any = {};
  porcentajeMasaMuscularEsqueletica: any;
  recomendaciones: string[] = [];
  resultadosGuardados: any;
  resultados: any[] = [];
  historialDetalle: any;  
  pesoTeoricoV: number = 0;
  pesoTeoricoM: number = 0;
  porcentajePesoTeoricoV: number = 0;
  porcentajePesoTeoricoM: number = 0;
  masaOsea: number = 0;
  masaResidual: number = 0;
  masaMuscular: number = 0;
  complexionCorporal: string = '';
  historialModel: any;
  localStorage: string = '';
  datosConsulta: any;
  datosFormularioGuardados: any;
  file: any;
  DataService: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private dataService: DataService
  ) {
    
  }

  verHistorial(): void {
    if (this.resultadosGuardados && this.historialModel) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          datosConsulta: JSON.stringify(this.datosFormularioGuardados),
          resultados: JSON.stringify(this.resultadosGuardados),
          historial: JSON.stringify(this.historialModel),
        },
      };
      this.router.navigate(['/historial/historial-clinico'], navigationExtras);
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = params['id'];
      if (!id) return;
      const result = await this.dataService.getResults(id);
      const {nombre,apellidos,cedula,edad,sexo}= JSON.parse(localStorage.getItem('pacienteData')!);
      this.nombre = nombre;
      this.resultado = result;
      this.datosFormulario.nombre = nombre;
      this.datosFormulario.apellidos = apellidos;
      this.datosFormulario.edad = edad;
      this.datosFormulario.sexo = sexo;
      this.datosFormulario.cedula = cedula;
      console.log(this.resultado)
      this.setData();
      this.generarRecomendaciones();
      localStorage.removeItem('pacienteData')
    })
    // Recibe los datos de consulta desde el localStorage
    const consultaData = localStorage.getItem('consultaData');
    if (consultaData) {
      this.datosFormulario = JSON.parse(consultaData) as Consultation;
      console.log(this.datosFormulario)
      this.pushData();
      // Extraer los campos necesarios

      this.generarRecomendaciones()
      // Obtén los resultados previos para esta cédula desde el almacenamiento local
      const resultadosGuardados = localStorage.getItem('resultados');
      let resultados: Resultado[] = []; // Inicializa resultados como un array vacío

      if (resultadosGuardados) {
        resultados = JSON.parse(resultadosGuardados) as Resultado[];
      }

      // Crea un nuevo objeto Resultado con todas las propiedades requeridas
      const nuevoResultado: Resultado = {
        id: this.id,
        apellidos: this.apellidos,
        nombre: this.nombre,
        fecha: new Date(),
        cedula: this.cedula,
      };

      // Agrega el nuevo resultado al arreglo de resultados para esta cédula
      resultados.push(nuevoResultado);

      // Guarda los resultados actualizados en el almacenamiento local
      localStorage.setItem('resultados', JSON.stringify(resultados));
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('consultaData')
  }

  guardarResultadosEnLocalStorage() {
    const resultados = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      cedula: this.cedula,
      edad: this.edad,
      sexo: this.sexo,
      pesoTeorico: this.pesoTeorico,
      porcentajePesoTeorico: this.porcentajePesoTeorico,
      cambioPesoReciente: this.cambioPesoReciente,
      imc: this.imc,
      c: this.c,
      m: this.m,
      densidad: this.densidad,
      porcentajeGrasa: this.porcentajeGrasa,
      masaGrasa: this.masaGrasa,
      areaTotalBrazo: this.areaTotalBrazo,
      areaMuscularBrazo: this.areaMuscularBrazo,
      areaGrasaBrazo: this.areaGrasaBrazo,
      porcentajeGrasaBrazo: this.porcentajeGrasaBrazo,
      masaMagra: this.masaMagra,
      areaMuscularBrazoDisponible: this.areaMuscularBrazoDisponible,
      masaMuscularEsqueletica: this.masaMuscularEsqueletica,
      perimetroCintura: this.perimetroCintura,
      indiceCinturaCadera: this.indiceCinturaCadera,
      indiceCinturaTalla: this.indiceCinturaTalla,
      indiceMasaCorporal: this.indiceMasaCorporal,
      valorC: this.valorC,
      valorM: this.valorM,
      altura: this.altura,
      pesoReal: this.pesoReal,
      pesoActual: this.pesoActual,
      pesoAnterior: this.pesoAnterior,
      peso: this.peso,
      triceps: this.triceps,
      subescapular: this.subescapular,
      suprailiaco: this.suprailiaco,
      abdominal: this.abdominal,
      biceps: this.biceps,
      crestaIliaca: this.crestaIliaca,
      musloFrontal: this.musloFrontal,
      pantorrillaMedial: this.pantorrillaMedial,
      brazoRelajado: this.brazoRelajado,
      brazoFlexionado: this.brazoFlexionado,
      datosFormulario: this.datosFormulario,
      porcentajeMasaMuscularEsqueletica: this.porcentajeMasaMuscularEsqueletica,
      recomendaciones: this.recomendaciones,
      resultadosGuardados: this.resultadosGuardados,
      resultados: this.resultados,
      pesoTeoricoV: this.pesoTeoricoV,
      pesoTeoricoM: this.pesoTeoricoM,
      porcentajePesoTeoricoV: this.porcentajePesoTeoricoV,
      porcentajePesoTeoricoM: this.porcentajePesoTeoricoM,
      masaOsea: this.masaOsea,
      masaResidual: this.masaResidual,
      masaMuscular: this.masaMuscular,
      complexionCorporal: this.complexionCorporal,
    };
  }

  calcularResultados() {
    const peso = parseFloat(this.datosFormulario.peso);
    const talla = parseFloat(this.datosFormulario.talla);
    const triceps = parseFloat(this.datosFormulario.triceps);
    const biceps = parseFloat(this.datosFormulario.biceps);
    const subescapular = parseFloat(this.datosFormulario.subescapular);
    const supraspinale = parseFloat(this.datosFormulario.supraspinale);
    const abdominal = parseFloat(this.datosFormulario.abdominal);
    const crestaIliaca = parseFloat(this.datosFormulario.crestaIliaca);
    const musloFrontal = parseFloat(this.datosFormulario.musloFrontal);
    const pantorrillaMedial = parseFloat(this.datosFormulario.pantorrillaMedial);
    const brazoRelajado = parseFloat(this.datosFormulario.brazoRelajado);
    const brazoFlexionado = parseFloat(this.datosFormulario.brazoFlexionado);
    const edad = parseFloat(this.datosFormulario.edad);
    const sexo = this.datosFormulario.sexo;
    const altura = parseFloat(this.datosFormulario.altura);

    // Cálculos
    const pesoTeorico = (altura - 100 + (edad / 10)) * 0.9; // Peso teórico
    const porcentajePesoTeorico = (peso / pesoTeorico) * 100; // % Peso teórico
    const cambioPesoReciente = (peso - pesoTeorico) / pesoTeorico * 100; // Cambio de peso reciente
    const imc = peso / ((talla / 100) * (talla / 100)); // Índice de masa corporal
    const c = (triceps + subescapular + supraspinale + abdominal) / 4; // C
    const m = (biceps + musloFrontal + pantorrillaMedial) / 3; // M
    const densidad = 1.097 - (0.00042 * c) + (0.00013 * m); // Densidad
    const porcentajeGrasa = (495 / densidad) - 450; // % Grasa corporal
    const masaGrasa = (porcentajeGrasa / 100) * peso; // Masa de grasa
    const areaBrazoTotal = (Math.PI * (brazoRelajado / 10) ** 2); // Área total del brazo
    const areaMuscularBrazo = (areaBrazoTotal - (Math.PI * (brazoFlexionado / 10) ** 2)); // Área muscular del brazo
    const areaGrasaBrazo = (areaBrazoTotal - areaMuscularBrazo); // Área grasa del brazo
    const porcentajeGrasaBrazo = (areaGrasaBrazo / areaBrazoTotal) * 100; // % Grasa del brazo
    const masaMagra = peso - masaGrasa; // Masa magra
    const areaMuscularBrazoDisponible = (Math.PI * (brazoRelajado / 10) ** 2 - areaGrasaBrazo); // Área muscular del brazo disponible
    const masaMuscularEsqueletica = (masaMagra * 1.10); // Masa muscular esquelética
    const porcentajeMasaMuscularEsqueletica = (masaMuscularEsqueletica / peso) * 100; // % Masa muscular esquelética
    const perimetroCintura = (abdominal * 0.394) + (crestaIliaca * 0.296); // Perímetro de la cintura
    const cadera = parseFloat(this.datosFormulario.cadera); // Asegúrate de que cadera sea un campo en datosFormulario
    const indiceCinturaCadera = (abdominal / cadera); // Índice cintura-cadera
    const indiceCinturaTalla = (abdominal / altura); // Índice cintura-talla

    // Puedes usar los resultados para generar recomendaciones o realizar otras operaciones necesarias

    this.generarRecomendaciones();
  }

  obtenerDatosFormularioLocalStorage() {
    const datosFormularioGuardados = localStorage.getItem('datosFormulario');
    return datosFormularioGuardados
      ? JSON.parse(datosFormularioGuardados)
      : null;
  }

  generarTokenResultados(resultados: any) {
    return JSON.stringify(resultados);
  }

  // Función para guardar los datos en el almacenamiento local

  guardarEnAlmacenamientoLocal(nombre: string, datos: string) {
    localStorage.setItem(nombre, datos);
  }

  gguardarNuevoTokenResultados(nuevosResultados: any) {
    // Generar un nombre único para el nuevo token
    const nuevoToken = `resultados_${Date.now()}`;

    // Guardar los nuevos resultados en el almacenamiento local con el nuevo token
    localStorage.setItem(nuevoToken, JSON.stringify(nuevosResultados));
  }

  generarRecomendaciones() {
    this.recomendaciones = []; // Limpiar el arreglo de recomendaciones antes de generar nuevas recomendaciones
    // Recomendaciones basadas en el IMC
    if (this.imc < 18.5) {
      this.recomendaciones.push(
        'Tu IMC indica que estás bajo de peso. Consulta a un profesional de la salud.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Es importante que sigas una alimentación equilibrada y rica en nutrientes para ganar peso de manera saludable. Aumenta la ingesta de calorías mediante alimentos como carnes magras, pescado, huevos, lácteos, frutas, verduras, legumbres y granos enteros.'
      );
    } else if (this.imc >= 25) {
      this.recomendaciones.push(
        'Tu IMC indica que tienes sobrepeso. Considera mejorar tu alimentación y hacer ejercicio.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Opta por una dieta equilibrada y moderada en calorías. Incrementa el consumo de frutas, verduras, granos enteros y proteínas magras, y limita el consumo de alimentos procesados y altos en grasas saturadas y azúcares.'
      );
    }
    // Recomendaciones basadas en el porcentaje de grasa corporal
    if (this.porcentajeGrasa > 30) {
      this.recomendaciones.push(
        'Tu porcentaje de grasa corporal está alto. Considera reducir tu ingesta de calorías y aumentar tu actividad física.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Opta por una dieta equilibrada y baja en calorías. Prioriza alimentos nutritivos como frutas, verduras, granos enteros, proteínas magras y grasas saludables. Limita el consumo de alimentos procesados, azúcares y grasas saturadas.'
      );
    } else if (this.porcentajeGrasa < 10) {
      this.recomendaciones.push(
        'Tu porcentaje de grasa corporal está muy bajo. Asegúrate de consumir suficientes nutrientes y consultar a un profesional de la salud.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Prioriza una alimentación equilibrada y suficiente en calorías. Incluye alimentos ricos en nutrientes como proteínas, carbohidratos, grasas saludables, frutas, verduras, lácteos y granos enteros. Consulta a un nutricionista para obtener una dieta personalizada.'
      );
    }
    // Recomendaciones basadas en el porcentaje de masa muscular esquelética
    if (this.porcentajeMasaMuscularEsqueletica < 20) {
      this.recomendaciones.push(
        'Tu porcentaje de masa muscular es bajo. Considera realizar ejercicios de fortalecimiento muscular.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Asegúrate de consumir suficiente proteína para favorecer el crecimiento y mantenimiento de los músculos. Incorpora alimentos como carne magra, pescado, legumbres, lácteos y huevos en tu dieta. Consulta a un nutricionista para obtener una dieta adaptada a tus necesidades.'
      );
    } else if (this.porcentajeMasaMuscularEsqueletica > 30) {
      this.recomendaciones.push(
        'Tu porcentaje de masa muscular es alto. Sigue manteniendo una rutina de ejercicios adecuada.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Continúa consumiendo una dieta equilibrada que incluya suficiente proteína para mantener tus músculos y apoyar tu actividad física. Asegúrate de consumir una variedad de alimentos nutritivos.'
      );
    }
    // Recomendaciones basadas en el índice de masa corporal
    if (this.indiceMasaCorporal < 18.5) {
      this.recomendaciones.push(
        'Tu índice de masa corporal indica que estás en la categoría de "bajo peso". Consulta a un profesional de la salud para evaluar tu situación.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Asegúrate de consumir suficientes calorías y nutrientes para alcanzar un peso saludable. Incluye alimentos ricos en proteínas, carbohidratos y grasas saludables en tu dieta.'
      );
    } else if (this.indiceMasaCorporal >= 25 && this.indiceMasaCorporal < 30) {
      this.recomendaciones.push(
        'Tu índice de masa corporal indica que estás en la categoría de "sobrepeso". Considera mejorar tu alimentación y hacer ejercicio de forma regular.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Opta por una dieta equilibrada y moderada en calorías. Incrementa el consumo de frutas, verduras, granos enteros y proteínas magras, y limita el consumo de alimentos procesados y altos en grasas saturadas y azúcares añadidos.'
      );
    } else if (this.indiceMasaCorporal >= 30) {
      this.recomendaciones.push(
        'Tu índice de masa corporal indica que estás en la categoría de "obesidad". Es importante que busques ayuda de un profesional de la salud para mejorar tu estado de salud.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Busca una dieta equilibrada y adecuada en calorías. Prioriza alimentos naturales, como frutas, verduras, granos enteros y proteínas magras, y reduce la ingesta de alimentos procesados, grasas saturadas y azúcares añadidos.'
      );
    }
    // Recomendaciones basadas en el índice de Cintura-Talla
    if (this.indiceCinturaTalla >= 0.5 && this.indiceCinturaTalla <= 0.6) {
      this.recomendaciones.push(
        'Tu índice cintura-talla indica que tienes un nivel de grasa abdominal saludable.'
      );
    } else if (this.indiceCinturaTalla > 0.6) {
      this.recomendaciones.push(
        'Tu índice cintura-talla indica que tienes un nivel de grasa abdominal elevado. Considera hacer ejercicio y ajustar tu dieta para reducirlo.'
      );
      this.recomendaciones.push(
        'Recomendación de alimentación: Opta por una dieta equilibrada y baja en calorías. Prioriza alimentos ricos en fibra, como frutas, verduras y granos enteros, y limita el consumo de alimentos procesados y azúcares añadidos.'
      );
      // Recomendaciones basadas en la densidad
      if (this.densidad > 1.1) {
        this.recomendaciones.push(
          'Tu densidad corporal está por encima del rango saludable. Considera realizar cambios en tu dieta y aumentar tu actividad física.'
        );
        this.recomendaciones.push(
          'Recomendación de alimentación: Busca una alimentación equilibrada y adecuada en calorías. Prioriza alimentos naturales y nutrientes esenciales, y limita la ingesta de alimentos procesados y grasas saturadas.'
        );
      } else if (this.densidad < 1.0) {
        this.recomendaciones.push(
          'Tu densidad corporal está por debajo del rango saludable. Asegúrate de consumir suficientes nutrientes y considera consultar a un profesional de la salud.'
        );
        this.recomendaciones.push(
          'Recomendación de alimentación: Prioriza una dieta equilibrada y suficiente en calorías. Incluye alimentos ricos en proteínas, carbohidratos y grasas saludables, y evita el consumo excesivo de alimentos ultraprocesados.'
        );
      }
      if (this.perimetroCintura > 90) {
        this.recomendaciones.push(
          'Tu perímetro de cintura está elevado. Trabaja en reducir la grasa abdominal a través de ejercicios cardiovasculares y una alimentación saludable.'
        );
        this.recomendaciones.push(
          'Recomendación de alimentación: Opta por una dieta equilibrada y baja en calorías. Prioriza alimentos ricos en fibra, como frutas, verduras y granos enteros, y limita el consumo de alimentos procesados y azúcares añadidos.'
        );
      }
    }
  }

  pushData() {
    try {
      this.nombre = this.datosFormulario.nombre;
      this.apellidos = this.datosFormulario.apellidos;
      this.cedula = this.datosFormulario.cedula;
      this.edad = this.datosFormulario.edad;
      this.sexo = this.datosFormulario.sexo;
      this.pesoTeorico = this.datosFormulario.pesoTeorico.toFixed(2);;
      this.porcentajePesoTeorico = this.datosFormulario.porcentajePesoTeorico.toFixed(2);;
      this.cambioPesoReciente = this.datosFormulario.cambioPesoReciente.toFixed(2);
      this.imc = this.datosFormulario.imc.toFixed(2);
      this.c = this.datosFormulario.c.toFixed(2);
      this.m = this.datosFormulario.m.toFixed(2);
      this.densidad = this.datosFormulario.densidad.toFixed(2);
      this.porcentajeGrasa = this.datosFormulario.porcentajeGrasa.toFixed(2);
      this.masaGrasa = this.datosFormulario.masaGrasa.toFixed(2);
      this.areaTotalBrazo = this.datosFormulario.areaBrazoTotal.toFixed(2);
      this.areaMuscularBrazo = this.datosFormulario.areaBrazoTotal.toFixed(2);
      this.areaGrasaBrazo = this.datosFormulario.areaGrasaBrazo.toFixed(2);
      this.porcentajeGrasaBrazo = this.datosFormulario.porcentajeGrasaBrazo.toFixed(2);
      this.masaMagra = this.datosFormulario.masaMagra.toFixed(2);
      this.areaMuscularBrazoDisponible = this.datosFormulario.areaMuscularBrazoDisponible.toFixed(2);
      this.masaMuscularEsqueletica = this.datosFormulario.masaMuscularEsqueletica.toFixed(2);
      this.perimetroCintura = this.datosFormulario.perimetroCintura.toFixed(2);
      this.indiceCinturaCadera = this.datosFormulario.indiceCinturaCadera.toFixed(2);
      this.indiceCinturaTalla = this.datosFormulario.indiceCinturaTalla
      this.indiceMasaCorporal = this.datosFormulario.indiceMasaCorporal
      this.valorC = this.datosFormulario.valorC
      this.valorM = this.datosFormulario.valorM
      this.altura = this.datosFormulario.altura
      this.pesoReal = this.datosFormulario.pesoReal
      this.pesoActual = this.datosFormulario.pesoActual
      this.pesoAnterior = this.datosFormulario.pesoAnterior
      this.peso = this.datosFormulario.peso
      this.triceps = this.datosFormulario.triceps
      this.subescapular = this.datosFormulario.subescapular
      this.suprailiaco = this.datosFormulario.suprailiaco
      this.abdominal = this.datosFormulario.abdominal
      this.biceps = this.datosFormulario.biceps
      this.crestaIliaca = this.datosFormulario.crestaIliaca
      this.musloFrontal = this.datosFormulario.musloFrontal
      this.pantorrillaMedial = this.datosFormulario.pantorrillaMedial
      this.brazoRelajado = this.datosFormulario.brazoRelajado
      this.brazoFlexionado = this.datosFormulario.brazoFlexionado
      this.porcentajeMasaMuscularEsqueletica = this.datosFormulario.porcentajeMasaMuscularEsqueletica.toFixed(2);
      this.pesoTeoricoV = this.datosFormulario.pesoTeoricoV
      this.pesoTeoricoM = this.datosFormulario.pesoTeoricoM
      this.porcentajePesoTeoricoV = this.datosFormulario.porcentajePesoTeoricoV
      this.porcentajePesoTeoricoM = this.datosFormulario.porcentajePesoTeoricoM
      this.masaOsea = this.datosFormulario.masaOsea
      this.masaResidual = this.datosFormulario.masaResidual
      this.masaMuscular = this.datosFormulario.masaMuscular
      this.complexionCorporal = this.datosFormulario.complexionCorporal
    } catch (error) {

    }

  }

  setData(){
    this.nombre = this.datosFormulario.nombre;
    this.apellidos = this.datosFormulario.apellidos;
    this.cedula = this.datosFormulario.cedula;
    this.edad = this.datosFormulario.edad;
    this.sexo = this.datosFormulario.sexo;
    this.pesoTeorico = this.resultado.pesoteorico;
    this.porcentajePesoTeorico = this.resultado.porcentajepesoteorico;
    this.cambioPesoReciente = this.resultado.cambiopesoreciente;
    this.imc = this.resultado.imc;
    this.c = this.resultado.c;
    this.m = this.resultado.m;
    this.densidad = this.resultado.densidad;
    this.porcentajeGrasa = this.resultado.porcentajegrasa;
    this.masaGrasa = this.resultado.masagrasa;
    this.areaTotalBrazo = this.resultado.areatotalbrazo;
    this.areaMuscularBrazo = this.resultado.areamuscularbrazo;
    this.areaGrasaBrazo = this.resultado.areagrasabrazo;
    this.porcentajeGrasaBrazo = this.resultado.porcentajegrasabrazo;
    this.masaMagra = this.resultado.masamagra;
    this.areaMuscularBrazoDisponible = this.resultado.areamuscularbrazodisp;
    this.masaMuscularEsqueletica = this.resultado.masamuscularesqueletica;
    this.perimetroCintura = this.resultado.perimetrocintura;
    this.indiceCinturaCadera = this.resultado.indicecinturacadera;
    this.indiceCinturaTalla = this.resultado.indicecinturatalla;
    this.indiceMasaCorporal = this.resultado.indicemasacorporal;
    this.valorC = this.resultado.valorc
    this.valorM = this.resultado.valorm
    this.altura = this.resultado.altura
    this.pesoReal = this.resultado.pesoreal
    this.pesoActual = this.resultado.pesoactual
    this.pesoAnterior = this.resultado.pesoanterior
    this.peso = this.resultado.peso
    this.triceps = this.resultado.triceps
    this.subescapular = this.resultado.subescapular
    this.suprailiaco = this.resultado.suprailiaco
    this.abdominal = this.resultado.abdominal
    this.biceps = this.resultado.biceps
    this.crestaIliaca = this.resultado.crestailiaca
    this.musloFrontal = this.resultado.muslofrontal
    this.pantorrillaMedial = this.resultado.pantorrillamedial
    this.brazoRelajado = this.resultado.brazorelajado
    this.brazoFlexionado = this.resultado.brazoflexionado
    this.porcentajeMasaMuscularEsqueletica = this.resultado.porcentajemasamuscularesqueletica;
    this.pesoTeoricoV = this.resultado.pesoteoricov
    this.pesoTeoricoM = this.resultado.pesoteoricom
    this.porcentajePesoTeoricoV = this.resultado.porcentajepesoteoricov
    this.porcentajePesoTeoricoM = this.resultado.porcentajepesoteoricom
    this.masaOsea = this.resultado.masaOsea
    this.masaResidual = this.resultado.masaresidual
    this.masaMuscular = this.resultado.masamuscular
    this.complexionCorporal = this.resultado.complexioncorporal
  }
}
