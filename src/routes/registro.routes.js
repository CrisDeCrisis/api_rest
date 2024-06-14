import { Router } from 'express';
import { newConnection } from '../dataBase/dataBase.js';

const router = Router();

router.post('/register', async (req, res) => {
    const connection = await newConnection();
    const { nombre, email, contraseña } = req.body;
    await connection.query('INSERT INTO reg_usuarios (nombre, email, contraseña) values (?,?,?)', [nombre, email, contraseña]);
    res.send('Nuevo usuario creado');
    connection.end();
});

router.get('/', (req, res) => {
    res.send('Obtener registro');
});

// router.put('/', (req, res) => {
//     res.send('Modficar registro');
// });

// router.delete('/', (req, res) => {
//     res.send('Eliminar registro');
// });

export default router;