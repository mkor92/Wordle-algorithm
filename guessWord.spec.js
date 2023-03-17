import { describe, expect, it } from "@jest/globals";
import guessWord from "./guessWord.js";

describe("guessWord function", () => {
  it("returns correct result when there is double letters and one of them in the right place", () => {
    const result = guessWord("cykla", "hallå");
    const expected = [
      { letter: "H", result: "Incorrect" },
      { letter: "A", result: "Misplaced" },
      { letter: "L", result: "Incorrect" },
      { letter: "L", result: "Correct" },
      { letter: "Å", result: "Incorrect" },
    ];
    expect(result).toStrictEqual(expected);
  });

  it("returns correct result when mixed lower- and uppercase letters", () => {
    const result = guessWord("GlADa", "gLadA");
    const expected = [
      { letter: "G", result: "Correct" },
      { letter: "L", result: "Correct" },
      { letter: "A", result: "Correct" },
      { letter: "D", result: "Correct" },
      { letter: "A", result: "Correct" },
    ];
    expect(result).toStrictEqual(expected);
  });

  it("returns error message if some of the words are not recognised", () => {
    const result = guessWord("bakar", "hhhhh");
    const expected = "Vi har inte registrerat HHHHH som ett ord! Gissa på nytt.";
    expect(result).toBe(expected);
  });

  it("returns error message if word(s) are not 5 letters", () => {
    const result = guessWord("bra", "brasa");
    const expected = "Båda orden behöver innehålla 5 tecken, gör ett nytt försök!";
    expect(result).toBe(expected);
  });
});
