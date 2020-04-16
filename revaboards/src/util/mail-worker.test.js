const sut = require('./mail-worker.js');
const User = require('../models/user');

describe('mail worker', () => {

    test('should send out email', done => {

        user = new User(1, 'testName', 'password', 'Alice', 'Anderson', 'Test@revature.com', new Date('01/01/1995'));
        
        //expect.assertions(2);
        sut.getInstance().MailWorker(user, (message) => {
            expect(message).toEqual("Email sent to Test@revature.com");
            done();
        });
    });
    test('dup username', done => {

        user = new User(1, 'aanderson', 'password', 'Alice', 'Anderson', 'Test@revature.com', new Date('01/01/1995'));
        
        //expect.assertions(2);
        sut.getInstance().MailWorker(user, (message) => {
            expect(message).toEqual("Error: The provided username is already taken.");
            done();
        });
    });
    test('dup email', done => {

        user = new User(1, 'TEST', 'password', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'));
        
        //expect.assertions(2);
        sut.getInstance().MailWorker(user, (message) => {
            expect(message).toEqual("Error: The provided email is already taken.");
            done();
        });
    });



});