const config = require('../config');
const TWILIO_ACCOUNT_SID='AC056135bf72312c4ff60235aa5d2ef839';
const TWILIO_AUTH_TOKEN='c7a3a138d552e38bbd7f842a79afd7a7';

const client = require('twilio')(TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN);

/**
 * 
 * @param {string} body  - mensaje que se va a enviar
 * @param {string} phone - numero del celular
 */

async function SendMessage(body, phone){
    try {
        const message = await client.messages
            .create({
                body: body,
                from: '+12073832191',
                to: '+57'+phone
            })
            return message;   
    } catch (error) {
        console.log(error);
    }
}

module.exports = {SendMessage}; 