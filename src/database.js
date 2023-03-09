const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pinterest',{
    useNewUrlParser: true
})
    .then(db => console.log('db conectada'))
    .catch(err => console.log(err));