import {EventEmitter} from 'events'

function addAsync (x,y){
    return new Promise((resolve,reject)=>{
        x+y
    })
}



(async function(){
    let sum = await addAsync(4,5)

    console.log(sum);
})

//an abstract representation of calculator
interface Calculator {
    add(x:number, y:number): number;  //method stub (w/o implementation)
    double(x: number)
}



class MyCalculator implements Calculator{
    add (x:number, y:number): number {
return x + y;
    double (x)    
}}