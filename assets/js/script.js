const btnAdd = document.querySelector("#adicionar")
const btnRem = document.querySelector("#subtrair")

let currentNumberWrapper = document.querySelector("#currentNumber")
let currentNumber = 0

btnAdd.addEventListener("click", () => {
    
    if(currentNumber >=10) {
        alert("O limite para o contador é 10!")
    } else {
        currentNumber += 1

        currentNumberWrapper.innerHTML = currentNumber
        
        verifyStyleNumber(currentNumber)
    }
    
}) 

btnRem.addEventListener("click", () => {
    
    if(currentNumber <= -10) {
        alert ("O limite para o contador é -10")

    } else {
        currentNumber -= 1

        currentNumberWrapper.innerHTML = currentNumber

        verifyStyleNumber(currentNumber)
    }
    
    
})

function verifyStyleNumber(currentNumber) {
    if (currentNumber < 0) {
        currentNumberWrapper.classList.remove("positive")
    } else {
        currentNumberWrapper.classList.add("positive")
    }
} 

