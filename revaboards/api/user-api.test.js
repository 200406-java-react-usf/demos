const sut = require('./user-api');
const sut2 = require('./post-api')

describe('userApi', () => {

    test('should return all users when getAllUsers is called', done => {

        expect.assertions(2);
        sut.getAllUsers(users => {
            expect(users).toBeTruthy();
            expect(users.length).toBe(5);
            done();
        });
        
    });

    test('should return correct user when getUserById is given proper id value', done => {

        expect.assertions(2);
        sut.getUserById(1, user => {
            expect(user).toBeTruthy();
            expect(user.id).toBe(1);
            done();
        }, () => {});

    });

    test('should throw bad request error when getUserById is given string as an id', done => {

        expect.assertions(2);
        sut.getUserById('a', () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad request, invalid id value provided.');
            done();
        });

    });

    test('should throw bad request error when getUserById is given a decimal value as an id', done => {

        expect.assertions(2);
        sut.getUserById(1.1, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad request, invalid id value provided.');
            done();
        });

    });

    test('should throw bad request error when getUserById is falsy value as an id', done => {

        expect.assertions(2);
        sut.getUserById(null, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad request, invalid id value provided.');
            done();
        });

    });


    test('should throw resource not found error when getUserById is an unknown id', done => {

        expect.assertions(2);
        sut.getUserById(100, () => {}, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('No user found with provided id.');
            done();
        });

    });

    test('should expect updateUser to return User array with the update information'), done => {

        expect.assertions(5);
        sut.updateUser(['un','pw','fn','ln', 'email@email.com'], updateduser => {
            expect(updateduser).toBeTruthy();
            expect(updateduser.pw).toBe('pw');
            expect(updateduser.fn).toBe('fn');
            expect(updateduser.ln).toBe('ln');
            expect(updateduser.email).toBe('email@email.com');
            done();
        })
    }

    test('should expect updateUser to return a string if username or email is invalid'), done => {

        expect.assertions(2);
        sut.updateUser(['un','pw','fn','ln', 'email@email.com'], updateduser => {
            expect(updateduser).toBe('Invalid username, no username found');
            expect(updateduser).toBe('Invalid email');
            done();
        })
    }

});