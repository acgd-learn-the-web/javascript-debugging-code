var name;
var age = 32;
var trex = {
  name: 'T. Rex',
  diet: 'Meat'
};
var $h1 = $('h1');

// console.log(name);
// console.log(name, age);

// console.dir(trex);

// while (!name) {
//   name = prompt('What’s your name?');
// }

if (name == 'Thomas') {
  $h1.css('color', 'limegreen');
} else {
  $h1.css('color', 'purple');
}
