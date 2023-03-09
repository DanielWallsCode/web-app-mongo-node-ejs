const { response, request } = require("express");
const Image = require('../models/image');
const { unlink } = require('fs-extra');
const path = require('path');

const obtnerImagenes = async(req = request, res = response) => {
   const images = await Image.find();
   res.render('index',{images});
}

const formulario = (req = request,res = response) => {
    res.render('upload');
}

const subirImagen = async(req = request, res = response) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description; 
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save()

    res.redirect('/');
}

const verImagen = async(req = request,res = response) => {
    const {id} = req.params;
    const image = await Image.findById(id);
    res.render('profile',{image});
}

const eliminarImagen = async(req=request,res= response) =>{
    const {id} = req.params;
    const image = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + image.path));
    res.redirect('/')

}


module.exports = {
    formulario,
    subirImagen,
    obtnerImagenes,
    verImagen,
    eliminarImagen
}