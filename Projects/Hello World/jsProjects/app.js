// executes the same code on every element in an array and returns a new array with the updated elements. -!

// create a function to act as the map method-!

// the function will accept 2 arguments, 1 for the array and 1 for the callback function- !

// the function will iterate through the array with a for loop- !

//each element of the array will have the function applied to it if- !

//the new values of each element will be returned as a new array- ! 

export const numbers = [1, 10, 45, 700, 43, 42];

export function add10 (num) {
    return num + 10
};

function map (arr, func) {
    const newarr = [];    
    for (i = 0; i < arr.length; i++){
        newarr.push(func(arr[i]));
    }
    return newarr
};

//comparing forEach to map

function forEach (arr, func) {
    for (i = 0; i < arr.length; i++){
        arr[i] = func(arr[i]); 
    }
    return arr
};





//<map without a loop>

//Create a function 'map' that will take two arguments, one array and a function

//Within this function create a recursive function that will take three arguments, the initial two arguments of the first function and a separate argument for iteration

//When the newArr.length is equal to the arr.length it will return the new array: newArr

//Each iteration will apply 'func'(a function) to the next 'num' value(index) of arr(an array)

//notALoop will then push the current element to newArr

//notALoop will add 1 to to num

//notALoop will call itself in a return statememt with the following arguments: an increment f 'num' and 'newArr'

//outside of notALoop's scope but within map's scope notALoop is called, with 0 and an empty array as arguments  

export function map2 (arr, func){
    const notALoop = (num, newArr) => {
        if(newArr.length === arr.length){
            return newArr;
        }
        newArr.push(func(arr[num]));    
        return notALoop(++num, newArr);
    };
    return notALoop(0, []);
};


//factorial of 5 = 5 multiplied by each number below it. 

//a function with no nested functions

//the function is recursive

//the function signature is 'factorial(num)'

//the function takes one number as an argument

//'num' is initially the argument and then is multiplied by the function call with '--num' as an argument

//a conditional returns '1' on the last recursion when num === 0 

    
export function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(--num);
};
