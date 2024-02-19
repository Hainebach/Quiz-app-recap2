const body = document.querySelector('[data-js="body"]');

const bookmarkImg = document.querySelector('[data-js="bookmark-check"]');
console.log(bookmarkImg);

bookmarkImg.addEventListener("click", (event) => {
  console.log(event.target.src);
  if (event.target.src === "http://127.0.0.1:5502/assets/bookmark.png") {
    event.target.src = "http://127.0.0.1:5502/assets/bookmark_filled.png";
  } else {
    event.target.src = "http://127.0.0.1:5502/assets/bookmark.png";
  }
});
