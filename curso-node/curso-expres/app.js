const express = require('express');
const app = express();


const {infoCursos} = require('./curso.js'); // console.log(infoCursos);


app.get('/', (req, res) => { 
    res.send('Mi primer servidor con EXPRES. Cursos.');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


app.get('/api/cursos/programacion', (req, res) => { 
    res.send(JSON.stringify(infoCursos.programacion))
});


app.get('/api/cursos/matematicas', (req, res) => {
    res.send(infoCursos.matematicas);
});


app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
        const lenguaje = req.params.lenguaje;
        const resultados = infoCursos.cursos.filter(curso => curso.lenguaje === lenguaje);

        if (resultados.length === 0) {
            return res.status(404).send(`No se encontraron lenguajes de ${lenguaje}`);
        }


        res.send(resultados)
});


app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel

    const resultados = infoCursos.cursos.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron lenguajes de ${lenguaje} de nivel ${nivel}`);
    }


    res.send(resultados)
});





const PUERTO = process.env.PORT || 3000;


app.listen(PUERTO, () => {
    console.log(`el servidor esta en el puerto ${PUERTO} ...`)
});