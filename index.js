"use strict";
exports.__esModule = true;
// Import stylesheets
//import './style.css';
console.log(window);
var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
var form = document.querySelector('#defineform');
form.onsubmit = function (event) {
    console.log(event);
    var formData = new FormData(form);
    console.log(formData);
    var text = formData.get('defineword');
    console.log(text);
    fetch(url + text).then(function (data) {
        data.json().then(function (definition) {
            console.log(definition);
            document.getElementById("word").innerHTML = definition[0].word + ' ' + definition[0].phonetics[0].text;
            document.getElementById("definition1").innerHTML = definition[0].meanings[0].definitions[0].definition + '\n'
                + definition[0].meanings[0].definitions[1].definition + '\n'
                + definition[0].meanings[0].definitions[2].definition;
            // document.getElementById("definition2").innerHTML = definition[0].meanings[0].definitions[1].definition;
            // document.getElementById("definition3").innerHTML = definition[0].meanings[0].definitions[2].definition;
        });
    });
    // function getDefinition(): Promise<Define> {
    //   return fetch(url + text)
    //       .then(res => res.json())
    //       .then(res => { return res as Define})
    // }
    return false; // prevent reload
};
function testFunction() {
    document.getElementById("word").innerHTML = "Test";
}
