window.onload = function() {
  // Apply styles to the <p> element
  const mainText = document.getElementById("main-text");
  mainText.style.fontStyle = "italic";
  mainText.style.opacity = 0.6;
  mainText.style.fontSize = "larger";

  // Add event listener to the reload button
  const reloadButton = document.getElementById("reloadButton");
  reloadButton.addEventListener("click", function() {
    mainText.innerHTML = generateExcuse();
  });
};

function generateExcuse() {
  let who = ["I", "My dog", "My cat", "My little brother", "My friend", "The neighbor"];
  let didWhat = ["ate", "destroyed", "hid", "lost", "spilled", "broke"];
  let toWhat = ["my homework", "the computer", "the keys", "the phone", "the cake", "the vase"];
  let when = ["yesterday", "last night", "this morning", "while I was sleeping", "during lunchtime"];

  let excuse = getRandomElement(who) + " " + getRandomElement(didWhat) + " " + getRandomElement(toWhat) + " " + getRandomElement(when) + ".";

  return excuse;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
