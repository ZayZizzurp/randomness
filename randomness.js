//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber() {
    const decimal = Math.random();
    const times21 = decimal * 21;
    const final = Math.floor(times21);
    console.log(final);
}

function randomLetter() {
    const decimal = Math.random();
    const times26 = decimal * 26;
    const randomLetter = Math.floor(times26);
    console.log(alphabet[randomLetter]);
}

function randomFood() {
    const decimal = Math.random();
    const timesLength = decimal * foods.length;
    const randomFood = Math.floor(timesLength);
    console.log(foods[randomFood]);
}

function randomStudent() {
    const decimal = Math.random();
    const timesLength = decimal * students.length;
    const randomStudent = Math.floor(timesLength);
    console.log(students[randomStudent]);
}

function randomGroup() { 
const decimal = Math.random();
const timesLength = decimal * students.length;
const randomStudent = Math.floor(timesLength);
console.log(students[randomStudent], students[randomStudent], students[randomStudent]);
}

randomNumber();
randomLetter();
randomFood();
randomStudent();
randomGroup();