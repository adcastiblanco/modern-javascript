// Variables
const form = document.querySelector("#formulario");
const tweetsListContainer = document.querySelector("#lista-tweets");
let tweets = [];

// Event listeners
callEventListeners();
function callEventListeners() {
  form.addEventListener("submit", addTweet);

  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    printHTML();
  });
}

// Funciones

function addTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  if (tweet === "") {
    showErrorMessage("El tweet no puede ir vacío");
    return;
  }
  const tweetObject = {
    id: Date.now(),
    tweet,
  };

  tweets = [...tweets, tweetObject];
  printHTML();
  form.reset();
}

function showErrorMessage(message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.classList.add("error");
  form.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, 2000);
}

function printHTML() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
  clearHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const tweetElement = document.createElement("p");
      tweetElement.textContent = tweet.tweet;
      tweetsListContainer.appendChild(tweetElement);

      const deleteButton = document.createElement("a");
      deleteButton.textContent = "X";
      deleteButton.classList.add("borrar-tweet");
      deleteButton.addEventListener("click", () => {
        deleteTweet(tweet.id);
      });
      tweetElement.appendChild(deleteButton);
    });
  }
}

function deleteTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  printHTML();
}

function clearHTML() {
  while (tweetsListContainer.firstChild) {
    tweetsListContainer.removeChild(tweetsListContainer.firstChild);
  }
}
