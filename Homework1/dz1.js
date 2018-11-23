var colour = prompt('Выберите цвет телефона', '');
var img;
if (colour === 'red') {
    prices = 120;
    img: 'Red.png>';
   
} else if (colour === 'black') {
     prices = 100;
     img: 'Black.png>';
  
} else if (colour === 'silver') {
     prices = 80;
      img: 'Silver.png>';
} else  {
    prices = 0;
      img: 'Default.png>';
    
}


var memory = prompt('Memory?');
var price = 0;
var isCorrect = true;
if (memory === null) {
    isCorrect = false;
    document.write('<h2>Пока</h2>');
} else {
    if (+memory === 128) {
        price = 500;
       
    } else if (+memory === 256) {
        price = 700;
       
    } else if (+memory === 512) {
        price = 900;
     
    } else {
        isCorrect = false;
        document.write('<h2>Такой памяти нет</h2>');

    }
}
if (isCorrect) {
    document.write('<img width=200" src="../pictures/' + img + '">');
    document.write ('<h1>Price: ' +(price + +prices)+ '$</h1>');  
}




// var colors = [{
//         name: 'black',
//         img: 'Black.png',
//         k: 20
//     },
//     {
//         name: 'silver',
//         img: 'Silver.png',
//         k: 0
//     },
//     {
//         name: 'red',
//         img: 'Red.png',
//         k: 30
//     }
// ];
// var memories = [{
//         val: 128,
//         price: 600
//     },
//     {
//         val: 256,
//         price: 800
//     },
//     {
//         val: 512,
//         price: 1000
//     }
// ];

// var color, memory;
// var img = 'Default.png';
// var price = 0;

// do {
//     color = prompt('Color?');
// } while (color !== 'black'  || color !== 'silver' || color !== 'red');


// color: while (true) {
//     color = prompt('Color?');
//     if (color === null) {
//         alert('Пока!');
//         break;
//     }
//     for (var i = 0; i < colors.length; i++) {
//         if (colors[i].name === color) {
//             img = colors[i].img;
//             // price = price + colors[i].k;
//             price += colors[i].k;
//             break color;
//         }
//     }
// }

// memory: while (color) {
//     memory = prompt('Memory?');
//     if (memory === null) {
//         alert('Пока!');
//         break;
//     }
//     for (var i = 0; i < memories.length; i++) {
//         if (memories[i].val === +memory) {
//             price += memories[i].price;
//             break memory;
//         }
//     }
// }
// document.write('<img width=200" src="../img/' + img + '">');
// document.write('<h2>Price: ' + price + '$</h2>');
