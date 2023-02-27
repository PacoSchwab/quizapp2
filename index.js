// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');
const formNewCard = document.querySelector('[data-js="form"]');

const submitButton = document.querySelector('[data-js="submit__button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card__answer--active")) {
    answerButton.textContent = "hide answer";
  } else {
    answerButton.textContent = "show answer";
  }
});

/* Alternative
answerButton.addEventListener("click", () => {
  if (cardAnswer.hasAttribute("hidden")) {
    cardAnswer.removeAttribute("hidden");
  } else {
    cardAnswer.setAttribute("hidden", "");
  }
});*/

formNewCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const formValues = new FormData(event.target);
  const data = Object.fromEntries(formValues);

  const questionInput = data.question;
  const answerInput = data.answer;
  const tagInput = data.tag;

  const newCard = document.createElement("article");
  document.body.main.append(newCard);

  const newQuestion = document.createElement("h2");
  newQuestion.textContent = questionInput;
  newCard.append(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.textContent = answerInput;
  newCard.append(newAnswer);
});
