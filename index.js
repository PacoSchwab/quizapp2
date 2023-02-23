// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
