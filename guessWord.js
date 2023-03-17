export default function guessWord(word, guess) {
  let result = [];
  word = word.toUpperCase();
  guess = guess.toUpperCase();
  const letters = word.length + guess.length;
  if (letters < 10 || letters > 10) {
    result = "Båda orden behöver innehålla 5 tecken, gör ett nytt försök!";
  } else if (letters == 10) {
    const wordRegExp = new RegExp(/^(?!.*([A-ZÅÄÖ])\1{2})[A-ZÅÄÖ]+$/);
    if (word.match(wordRegExp)) {
      if (guess.match(wordRegExp)) {
        let misplacedLetter = [];
        let correctLetter = [];
        let incorrectLetter = [];

        for (let i = 0; i < 5; i++) {
          result[i] = { letter: guess[i], result: "" };
          if (guess[i] === word[i]) {
            correctLetter.push(guess[i]);
            result[i].result = "Correct";
          } else if (word.includes(guess[i])) {
            misplacedLetter.push(guess[i]);
            result[i].result = "Misplaced";
          } else {
            incorrectLetter.push(guess[i]);
            result[i].result = "Incorrect";
          }
        }

        for (let y = 0; y < 5; y++) {
          if (
            word.includes(guess[y]) &&
            result[y].result == "Misplaced" &&
            correctLetter.includes(guess[y])
          ) {
            result[y].result = "Incorrect";
          }
        }
      } else {
        result = `Vi har inte registrerat ${guess} som ett ord! Gissa på nytt.`;
      }
    } else {
      result = `Vi har inte registrerat ${word} som ett ord! Gissa på nytt.`;
    }
  }
  return result;
}
