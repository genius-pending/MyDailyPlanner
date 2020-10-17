

const today = moment().format('Do MMMM YYYY');
//console.log(today)
document.getElementById("date").innerText = today;

const time = moment()
function displayTime() {
    document.getElementById("time").innerText = time.format('HH:mm');
    setTimeout(displayTime, 1000);
}

$(document).ready(function () {
    displayTime();
});




//intially input date without using moment JS and it wouldnt give me the month as a word only a number 
//var today = new Date();
//var date = today.getDate()+ '-' +(today.getMonth()+1)+'-' +today.getFullYear();
//document.getElementById("date").innerText=date;


/*function displayCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = hours < 12 ? "AM" : "PM";
  
    hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
  
    let timeString = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
  
    document.getElementById("time").innerText = timeString;
    let timer = setTimeout(displayCurrentTime, 1000);
  }
  
  function addZero(component) {
    return component < 10 ? "0" + component : component;
  }
  
  displayCurrentTime();
  */

let text9AM = document.getElementById("text9AM");
let text10AM = document.getElementById("text10AM");
let text11AM = document.getElementById("text11AM");
let text12PM = document.getElementById("text12PM");
let text1PM = document.getElementById("text1PM");
let text2PM = document.getElementById("text2PM");
let text3PM = document.getElementById("text3PM");
let text4PM = document.getElementById("text4PM");
let text5PM = document.getElementById("text5PM");




//add the feature where the colour of the text area changes depending on the time of day 

$("textarea").each(function () {
    let formattedtime = parseInt(time.format("HH"));
    var texttime = parseInt($(this).attr("data-hour"));
    console.log("formattedtime", formattedtime)
    if (texttime < formattedtime) {
        $(this).addClass("past").removeClass("present future");
    }
    if (texttime === formattedtime) {
        $(this).addClass("present").removeClass("past future");
    }

    if (texttime > formattedtime) {
        $(this).addClass("future").removeClass("past present");
    }

    console.log("text time", texttime)
})



$("button").on("click", function () {



    //save user input in the local storage
localStorage.setItem("9AM", $("#text9AM").val());
localStorage.setItem("10AM", $("#text10AM").val());
localStorage.setItem("11AM", $("#text11AM").val());
localStorage.setItem("12AM", $("#text12AM").val());
localStorage.setItem("13PM", $("#text1PM").val());
localStorage.setItem("14PM", $("#text2PM").val());
localStorage.setItem("15PM", $("#text3PM").val());
localStorage.setItem("16PM", $("#text4PM").val());
localStorage.setItem("17PM", $("#text5PM").val());

})

//make sure that the information input by user stays in the text field when screen is refreshed 
$("#text9AM").append(localStorage.getItem("9AM"));
$("#text10AM").append(localStorage.getItem("10AM"));
$("#text11AM").append(localStorage.getItem("11AM"));
$("#text12AM").append(localStorage.getItem("12AM"));
$("#text1PM").append(localStorage.getItem("13PM"));
$("#text2PM").append(localStorage.getItem("14PM"));
$("#text3PM").append(localStorage.getItem("15PM"));
$("#text4PM").append(localStorage.getItem("16PM"));
$("#text5PM").append(localStorage.getItem("17PM"));








