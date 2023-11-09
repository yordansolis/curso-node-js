import {Router} from 'express';
import {getEmployees, 
        createEmployee,
        updateEmployee,
        deleteEmployee,
        getIdEmployees } from 
        './../controllers/employees.controllers.js';
// import {pool} from '../db.js';

const router = Router();

router.get('/employees', getEmployees)

router.get('/employees/:id', getIdEmployees)

router.post('/employees', createEmployee)

/** No se uso el put porque la Idea del PUT es modificar los datos
 * sin embargo el PATH nos permite solo actualizar 1 dato del registro
 */
router.patch('/employees/:id',updateEmployee)

router.delete('/employees/:id', deleteEmployee)


export default router;
