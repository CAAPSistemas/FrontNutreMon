import { Consultation } from "../services/data.service"
export enum EstadoComparacion {
  aum = 'aumentó',
  dism ='disminuyó',
  notc ='sin cambios'
}

 export enum ColorComparacion {
  success='success',
  danger='danger',
  primary='primary'
}
export interface Comportamiento{
    llave:string
    nombre:EstadoComparacion
    valor:number
    valorAnt:number
    valorAct:number
    color:ColorComparacion,
    um:string
 }
type ConsultationKey=keyof Consultation;
interface LlaveConsulta{
    llave:ConsultationKey,
    adv:string,
    name:string,
    um:string
}
export const datosConsulta:LlaveConsulta[]=[
  {
      llave:'peso',
      adv:'del',
      name:'Peso',
      um:'kg'
  },
  {
      llave:'talla',
      adv:'de la',
      name:'Talla',
      um:'cm'
  },
  {
      llave:'triceps',
      adv:'del',
      name:'Triceps',
      um:'mm'
  },
  {
      llave:'biceps',
      adv:'del',
      name:'Biceps',
      um:'mm'
  },
  {
      llave:'subescapular',
      adv:'de la',
      name:'Subescapular ',
      um:'mm'
  },
  {
      llave:'crestailiaca',
      adv:'de la',
      name:'Cresta ilíaca',
      um:'mm'
  },
  {
      llave:'supraespinale',
      adv:'de la',
      name:'Supraespinate',
      um:'mm' 

  },
  {
      llave:'abdominal',
      adv:'del',
      name:'Abdominal',
      um:'mm' 
  },
  {
      llave:'muslofrontal',
      adv:'del',
      name:'Muslo frotal',
      um:'mm' 
  },
  {
      llave:'brazorelajado',
      adv:'de',
      name:'Brazo relajado',
      um:'mm' 
  },
  {
      llave:'muneca',
      adv:'de',
      name:'Muñeca',
      um:'mm' 
  },
  {
      llave:'cintura',
      adv:'de',
      name:'Cintura',
      um:'mm' 
  },
  {
      llave:'muslomedial',
      adv:'de',
      name:'Musculo medial',
      um:'mm' 
  },
  {
      llave:'cadera',
      adv:'de',
      name:'Cadera',
      um:'mm' 
  },
  {
      llave:'pantorrillamedial',
      adv:'de',
      name:'Pantorrill medial',
      um:'mm' 
  },
  {
      llave:'perimetromuneca',
      adv:'de',
      name:'Perímetro de la muñeca',
      um:'mm' 
  }
]

 //export const llavesConsulta:LlaveConsulta[] =['','','','','',
 //'','','','','','','','','','','']
 //export const llavesConsulta=keyof Consulta