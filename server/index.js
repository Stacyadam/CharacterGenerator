const express = require('express')
const app = express()
const data = require('./data.js');

app.get('/', (req, res) => res.send('Character Generator'))
app.get('/users', (req, res) => res.json(data))

app.listen(3001)