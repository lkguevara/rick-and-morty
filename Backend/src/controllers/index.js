const axios = require('axios');


const getCharacterId = async function (req, res) {
  try {
    //  se obtiene el id de la url por params y se hace la peticion a la api de rick and morty con axios 
    const {id} = req.params;
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const data = response.data;

    // si todo sale bien se ejecuta el codigo de abajo creando un personaje
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      image: data.image,
      gender: data.gender,
      status: data.status
    }
    // se envia el personaje creado
    res.status(200).json(character);
  }
  // si algo sale mal se ejecuta el catch y se envia un mensaje de error
  catch (error) {
    res.status(404).send({error: 'Algo salió mal'});
  }

};

const getDetailID = async function (req, res) {
  try{
    const {detailId} = req.params;
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${detailId}`);
    const data = response.data;

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      image: data.image,
      gender: data.gender,
      status: data.status,
      origin: data.origin
    }

    res.status(200).send(character)
  }
  catch (error) {
    res.status(404).send({error: 'Algo salió mal'});
  }
};

const getAllChars = async () => {
  try {
      const allChars = await Character.findAll();
      return allChars;
  }
  catch (error) {
      return {error: error.message}
  }
}






module.exports = {
  getCharacterId, 
  getDetailID,
  getAllChars

};