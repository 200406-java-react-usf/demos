<<<<<<< HEAD
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
=======
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

    test('should return correct user when getUserById is given proper id value', done => {

        expect.assertions(2);
>>>>>>> master
        sut.getUserById(1, user => {
            expect(user).toBeTruthy();
            expect(user.id).toBe(1);
            done();
<<<<<<< HEAD
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
=======
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

>>>>>>> master
});