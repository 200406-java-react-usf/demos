/* 
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
 */

 const events = require('events')

 function MailWorker() {
     this.server = 'fake-smtp-server.com'
     this.port = 25;

 }

 MailWorker.prototype.__proto__= events.EventEmitter.prototype;

 const mailWorker = new MailWorker;
 mailWorker.on('newRegister', function(reciepientEmail) {

        console.log(`Sending a welcome email to  ${reciepientEmail} using SMTP server at ${this.server} on port ${this.port}.`);

        //pretend to send a message
        setTimeout(() => {
            console.log('Message successfully sent.');
        }, 1000);
 });

 module.exports = mailWorker