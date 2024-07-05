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
