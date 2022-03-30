//How many images do you have in the folder?
var num = 18;
var rand = Math.floor(Math.random() * num + 1);
var randVerify = 1; //ensure that rand doesn't equal itself (i.e. consecutive same numbers)
var randFinal = 0;

//sets initial image
picone.src = "../images/" + rand + ".png";
//changes it so the next one will be different
rand = Math.floor(Math.random() * num + 1);
pictwo.src = "../images/" + rand + ".png";

//Initiates loop and base variables
var looper;
var spincounter = 0;
var degrees = 0;
var speedmult = 15; // 15 seems to be as fast as you should go
//15 -> 10 -> 6 -> 5 -> 3 -> 2 -> 1
var maxspins = 9;

//function call
function rotateAnimation(el, speed) {
  //gets value passed from the function el for element, in this case box
  var elem = document.getElementById(el);

  //sets variables for each of the sides to help with showing and hiding
  var side1 = document.getElementById("one");
  var side2 = document.getElementById("two");
  var side3 = document.getElementById("three");
  var side4 = document.getElementById("four");

  //Certain amount of spins, you may want to make this random to spice things up
  //or have increments where it gets slower
  if (spincounter < maxspins) {
    if (spincounter >= 2) speedmult = 10;
    if (spincounter >= 4) speedmult = 6;
    if (spincounter >= 5) speedmult = 5;
    if (spincounter >= 6) speedmult = 3;
    if (spincounter >= 7) speedmult = 2;
    if (spincounter >= 8) speedmult = 1;
    if (spincounter >= 8 && degrees == 90) degrees = 359;

    //rotates it to the degrees calculated by the loop multiplied by -1 to invert
    elem.style.webkitTransform = "rotateX(" + degrees * -1 * speedmult + "deg)";
    //This is where this function gets constantly used, depending on the speed
    //LowerNum = faster
    looper = setTimeout("rotateAnimation('" + el + "'," + speed + ")", speed);
    degrees++;

    if (degrees * speedmult > 359) {
      //adds to spin counter, and resets degrees to count towards next rotation
      spincounter++;
      degrees = 0;
    }
    //applies final selection to all sides
    if (spincounter >= 8 && degrees == 90) {
      randFinal = rand;
      picone.src = "../images/" + randFinal + ".png";
      pictwo.src = "../images/" + randFinal + ".png";
      picthree.src = "../images/" + randFinal + ".png";
      picfour.src = "../images/" + randFinal + ".png";
      side1.style.visibility = "visible";
      side2.style.visibility = "hidden";
      side3.style.visibility = "hidden";
      side4.style.visibility = "visible";
    }
    if (degrees * speedmult == 0) {
      randVerify = rand;
      rand = Math.floor(Math.random() * num + 1);
      while (randVerify == rand) {
        rand = Math.floor(Math.random() * num + 1);
      }
      pictwo.src = "../images/" + rand + ".png";
      side1.style.visibility = "visible";
      side2.style.visibility = "visible";
      side3.style.visibility = "hidden";
      side4.style.visibility = "hidden";
    }
    if (degrees * speedmult == 90) {
      randVerify = rand;
      rand = Math.floor(Math.random() * num + 1);
      while (randVerify == rand) {
        rand = Math.floor(Math.random() * num + 1);
      }
      picthree.src = "../images/" + rand + ".png";
      side1.style.visibility = "hidden";
      side2.style.visibility = "visible";
      side3.style.visibility = "visible";
      side4.style.visibility = "hidden";
    }
    if (degrees * speedmult == 180) {
      randVerify = rand;
      rand = Math.floor(Math.random() * num + 1);
      while (randVerify == rand) {
        rand = Math.floor(Math.random() * num + 1);
      }
      picfour.src = "../images/" + rand + ".png";
      side1.style.visibility = "hidden";
      side2.style.visibility = "hidden";
      side3.style.visibility = "visible";
      side4.style.visibility = "visible";
    }
    if (degrees * speedmult == 270) {
      randVerify = rand;
      rand = Math.floor(Math.random() * num + 1);
      while (randVerify == rand) {
        rand = Math.floor(Math.random() * num + 1);
      }
      picone.src = "../images/" + rand + ".png";
      side1.style.visibility = "visible";
      side2.style.visibility = "hidden";
      side3.style.visibility = "hidden";
      side4.style.visibility = "visible";
    }
    //Debugging information, can comment out on release
    document.getElementById("spincounter").innerHTML =
      "total spins: " + spincounter;
    document.getElementById("rotation").innerHTML =
      "rotate(" + degrees + "deg)";
  } else {
    //enter what to do when done
    picone.src = "../images/" + randFinal + ".png";
    pictwo.src = "../images/" + randFinal + ".png";
    picthree.src = "../images/" + randFinal + ".png";
    picfour.src = "../images/" + randFinal + ".png";
    elem.style.webkitTransform = "rotateX(0deg)";    //Fixes rotation to be straight on
    picone.style.animation =
    "dropShadow 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, pulse 0.5s ease-in-out 3 both";
    clearInterval(rotateAnimation);
  }
}
