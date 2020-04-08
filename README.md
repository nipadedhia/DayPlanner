# 05 Third-Party APIs: Work Day Scheduler

Created a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

Reference: [Moment.js](https://momentjs.com/) library to work with date and time. B

## How it works:

```
Current day, date and time stamp is displayed at the top of the calendar when open the planner
Presented with timeblocks for standard business hours when scroll down, 
Each timeblock is color coded to indicate whether it is in the past, present, or future.
Gray color represents past. orange color represent present and green color represent future
If time is before than current time then time block will have gray color
If time is same as current time then time block will have orange color
If time is after than current time then time block will have Green color
Enter an event and click the save button for that timeblock
The text for that event is saved in local storage
WHEN I refresh the page, the saved events persist
```
