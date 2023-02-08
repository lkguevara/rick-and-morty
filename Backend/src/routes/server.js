const http = require('http');
const fs = require('fs');
const characters = require('../utils/data');

const host = 'localhost';
const port = 3001;

const notFound = (res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found :(');
}

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        const allUrl = req.url.split('/'); // ["", "rickandmorty", "characters", ":id"] lo que hace es separar el url por el slash y lo guarda en un array
        const id = Number(allUrl.pop()); // lo que hace es eliminar el ultimo elemento del array y lo guarda en una variable
        const url = allUrl.join('/'); // "rickandmorty/characters/" lo que hace es unir todos los elementos del array en un string y compararlos con el url

        if (url === "/rickandmorty/character") {
            const character = characters.find((ch) => ch.id === id);
            if(character){
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(character));
            }else{
                notFound(res)
            }
            
        }
        else if (req.url === "/rickandmorty/characters"){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(characters));

        } else {
            notFound(res)
        }
        
    })
    
    .listen(port, host);
