const btnRules = document.querySelector(".rule-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

btnRules.addEventListener("click", () => {
  modalRules.style.display = "flex";
});

btnClose.addEventListener("click", () => {
  modalRules.style.display = "none";
});

// make a obj for key  value paper to acess in function

const opt = {
  rock: "/assests/rock.png",
  paper: "/assests/paper.png",
  scissor: "/assests/scissor.png",
};
let userSCORE = 0;
let compSCORE = 0;

const pickUser = (hand) => {
  console.log(hand);
  // to hide current page
  let hands = document.querySelector(".card");
  hands.style.display = "none";
  // to show next page where user picks
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  // set the user pick
  document.getElementById("user-img").src = opt[hand];

  let compPick = pickComp();
  result(hand, compPick);
};

const pickComp = () => {
  let hands = ["rock", "paper", "scissor"];
  // console.log(hands[])
  let compPick = hands[Math.floor(Math.random() * 3)];
  // console.log(compPick);

  // set the user pick
  document.getElementById("compPick-Img").src = opt[compPick];
  return compPick;
};

let next = document.querySelector(".next-btn");

const result = (user, compPick) => {
  if (user == "paper" && compPick == "scissor") {
    setDescision("YOU LOOSE");
    setScoreComp(compSCORE + 1);
  } else if (user == "paper" && compPick == "rock") {
    setDescision("YOU WIN");
    setScoreUser(userSCORE + 1);
    next.style.display = "flex";
  } else if (user == "paper" && compPick == "paper") {
    setDescision("TIE");
  } else if (user == "rock" && compPick == "paper") {
    setDescision("YOU LOOSE");
    setScoreComp(compSCORE + 1);
  } else if (user == "rock" && compPick == "scissor") {
    setDescision("YOU WIN");
    setScoreUser(userSCORE + 1);
    next.style.display = "flex";
  } else if (user == "rock" && compPick == "rock") {
    setDescision("TIE");
  } else if (user == "scissor" && compPick == "rock") {
    setDescision("YOU LOOSE");
    setScoreComp(compSCORE + 1);
  } else if (user == "scissor" && compPick == "paper") {
    setDescision("YOU WIN");
    setScoreUser(userSCORE + 1);
    next.style.display = "flex";
  } else if (user == "scissor" && compPick == "scissor") {
    setDescision("TIE");
  } else {
    setDescision("Please select an option");
  }
};

const setDescision = (decision) => {
  console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
};
const setScoreUser = (score) => {
  console.log(score);
  userSCORE = score;
  localStorage.setItem("userScore", userSCORE);
  document.querySelector(".score-user .num").innerText = score;
};
const setScoreComp = (score) => {
  console.log(score);
  compSCORE = score;
  localStorage.setItem("compScore", compSCORE);
  document.querySelector(".score-comp .num").innerText = score;
};

const restart = () => {
  let hands = document.querySelector(".card");
  hands.style.display = "flex";
  // to show next page where user picks
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};
const regame = () => {
  window.location.href = "https://major-1-rock-paper-scissors.vercel.app/";
};

// Retrieve user score and comp score from local storage
let storedUserScore = localStorage.getItem("userScore");
let storedCompScore = localStorage.getItem("compScore");

// Convert the retrieved scores to numbers if needed
storedUserScore = parseInt(storedUserScore);
storedCompScore = parseInt(storedCompScore);

// Check if the values were successfully retrieved
if (storedUserScore && storedCompScore) {
  console.log("User Score:", storedUserScore);
  document.querySelector(".score-user .num").innerHTML = storedUserScore;
  console.log("Comp Score:", storedCompScore);
  document.querySelector(".score-comp .num").innerHTML = storedCompScore;
} else {
  console.log("Scores not found in local storage.");
}
