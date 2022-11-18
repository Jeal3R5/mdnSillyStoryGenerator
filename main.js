//Section 1 - initialize your main variables
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

//Contain strings inside variables
const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole things, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Time"];
const insertY = ["the soup kitchen", "Disneyland", "Grandma's House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

//Section 3 - Event Listener and Partial function definition

//Adds a click event listener to the randomize variable so when the button is clicked, the result() function is run
randomize.addEventListener("click", result);

//Adds a partially-completed result() function definition to code
//from here you will fill in the lines inside this function to complete it and make it work properly

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;

    const temperature = `${(Math.round(94 - 32) * 5) / 9} centigrade`;

    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}


// const customName = document.getElementById("customname");
// const randomize = document.querySelector(".randomize");
// const story = document.querySelector(".story");

// function randomValueFromArray(array) {
//   const random = Math.floor(Math.random() * array.length);
//   return array[random];
// }

// const storyText =
//   "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
// const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
// const insertY = ["the soup kitchen", "Disneyland", "the White House"];
// const insertZ = [
//   "spontaneously combusted",
//   "melted into a puddle on the sidewalk",
//   "turned into a slug and crawled away",
// ];

// randomize.addEventListener("click", result);

// function result() {
//   let newStory = storyText;

//   const xItem = randomValueFromArray(insertX);
//   const yItem = randomValueFromArray(insertY);
//   const zItem = randomValueFromArray(insertZ);

//   newStory = newStory.replaceAll(":insertx:", xItem);
//   newStory = newStory.replaceAll(":inserty:", yItem);
//   newStory = newStory.replaceAll(":insertz:", zItem);

//   if (customName.value !== "") {
//     const name = customName.value;
//     newStory = newStory.replaceAll("Bob", name);
//   }

//   if (document.getElementById("uk").checked) {
//     const weight = `${Math.round(300 * 0.0714286)} stone`;
//     const temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrade`;
//     newStory = newStory.replaceAll("94 fahrenheit", temperature);
//     newStory = newStory.replaceAll("300 pounds", weight);
//   }

//   story.textContent = newStory;
//   story.style.visibility = "visible";
// }
