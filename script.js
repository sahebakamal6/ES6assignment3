//ES6 assignment 03

//1st topic:
//Inheritance
class Name{
    constructor(name){
        this.name = name;
    }
}

class SirName extends Name{
    constructor(name,sirName){
        super(name)
        this.sirName = sirName;
    }
}
 
let state = new SirName('Saheba','Kamal')
console.log(state);

//2nd topic:
//Lexical Scope for this

let stationaries = {
    list:'stationary',
    name:['pencil','ruler','erazer','sharpener'],
    getStationary:function(){
        this.name.map((items)=>{
            console.log(this.list,items)
        })
    }
}

stationaries.getStationary();

//3rd topic:
//Rest Operator
//without rest operator(...)
function book(a){
    console.log('Book:',a);
}
book('Urdu','Math','English','GEO','P.st');//no matter how many argument we pass it will show just first argument in console cuz we put one parameter in this function

function books(...a){
    console.log('Books:',a);
}
books('Urdu','Math','English','GEO','P.st');//because of using rest operator,it will show all books name we put in argument as an array

//4th topic:
//Promises
var promise = new Promise((resolve,reject)=>{
    let a = true;
    if(a){
        resolve("Your Promise is resolve");
    }else{
        reject("Your promise isn't Fulfill yet...");
    }
})

console.log(promise);

promise.then((data)=>{
    console.log("Congratulation",data)
}).catch((error)=>{
    console.log("OOPS...!",error)
});


//ES6 assignment 04

//1st topic:
//Global Function
//isFinite
console.log(isFinite(null));

//isNaN
let a = "Saheba"
let b = 22;
console.log(isNaN(a));
console.log(isNaN(b));

//2nd topic:
//Destructuring Array
let arr = ['Saheba','Saleha','Saima'];
let [j,k,l] = arr;
console.log(k);
console.log(j);
console.log(l);
console.log(j,k,l);

//3rd topic:
//Destructuring Array with rest operators
let ar = [6,7,8];
let [...r] = ar;
console.log(r);

// 4th topic:
//Destructuring with Object
let obj = {
    myName:'Saheba Kamal',
    fName:'Ahmed Kamal',
}

let {myName,fName,nickName='Maliha'} = obj;
console.log(myName);
console.log(fName);
console.log(nickName);

//5th topic:
// Destructuring Object with rest Operators
let ob = {
    mName:'Maliha Kamal',
    fatherName:'Ahmed Kamal',
    age:22
}
let {...age} = ob;
console.log(age);

//6th topic:
//spread operators
let city = ['Kuala Lumpur','Malaka','Seoul','Busan']
function cities(u,i,o,p){
    console.log(u,i,o,p);
}
//without spread operators
cities(city[0],city[1])

//with spread operators
cities(...city)//here sprad operator will show all array element but without an array..it extracted all element of array and spread them..

cities(city)//it will also show us cities but in an array...









