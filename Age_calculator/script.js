let currDate= document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge= document.getElementById("CalcAge");
const displayAge= document.getElementById("displayAge");
const Age= document.getElementById("age");

var today = new Date()
currDate.innerText = `Today's date is: ${today.toLocaleDateString('en-US')}`

CalcAge.addEventListener('click',(event) => {
    console.log(event)
    var birthDate = new Date(dateOfBirth.value)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    console.log(today.getFullYear(), birthDate.getFullYear(), age)
    displayAge.style.visibility="visible";
    Age.innerText = `Your age is ${age}`
})