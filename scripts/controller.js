class Controller{
  constructor(){
    this.ui = new UI;

    this.score = 0;
    this.time = 60;
    this.key = false;
    this.end = false;

    this.count = {
      correct: 0,
      incorrect: 0,
    }

    this.input = document.querySelector("#input");
    this.parentDiv = this.input.parentNode;
  }

  // clear the inner html of the word output, this is where the words are displayed
  wordReset() {
    const output = document.querySelector('.word-output');
    output.innerHTML = '';
  }

  // when the spacebar is pressed remove the input current value
  keyDown(e) {
    const input = document.querySelector("#input");
  
    if(e.key === " ") {
      this.nextWord(input.value);
      input.value = "";
    }
  }

  // in the list of string, high light the next word
  nextWord(word) {
    let currentWord = document.querySelector("#currentWord");
    let nextWord = document.querySelector("#currentWord").nextSibling;
    //check to see if the word input is correct or incorrect
    this.checkWord(word);
    //set id
    currentWord.setAttribute("id", " ");
  
    nextWord.className = "currentWord"
    nextWord.setAttribute("id", "currentWord");
  }

  // check the inputed word spelling to see if its coorect
  checkWord(word) {
    let currentWord = document.querySelector("#currentWord");
    let nextWord = document.querySelector("#currentWord").nextSibling;
  
    word = word.replace(/\s/g, "");
    // if incorrect change current word class to incorrect, decrease score counter
    if(word != currentWord.innerHTML) {
      currentWord.className = "incorrect";
      this.scoreCounter(false);
      //if correct current word class correct, increase score counter
    } else {
      currentWord.className = "correct";
      this.scoreCounter(true);
    }
    
    // no next word and theres still time on the clock generate a new set of words and set the first word
    if(nextWord == null && this.time > 0) {
      this.wordReset();
      wordGen.start();
      ui.firstWord();
      
      //else display the score card
    } else if (nextWord === null) {
      this.ui.displayScore(this.score, this.count);
      this.end = true;
      
    }

  }

  // keep score count and number of incorrect and correct words
  scoreCounter(bol) {
    if(bol === true) {
      this.score++;
      this.count["correct"]++;
    } else if( bol === false) {
      this.score--;
      this.count["incorrect"]++;
    }
  }

// reset all the values
  reset() {
    this.score = 0;
    this.count["correct"] = 0;
    this.count["incorrect"] = 0;
    this.time = 60;
    this.end = true;
    this.key = false;

    ui.word_output.innerHTML = "";
    ui.score_display.innerHTML = "";
  }

  //when the first key is pressed begin timer
  firstPress() {
    if( this.key ===  false){
      this.timerFunction();
      this.key = true;
      this.end = false;
    }
  }

  //timer function
  timerFunction() {
    let myfunc = setInterval(() => {
      if(this.time <= -1){
        this.time = 0;

        ui.displayScore(this.score, this.count);
        clearInterval(myfunc);
      } else if(this.end === true){
        clearInterval(myfunc);
      }else {

        let newTime = this.time--
        ui.countDown(newTime);
      }
    }, 1000)
  }

}