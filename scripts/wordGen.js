class WordGen{
  constructor() {
    this.words = ["hello", "bye", "goodmoring"];

    //Different diffitculty level words as well as array of words for each tier
    this.level = {
      easy: [
        "hello", "bye", "moring", "good", "bad", "low", "her", "him", "true", "false", "eight", "of", "get", "life", "fast", "saw", "last", "face", "high", "same", "mile", "town", "there", "quick", "lead", "white", "cold", "note", "look", "unit", "door", "often", "late", "been", "sing", "early", "bring", "bed", "cover", "just", "all", "your", "body", "size", "port", "plant", "spell", "bed", "self", "music", "step", "horse", "fine", "pound", "north", "south", "west", "east", "map", "know", "boat", "watch", "mark"
      ],
      medium: [
        "rhythm", "cemetary", "indict", "buzzkill", "accept", "through", "sentence", "happen", "surface", "mountain", "minute", "direct", "person", "distant", "develop", "school", "figure", "complete", "thousand", "picture", "travel", "behind", "street", "remember", "simplier", "should", "possible", "measure", "laughter", "standard", "enough", "country", "objective", "beautiful", "kickback", "lockjaws", "muckluck"
      ],
      hard: [
        "accommodate", "handkerchief", "adequate", "sufficient", "satisfactory", "stewardesses", "pizzazz", "caresses", "suburban", "obstinate", "flapjack", "jukebox", "squeeze", "jezebel", "whizbang", "exorcize", "maximize", "quixotic", "exhaustibility", "porcupine", "highjack", "zabajone", "gizzards", "jiujutsu", "paxwaxes", "coxcombs", "financial", "companies", "liquidity", "leveraged", "javadekar", "parliament", "effectiveness", "institution", "facilitate", "disruptions" 
      ]
    }

    //diffitculty setting
    this.diffitculty = "easy"

     this.word_output = document.querySelector(".word-output");
     this.difEasy = document.querySelector("#easy");
     this.difMedium = document.querySelector("#medium");
     this.difHard = document.querySelector("#hard");
     this.diff = document.querySelector("#diff");
  }


  //changes users selected diffitculty
  getDiff(diff) {
    this.diffitculty = diff;
  }

  //clears the word output area
  clearWords() {
    this.word_output.innerHTML = "";
  }

  //run create word
  start() {
    for(var i = 0; i <= 24; i++) {
      this.createWord();
    }
  }

  //create and insert the generated word into spans athen into the word_output div
  createWord() {
    const span = document.createElement("span");
    span.className = "nextword";
    span.setAttribute("id", "");
    span.innerHTML = this.generateWord();

    this.word_output.appendChild(span);
  }

//picks random words from array
  generateWord(diff) {
    return this.level[this.diffitculty][this.generateInt(0, this.level[this.diffitculty].length - 2)];
    // return this.word[this.generateInt(0, this.words.length - 2)];
  }

//return inclusive random int
// no less than min no greater than max
  generateInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }
}