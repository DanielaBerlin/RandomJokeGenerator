// https://api.chucknorris.io/jokes/random

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener("click", getJoke);

// function getJoke() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//     console.log(data)
//     joke.innerHTML = data.value;
 
//   })
// }

