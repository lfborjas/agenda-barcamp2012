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
  { time: '10:00',
    title: 'Registro/Introducción',
    ends_at: new Date(Date.parse("Sun, 21 Apr 2013 10:15 AM GMT-0600")),
    speaker: 'Organizadores BarCamp' },
  { time: '10:15 ',
    title: '',
    speaker: '' },
  { time: '10:45',
    title: '',
    speaker: '' },
  { time: '11:15',
    title: 'Concurso "Emprende con cultura"',
    speaker: '' },
  { time: '11:45',
    title: '',
    speaker: '' },
  { time: "12:15",
    title: "Break/Almuerzo",
    ends_at: new Date(Date.parse("Sun, 21 Apr 2013 1:00 PM GMT-0600")),
    speaker: ""},
  { time: '13:00',
    title: '',
    speaker: '' },
  { time: '13:30',
    title: '',
    speaker: '' },
  { time: '14:00',
    title: 'Bitcoins',
    speaker: 'Fernando Escher' },
  { time: '14:30',
    title: 'Hiperanarquía: la web contra los programadictadores',
    speaker: 'Luis Felipe Borjas' },
  { time: '15:00',
    title: 'Break',
    speaker: '' },
  { time: '15:30',
    title: '',
    speaker: '' },
  { time: '16:00',
    title: '',
    speaker: '' },
  { time: '16:30',
    title: '',
    ends_at: new Date(Date.parse("Sun, 21 Apr 2013 4:55 PM GMT-0600")),
    speaker: '' },
  { time: '16:55',
    title: 'Cierre',
    ends_at: new Date(Date.parse("Sun, 21 Apr 2013 5:00 PM GMT-0600")),
    speaker: 'Organizadores BarCamp' } ]

Meteor.startup(function(){
  Talks.remove({});
  if(!Talks.find().count()){
    talks.forEach(function(talk){
      var starts = new Date(Date.parse("Sun, 21 Apr 2013 "+ talk.time +" GMT-0600"))
        , ends   = new Date(starts.getTime());

      ends.setMinutes(starts.getMinutes()+30);

      Talks.insert(_(talk).defaults({
        room: 1,
        status: "No ha empezado",
        starts_at: starts,
        ends_at: ends
      }));
    });
  }
});
