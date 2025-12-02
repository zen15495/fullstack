function createLogEntry(message) {
    const now = new Date();
    const timeZone = now.toLocaleTimeString('th-TH');
    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();
    const logMessage = message.toUpperCase();
    return `[${timeZone}] [ID: ${eventId}] - ${logMessage}`;
}
const log = createLogEntry("User logged successfully");
console.log(log);   