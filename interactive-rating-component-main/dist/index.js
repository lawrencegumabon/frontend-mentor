const ratingSection = document.querySelector(".rating-section");
const thankyouSection = document.querySelector(".thankyou-section");

const ratingButton = document.querySelectorAll(".buttons");
const submitButton = document.querySelector("button");

let selectedRating;

ratingButton.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButton.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");
    selectedRating = button.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    ratingSection.classList.add("hidden");
    thankyouSection.classList.remove("hidden");

    const thankyouMessage = document.querySelector(".ratings");
    thankyouMessage.innerHTML = `You selected ${selectedRating} out of 5`;
  }
});
