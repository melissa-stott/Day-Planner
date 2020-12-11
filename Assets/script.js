//This is where I declared the variables for comparing static time to current time.
var currentDate = $("#currentDay");
var row = $(".row");
var currentTime=   new Date().toLocaleTimeString();
var timeBlocks = $(".future");

//This is where I added date formatting for my header as well as time comparison further down the code.
currentDate.text(moment().format('MMMM Do YYYY, h:mm a'));
var day = moment().format("MM/DD/YYYY");
var hour = (moment().format("h"));
var amPm = moment().format("a");
var fullTime = day + " " + hour + ":00 " + amPm;
var changingTime = Date.parse(fullTime);

//Code that takes in user text and saves it to local storage with an onClick event
for (var i = 0; i < row.length; i++){
    var tmp = row[i].childNodes[1].innerText;
    var staticTime = Date.parse(day + " " + tmp);

    var btn = $(row[i].childNodes[5]);
    btn.click(function(evt) {
        var tmpBtn = $(evt.target).attr('id');
        
        var innerId = "input" + tmpBtn[7];
        var tmp = $('#' + innerId).val();
        localStorage.setItem(innerId, tmp);
        $('.toast').toast({animation: true, delay: 2000, autohide: true});
        $('.toast').toast('show');
    });

    var id = "input" + (i + 1);
    $(row[i].childNodes[3]).val(localStorage.getItem(id));

//Code that determines the color of the text box based on the hour of the day.    
    if (staticTime === changingTime) {
        row[i].childNodes[3].classList.add("present");
    } else if (staticTime < changingTime) {
        console.log("It is past");
        row[i].childNodes[3].classList.add("past");
    } else {
        console.log("It is future");
        row[i].childNodes[3].classList.add("future");
    }
}
