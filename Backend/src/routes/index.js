const express = require("express");
const router = express.Router()
const {getCharacterId, getDetailID} = require('../controllers/index.js');

let favs = [] // simula la base de datos

// Configurar los routers // primer parametro la url y el segundo la funcion
router.get('/character/:id', getCharacterId); 
router.get('/detail/:detailId', getDetailID);

router.get('/fav', (req, res) => {
    res.status(200).json(favs)
})


router.post('/fav', (req, res) => {
    favs.push(req.body) 
    res.status(200).send('se guardó el personaje a favoritos de manera correcta') // send sirve para enviar texto plano
})


router.delete('/fav/:id', (req, res) => {
    const {id} = req.params
    let characterFilter = favs.filter(char => char.id != Number(id))
    favs = characterFilter

    res.status(200).send('El personaje se eliminó de favoritos')
});


module.exports = router;


