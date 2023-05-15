import http from "http";
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

export function initSocketIO(server: http.Server) {
  const io = new Server(server, { cors: { origin: "*" } }); 
  // const io : socketIO.Server = socketIO(server)
  addEvents(io, chatEvents.functions, chatEvents.eventNames);
  addEvents(io, messageEvents.functions, messageEvents.eventNames);
  addEvents(io, userEvents.functions, userEvents.eventNames);

  io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  });
}