const num1 = prompt("Enter a number between 1-100: ");

if (num1 <= 100 & num1 >= 1){
  alert(`Thank you! You entered ${num1}, a valid number.`);
}
else {
  alert(`Sorry, ${num1} is not a valid entry.`)
}