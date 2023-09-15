let hour = prompt("Enter the hours: ")
let min = prompt("Enter the minutes: ")
let sec = prompt("Enter the seconds: ")

if (hour >= 0 && hour <= 23 && min >= 0 && min <= 59 && sec >= 0 && sec <= 59) {
  alert(`Time input: ${hour}h ${min}m ${sec}s`)
}

switch(Number(hour)){
  case 23: 
  hour = 0
  min = 0
  sec = 0
  alert(`One second later: ${hour}h ${min}m ${sec}s`)
}

switch(Number(min)){
  case 59: 
  min = 0
  sec = 0
  hour++
  alert(`One second later: ${hour}h ${min}m ${sec}s`)
}

switch(Number(sec)){
  case 59: 
  sec = 0
  min++
  alert(`One second later: ${hour}h ${min}m ${sec}s`)
}

while (sec >= 0 && sec <=59) {
  sec++
  alert(`One second later: ${hour}h ${min}m ${sec}s`)
  break;
}