import calculateTotalValue from "./inventoryutils.js";

import { filterWeapns } from "./inventoryutils.js";

const myInventory = [
    { id: 1, name: "Iron Sword", type: "weapon", value: 150 },
    { id: 2, name: "Health Potion", type: "consumable", value: 50 },
    { id: 3, name: "Wooden Bow", type: "weapon", value: 100 }
];

console.log("Weapons only: ", filterWeapns(myInventory));

console.log("Total Value: ", calculateTotalValue(myInventory));

