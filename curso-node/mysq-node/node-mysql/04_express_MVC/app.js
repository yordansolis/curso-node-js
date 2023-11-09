import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from './controllers/tasksController.js';
import errorControllers from './controllers/errorControllers.js';


// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const app = express();
// const port = 3000;


// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.get('/', taskController.getAllTasks);

app.get('/add', taskController.getAddTasks);
app.post('/add', taskController.addTasks);

app.get('/edit/:id', taskController.getEditTasksForm);
app.post('/edit/:id', taskController.editTask);

app.get('/completed/:id', taskController.completedTask);
app.get('/completed/:id', taskController.uncompletedTask);

app.get('/delete/:id', taskController.deleteTask);

app.use(errorControllers.error404);


app.listen(port, () => {
    console.log(`Servidor ejecutandose en
     http://localhost:${port}`);
})