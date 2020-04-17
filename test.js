//regular async thingy

//test = numbered test
// function add(a, b, test, time, cb){
//     console.log(`test #${test}`);
//     setTimeout(() => {
//         let answer = a + b;
//         cb(answer);
//     }, time);
// }

// add(5, 4, 1, 2000, result => {
//     console.log(result);

//     add(3, 2, 2, 1000, result => {
//         console.log(result);
//     });
// });

//thunk thingy
function add(a, b, test, time){
    console.log(`test #${test}`);
    let result, fn;

    setTimeout(() => {
        result = a + b;
        if (fn){
            fn(result);
        }
    },  time);

    return function(cb){
        if(result){
            cb(result);
        }else{
            fn = cb;
        }
    }
}

let add1 = add(5, 4, 1, 2000);
let add2 = add(3, 2, 2, 1000);

add1(res => {
    console.log(res);

    add2( res => {
        console.log(res);
    });
});











