// import { readFileSync, readFileSync } from 'fs';
import {createInterface} from 'readline';
import chalk from 'chalk';
import { log } from 'console';

const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function  displayMeni(){
    console.log(chalk.yellow.bold('🤷Todo App🤦'));
    console.log(chalk.white('Menú de Opciones: '));
    console.log(chalk.white('1. Agregar tarea'));
    console.log(chalk.white('2. Listar tarea'));
    console.log(chalk.white('3. Completar tarea'));
    console.log(chalk.white('4. Salir tarea'));
}

function addTask(){
    rl.question(chalk.blue('\n Ingresa una tarea: '), (task) => {
        tasks.push({task: task, completed: false});
        console.log(chalk.green.bold('\n Tarea Agregada\n'));
        console.log(tasks);
        displayMeni();
        choiseOption();
    });
}


function listaTasks() {
    console.log(chalk.yellow.bold('\n 👨‍💻 Tareas  por hacer ⌨ \n'));

    if (tasks.length === 0) {
        console.log(chalk.yellow('\n No hay tareas por hacer 😆 \n'));
        displayMeni();
        choiseOption();
    }

    tasks.forEach((task, index) => {
        let status = task.completed ? '✔' : '❌';

        if (status.completed) {
            console.log(chalk.greenBright(`\n ${index + 1}. ${status} - ${task.task} \n`));
        } else {

            console.log(chalk.redBright(`\n ${index + 1}. ${status} - ${task.task} \n`));
        }

    });
    choiseOption();
    displayMeni();
}


function completeTask(){
    rl.question(
        chalk.bgMagentaBright('Ingresa la tarea que deseas completar: '),
         (taskNumber) => {
            const index = parseInt(taskNumber) - 1;
            if ((index) => 0 && (index) < tasks.length) {
                tasks[index].completed = true;
                console.log(chalk.green('\n Tarea completada ✅ \n'));   
            }
            choiseOption();
            displayMeni();
    });
}


function choiseOption(){
    rl.question('Elige una opción: ', (chice) => {
        switch (chice) {
                case "1":
                    addTask();
                break;
                case "2":
                    listaTasks();
                break;
                case "3":
                    completeTask();
                break;
                case "4":
                    console.log(chalk.yellowBright('salir tarea 🤞'));
                    rl.close();
                break;
        
            default:
                console.log('Opcion no valida❌');
                displayMeni();
                addTask();
                break;
        }
  
    });
}


displayMeni();
choiseOption();