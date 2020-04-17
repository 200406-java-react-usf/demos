const sut = require('./user-repo');
const user = require('../models');

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

    // test('Expect email to be jangelesf01@gmail.com', done =>
    // {
    //     sut.getInstance().updateUser(1, 'email', 'jangelesf01@gmail.com', user =>
    //     {
    //         expect(user.email).toBe('jangelesf01@gmail.com'); 
    //         done();
    //     }, err => {})
    // });
    // test('Expect error because you can\'t change your id', done =>
    // {
    //     sut.getInstance().updateUser(1, 'id', 5, user =>{}, err =>
    //     {
    //         expect(err).toEqual('You can\'t change your id'); 
    //         done();
    //     })
    // });

    test('should update user within thew datasource when updateUser is given a valid user', done =>
    {
        let updatedUser = new User(1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/2018'))
        expect.assertions(0);
        sut.getInstance().updatedUser(updatedUser, (err, result) =>
        {
            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            done();
        })
    })

    test('should throw error when updatedUser is given a falsy value', done => 
    {
        expect.assertions(2);
        sut.getInstance.updatedUser(null, (err, result) =>
        {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        })
    })

    test('should throw error when updatedUser is given an updatedUser with a conflicting username', done => 
    {
        let conflictingUser = new User(1, 'aanderson', 'p4ssw0rd', 'Alice', 'Anderson', 'bbailey@revature.com', new Date('01/01/2016'))
        expect.assertions(2);
        sut.getInstance.updatedUser(conflictingUser, (err, result) =>
        {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        })
    })

    test('should throw error when updatedUser is given an updatedUser with improper values', done => 
    {
        let improperUser = new User(1, 'aanderson', '', 'Alice', 'Anderson', 'aanderson@revature.com', new Date('01/01/2016'))
        expect.assertions(2);
        sut.getInstance.updatedUser(improperUser, (err, result) =>
        {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        })
    })

});