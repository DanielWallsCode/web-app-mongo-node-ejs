const { Router } = require('express');
const {subirImagen, formulario,obtnerImagenes,verImagen, eliminarImagen} = require('../controllers/controller');
const router = Router();


router.get('/',obtnerImagenes);

router.get('/subir', formulario);

router.post('/subir', subirImagen);

router.get('/image/:id', verImagen);


router.get('/image/:id/delete', eliminarImagen);




module.exports = router;