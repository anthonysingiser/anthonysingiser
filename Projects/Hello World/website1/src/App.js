import { useEffect } from "react";
import { useState } from "react";
import bookChapVerse from "./bookChapVerse";

function App() {
  const[post, setPost] = useState('pending...');
  const[bibleResolve, setBibleResolve] = useState('...pending')
  
  useEffect(() => {
      fetch('https://api.kanye.rest')
        .then((response) => response.json())
        .then((data) => setPost(data.quote))
        .catch(() => console.log('bad news'))
  }, []);

  console.log(post)
  const bible = bookChapVerse(post);

  useEffect(() => {
    fetch(`http://bible-api.com/${bible.book}+${bible.chap}:${bible.verse}-${bible.verse+1}?verse_numbers=true`)
      .then((response) => response.json())
      .then((data) => setBibleResolve(data.verses[0].text))
      .catch(() => console.log('bad bible news'))
  }, []);

  return (
    <>
      <div className='App'>
          <h4>Kanye West once said:
            <br></br>
            <br></br>
              "{post}"
            <br></br>
            <br></br>
              Which has always reminded me of: 
            <br></br>
            <br></br>
              {bible.book} {bible.chap}:{bible.verse}
            <br></br>  
              "{bibleResolve}"    
          </h4>   
      </div>
    </>
  );
}
export default App;