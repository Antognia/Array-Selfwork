// Array da ordinare
let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
  ];
  
  let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
  ];



let unAnelloPer = array_1[0][0] + ' ' + array_1[1][0] + ' ' + array_1[0][1];
let eNelBuioIncatenarli = array_1 [2][1] + ' ' + array_2 [3][0] + ' ' + array_2[4][1] + ' ' + array_1[0][2];

// Frase a console
console.log(unAnelloPer, array_2[4][0][0], unAnelloPer, array_1[1][1], unAnelloPer, array_1[2][0], eNelBuioIncatenarli);