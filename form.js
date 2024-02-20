const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submitButton"]');
const main = document.querySelector('[data-js="main"]');

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
  console.log("typeof newQuestion: ", typeof newQuestion);
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
    console.log("typeof tagsInput: ", typeof tagsInput);
    console.log("tags: ", tagsArray);
    newTagsDiv.appendChild(newTag);
  });

  form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const questionCharacterCount = document.querySelector("#your-question"); // input charatcer count
  const charactersLeft = document.querySelector(
    '[data-js="remaining-characters"]'
  );
  const output = document.querySelector(".remaining-characters");

  questionCharacterCount.addEventListener("input", (event) => {
    console.log("typed char: ", event.target.value.length);
    charactersLeft.value = 150 - event.target.value.length;
    console.log("char left: ", charactersLeft.value);

    console.log(output.textContent);
  });
});
