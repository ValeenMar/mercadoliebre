const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT||3000, () => {
    console.log ("Server corriendo en el puerto 3000")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})