const dayEntered = prompt("Enter a day of the week: ")

if ((dayEntered.length <= 3)) {
  alert(`You entered: ${dayEntered}`);
}
else {
  alert("That is not a valid day.")
}

switch(dayEntered){
  case "mon":
    alert("The following day is: tue")
    break;
  case "tue":
    alert("The following day is: wed")
    break;
  case "wed":
    alert("The following day is: thu")
    break;
  case "thu":
    alert("The following day is: fri")
    break;
  case "fri":
    alert("The following day is: sat")
    break;
  case "sat":
    alert("The following day is: sun")
    break;
  case "sun":
    alert("The following day is: mon")
    break;
}