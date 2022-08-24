





const data = JSON.parse(localStorage.getItem("book-list")) || [];
const tbody = document.getElementById("tbody");

// Bookmark Data

let bookMarkData = JSON.parse(localStorage.getItem("bookmark-list")) || [];
const bookMarkFunc = (item, id) => {
  bookMarkData.push(item);
  localStorage.setItem("bookmark-list", JSON.stringify(bookMarkData));
  data.forEach((item, index) => {
    if (index === id) {
      data.splice(index, 1);
    }
    localStorage.setItem("book-list", JSON.stringify(data));
    mapData(data);
  });
};

// My Books

let myBooks = JSON.parse(localStorage.getItem("buy-list")) || [];
const buyFunc = (item, id) => {
  myBooks.push(item);
  localStorage.setItem("buy-list", JSON.stringify(myBooks));
  data.forEach((item, index) => {
    if (index === id) {
      data.splice(index, 1);
    }
    localStorage.setItem("book-list", JSON.stringify(data));
    mapData(data);
  });
};

// sorting with price

let sortSelect = document.getElementById("sort");

function handleSort(e) {
  console.log(e.target.value);
  if (e.target.value == "htl") {
    data.sort((a, b) => {
      return b.bookPrice - a.bookPrice;
    });
    mapData(data);
  } else if (e.target.value == "lth") {
    data.sort((a, b) => {
      return a.bookPrice - b.bookPrice;
    });
    mapData(data);
  } else {
    mapData(data);
  }
}

sortSelect.addEventListener("change", handleSort);

// Filter with category

let filterSelect = document.getElementById("filter-category");

const handleFilter = (e) => {
  let value = e.target.value;
  console.log(value);
  if (value === "sports") {
    let newArr = data.filter((item) => {
      return item.category == value;
    });
    mapData(newArr);
  } else if (value == "fiction") {
    let newArr = data.filter((item) => {
      return item.category == value;
    });
    mapData(newArr);
  } else if (value == "Education") {
    let newArr = data.filter((item) => {
      return item.category == value;
    });
    mapData(newArr);
  } else if (value == "finance") {
    let newArr = data.filter((item) => {
      return item.category == value;
    });
    mapData(newArr);
  } else {
    mapData(data);
  }
};

filterSelect.addEventListener("change", handleFilter);

//   Maping the data
let count = 0;
let total = document.getElementById("total");
if (count == 0) {
  total.style.display = "none";
}
const mapData = (data) => {
  tbody.innerHTML = null;
  total.innerHTML = null;
  data.map((item, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");

    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    editBtn.innerText = "Buy";
    deleteBtn.innerText = "Bookmark";
    deleteBtn.classList = "dltBtn";
    deleteBtn.addEventListener("click", function () {
      bookMarkFunc(item, index);
    });
    editBtn.addEventListener("click", function () {
      buyFunc(item, index);
    });
    td1.innerText = item.bookName;
    td2.innerText = item.author;
    td3.innerText = item.bookDes;
    td4.innerText = item.date;
    td7.innerText = item.category;
    td8.innerText = item.bookPrice;

    td5.append(editBtn);
    td6.append(deleteBtn);
    tr.append(td1, td2, td3, td4, td7, td8, td5, td6);
    tbody.append(tr);

    count++;

    total.innerText = `Total Books : ${count}`;
  });
};

mapData(data);
