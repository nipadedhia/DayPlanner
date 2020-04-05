// var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
  console.log(currentDate);
  date();
});
