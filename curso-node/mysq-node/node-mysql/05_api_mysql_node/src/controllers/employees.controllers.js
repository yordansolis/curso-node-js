import { pool } from '../db.js';


export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
}


export const createEmployee = async (req, res) => {

    try {
        const { name, salary } = req.body;
        const [resRows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);

    res.send({
        id: resRows.insertId,
        name,
        salary
    });
        
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

    
}

export const getIdEmployees = async (req, res) => {
   
    try {
        const [resEmployee] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
        if (!resEmployee.length) {
            return res.status(404).json({
                message: 'Employee not found'
            });
    
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
;
}


export const updateEmployee = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, salary } = req.body;
    
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
    
        if (!result.affectedRows) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }
    
        const [row] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
    
        res.json(row[0]);
    } catch (error) {
        return res.status(500).json({
            message: error
        })
        
    }
 
}


export const deleteEmployee = async (req, res) => {
    
    try {

        const [rest] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        if (!rest.affectedRows) {
            return res.status(404).json({
                message: 'Employee not found'
            });
    
        }
        res.send('Employee deleted');
        
    } catch (error) {
        return res.status(500).json({
            message: error
        })
        
    }


}