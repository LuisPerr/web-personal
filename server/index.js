const mongoose = require('mongoose');
const app = require('./app');

const { API_VERSION, IP_SERVER, PORT_DB, NAME_DB, port } = require('./config');

mongoose.set('useFindAndModify', false);
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/${NAME_DB}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err
    } else {
        console.log('La conexion a la BD se relizo con exito');

        app.listen(port, () => {
            console.log('############################');
            console.log('######### API REST #########');
            console.log('############################');
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
        });
    };
});