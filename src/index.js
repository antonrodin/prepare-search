const stopwords = require('stopwords-es');
const metaphone = require('metaphone');

const testString = "Este es un ejemplo de cadena de texto, de la cual eliminamos los Stop Words en Español y caractres espaciales como ?, ! o ()";

// Stop Words Array
const swArr = stopwords;

String.prototype.escapeSpecialChars = function() {
    let replaceString = this;
    return replaceString.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "");
}

// Extends string to replace the stop array with nothing
String.prototype.replaceStopWords = function(find) {
    let replaceString = this;
    let re;
    for (let i = 0; i < find.length; i++) {
        re = new RegExp(`${find[i]}`, "gi");
        console.log(re);
        //replaceString = replaceString.replace(re, "");
    }
    return replaceString;
  };

console.log(testString);
console.log(testString.escapeSpecialChars());