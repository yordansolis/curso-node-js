import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.end('<h1> Hola Mundo mi pirmer servidor! </h1>');
    console.log(req);
    console.log(res);

});


app.listen(3000, () => {
    console.log('Servidor ejecutandose  http://localhost:3000');
})