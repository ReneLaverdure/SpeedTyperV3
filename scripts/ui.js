class UI{
  constructor() {
  
    this.input = document.querySelector("#input");
    // this.parentDiv = this.input.parentNode;

    this.word_output = document.querySelector(".word-output");
    this.score_display = document.querySelector(".score-display");
    // this.close = document.querySelector("#close");

    this.reset = document.querySelector("#reset");
  }

  // on load hight the first word 
  loadFirstWord() {
    const word = this.word_output.childNodes[1];
    word.className = "currentWord";
    word.setAttribute("id", "currentWord");
  }

  // high light first word when function run
  firstWord() {
    const word = this.word_output.childNodes[0];
    word.className = "currentWord";
    word.setAttribute("id", "currentWord");
  }


//Ending score card display   
  displayScore(score, count) {
    
    //disable the text input 
    this.input.disabled = true;

    //get the div within the modal
    const endScore = document.createElement("div");
    endScore.className = "score";

    //insert the html within endscore div
    endScore.innerHTML = `
      <span class="close" id="close">&times;</span>

      <h1>Game Over</h1>
      <h2>Total Score: <span>${score}</span> </h2>

      <h3>Number of correct words: <span>${count.correct}</span> </h3>
      <h3>Number of incorrect words: <span>${count.incorrect}</span> </h3>

    `;
    
    // display the score within div
    this.score_display.appendChild(endScore);
    // get the score card modal div and change style to block
    const scoreCard = document.querySelector(".score-card");
    scoreCard.style.display = "block";
  }

  // set the timer display
  countDown(time) {
    const timer = document.querySelector("#timer");
    timer.innerHTML = time;
  }

}