

class Preguntas {
  constructor(preguntas, opciones, respuestaCorrecta, respuestaUsuario,respuestasincorrectas,tema) {
    this.preguntas = preguntas;
    this.opciones = opciones;
    this.respuestaCorrecta = respuestaCorrecta;
    this.respuestaUsuario = respuestaUsuario;
    this.respuestasincorrectas=respuestasincorrectas;
    this.tema=tema;
  }
}
  var tema=  prompt("cual es el tema de la encuesta");
  const preguntasu =[];
  for (let i = 0;i<=2;i++){

 let preguntas = prompt ("ingrese la pregunta"+i);
preguntasu.push(preguntas);
  }
  const rcorrecta=[];
for (let r = 0;r<=2;r++){

  var respuestaCorrecta=prompt("ingrese la respuesta correcta de la pregunta"+r);
  rcorrecta.push(respuestaCorrecta);
}
const rincorrecta =[];
for (let ri = 0;ri<=2;ri++){
  
  var respuestasincorrectas=prompt("ingrese una respuesta incorrecta para la pregunta"+ri);
  rincorrecta.push(respuestasincorrectas);
}
console.log("formulario de",tema);
for (let u=0;u<=2;u++){
 respuestaUsuario = prompt(`${preguntasu[u]}, "a", ${rcorrecta[u]},"b", ${rincorrecta[u]}`);
if (respuestaUsuario=="a"){
console.log("respuesta correcta");
}
if (respuestaUsuario=="b"){
  console.log("respuesta incorrecta");
  }
 
  }
