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
module.exports = (function () {
    let MailWorker;
    let sendMail = false;

    
    //Create an event handler:
    const sendEmail = function () {
        userRepo.getInstance().addNewUser(NewUser, function(email){
            console.log(email);
        })
    }
    
    //Assign the eventhandler to an event:
    MailWorker.on(true, sendEmail);
    
    function newRegister() {
        let property = {
            server: 'fake-smtp-server.com',
            port: 25
        }
    }
 
    return {
        getInstance: function () {
            if (!sendMail) {
                MailWorker = createInstance();
            }
            return MailWorker;
        }
    };
})();

module.exports = (function () {

    const MailWorker = new events.EventEmitter();

    //Create an event handler:
    const sendEmail = function () {
        userRepo.getInstance().addNewUser(NewUser, function(email){
            console.log(email);
        })
    }
    
    //Assign the eventhandler to an event:
    MailWorker.on(true, sendEmail);
    
    //Fire the 'scream' event:
    newRegister.emit(true);
    function init() {
        return {
            getAllUsers,
            getUserById,
            getUserByCredentials,
            addNewUser,
            updateUserById
        };

    }

    return {
        getInstance: function () {
            //      boolean         if true        if false   
            return !instance ? instance = init() : instance; // ternary operators (cool looking if/else)
        }
    };

})();
