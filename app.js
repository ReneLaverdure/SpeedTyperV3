//init wordgen , ui and ctrl objects
const wordGen = new WordGen,
      ui = new UI,
      ctrl = new Controller

// the listener for the different level of diffitculty
wordGen.diff.addEventListener('click', (e) => {
  let diff = e.target.id;

  // set the diffitculty depending on what button is pressed
  if(diff === 'easy'  || diff === 'medium' || diff === "hard") {
    //set the new diffitculty
    wordGen.getDiff(diff);
    // clear the old set of word
    wordGen.clearWords();
    // reset all the variables
    ctrl.reset();
    //generate the new set of words
    wordGen.start();
    //set the first words to be highlighted
    ui.firstWord();
    // set the counter timer
    ui.countDown(60);
  }
});

// const input = document.querySelector("#input");

//listener for input
ui.input.addEventListener('keydown', (e) => {
  ctrl.keyDown(e);
  ctrl.firstPress();
})  

// listener for window click for closing the modal by clicking on the darken background
window.addEventListener('click', (e) => {
  // get score card modal
  const score_card = document.querySelector(".score-card");
  //get the close icon in modal
  const close = document.querySelector("#close");
  // if click on cross or background close modal
  if(e.target == score_card || e.target === close) {
    score_card.style.display = "none";
  }
})

// reset button listener
ui.reset.addEventListener("click", () => {
  // reset all variables
  ctrl.reset();
  // generate new word set
  wordGen.start();
  // highlight new first word
  ui.firstWord();
  //set counter to 60
  ui.countDown(60);
  //renable input element
  this.input.disabled = false;
  //clear input
  this.input.value = "";
})

// on load generate words and load first word
wordGen.start();
ui.loadFirstWord();











