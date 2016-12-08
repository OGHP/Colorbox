var container = document.getElementById('container')

var getRandomInt = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var generateBox = function(){
var elem = document.createElement('div'); 
  elem.classList.add('box');

  var rndNum = getRandomInt(1, 5);
  console.log(rndNum);

  if(rndNum === 1) {
    elem.classList.add('blue');
  } else if(rndNum === 2) {
    elem.classList.add('teal');
  } else if(rndNum === 3) {
    elem.classList.add('cream');
  } else if(rndNum === 4) {
    elem.classList.add('silver');
  } else {
    elem.classList.add('green');
  }

  container.appendChild(elem);    //add element (append) to container
}

var maxIterations = 2000;
var iterator = 0

var boxInterval = setInterval(function() {
  if (iterator < maxIterations) {
  generateBox();
  iterator++;
} else {
  clearInterval(boxInterval);
}
}, 20);




// original box code before adding interval
// for (var i = 0; i < 100; i++) {
//   var elem = document.createElement('div');  //creates DOM element not on webpage yet
//   elem.classList.add('box');

//   var rndNum = getRandomInt(1, 4);
//   console.log(rndNum);

//   if(rndNum === 1) {
//     elem.classList.add('hotpink');
//   } else if(rndNum === 2) {
//     elem.classList.add('teal');
//   } else if(rndNum === 3) {
//     elem.classList.add('yellow');
//   } else {
//     elem.classList.add('green');
//   }

//   container.appendChild(elem);
// }    //add element (append) to container


