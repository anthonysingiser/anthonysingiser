/*function template_replace(template, variable) { ... }

var template = 'jude is a {%} dude'

var adjective = 'cool'

write a function that uses that function signature and prints 
'jude is a cool dude' when given the template and the adjective 
arguments in that order.*/


/*function isSig (cha) {

    if(cha === '{' || cha === '%' || cha === '}') {
        
        return true

    } 

    else { 
        
        return false

    }   

}


function nextChar(string, count) {

    return_char = string[count];

    return return_char

}*/


//takes each character, pushes it into new array, returns array


/*function replace_template (str, vari) {

    let return_string = '';
    let x = 0;

        for(i = 0; i < str.length; i++) {

            check = str[i];

                if(isSig(check) && x < vari.length) {
                    
                    return_string += nextChar(vari, x);
                    x++;
                }

                if(x >= 3 && x < vari.length) { 

                    return_string += nextChar(vari, x);
                    x++;
                        
                        if(x === vari.length) {
                            
                            x = 0;
                        }
                }

                if(isSig(check) === false && x === 0) {
                    
                    return_string += str[i];
                }

        }

    return return_string    

};

let sentence = 'Darling I feel {%} tonight';

let feel = 'wonderful'; 

console.log(replace_template(sentence, feel));*/

function template_replace (temp, vari, name) {

    temp = temp.split(' ')

    for (i = 0; i < temp.length; i++){

        if (temp[i] === '${' + name + '}'){

            temp[i] = vari;    

        }

    }    

    return temp.join(' ');
            
};

let adjective = 'cool';
let template = 'jude is a ${adjective} ${adjective} ${adjective} dude';

console.log(template_replace(template, adjective, Object.keys({adjective})[0]));

