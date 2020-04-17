function multiply(a,b){
    return a*b
}



//synchromous thunk
let thunk = function(){

    return multiply(10,20)

}

console.log(thunk())



function multiplyAsync(a,b,cb){
setTimeout(()=>{
cb(a*b)
}, 2000)}


let asyncthunk = function(cb){

    return multiply(10, 20, cb)

}

console.log(thunk())

console.log(asyncthunk())