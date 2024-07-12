// Function to display the affirmation with a typing effect using Typewriter.js library
function displayAffirmation(response) {
    // Initialize a new Typewriter instance targeting the element with the ID 'affirm'
    new Typewriter("#affirm", {
        // Use the affirmation text received from the API response
        strings: response.data.answer,
        // Automatically start the typing animation
        autoStart: true,
        // Set the delay between typing each character to 1 millisecond
        delay: 1,
        // Remove the cursor from the typing animation
        cursor: "",
    });
}

// Function to generate an affirmation based on user instructions
function generateAffirmation(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user instructions from the input element with the ID 'user-instructions'
    let instructionsInput = document.querySelector("#user-instructions");
    // Define the API key for authentication
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    // Define the context to guide the AI's affirmation generation
    let context = `
        You are a health and wellbeing expert and love to craft positive affirmations.
        Your mission is to generate a 2 line affirmation in basic HTML and
        separate each line with a <br />.
        Make sure to follow the user instructions.
        Do not include a title.
        Sign the affirmation with 'Namaste' inside a <strong> element at the end of the affirmation and NOT at the beginning
    `;
    // Create the prompt for the AI using the user instructions
    let prompt = `User instructions: Generate a positive affirmation about ${instructionsInput.value}`;
    // Construct the API URL with the prompt, context, and API key using template literals correctly
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    // Get the element with the ID 'affirm' to display the affirmation
    let affirmationElement = document.querySelector("#affirm");
    // Remove the 'hidden' class to make the affirmation element visible
    affirmationElement.classList.remove("hidden");
    // Display a generating message while waiting for the API response
    affirmationElement.innerHTML = `<div class="generating">⏳ Generating a positive affirmation about ${instructionsInput.value}</div>`;

    // Send a GET request to the API URL and handle the response with the displayAffirmation function
    axios.get(apiURL).then(displayAffirmation);
}

// Get the form element with the ID 'affirmation-generator-form'
let affirmationFormElement = document.querySelector("#affirmation-generator-form");
// Add an event listener to the form to handle the 'submit' event and call the generateAffirmation function
affirmationFormElement.addEventListener("submit", generateAffirmation);

  