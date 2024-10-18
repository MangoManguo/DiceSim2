// Dice Simulator

// variables
let selectE1 = document.getElementById("dice-menu");
let rollbtn = document.getElementById("roll");
let resetbtn = document.getElementById("reset");
let diceImg = document.getElementsByClassName("");
let diceImg1 = document.getElementById("dice1");
let diceImg2 = document.getElementById("dice2");
let historyBox = document.getElementById("rollHistory");
let sides = document.getElementById("sides");

// event listeners
rollbtn.addEventListener("click", rollDice);
resetbtn.addEventListener("click", reset);

// setInterval & clearInterval

// let interval = setInterval(animateDice, 1000);
let x = 1;
let z = 2;
let y = 0;
// let x = 10;

// let timer = setInterval(sayHello, 1000); // setInterval runs forever until interval is cleared

// function sayHello() {
//   console.log(x);
//   x--;

//   if (x == 0) {
//     clearInterval(timer);
//   }
// }
// setTimeout - same as setInterval, but it runs the function a SINGLE time only.
// e.g. setTImeout(animateDice, 2000) will run the animateDice function once, but after 2 sec and then never again

let angle = 0;
let angle2 = 0;
let timer = setInterval(animateDice, 150);
let timer2 = setInterval(animateDice2, 150);

// functions
function rollOnce() {
  // create rand nums to represent the dice roll
  let dice1 = Math.floor(Math.random() * sides.value + 1);
  let dice2 = Math.floor(Math.random() * sides.value + 1);
  // display the right images
  diceImg1.src = `images/${dice1}.png`;
  diceImg2.src = `images/${dice2}.png`;
  // update history
  historyBox.innerHTML += ` <span>${dice1},${dice2}</span> `;
  x -= 1;
}

function rollDice() {
  // console.log(selectE1.value);
  if (selectE1.value == "roll-1") {
    rollOnce();
  } else if (selectE1.value == "roll-5") {
    for (let i = 0; i <= 5; i++) {
      rollOnce();
    }
  } else if (selectE1.value == "roll-x") {
    let x = prompt("How many rolls?");
    for (let i = 0; i < x; i++) {
      rollOnce();
    }
  } else if (selectE1.value == "roll-snake") {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    let i = 0;
    while (dice1 + dice2 != 2) {
      i++;
      dice1 = Math.floor(Math.random() * 6 + 1);
      dice2 = Math.floor(Math.random() * 6 + 1);
      // create rand nums to represent the dice roll
      // display the right images
      diceImg1.src = `images/${dice1}.png`;
      diceImg2.src = `images/${dice2}.png`;
      // update history
      historyBox.innerHTML += ` <span>${dice1},${dice2}</span> `;
      x -= 1;
    }
    alert(`${i} rolls for snake eyes.`);
  } else if (selectE1.value == "roll-mini") {
    // create rand nums to represent the dice roll
    let dice1 = Math.floor(Math.random() * sides.value + 1);
    let dice2 = Math.floor(Math.random() * sides.value + 1);
    // display the right images
    diceImg1.src = `images/${dice1}.png`;
    diceImg2.src = `images/${dice2}.png`;
    // update history
    historyBox.innerHTML += ` <span>${dice1},${dice2}</span> `;
    x -= 1;
    let rand = Math.floor(Math.random() * 9 + 1);
    let rand2 = Math.floor(Math.random() * 9 + 1);
    var i;
    if (y <= 0) {
      y++;
      i = +prompt(`${dice1} * (${dice2} + ${rand}) / (${rand2} - ${dice1})`);
    }
    if ((i = (dice1 * (dice2 + rand)) / (rand2 - dice1))) {
      alert("correct!");
      y--;
    } else {
      alert("wrong!");
      y--;
    }
  } else if (selectE1.value == "roll-mini2") {
    // create rand nums to represent the dice roll
    let dice1 = Math.floor(Math.random() * sides.value + 1);
    let dice2 = Math.floor(Math.random() * sides.value + 1);
    // display the right images
    diceImg1.src = `images/${dice1}.png`;
    diceImg2.src = `images/${dice2}.png`;
    // update history
    historyBox.innerHTML += ` <span>${dice1},${dice2}</span> `;
    x -= 1;
    var i;
    if (y <= 0) {
      y++;
      i = +prompt(`${dice1} * ${dice2}`);
    }
    if ((i = dice1 * dice2)) {
      alert("correct!");
      y--;
    } else {
      alert("wrong!");
      y--;
    }
  }
}

function reset() {
  diceImg1.src = `images/0.png`;
  diceImg2.src = `images/0.png`;
  historyBox.innerHTML = "<h2>Dice Rolls</h2>";
  x = 1;
  angle = 0;
  angle2 = 0;
  timer = setInterval(animateDice, 200);
  timer2 = setInterval(animateDice2, 200);
  sides.value = 6;
}

function animateDice() {
  if (x < 1) {
    clearInterval(timer);
  }
  // choose dice img
  let rand = Math.floor(Math.random() * sides.value + 1);
  if (x == 1) {
    diceImg1.src = `images/${rand}.png`;
  }
  // rotate img
  angle += 15;
  diceImg1.style.transform = `rotate(${angle}deg)`;
}

function animateDice2() {
  if (x < 1) {
    clearInterval(timer2);
  }
  // choose dice img
  let rand2 = Math.floor(Math.random() * sides.value + 1);
  if (x == 1) {
    diceImg2.src = `images/${rand2}.png`;
  }
  console.log(angle2);
  // rotate img
  angle2 += 15;
  diceImg2.style.transform = `rotate(${angle2}deg)`;
}
