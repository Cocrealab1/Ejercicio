/*Invocar modo 'string' de JS*/
'use strict';

/*Cargar el model Mongoose 'User'*/

var comentarioModelo = require('mongoose').model('comentarios');
exports.obtenerInf = function(req,res,next){
    var comentario = new comentarioModelo (req.body)
}

exports.eliminarInf = function(req,res,next,id){

req.comentarioModelo.remove(function (err) {
    if (err) {
      console.log(err)
      return next(err)
   			 }
	});
}
