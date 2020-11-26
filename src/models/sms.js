const {Schema, model} = require('mongoose');

const newSchema = new Schema({
    Body: {
        type: 'String',
        require: true
    },
    From: {
        type: 'String',
    },
    To: {
        type: 'String'
    }
}, {
        timestamp: true
});

module.exports = model('sms', newSchema);