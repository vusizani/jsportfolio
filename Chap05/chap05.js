var item1;
var item2;
var item3;

document.getElementById("changeList").onclick = newList;

function newList() {
  item1 = prompt("Enter the first thing.");
  item2 = prompt("Enter the second thing.");
  item3 = prompt("Enter the third thing.");
  updateList();
}

function updateList() {
  document.getElementById("o").innerHTML = item1;
  document.getElementById("d").innerHTML = item2;
  document.getElementById("g").innerHTML = item3;
}
