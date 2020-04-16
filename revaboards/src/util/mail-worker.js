// /* 
//  * 1. import/require the NodeJS event module so you can access the EventEmitter object/class
//  * 
//  * 2. create singleton instance of the MailWorker (should be a subtype of EventEmitter [use prototype, not class syntax])
//  *   - properties:
//  *     + server: 'fake-smtp-server.com'
//  *     + port: 25
//  * 
//  * 3. Add an event to MailWorker called 'newRegister', when this event is emitted execute a function that "sends" an email
//  *    to the newly registered users email addres"
//  *   - console.log() a phrase out that says who you are sending it to and what server/port your are using
//  * 
const userRepo = require('../repos/user-repo');
const events = require('events');
const User = require('../models/user');

//class MyEmitter extends EventEmitter { }

const test = function (user) {
    // //console.log(events);
    let MailWorker = new events.EventEmitter();
    MailWorker.properties = { server: 'fake-smtp-server.com', port: 25 };
    //console.log(MailWorker);
    const newRegister = function () {
        //plcae holder
        return "newRegister"
    }

    MailWorker.on("newRegister", () => {
        userRepo.getInstance().addNewUser(user, () => {
            console.log(`Email Sent to ${user.email}`)
        });
    });


    MailWorker.emit(newRegister());

    // console.log(MyEmitter);
    // const myEmitter = new MyEmitter();
    // console.log(myEmitter.prototype);
    // myEmitter.on('event', () => {
    //     setImmediate(() => {
    //         console.log('this happens asynchronously');
    //     });
    // });
    // myEmitter.emit('event');
    // return {
    //     getInstance: function () {
    //         //      boolean         if true        if false   
    //         return !instance ? instance = init() : instance; // ternary operators (cool looking if/else)
    //     }
    // };

};

let newUser = new User(0, 'test', 'password', 'Emily', 'Einstein', 'test@revature.com', new Date('09/01/1993'))
test(newUser);