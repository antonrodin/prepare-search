// Array of Spanish Stop Words
const stopwords = require('stopwords-es');

// Metaphone function
const metaphone = require('metaphone');

let str = "Este es un ejemplo de cadena de texto, de la cual eliminamos los Stop Words en Español ÉSTE y caractres espaciales mèdic çaça como por este: ?, ! o ()";

// Remove all special chars. [^\w] - Match anything except alphanumeric characters and special spanish letters like ñ
str = str.replace(/[^\w\sñÑçÇáéíóúÁÉÍÓÚüÜàèìòùÀÈÌÒÙ]/gi, "");
console.log(str);



// String.prototype.escapeSpecialChars = function() {
//     let replaceString = this;
//     return replaceString.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "");
// }

// // Extends string to replace the stop array with nothing
// String.prototype.replaceStopWords = function(find) {
//     let replaceString = this;
//     let re;
//     for (let i = 0; i < find.length; i++) {
//         re = new RegExp(`^${find[i]}$`, "gi");
//         //console.log(re);
//         replaceString = replaceString.replace(re, "");
//     }
//     return replaceString;
//   };