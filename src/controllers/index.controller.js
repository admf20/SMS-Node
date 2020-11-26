const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {SendMessage} = require('../twilio/send-sms');
const SMS = require('../models/sms');

const indexControllers = async (req, res) => {
    const message = await SMS.find().lean();
    res.render('index', {message});
 };

 const PostMessage = async (req, res) => {
    const {message, phone} = req.body;
    if(!message || !phone) return res.json('No hay mensaje o no hay un numero valido!!');

    const result = await SendMessage(req.body.message, req.body.phone);
    console.log(result.sid);

    await SMS.create({Body:req.body.message, To:req.body.phone})
    res.redirect('/');
 };

const reciveMessage = async (req, res) => {
   
    console.log(req.body.Body);
    console.log(req.body.From);
    const SaveSMS = await SMS.create({
        Body: req.body.Body,
        From: req.body.From
    });

    const twimss = new MessagingResponse();
    twimss.message('Mensaje Recibido Correctamente');
    res.send(twimss.toString());
};

module.exports = {
    indexControllers,
    PostMessage, 
    reciveMessage
};