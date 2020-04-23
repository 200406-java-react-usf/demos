// .test.js = a test for a javascript file

//import thing to test

const sut = require('./user-repo');
const User = require('../models/user')


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

    // test('should be a singleton', () => {

    //     let reference1 = sut.getInstance();
    //     expect(reference1).toBeTruthy();
    //     let reference2 = sut.getInstance();
    //     expect(reference1).toEqual(reference2);

    // });

    // test('testing update user', done => {
    //     let upUser = new User(1,'janderson','password2','John','','janderson@revature.com','');
    //     let result = new User(1,'janderson','password2','John','Anderson','janderson@revature.com',new Date('01/01/1995'));
    //     //expect.assertions(2);
    //     sut.getInstance().updateUser(upUser, newUser => {
    //         expect(newUser).toBe(result);
    //         expect(result).toBeTruthy();
    //         done();
    //     });
    // });


    test('should update user within data source when update user is given valid user', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', 'updated', 'updated', 'updated@revature.com', new Date());
        expect.assertions(2);

        sut.getInstance().updateUser(updatedUser, (err,result) => {

            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            done();

        });

    });

    test('should throw error when update user is given a falsy value', done => {

        expect.assertions(2);
        sut.getInstance().updateUser(null, (err,result) => {

            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should throw error when update user is given an updated user an invalid ID', done => {

        let badUser = new User(-1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'));

        expect.assertions(2);
        sut.getInstance().updateUser(badUser, (err,result) => {

            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should throw error when update user is given an updated user with conflicting username', done => {

        let conflictingUser = new User(1, 'bbailey', 'p4ssw0rd', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'));

        expect.assertions(2);
        sut.getInstance().updateUser(conflictingUser, (err,result) => {

            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should throw error when update user is given an updated user with conflicting email', done => {

        let conflictingUser = new User(1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'bbailey@revature.com', new Date('01/01/1995'));

        expect.assertions(2);
        sut.getInstance().updateUser(conflictingUser, (err,result) => {

            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should throw error when update user is given an updated user with improper values', done =>{

        let improperUser = new User(1, 'aanderson', '', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'));

        expect.assertions(2);
        sut.getInstance().updateUser(improperUser, (err,result) => {

            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    /* test('testing update user', (done) => {

        let upUser = new User(1,'janderson','password2','John','','janderson@revature.com','');
        let result = new User(1,'janderson','password2','John','Anderson','janderson@revature.com',new Date('01/01/1995'));
        expect.assertions(8);
        sut.getInstance().updateUser(upUser, newUser => {
            expect(newUser.id).toBe(result.id);
            expect(newUser.username).toBe(result.username);
            expect(newUser.password).toBe(result.password);
            expect(newUser.firstname).toBe(result.firstname);
            expect(newUser.lastname).toBe(result.lastname);
            expect(newUser.email).toBe(result.email);
            expect(newUser.dob).toEqual(result.dob);
            expect(newUser).toBeTruthy();

            expect(newUser).toMatchObject(result);

            done();
        });

    }); */

    /* //description, cb
    test('should return all users when getAllUsers is called', (done) => {
        //assertions - amount of expects within the test
        //expect.assertions(2);
        sut.getInstance().getAllUsers((err,users) => {
            //expects are specific tests you are trying to do
            expect(err).toBeFalsy();
            expect(users).toBeTruthy();
            expect(users.length).toBeGreaterThan(0);
            done();
        });

    });


    //second test for getbyid with error handling in it

    test('should return correct user when proper id given', done =>{
        expect.assertions(2);
        sut.getInstance().getUserById(1,user =>{

            expect(user).toBeTruthy();
            expect(user.id).toBe(1);
            done();
        });

    });


    test('should throw bad req error when given something other than a number', done => {

        sut.getInstance().getUserById('1', ()  => {}, err => {
            expect.assertions(2);
            expect(err).toBeTruthy();
            expect(err).toEqual('bad request given');
            done();

        });

    });

    test('should throw bad req error when given something other than a number', done => {

        sut.getInstance().getUserById(2.4, ()  => {}, err => {
            expect.assertions(2);
            expect(err).toBeTruthy();
            expect(err).toEqual('bad request given');
            done();

        });

    });

    test('should thrown not found when given something other than a number', done => {

        sut.getInstance().getUserById(100, ()  => {}, err => {
            expect.assertions(2);
            expect(err).toBeTruthy();
            expect(err).toEqual('no user found');
            done();

        });

    }); */

});