const sut = require('./user-api');

describe('userApi', () => {

    test('should return all users when getAllUsers is called', done => {

        expect.assertions(2);
        sut.getAllUsers(users => {
            expect(users).toBeTruthy();
            expect(users.length).toBe(5);
            done();
        });
        
    });

});