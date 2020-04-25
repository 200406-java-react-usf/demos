import{} from ('./user-repo') as sut;
import { User } from('../models/user');

describe('userRepo', () => {

    test('should be a singleton', () => {
        let reference1 = sut.getInstance();
        let reference2 = sut.getInstance();
        expect(reference1).toEqual(reference2);
    });

    test('should return all users, without passwords, when getAllUsers is called', async () => {
        expect.assertions(3);
        let result = await sut.getInstance().getAll()
            expect(err).toBeFalsy();
            expect(result.length).toBeGreaterThan(0);
            expect(result[0].password).toBeUndefined();
            done();
        });
    });

    test('should return correct user when getUserById is given a valid id', async () => {
        expect.assertions(3);
        sut.getInstance().getUserById(1, (err, result) => {
            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            expect(result.id).toBe(1);
            done();
        });
    });

    test('should invoke error callback when getUserById is given an invalid id', done => {
        expect.assertions(2);
        try{
        await sut.getInstance().getUserById(-1, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should return correct user when getUserByUsername is given a known username', done => {
        expect.assertions(3);
        try{
        await sut.getInstance().getUserByUsername('aanderson') 
            
            expect(result).toBeTruthy();
            expect(result.username).toBe('aanderson');
            done();
        });
    });

    test('should invoke error callback when getUserByUsername is given an unknown username', done => {
        expect.assertions(2);
        sut.getInstance().getUserByUsername('nobody', (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when getUserByUsername is given bad data', done => {
        expect.assertions(2);
        sut.getInstance().getUserByUsername('', (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should return correct user when getUserByCredentials is given valid credentials', done => {
        expect.assertions(4);
        sut.getInstance().getUserByCredentials('aanderson', 'password', (err, result) => {
            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            expect(result.username).toEqual('aanderson');
            expect(result.password).toEqual('password');
            done();
        });
    });

    test('should invoke error callback when getUserByCredentials is given invalid credentials', done => {
        expect.assertions(2);
        sut.getInstance().getUserByCredentials('aanderson', 'wrong', (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when getUserByCredentials is given bad data', done => {
        expect.assertions(2);
        sut.getInstance().getUserByCredentials('', '', (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should add a new user to the datasource when addNewUser is given a valid new user', done => {
        
        let validMockUser = new User(0, 'test', 'test', 'test', 'test', 'test@revature.com', new Date());
        
        expect.assertions(3);
        sut.getInstance().addNewUser(validMockUser, (err, result) => {
            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            expect(result.id).toBeGreaterThan(0);
            done();
        }, () => {});

    });

    test('should invoke error callback when addNewUser is given a new user with a conflicting username', done => {
        
        let conflictingMockUser = new User(0, 'aanderson', 'test', 'test', 'test', 'test@revature.com', new Date());
        
        expect.assertions(2);
        sut.getInstance().addNewUser(conflictingMockUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when addNewUser is given a new user with a conflicting email', done => {
        
        let conflictingMockUser = new User(0, 'a', 'a', 'a', 'a', 'aanderson@revature.com', new Date());
        
        expect.assertions(2);
        sut.getInstance().addNewUser(conflictingMockUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when addNewUser is given an invalid new user (falsy username)', done => {
        
        let invalidMockUser = new User(0, '', 'a', 'a', 'a', 'a@revature.com', new Date());
        
        expect.assertions(2);
        sut.getInstance().addNewUser(invalidMockUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when addNewUser is given an invalid new user (falsy password)', done => {
        
        let invalidMockUser = new User(0, 'a', '', 'a', 'a', 'a@revature.com', new Date());
        
        expect.assertions(2);
        sut.getInstance().addNewUser(invalidMockUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when addNewUser is given an invalid new user (falsy firstName)', done => {
        
        let invalidMockUser = new User(0, 'a', 'a', '', 'a', 'a@revature.com', new Date());
        
        expect.assertions(2);
        sut.getInstance().addNewUser(invalidMockUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when addNewUser is given an invalid new user (falsy lastName)', done => {
        
        let invalidMockUser = new User(0, 'a', 'a', 'a', 'a', '', new Date());
        
        expect.assertions(2);
        sut.getInstance().addNewUser(invalidMockUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when addNewUser is given an invalid new user (falsy dob)', done => {
        
        let invalidMockUser = new User(0, 'a', 'a', 'a', 'a', 'a@revature.com', null);
        
        expect.assertions(2);
        sut.getInstance().addNewUser(invalidMockUser, (err,result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when when addNewUser is given a falsy user', done => {
        expect.assertions(2);
        sut.getInstance().addNewUser(null, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should update user within the datasource when updateUser is given a valid updated user', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', 'updated', 'updated', 'updated@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeFalsy();
            expect(result).toBeTruthy();
            done();
        });

    });

    test('should invoke error callback when updateUser is given an updated user with an updated username', done => {

        let updatedUser = new User(1, 'updated', 'updated', 'updated', 'updated', 'updated@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when updateUser is given an updated user with a conflicting username', done => {

        let updatedUser = new User(1, 'bbailey', 'updated', 'updated', 'updated', 'updated@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });
    
    test('should invoke error callback when updateUser is given an updated user with a conflicting email', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', 'updated', 'updated', 'bbailey@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when updateUser is given an invalid updated user (falsy username)', done => {

        let updatedUser = new User(1, '', 'updated', 'updated', 'updated', 'bbailey@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when updateUser is given an invalid updated user (falsy password)', done => {

        let updatedUser = new User(1, 'aanderson', '', 'updated', 'updated', 'bbailey@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when updateUser is given an invalid updated user (falsy firstName)', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', '', 'updated', 'bbailey@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when updateUser is given an invalid updated user (falsy lastName)', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', 'updated', '', 'bbailey@revature.com', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when updateUser is given an invalid updated user (falsy email)', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', 'updated', 'updated', '', new Date());

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });

    });

    test('should invoke error callback when updateUser is given an invalid updated user (falsy dob)', done => {

        let updatedUser = new User(1, 'aanderson', 'updated', 'updated', 'updated', 'updated@revature.com', null);

        expect.assertions(2);
        sut.getInstance().updateUser(updatedUser, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

    test('should invoke error callback when updateUser is given an falsy user', done => {
        expect.assertions(2);
        sut.getInstance().updateUser(null, (err, result) => {
            expect(err).toBeTruthy();
            expect(result).toBeFalsy();
            done();
        });
    });

});