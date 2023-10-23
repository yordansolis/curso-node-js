/* obner json
const curso = require('./curso.json')

console.log(curso);

console.log(typeof curso);

console.log(curso.titulo);

console.log(curso.temas);

*/


/*convertir de js a json */
let infoCurso = {
    "titulo": "aprendde Node.js",
    "numVista": 12,
    "numLiks": 2553,
    "temas": [
      "Javascrip",
     "Nodes.js"
  ],
    "esPublico": true
  }

  console.log("FORMATO JAVASCRIPT =>", infoCurso);
  console.log(typeof infoCurso);



//para podemos almacenar al servicor se debe convertir a json
// Objeto -> cadena de caracteres
let infoCursoJson = JSON.stringify(infoCurso)

console.log("FORMATO JSON =>",  infoCursoJson);
console.log(typeof infoCursoJson);




// Cadena de caractetes -> Objeto Json
let infoCursoObjeto  =  JSON.parse(infoCursoJson)

console.log("FORMATO OBJETO =>",  infoCursoObjeto);
console.log(typeof infoCursoObjeto);





