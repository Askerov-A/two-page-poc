var express = require('express');
var app = express();
var fs = require("fs");

var cors = require('cors');
var data = require('./data.json');
var popularData = require('./popular-data.json');

var counter = 0;
app.use(cors());
app.get('/data', function (req, res) {

    let data = {
        time: new Date(),
        client: req.query.client,
        page: req.query.page,
        when: req.query.when,
        counter: counter++,
        agent: req.header('User-Agent')
    }
    console.log(data.time, "Get Data: ", "client=",data.client,"page=", data.page, "when=", data.when, "counter=" , data.counter);
    res.end(JSON.stringify(data))
})

app.get('/items', function (req, res) {
    res.end(JSON.stringify(data));
});

app.get('/popular', function (req, res) {
    res.end(JSON.stringify(popularData));
});

app.get('/static-data', function (req, res) {
    const data = {
        data: 'Hello, I am static data',
    }
    res.end(JSON.stringify(data));
})

app.get('/games', function (req, res) {
    let client = "browser"
    if (req.header('User-Agent').includes("node-fetch")) {
        client = "nodejs"
    }
    let category = req.query.category ? req.query.category : "";
    let games = []
    for(var i = 0; i < req.query.count;i++) {
        games.push({
            id: i,
            title: category + " game " + i
        });
    }
    let data = {
        client: client,
        counter: counter++,
        games: games
    }
    console.log(new Date(), "GET: games: ", `client=${client}`, `counter=${counter}`, `category=${category}`, `gamesCount=${req.query.count}`)
    res.end(JSON.stringify(data))
})

app.get('/game', function (req, res) {
    let client = "browser"
    if (req.header('User-Agent').includes("node-fetch")) {
        client = "nodejs"
    }

    let data = {
        client: client,
        counter: counter++,
        game: {
            id: req.query.id,
            title: "Game " + req.query.id
        }
    }
    console.log(new Date(), "GET: game: ", `client=${client}`, `counter=${counter}`, `gameId=${req.query.id}`)
    res.end(JSON.stringify(data))
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Service is listening at http://%s:%s", host, port)
})