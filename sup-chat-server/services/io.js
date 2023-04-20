
const socketio = require('socket.io');
let repository = require('../repository/project-repository');
let Project = require('../model/Project');

function initSocketIO(server){

    const io = socketio(server, { cors: {origin: '*'} });

    io.on('connection', async (socket)=>{
        
        let projects = await repository.get();
        socket.emit("getData", projects);

        socket.on('newItem', async (item)=>{
            try {
                repository.add(item);
                projects = await repository.get();

                socket.emit("getData", projects);  
                socket.broadcast.emit("getData", projects);    
            }
            catch(error) {
                socket.emit("error", "server error on add");
            }
        })

        socket.on('itemDelete', async (id)=>{

            await Project.deleteOne({_id: id});
        
            try {
                projects = await Project.find();
                socket.emit("getData", projects);  
                socket.broadcast.emit("getData", projects);    
            }
            catch(error) {
                socket.emit("error", "server error on add");
            }
        })

        socket.on('disconnect', ()=>{
            console.log('user disconnected');
        })
    });
}


module.exports = { init: initSocketIO }