/*
For posterity
csv.split("\n").map(function(m){
  return m.match(/\d+,(.*) P.M.,(.+),(.+),.+/)
}).filter(function(e){
  return e!==null
}).map(function(h){
  return {time:h[1],title:h[2],speaker:h[3]}
});
*/

talks = [ 
  { time: '2:00',
    title: 'Introducción al evento',
    speaker: 'Organizadores BarCamp' },
  { time: '2:15 ',
    title: 'Uso de software libre y aplicaciones de código abierto',
    speaker: 'Jamileth Velásquez' },
  { time: '2:45',
    title: 'Software libre y su aplicación en la arquitectura',
    speaker: 'Hector David Hernández' },
  { time: '3:15',
    title: '"Realidad Aumentada, aplicaciones"',
    speaker: 'Eduardo Irías' },
  { time: '3:45',
    title: 'Desarrollo con JavaScript y Node.js',
    speaker: 'Alejandro Morales' },
  { time: '4:45',
    title: 'Hacking del lenguaje corporal',
    speaker: 'Reniery O\'Hara' },
  { time: '5:15',
    title: 'Herramientas para mejorar la experiencia al desarrollar aplicaciones y sitios web',
    speaker: 'Cristian Garner' },
  { time: '5:45',
    title: 'El modelo de programación GPGPU',
    speaker: 'José Alejandro Matute' },
  { time: '6:15',
    title: 'Titulo pendiente',
    speaker: 'Luis Felipe Borjas' },
  { time: '6:45',
    title: 'Interfaces alternativas para la expresión artística',
    speaker: 'Didier Cabrera' },
  { time: '7:15',
    title: 'Rescate de la Antigua Penitenciería Central',
    speaker: 'Colectivo Acción Hormiga' },
  { time: '8:15',
    title: 'Cierre',
    speaker: 'Organizadores BarCamp' } ]

Meteor.startup(function(){
  if(!Talks.find().count()){
    talks.forEach(function(talk){
      Talks.insert(_(talk).extend({active: false}));
    });
  }
});
