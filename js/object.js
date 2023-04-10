/*

Definotion
**********
an object is an entity having a state and behavior (properties and methods) 

 */

const courses = {
    title: "object",
    definition: "an object is an entity having a state and behavior (properties and methods) ",
    creationDate: "10/04/2023",
    created: function () {
        return this.title + "" + " was created at  " + this.creationDate
    }
}

let object = document.querySelector(".object");
object.innerHTML = courses.created();

/*  There is two way to access object properties or methods
============================================================
object.propertyName   : courses.title

object["propertyName"] : courses["title"]

*/

console.log(courses.definition);

console.log(courses["creationDate"]);
