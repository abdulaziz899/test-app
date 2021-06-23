
function test(x) {
  var element = document.getElementById("oldID");
  element.id = x;
  console.log("click test");
}
function moveOut(x) {
  var element = document.getElementById(x);
  element.id = "oldID";
  console.log("click");
}
