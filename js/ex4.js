const num1 = prompt("Enter a number: ")
const num2 = prompt("Enter another number: ")

if (num1 >= 0 && num2 >= 0) {
  alert(`Your numbers are ${num1} and ${num2}`)
}
else {
  alert("Invalid input.")
}

alert("Addition: " + (Number(num1) + Number(num2)))
alert("Subtraction: " + (Number(num1) - Number(num2)))
alert("Multiplication: " + (Number(num1) * Number(num2)))
alert("Division: " + (Number(num1) / Number(num2)))
alert("Modulo: " + (Number(num1) % Number(num2)))