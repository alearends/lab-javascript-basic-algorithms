// :-)

// Iteration 1: Names and Input
//
const hacker1 = prompt('please tell me the first name');
alert(`The Driver's name is ${hacker1}`);


const hacker2 = prompt('please tell me the second name');
alert(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    alert(`The Driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
    alert(`The Navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
} 
else { alert(`Wow!, you both have equally long names, ${hacker1.length} characters`)
};

const yourAge = prompt('Please tell me your age');

// Iteration 3: Loops

if(yourAge > 21){
let driverName = "";
for(let i=0; i<hacker1.length; i++){
    driverName += hacker1[i].toUpperCase()+" ";
}
alert(`You are old!, so please take note: the Driver's name is ${driverName}`);

} else {

let navigatorName ="";
for(let i= hacker2.length - 1; i>0; i--){
    navigatorName += hacker2[i];
}
alert(`You are young!.... then it will be easy to read the Navigator's name: ${navigatorName}`);
};

let firstLetter ="";
if(hacker1 > hacker2){
    firstLetter = hacker1[0].toUpperCase();
    alert(`by the way, the Driver's name goes first because it start with: ${firstLetter}`);
} else if (hacker1 < hacker2) {
    firstLetter = hacker2[0].toUpperCase();
    alert(`by the way, the Navigator's name goes first because it start with: ${firstLetter}`);
} else {alert("What?! the Navigator and Driver have the same name?")}

