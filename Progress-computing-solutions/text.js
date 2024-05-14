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
var polish = false;
var italian = false;
var correctAnswer = "mineral water"

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
      if(polish){
        correctAnswer = "woda mineralna" || "wodamineralna";
      }
      if(italian){
        correctAnswer = "acqua minerale" || "acquaminerale";
      }
      else{
        correctAnswer = "mineral water" || "mineralwater";
      }
    }
    if(wordCounter === 2){
      textquestions.innerHTML = "a Black Coffee";
      if(polish){
        correctAnswer = "czarna kawa";
      }
      if(italian){
        correctAnswer = "un caffè nero";
      }
      else{
        correctAnswer = "a black coffee";
      }
    }
    if(wordCounter === 3){
      textquestions.innerHTML = "tea with lemon";
      if(polish){
        correctAnswer = "herbata z cytryną";
      }
      if(italian){
        correctAnswer = "tè con limone";
      }
      else{
        correctAnswer = "tea with lemon";
      }
    }
    if(wordCounter === 4){
      textquestions.innerHTML = "sugar";
      if(polish){
        correctAnswer = "cukier";
      }
      if(italian){
        correctAnswer = "zucchero";
      }
      else{
        correctAnswer = "sugar";
      }
    }
    if(wordCounter === 5){
      textquestions.innerHTML = "milk";
      if(polish){
        correctAnswer = "mlek";
      }
      if(italian){
        correctAnswer = "latte";
      }
      else{
        correctAnswer = "milk";
      }
    }
    if(wordCounter === 6){
      textquestions.innerHTML = "salt";
      if(polish){
        correctAnswer = "sól";
      }
      if(italian){
        correctAnswer = "sale";
      }
      else{
        correctAnswer = "salt";
      }
    }
    if(wordCounter === 7){
      textquestions.innerHTML = "pepper";
      if(polish){
        correctAnswer = "pieprz";
      }
      if(italian){
        correctAnswer = "pepe";
      }
      else{
        correctAnswer = "pepper";
      }
    }
    if(wordCounter === 8){
      textquestions.innerHTML = "A table for two please";
      if(polish){
        correctAnswer = "Stolik dla dwojga proszę";
      }
      if(italian){
        correctAnswer = "Un tavolo per due, per favour";
      }
      else{
        correctAnswer = "A table for two please";
      }
    }
    if(wordCounter === 9){
      textquestions.innerHTML = "Here is the menu";
      if(polish){
        correctAnswer = "Oto menu";
      }
      if(italian){
        correctAnswer = "Ecco il menu";
      }
      else{
        correctAnswer = "Here is the menu";
      }
    }
    if(wordCounter === 10){
      textquestions.innerHTML = "Do you want to order";
      if(polish){
        correctAnswer = "Chcesz zamówić";
      }
      if(italian){
        correctAnswer = "Volete ordinare";
      }
      else{
        correctAnswer = "Do you want to order";
      }
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
