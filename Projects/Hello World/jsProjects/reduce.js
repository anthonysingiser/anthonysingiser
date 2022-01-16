 /* reduce executes a reducer function (that you provide) on each element of the array,
 resulting in a single output value

 the return value is a single value that results from the reduction

 
 ex. 
 const array1 = [1,2,3,4];
 const reducer = (accumulator, currentValue) => accumulator + currentValue;

 console.log(array.reduce(reducer));

 expected output: 10

 arguments: Accumualtor, Current Value, Current Index, Source Array

 define a function named reduce

 it takes two arguments: an array and a function

 the function adds two numbers

 the numbers will be each number in the array

 an accumulator variable will store the total

 the accumulator will be returned at the end

 for a base case, let's try if(arr.length <= 0)
 */

 const numbers = [5, 20, 46, 74, 2, 17];

 function add (num, num2) {
     return num + num2;   
 }

 function reduce(arr, func){
    if (arr.length <= 0){
         return 0
     }
     return func(arr[0], reduce(arr.slice(1), func)) 
 }
 console.log(reduce(numbers, add));

//with a loop, instead of recursive

//arguments = an array and a function

//a for loop that iterates through the array

function reduceLoop(arr, func){
    let accumulator = 0
    for(i = 0; i < arr.length; i++){
        accumulator = func(accumulator, arr[i])
    }
    return accumulator
}
console.log(reduceLoop(numbers, add));

 




