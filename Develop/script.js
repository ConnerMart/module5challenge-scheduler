// shows the current: day, month date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var rightNow = new Date();
console.log(rightNow);

//
//
var nineBlock = new Date();
nineBlock.setHours(9, 0, 0);
// console.log(nineBlock);
//
var tenBlock = new Date();
tenBlock.setHours(10, 0, 0);
// console.log(tenBlock);
//
var elevenBlock = new Date();
elevenBlock.setHours(11, 0, 0);
// console.log(elevenBlock);
//
var twelveBlock = new Date();
twelveBlock.setHours(12, 0, 0);
// console.log(twelveBlock);
//
var oneBlock = new Date();
oneBlock.setHours(13, 0, 0);
// console.log(oneBlock);
//
var twoBlock = new Date();
twoBlock.setHours(14, 0, 0);
// console.log(twoBlock);
//
var threeBlock = new Date();
threeBlock.setHours(15, 0, 0);
// console.log(threeBlock);
//
var fourBlock = new Date();
fourBlock.setHours(16, 0, 0);
// console.log(fourBlock);
//
var fiveBlock = new Date();
fiveBlock.setHours(17, 0, 0);
// console.log(fiveBlock);
//

blocks = [
  $("#9am"),
  $("#10am"),
  $("#11am"),
  $("#12pm"),
  $("#1pm"),
  $("#2pm"),
  $("#3pm"),
  $("#4pm"),
  $("#5pm"),
];

function setColor9() {
  if (rightNow > nineBlock) {
    $("#9am").addClass("past");
  }
  if (rightNow < nineBlock) {
    $("#9am").addClass("future");
  }
  if (rightNow.getHours() === nineBlock.getHours()) {
    $("#9am").addClass("present");
  }
}
setColor9();

function setColor10() {
  if (rightNow > tenBlock) {
    $("#10am").addClass("past");
  }
  if (rightNow < tenBlock) {
    $("#10am").addClass("future");
  }
  if (rightNow.getHours() === tenBlock.getHours()) {
    $("#10am").addClass("present");
  }
}
setColor10();

function setColor11() {
  if (rightNow > elevenBlock) {
    $("#11am").addClass("past");
  }
  if (rightNow < elevenBlock) {
    $("#11am").addClass("future");
  }
  if (rightNow.getHours() === elevenBlock.getHours()) {
    $("#11am").addClass("present");
  }
}
setColor11();

function setColor12() {
  if (rightNow > twelveBlock) {
    $("#12pm").addClass("past");
  }
  if (rightNow < twelveBlock) {
    $("#12pm").addClass("future");
  }
  if (rightNow.getHours() === twelveBlock.getHours()) {
    $("#12pm").addClass("present");
  }
}
setColor12();

function setColor1() {
  if (rightNow > oneBlock) {
    $("#1pm").addClass("past");
  }
  if (rightNow < oneBlock) {
    $("#1pm").addClass("future");
  }
  if (rightNow.getHours() === oneBlock.getHours()) {
    $("#1pm").addClass("present");
  }
}
setColor1();

function setColor2() {
  if (rightNow > twoBlock) {
    $("#2pm").addClass("past");
  }
  if (rightNow < twoBlock) {
    $("#2pm").addClass("future");
  }
  if (rightNow.getHours() === twoBlock.getHours()) {
    $("2pm").addClass("present");
  }
}
setColor2();

function setColor3() {
  if (rightNow > threeBlock) {
    $("#3pm").addClass("past");
  }
  if (rightNow < threeBlock) {
    $("#3pm").addClass("future");
  }
  if (rightNow.getHours() === threeBlock.getHours()) {
    $("3pm").addClass("present");
  }
}
setColor3();

function setColor4() {
  if (rightNow > fourBlock) {
    $("#4pm").addClass("past");
  }
  if (rightNow < fourBlock) {
    $("#4pm").addClass("future");
  }
  if (rightNow.getHours() === fourBlock.getHours()) {
    $("4pm").addClass("present");
  }
}
setColor4();

function setColor5() {
  if (rightNow > fiveBlock) {
    $("#5pm").addClass("past");
  }
  if (rightNow < fiveBlock) {
    $("#5pm").addClass("future");
  }
  if (rightNow.getHours() === fiveBlock.getHours()) {
    $("#5pm").addClass("present");
  }
}
setColor5();
