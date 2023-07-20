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
//====================="1"=======================
function toTitleCase(name) {
    const words = name.split(" ");
    const capitalization = [];
    for (let i = 0; i < words.length; i++) {
      capitalization[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return capitalization.join(" ");
}
  
//======================"2"======================
function searchInventory(inventory, query){
    let newArray=[];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].includes(query)) 
            newArray.push(inventory[i]);
      }
      
      return newArray;
} 


//========================"3"====================
function formatNPCName(name){
    const newName = name.split(",");
    return newName[1], newName[0].join(" ");
}


//=========================="4"==================
function parseDuration(duration){
    const [hours, minutes] = duration.split(" ");
    return { hours: parseInt(hours), minutes: parseInt(minutes) };
}

//======================="5"=====================
function getGameAcronym(title){
    temp = title.split(" ");
    const acronym = [];
    for(let i = 0; i < temp.length; i++){
        acronym[i] = temp[i].charAt(0);
    }
    return acronym.join("");
}

//======================="6"=====================
function getCharacterDetails(character){
    return `${character.name}, class: ${character.class}, level: ${character.level}`;
}


//======================="7"=====================
function createSlug(location){
    const words = location.split(" ");
    let temp = [];
    for (let i = 0; i < words.length; i++) {
      temp[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
    }
    return temp.join("-");
}

//======================="8"=====================
function trimDescription(description, maxLength){
    let temp = description.substring(0, maxLength);
    return temp + "...";
}

//======================="9"=====================
function splitMonsters(monsters){
    return monsters.split(",");
    
}

