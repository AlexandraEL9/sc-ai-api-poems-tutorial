function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    //build api url
    let apiKey = "06a59897dof9572ebabb740ftb4354ba";
    let context = "You are a romantic poetry expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions.";
    let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
    let apiUrl = 
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    alert(`Generating Poem about ${prompt} Please wait...`)

    //make a call to the api (axios)
    axios.get(apiUrl).then(displayPoem);
    //display generated poem
  
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);