//make a function that works like .filter()

//.filter() takes an array and an argument

//it returns a new array that is made of the elements of the array that pass the conditional argument

// the function will iterate through an array

//the function will test each element against a conditional

//if the the element passes the conditional it will be pushed into a new array

//the function will then print that new array

let ray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
};

function filter(arr, func){
    let newArr = []
    for(i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
};

//accepts 2 arguments

//does not use loops

//a conditional that checks if the current element is true
//if the element is true it is pushed into a new array

//the new array is returned after running through the function

//typical variables, iterator for index, array, length of array, and function.

// func(arr[0]) as a conditional will initialize if the first element is of the array returns true when passed into the function
 
// arr.slice(1) will pass a copy of the argument array without the first element
function filterRe(arr, func){
	                                                 	 
    if(arr.length === 0){                                             
        return arr
    }
    const sortThis = [arr[0]]
    
    const restOfArray = filterRe(arr.slice(1), func)
    
    if(func(sortThis)){         
        return sortThis.concat(restOfArray) 
    }
    else{
        return restOfArray
    }
}
console.log(filterRe(ray, even))