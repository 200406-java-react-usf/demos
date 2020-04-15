const sut = require('./user-repo');
const User = require('../models/user');
describe('userRepo', () => {

    // test('should be a singleton', () => {
    //     let reference1 = sut.getInstance();
    //     expect(reference1).toBeTruthy();
    //     let reference2 = sut.getInstance();
    //     expect(reference1).toBe(reference2); // checks for exact equivalency (are they the SAME object)
    //     expect(reference1).toEqual(reference2); // checks for value equivalency
    // });

    // test('should return all users when getAllUsers is called', done => {

    //     expect.assertions(3);
    //     sut.getInstance().getAllUsers((err, users) => {
    //         expect(err).toBeFalsy();
    //         expect(users).toBeTruthy();
    //         expect(users.length).toBeGreaterThan(0);
    //         done();
    //     });

    // });

    // test('should return correct user when getUserById is given proper id value', done => {

    //     expect.assertions(2);
    //     sut.getInstance().getUserById(1, user => {
    //         expect(user).toBeTruthy();
    //         expect(user.id).toBe(1);
    //         done();
    //     }, () => {});

    // });

    // test('should throw bad request error when getUserById is given string as an id', done => {

    //     expect.assertions(2);
    //     sut.getInstance().getUserById('a', () => {}, err => {
    //         expect(err).toBeTruthy();
    //         expect(err).toEqual('Bad request, invalid id value provided.');
    //         done();
    //     });

    // });

    // test('should throw bad request error when getUserById is given a decimal value as an id', done => {

    //     expect.assertions(2);
    //     sut.getInstance().getUserById(1.1, () => {}, err => {
    //         expect(err).toBeTruthy();
    //         expect(err).toEqual('Bad request, invalid id value provided.');
    //         done();
    //     });

    // });

    // test('should throw bad request error when getUserById is falsy value as an id', done => {

    //     expect.assertions(2);
    //     sut.getInstance().getUserById(null, () => {}, err => {
    //         expect(err).toBeTruthy();
    //         expect(err).toEqual('Bad request, invalid id value provided.');
    //         done();
    //     });

    // });


    // test('should throw resource not found error when getUserById is an unknown id', done => {

    //     expect.assertions(2);
    //     sut.getInstance().getUserById(100, () => {}, err => {
    //         expect(err).toBeTruthy();
    //         expect(err).toEqual('No user found with provided id.');
    //         done();
    //     });

    // });

    //     test('should return correct user when getUserById is given proper id value', done => {

    //     expect.assertions(2);
    //     sut.getInstance().updateUserById(1, "username", "test", user => {
    //         expect(user).toBeTruthy();
    //         expect(user.id).toBe(1);
    //         done();
    //     }, () => {});

    // });
    test('should return err for dup username ', done => {
        let newUser = new User(0, 'eeinstein', 'password', 'Emily', 'Einstein', 'eeinstein@revature.com', new Date('09/01/1993'));
        //expect.assertions(2);
        sut.getInstance().addNewUser(newUser, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual("Error: The provided username is already taken.");
            done();
        }, () => {});

    });
    test('should return err for dup email', done => {
        let newUser = new User(0, 'eeinsteinTEST', 'password', 'Emily', 'Einstein', 'eeinstein@revature.com', new Date('09/01/1993'));
        expect.assertions(2);
        sut.getInstance().addNewUser(newUser, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual("Error: The provided email is already taken.");
            done();
        }, () => {});

    });

    test('should update user within the datasource when updateUser is given a valid user', done => {

        let updatedUser = new User(1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            done();
        });

    });

    test('should throw error when updateUser is given a falsy value',  done => {
        expect.assertions(2);
        sut.getInstance().updateUser(null, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should throw error when updateUser is given an updatedUser with an invalid id',  done => {
        
        let badUser = new User(-1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))
        
        expect.assertions(2);
        sut.getInstance().updateUser(badUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should throw error when updateUser is given an updatedUser with a conflicting username',  done => {

        let conflictingUser = new User(1, 'bbailey', 'p4ssw0rd', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))
        
        expect.assertions(2);
        sut.getInstance().updateUser(conflictingUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should throw error when updateUser is given an updatedUser with a conflicting email',  done => {

        let conflictingUser = new User(1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'bbailey@revature.com', new Date('01/01/1995'))
        
        expect.assertions(2);
        sut.getInstance().updateUser(conflictingUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should throw error when updateUser is given an updatedUser with improper values', done => {

        let improperUser = new User(1, 'aanderson', '', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/1995'))
        
        expect.assertions(2);
        sut.getInstance().updateUser(improperUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });



});