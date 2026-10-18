const inventory = [
    { id: 1, name: "Iron Sword", type: "weapon", value: 150 },
    { id: 2, name: "Health Potion", type: "consumable", value: 50 },
    { id: 3, name: "Steel Shield", type: "armor", value: 200 },
    { id: 4, name: "Mana Potion", type: "consumable", value: 75 }
];

const equipmentNames = inventory
    .filter(item => item.type != "consumable")
    .map(item => item.name);

console.log("Equipments", equipmentNames);


const totalValue = inventory.reduce((total,item) => total + item.value, 0);
console.log("Total Inventory: ", totalValue);