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


    //second test for getbyid with error handling in it

    test('should return correct user when proper id given', done =>{
        expect.assertions(2);
        sut.getUserById(1,user =>{

            expect(user).toBeTruthy();
            expect(user.id).toBe(1);
            done();
        });

    });


    test('should throw bad req error when given something other than a number', done => {

        sut.getUserById('1', ()  => {}, err => {
            expect.assertions(2);
            expect(err).toBeTruthy();
            expect(err).toEqual('bad request given');
            done();

        });

    });

    test('should throw bad req error when given something other than a number', done => {

        sut.getUserById(2.4, ()  => {}, err => {
            expect.assertions(2);
            expect(err).toBeTruthy();
            expect(err).toEqual('bad request given');
            done();

        });

    });

    test('should thrown not found when given something other than a number', done => {

        sut.getUserById(100, ()  => {}, err => {
            expect.assertions(2);
            expect(err).toBeTruthy();
            expect(err).toEqual('no user found');
            done();

        });

    });

});