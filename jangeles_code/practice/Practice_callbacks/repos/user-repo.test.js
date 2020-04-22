const sut = require ('./user-repo');

describe('userRepo', () => {
    test('This test should return all users in the database', done => 
    {
        expect.assertions(2);
        sut.getInstance().getAllUsers((result, err) => 
        {
            expect(result.length).toBeGreaterThan(0);
            expect(err).toBeFalsy();
            done();
        })
    });

    test('This test should a user', done => 
    {
        expect.assertions(2);
        sut.getInstance().getAllUsers((result, err) => 
        {
            expect(result.length).toBeGreaterThan(0);
            expect(err).toBeFalsy();
            done();
        })
    });
})   
