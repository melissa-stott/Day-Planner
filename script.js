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
    // console.log("---tmp = " + day + " " + tmp);
    var staticTime = Date.parse(day + " " + tmp);
    // console.log(tmp);
    // console.log(staticTime);
    // console.log(changingTime);

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
// function createCalRow (id){
//     var rowId = "row" + id;
//     var baseEl = $("<div id=" + rowId + " ></div>");

//     var evtId = $("<div></div>");
//     evtId.text("something");

//     baseEl.append(evtId);
//     return baseEl;
// }

// var theSchedule = [
//     {
//         time: "9AM",
//         activity: '',
//     },
//     {
//         time: "10AM",
//         activity: '',
//     },
//     {
//         time: "11AM",
//         activity: '',
//     },
//     {
//         time: "12PM",
//         activity: '',
//     },
//     {
//         time: "1PM",
//         activity: '',
//     },
//     {
//         time: "2PM",
//         activity: '',
//     },
//     {
//         time: "3PM",
//         activity: '',
//     },
//     {
//         time: "4PM",
//         activity: '',
//     },
//     {
//         time: "5PM",
//         activity: '',
//     },
// ];

// function populateTime (index){
//     row.text(theSchedule.time.activity);
//     choiceBLabel.innerText=myQuestions[index].answers.B;
//     choiceCLabel.innerText=myQuestions[index].answers.C;
//     choiceDLabel.innerText=myQuestions[index].answers.D;
//     theQuestion.innerText=myQuestions[index].question;
// }
// console.log(theSchedule[0].time);

//row.append(createCalRow(5));