const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require("dotenv").config()




const app = express()

// Middleware para habilitar CORS
app.use(cors())
app.use(express.json());


app.post('/register', (req, res) => {
    const { username, password } = req.body // aqui se extrae la información del body
    //validar credenciales
    if (username && password) {
        //crear el token
        const  credentials = { username: username }

        const accessToken = generateAccessToken(credentials) // aqui se genera el token, en la funcion y se le pasan las credenciales 

        return res.json({
            message: "User created successfully",
            token: accessToken
        })
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
