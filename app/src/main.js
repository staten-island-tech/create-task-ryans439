const addItemBtn = document.getElementById('addItemBtn');
const itemNameInput = document.getElementById('itemName');
const itemPriceInput = document.getElementById('itemPrice');
const itemQuantityInput = document.getElementById('itemQuantity');
const inventoryList = document.getElementById('inventoryList');
let inventory = [];

function renderInventory() {
    inventoryList.innerHTML = '';
    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];
        const card = document.createElement('div');
        card.className = 'inventory-item';
        card.innerHTML = `
            <div>Name: ${item.name}</div>
            <div>Price: $${item.price}</div>
            <div>Quantity: ${item.quantity}</div>
            <div>
                <button class = "update" onclick="updateItem(${i})">Update</button>
                <button class = "delete" onclick="deleteItem(${i})">Delete</button>
            </div>
        `;
        inventoryList.appendChild(card);
    }
}

function addItem() {
    const name = itemNameInput.value;
    const price = itemPriceInput.value;
    const quantity = itemQuantityInput.value;

    if (name && price && quantity) {
        const newItem = { name, price, quantity };
        inventory.push(newItem);
        renderInventory();
        itemNameInput.value = '';
        itemPriceInput.value = '';
        itemQuantityInput.value = '';
    }
}

function deleteItem(index) {
    inventory.splice(index, 1);
    renderInventory();
}

function updateItem(index) {
    const newQuantity = prompt('Enter new quantity:', inventory[index].quantity);
    if (newQuantity !== null) {
        inventory[index].quantity = newQuantity;
        renderInventory();
    }
}

addItemBtn.addEventListener('click', addItem);
