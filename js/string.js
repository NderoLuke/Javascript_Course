/*
String is used to store and manipulate text 


*/

let myName = "We are the so-called \"Vikings\" from the north.";
console.log(myName);
console.log(myName.length)

// String methods

// There are 3 methods for extracting a part of a string:
/*
. slice(start, end) : slice() extracts a part of a string and returns the extracted part in a new string. Note: End not included
. substring(start, end)
. substr(start, length)
*/


// slice()

let names = "Donat, paradis, Neilla"
let selected = names.slice(7, 14);
console.log(selected);


// note: Slice, substring, substr are the same. the difference is for substr instead of end we have length.

let text = "Uwamahoro"
let part = text.substr(0, 5);
console.log(part);

/*
Replacing string content:

The replace() method replaces a specified value with another value in a string:

*/

let myCompany = " I like Microsoft Microsoft";
let replaced = myCompany.replace('Microsoft', 'Microfocus');
console.log(replaced);

// to replace all matches we use regular expression with /g flag
// you can also use replaceAll() method
let replaceAll = myCompany.replace(/Microsoft/g, 'Microfocus');

console.log(replaceAll);

// to replace all matches we use regular expression with /i flag
let replaceSensitive = myCompany.replace(/microsoft/i, 'Microfocus');
let replace2 = myCompany.replaceAll('Microsoft', 'Microfocus');
console.log(replaceSensitive);


// toUpperCase or toLowerCase()
let text1 = "Uwamahoro";
let text2 = text1.toUpperCase();
console.log(text2);

//concat()
let text3 = text1.concat(" ", text2);
console.log(text3);


// trim(): removes whitespace from both sides of a string

let str = "                      Hello  "

console.log(str.trim());

//trimStart() and trimEnd()  : remove white space at the start or end of a string.

// Converting a string to an array=> we use split() method

/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

*/

let myNamee = "Uwamahoro";
console.log(myNamee.split(""));

