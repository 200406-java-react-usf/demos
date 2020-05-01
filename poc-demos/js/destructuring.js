const { PI } = Math;

console.log(Math.PI);
console.log(PI);

let user = {
    username: 'fake',
    password: 'password',
    firstName: 'Alice',
    lastName: 'Anderson',
    address: {
        unitStreet: '123 Main Street',
        city: 'Tampa',
        state: 'Florida',
        zip: '33647'
    }
};

let { username, password } = user;
let address = {...user.address};

console.log(user);
console.log(username, password, address, email);

console.log(typeof user.address);
console.log(typeof address)

address.city = 'Orlando';

console.log(user);

let [a, b] = [120, 240];
console.log(a, b);

