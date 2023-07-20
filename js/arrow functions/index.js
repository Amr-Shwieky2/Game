// ================="1"===================
let getPlayerName = player => player.name;

// ================="2"===================
let getPlayerHealth = (health) =>
    health > 70 ? "High"
    :health > 40? "Medium"
    :"Low";
    
// ================="3"===================
let getTotalInventoryValue = (items) =>{
    let totalValue = 0; 
    for(let i = 0; i < items.length; i++){
        totalValue += items[i].value;
    }
    return 'Total inventory value is ' + totalValue;
}

// ================="4"===================
let sortedItems = (items) =>items.sort((a, b) => b.value - a.value);
   
// ================="5"===================
let getItemNames = (items) => items.map((item) => item.name);
