document.addEventListener('DOMContentLoaded', function() {
  const wordCount = 10;

  let guessCount = 4,
    password = '';

  const start = d3.select('#start');
  start.on('click', function() {
    toggleClasses(d3.select('#start-screen'), 'hide', 'show');
    toggleClasses(d3.select('#game-screen'), 'hide', 'show');
    startGame();
  });

  function toggleClasses(element) {
    for (let idx = 1; idx < arguments.length; idx++) {
      element.classed(arguments[idx], !element.classed(arguments[idx]));      
    }
  }

  function startGame() {
    const wordList = d3.select('#word-list');
    const randomWords = getRandomValues(words, wordCount);

    randomWords.forEach(function(word) {
      wordList.append('li').text(word);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.on('click', updateGame);
  }

  function getRandomValues(array, numberOfVals) {
    return shuffle(array).slice(0, numberOfVals);
  }

  function shuffle(array) {
    var arrayCopy = array.slice();
    for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      var idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      var temp = arrayCopy[idx1];
      arrayCopy[idx1] = arrayCopy[idx2];
      arrayCopy[idx2] = temp;
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    d3.select('#guesses-remaining')
      .text(`Guesses remaining: ${guessCount}.`);
  }

  function updateGame() {
    const target = d3.select(d3.event.target);

    if (target.node().tagName === "LI" && !target.classed('disabled')) {
      const guess = target.text();
      const similarityScore = compareWords(guess, password);

      target.classed('disabled', true);
      target.text(`${guess} --> Matching Letters: ${similarityScore}`);
      
      setGuessCount(guessCount - 1);

      // check whether game is over
      if (similarityScore === password.length) {
        toggleClasses(d3.select('#winner'), 'hide', 'show');
        //remove the click listener
        d3.select(this).on('click', null);
      } else if (guessCount === 0) {
        toggleClasses(d3.select('#loser'), 'hide', 'show');
        //remove the click listener
        d3.select(this).on('click', null);
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) throw "Words must have the same length";
    var count = 0;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }
});