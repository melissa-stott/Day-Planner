var currentDate = $("#currentDay");
var row = $(".row");

currentDate.text(moment().format('MMMM Do YYYY'));

// function createCalRow (id){
//     var rowId = "row" + id;
//     var baseEl = $("<div id=" + rowId + " ></div>");

//     var evtId = $("<div></div>");
//     evtId.text("something");

//     baseEl.append(evtId);
//     return baseEl;
// }

var theSchedule = [
    {
        time: "9AM",
        activity: '',
    },
    {
        time: "10AM",
        activity: '',
    },
    {
        time: "11AM",
        activity: '',
    },
    {
        time: "12PM",
        activity: '',
    },
    {
        time: "1PM",
        activity: '',
    },
    {
        time: "2PM",
        activity: '',
    },
    {
        time: "3PM",
        activity: '',
    },
    {
        time: "4PM",
        activity: '',
    },
    {
        time: "5PM",
        activity: '',
    },
];

// function populateTime (index){
//     row.text(theSchedule.time.activity);
//     choiceBLabel.innerText=myQuestions[index].answers.B;
//     choiceCLabel.innerText=myQuestions[index].answers.C;
//     choiceDLabel.innerText=myQuestions[index].answers.D;
//     theQuestion.innerText=myQuestions[index].question;
// }
console.log(theSchedule[0].time);

//row.append(createCalRow(5));