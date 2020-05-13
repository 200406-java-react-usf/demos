function* selectiveIteration() {
    let index = 0;
    for(let i = 20; i > index; i--){
        if((i % 2) == 0){
            yield console.log(`${i} is even`);
        }
        else {
            yield console.log(`${i} is odd`);
        
    }
}
}
let x = selectiveIteration()

x.next();
x.next();
x.next();
x.next();
x.next();
x.next();
x.next();
x.return();

console.log(x)