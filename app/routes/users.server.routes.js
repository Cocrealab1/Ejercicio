/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*Cargar el controller 'users'*/
var imagenes = require('../../app/controllers/users.server.controllers');

/*Define el método routes module*/
module.exports = function(app) {
    //Configura la ruta base para 'users'
    app.route('/imagen')
        .post(imagenes.create)
        .get(imagenes.list);
    app.get('/hola',function(req, res){
      res.send('hola')
    })
};
