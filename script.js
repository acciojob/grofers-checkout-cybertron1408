const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(priceEl => {
    total += parseInt(priceEl.textContent);
  });

  // Check if #ans already exists
  let ansDiv = document.getElementById("ans");

  if (!ansDiv) {
    ansDiv = document.createElement("div");
    ansDiv.id = "ans";
    document.body.appendChild(ansDiv);
  }

  // Only show number inside #ans
  ansDiv.textContent = total;
};

getSumBtn.addEventListener("click", getSum);
