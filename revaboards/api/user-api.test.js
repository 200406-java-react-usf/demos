// .test.js = a test for a javascript file

//import thing to test

const sut = require('./user-api');


//set up test suite
// not asyncronous
// describe('userApi', () => {

//     //description, cb
//     test('should return all users when getAllUsers is called', () => {
        
//         let users = sut.getAllUsers();
//         expect(users.length).toBe(5);

//     });

// });

describe('userApi', () => {

    //description, cb
    test('should return all users when getAllUsers is called', (done) => {
        //assertions - amount of expects within the test
        expect.assertions(2);
        sut.getAllUsers(users => {
            //expects are specific tests you are trying to do
            expect(users).toBeTruthy();
            expect(users.length).toBe(5);
            done();
        });

    });

});