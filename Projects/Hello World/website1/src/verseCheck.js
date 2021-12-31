const verseCheck = function (givenVerse, maxVerse){
    if(givenVerse === maxVerse){
        givenVerse -= 2
    }
    if(givenVerse === maxVerse - 1){
        givenVerse -= 1
    }
    if(givenVerse === 0){
        givenVerse = 1
    }
    return givenVerse
};

export default verseCheck;