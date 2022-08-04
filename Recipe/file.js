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

function haha() {
 return "haha"
}

let lol = "lol"

