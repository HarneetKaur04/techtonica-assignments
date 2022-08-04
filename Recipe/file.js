let like_button = document.createElement("btn");
like_button.innerHTML = "Like"
like_button.classList.add("button")

document.querySelector(".header").appendChild(like_button)
like_button.onclick = function (){
  alert("Thank you for liking my recipe!")}



let secret_ingredient = document.createElement('button');
secret_ingredient.innerHTML = "Click to know my secret ingredient"
let secret_ingredient_stored = document.querySelector("ul")
secret_ingredient_stored.appendChild(secret_ingredient)

let new_li = document.createElement('li');
new_li.innerHTML = "Maple Syrup!!!"
new_li.style.display = "none"

secret_ingredient_stored.appendChild(new_li)

// secret_ingredient.addEventListener("click", function() {
//   if (new_li.style.display === "none") {
//       new_li.style.display = "block";
//     } else {
//       new_li.style.display = "none";
//     }
// }
// )

secret_ingredient.addEventListener("click", function() {
  if (new_li.style.display === "none") {
      new_li.style.display = "block";
    } else {
      new_li.style.display = "none";
    }
}
)


// function show() {
//   let divide = document.getElementById("info");
//   if (divide.style.display === "none") {
//     divide.style.display = "block";
//   } else {
//     divide.style.display = "none";
//   }
// // }

function myFunction() {
  let text;
  let favIcecream= prompt("Do you like ice-creams? (Choose from: Hell Yeah, yes, hmmm)", "Hell Yeah");
  switch(favIcecream) {
    case "Hell Yeah":
      text = "Excellent choice. Ice-cream is good for your soul.";
      break;
    case "yes":
      text = "Excellent choice.!";
      break;
    case "hmmm":
      text = "Just hmmm????";
      break;
    default:
      text = "Are you sure??";
  }
  document.getElementById("tryit").innerHTML = text;
}



