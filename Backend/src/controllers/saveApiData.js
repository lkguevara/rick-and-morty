const axios = require('axios');
const { Character } = require('../DB_connection');

const getApidata = async () => {
    try {
        let i = 1;
        let characterAll = [];
        while (i < 6) {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
            const data = response.data.results;
            data.map(character => {
                characterAll.push({
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    status: character.status,
                    origin: character.origin.name,
                    gender: character.gender,
                    image: character.image
                })
            })
            i++;
        }
        return characterAll;
               
    }
    catch (error) {
        return {error: error.message}
    }

}

const saveApiData = async () => {
    try{
        const characterAll = await getApidata();
        await Character.bulkCreate(characterAll); // retorna un array de objetos con los datos de los personajes creados en la base de datos
        return characterAll;
    }
    catch (error) {
        return {error: error.message}
    }
    
}

module.exports = {
    saveApiData
}
