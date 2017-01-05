/*Invocar modo 'string' de JS*/
'use strict';

/*Cargar el model Mongoose 'User'*/

var comentarioModelo = require('mongoose').model('comentarios');


exports.obtenerInf = function(req,res,next){
    
    comentarioModelo.find({},function(err){
      if(err){
         res.send('Error al intentar guardar el comentario.');
      }
      else{res.json(comentario)}

})}

exports.eliminarInf = function(req,res,next,id){

req.comentarioModelo.remove(function (err) {
    if (err) {
      console.log(err)
      return next(err)
   			 }
	});
}

exports.ingresarInf = function(req,res,next){

    var comentario = new comentarioModelo (req.body)
    comentario.save(function(err){
      if(err){
         res.send('Error al intentar guardar el comentario.');
      }
      else{res.json(comentario)}
   });

}
