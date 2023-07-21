// Relevant to string exercises 3, 4, 5, 6
let gameData = {
  player: {
    name: "Hero",
    health: 100,
    level: 1,
    location: "forest",
    inventory: ["sword", "health potion"],
  },
  monsters: [
    {
      name: "Goblin",
      health: 25,
      location: "forest",
    },
    {
      name: "Ogre",
      health: 50,
      location: "mountain",
    },
    {
      name: "Dragon",
      health: 100,
      location: "castle",
    },
    {
      name: "Witch",
      health: 30,
      location: "swamp",
    },
    {
      name: "Ghost",
      health: 15,
      location: "graveyard",
    },
  ],
};

// ex 1
/*
1. Character Name Capitalization: Write a function, toTitleCase(name) , that takes a
    character's name string in all lowercase and returns it in title case.
    Input: "iron warrior"
    Output: "Iron Warrior"
*/
function toTitleCase(name) {
  // Split the name into an array of words
  const words = name.split(" ");
  
  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  // Join the words back to form the title-cased name
  const titleCaseName = capitalizedWords.join(" ");
  
  return titleCaseName;
}

const inputName = "iron warrior";
const outputName = toTitleCase(inputName);
console.log(outputName);
// Output: "Iron Warrior"