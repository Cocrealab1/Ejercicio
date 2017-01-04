/*Invocar modo 'string' de JS*/
'use strict';

/*Cargar el model Mongoose 'User'*/

var comentarioModelo = require('mongoose').model('comentarios');
exports.obtenerInf = function(req,res,next){

    var comentario = new comentarioModelo (req.body)


}

