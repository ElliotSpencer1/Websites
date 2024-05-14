let mediaRecorder;
let audioChunks = [];
let audioBlob;

const recordButton = document.getElementById('recordButton');
const playButton = document.getElementById('playButton');

recordButton.addEventListener('click', () => {
    if (recordButton.textContent === 'Record') {
        startRecording();
    } else {
        stopRecording();
    }
});

playButton.addEventListener('click', () => {
    playRecording();
});

function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            // Clear the existing recording
            audioChunks = [];
            audioBlob = null;

            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };
            mediaRecorder.onstop = () => {
                audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                playButton.disabled = false;
            };

            mediaRecorder.start();
            recordButton.textContent = 'Stop';
        })
        .catch((error) => {
            console.error('Error accessing microphone:', error);
        });
}

function stopRecording() {
    mediaRecorder.stop();
    recordButton.textContent = 'Record';
}

function playRecording() {
    if (audioBlob) {
        const audio = new Audio();
        audio.src = URL.createObjectURL(audioBlob);
        audio.play();
    } else {
        console.log('No recording available to play.');
    }
}


if(localStorage.getItem("ascore") != null){
  var ascore = localStorage.getItem("ascore");
  ascore = parseInt(ascore);
}
if(localStorage.getItem("maxascore") != null){
  var maxscore = localStorage.getItem("maxascore");
  maxscore = parseInt(maxscore);
}
else{
  var maxscore = 0;
  var ascore = 0;
}

var audiorec = 1;
var imageCounter = 1;

function incorrect(){
  document.getElementById("i").disabled = true;
  document.getElementById("i").style.backgroundColor = "Red";
  document.getElementById("i").style.cursor = "default";
  document.getElementById("i").style.color = "black";
  document.getElementById("c").disabled = true;
}


function correct(){
  ascore++
  document.getElementById("c").disabled = true;
  document.getElementById("c").style.backgroundColor = "green";
  document.getElementById("c").style.cursor = "default";
  document.getElementById("c").style.color = "black";
  document.getElementById("i").disabled = true;
}

// change all this shit to be the audio file changing 
function next(){
  audiorec++
  maxscore++
  imageCounter++
  console.log(ascore)
  document.getElementById("c").disabled = false;
  document.getElementById("c").style.backgroundColor = "inherit";
  document.getElementById("c").style.cursor = "pointer";
  document.getElementById("c").style.color = "white";
  document.getElementById("i").disabled = false;
  document.getElementById("i").style.backgroundColor = "inherit";
  document.getElementById("i").style.cursor = "pointer";
  document.getElementById("i").style.color = "white";
  document.querySelector(".person img").src = "images/" + imageCounter + ".png";
  if(audiorec <= 10){
    // ok so change the file names to a number and change the answers to correspond 
    document.querySelector(".audiothing audio source").src = "audio/" + audiorec + ".mp3";
    document.querySelector(".audiothing audio").load(); // This line ensures the new audio source is loaded
    if(audiorec === 1){
      correctAnswer = "mineral water"
    }
    if(audiorec === 2){
      correctAnswer = "a black coffee";
    }
    if(audiorec === 3){
      correctAnswer = "tea with lemon";
    }
    if(audiorec === 4){
      correctAnswer = "sugar";
    }
    if(audiorec === 5){
      correctAnswer = "milk";
    }
    if(audiorec === 6){
      correctAnswer = "salt";
    }
    if(audiorec === 7){
      correctAnswer = "pepper";
    }
    if(audiorec === 8){
      correctAnswer = "a table for two";
    }
    if(audiorec === 9){
      correctAnswer = "here is the menu";
    }
    if(audiorec === 10){
      correctAnswer = "Do you want to order";
    }
  }else{
    localStorage.setItem("ascore", ascore); // Store the score value in localStorage
    var para = new URLSearchParams();
    para.append("KEY", ascore);  
    localStorage.setItem("maxascore", maxscore); // Store the maximum score value in localStorage
    var para = new URLSearchParams();
    para.append("KEY", maxscore); 
    window.location.href = "audioresults.html";
    console.log(ascore)
  }
}