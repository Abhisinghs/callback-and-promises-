//async and await 
//the reason of using asyn and await that increased the readablility of the code as compair to 
// promises

function createPromise(){
    return new Promise(function exec(resolve,reject){
        //code goes here
        setTimeout(function f(){
            console.log('timer done');
            reject(10);
        },3000);
    })
}

//async is function  declare in which we write our asynchronous code or logic 
async function consume(){
    console.log('inside the function ');
   return(10);
    //we write anything it return as a promise 
}

// call the async function 
console.log(consume());

// await is used to hold the call of promise 
// //we use the await in async function
async function consume(){
    console.log('inside the function');
    const response=await createPromise();
    const response1=await createPromise();   //we use promise line by line that increase the readability 
    console.log('response is ',response1);
}

console.log('start');
consume();

console.log('end');


//////////////////////////////////////////
// use the error handling in async and await 

async function consume(){

    try{
        // posibilty of error may be occur write here 
        console.log('inside the function');
        const response=await createPromise();
        const response1=await createPromise();   //we use promise line by line that increase the readability 
        console.log('response is ',response1);
    }catch(err){
        console.log('error occured',err);
    }
}

console.log('start');
consume();

console.log('end');