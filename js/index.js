console.log("I'm ready!")

// Iteration 1: Names and Input
//
let hacker1 = "Rafael";
console.log(`The Driver's name is ${hacker1}`);

let hacker2 = "leafar";
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
    console.log(`The Navigator has the longest name, it has ${hacker2.length} characters.`)
} 
else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
};

// Iteration 3: Loops
let driverName = "";
for(let i=0; i<hacker1.length; i++){
    driverName += hacker1[i].toUpperCase()+" ";
}
console.log(`so the Driver's name is ${driverName}`);

let navigatorName ="";
for(let i= hacker2.length - 1; i>0; i--){
    navigatorName += hacker2[i];
}
console.log(`look! I can write the Navigator's name in reverse: ${navigatorName}`);

let firstLetter ="";
if(hacker1 > hacker2){
    firstLetter = hacker1[0].toUpperCase;
    console.log(`The Driver's name goes first because it start with ${firstLetter}`);
} else if (hacker1 < hacker2) {
    firstLetter = hacker2[0].toUpperCase;
    console.log(`The Navigator's name goes first because it start with ${firstLetter}`);
} else {console.log("What?! You both have the same name?")}

