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
