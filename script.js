const characters = document.querySelectorAll(".character");
let character = [];
let i = 0;

characters.forEach((character) => {
  character[i] = character.getAttribute("id");
  console.log(character[i]);
  i += 1;
});
