// Listen to Submit button while clicking

document.getElementById("loan-form").addEventListener("submit", function (e) {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "block";

  setTimeout(CalculateResults, 2000);

  e.preventDefault();
});

function CalculateResults() {
  // AFter clicking on submit button we have to grab all the value in UI_fieldName
  const $amount = document.getElementById("amount");
  const $interest = document.getElementById("interest");
  const $years = document.getElementById("years");

  const $monthlyPayment = document.getElementById("monthly-payment");
  const $totalPayment = document.getElementById("total-payment");
  const $totalinterest = document.getElementById("total-interest");

  //  accessing value of form
  const principle = parseFloat($amount.value);
  const calculatedInterest = parseFloat($interest.value) / 100 / 12;
  const calculatedYear = parseFloat($years.value) * 12;

  // montly calculate
  const x = Math.pow(1 + calculatedInterest, calculatedYear);

  const monthly = (principle * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    $monthlyPayment.value = monthly.toFixed(2);

    $totalPayment.value = (monthly * calculatedYear).toFixed(2);

    $totalinterest.value = (monthly * calculatedYear - principle).toFixed(2);

    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    ShowError("Please check your number");
  }
}

function ShowError(error) {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";
  // Create div
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");

  const heading = document.querySelector(".heading");

  // add class

  errorDiv.className = "alert alert-danger";

  // Create textNode append to div

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  // Clear after three seconds

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
