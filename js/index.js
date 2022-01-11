
let hacker1= "Bobert"
let hacker2= "Robert"

console.log(`the drivers name is ${hacker1}`);
console.log(`the navigators name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ${hacker1.length} characters.')
} else if (hacker2.length > hacker1.length){
  console.log('The navigator has the longest name, it has ${hacker2.length} characters.')
} else if (hacker1.length === hacker2.length) {
  console.log('Wow, you both have equally long names, XX characters!.')
}
let result = ' ';
for(i = 0; i < hacker1. length; i++) {
  result += hacker1[i].toUpperCase() + ' ';
}
console.log(result);

let reversedName = ' ';
for(i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i]; 
}
console.log(reversedName);

console.log(result.localeCompare(reversedName))

// if (){
// console.log("The driver's name goes first.")
// } else if (){
//  console.log("Yo, the navigator goes first definitely.")
// } else if (){
// console.log("What?! You both have the same name?")}
