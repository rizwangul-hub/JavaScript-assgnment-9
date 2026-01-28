//Assignment : 9 JavaScript
//Submitted By : Rizwan Ullah

//Functions

//Task : 1 : Add Two Number
function add(a,b){
    console.log(a+b);
}
add(3,5) //8

//.......................................................................

//Task : 2 : Cheak Even or Odd
function cheak(a){
    if(a%2==0){
        console.log("Even");   
    }
    else{
        console.log("Odd");  
    }
}
cheak(5) // odd
cheak(8) // Even

//.........................................................................

//Task : 3 : Celsius to Fahrenheit
function CelsiusToFahrenheit(C){
    console.log(C*1.8+32);
}
CelsiusToFahrenheit(0) //32

//...........................................................................

//Task : 4 : Return Full Name
function fullName(first,last){
console.log(first +" "+ last);
}
fullName("Rizwan","Ullah") //Rizwan Ullah

//............................................................................,

//Task : 5 : Square a Number

function Square(num){    
  console.log(num*num);
}
 Square(4); //16
 Square(5); //25

 //.............................................................................

 //Task : 6 : Count Vowels
 function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("JavaScript")); // 3

//.............................................................................

//Task : 7 : Find maximum of Three numbers
function maximum( num1, num2, num3){
  if(num1>num2 && num1 > num3){
    console.log("The greater number is" + " "+ num1);
    
  }
  else if (num2> num1 && num2 > num3){
 console.log("The greater number is" +" "+ num2);
 
  }
  else{
    console.log("The greater number is" + " "+ num3);
    
  }
}
maximum(5,9,8) //The greater number is 9

//......................................................................................

//Task : 8 : Reverse a String
 function reverseStr(str){
 return str.split("").reverse().join("");
 }
 console.log(reverseStr("abc"));  //cba

 //.....................................................................................

//Task : 9 : Palindrome Cheak
 function strInclude(str){
  return str.includes("Rizwan")
 }
 console.log(strInclude("My name is Rizwan"));

 //.....................................................................................

//Task : 10 : Factorial
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5)); // 120


//.......................................................................................

//Task : 11 : Largest number in Array
function largest(arr){
  return Math.max(...arr);
}
console.log(largest ([34,2,53,24])); //53


//........................................................................................

//Task : 12 : Return Even Number only
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9])); //[2,4,6,8]


//.......................................................................................

//Task : 13 : Calculate Discount Price
// let price;
// let Discount; 
function discountPrice (Discount,price){
  let totalPrice = price-(price*Discount/100);
console.log(totalPrice);
}
discountPrice(20,150);

//.......................................................................................

//Task : 14 : Generate 4-Digit OTP 
function OTP(){
  let min =1000;
  let max= 10000;
  let randomOTP = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomOTP);
  
}
OTP() //7345 change every time

//.......................................................................................

//Task : 15 : Count Word in a Sentece
function count(Sentece){
 let input=Sentece.trim().split(" ").length;
 return input
  
}
console.log(count("Noman is my frind")); //4

//......................................................................................

//Task : 16 : Student Grade Calculation
function student(marks){
  if(marks>=90){
    console.log("Grade A");
    
  }
  else if(marks>=75){
    console.log("Grade b");
    
  }
  else if(marks>=50){
    console.log("Grade c");
    
  }
  else{
    console.log("Fail");
    
  }
}
student(55) //Grade C
student(77) //Grade B
student(92) //Grade A
student(43) //Fail

//..........................................................................................

//Task : 17 : Voting Eligibility
function vote(age){
  if(age>=18){
    console.log("Eligible");
    
  }
  else{
    console.log("Not Eligible");
    
  }
}
vote(16) //Not ELigible
vote(19) //ELigible

//........................................................................................
//End of Assignment 9 JavaScript




