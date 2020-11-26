const socketIO =  require('socket.io');

 const Connection = server => {
    const io = socketIO.listen(server);

        io.on('connection', newsocket => {
            console.log("hay un usuario conectado con socket");
        })
 };

 module.exports = {Connection};