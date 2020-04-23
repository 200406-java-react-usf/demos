//import nodeJS module
//access eventemitter obj
//create a singleton of mail worker (subtype of event emitter)
    //properties of obj
        //server = 'fake-smtp-server.com'
        //port = 25
//add event to mail worker called 'newRegister'
    // when emitted, execute func that sends email to new user
    //console.log('sending welcome email to 'users email'');
    //what server/port is being used

const events = require('events');

function MailWorker(){

    this.server = 'fake-smtp-server.com';
    this.port = '25';

}

//makes mailworker a prototype of eventemitter
//like mailworker extends event emitter
MailWorker.prototype.__proto__ = events.EventEmitter.prototype;

const mailWorker = new MailWorker();

//listener
mailWorker.on('newRegister', function(recipientEmail){

    console.log(`sending an email to ${recipientEmail} using SMTP server at ${this.server} on port ${this.port}`);

    //pretend to send message
    setTimeout(() => {

        console.log('message sent');

    },1000);

});

module.exports = mailWorker;

