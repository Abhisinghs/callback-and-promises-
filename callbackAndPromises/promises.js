//Promise helps to solve the call back hell and inversion controll problem 
//promise enhancing the readability of code in javascript 
//it behave as a placeholder 

// create a promise object 
function createPromise(){
    return new Promise(function exec(resolve,reject){
        //you code goes here
        setTimeout(()=>{
            console.log('timer done');
            resolve('done');         //when we did not write the resolve method the state of function is pending 
        },3000);
    });
}

console.log('start');
let x = createPromise();
console.log('got a new object');
x.then((value)=>{
    console.log('promise object',value);
}).catch((value)=>{
    console.log('rejected code',value );  //when reject is call 
}).finally(()=>{
    console.log('finally'); //it run on both cases 
})

// blocking code 
for(let i=0;i<1000000;i++);