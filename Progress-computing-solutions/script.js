var mbuttoncount = 0;
var tbuttoncount = 0;
var ttbuttoncount = 0;
var abuttoncount = 0;

console.log(localStorage.getItem("sname"))
console.log(localStorage.getItem("tname"))
function sform(){
  var sname = document.getElementById("sloutput").value;
  localStorage.setItem("sname", sname); // Store the sname value in localStorage
  var para = new URLSearchParams();
  para.append("KEY", sname);  
  window.location.href = "spage.html";
}


function tform(){
  var tname = document.getElementById("tloutput").value;
  localStorage.setItem("tname", tname); // Store the tname value in localStorage
  var para = new URLSearchParams();
  para.append("KEY", tname);  
  window.location.href = "tpage.html";
}


// Making the teacher login only appear if it has not already been done, needs to be added to local storage to work properly, (the true or false feature)
function teacher(){
  console.log(localStorage.getItem("tname"))
  if(!localStorage.getItem("tname")){
    window.location.href = "tlogin.html";
  }
  else{
    window.location.href = "tpage.html";
  }
}


// Making the student login only appear if it has not already been done, needs to be added to local storage to work properly, (the true or false feature)
function student(){
  console.log(localStorage.getItem("sname"))
  if(!localStorage.getItem("sname")){
    window.location.href = "slogin.html";
  }
  else{
    window.location.href = "spage.html";
  }
}


//Below is the tab feature for the studentresults page

function openTab(evt, quiz) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(quiz).style.display = "block";
  evt.currentTarget.className += " active";
}


// below here is what is causing the errors but they are only for show these errors,
// show who is accessing the results
function LoadTpage(){
  // Get all results from students and show them on screen
  // below is for showing the current teacher which is logged in
  var StudentResultsAccessor = document.getElementById("Teacherparatext");
  StudentResultsAccessor.innerHTML = "Current accessor: " + localStorage.getItem("tname");
  // below is memory part of table.
  var mstudentDisplay = document.getElementById("mstudentdisplay"); 
  var mscoreDisplay = document.getElementById("mscoredisplay");
  var mmaxscoreDisplay = document.getElementById("mmaxscoredisplay");
  mstudentDisplay.innerHTML = localStorage.getItem("sname");
  mscoreDisplay.innerHTML = localStorage.getItem("mscore");
  mmaxscoreDisplay.innerHTML = localStorage.getItem("maxmscore");
  // below is audio part of repetition part of the table
  var astudentDisplay = document.getElementById("astudentdisplay"); 
  var ascoreDisplay = document.getElementById("ascoredisplay");
  var amaxscoreDisplay = document.getElementById("amaxscoredisplay");
  astudentDisplay.innerHTML = localStorage.getItem("sname");
  ascoreDisplay.innerHTML = localStorage.getItem("ascore");
  amaxscoreDisplay.innerHTML = localStorage.getItem("maxascore");
  // below is the text part of the repetition part of the table
  var tstudentDisplay = document.getElementById("tstudentdisplay"); 
  var tscoreDisplay = document.getElementById("tscoredisplay");
  var tmaxscoreDisplay = document.getElementById("tmaxscoredisplay");
  tstudentDisplay.innerHTML = localStorage.getItem("sname");
  tscoreDisplay.innerHTML = localStorage.getItem("tscore");
  tmaxscoreDisplay.innerHTML = localStorage.getItem("tmaxscore");
  // below is the timetrial part of the table
  var ttstudentDisplay = document.getElementById("ttstudentdisplay"); 
  var ttscoreDisplay = document.getElementById("ttscoredisplay");
  var ttmaxscoreDisplay = document.getElementById("ttmaxscoredisplay");
  var timedisplay = document.getElementById("timedisplay");
  ttstudentDisplay.innerHTML = localStorage.getItem("sname");
  ttscoreDisplay.innerHTML = localStorage.getItem("ttscore");
  ttmaxscoreDisplay.innerHTML = localStorage.getItem("ttmaxscore");
  timedisplay.innerHTML = localStorage.getItem("timeleft");
}

function LoadSpage(){
  // Get all results from students and show them on screen
  // below is for showing the current teacher which is logged in
  var StudentResultsAccessor = document.getElementById("Studentparatext");
  StudentResultsAccessor.innerHTML = "Current accessor: " + localStorage.getItem("sname");
  // below is memory part of table.
  var smstudentDisplay = document.getElementById("smstudentdisplay"); 
  var smscoreDisplay = document.getElementById("smscoredisplay");
  var smmaxscoreDisplay = document.getElementById("smmaxscoredisplay");
  smstudentDisplay.innerHTML = localStorage.getItem("sname");
  smscoreDisplay.innerHTML = localStorage.getItem("mscore");
  smmaxscoreDisplay.innerHTML = localStorage.getItem("maxmscore");
  // below is audio part of repetition part of the table
  var sastudentDisplay = document.getElementById("sastudentdisplay"); 
  var sascoreDisplay = document.getElementById("sascoredisplay");
  var samaxscoreDisplay = document.getElementById("samaxscoredisplay");
  sastudentDisplay.innerHTML = localStorage.getItem("sname");
  sascoreDisplay.innerHTML = localStorage.getItem("ascore");
  samaxscoreDisplay.innerHTML = localStorage.getItem("maxascore");
  // below is the text part of the repetition part of the table
  var ststudentDisplay = document.getElementById("ststudentdisplay"); 
  var stscoreDisplay = document.getElementById("stscoredisplay");
  var stmaxscoreDisplay = document.getElementById("stmaxscoredisplay");
  ststudentDisplay.innerHTML = localStorage.getItem("sname");
  stscoreDisplay.innerHTML = localStorage.getItem("tscore");
  stmaxscoreDisplay.innerHTML = localStorage.getItem("tmaxscore");
  // below is the timetrial part of the table
  var sttstudentDisplay = document.getElementById("sttstudentdisplay"); 
  var sttscoreDisplay = document.getElementById("sttscoredisplay");
  var sttmaxscoreDisplay = document.getElementById("sttmaxscoredisplay");
  var stimedisplay = document.getElementById("stimedisplay");
  sttstudentDisplay.innerHTML = localStorage.getItem("sname");
  sttscoreDisplay.innerHTML = localStorage.getItem("ttscore");
  sttmaxscoreDisplay.innerHTML = localStorage.getItem("ttmaxscore");
  stimedisplay.innerHTML = localStorage.getItem("timeleft");
}

function showTTresults(){
  var TimetrialScore = localStorage.getItem("ttscore"); // Retrieve the score value from localStorage
  var TimetrialmaxScore = localStorage.getItem("ttmaxscore"); // Retrieve the maximum score value from localStorage
  var Timeleft = localStorage.getItem("timeleft"); // Retrieve the timeleft value from localStorage
  var timetrialoutput = document.getElementById("timetrialoutput"); // Retrieve the timetrialoutput value from localStorage
  timetrialoutput.innerHTML = "You scored, " + TimetrialScore + " / " + TimetrialmaxScore + " in " + Timeleft + " seconds";
  if(ttbuttoncount == 0){
  document.getElementById('confettiButton').removeEventListener('click', confetti());
  document.getElementById('confettiButton').addEventListener('click', function() {
      // Trigger confetti animation
      confetti();
    ttbuttoncount++
  });
}
  else{
   console.log("button has already been clicked.") 
  }
}

// show memory results
function showMresults(){
  var MemoryScore = localStorage.getItem("mscore"); // Retrieve the score value from localStorage
  var MemoryMaxScore = localStorage.getItem("maxmscore"); // Retrieve the maximum score value from localStorage
  var memoryoutput = document.getElementById("memoryoutput");
  memoryoutput.innerHTML = ("You scored, " + MemoryScore + " / " + MemoryMaxScore);
  if(mbuttoncount == 0){
    document.getElementById('confettiButton').removeEventListener('click', confetti());
    document.getElementById('confettiButton').addEventListener('click', function() {
        // Trigger confetti animation
        confetti();
      mbuttoncount++
    });
  }
  else{
    console.log("button has already been clicked");
  }                                                             
}  

function showAresults(){
   var AudioScore = localStorage.getItem("ascore"); // Retrieve the score value from localStorage
   var AudioMaxScore = localStorage.getItem("maxascore"); // Retrieve the maximum score value from localStorage
   var Audiooutput = document.getElementById("audiooutput");
   Audiooutput.innerHTML = ("You scored, " + AudioScore + " / " + AudioMaxScore);
  if(abuttoncount == 0){
  document.getElementById('confettiButton').removeEventListener('click', confetti());
  document.getElementById('confettiButton').addEventListener('click', function() {
      // Trigger confetti animation
      confetti();
      abuttoncount++
  });
}
  else{
    console.log("button has already been clicked")
  }
} 

function showTresults(){
  var TextScore = localStorage.getItem("tscore"); // Retrieve the score value from localStorage
  var TextMaxScore = localStorage.getItem("tmaxscore"); // Retrieve the maximum score value from localStorage
  var textoutput = document.getElementById("textoutput");
  textoutput.innerHTML = ("You scored, " + TextScore + " / " + TextMaxScore);
  if(tbuttoncount == 0){
  document.getElementById('confettiButton').removeEventListener('click', confetti());
  document.getElementById('confettiButton').addEventListener('click', function() {
      // Trigger confetti animation
      confetti();
    tbuttoncount++
  });
  }
  else{
    console.log("button has already been clicked")
  }

}  

function Reset(){
  localStorage.clear()
  document.getElementById("Are").innerHTML = "Complete.";
  window.location.href="index.html";
}

// Retrieve the image data from local storage
var image = localStorage.getItem('avatarImage');

if(image){
  document.getElementById('avatarImage').src = image;
}
else if(!image){
  document.getElementById('avatarImage').src = "options/maleavatar.png";
}


