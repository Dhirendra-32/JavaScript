// Part of ES6

const name = "john";
const age = 30;
const job = "Web Developer";
const city = "Miami";

//without template thing

html = "<ul>" + "<li>name is " + name + "</li>" + "<li>name is " + age + "</li>" + "<li>name is " + job + "</li>" + "<li>name is " + city + "</li>" + "</ul>";

// With templatestrings basically conveninces

html = `<ul>
            <li>name:${name}</li>
            <li>age:${age}</li>
            <li>job:${job}</li>
            <li>city:${city}</li>
        </ul>`;

document.body.innerHTML = html;
