const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smsbd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('BD Corriendo'))
.catch(err => console.log(err));