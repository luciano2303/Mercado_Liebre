const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3080;

app.listen(port, () => console.log('Servidor corriendo en http://localhost:${port}'));
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.use(express.static('public'));
