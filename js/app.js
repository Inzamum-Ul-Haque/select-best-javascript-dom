document
  .getElementById("btn-select")
  .addEventListener("click", function (event) {
    //select player list
    const selectedPlayerList = document.getElementById("selected-player-list");
    if (selectedPlayerList.childElementCount >= 5) {
      alert("You cannot add more than 5 players");
      return;
    }

    if (event.target.innerText === "Select") {
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

    const total = manager + coach + playerExpense;

    //set total value
    setElementValue("total-expense", total);
  });
