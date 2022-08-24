

let form = document.getElementById("form");

form.addEventListener("submit", handleFormSubmit);
var todoArr = JSON.parse(localStorage.getItem("book-list")) || [];
function handleFormSubmit(e) {
  e.preventDefault();
  let bookName = document.getElementById("form").elements[0].value;
  let author = document.getElementById("form").elements[1].value;
  let bookDes = document.getElementById("form").elements[2].value;
  let date = document.getElementById("form").elements[3].value;
  let category = document.getElementById("form").elements[4].value;
  let bookPrice = document.getElementById("form").elements[5].value;
  let formData = { bookName, author, bookDes, date, category, bookPrice };
  todoArr.push(formData);
  localStorage.setItem("book-list", JSON.stringify(todoArr));
  window.location.href = "/dashboard.html";
}
