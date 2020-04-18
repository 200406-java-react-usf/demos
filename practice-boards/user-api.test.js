const sut = require('./user-api');
const User = require('./user');

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

    test('should return user with ID 3', done => {

        expect.assertions(2);
        return sut.getUserById(3).then((user,err) => {
            expect(err).toBeFalsy();
            expect(user).toEqual(new User(3,'kwagenheim', 'password', 'kwagenheim@gmail.com','Kevin', 'Wagenheim'))
            done();
        });

    });


});