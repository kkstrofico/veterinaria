const express = require('express')
const cors = require('cors')


const app = express()

// Middleware para habilitar CORS
app.use(cors())

app.get('/api/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, name: "Camilo", lastName: "Andres" },
        { id: 2, name: "Laura", lastName: "Gonzalez" },
        { id: 3, name: "Carlos", lastName: "Perez" },
    ];;
    res.json(usuario); // Envía el objeto al frontend
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
