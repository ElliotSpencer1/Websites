var polishe = false;
var italiane = false;

function polish(){
  console.log("polish is true")
  polishe = true;
  italiane = false;
  localStorage.setItem("polishe", polishe); // Store the polish value in localStorage
  var para = new URLSearchParams();
  para.append("KEY", polishe);
  localStorage.setItem("italiane", italiane); // Store the score value in localStorage
  var para = new URLSearchParams();
  para.append("KEY", italiane);  
}

function italian(){
  console.log("italian is true")
  polishe = false;
  italiane = true;
  localStorage.setItem("polishe", polishe); // Store the polish value in localStorage
  var para = new URLSearchParams();
  para.append("KEY", polishe);
  localStorage.setItem("italiane", italiane); // Store the score value in localStorage
  var para = new URLSearchParams();
  para.append("KEY", italiane);  
}


if(localStorage.getItem("polishe") != "false"){
  var npolish = localStorage.getItem("polishe");
  polishe = parseInt(npolish);
  console.log("Your polish");
}
if(localStorage.getItem("italiane") != "false"){
  var nitalian = localStorage.getItem("italiane");
  italiane = parseInt(nitalian);
  console.log("Your italian");
}
else{
  console.log("Nothing picked yet");
}