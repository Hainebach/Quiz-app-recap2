var rootElement = document.documentElement;
const switchButton = document.querySelector('[data-js="dark-mode"]');
const body = document.querySelector('[data-js="body"]');
console.log(typeof switchButton);

switchButton.addEventListener("change", () => {
  const clicked = switchButton.checked;
  console.log(clicked);
  if (clicked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
