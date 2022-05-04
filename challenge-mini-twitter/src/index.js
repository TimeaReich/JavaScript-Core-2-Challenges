let tweet = document.querySelector(".input").value;
console.log(document.querySelector(".input").value);

let button = document.querySelector(".submit-btn");
button.addEventListener("click", addtweet);

function addtweet() {
  document.querySelector(".tweets").innerHTML = tweet;
}
