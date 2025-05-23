const addItemBtn = document.getElementById("addItemBtn");
const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const itemQuantityInput = document.getElementById("itemQuantity");
const inventoryList = document.getElementById("inventoryList");
let inventory = [];

function loadInventory() {
  inventoryList.innerHTML = "";
  if (inventory.length === 0) {
    inventoryList.innerHTML = "<p>No items in inventory.</p>";
  } else {
    for (let i = 0; i < inventory.length; i++) {
      const item = inventory[i];
      const card = document.createElement("div");
      card.className = "inventory-item";
      card.innerHTML = `
            <div>Name: ${item.name}</div>
            <div>Price: $${item.price}</div>
            <div>Quantity: ${item.quantity}</div>
            <div>
                <button class = "update" onclick="updateItem(${i})">Change Quantity</button>
                <button class = "delete" onclick="deleteItem(${i})">Delete</button>
            </div>
        `;
      inventoryList.appendChild(card);
    }
  }
}

function addItem() {
  const name = itemNameInput.value;
  const price = itemPriceInput.value;
  const quantity = itemQuantityInput.value;

  if (name && price && quantity) {
    const newItem = { name, price, quantity };
    inventory.push(newItem);
    loadInventory();
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";
  }
}

function deleteItem(index) {
  inventory.splice(index, 1);
  loadInventory();
}

function updateItem(index) {
  const newQuantity = prompt("Enter new quantity:", inventory[index].quantity);
  if (newQuantity !== null) {
    inventory[index].quantity = newQuantity;
    loadInventory();
  }
}

addItemBtn.addEventListener("click", addItem);
