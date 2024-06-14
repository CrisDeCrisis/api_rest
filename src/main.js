import express from 'express';
import router from './routes/registro.routes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;
// Middleware para que express pueda entender los datos que vienen en formato JSON
app.use(express.json());
app.use(cors());



app.use('/api/auth', router);

// Ruta para escuchar el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});