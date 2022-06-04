
//for detecting button press
for (let i=0; i<7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",add);
}

function add () {

  let buttonInnerHTML = this.innerHTML;
  keycheck(buttonInnerHTML);
  addanimation(buttonInnerHTML);
}

document.addEventListener("keydown",function(event) {
  keycheck(event.key);
  addanimation(event.key)
});
//For detecting keyboard press
function keycheck (key) {
  switch (key) {
    case "w":
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    let tom2 = new Audio ("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    let tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k":
    let kickbass = new Audio("sounds/kick-bass.mp3");
    kickbass.play();
    break;

    case "l":
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
    default: console.log("wrong click");

  }
}

function addanimation(currentKey) {
     let animation = document.querySelector("."+currentKey);
     animation.classList.add("pressed");
     setTimeout(()=> {
       animation.classList.remove("pressed");
     },100);
}
