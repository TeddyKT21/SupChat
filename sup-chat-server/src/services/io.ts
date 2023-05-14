import {Server} from "socket.io";
import {Sup} from "../repository/Sup.js"
import chatEvents from "./chatio.js";
import messageEvents from "./messageio.js";
import userEvents from "./userio.js";

function addEvents(io, functions, names) {
  for (let i = 0; i < names.length; i++) {
    io.on(names[i], functions[i]);
  }
}

export function initSocketIO(server) {
  const io = new Server(server, { cors: { origin: "*" }}); 
  
  addEvents(io, chatEvents.functions, chatEvents.eventNames);
  addEvents(io, messageEvents.functions, messageEvents.eventNames);
  addEvents(io, userEvents.functions, userEvents.eventNames);
}