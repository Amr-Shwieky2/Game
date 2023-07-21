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
  return name.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ');
}

const inputName = "iron warrior";
const outputName = toTitleCase(inputName);
console.log(outputName);
// Output: "Iron Warrior"

//-----------------------------------------------------------------------------
/*
2. Item Search: Write a function, searchInventory(inventory, query) , that takes in an
array of inventory item names and a string search query. The function should return a new
array with only the items that contain the query string.
Input: ["Iron Sword", "Healing Potion", "Steel Shield"], "Iron"
Output: ["Iron Sword"]
*/
function searchInventory(inventory, query) {
  //the filter method It is used to create a new array containing elements from the original array that satisfy a specified condition. The filter() method does not modify the original array; instead, it returns a new array with the filtered elements.
  const result = inventory.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  return result ; 
}
  const inventory = ["Iron Sword", "Healing Potion", "Steel Shield"];
  const query = "Iron";
  const output = searchInventory(inventory, query);
  console.log(output);

  //---------------------------------------------------------------------------