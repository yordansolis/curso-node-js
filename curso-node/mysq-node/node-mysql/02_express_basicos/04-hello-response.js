import express from 'express';

const app = express();

app.get('/', (req, res) => {
    // se usa si ya no se va a utilizar mas metodos de response
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send('<h1> Hola con el metodo send! </h1>');
});


app.get('/json', (req, res) => {
   res.json({
       name: 'jhordan',
       age: 25
   })
});

app.listen(3000, () => {
    console.log('Servidor ejecutandose  http://localhost:3000');
})