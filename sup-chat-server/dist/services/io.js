import { Server } from "socket.io";
import chatEvents from "./chatio.js";
import messageEvents from "./messageio.js";
import userEvents from "./userio.js";
function addEvents(socket, io, functions, names) {
    console.log('adding events...');
    for (let i = 0; i < names.length; i++) {
        socket.on(names[i], async (data) => await functions[i](data, io, socket));
    }
}

function initSocketIO(server) {
    const io = new Server(server, { cors: { origin: "*" } });
    // const io : socketIO.Server = socketIO(server)
    io.on("connection", (socket) => {
        addEvents(socket, io, chatEvents.functions, chatEvents.eventNames);
        addEvents(socket, io, messageEvents.functions, messageEvents.eventNames);
        addEvents(socket, io, userEvents.functions, userEvents.eventNames);
    });
}
export default initSocketIO;

//# sourceMappingURL=io.js.map