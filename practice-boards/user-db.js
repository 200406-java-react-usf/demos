const User = require('./user');

let id = 1;

module.exports = [

    new User(id++, 'kkeipe', 'password', 'kkeipe@gmail.com','Korey', 'Keipe'),
    new User(id++, 'jelam', 'password', 'jelam@gmail.com','Jeremy', 'Elam'),
    new User(id++, 'kwagenheim', 'password', 'kwagenheim@gmail.com','Kevin', 'Wagenheim'),
    new User(id++, 'aselenke', 'password', 'aselenke@gmail.com','Abraham', 'Selenke'),
    new User(id++, 'kwandelt', 'password', 'kwandelt@gmail.com','Kennedy', 'Wandelt')

]