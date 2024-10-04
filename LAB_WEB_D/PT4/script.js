function greet() {
    alert("Ini adalah eksternal JavaScript");
}

// console.log("Hello World");


// Function declaration
function nyapa() {
    alert("Haiiiiii");
}

// Function expression
let hormat = function() {
    alert("Hello Pak/Bu");
}

// Arrow function
let salam = () => {
    alert("Hello!");
}

    // salam(); // Output: Hello!

// Arrow function (shorter)
let nyapaTeman = name => alert("Hello! " + name);

    // nyapaTeman("Ahmad Iffat"); // Output: Hello! Ahmad Iffat

// Return Value Function
function sum(a, b) {
    return a + b;
}
    document.write(`<p> ${sum(1, 10)}</p>`);

    // let result = sum(5, 3);
    // console.log(result); // Output: 8

// Anonymous function
let sapa = function(name) {
    console.log(`Hello ${name}!`);
}

    // sapa(); // Output: Hello!