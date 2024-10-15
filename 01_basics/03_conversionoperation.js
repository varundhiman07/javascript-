let score = 33;

console.log(typeof score);
console.log(typeof (score));

let value = "null"

console.log (typeof (value));

let valueInNumber = Number(value);
console.log(typeof(valueInNumber));
console.log(valueInNumber);    //shows nan not a number //

//33=> number 
//33abc => not a number but shows datatype number
//true=> 1 and false=> 0 
//undefined => not a number
//null => 0

//                           operations                            //

let str1 = 2;
let str2 = 4;
 
let str3 = str1 + str2;

console.log(str3);
 
console.log("1" + 2); // add according to string 
console.log(1 + "2"); // add according to string
console.log("1" + 2 + 2); //add according to string 
console.log(1 + 2 + "2"); // first add the number then add the string *important 
console.log(3 * 2 + "4"); // first multiply the number then add according to string

let number = "mani";
let  alphabet = 4;
let plus = number + alphabet;
console.log(typeof (plus));
console.log(plus);

