// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

/* Alternative
answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
});
*/

answerButton.addEventListener("click", () => {
  if (cardAnswer.hasAttribute("hidden")) {
    cardAnswer.removeAttribute("hidden");
  } else {
    cardAnswer.setAttribute("hidden", "");
  }
});
