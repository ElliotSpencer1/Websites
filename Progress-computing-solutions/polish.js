if(localStorage.getItem("tscore") != null){
  var tscore = localStorage.getItem("tscore");
  tscore = parseInt(tscore);
}
if(localStorage.getItem("tmaxscore") != null){
  var tmaxscore = localStorage.getItem("tmaxscore");
  tmaxscore = parseInt(tmaxscore);
}
else{
  var tmaxscore = 0;
  var tscore = 0;
}
var wordCounter = 1;
var textquestions = document.getElementById("tquestions");
var correctAnswer = "woda mineralna"

function checkanswer(){
  var userInput = document.getElementById("answer-input").value;

  if(userInput.toLowerCase() === correctAnswer.toLowerCase()){
    tscore++;
  }
  wordCounter++;
  console.log(tscore)
  tmaxscore++;
  if(wordCounter <= 10){
    if(wordCounter === 1){
      textquestions.innerHTML = "Mineral water";
      correctAnswer = "woda mineralna";
    }
    if(wordCounter === 2){
      textquestions.innerHTML = "A black coffee";
      correctAnswer = "czarna kawa";
    }
    if(wordCounter === 3){
      textquestions.innerHTML = "Tea with lemon";
      correctAnswer = "herbata z cytryną";
    }
    if(wordCounter === 4){
      textquestions.innerHTML = "Sugar";
      correctAnswer = "cukier";
    }
    if(wordCounter === 5){
      textquestions.innerHTML = "milk";
      correctAnswer = "mlek";
    }
    if(wordCounter === 6){
      textquestions.innerHTML = "salt";
      correctAnswer = "sól";
    }
    if(wordCounter === 7){
      textquestions.innerHTML = "pepper";
      correctAnswer = "pieprz";
    }
    if(wordCounter === 8){
      textquestions.innerHTML = "A table for two please";
      correctAnswer = "Stolik dla dwojga proszę";
    }
    if(wordCounter === 9){
      textquestions.innerHTML = "Here is the menu";
      correctAnswer = "Oto menu";
    }
    if(wordCounter === 10){
      textquestions.innerHTML = "Do you want to order";
      correctAnswer = "Chcesz zamówić";
    }
  } else{
    localStorage.setItem("tscore", tscore); // Store the score value in localStorage
    var para = new URLSearchParams();
    para.append("KEY", tscore);  
    localStorage.setItem("tmaxscore", tmaxscore); // Store the maximum score value in localStorage
    var para = new URLSearchParams();
    para.append("KEY", tmaxscore); 
    window.location.href = "textresults.html";
  }
}
