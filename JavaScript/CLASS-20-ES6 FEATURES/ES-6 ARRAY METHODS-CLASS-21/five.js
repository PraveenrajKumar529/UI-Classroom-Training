let enames=["rahul","sonia","raji","goutham","priya"]
        //    5       5      3       6         4
let numbers=[11,7,8,232,1055,41,8,2,14]
//wap to print all evens numbers using filter method by fat arrow function
/* let evens=numbers.filter((num)=>{
    return num%2===0;
})
console.log(evens) */

let evens=numbers.filter(num=>num%2===0)
console.log(evens)