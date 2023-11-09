import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.end('<h1> Hola Mundo mi pirmer servidor! </h1>');
});


app.get('/user/:id-:name-:edad', (req, res) => {

    //http://localhost:3000/user/15-jhrdan-25

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.end(`
        <h1> Hola ${req.params.name} 
        bienvenido a express con id: ${req.params.id} 
        y tienes ${req.params.edad} años	
        </h1>
    `);
});



app.get('/search', (req, res) => {
    //http://localhost:3000/search?id=19&name=jhordan&age=25
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.end(`
        <h1> Hola ${req.query.name} 
        bienvenido a express con id: ${req.query.id} 
        y tienes ${req.query.age} años	
        </h1>
    `);
});



app.listen(3000, () => {
    console.log('Servidor ejecutandose  http://localhost:3000');
})