let val;

val = document;

val = document.all;

val = document.all[0];

val = document.all[1];

// properteis

val = document.all.length;

val = document.head;

val = document.title;

val = document.doctype;

val = document.URL;

val = document.characterSet;

val = document.contentType;

val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;

val = document.links[0];

val = document.links[0].id;
val = document.links[0].className;

val = document.links[0].classList[0];

val = document.images;

// it will give all script object
val = document.scripts;

val = document.scripts[0].getAttribute("src");
val = document.scripts[1].getAttribute("src");
val = document.scripts[2].getAttribute("src");

// turning collecction into array(foreach works only in array)

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (scripts) {
  console.log(scripts.getAttribute("src"));
});
