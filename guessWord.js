/*
 * word1 = Det bestämda ordet (5 bokstäver)
 * word2 = Gissa ordet (5 bokstäver)
 */

function guessWord(word1, word2) {
  word1 = word1.toUpperCase();
  word2 = word2.toUpperCase();
  if (word1 == word2) {
    return true;
  } else {
    return false;
  }
}

console.log(guessWord("HEJb", "hej"));
