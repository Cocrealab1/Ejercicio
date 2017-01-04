/*Obtener el modulo de dependencias*/
var config = require('./config'),
    express = require('express'),
    mongodb = require('mongodb'),
    bodyParser = require('body-parser');

/*Definir el método de configuración de Express*/
module.exports = function() {
    //Crear una nueva instancia de la aplicacion Express
    var app = express();

    //configurar el middleware 'body-parser' y el 'method-override'
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    //Configuarar el motor view de la aplicacion y el directorio de 'views'
    app.set('views', './app/views');
    app.set('view engine', 'ejs');//estudiar!!!!!!

    //Cargar los archivos de enrutamiento
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    //Configurar el servidor de archivos estáticos
    app.use (express.static('./public'));

    //Devolver la instancia de la aplicación Express
    return app;
}
