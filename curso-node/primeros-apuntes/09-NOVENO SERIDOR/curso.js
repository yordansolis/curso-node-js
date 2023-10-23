let infoCursos = {
    'programacion': [
        {
            id: 1,
            titulo: "C++",
            autor: "rober",
            vistas: 2500,
            disponible: true
        }, 
        {
            id: 2,
            titulo: "python",
            autor: "jordan",
            vistas: 1500,
            disponible: false
        },
        {
            id: 3,
            titulo: "Javascritp",
            autor: "juan",
            vistas: 3500,
            disponible: true
        },

    ],
    'matematicas': [
        {
            id: 1,
            titulo: "aprende calculo",
            tema: "calculo",
            nivel: 'basico',
            disponible: true
        },

        {
            id: 2,
            titulo: "aprende algebra",
            tema: "calculo",
            nivel: 'avanzado',
            disponible: true
        },
    ],

}

module.exports.infoCursos = infoCursos;