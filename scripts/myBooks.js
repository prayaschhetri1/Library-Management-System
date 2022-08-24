const data = JSON.parse(localStorage.getItem("buy-list")) || [];
const tbody = document.getElementById("tbody");

const deleteFunc = (id) => {
  data.forEach((item, index) => {
    if(index === id) {
      data.splice(index, 1);
    }
    localStorage.setItem("buy-list", JSON.stringify(data));
    mapData(data)
  });
};

const mapData = (data) => {
  tbody.innerHTML = null;
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
    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";
    deleteBtn.classList = "dltBtn";
    deleteBtn.addEventListener("click", function () {
      deleteFunc(index);
    });

    td1.innerText = item.bookName;
    td2.innerText = item.author;
    td3.innerText = item.bookDes;
    td4.innerText = item.date;
    td7.innerText = item.category;
    td8.innerText = item.bookPrice;
    td6.append(deleteBtn);
    tr.append(td1, td2, td3, td4, td7, td8, td6);
    tbody.append(tr);
  });
};

mapData(data);
