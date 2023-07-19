// if we understand the concept of promises we have understand the callback function first 

//and before understand the callback function we have to understand the higher order function

//higher order function are those function which which accept the another function as an 
// argument

//Callback function////////////////////////
// callback function are those function which passed into the higher order function as an argument
// above the example fun() is a callback function 

//example of higher order function
function hof(fun){

    // hof-> higher order function 
    console.log('I am inside the higher order function');
    fun(); //call the call back function 
}

//call the higher order function
// // hof(()=>{
//     console.log('I am inside the call back function');
// })


///////////////////////Callback function////////////////////////
// callback function are those function which passed into the higher order function as an argument
// above the example fun() is a callback function 

///now we understand the another example of callback and higher order function with two argument 
// 1 -> integer value 
// 2-> call function 

function Hof(x,fun){

    // Hof-> higher order function 
    //fun-> call back function 
    // inside the higher order function
    console.log(x*x);
    fun(x);   //call the call back function
}

//call the hof function
// Hof(5,call_back_fun)

//define the callback function
function call_back_fun(n){
    console.log('inside the callback function');
    console.log("square of number is ",n*n);
}


//////////////////////////////////////////////////////////////////
// we can use the callback in Asynchronous programming 

//now we will understand the setTimeOut() function
// setTimeout() function takes the another function as an argument so it is called the higher order function
//it takes callback function as an argument 

// setTimeout(function fun(){
//     console.log('timer done ');
// },3000);              //the function delay 3 sec to run the code 

//above code is example of asynchronous peice of code 

//-----------------Now we understand the Synchronous and Asynchronous peice of code--------------////////

////|||||||||||||||||||||||||||||||||||||||||||||||//////////////////////
// first we understand the synchronous example 
// console.log('start execution');
// for(i=0;i<1000000000;i++);  //it takes time to execute that line
// console.log('end execution');             //for loop also called a blocking peice of code  

// above code is the synchronous peice of code example because the code execute line by line 
//synchronous peice of code is the single thread code example beacause on one thread it one task is perform 

//////////|||||||||||||||||||||||||||||||||||||||||||||
// // now we understand the Asynchronous peice of code example 
// console.log('start execution ');
// setTimeout(function(){
//     console.log('timer done');
// },3000);
// console.log('end execution');

// this is the Asynchronous peice of code example because it does not run line by line 
//it execute next line after the setTimeout function and then timer is done than it run 
// settimeout function


//----->>>>>>>>>>>>>>>>>>>>>----------------->>>>>>>>>>>>>>>>>>>>
// now how to identify code is asynchronous peice of code or not 

// synchronous peice of code 
//In Javascript which code are natively defined means javascript know about the code  it is the synchronous peice of code example
// like   for loop , if else etc. 

//Asynchronous peice of code
//which are not define natively or predefined that is asynchronous peice of code example 
// like setTimeout function


///---------------------when for loop after the set timeout --------////////////

// console.log('start');
// setTimeout(function fun(){
//     console.log('timer done');
// },0)
// console.log('end');
// for(i=0;i<1000000000000;i++);

//in above code first line is execute after first line
//setTimeout is not a native define function so it trigger the function
// to the Runtime environment and immediatly jump to the next line and 
//when the third line execute it print the end on the   console 
//in for loop we know that it take much time as compair to setTimeout function 
//but until for loop execution is not finished setTimeout callback function not run 
//because the javascript does not hapmper the native peice of code 
//it first execute the for loop execution and then give chance to the call back function 



////////////////////////////////////now we understand the logic  behind it ///////////

// when the javascript trigger the timer function to runtime .
// runtime wait for timer finishing if once a timer finished it send the function to the 
// macro queue or a callback queue.

///////////////////now entry of event loop ///////////////////////////
// Responsibilty of event loop to ensure again and again if call stack is empty and global peice of code is empty 
// it check agina and again 
// when both condition are true then it send the function from macro queue/call back queue to call stack 
//call stack is the part of memeoy where function is stored when it will be call
//when the global peice of code is empty so that it start the execution of function which inside the call stack 

//////////-------------when two timer with different time so how it work ------------------------------/////////

console.log('start');
setTimeout(()=>{
    console.log('timer 1');
},1000);
setTimeout(()=>{
    console.log('timer 2');
},0);
console.log('end');
for(let i=0;i<1000000;i++);

//in this code two timer is available so how we can identify who will run first so 
//firstly which function take less time to execute it finishe the timer first and go to the
// macro queue /callback queue and in marcro queue who will come first than it go to the call stack first and execution start first  
