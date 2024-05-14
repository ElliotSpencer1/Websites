if(localStorage.getItem("mscore") != null){
  var score = localStorage.getItem("mscore");
  score = parseInt(score);
}
if(localStorage.getItem("maxmscore") != null){
  var maxscore = localStorage.getItem("maxmscore");
  maxscore = parseInt(maxscore);
}
else{
  var maxscore = 0;
  var score = 0;
}
if(localStorage.getItem("polishe") != "false"){
  var npolish = localStorage.getItem("polishe");
  npolish = true
  console.log("Your polish");
}
if(localStorage.getItem("italiane") != "false"){
  var nitalian = localStorage.getItem("italiane");
  nitalian = true
  console.log("Your italian");
}
else{
  console.log("Nothing picked yet");
}
var correctAnswer = "mineral water" || "mineralwater";
var imageCounter = 1;
var translate = document.getElementById("translate");


function checkanswer(){
  var userInput = document.getElementById("answer-input").value;

  if(userInput.toLowerCase() === correctAnswer.toLowerCase()){
    score++;
  }
  imageCounter++;
  console.log(score)
  maxscore++;
  if(imageCounter <= 7){
    document.querySelector(".person img").src = "images/" + imageCounter + ".png";
    if(imageCounter === 1){
      correctAnswer = "mineral water" || "mineralwater";
      next();
    }
    if(imageCounter === 2){
      correctAnswer = "a black coffee";
      next();
    }
    if(imageCounter === 3){
      correctAnswer = "tea with lemon";
      next();
    }
    if(imageCounter === 4){
      correctAnswer = "sugar";
      next();
    }
    if(imageCounter === 5){
      correctAnswer = "milk";
      next();
    }
    if(imageCounter === 6){
      correctAnswer = "salt";
      next();
    }
    if(imageCounter === 7){
      correctAnswer = "pepper";
      next();
    }
  }
  else{
    localStorage.setItem("mscore", score); // Store the score value in localStorage
    var para = new URLSearchParams();
    para.append("KEY", score);  
    localStorage.setItem("maxmscore", maxscore); // Store the maximum score value in localStorage
    var para = new URLSearchParams();
    para.append("KEY", maxscore); 
    window.location.href = "memorycomplete.html";
  }
}

if(imageCounter === 1){
  if(npolish){
    translate.innerHTML = "woda mineralna";
  }
  if(nitalian){
    translate.innerHTML = "acqua minerale";
  }
}


// next part of the code will be the text output (native).

function next(){
  if(npolish){
     console.log("Polish is true!! ");
    if(imageCounter <= 7){
      if(imageCounter === 1){
        translate.innerHTML = "woda mineralna";
        next();
      }
      if(imageCounter === 2){
        translate.innerHTML = "czarna kawa";
        next();
      }
      if(imageCounter === 3){
        translate.innerHTML = "herbata z cytryną";
        next();
      }
      if(imageCounter === 4){
        translate.innerHTML = "cukier";
        next();
      }
      if(imageCounter === 5){
        translate.innerHTML = "mlek";
        next();
      }
      if(imageCounter === 6){
        translate.innerHTML = "sól";
        next();
      }
      if(imageCounter === 7){
        translate.innerHTML = "pieprz";
        next();
      }
    }
  }
  if(nitalian){
    console.log("Italian is true!! ")
    if(imageCounter <= 7){
      if(imageCounter === 1){
        translate.innerHTML = "acqua minerale";
        next();
      }
      if(imageCounter === 2){
        translate.innerHTML = "un caffè nero";
        next();
      }
      if(imageCounter === 3){
        translate.innerHTML = "tè con limone";
        next();
      }
      if(imageCounter === 4){
        translate.innerHTML = "zucchero";
        next();
      }
      if(imageCounter === 5){
        translate.innerHTML = "latte";
        next();
      }
      if(imageCounter === 6){
        translate.innerHTML = "sale";
        next();
      }
      if(imageCounter === 7){
        translate.innerHTML = "pepe";
        next();
      }
    }
  }
}
