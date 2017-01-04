/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*Cargar el controller 'users'*/
var comentarios = require('../../app/controllers/users.server.controllers');

/*Define el método routes module*/
module.exports = function(app) {
    //Configura la ruta base para 'users'
    app.route('/guardarComentario')
    	.post(comentarios.ingresarInf)
    	.get(comentarios.obtenerInf)
    	.delete(comentarios.eliminar.Inf)

    app.get('/hola',function(req, res){
      res.send('hola')
    })
};
