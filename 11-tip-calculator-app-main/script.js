const totalBill = document.getElementById("totalBill");
const noOfPeople = document.getElementById("noOfPeople");
const tip = document.querySelectorAll("button");
const customTip = document.getElementById("customTip");
const resetBtn = document.getElementById("resetBtn");
const tipAmountPerPerson = document.querySelector(".tipAmountPerPerson");
const totalPerPerson = document.querySelector(".totalPerPerson");
const alert = document.getElementById("alert");

let selectedTipPercentage = 0; 

// Function to calculate and display the tip amount
const calculateTip = () => {
  let totalBillValue = parseFloat(totalBill.value);
  let totalNoOfPeople = parseFloat(noOfPeople.value);
  let tipAmountValue = totalBillValue * (selectedTipPercentage / 100);
  let customTipPer = totalBillValue * (customTip.value / 100);

  let tipPerPerson = 0; 
  let customTipPerPerson = 0; 

  // calculate tip amount per person and custom tip amount per person
  if (totalNoOfPeople > 0) {
    tipPerPerson = tipAmountValue / totalNoOfPeople;
    customTipPerPerson = customTipPer / totalNoOfPeople;
  }

  // calculate the total amount per person
  let totalPerPersonVal = totalBillValue + tipAmountValue;
  let finalTotalPerPerson = totalPerPersonVal /totalNoOfPeople;

  // calculate the custom total amount per person
  let customTotalPerPersonVal = totalBillValue + customTipPer;
  let finalCustomTotalPerPerson = customTotalPerPersonVal / totalNoOfPeople;

  // Update tip & total amount per person
  if (tipPerPerson === 0) {
    tipAmountPerPerson.textContent = customTipPerPerson;
    totalPerPerson.textContent = finalCustomTotalPerPerson;
  } else {
    tipAmountPerPerson.textContent = tipPerPerson;
    totalPerPerson.textContent = finalTotalPerPerson;
  }
};

// Event listener for tip selection
tip.forEach((item) => {
  item.addEventListener("click", () => {
    selectedTipPercentage = parseFloat(item.textContent);
  });
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    calculateTip();
  }
  return;
});

// Reset button event listener
resetBtn.addEventListener("click", () => {
  totalBill.value = "";
  noOfPeople.value = "";
  customTip.value = "";
  tipAmountPerPerson.textContent = "0.00";
  totalPerPerson.textContent = "0.00";
  selectedTipPercentage = 0; 
});
