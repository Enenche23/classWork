const FName = "John";
const age = 35;
const profession = "Software Engineer";
const gender = "male";

const concatResult =
"My name is " + FName +
" I am "+ age +" years old " +
"I am a "+ profession +
" and I am " + gender+".";

const concatResult2 =  `My name is ${FName}
I am ${age} years old, I am a
${profession}, and I am a ${gender}.`

console.log(concatResult);
console.log(concatResult2);