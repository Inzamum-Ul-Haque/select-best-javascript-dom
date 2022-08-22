document
  .getElementById("btn-select")
  .addEventListener("click", function (event) {
    //check if the click is outside the button
    if (event.target.innerText !== "Select") {
      return;
    }

    //select player list
    const selectedPlayerList = document.getElementById("selected-player-list");
    if (selectedPlayerList.childElementCount >= 5) {
      alert("You cannot add more than 5 players");
      return;
    }

    if (event.target.innerText === "Select") {
      console.log(event.target);
      event.target.classList.add("disabled");
    }

    const playerName = event.target.parentNode.firstElementChild.innerText;

    //create new li then add it to the list
    const li = document.createElement("li");
    li.innerText = playerName;
    selectedPlayerList.appendChild(li);
  });

document.getElementById("btn-calculate").addEventListener("click", function () {
  //count how many players
  const selectedPlayerList = document.getElementById("selected-player-list");
  const playersCount = selectedPlayerList.childElementCount;

  const budget = getInputFieldValue("input-budget");
  if (budget === "null") {
    alert("Please provide a valid number in input field!!");
    return;
  }

  //calculate player expense
  const expense = playersCount * budget;

  //set player expense value
  setElementValue("player-expense", expense);
});

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    //get manager, coach and player expenses
    const manager = getInputFieldValue("manager-budget");
    const coach = getInputFieldValue("coach-budget");
    const playerExpense = getElementValue("player-expense");
    if (manager === "null" || coach === "null") {
      alert("Please provide a valid number in input field!!");
      return;
    }

    const total = manager + coach + playerExpense;

    //set total value
    setElementValue("total-expense", total);
  });

document
  .getElementById("input-budget")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });
