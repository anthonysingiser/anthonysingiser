//attempt to learn .filter's function more thoroughly by building a 
//prefix function that does the same
//declares an array of words

const words = ['rat', 'bat', 'cat', 'tat', 'sat', 'lemon'];

//declares a function that accepts a parameter and returns true if it is equal to 'cat'
 function badCat(word){
     if (word === 'cat'){
        
        return true 
     
    } else{ return false}
 }

//making a filter !
 function filter (arr, func){    
    let newArr = []    
    for(i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(arr[i])  
        }
    }
    return newArr
};

console.log(filter(words, badCat))




/*find length of array 

function length(arr){
    count = 0
    for (i = 0; arr[i] != '';i++){
       count++ 
     }
    }
*/   