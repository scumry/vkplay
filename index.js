const express = require("express");
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(./db/steam.db)



var app = express();

app.listen(8000, () => {
    console.log("Server is listening on port" + 8000);
});

app.get('/', (req, res) => {
    res.json ('Молодец!')
})

app.get('/games', (req, res) => {
    db.all(`SELECT * FROM GAMES WHERE price > $price`, {$price: 2000}, (err, rows) => {
        res.json(rows)
    })
})

app.get('/games/price/:price', (req, res) => {
    const price = req.params.price
    db.all(`SELECT * FROM GAMES WHERE price > $price`, {$price: price}, (err, rows) => {
        res.json(rows)
    })
})