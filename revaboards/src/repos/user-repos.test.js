const sut = require('./user-api');reos

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

});