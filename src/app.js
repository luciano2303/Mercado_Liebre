const express = require('express');
const app = express();
const path = require('path');

app.listen(3080, () => console.log('Servidor corriendo en http://localhost:3080'));
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