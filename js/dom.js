<<<<<<< HEAD
<<<<<<< HEAD
// HTML DOM document object is owner of all other object in your webpage

=======
>>>>>>> dev
document.querySelector(".h").innerHTML = "Bye";
=======
document.querySelector(".h").innerHTML = "Bye";

/* The HTML DOM is a standard for how to get, change, add and delete HTML elements

in the exapmle above querSelector: is a method/action wheras innerHTML: is a property

*/
let subTitle = document.createElement("h4");
subTitle.innerHTML = "This is subTitle"
let h2 = document.querySelector(".object").appendChild(subTitle);

console.log(subTitle);
h2.appendChild(subTitle);
>>>>>>> dev
