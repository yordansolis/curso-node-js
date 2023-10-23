const miURL =new URL('https://www.ejemplo.org/curso/programacion?ordenar=vistas&nicel=1');


//nombre del host : www.ejemplo.org
console.log(miURL.hostname);

//nombre del camino: /curso/programacion
console.log(miURL.pathname);

//parametros Query : URLSearchParams { 'ordenar' => 'vistas', 'nicel' => '1' }
console.log(miURL.searchParams);


//aceder a valores
console.log(typeof miURL.searchParams);
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nicel'));

