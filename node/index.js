const express = require('express')
const cors = require('cors')
const axios = require('axios'); // Librería para hacer solicitudes HTTP
const jwt = require('jsonwebtoken')
require("dotenv").config()




const app = express()

// Middleware para habilitar CORS
app.use(cors())
app.use(express.json());


app.post('/register', async (req, res) => {
    const { username, password } = req.body // aqui se extrae la información del body
    //validar credenciales
    if (username && password) {
        try {
            // Crear el token
            const credentials = { username: username };

            const accessToken = generateAccessToken(credentials); // Generar el token

            // Enviar el username a la API de FastAPI
            const fastApiUrl = `http://localhost:8000/api/v1/get-user/${username}`;
            const fastApiResponse = await axios.get(fastApiUrl);

            // Si FastAPI valida al usuario, respondemos con éxito
            if (fastApiResponse.status === 200) {
                return res.json({
                    message: "User created and validated successfully",
                    token: accessToken,
                    userData: fastApiResponse.data, // Información adicional que devuelve FastAPI
                });
            }
        } catch (error) {
            // Si FastAPI devuelve un error
            if (error.response && error.response.status === 404) {
                return res.status(404).json({ error: 'Usuario no encontrado en FastAPI' });
            }
            console.error("Error al comunicarse con FastAPI:", error.message);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
    return res.status(400).json({ error: 'Credenciales inválidas' });
})


function generateAccessToken(credentials) {
    return jwt.sign(credentials, process.env.SECRET, { expiresIn: '5m' });
}

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});


const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
