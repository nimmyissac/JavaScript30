/*--form--*/
const addItems = document.querySelector('.add-items');
/*--ul--*/
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items"))||[];

var populateList = function() {
  var ul = document.querySelector("ul");
  ul.innerHTML = items.map(function(item, i) {
    return `
      <li>
        <input type="checkbox" name="item${i}" data-index = "${i}" ${item.done ? "checked" : ""} />
        <label for="item${i}" data-index = "${i}">${item.text}</label>
      </li>`
  }).join('');
  localStorage.setItem("items" ,JSON.stringify(items));
 
};
var addItemsToList = function(event) {
 event.preventDefault();
 var value = document.querySelector("input[type=text]").value;
 document.querySelector("form").reset();
 items.push({
    "text" : value,
    "done" : false
 });
 populateList();
};

var toggleDone = function(e) {
  var target = e.target;
  console.log("target is ", target);
  if(!(target.matches("label") || target.matches("input"))) return;
  var index = target.dataset.index;
  items[index].done = !(items[index].done);
  populateList();
};

populateList();
var ul = document.querySelector("ul");
ul.addEventListener("click", toggleDone);
document.addEventListener("submit", addItemsToList);


