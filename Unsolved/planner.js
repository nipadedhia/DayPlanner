// display date and time on header
$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
  // console.log(currentDate);

  // variable taskArea created for textarea tag
  var taskArea = $("<textarea>");

  //adding class to textarea
  // taskArea.addClass("textarea present col-md-9");
  // taskArea.attr("name", "Test");

  // // variable saveBtn created for button tag
  // var saveBtnEl = $("<button>");
  // saveBtnEl.addClass("fa fa-save");

  //display time for task area
  // var taskTime = moment("8 am", "h a").format("h, a");
  // console.log(taskTime);
  // timeDisplay.append(taskTime);
  // var taskTime = moment.format("h, a");

  for (var i = 1; i < 14; i++) {
    var timeDisplay = $("<p>");
    timeDisplay.addClass("hour col-md-2");

    var taskArea = $("<textarea>");
    taskArea.addClass("textarea row present col-md-9");
    taskArea.attr("name", "Test");

    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn col-md-1 fa fa-save");
    saveBtnEl.attr("data-letter", "save");

    $("#task").append(timeDisplay, taskArea, saveBtnEl, "<br>");

    // var toDoTask = {
    //   list: "",
    // };

    var time = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7"];
    updateTime();

    function updateTime() {
      var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
      for (var i = 0; i < time.length; i++) {
        if (parseInt(time[i]) > currentDate) {
          $("#" + time[i]).addClass("future");
        } else if (parseInt(time[i]) < currentDate) {
          $("#" + time[i]).addClass("past");
        } else if (parseInt(time[i]) == currentDate) {
          $("#" + time[i]).addClass("present");
        }
      }
    }
  }
});
