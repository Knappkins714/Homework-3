var counter = 1

while (counter <= 3) {

  const passWord = prompt("Enter the password: ")
  if (passWord === "secret") {
    alert(`You entered the correct password after ${counter} attempt(s).`)
    counter = 4
  }
  else {
    alert(`Incorrect after ${counter} attempt(s)`)
    counter++

    if (counter === 4) {
      alert(`Your account is locked! You failed to enter the correct password 3 times.`)
    }
  }
}