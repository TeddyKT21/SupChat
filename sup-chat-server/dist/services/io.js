/* const socketio = require("socket.io");
const Sup = require("../repository/Sup.js");
const chatEvents = require("./chatio.js");
const messageEvents = require("./messageio.js");
const userEvents = require("./userio.js"); */
import { Server } from "socket.io";
import chatEvents from "./chatio.js";
import messageEvents from "./messageio.js";
import userEvents from "./userio.js";
function addEvents(io, functions, names) {
    for (let i = 0; i < names.length; i++) {
        io.on(names[i], functions[i]);
    }
}
function initSocketIO(server) {
    const io = new Server(server, { cors: { origin: "*" } });
    // const io : socketIO.Server = socketIO(server)
    addEvents(io, chatEvents.functions, chatEvents.eventNames);
    addEvents(io, messageEvents.functions, messageEvents.eventNames);
    addEvents(io, userEvents.functions, userEvents.eventNames);
    // io.on("connection", async (socket) => {
    //   let projects = await Sup.get();
    //   socket.emit("getData", projects);
    //   socket.on("newItem", async (item) => {
    //     try {
    //       Sup.add(item);
    //       projects = await Sup.get();
    //       socket.emit("getData", projects);
    //       socket.broadcast.emit("getData", projects);
    //     } catch (error) {
    //       socket.emit("error", "server error on add");
    //     }
    //   });
    //   socket.on("itemDelete", async (id) => {
    //     await Project.deleteOne({ _id: id });
    //     try {
    //       projects = await Project.find();
    //       socket.emit("getData", projects);
    //       socket.broadcast.emit("getData", projects);
    //     } catch (error) {
    //       socket.emit("error", "server error on add");
    //     }
    //   });
    //   socket.on("disconnect", () => {
    //     console.log("user disconnected");
    //   });
    // });
}
module.exports = { init: initSocketIO };
//# sourceMappingURL=io.js.map