if(localStorage.getItem("ttscore") != null){
  var ttscore = localStorage.getItem("ttscore");
  ttscore = parseInt(ttscore);
}
if(localStorage.getItem("ttmaxscore") != null){
  var ttmaxscore = localStorage.getItem("ttmaxscore");
  ttmaxscore = parseInt(ttmaxscore);
}
else{
  var ttmaxscore = 0;
  var ttscore = 0;
}
var correctAnswer = "mineral water"; 
var word = 1;
var timeLeft = 60;
var timecompleted;
var timerId = setInterval(countdown, 1000);
var timeroutput = document.getElementById("timer");


function nexttext(){
  word++;
  console.log(ttscore);
  var text = document.getElementById("word1");
  if(word === 1){
    text.innerHTML = "Mineral Water";
    correctAnswer = "mineral water";
  } else if(word === 2){
    text.innerHTML = "Pepper";
    correctAnswer = "pepper";
  } else if(word === 3){
    text.innerHTML = "Sugar";
    correctAnswer = "sugar";
  } else if(word === 4){
    text.innerHTML = "a black coffee";
    correctAnswer = "a black coffee";
  } else if(word === 5){
    text.innerHTML = "lemon with tea";
    correctAnswer = "lemon with tea";
  } else if(word === 6){
    text.innerHTML = "Salt";
    correctAnswer = "salt";
  } else if(word === 7){
    text.innerHTML = "Milk";
    correctAnswer = "milk";
  } else {
    timecompleted = (60 - timeLeft)
    localStorage.setItem("ttscore", ttscore); 
    var para = new URLSearchParams();
    para.append("KEY", ttscore);  
    localStorage.setItem("ttmaxscore", ttmaxscore); 
    var para = new URLSearchParams();
    para.append("KEY", ttmaxscore);
    localStorage.setItem("timeleft", timecompleted); 
    var para = new URLSearchParams();
    para.append("KEY", timecompleted);
    window.location.href = "timetrialresults.html";
  }
}

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    // Code to handle end of timer and store the time taken in a variable
  } else {
    timeroutput.innerHTML = timeLeft + " seconds remaining";
    timeLeft--;
  }
}

function water(){
  if(correctAnswer == "mineral water"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore = ttmaxscore++;
    nexttext();
  }
}

function coffee(){
  if(correctAnswer == "a black coffee"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore++;
    nexttext();
  }
}

function tea(){
  if(correctAnswer == "lemon with tea"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore++;
    nexttext();
  }
}

function sugar(){
  if(correctAnswer == "sugar"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore++;
    nexttext();
  }
}

function milk(){
  if(correctAnswer == "milk"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore++;
    nexttext();
  }
}

function salt(){
  if(correctAnswer == "salt"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore++;
    nexttext();
  }
}

function pepper(){
  if(correctAnswer == "pepper"){
    ttscore++;
    ttmaxscore++;
    nexttext();
  }
  else{
    ttmaxscore++;
    nexttext();
  }
}