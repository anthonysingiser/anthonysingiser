import cycleFunc from './cycle.js';
import verseCheck from './verseCheck.js'; 
import bible from './bible.js'; 

const bibleNums = bible.bibleNums;

const bookChapVerse = function(words){

  const bookNum = cycleFunc(words);
  const book = bibleNums[bookNum][0];

  const maxChap = bibleNums[bookNum][1];
  const chapQuote = Math.floor(Math.random() * maxChap + 1);
  const chap = cycleFunc(chapQuote, maxChap);
  
  const maxVerse = bibleNums[bookNum][2][chap];
  const verseTest = Math.floor(Math.random() * maxVerse + 1);
  const verse = verseCheck(verseTest, maxVerse);

  const results = {
    book: book,
    chap: chap,
    verse: verse
  }
  return results;
}
export default bookChapVerse;