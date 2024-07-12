function showAnswer(response) {
    alert(response.data.answer);
  }
  
  let apiKey = "06a59897dof9572ebabb740ftb4354ba";
  let context =
    "be polite and provide a very short answer. make sure to pick one";
  let prompt = "what's the best healthiest cuisine in the world?";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Processing")
  axios.get(apiUrl).then(showAnswer);

  //css in javaScript
  function handleClick() {
    alert("hooray");
  }
  let buttonElement = document.querySelector("#special-button");
  buttonElement.addEventListener("click", handleClick);
  buttonElement.style.background = "red";

  //challenge
  //chal 1
var challeng1Button = document.querySelector("#challenge-1");
challeng1Button.setAttribute("disabled", "disabled");

//chall 2
var challenge2Button = document.querySelector("#challenge-2");
challenge2Button.style.backgroundColor = "green";

// chall 3
var challenge3Button = document.querySelector("#challenge-3");
challenge3Button.classList.add("danger");

//lesson 7 js plugins

let heading = document.querySelector("h1");

new Typewriter('h1', {
  strings: "Hello World! Welcome to SheCodes!",
  autoStart: true,
  cursor: "",
  delay: 10,
});

//Homework task week 1- Joke Generator
function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "06a59897dof9572ebabb740ftb4354ba";
  let context =
    "Your are a funny AI Assistant that tells short and sweet jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Generate a short and unique joke a French people. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a joke for you.. please wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#make-joke-button");
generatorButton.addEventListener("click", generateJoke);
