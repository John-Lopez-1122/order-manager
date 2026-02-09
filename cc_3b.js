let inventory = [       //array created
    ["prt22332", "Laptop", 2059.99, 55], 
    ["erd24123", "Mouse", 49.99, 126], 
    ["hdf13342", "Charger", 24.99, 58], 
    ["gfe67452", "Monitor", 674.99, 74]
] 

inventory.forEach(item => {
    const sku = item[0]
    const name = item[1]
    const price = item[2]
    const stock = item[3]

    console.log(`${sku} | ${name} | $${price} | Stock:${stock}`)
}
)


inventory.push(["ret55343", "Keyboard", 54.99, 102]) //push, pop, update
inventory.pop()
console.log("Keyboard Entry Removed")
inventory[0][2] = 1549.99
inventory[2][3] = 80
console.log(inventory)

let orders = [
    ["ID2235", ["prt22332", 1]],
    ["ID7735", ["hdf13342", 4]]
]

orders.forEach(item => {
    const orderID = item[0]
    const SKU = item[1][0]
    const qty = item[1][1]
    console.log(`${orderID} | ${SKU} | ${qty}`)
}
)

//function processorder(order) {
//    if (order.SKU == inventory.sku) && (order.qty < inventory.stock)
//

//}