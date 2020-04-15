const sut = require('./user-api'); //system Under Test

describe('userApi', () =>{
    
    test('should return all useres when getAllUseres is called')
    
    expect.aserstions(2)
    sut.getAllUsers(useres =>{
        expect(users).toBeTruthy
        expect(users.length).toBe(6);

    });
    
    test("")
    sut.getUserById(1, user => {
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
        done();
    })



});