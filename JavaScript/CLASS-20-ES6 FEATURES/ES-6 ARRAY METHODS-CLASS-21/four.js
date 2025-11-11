let enames=["rahul","sonia","raji","goutham","priya"]
        //    5       5      3       6         4
let numbers=[11,7,8,232,1055,41,8,2,14]
//wap to print all evens numbers
let even_numbers=[]
for(let num of numbers){
    if(num%2===0){
        even_numbers.push(num);
    }
}
console.log(even_numbers)