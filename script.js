function shuffleArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let name = [];
let truth = true;
let numround = 7;
let indexset = -1; // Another version of Not A Number
let indexorder = 0;
let temporary = 0;
let hasEverExecuted = false;

function addtolist() {
  var x = document.getElementById("inputname").value;
  name.push(x);
  document.getElementById("showdata").innerHTML = name;
  var y = document.getElementById("divname");
  y.style.display = "block";
  document.getElementById("inputname").value = "";
}

function chooseSet(value) {
  document.getElementById("displayset").innerHTML = `Set: ${value}`;
  indexset = value - 1;
}

function clearName() {
  name = [];
  document.getElementById("showdata").innerHTML = name;
  var y = document.getElementById("divname");
  y.style.display = "none";
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

function startGame() {
  if (name == [] || indexset == -1) {
    document.getElementById("errormessage").innerHTML = "Name cannot be empty and Sets have to be picked!";
  } else {
    var pick1 = document.getElementById("pick1");
    var pick2 = document.getElementById("pick2");
    var start1 = document.getElementById("start1");
    pick1.style.display = "none";
    pick2.style.display = "none";
    start1.style.display = "block";
    shuffleArray(name);
    document.getElementById("showorder").innerHTML = `The order in which the players play is: ${name}`;
  }
}

function startactualGame() {
  var start1 = document.getElementById("start1");
  var start2 = document.getElementById("start2");
  var olname = document.getElementById("olname");
  start1.style.display = "none";
  start2.style.display = "flex";
  for (i = 0; i < name.length; i++) {
        let li = document.createElement('li');
        li.innerText = name[i];
        olname.appendChild(li);
    }
  numround = document.getElementById("number").value;
  document.getElementById("showround").innerHTML = numround;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let todsets = [
  { truth: [
      "What is your most embarrassing moment?",
      "What is your biggest secret?",
      "What is your biggest accomplishment?",
      "What is your biggest disappointment?",
      "What is your biggest dream?",
      "What is your biggest hope?",
      "What is your biggest fear?",
      "What is your biggest regret?",
      "What is your most embarrassing memory?",
      "Who is your crush?",
      "Who do you hate the most in this game?",
      "Why did you choose your major/career path? If haven't, what is your major/carrer and why?",
      "When was the last time you cried?",
      "Where is the strangest place you've fallen asleep?",
      "How do you deal with stress?",
      "When was the last time you lied?",
      "Why do you think friendship is important?",
      "Where do you see yourself in five years?",
      "How do you feel about public speaking?",
      "When was the last time you felt truly happy?",
      "Why do you think people lie?",
      "Where would you go if you could travel anywhere in the world?",
      "How do you feel about social media?"
    ],
    dare: [
      "Sing a song.",
      "Dance like no one's watching.",
      "Do 10 push-ups.",
      "Call a random number and sing a song.",
      "Eat something weird.",
      "Hold an ice cube in your mouth for 30 seconds.",
      "Do a funny impression.",
      "Tell a joke.",
      "Twerk to ",
      "Post a silly picture on social media.",
      "Drink a glass of water without using your hands.",
      "Try to lick your elbow.",
      "Sing a song in a funny voice.",
      "Do a funny walk.",
      "Act like a cat."
    ]
  },
  {
    truth: [
      "What is your most embarrassing moment?",
      "What is your biggest secret?",
      "What is your biggest fear?",
      "Who is your crush?",
      "Who do you love the most in this game?",
      "Who do you hate the most in this game?",
      "What will you choose your major/career path and why?",
      "When was the last time you cried?",
      "Where is the strangest place you've fallen asleep?",
      "When was the last time you lied?",
      "When was the last time you felt truly happy?",
      "Why do you think people lie?",
      "Where would you go if you could travel anywhere in the world?",
      "How do you feel about social media?",
      // Seperate
      "What is the biggest mistake you've ever made?",
      "What is the most hurtful thing someone has ever said to you?",
      "What is your biggest insecurity?",
      "What is your biggest regret in a past relationship?",
      "What is the worst thing you've ever done to someone?",
      "What is the most embarrassing thing that's ever happened to you in public?",
      "What is your biggest financial fear?",
      "What is your biggest fear about the future?",
      "What is the most selfish thing you've ever done?",
      "Around last week, which freind do you talk with to frequently",
      "If you won 100M dollars, what will you do with the money?",
      "What is the most embarrassing thing you done to your crush?",
      "What is the most embarrassing thing you done to look romantic?",
      "Let the players choose"
    ],
    dare: [
      "Dance like no one's watching.",
      "Do 10 push-ups.",
      "Do 1 open-ended question in STEM",
      "Do a funny impression.",
      "Tell a joke.",
      "Hug ",
      "Unzip the zipper's of a freind slowly without breaking eye contact. Freind: ",
      "Let a freind give you a question. If you fail, remove your clothing for 10 seconds. If you pass, them will remove their clothing for 10 seconds. Freind: ",
      "Sit on a freinds lap until the next round. Freind: ",
      "Twerk to ",
      "Do a cartwheel.",
      "Do a backflip.",
      "Try to lick your elbow.",
      "Sing a song in a funny voice.",
      "Do a funny walk.",
      "Give fake backshots to ",
      "Flirt with touching to ",
      "Send a heart emoji to your crush",
        "Sing a song",
      "Let the players choose"
    ]
  },
  {
    truth: [
      "What is your most embarrassing moment?",
      "What is your biggest secret?",
      "What is your biggest fear?",
      "Who is your crush?",
      "Who do you love the most in this game?",
      "Who do you hate the most in this game?",
      "What will you choose your major/career path and why?",
      "When was the last time you cried?",
      "Where is the strangest place you've fallen asleep?",
      "When was the last time you lied?",
      "When was the last time you felt truly happy?",
      "Why do you think people lie?",
      "Where would you go if you could travel anywhere in the world?",
      "How do you feel about social media?",
      // Seperate
      "What is the biggest mistake you've ever made?",
      "What is the most hurtful thing someone has ever said to you?",
      "What is your biggest insecurity?",
      "What is your biggest regret in a past relationship?",
      "What is the worst thing you've ever done to someone?",
      "What is the most embarrassing thing that's ever happened to you in public?",
      "What is your biggest financial fear?",
      "What is your biggest fear about the future?",
      "What is the most selfish thing you've ever done?",
      "Around last week, which freind do you talk with to frequently",
      "If you won 100M dollars, what will you do with the money?",
      "What is the most embarrassing thing you done to your crush?",
      "What is the most embarrassing thing you done to look romantic?",
      "Let the players choose"
    ],
    dare: [
      "Dance like no one's watching.",
      "Do 10 push-ups.",
      "Do 10 problems in STEM",
      "Tell a joke.",
      "Hug ",
      "Kiss",
      "Twerk to ",
      "Post a silly picture on social media.",
      "Call your crush.",
      "Text your ex.",
      "Do a cartwheel.",
      "Do a backflip.",
      "Eat a spoonful of mustard.",
      "Give fake backshots to ",
      "Flirt with touching to ",
      "Touch the private part of ",
      "Hold an ice cube in your mouth for 30 seconds.",
      "Unzip the zipper's of a freind slowly without breaking eye contact",
      "Let a freind give you a question. If you fail, remove your clothing for 10 seconds. If you pass, them will remove their clothing for 10 seconds. Freind: ",
      "Sit on a freinds lap until the next round. Freind: ",
      "Do a cartwheel.",
      "Send a heart emoji to your crush",
      "Let the players choose"
    ]
  }
];

async function drawCard() {
  // Highlight and dishighlight
  for (var i = 0; i < name.length; i++) {
    var ordercardall = document.getElementById("olname").children[i];
    ordercardall.style.border = "2px solid black";
    ordercardall.style.fontWeight = "400";
  }
  var ordercardnow = document.getElementById("olname").children[indexorder];
  ordercardnow.style.border = "4px solid white";
  ordercardnow.style.fontWeight = "600";
  var truthcard = document.getElementById("truth");
  var darecard = document.getElementById("dare");
  let yesno = getRandomInt(10, 15);
  //Choose Truth/Dare
  for (var i = 0; i < yesno; i++) {
    if (i % 2) {
      truthcard.style.border = "3px solid black";
      darecard.style.border = "0px solid black";
      truth = true;
    } else {
      truthcard.style.border = "0px solid black";
      darecard.style.border = "3px solid black";
      truth = false;
    }
    await sleep(900 * ( i / yesno )); //Delay
  }
  await sleep(1500); //Delay
  // The result generator
  document.getElementById("result").style.display = 'block'; //Display "result"
  //Generate prompt
  if (truth) {
    temporary = Math.floor(Math.random() * todsets[indexset].truth.length);
    document.getElementById("resultp").innerHTML = todsets[indexset].truth[temporary];
  } else {
    temporary = Math.floor(Math.random() * todsets[indexset].dare.length);
    randname = name[getRandomInt(0,name.length - 1)];
    document.getElementById("resultp").innerHTML = todsets[indexset].dare[temporary];
    if (indexset == 0 ) {
      if (temporary == 8) {
        document.getElementById("resultp").innerHTML = todsets[indexset].dare[temporary] + randname;
      }
    }
    if (indexset == 1) {
      if ([5,6,7,8,9,15,16].includes(temporary)) {
        document.getElementById("resultp").innerHTML = todsets[indexset].dare[temporary] + randname;
      }
    }
    if (indexset == 2) {
      if ([4,5,6,13,14,15,17,18,19].includes(temporary)) {
        document.getElementById("resultp").innerHTML = todsets[indexset].dare[temporary] + randname;
      }
    }
  }
  if (indexorder == name.length - 1) {
    indexorder = -1;
    numround = numround - 1;
    document.getElementById("showround").innerHTML = numround;
    if (numround < 0) {
      document.getElementById("showdone").innerHTML = "Game Done after the last player do the truth/dare";
    }
  }
  indexorder = indexorder + 1;
  hasEverExecuted = true;
}
