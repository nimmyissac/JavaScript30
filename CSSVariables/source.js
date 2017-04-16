/*---change event listener to inputs, change values on each change ---*/

var inputArr = Array.prototype.slice.call(document.querySelectorAll("input"));
var handler = function() {
 var dataSet = this.dataset;
 var suffix = dataSet.sizing || '';
 document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
 console.log(this+" "+this.name);
 
}
inputArr.forEach(function(element) {
  element.addEventListener("change", handler);
});

