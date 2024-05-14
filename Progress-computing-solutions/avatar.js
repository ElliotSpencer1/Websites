var playermodel;
var cowboyhat;
var headphonesoption;
var crownop;
var sunglassesop;
var bin;
let hatbutton;
let headphonesbutton;
let sunglassesbutton;
let crownbutton;
let binbutton;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  playermodel = new Sprite(windowWidth/2, 200, 100,100)
  playermodel.image = "options/maleavatar.png";
  playermodel.collider = "none";
  playermodel;
  cowboyhat = new Sprite();
  cowboyhat.visible = false;
  headphonesoption = new Sprite();
  headphonesoption.visible = false;
  crownop = new Sprite();
  crownop.visible = false;
  sunglassesop = new Sprite();
  sunglassesop.visible = false;
  bin;
}

function draw(){
  clear();
  if(cowboyhat.mouse.dragging()) {
    cowboyhat.moveTowards(
      mouse.x + cowboyhat.mouse.x,
      mouse.y + cowboyhat.mouse.y,
      1 // full tracking
    );
  }
  if(headphonesoption.mouse.dragging()) {
      headphonesoption.moveTowards(
        mouse.x + headphonesoption.mouse.x,
        mouse.y + headphonesoption.mouse.y,
        1 // full tracking
    );
  }
  if(sunglassesop.mouse.dragging()) {
      sunglassesop.moveTowards(
        mouse.x + sunglassesop.mouse.x,
        mouse.y + sunglassesop.mouse.y,
        1 // full tracking
    );
  }
  if(crownop.mouse.dragging()) {
      crownop.moveTowards(
        mouse.x + crownop.mouse.x,
        mouse.y + crownop.mouse.y,
        1 // full tracking
    );
  }
}

function cowboy(){
  cowboyhat = new Sprite(windowWidth/2, 200, 100,100)
  cowboyhat.image = "options/hat.png";
  cowboyhat.collider = "k";
  //cowboyhat.scale = 0.25;
  cowboyhat.rotationLock = true;
  cowboyhat.addCollider("rectangle", 0, 0, 100, 100);
}

function headphones(){
  headphonesoption = new Sprite(windowWidth/2, 200, 100,100)
  headphonesoption.image = "options/headphones.png";
  headphonesoption.collider = "k";
  headphonesoption.scale = 0.7;
  headphonesoption.rotationLock = true;
  headphonesoption.addCollider("rectangle", 0, 0, 100, 100);
}

function sunglasses(){
  sunglassesop  = new Sprite(windowWidth/2, 200, 100,100)
  sunglassesop.image = "options/glasses.png";
  sunglassesop.collider = "k";
  //sunglassesop.scale = 0.1;
  sunglassesop.rotationLock = true;
  sunglassesop.addCollider("rectangle", 0, 0, 100, 100);
}

function crown(){
  crownop = new Sprite(windowWidth/2, 200, 100,100)
  crownop.image = "options/crown.png";
  crownop.collider = "k";
  //crownop.scale = 0.05;
  crownop.rotationLock = true;
  crownop.addCollider("rectangle", 0, 0, 100, 100);
}

function deleteAll(){
  crownop.visible = false;
  sunglassesop.visible = false;
  headphonesoption.visible = false;
  cowboyhat.visible = false;
}

/*
function Saveimage(){
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
  
  window.location.href = image; // it will save locally
}*/


function Saveimage(){
  if(canvas.elt) {
    var image = trimCanvas(canvas).toDataURL("image/png");
    // Save the image data to local storage
    localStorage.setItem('avatarImage', image);
    // Show that it saved with no logic errors.
    console.log("Saved Correctly: " + image)
  }
}

var trimCanvas = (function() {
    function rowBlank(imageData, width, y) {
        for (var x = 0; x < width; ++x) {
            if (imageData.data[y * width * 4 + x * 4 + 3] !== 0) return false;
        }
        return true;
    }

    function columnBlank(imageData, width, x, top, bottom) {
        for (var y = top; y < bottom; ++y) {
            if (imageData.data[y * width * 4 + x * 4 + 3] !== 0) return false;
        }
        return true;
    }

    return function(canvas) {
        var ctx = canvas.elt.getContext("2d");
        var width = canvas.width;
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var top = 0, bottom = imageData.height, left = 0, right = imageData.width;

        while (top < bottom && rowBlank(imageData, width, top)) ++top;
        while (bottom - 1 > top && rowBlank(imageData, width, bottom - 1)) --bottom;
        while (left < right && columnBlank(imageData, width, left, top, bottom)) ++left;
        while (right - 1 > left && columnBlank(imageData, width, right - 1, top, bottom)) --right;

        var trimmed = ctx.getImageData(left, top, right - left, bottom - top);
        var copy = canvas.elt.ownerDocument.createElement("canvas");
        var copyCtx = copy.getContext("2d");
        copy.width = trimmed.width;
        copy.height = trimmed.height;
        copyCtx.putImageData(trimmed, 0, 0);

        return copy;
    };
})();