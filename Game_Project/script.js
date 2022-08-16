let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})


// document.querySelector("#range1").addEventListener("click", () => {
    

// generating a range of numbers

let random_number_generate1 = Math.floor(Math.random() * 10)+1; 
console.log(random_number_generate1)

let random_number_generate2 = Math.floor(Math.random() * (20 - 11 + 1)) + 11
console.log(random_number_generate2)

let random_number_generate3 = Math.floor(Math.random() * (30 - 21 + 1)) + 21
console.log(random_number_generate3)



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

        if (input == random_number_generate1){
        errorMessage.innerHTML = " Yay!! You guessed the number"
        } else if ( input > random_number_generate1){
            errorMessage.innerHTML = "Your number is higher than secret number"
            wrong_count.textContent = count_wrong_numbers
            list_wrong_numbers.textContent = list_numbers
        } else if ( input < random_number_generate1){
            errorMessage.innerHTML = "Your number is lower than secret number"
            wrong_count.textContent = count_wrong_numbers
            list_wrong_numbers.textContent = list_numbers
    }
}

    )



    
