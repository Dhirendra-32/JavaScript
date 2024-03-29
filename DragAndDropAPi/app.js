const draggableList = document.getElementById("draggable-list");
const checkButton = document.getElementById("check");

const richPeopleList = [
  "Elon Musk",
  "Jeff Bezos",
  "Bernard Arnault",
  "Bill Gates",
  "Warren Buffett",
  "Larry Page",
  "Sergey Brin",
  "Steve Ballmer",
  "Larry Ellison",
  "Gautam Adani",
  "Bottom Line",
];

const listItems = [];
createList();
// Insert list items into DOM
function createList() {
  [...richPeopleList]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `<span class="Number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);
      draggableList.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  //console.log("Event: ", "dragstart");
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  //console.log("Event: ", "dragenter");
  this.classList.add("over");
}

function dragLeave() {
  console.log("Event: ", "dragleave");
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();

    if (personName !== richPeopleList[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
checkButton.addEventListener("click", checkOrder);
