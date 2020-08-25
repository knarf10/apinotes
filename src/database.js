const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/notesapp'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('DataBase is connected'))
    .catch(err => console.log(err));