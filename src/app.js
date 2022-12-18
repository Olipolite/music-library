const express = require ('express');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter)

//app.post('/artists', (req, res) => {
//res.status(201).json({ name: 'Tmae Impala', genre: 'rock'})
//})

module.exports = app;