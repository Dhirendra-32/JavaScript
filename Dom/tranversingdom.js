let val;

const list = document.querySelector("ul.collection");
const listitem = document.querySelector("li.collection-item");

val = listitem;

val = list;

// getting child node of UL (list)

val = list.childNodes; /* text plus children element*/

// GET CHILDREN ELEMENT  NODE

val = list.children; /* no text only children element*/

val = list.children[0];

list.children[0].textContent = "fucking js";

// Children of children

list.children[3].children[0].id = "fuking js";

val = list.children[3].children[0];

// FirstChild and

val = list.firstChild;

val = list.firstElementChild;

// LastElement and child

val = list.lastChild;

val = list.lastElementChild;

// get parnt node

val = listitem.parentNode;

val = listitem.parentElement;

val = listitem.parentElement.parentElement;

// sibling Get next sibling

val = listitem.nextSibling;

val = listitem.nextElementSibling;

console.log(val);
