import express from 'express';
import registroRoutes from './routes/registro.routes.js';

const app = express();

app.use(express.json());

// Middleware
app.use(registroRoutes);

// Ruta para escuchar el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});