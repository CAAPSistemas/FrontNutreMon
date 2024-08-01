"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8013],{8013:(D,q,t)=>{t.r(q),t.d(q,{ResultadosPageModule:()=>P});var F=t(6814),C=t(95),i=t(7027),m=t(3541),j=t(5861),a=t(6689),z=t(9862),f=t(5853);function y(s,r){if(1&s&&(a.TgZ(0,"ion-item"),a._uU(1),a.qZA()),2&s){const n=r.$implicit;a.xp6(1),a.hij("\n            ",n,"\n          ")}}const R=[{path:"",component:(()=>{var s;class r{constructor(e,o,c,u){this.activatedRoute=e,this.router=o,this.http=c,this.dataService=u,this.resultado={},this.nombre="",this.apellidos="",this.cedula="",this.edad=0,this.sexo="",this.pesoTeorico=0,this.porcentajePesoTeorico=0,this.cambioPesoReciente=0,this.imc=0,this.c=0,this.m=0,this.densidad=0,this.porcentajeGrasa=0,this.masaGrasa=0,this.areaTotalBrazo=0,this.areaMuscularBrazo=0,this.areaGrasaBrazo=0,this.porcentajeGrasaBrazo=0,this.masaMagra=0,this.areaMuscularBrazoDisponible=0,this.masaMuscularEsqueletica=0,this.perimetroCintura=0,this.indiceCinturaCadera=0,this.indiceCinturaTalla=0,this.indiceMasaCorporal=0,this.valorC=0,this.valorM=0,this.altura=0,this.pesoReal=0,this.pesoActual=0,this.pesoAnterior=0,this.peso=0,this.triceps=0,this.subescapular=0,this.suprailiaco=0,this.abdominal=0,this.biceps=0,this.crestaIliaca=0,this.musloFrontal=0,this.pantorrillaMedial=0,this.brazoRelajado=0,this.brazoFlexionado=0,this.datosFormulario={},this.recomendaciones=[],this.resultados=[],this.pesoTeoricoV=0,this.pesoTeoricoM=0,this.porcentajePesoTeoricoV=0,this.porcentajePesoTeoricoM=0,this.masaOsea=0,this.masaResidual=0,this.masaMuscular=0,this.complexionCorporal="",this.localStorage=""}verHistorial(){if(this.resultadosGuardados&&this.historialModel){const e={queryParams:{datosConsulta:JSON.stringify(this.datosFormularioGuardados),resultados:JSON.stringify(this.resultadosGuardados),historial:JSON.stringify(this.historialModel)}};this.router.navigate(["/historial/historial-clinico"],e)}}ngOnInit(){var o,e=this;this.activatedRoute.params.subscribe(function(u){return(o=o||(0,j.Z)(function*(l){const d=l.id;if(!d)return;const h=yield e.dataService.getResults(d),{nombre:p,apellidos:U,cedula:Z,edad:g,sexo:T}=JSON.parse(localStorage.getItem("pacienteData"));e.nombre=p,e.resultado=h,e.datosFormulario.nombre=p,e.datosFormulario.apellidos=U,e.datosFormulario.edad=g,e.datosFormulario.sexo=T,e.datosFormulario.cedula=Z,console.log(e.resultado),e.setData(),e.generarRecomendaciones(),localStorage.removeItem("pacienteData")})).apply(this,arguments)});const c=localStorage.getItem("consultaData");if(c){this.datosFormulario=JSON.parse(c),console.log(this.datosFormulario),this.pushData(),this.generarRecomendaciones();const u=localStorage.getItem("resultados");let l=[];u&&(l=JSON.parse(u)),l.push({id:this.id,apellidos:this.apellidos,nombre:this.nombre,fecha:new Date,cedula:this.cedula}),localStorage.setItem("resultados",JSON.stringify(l))}}ngOnDestroy(){localStorage.removeItem("consultaData")}guardarResultadosEnLocalStorage(){}calcularResultados(){parseFloat(this.datosFormulario.peso),parseFloat(this.datosFormulario.talla),parseFloat(this.datosFormulario.triceps),parseFloat(this.datosFormulario.biceps),parseFloat(this.datosFormulario.subescapular),parseFloat(this.datosFormulario.supraspinale);parseFloat(this.datosFormulario.abdominal);const g=(parseFloat(this.datosFormulario.crestaIliaca),parseFloat(this.datosFormulario.musloFrontal),parseFloat(this.datosFormulario.pantorrillaMedial),parseFloat(this.datosFormulario.brazoRelajado)),T=parseFloat(this.datosFormulario.brazoFlexionado),b=(parseFloat(this.datosFormulario.edad),parseFloat(this.datosFormulario.altura),Math.PI*(g/10)**2);Math;Math,parseFloat(this.datosFormulario.cadera),this.generarRecomendaciones()}obtenerDatosFormularioLocalStorage(){const e=localStorage.getItem("datosFormulario");return e?JSON.parse(e):null}generarTokenResultados(e){return JSON.stringify(e)}guardarEnAlmacenamientoLocal(e,o){localStorage.setItem(e,o)}gguardarNuevoTokenResultados(e){const o=`resultados_${Date.now()}`;localStorage.setItem(o,JSON.stringify(e))}generarRecomendaciones(){this.recomendaciones=[],this.imc<18.5?(this.recomendaciones.push("Tu IMC indica que est\xe1s bajo de peso. Consulta a un profesional de la salud."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Es importante que sigas una alimentaci\xf3n equilibrada y rica en nutrientes para ganar peso de manera saludable. Aumenta la ingesta de calor\xedas mediante alimentos como carnes magras, pescado, huevos, l\xe1cteos, frutas, verduras, legumbres y granos enteros.")):this.imc>=25&&(this.recomendaciones.push("Tu IMC indica que tienes sobrepeso. Considera mejorar tu alimentaci\xf3n y hacer ejercicio."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Opta por una dieta equilibrada y moderada en calor\xedas. Incrementa el consumo de frutas, verduras, granos enteros y prote\xednas magras, y limita el consumo de alimentos procesados y altos en grasas saturadas y az\xfacares.")),this.porcentajeGrasa>30?(this.recomendaciones.push("Tu porcentaje de grasa corporal est\xe1 alto. Considera reducir tu ingesta de calor\xedas y aumentar tu actividad f\xedsica."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Opta por una dieta equilibrada y baja en calor\xedas. Prioriza alimentos nutritivos como frutas, verduras, granos enteros, prote\xednas magras y grasas saludables. Limita el consumo de alimentos procesados, az\xfacares y grasas saturadas.")):this.porcentajeGrasa<10&&(this.recomendaciones.push("Tu porcentaje de grasa corporal est\xe1 muy bajo. Aseg\xfarate de consumir suficientes nutrientes y consultar a un profesional de la salud."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Prioriza una alimentaci\xf3n equilibrada y suficiente en calor\xedas. Incluye alimentos ricos en nutrientes como prote\xednas, carbohidratos, grasas saludables, frutas, verduras, l\xe1cteos y granos enteros. Consulta a un nutricionista para obtener una dieta personalizada.")),this.porcentajeMasaMuscularEsqueletica<20?(this.recomendaciones.push("Tu porcentaje de masa muscular es bajo. Considera realizar ejercicios de fortalecimiento muscular."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Aseg\xfarate de consumir suficiente prote\xedna para favorecer el crecimiento y mantenimiento de los m\xfasculos. Incorpora alimentos como carne magra, pescado, legumbres, l\xe1cteos y huevos en tu dieta. Consulta a un nutricionista para obtener una dieta adaptada a tus necesidades.")):this.porcentajeMasaMuscularEsqueletica>30&&(this.recomendaciones.push("Tu porcentaje de masa muscular es alto. Sigue manteniendo una rutina de ejercicios adecuada."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Contin\xfaa consumiendo una dieta equilibrada que incluya suficiente prote\xedna para mantener tus m\xfasculos y apoyar tu actividad f\xedsica. Aseg\xfarate de consumir una variedad de alimentos nutritivos.")),this.indiceMasaCorporal<18.5?(this.recomendaciones.push('Tu \xedndice de masa corporal indica que est\xe1s en la categor\xeda de "bajo peso". Consulta a un profesional de la salud para evaluar tu situaci\xf3n.'),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Aseg\xfarate de consumir suficientes calor\xedas y nutrientes para alcanzar un peso saludable. Incluye alimentos ricos en prote\xednas, carbohidratos y grasas saludables en tu dieta.")):this.indiceMasaCorporal>=25&&this.indiceMasaCorporal<30?(this.recomendaciones.push('Tu \xedndice de masa corporal indica que est\xe1s en la categor\xeda de "sobrepeso". Considera mejorar tu alimentaci\xf3n y hacer ejercicio de forma regular.'),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Opta por una dieta equilibrada y moderada en calor\xedas. Incrementa el consumo de frutas, verduras, granos enteros y prote\xednas magras, y limita el consumo de alimentos procesados y altos en grasas saturadas y az\xfacares a\xf1adidos.")):this.indiceMasaCorporal>=30&&(this.recomendaciones.push('Tu \xedndice de masa corporal indica que est\xe1s en la categor\xeda de "obesidad". Es importante que busques ayuda de un profesional de la salud para mejorar tu estado de salud.'),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Busca una dieta equilibrada y adecuada en calor\xedas. Prioriza alimentos naturales, como frutas, verduras, granos enteros y prote\xednas magras, y reduce la ingesta de alimentos procesados, grasas saturadas y az\xfacares a\xf1adidos.")),this.indiceCinturaTalla>=.5&&this.indiceCinturaTalla<=.6?this.recomendaciones.push("Tu \xedndice cintura-talla indica que tienes un nivel de grasa abdominal saludable."):this.indiceCinturaTalla>.6&&(this.recomendaciones.push("Tu \xedndice cintura-talla indica que tienes un nivel de grasa abdominal elevado. Considera hacer ejercicio y ajustar tu dieta para reducirlo."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Opta por una dieta equilibrada y baja en calor\xedas. Prioriza alimentos ricos en fibra, como frutas, verduras y granos enteros, y limita el consumo de alimentos procesados y az\xfacares a\xf1adidos."),this.densidad>1.1?(this.recomendaciones.push("Tu densidad corporal est\xe1 por encima del rango saludable. Considera realizar cambios en tu dieta y aumentar tu actividad f\xedsica."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Busca una alimentaci\xf3n equilibrada y adecuada en calor\xedas. Prioriza alimentos naturales y nutrientes esenciales, y limita la ingesta de alimentos procesados y grasas saturadas.")):this.densidad<1&&(this.recomendaciones.push("Tu densidad corporal est\xe1 por debajo del rango saludable. Aseg\xfarate de consumir suficientes nutrientes y considera consultar a un profesional de la salud."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Prioriza una dieta equilibrada y suficiente en calor\xedas. Incluye alimentos ricos en prote\xednas, carbohidratos y grasas saludables, y evita el consumo excesivo de alimentos ultraprocesados.")),this.perimetroCintura>90&&(this.recomendaciones.push("Tu per\xedmetro de cintura est\xe1 elevado. Trabaja en reducir la grasa abdominal a trav\xe9s de ejercicios cardiovasculares y una alimentaci\xf3n saludable."),this.recomendaciones.push("Recomendaci\xf3n de alimentaci\xf3n: Opta por una dieta equilibrada y baja en calor\xedas. Prioriza alimentos ricos en fibra, como frutas, verduras y granos enteros, y limita el consumo de alimentos procesados y az\xfacares a\xf1adidos.")))}pushData(){try{this.nombre=this.datosFormulario.nombre,this.apellidos=this.datosFormulario.apellidos,this.cedula=this.datosFormulario.cedula,this.edad=this.datosFormulario.edad,this.sexo=this.datosFormulario.sexo,this.pesoTeorico=this.datosFormulario.pesoTeorico.toFixed(2),this.porcentajePesoTeorico=this.datosFormulario.porcentajePesoTeorico.toFixed(2),this.cambioPesoReciente=this.datosFormulario.cambioPesoReciente.toFixed(2),this.imc=this.datosFormulario.imc.toFixed(2),this.c=this.datosFormulario.c.toFixed(2),this.m=this.datosFormulario.m.toFixed(2),this.densidad=this.datosFormulario.densidad.toFixed(2),this.porcentajeGrasa=this.datosFormulario.porcentajeGrasa.toFixed(2),this.masaGrasa=this.datosFormulario.masaGrasa.toFixed(2),this.areaTotalBrazo=this.datosFormulario.areaBrazoTotal.toFixed(2),this.areaMuscularBrazo=this.datosFormulario.areaBrazoTotal.toFixed(2),this.areaGrasaBrazo=this.datosFormulario.areaGrasaBrazo.toFixed(2),this.porcentajeGrasaBrazo=this.datosFormulario.porcentajeGrasaBrazo.toFixed(2),this.masaMagra=this.datosFormulario.masaMagra.toFixed(2),this.areaMuscularBrazoDisponible=this.datosFormulario.areaMuscularBrazoDisponible.toFixed(2),this.masaMuscularEsqueletica=this.datosFormulario.masaMuscularEsqueletica.toFixed(2),this.perimetroCintura=this.datosFormulario.perimetroCintura.toFixed(2),this.indiceCinturaCadera=this.datosFormulario.indiceCinturaCadera.toFixed(2),this.indiceCinturaTalla=this.datosFormulario.indiceCinturaTalla,this.indiceMasaCorporal=this.datosFormulario.indiceMasaCorporal,this.valorC=this.datosFormulario.valorC,this.valorM=this.datosFormulario.valorM,this.altura=this.datosFormulario.altura,this.pesoReal=this.datosFormulario.pesoReal,this.pesoActual=this.datosFormulario.pesoActual,this.pesoAnterior=this.datosFormulario.pesoAnterior,this.peso=this.datosFormulario.peso,this.triceps=this.datosFormulario.triceps,this.subescapular=this.datosFormulario.subescapular,this.suprailiaco=this.datosFormulario.suprailiaco,this.abdominal=this.datosFormulario.abdominal,this.biceps=this.datosFormulario.biceps,this.crestaIliaca=this.datosFormulario.crestaIliaca,this.musloFrontal=this.datosFormulario.musloFrontal,this.pantorrillaMedial=this.datosFormulario.pantorrillaMedial,this.brazoRelajado=this.datosFormulario.brazoRelajado,this.brazoFlexionado=this.datosFormulario.brazoFlexionado,this.porcentajeMasaMuscularEsqueletica=this.datosFormulario.porcentajeMasaMuscularEsqueletica.toFixed(2),this.pesoTeoricoV=this.datosFormulario.pesoTeoricoV,this.pesoTeoricoM=this.datosFormulario.pesoTeoricoM,this.porcentajePesoTeoricoV=this.datosFormulario.porcentajePesoTeoricoV,this.porcentajePesoTeoricoM=this.datosFormulario.porcentajePesoTeoricoM,this.masaOsea=this.datosFormulario.masaOsea,this.masaResidual=this.datosFormulario.masaResidual,this.masaMuscular=this.datosFormulario.masaMuscular,this.complexionCorporal=this.datosFormulario.complexionCorporal}catch{}}setData(){this.nombre=this.datosFormulario.nombre,this.apellidos=this.datosFormulario.apellidos,this.cedula=this.datosFormulario.cedula,this.edad=this.datosFormulario.edad,this.sexo=this.datosFormulario.sexo,this.pesoTeorico=this.resultado.pesoteorico,this.porcentajePesoTeorico=this.resultado.porcentajepesoteorico,this.cambioPesoReciente=this.resultado.cambiopesoreciente,this.imc=this.resultado.imc,this.c=this.resultado.c,this.m=this.resultado.m,this.densidad=this.resultado.densidad,this.porcentajeGrasa=this.resultado.porcentajegrasa,this.masaGrasa=this.resultado.masagrasa,this.areaTotalBrazo=this.resultado.areatotalbrazo,this.areaMuscularBrazo=this.resultado.areamuscularbrazo,this.areaGrasaBrazo=this.resultado.areagrasabrazo,this.porcentajeGrasaBrazo=this.resultado.porcentajegrasabrazo,this.masaMagra=this.resultado.masamagra,this.areaMuscularBrazoDisponible=this.resultado.areamuscularbrazodisp,this.masaMuscularEsqueletica=this.resultado.masamuscularesqueletica,this.perimetroCintura=this.resultado.perimetrocintura,this.indiceCinturaCadera=this.resultado.indicecinturacadera,this.indiceCinturaTalla=this.resultado.indicecinturatalla,this.indiceMasaCorporal=this.resultado.indicemasacorporal,this.valorC=this.resultado.valorc,this.valorM=this.resultado.valorm,this.altura=this.resultado.altura,this.pesoReal=this.resultado.pesoreal,this.pesoActual=this.resultado.pesoactual,this.pesoAnterior=this.resultado.pesoanterior,this.peso=this.resultado.peso,this.triceps=this.resultado.triceps,this.subescapular=this.resultado.subescapular,this.suprailiaco=this.resultado.suprailiaco,this.abdominal=this.resultado.abdominal,this.biceps=this.resultado.biceps,this.crestaIliaca=this.resultado.crestailiaca,this.musloFrontal=this.resultado.muslofrontal,this.pantorrillaMedial=this.resultado.pantorrillamedial,this.brazoRelajado=this.resultado.brazorelajado,this.brazoFlexionado=this.resultado.brazoflexionado,this.porcentajeMasaMuscularEsqueletica=this.resultado.porcentajemasamuscularesqueletica,this.pesoTeoricoV=this.resultado.pesoteoricov,this.pesoTeoricoM=this.resultado.pesoteoricom,this.porcentajePesoTeoricoV=this.resultado.porcentajepesoteoricov,this.porcentajePesoTeoricoM=this.resultado.porcentajepesoteoricom,this.masaOsea=this.resultado.masaOsea,this.masaResidual=this.resultado.masaresidual,this.masaMuscular=this.resultado.masamuscular,this.complexionCorporal=this.resultado.complexioncorporal}}return(s=r).\u0275fac=function(e){return new(e||s)(a.Y36(m.gz),a.Y36(m.F0),a.Y36(z.eN),a.Y36(f.D))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-resultados"]],decls:270,vars:27,consts:[[3,"translucent"],["name","viewport","content","width=device-width, initial-scale=1"],["slot","start"],[1,"ion-text-center",2,"margin-top","10px"],[2,"height","100%"],[4,"ngFor","ngForOf"],[1,"ion-padding"],["slot","end"]],template:function(e,o){1&e&&(a.TgZ(0,"ion-header",0),a._uU(1,"\n  "),a._UZ(2,"meta",1),a._uU(3,"\n  "),a.TgZ(4,"ion-toolbar"),a._uU(5,"\n    "),a.TgZ(6,"ion-buttons",2),a._uU(7,"\n      "),a._UZ(8,"ion-menu-button"),a._uU(9,"\n    "),a.qZA(),a._uU(10,"\n    "),a.TgZ(11,"ion-title",3),a._uU(12,"Resultados"),a.qZA(),a._uU(13,"\n  "),a.qZA(),a._uU(14,"\n"),a.qZA(),a._uU(15,"\n\n"),a.TgZ(16,"ion-content",4),a._uU(17,"\n  "),a.TgZ(18,"ion-grid"),a._uU(19,"\n    "),a.TgZ(20,"ion-row"),a._uU(21,"\n      "),a.TgZ(22,"ion-col"),a._uU(23,"\n        "),a.TgZ(24,"h2"),a._uU(25,"Recomendaciones"),a.qZA(),a._uU(26,"\n        "),a.TgZ(27,"ion-list"),a._uU(28,"\n          "),a.YNc(29,y,2,1,"ion-item",5),a._uU(30,"\n        "),a.qZA(),a._uU(31,"\n      "),a.qZA(),a._uU(32,"\n    "),a.qZA(),a._uU(33,"\n    "),a.TgZ(34,"ion-row"),a._uU(35,"\n      "),a.TgZ(36,"ion-col"),a._uU(37,"\n        "),a.TgZ(38,"ion-list"),a._uU(39,"\n          "),a.TgZ(40,"ion-item"),a._uU(41,"\n            "),a.TgZ(42,"ion-label",6),a._uU(43,"Nombre:"),a.qZA(),a._uU(44,"\n            "),a.TgZ(45,"ion-note",7),a._uU(46),a.qZA(),a._uU(47,"\n          "),a.qZA(),a._uU(48,"\n          "),a.TgZ(49,"ion-item"),a._uU(50,"\n            "),a.TgZ(51,"ion-label",6),a._uU(52,"Apellido:"),a.qZA(),a._uU(53,"\n            "),a.TgZ(54,"ion-note",7),a._uU(55),a.qZA(),a._uU(56,"\n          "),a.qZA(),a._uU(57,"\n          "),a.TgZ(58,"ion-item"),a._uU(59,"\n            "),a.TgZ(60,"ion-label",6),a._uU(61,"C\xe9dula:"),a.qZA(),a._uU(62,"\n            "),a.TgZ(63,"ion-note",7),a._uU(64),a.qZA(),a._uU(65,"\n          "),a.qZA(),a._uU(66,"\n          "),a.TgZ(67,"ion-item"),a._uU(68,"\n            "),a.TgZ(69,"ion-label",6),a._uU(70,"Edad:"),a.qZA(),a._uU(71,"\n            "),a.TgZ(72,"ion-note",7),a._uU(73),a.qZA(),a._uU(74,"\n          "),a.qZA(),a._uU(75,"\n          "),a.TgZ(76,"ion-item"),a._uU(77,"\n            "),a.TgZ(78,"ion-label",6),a._uU(79,"Sexo:"),a.qZA(),a._uU(80,"\n            "),a.TgZ(81,"ion-note",7),a._uU(82),a.qZA(),a._uU(83,"\n          "),a.qZA(),a._uU(84,"\n          "),a.TgZ(85,"ion-item"),a._uU(86,"\n            "),a.TgZ(87,"ion-label",6),a._uU(88,"Peso Te\xf3rico:"),a.qZA(),a._uU(89,"\n            "),a.TgZ(90,"ion-note",7),a._uU(91),a.qZA(),a._uU(92,"\n          "),a.qZA(),a._uU(93,"\n          "),a.TgZ(94,"ion-item"),a._uU(95,"\n            "),a.TgZ(96,"ion-label",6),a._uU(97,"% Peso Te\xf3rico:"),a.qZA(),a._uU(98,"\n            "),a.TgZ(99,"ion-note",7),a._uU(100),a.qZA(),a._uU(101,"\n          "),a.qZA(),a._uU(102,"\n          "),a.TgZ(103,"ion-item"),a._uU(104,"\n            "),a.TgZ(105,"ion-label",6),a._uU(106,"Cambio de Peso Reciente:"),a.qZA(),a._uU(107,"\n            "),a.TgZ(108,"ion-note",7),a._uU(109),a.qZA(),a._uU(110,"\n          "),a.qZA(),a._uU(111,"\n          "),a.TgZ(112,"ion-item"),a._uU(113,"\n            "),a.TgZ(114,"ion-label",6),a._uU(115,"IMC:"),a.qZA(),a._uU(116,"\n            "),a.TgZ(117,"ion-note",7),a._uU(118),a.qZA(),a._uU(119,"\n          "),a.qZA(),a._uU(120,"\n          "),a.TgZ(121,"ion-item"),a._uU(122,"\n            "),a.TgZ(123,"ion-label",6),a._uU(124,"C:"),a.qZA(),a._uU(125,"\n            "),a.TgZ(126,"ion-note",7),a._uU(127),a.qZA(),a._uU(128,"\n          "),a.qZA(),a._uU(129,"\n          "),a.TgZ(130,"ion-item"),a._uU(131,"\n            "),a.TgZ(132,"ion-label",6),a._uU(133,"M:"),a.qZA(),a._uU(134,"\n            "),a.TgZ(135,"ion-note",7),a._uU(136),a.qZA(),a._uU(137,"\n          "),a.qZA(),a._uU(138,"\n          "),a.TgZ(139,"ion-item"),a._uU(140,"\n            "),a.TgZ(141,"ion-label",6),a._uU(142,"Densidad:"),a.qZA(),a._uU(143,"\n            "),a.TgZ(144,"ion-note",7),a._uU(145),a.qZA(),a._uU(146,"\n          "),a.qZA(),a._uU(147,"\n          "),a.TgZ(148,"ion-item"),a._uU(149,"\n            "),a.TgZ(150,"ion-label",6),a._uU(151,"% Grasa:"),a.qZA(),a._uU(152,"\n            "),a.TgZ(153,"ion-note",7),a._uU(154),a.qZA(),a._uU(155,"\n          "),a.qZA(),a._uU(156,"\n          "),a.TgZ(157,"ion-item"),a._uU(158,"\n            "),a.TgZ(159,"ion-label",6),a._uU(160,"Masa de Grasa:"),a.qZA(),a._uU(161,"\n            "),a.TgZ(162,"ion-note",7),a._uU(163),a.qZA(),a._uU(164,"\n          "),a.qZA(),a._uU(165,"\n          "),a.TgZ(166,"ion-item"),a._uU(167,"\n            "),a.TgZ(168,"ion-label",6),a._uU(169,"\xc1rea Total del Brazo:"),a.qZA(),a._uU(170,"\n            "),a.TgZ(171,"ion-note",7),a._uU(172),a.qZA(),a._uU(173,"\n          "),a.qZA(),a._uU(174,"\n          "),a.TgZ(175,"ion-item"),a._uU(176,"\n            "),a.TgZ(177,"ion-label",6),a._uU(178,"\xc1rea Muscular del Brazo:"),a.qZA(),a._uU(179,"\n            "),a.TgZ(180,"ion-note",7),a._uU(181),a.qZA(),a._uU(182,"\n          "),a.qZA(),a._uU(183,"\n          "),a.TgZ(184,"ion-item"),a._uU(185,"\n            "),a.TgZ(186,"ion-label",6),a._uU(187,"\xc1rea Grasa del Brazo:"),a.qZA(),a._uU(188,"\n            "),a.TgZ(189,"ion-note",7),a._uU(190),a.qZA(),a._uU(191,"\n          "),a.qZA(),a._uU(192,"\n          "),a.TgZ(193,"ion-item"),a._uU(194,"\n            "),a.TgZ(195,"ion-label",6),a._uU(196,"% Grasa del Brazo:"),a.qZA(),a._uU(197,"\n            "),a.TgZ(198,"ion-note",7),a._uU(199),a.qZA(),a._uU(200,"\n          "),a.qZA(),a._uU(201,"\n          "),a.TgZ(202,"ion-item"),a._uU(203,"\n            "),a.TgZ(204,"ion-label",6),a._uU(205,"Masa Magra:"),a.qZA(),a._uU(206,"\n            "),a.TgZ(207,"ion-note",7),a._uU(208),a.qZA(),a._uU(209,"\n          "),a.qZA(),a._uU(210,"\n          "),a.TgZ(211,"ion-item"),a._uU(212,"\n            "),a.TgZ(213,"ion-label",6),a._uU(214,"\xc1rea Muscular del Brazo Disponible:"),a.qZA(),a._uU(215,"\n            "),a.TgZ(216,"ion-note",7),a._uU(217),a.qZA(),a._uU(218,"\n          "),a.qZA(),a._uU(219,"\n          "),a.TgZ(220,"ion-item"),a._uU(221,"\n            "),a.TgZ(222,"ion-label",6),a._uU(223,"Masa Muscular Esquel\xe9tica:"),a.qZA(),a._uU(224,"\n            "),a.TgZ(225,"ion-note",7),a._uU(226),a.qZA(),a._uU(227,"\n          "),a.qZA(),a._uU(228,"\n          "),a.TgZ(229,"ion-item"),a._uU(230,"\n            "),a.TgZ(231,"ion-label",6),a._uU(232,"% Masa Muscular Esquel\xe9tica:"),a.qZA(),a._uU(233,"\n            "),a.TgZ(234,"ion-note",7),a._uU(235),a.qZA(),a._uU(236,"\n          "),a.qZA(),a._uU(237,"\n          "),a.TgZ(238,"ion-item"),a._uU(239,"\n            "),a.TgZ(240,"ion-label",6),a._uU(241,"Per\xedmetro de la Cintura:"),a.qZA(),a._uU(242,"\n            "),a.TgZ(243,"ion-note",7),a._uU(244),a.qZA(),a._uU(245,"\n          "),a.qZA(),a._uU(246,"\n          "),a.TgZ(247,"ion-item"),a._uU(248,"\n            "),a.TgZ(249,"ion-label",6),a._uU(250,"\xcdndice Cintura-Cadera:"),a.qZA(),a._uU(251,"\n            "),a.TgZ(252,"ion-note",7),a._uU(253),a.qZA(),a._uU(254,"\n          "),a.qZA(),a._uU(255,"\n          "),a.TgZ(256,"ion-item"),a._uU(257,"\n            "),a.TgZ(258,"ion-label",6),a._uU(259,"\xcdndice Cintura-Talla:"),a.qZA(),a._uU(260,"\n            "),a.TgZ(261,"ion-note",7),a._uU(262),a.qZA(),a._uU(263,"\n          "),a.qZA(),a._uU(264,"\n        "),a.qZA(),a._uU(265,"\n      "),a.qZA(),a._uU(266,"\n    "),a.qZA(),a._uU(267,"\n  "),a.qZA(),a._uU(268,"\n"),a.qZA(),a._uU(269,"\n")),2&e&&(a.Q6J("translucent",!0),a.xp6(29),a.Q6J("ngForOf",o.recomendaciones),a.xp6(17),a.Oqu(o.nombre),a.xp6(9),a.Oqu(o.apellidos),a.xp6(9),a.Oqu(o.cedula),a.xp6(9),a.Oqu(o.edad),a.xp6(9),a.Oqu(o.sexo),a.xp6(9),a.Oqu(o.pesoTeorico),a.xp6(9),a.Oqu(o.porcentajePesoTeorico),a.xp6(9),a.Oqu(o.cambioPesoReciente),a.xp6(9),a.Oqu(o.imc),a.xp6(9),a.Oqu(o.c),a.xp6(9),a.Oqu(o.m),a.xp6(9),a.Oqu(o.densidad),a.xp6(9),a.Oqu(o.porcentajeGrasa),a.xp6(9),a.Oqu(o.masaGrasa),a.xp6(9),a.Oqu(o.areaTotalBrazo),a.xp6(9),a.Oqu(o.areaMuscularBrazo),a.xp6(9),a.Oqu(o.areaGrasaBrazo),a.xp6(9),a.Oqu(o.porcentajeGrasaBrazo),a.xp6(9),a.Oqu(o.masaMagra),a.xp6(9),a.Oqu(o.areaMuscularBrazoDisponible),a.xp6(9),a.Oqu(o.masaMuscularEsqueletica),a.xp6(9),a.Oqu(o.porcentajeMasaMuscularEsqueletica),a.xp6(9),a.Oqu(o.perimetroCintura),a.xp6(9),a.Oqu(o.indiceCinturaCadera),a.xp6(9),a.Oqu(o.indiceCinturaTalla))},dependencies:[F.sg,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.Ie,i.Q$,i.q_,i.fG,i.uN,i.Nd,i.wd,i.sr],styles:[".page-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;padding:10px}.result-grid[_ngcontent-%COMP%]{margin-top:20px}.result-row[_ngcontent-%COMP%]{margin-bottom:10px}.result-label[_ngcontent-%COMP%]{font-weight:700}.result-value[_ngcontent-%COMP%]{color:#333}"]}),r})()}];let v=(()=>{var s;class r{}return(s=r).\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[m.Bz.forChild(R),m.Bz]}),r})(),P=(()=>{var s;class r{}return(s=r).\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[F.ez,C.u5,i.Pc,v]}),r})()}}]);