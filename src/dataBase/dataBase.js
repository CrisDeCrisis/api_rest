import { createConnection } from 'mysql2/promise';

// Función para crear una nueva conexión a la base de datos
export const newConnection = async () => {
    const connection = await createConnection({
        host: "localhost", // IP del servidor donde se aloja la bd
        user: "root",
        database: "rest_api" // El nombre de la base de datos
    })
    return connection
}