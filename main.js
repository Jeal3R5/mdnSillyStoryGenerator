//NOTE: I realize this looks incredibly messy with all the comments but because I'm still in the learning phase I leave previous items there as notes/breadcrumbs so I understand the evolution of that code piece.

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
  "It was 94 degrees fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.";

//create array for variable x
const insertX = [
  "Willy the Goblin",
  "Big Papa",
  "Father Time",
  "Pop Tart",
  "Ruby the Stone Carver",
  "Luna the Crooner",
  "Avari the Artsy",
  "Emily the 1st",
];

//create array for variable y
const insertY = [
  "the soup kitchen",
  "Disneyland",
  "Grandma's House",
  "the soccer field",
  "dance class",
  "the pool",
];

//create array for variable z
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
  "got toasted",
  "joined a rock band",
  "flew to the moon",
  "an alien spaceship beamed them up, Scotty",
];

//Section 3 - Event Listener and Partial function definition

//Adds a click event listener to the randomize variable so when the button is clicked, the result() function is run
randomize.addEventListener("click", result);

//Adds a partially-completed result() function definition to code
//from here you will fill in the lines inside this function to complete it and make it work properly

function result() {
  //create a new story each time
  let newStory = storyText;
  const randomWeight = Math.floor(Math.random() * (1000 - 1 + 1));
  const randomTemp = Math.floor(Math.random() * (150 - 1 + 1));

  //generate a random index value from the different arrays, no hardcoding to allow for array growth
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  //replace all the inserts in the paragraph with the new correct array element
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);
  //getting the name value from the input box, and allowing a backup name (Bob) to be filled in if no name was found in the input
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  //Adding a text box for the temperature ... hmm....or show we make it random? Make it random generator for temp and weight

  //if US is selected

  if (document.getElementById("us").checked) {
    let temperature = `${randomTemp} degrees fahrenheit`;
    let weight = `${randomWeight} pounds`;

    newStory = newStory.replaceAll("94 degrees fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  //if UK is selected, change
  if (document.getElementById("uk").checked) {
    //const weight = `${Math.round(300 / 14)} stone`;     //this was the code we started with in the MDN assignment
    //const randomWeight = Math.floor(Math.random() * (1000 - 1 + 1));   //initially had this here but decided to move it.
    let weight = randomWeight / 14; //give me a random weight in pounds divided by 14 to give us the weight in stone
    let rounded = weight.toFixed(3) + " stone"; //this allows us to limit the weight variable to 3 decimal places

    //const temperature = `${(Math.round(94 - 32) * 5 / 9)} centigrade`;   //this was code we started out with but decided to go a different way
    const randomTempF = Math.floor(Math.random() * (150 - 1 + 1)); //This is giving us a random number between 1 - 150 to use as a random temperature within the story
    const temperature = (randomTempF - 32) * (5 / 9); //This gives us the F-temp converted to celsius
    const temp = temperature.toFixed(3) + " degrees celsius"; //This allows us to limit the temperature to three decimal places.

    newStory = newStory.replaceAll("94 degrees fahrenheit", temp); //This changes the temp in the story to the new temp
    newStory = newStory.replaceAll("300 pounds", rounded); //This changes the weight in the story to the new weight
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

// const randomWeight = Math.floor(Math.random() * (1000 - 1 + 1));
// const randomTemp = Math.floor(Math.random() * (150 - 1 + 1));

//Original Code - this is what we started with.
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
