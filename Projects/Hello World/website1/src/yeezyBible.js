import cycleFunc from './cycle.js';
import verseCheck from './verseCheck.js'; 
import bible from './bible.js'; 

const bibleNums = bible.bibleNums;

const main = function async () { 
    const kanyeResponse = await fetch(
        `https://api.kanye.rest`
        ) 
    const kanyeData = await kanyeResponse.json() 
    const kanyeQuote = await kanyeData.quote   
    
    const bookNum = cycleFunc(kanyeQuote, 66) 
    const book = bibleNums[bookNum][0]  
    
    const maxChap = bibleNums[bookNum][1] 
    const chapQuote = Math.floor(Math.random() * maxChap)
    
    const chap = cycleFunc(chapQuote, maxChap)      
    
    const maxVerse = bibleNums[bookNum][2][chap]    

    const verseTest = Math.floor(Math.random() * maxVerse)   
    const verse = verseCheck(verseTest, maxVerse) 
        
    const bibleResponse = await fetch(
        `http://bible-api.com/${book}+${chap}:${verse}-${verse + 1}?verse_numbers=true`
        )
        const bibleData = await bibleResponse.json()                                                                                                                                                                                                                
    return `${kanyeQuote} ${book}${chap}:${verse} ${bibleData}` 
}; 

main ();