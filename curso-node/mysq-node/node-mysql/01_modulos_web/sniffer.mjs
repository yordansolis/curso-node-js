import { error } from 'console';
import { createServer, get } from 'http';

const hostname = 'localhost';
const port = 3000;

const options = {
    host: 'jonmircha.com',
    port: 443,
    path: '/cursos',
};

let htmlCode = '';

const httpClient = ((res) => {
    console.log(`
    El sitio ${options.host} esta funcionando. Codigo de estado: ${res.statusCode},
    mensaje: ${res.statusMessage}
    `);

    res.on('data', (data) => {
        htmlCode += data;
        console.log(data, data.toString());
    });

})


const hppError = error => {
    console.log(`
    le sitio ${options.hostname} no esta disponible ${error.message}
    mensaje: ${res.statusMessage}
    `);
}


const webServer = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(htmlCode);
  };


//instancia cliente HTTP o HTTPs
get(options, httpClient).on("error", hppError);

//instancia servidor local HTTP
createServer(webServer).listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});