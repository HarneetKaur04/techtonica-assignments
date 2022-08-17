let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

// generating a range of numbers
function generateNumbersWithinRange(upper, lower){
    return Math.floor(Math.random() * (upper - lower) + lower)
}

let random_number_generate;
document.querySelector(".row").addEventListener("click", (e) => {
    console.log(e.target.id)
    if (e.target.id === "range1"){
        random_number_generate = generateNumbersWithinRange(10, 1)
        console.log(random_number_generate) 
    } else if (e.target.id === "range2"){
        random_number_generate = generateNumbersWithinRange(20, 11)
        console.log(random_number_generate)
    } else {
        random_number_generate = generateNumbersWithinRange(30, 21)
        console.log(random_number_generate)
    }
})


// when user inputs a number and submits : check if input meets criteria
// if input  = secret number { display Yay!}
// else input > secret number { secret number is lower}} + wrong guess count increase by 1 + list of wrong guesses
// else input < secret number { secret number is higher}} + wrong guess count increase by 1

let count_wrong_numbers = 0
let list_numbers = []

document.getElementById("submit").addEventListener("click", () => {
    let input = document.getElementById("userinput").value
    let errorMessage = document.getElementById("errormessage")
    let wrong_count = document.getElementById("wrongguesses")
    let list_wrong_numbers = document.getElementById("alreadyguessednumbers")
    
    
    if (isNaN(input)){
        
        errorMessage.innerHTML = "Please enter a valid number"  
    } else {
        errorMessage.innerHTML = "Perfect! Let's find out below if you were able to guess correctly"
        count_wrong_numbers+=1
        list_numbers.push(input);
    }

        if (input == random_number_generate){
        errorMessage.innerHTML = " Yay!! You guessed the number"
        } else if ( input > random_number_generate){
            errorMessage.innerHTML = "Your number is higher than secret number"
            wrong_count.textContent = count_wrong_numbers
            list_wrong_numbers.textContent = list_numbers
        } else if ( input < random_number_generate){
            errorMessage.innerHTML = "Your number is lower than secret number"
            wrong_count.textContent = count_wrong_numbers
            list_wrong_numbers.textContent = list_numbers
    }
}

    )



    
