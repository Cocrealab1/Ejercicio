/*Invocar modo 'string' de JS*/
'use strict';

/*Cargar el model Mongoose 'User'*/
var Imagen = require('mongoose').model('imagenes');

/*Crear un nuevo método controller 'create'*/
exports.create = function(req, res, next) {
    //Crear una nueva intancia del model Mongoose 'user'

    var imagen = new Imagen(req.body);

    //usar el metodo 'save' para salvar el nuevo documento user
    imagen.save(function(err, imagenes) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
          console.log('creando');
            //Usar el objeto 'response' para enviar una respuesta JSON a una base
            res.json(imagenes);
        }
    })
}

/*Crear un nuevo método controller 'create'*/
exports.list = function(req, res, next) {
    //Usa el método static 'user' 'find' para recuperrar la lista de usuarios
    Imagen.find({}, function(err, imagen) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(Imagen);
        }
    })
}

/*exports.read = function(req, res) {
    res.json(req.user);
}*/

/*Crear un nuevo método controller 'userByID'*/
/*exports.userByID = function(req, res, next, id) {
    // Usar el método static 'findOne' de 'User' para recurpar un usuario especifico
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //configurar la propiedad 'req.user'
            req.user = user;

            //Llamar al siguiernte middleware
            next();
        }
    });
}*/

/*Crear un nuevo método controller 'update'*/
/*exports.upDate = function(req, res, next, id) {
    // Usar el método static 'findOne' de 'User' para recurpar un usuario especifico
    User.findByIDAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(users);
        }
    })
}*/

/*Crear un nuevo método controller 'update'*/
/*exports.delete = function(req, res, next, id) {
    //Usar el método 'remove' de la instancia 'User' para eliminar documentos
    req.user.remover(function(err) {
        if (err) {
            //Llamar al siguiente meddleware con el mensaje de error
            return (next(err));
        } else {
            //Usar el objeto 'response' para enviar una respuesta JSON
            res.json(req.users);
        }
    })
}*/

/*NOTA*/
/* find(objetoConsulta, String campos que se deben de devolver, opciones que pueden aparecer o no, callback  )*/
/*  User.find({}, 'usuario email',{
  skip:10,
  limit;10
}, function(err, users))*/
