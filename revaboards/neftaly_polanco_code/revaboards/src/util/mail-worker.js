/**
 * 1. import/require the NodeJS event module so you can access the EventEmitter object/class
 * 
 * 2. create singleton instance of the MailWorker (should be a subtype of EventEmitter [use prototype, not class syntax])
 *   - properties:
 *     + server: 'fake-smtp-server.com'
 *     + port: 25
 * 
 * 3. Add an event to MailWorker called 'newRegister', when this event is emitted execute a function that "sends" an email
 *    to the newly registered users email addres"
 *   - console.log() a phrase out that says who you are sending it to and what server/port your are using
 * */