import { get } from 'http';

const urlSite = {
    hostname: 'jonmircha.com',
    port: 80,
    path: '/cursos',
}

get(urlSite, (res) => {
    console.log(`
    El sitio ${urlSite.hostname}
    esta funcionando. Codigo de estado: ${res.statusCode},
    mensaje: ${res.statusMessage}
    `);
}).on('error', (err) => {
    console.log(`
      El site no esta disponible ${err.message}
    `);
})