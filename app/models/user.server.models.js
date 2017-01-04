/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*cargar el módulo Mongoose y el objeto Schema */
var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;

/*Definir un nuevo UserSchema*/
var comentariosSchema = new Schema ({
  
	comentario:{type:String,required:'Comentario requerido'},
	usuario:{type:String,required:'Usuario requerido'}

  }); ///cambiar por cualquier base de datos

/*crear el modelo 'user' a partir de 'UserSchema'*/
mongoose.model('comentarios', comentariosSchema);
