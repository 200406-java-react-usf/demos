const sut /*System Under Test */ = require('./user-api');

describe('userApi', () =>{

    // test('should return all users when getAllUsers is called', ()/*used for testing asyncronous done*/ =>{
    //     let users = sut.getAllUsers();
    //     expect(users.length).toBe(5);
    // });

    test('should return all users when getAllUsers is called',  done =>{ /*used for testing asyncronous done*/
        expect.assertions(2); /* number of assertions need to match the number of 'expect' functions following*/
        sut.getAllUsers(users => {
            expect(users).toBeTruthy();
            expect(users.length).toBe(5);
        done();/*looks for done in code to complete */
        });
    });

    test('should return correct user when getUserById is given proper id value', done => {
        sut.getUserById(1, user => {
            expect(user).toBeTruthy();
            expect(user.id).toBe(1);
            done();
        });
    });
    test('should throw bad request error when getUserById is given bad id value', done =>{
        sut.getUserById(2.4, () => {}, err =>{
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad request. Id provided is not valid');
            done();
        });
});

    test('should throw bad request error when getUserById is given value not in the DB', done => {
    sut.getUserById(24, () => {}, err =>{
        expect(err).toBeTruthy();
        expect(err).toEqual('User not found for provided id');
        done();
    });
    });
});