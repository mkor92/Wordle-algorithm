# 4 Stegsmetoden

## Definiera

- Algoritm för ordleken "Wordle"
- En funktion ska kunna ta två inputs (strings). Ett ord som är gissningen och ett ord som är det korrekta ordet.
- Funktionen ska sedan kontrollera vilka bokstäver från det ena order förkommer i det andra. Och isåfall var i ordet.

- Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
  - letter (bokstaven)
  - result (ett av följande värden)
    - ‘incorrect’: Finns inte med i det andra ordet
    - ‘missplaced’: Finns med i det andra ordet, men på annan plats
    - ‘correct’: Korrekt plats i det andra ordet

## Separera

- Skriv en funktion som tar emot två strängar(max 5 bokstäver)
- Jämför strängarna och se ifall de innehåller samma bokstäver
- Om samma bokstäver finns i strängarna, kontrollera om de befinner sig på samma plats i ordet.
- Funktionen ska ge tillbaka en array med objekt i konsolen, ett för varje bokstav i samma ordning som det förkommer i det gissade ordet.
- Sedan visa om bokstäverna finns med i ordet och om de är korrekt placerade.

## Experimentera

## Kombinera
