const rs = require('readline-sync');
//write a program to take number form user and determine whether the number is odd or even

const number = rs.question('Give a number to check ? ');
if(number % 2 == 0){
  console.log('It is even number')
}else{
  console.log('It is odd number')
}