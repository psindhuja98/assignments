const rs = require('readline-sync');
//1. write a program to add 5 numbers. The value of numbers are num1=5, num2=13,num3=7, num4=21, num5=48

const num1 = 5;  
const num2 = 13;
const num3 = 7;
const num4 = 21;
const num5 = 48;

const sum = num1+num2+num3+num4+num5;
console.log(sum);

//2.write a program to take number form user and determine whether the number is odd or even

const number = rs.question('Give a number to check ? ');
if(number % 2 == 0){
  console.log('It is even number')
}else{
  console.log('It is odd number')
}

//3. write a program to find the maximum and minimum out of two given numbers.the numbers are num1=129 and num2=251
const n1=129;
const n2=251;
if(n1>n2){
  console.log(n1 +' is greater');
  
}else{
  console.log(n2 +' is greater');
}


//4. write a program to find the maximum out of three given numbers.the numbers are num1=18, num2=23, num3=17

const number1 = 18;
const number2 = 23;
const number3 = 17;
if(number1>number2 && number1 > number3){
  console.log(number1 +' is maximum');
}
else if(number2 > number3){
  console.log(number2 +' is maximum');
}
else{
  console.log(number3 +' is maximum');
}

//5. write a program to find the minimum out of three given numbers.the numbers are num1=35, num2=29,num3=46

const no1 = 35;
const no2= 29;
const no3 =46;
if(no1<no2 && no1<no3){
  console.log(no1 +' is minimum');
}
else if(no2 < no3){
  console.log(no2 + ' is minimum');
}

else{
  console.log(no3 +' is minimum');
}

//6.write a program to take a month as an input from the user and find out whether the month has 31 days or not

const month = rs.question('Type a month  ');
if(month == 'january' || month == 'March' || month == 'May' || month == 'july' || month == 'August' || month == 'october' || month =='decembe(r')
{
  console.log('the month has 31 days');
}
else{
  console.log('the month has not 31 days');
}


  


