const {Router} = require('express');
const router = Router();

const {indexControllers, PostMessage, reciveMessage} = require('../controllers/index.controller')

//nos trae todos los datos de inicio 
router.get('/', indexControllers);

//para enviar el mensaje desde el sitio al celular
router.post('/send-sms', PostMessage);

router.post('/sms', reciveMessage);

module.exports = router;