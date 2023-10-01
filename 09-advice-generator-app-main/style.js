const AdviceNumber = document.getElementById("number");
const Btn = document.querySelector(".dice");

async function newAdvice() {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const data = await response.json();
  document.getElementById("number").textContent = data.slip.id;
  document.querySelector("h1").textContent = data.slip.advice;
}

newAdvice();
