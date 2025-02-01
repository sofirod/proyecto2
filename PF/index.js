function encuesta (){
   var preguntas=[""];
   var respuestac=[""];
   var respuestai=[""];
   
   

for(let i=1;i<=8;i++){
    var pregunta = prompt ("ingrese una pregunta");
    var respuestacorrecta=prompt("ingrese la respuesta correcta de la pregunta",i);
    var respuestaincorrecta=prompt("ingrese una respuesta incorrecta para la pregunta",i);
    preguntas.push(pregunta);
    respuestac.push(respuestacorrecta);
    respuestai.push(respuestaincorrecta);
}
for(let u=1;u<=8;u++){
var respuestausuario=prompt(preguntas,(u),("respoonda las preguntas(opciones:a/b)"));
console.log("a",respuestai(u),("b"),respuestac(u));
if (respuestausuario==a){
    console.log("respuesta incorrecta");
}
if(respuestausuario==b){
    console.log("respuesta correcta");
}
else{
    console.log("seleccione una opcion valida");
}
}

}
encuesta()
