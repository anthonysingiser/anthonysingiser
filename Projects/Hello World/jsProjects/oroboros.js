
function snakeHead(vari){
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

function snake(vari){
vari++
console.log(vari)
    if(vari === 5){
        return
    }    
snake(vari);        
}

/*for (i = 1; i < 6; i++){
    console.log(i);
}*/

function snakez(vari){
    if(vari >= 6){
        return
    }
    console.log(vari)
    vari++
    snakez(vari)
}
snakez(1)