// Function to create a new paragraph when a button is clicked
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

// Get all buttons on the page
const buttons = document.querySelectorAll("button");

// Add an event listener to each button
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
