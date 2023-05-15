//seen and sent message

const seenEventName = "seen";
const sentEventName = "sent";

async function seen() {}

async function sent() {}

/* module.exports.functions = [seen, sent];
module.exports.eventNames = [seenEventName, sentEventName]; */

const messageEvents = {functions:[seen, sent],
    eventNames: [seenEventName, sentEventName]};   
  
export default messageEvents;