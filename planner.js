var currentTime = moment().format("h a");
var eventList;

// display date and time on header
$(document).ready(function () {
  var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
  $("#currentDay").text(currentDate);

  // variable taskArea created for textarea tag
  var taskArea = $("<textarea>");

  //display time for task area
  var startTime = moment("8 am", "h a").format("h a");

  //Displays time slots
  for (var i = 1; i < 14; i++) {
    var timeDisplay = $("<p>"); //<p> is created to display time slots
    timeDisplay.addClass("hour col-md-2"); // added class to time slot
    timeDisplay.append(startTime); // .append is used to add start time
    //variable declared for Task list
    var taskArea = $("<textarea>");

    //using moment.js rendering time zone color based on current time
    //if time is same as current time then time block will have gray color
    if (moment(startTime, "h a").isBefore(moment(currentTime, "h a"))) {
      taskArea.addClass("row textarea past col-md-9");

      //if time is same as current time then time block will have orange color
    } else if (moment(currentTime, "h a").isSame(moment(startTime, "h a"))) {
      taskArea.addClass("row textarea present col-md-9");

      //if time is same as current time then time block will have Green color
    } else if (moment(startTime, "h a").isAfter(moment(currentTime, "h a"))) {
      taskArea.addClass("row textarea future col-md-9");
    }

    taskArea.attr("id", "text_area" + i); //creating unique id for text area like text_Area1, text_Area2

    taskArea.val(localStorage.getItem("text_area" + i));

    //Save button and style of save button is fa fa-save (Google font awesome)
    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn col-md-1 fa fa-save");
    saveBtnEl.attr("value", "area" + i); // creating unique id for button like area1, area2

    $("#task").append(timeDisplay, taskArea, saveBtnEl, "<br>");
    startTime = moment(startTime, "h a").add(1, "hour").format("h a");
  }

  $("button").on("click", function () {
    eventList = $(this).val(); //button id area1
    var uniqueText = $("#text_" + eventList).val();
    localStorage.setItem("text_" + eventList, uniqueText);
    // console.log(eventList); // getting button id
    // console.log(uniqueText);
    // console.log("text_" + eventList); // getting text area id
    // console.log(localStorage.getItem("#text_" + eventList));
  });
});
