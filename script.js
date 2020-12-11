//This section is where I set up the parameters for comparing current time to the schedule time.
var currentDate = $("#currentDay");
var row = $(".row");
var currentTime=   new Date().toLocaleTimeString();
var timeBlocks = $(".future");
console.log(timeBlocks);

currentDate.text(moment().format('MMMM Do YYYY, h:mm a'));
var day = moment().format("MM/DD/YYYY");
var hour = (moment().format("h"));
var amPm = moment().format("a");
var fullTime = day + " " + hour + ":00 " + amPm;
var changingTime = Date.parse(fullTime);
console.log("***fulltime = " + fullTime);

for (var i = 0; i < row.length; i++){
    var tmp = row[i].childNodes[1].innerText;
    var staticTime = Date.parse(day + " " + tmp);

    console.log(row[i].childNodes[5]);
    var btn = $(row[i].childNodes[5]);
    btn.click(function(evt) {
        var tmpBtn = $(evt.target).attr('id');
        console.log("tmpBtn: " + tmpBtn + "!");

        var innerId = "input" + tmpBtn[7];
        console.log(innerId);
        var tmp = $('#' + innerId).val();
        localStorage.setItem(innerId, tmp);
    });

    var id = "input" + (i + 1);
    $(row[i].childNodes[3]).val(localStorage.getItem(id));

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
