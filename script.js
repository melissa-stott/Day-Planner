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

if (staticTime === changingTime) {
    row[i].childNodes[3].classList.add("present");
} else if (staticTime < changingTime) {
    console.log("It is past");
    row[i].childNodes[3].classList.add("past");
} else {
    console.log("It is future");
    row[i].childNodes[3].classList.add("future");
}
}//This section is for gathering customer input and saving it to local storage.
// Can I use the same var more than once? i.e. var row.
var calInput = $(row).val;



