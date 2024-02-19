const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submitButton"]');
const main = document.querySelector('[data-js="main"]');
const charactersLest = document.querySelector(
  '[data-js="remaining-characters"]'
);
const characterCount = document.querySelector('[data-js="characterCount"]');

// finish this in the morning

// characterCount.addEventListener("input", (event) => {
//   const charLeft = event.target.value.length;
//   console.log("charLest: ", charLeft);

// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = document.querySelector('[data-js="your-question"]').value;
  const answer = document.querySelector('[data-js="your-answer"]').value;
  const tagsInput = document.querySelector("#tags").value;
  const tagsArray = tagsInput.split(/\s+/);
  console.log("question: ", question);
  console.log("answer: ", answer);
  console.log("tags: ", tags);

  const newSection = document.createElement("section");
  newSection.classList.add("section-card");
  main.appendChild(newSection);
  console.log("new section: ", typeof newSection);

  const newQuestion = document.createElement("h2");
  newQuestion.textContent = question;
  newQuestion.classList.add("question-card__title");
  console.log(typeof newQuestion);
  newSection.appendChild(newQuestion);

  const newAnswer = document.createElement("p");
  newAnswer.textContent = answer;
  newSection.appendChild(newAnswer);

  const newTagsDiv = document.createElement("div");
  newTagsDiv.classList.add("question-card__tags");
  newSection.appendChild(newTagsDiv);

  tagsArray.forEach((tag) => {
    const newTag = document.createElement("div");
    newTag.textContent = `#${tag}`;
    newTag.classList.add("question-card__tag");
    console.log(typeof tagsInput);
    newTagsDiv.appendChild(newTag);
  });

  form.reset();
});
