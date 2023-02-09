const axios = require('axios');

const getCharById = function (res, id) {
  
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
    }
    );
};

const getCharByDetail = function (res, id) {
  
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
    }
    );
};



module.exports = {
  getCharById,
  getCharByDetail,
};