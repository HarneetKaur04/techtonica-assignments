let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

// On click, generate a random number which would be our secret number
document.querySelector(".feature-title").addEventListener("click", () => {
let random_number_generate = Math.floor(Math.random() * 10);
console.log(random_number_generate)
})

// when user inputs a number and submits : check if input meets criteria
// if input  = secret number { display Congrats!
// else input > secret number { secret number is lower}} + wrong guess count increase by 1 
// else input < secret number { secret number is higher}} + wrong guess count increase by 1


document.querySelector("#areafill2").addEventListener("click", () => {
    let input = document.getElementById("areafill1").value
    let errorMessage = document.getElementById("errormessage")
    let wrong_count = document.getElementById("wrongguesses")
    let list_wrong_numbers = document.getElementById("alreadyguessednumbers")
    if (isNaN(input)){
        
        errorMessage.innerHTML = "Please enter a number"  
    } else {
        errorMessage.innerHTML = "Perfect! Let's find out below if you were able to guess correctly"
    }

    if (input == random_number_generate){
        errorMessage.innerHTML = " Yay!! You guessed the number"
    } else if ( input > random_number_generate){
        wrong_count.textContent +=1
        list_wrong_numbers.innerHTML += input     
    }
}
    )



    
