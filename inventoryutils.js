export const filterWeapns = (inventory) => {
    return inventory.filter(item => item.type === "weapon");
}

export const filterConsumables = (inventory) => {
    return inventory.filter(item => item.type === "consumable");
}

const calculateTotalValue = (inventory) => {
    return inventory.reduce((total, item) => total+item.value, 0);
}
export default calculateTotalValue;