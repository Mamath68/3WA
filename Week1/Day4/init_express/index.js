import express from 'express';
import data from './data.js';
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to my first API')
})
app.get('/movies', (req, res) => {
    res.send(data)
})

app.get('/movies/:id', (req, res) => {
    let id = req.params.id
    let movie = data.find(movie => movie.id === parseInt(id))
    res.json(movie)
})

app.post('./movies', (req, res) => {
    let movie = {
        id: data.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        price: req.body.price
    }
    data.push(movie)
    res.json(data)
})


app.listen(port, () => console.log(`The server run on port : ${port}`))