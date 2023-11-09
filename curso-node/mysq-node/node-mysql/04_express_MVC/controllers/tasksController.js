let tasks = [
    {id: 1, title: 'Tarea 1', completed: false},
    {id: 2, title: 'Tarea 2', completed: true},
];


const getAllTasks = (req, res)=>{
    res.render('index', { title: 'Tareas', tasks });
}

const getAddTasks = (req, res)=>{}
const addTasks = (req, res)=>{}

const getEditTasksForm = (req, res)=>{}
const editTask = (req, res)=>{}

const completedTask = (req, res)=>{}
const uncompletedTask = (req, res)=>{}

const deleteTask= (req, res)=>{}



export default {
    getAllTasks,

    getAddTasks,       
    addTasks,

    getEditTasksForm,
    editTask,

    completedTask,
    uncompletedTask,

    deleteTask
}

