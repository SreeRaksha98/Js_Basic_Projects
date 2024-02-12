document.getElementById("btn").addEventListener('click', (event) => {
    console.log(event)

    let userInput = document.getElementById("string").value
    let stringRev = userInput.split("").reverse().join("")
    let reversedString = stringRev.toUpperCase()
    let originalString = userInput.toUpperCase()

    if(originalString == reversedString){
        document.querySelector("#stringPal").value = "Yes"
    }else{
        document.querySelector("#stringPal").value = "No"
    }

    document.querySelector("#stringLength").value = userInput.length
})