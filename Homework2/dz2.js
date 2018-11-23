var items = [
      {
          name: 'tea',
          weight: 4
      },
      {
          name: 'coffee',
          weight: 8
      },
      {
        name: 'salt',
        weight: 19
    }, 
    {
      name: 'sugar',
        weight: 25
    }
  ];

  var boxes = [{
        size: "large<br>",
        max: 20
    },
    {
        size: "medium<br>",
        max: 7
    },
    {
        size: "small<br>",
        max: 3
    }
];



var wei = [];
var suma = 0;

function sum(){
  for (var x = 0; x < wei.length; x++){
    suma += wei[x];
  }
  return console.log(suma);
}
var item;
purchase: while (true) {
  var item = prompt('What would you like to buy? ' + "We have: tea, coffee, salt and sugar");

  for (var i = 0; i < items.length; i++) {
    if (item === items[i].name) {
      wei[wei.length]=items[i].weight;
    } else if (item === null){
      console.log(wei);
      sum();
      break purchase;
    }
  }
}
document.write('All weight - ' + suma + "kg." + '<br>');

var Box = [BoxL=0,BoxM=0,BoxS=0]; 
var isCorrect = true;

// if (suma >= 20) {
//       suma -= 20;
//       ++BoxL;
       
//     } else if (suma >= 7) {
//       suma -= 7;
//       ++BoxM;
       
//     } else if (suma >= 3) {
//       suma -= 3;
//       ++BoxS;
// }



while (suma >= 20) {
      suma -= 20;
      ++BoxL;
       
    } while(suma >= 7) {
      suma -= 7;
      ++BoxM;
       
    } while (suma >= 3) {
      suma -= 3;
      ++BoxS;
}
document.write("We will need boxes: " + BoxL + " - large, " + BoxM + " - medium, " + BoxS + " - small.");