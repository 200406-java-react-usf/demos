const sut = require('./user-api');

describe('verify that our promises work', () => {

    test('should return all users', done => {

        expect.assertions(3);
        return sut.promiseAllUsers.then((users,err) => {
            expect(users).toBeTruthy();
            expect(users.length).toBe(5);
            expect(err).toBeFalsy();
            done();
        });
        

    });


});