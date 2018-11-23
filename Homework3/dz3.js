(function(){
var characters = [
{ 'name': 'barney', 'age': 36 },
{ 'name': 'fred', 'age': 40 }
];

var pluck = function(arr,key){
  var newArr = [];
  for (var i = 0, x = arr.length; i < x; i++){
    if (arr[i].hasOwnProperty(key)){
      newArr.push(arr[i].key)
    }
  }
  return newArr;
}

    console.log(pluck(characters, 'name'));
    console.log(pluck(characters, 'age'));
 })();   


    // (function(){
    // var characters = [
    // { 'name': 'barney', 'age': 36 },
    // { 'name': 'fred', 'age': 40 }
    // ];

    // var pluck = function (chars, field){
    //     var arr = [];
    //     for (let i=0;i<chars.length;i++){
    //         arr.push(chars[i][field]);
    //     }
    //     return arr;
    // };

    // console.log(pluck(characters, 'name'));
    // console.log(pluck(characters, 'age'));
    

