document
  .getElementById("btn-select")
  .addEventListener("click", function (event) {
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

document
  .getElementById("btn-calculate")
  .addEventListener("click", function () {});
