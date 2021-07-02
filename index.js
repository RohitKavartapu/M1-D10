
let x = "John";
let y = "Doe";
console.log(x + "<>" + y)

const object = {
    name: "Rohit",
    surname: "Kavartapu",
    email: "kavartapur@gmail.com",
};
delete object.email;


let skills = ["HTML", "CSS", "JS", "Python", "Ruby", "Java", "SQL", "Azure", "Salesforce", "AWS"];
console.log("skills are:", skills)


let isRandomNumber = Math.floor(Math.random() * 100);
console.log("isRandomNumber:", isRandomNumber)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRndInteger(1, 84)

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Pineapple"];
if (fruits1.length < fruits2.length) {
    console.log("Fruits1 is longer than Fruits2")
} else {
    console.log("Fruits1 is not longer than Fruits2")
}

let list = [1, 2, 3, 4];
function empty() {
    list.length = 0;
}
empty();