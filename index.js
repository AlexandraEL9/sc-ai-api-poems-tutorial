function showAnswer(response) {
    alert(response.data.answer);
  }
  
  let apiKey = "06a59897dof9572ebabb740ftb4354ba";
  let context =
    "be polite and provide a very short answer. make sure to pick one";
  let prompt = "what's the best cuisine in the world?";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Processing")
  axios.get(apiUrl).then(showAnswer);