const express = require("express");
const app = express();
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const {saveApiData} = require("./controllers/saveApiData");
const {sequelize} = require("./DB_connection");

app.use(express.json()); // para que el servidor entienda los json
app.use(morgan("dev")); // para ver las peticiones que se hacen al servidor
app.use(cors()); // comunicando al front la conexion con el back

const port = 3001;



app.use('/rickandmorty', router);

// app.listen(port, async () => {
//     await sequelize.sync({ force: true });
//     await saveApiData();
//     console.log(`Servidor escuchando en puerto ${port}`);
// });

sequelize.sync({ force: true }).then(async () => {
    console.log('Base de datos sincronizada');
    console.log(await saveApiData());
    await saveApiData();
    app.listen(port, () => {
        console.log(`Servidor escuchando en puerto ${port}`);
    });
});



