// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}


function countDown(number) {
    while (number > -1) {
    console.log(number)
    number-- 
    }
}

 function writeCards(names, eventname) {
   const cards = []
   for (let i = 0; i < names.length; i++) {
   console.log (`Thank you, ${names [i]}, for the wonderful surprise gift!`) 
   cards.push(`Thank you, ${names [i]}, for the wonderful surprise gift!`)
   }
   return cards;
 }
