/*Invocar el modo JavaScript 'strict'*/
'use strict';

/*cargar el módulo Mongoose y el objeto Schema */
var mongoose = require ('mongoose'),
    Schema = mongoose.Schema;

/*Definir un nuevo UserSchema*/
var imagenSchema = new Schema ({
  imagen: {
    type:String,
    required: 'Url de la imgane obligatoria'
  },
  comentario: String
}/*,{collection : 'imagenes'}*/); ///cambiar por cualquier base de datos

/*crear el modelo 'user' a partir de 'UserSchema'*/
mongoose.model('imagenes', imagenSchema);
