
/*function snakeHead(vari){
vari++;    
console.log(vari);
    if(vari === 5){
        return
    }
snakeTail(vari);
}

function snakeTail(bit){        
snakeHead(bit);
}


snakeHead(0);

function snake(vari){
vari++
console.log(vari)
    if(vari === 5){
        return
    }    
snake(vari);        
}

snake(0);

/*for (i = 1; i < 6; i++){
    console.log(i);
}*/

function snakez(vari){
    if(vari >= 5){
        return
    }
    return console.log(vari), snake(vari++)
}