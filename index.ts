// Import stylesheets
//import './style.css';
console.log(window);
const url: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const form: HTMLFormElement = document.querySelector('#defineform');

form.onsubmit = (event) => {
  console.log(event);
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  fetch(url + text).then(data => {
    data.json().then(definition => {
      console.log(definition);
      document.getElementById("word").innerHTML = definition[0].word + ' ' + definition[0].phonetics[0].text;
      document.getElementById("definition1").innerHTML = definition[0].meanings[0].definitions[0].definition + '\n'
        + definition[0].meanings[0].definitions[1].definition + '\n'
        + definition[0].meanings[0].definitions[2].definition;

      
      // document.getElementById("definition2").innerHTML = definition[0].meanings[0].definitions[1].definition;
      // document.getElementById("definition3").innerHTML = definition[0].meanings[0].definitions[2].definition;
    })
  });
  // function getDefinition(): Promise<Define> {
  //   return fetch(url + text)
  //       .then(res => res.json())
  //       .then(res => { return res as Define})
  // }
  return false; // prevent reload
}

function testFunction() {
  document.getElementById("word").innerHTML = "Test";
}

export interface Define {
  word:      string;
  phonetic:  string;
  phonetics: Phonetic[];
  origin:    string;
  meanings:  Meaning[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions:  Definition[];
}

export interface Definition {
  definition: string;
  example:    string;
  synonyms:   any[];
  antonyms:   any[];
}

export interface Phonetic {
  text:   string;
  audio?: string;
}

