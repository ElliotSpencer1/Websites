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
var correctAnswer = "acqua minerale"

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
      textquestions.innerHTML = "Mineral Water";
      correctAnswer = "acqua minerale";
    }
    if(wordCounter === 2){
      textquestions.innerHTML = "a Black Coffee";
      correctAnswer = "un caffè nero"
    }
    if(wordCounter === 3){
      textquestions.innerHTML = "tea with lemon";
      correctAnswer = "tè con limone";
    }
    if(wordCounter === 4){
      textquestions.innerHTML = "sugar";
      correctAnswer = "zucchero";
    }
    if(wordCounter === 5){
      textquestions.innerHTML = "milk";
      correctAnswer = "latte";
    }
    if(wordCounter === 6){
      textquestions.innerHTML = "salt";
      correctAnswer = "sale";
    }
    if(wordCounter === 7){
      textquestions.innerHTML = "pepper";
      correctAnswer = "pepe";
    }
    if(wordCounter === 8){
      textquestions.innerHTML = "A table for two please";
      correctAnswer = "Un tavolo per due, per favour";
    }
    if(wordCounter === 9){
      textquestions.innerHTML = "Here is the menu";
      correctAnswer = "Ecco il menu";
    }
    if(wordCounter === 10){
      textquestions.innerHTML = "Do you want to order";
      correctAnswer = "Volete ordinare";
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
