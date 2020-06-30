document.getElementById("button").addEventListener("click", loadcustomer);

function loadcustomer(e) {
  console.log("evenexecuted");
  // Creating xhr object to initalize request

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // adding into html page the

      // converting into JS Object
      const customers = JSON.parse(this.responseText);

      let output = " ";

      console.log(customers);

      customers.forEach(function (customer) {
        output += `<ul>
                      <li>${customer.ID}</li> 
                      <li>${customer.name}</li>
                      <li>${customer.company}</li>
                      <li>${customer.Phone}</li>
                      </ul>`;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
