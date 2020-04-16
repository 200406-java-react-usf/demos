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

module.exports = (function () {

    let instance;

    function init() {
        const MailWorker = function (user, cb) {
            // //console.log(events);
            let MailWorker = new events.EventEmitter();
            MailWorker.properties = { server: 'fake-smtp-server.com', port: 25 };
            //console.log(MailWorker);
            const newRegister = function () {
                //plcae holder
                return "newRegister"
            }
            MailWorker.on("newRegister", () => {
                userRepo.getInstance().addNewUser(user, (newUser) => {
                    //check email
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUser)) {
                        cb(`Email sent to ${newUser}`);
                        return
                    } else {
                        cb(newUser);
                        return
                    }
                });
            });
            MailWorker.emit(newRegister());
        }
        return { MailWorker }
    }

    return {
        getInstance: function () {
            return !instance ? instance = init() : instance;
        }
    };

})();
