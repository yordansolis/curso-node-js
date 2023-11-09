import { parse } from 'url';

const urlString = 
"https://www.ejemplo.com:800/ruta?parametro1=valor1&parametro2=valor2";


const pasedUrls = parse(urlString, true)

console.log("Protocolo:",  pasedUrls.protocol);
console.log("hostname:", pasedUrls.hostname);
console.log("PathName:", pasedUrls.pathname);
console.log("Parametros de consulta | Query: ", pasedUrls.query);

