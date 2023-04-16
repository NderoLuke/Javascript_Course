/*
a function is a block of code designed to perform a particular task.

a javascript function is executed when "something" called it.
*/



function Sum(num1, num2) { // here num1 and num2 are function parameters.
    return num1 + num2;
}

console.log(Sum(23, 8));  // 28, 8 are function arguments.

/* why function: We use function for code reusage: we can define a function once and reuse it many time. When different argument are provided, different result will be generated  

function name with () will call function object while function with () will call function result


*/

(function helloWorld() {
    console.log("Hello world");
})();
