//question 1: 
//solution :
//write a function that take two argument 1 array and 2 is call back 
// we have to return the array and element is double to orginal 

// function define 
function double_array(arr,callback){
    let double_arr=new Array();
    double_arr= arr.map((el)=> {
        return callback(el)
    })
    return double_arr;
}

//define callback
// function callback(num){
//     return num*2;
// }

//call the function 
// const doubleArray=double_array([1,2,3,4,5],callback);
// console.log(doubleArray);


//question 2 : string Manipulation 
// solution :

// define function
function manipulateString(string,logString){
    let upperStr= string.toUpperCase();
    let ans=logString(upperStr);
    return ans;
}

function logString(str){
    return ( `The manipulated string is:${str}`);
}
let str=manipulateString('hello world?',logString);
console.log(str);


////////////////////////
// question_3 Age in Days 
// solution
 
// define ageInDays function 
function ageInDays(person,call_back){
    const fullName= person.first_name + " "+ person.last_name;
    const ageInDays= (person.age *365);
    call_back(fullName,ageInDays);
   
}

//define callback function
// function call_back(name,age){
//     console.log(`The person's fullname is ${name} and their age in days is ${age}.`);
// }

person={first_name:'Abhi',last_name:'Singh',age:21}

// ageInDays(person,call_back);


//question_4 arrange in abphabetical order 
// solution

// make a list 
let book_list=[{title:'python', author:'abhi',year:1999},
{title:'c++', author:'abhi',year:1978},
{title:'javascript', author:'abhi',year:1996}]

// make a new empty array 
let title_list = new Array();
// define function 
function Only_title(arr,call_back){
    title_list=(arr.map((el)=>{
        return el.title;
    }))
    
    //pass to the call back function
    call_back(title_list);
}

//define call back function 
function arrange_alphabetical(list){
    
    console.log(`${list.sort()}`);
}
Only_title(book_list,arrange_alphabetical);


////////////////////////
// question_5 greeting promise 
//solution :

function createPromise(name){
    return new Promise(function(resolve){
        const greeting =`Hello,${name}!`;
        resolve(greeting);
    })
}

createPromise('Abhishek').then((msg)=>{
    console.log(msg);
});


////////////////
// question_6 fetch result asynchronously 
// Solution

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json());

// async function fetchdata(){
//     const response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data =await response.json();
//     console.log(data);
// }

// call the fetch function
// fetchdata()



// question 7 multiple request 
// solution

// async function fetchdata1(){
//     const data1= fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json());
//     const data2= await fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>response.json());

//     const combine={todo: data1,post:data2};
//     console.log(combine);
// }

// fetchdata1();