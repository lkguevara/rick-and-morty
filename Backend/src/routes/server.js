const http = require('http');
const fs = require('fs');
// const characters = require('../utils/data');
const { getCharById } = require('../controllers/index');

const host = 'localhost';
const port = 3001;

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        let id = req.url.split("/").at(-1);
    
        if(req.url.includes("onsearch")) {
            getCharById(res, id)
        }
        if(req.url.includes("detail")) {
            getCharById(res, id)
        }
    })
    
    .listen(port, host);
