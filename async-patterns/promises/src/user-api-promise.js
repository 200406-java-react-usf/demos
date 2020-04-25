//const userData = require('../data/userDb')
class User{

    constructor(id, un, pw, fn, ln, email, dob) {
        this.id = id
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.dob = dob;
    }
    
    age() {
        return Math.abs(new Date(Date.now() - this.dob.getTime()) - 1970);
    }
    
    }
    
    
    //const User = require('../models/user');
    let id = 1;
    
    userData = [
        new User(id++, 'aanderson', 'password', 'Alice', 'Anderson', 'aanderson@revature.com', '01/01/1995'),
        new User(id++, 'bbailey', 'password', 'Bob', 'Bailey', 'bbailey@revature.com', '01/01/1983'),
        new User(id++, 'ccountryman', 'password', 'Charlie', 'Countryman', 'ccountryman@revature.com', '01/01/1990'),
        new User(id++, 'ddavis', 'password', 'Daniel', 'Davis', 'ddavis@revature.com', '07/01/1990'),
        new User(id++, 'eeinstein', 'password', 'Emily', 'Einstein', 'eeinstein@revature.com', '09/01/1993')
    ]
    


const getUserById =(id) =>{

    console.log(`Looking for ID: ${id}`)

    if (typeof id !== 'number' || !Number.isInteger(id)|| id <= 0 ){
            return (cb) =>{}
        }

    setTimeout(()=>{
        //to simulate lag
        const user = userData.filter(user => user.id ===id).pop();
        

         if (!user){
             return (cb)=>{}
         }

         
         return (cb)=>{

         }
         
      
     
    }, 1000);
}

let task = getUserById(4)






