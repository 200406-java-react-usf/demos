
// anonymous function
const burgerMaker =  function(bunType, meatType, veggies) {
    return(console.log('This burger is a ' + meatType + ' patty on a ' + bunType + ' bun, with ' + veggies + ' on it.'));
}

//explicit function call
function myFunction2(arg1, arg2) {
    return(console.log(6));
}

//arrow notation
const myFunction3 = (arg1, arg2) => {
    return(console.log('arrow'));
}

burgerMaker('brioche' , 'beef', 'lettuce and tomato');
//myFunction2(3, 4);
//myFunction3(5, 6);


// function, variable, if, for(loops), arrays, callbacks, tests, imports/exports, arrow notation



