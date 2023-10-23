import axios from "axios";
import chalk from 'chalk';


const API_KEY = '0496e86a94df2d72b3503c5bbc6df981';



async function displayCuidad(city, data) {
    console.log(('Descripcion: ', data.weather[0].description));
    console.log(chalk.green.bold(`\n ${city} \n`));
    console.log(chalk.blue(`Temperatura: ${data.main.temp} \n`));
    console.log(chalk.blue(`Minima: ${data.main.temp_min} \n`));
    console.log(
        chalk.cyan("Humedad: "), 
        data.main.humidity + " %"
    );
    console.log(
        chalk.cyan("Velocidad del viento: "),
        data.wind.speed + " m/s"
    );
}



async function getClima(city) {
    try {


 let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const resp = await axios.get(endpoint, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            }
        }); 

       // console.log(resp);

        return resp.data;


    } catch (error) {
        console.log(chalk.red(error));
        throw new Error(`No se pudo conectar con el servidor de la cuidad ${city}` );
    }
}




function initApp () {


        let city = process.argv[2];
       //console.log(city);
       if (!city) {
            console.log(
                chalk.red('Por favor Ingresa una cuidad: ')
                );
            console.log(
                chalk.blue('Ejemplo: node app.js [nombre cuidad]')
                );
       }

        
        getClima(city).then(
            (data) => displayCuidad(city, data)
         ).catch(err =>  console.log(chalk.red("Error", err)));


}


initApp();