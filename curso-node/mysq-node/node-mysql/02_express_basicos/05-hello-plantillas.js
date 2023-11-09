import express from 'express';

const app = express();

app.get('/plantilla', (req, res) => {
    res.redirect(301, 'https://jonmircha.com');
});


app.get('/plantilla', (req, res) => {
    // no es necesario especificar el protocolo de respuesta 301
    res.render('https://jonmircha.com');
});


app.listen(3000, () => {
    console.log('Servidor ejecutandose  http://localhost:3000');
})