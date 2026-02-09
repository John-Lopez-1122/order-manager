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
    ["ID7735", ["hdf13342", 20000]]
]

orders.forEach(item => {
    const orderID = item[0]
    const SKU = item[1][0]
    const qty = item[1][1]
    console.log(`${orderID} | ${SKU} | ${qty}`)
}
)

function processorder(order) {
    const sku = order[1][0]
    const qty = order[1][1]

    const product = inventory.find(item => item[0] == sku)

    if (product && qty <= product[3]) {
        product[3] -= qty
        console.log(`Order amount: ${product[2] * qty}`)
    } else {
        console.log(`Order Failed`)
    }
}

orders.forEach(order => processorder(order))



//forgot last step

const totalInvValue = inventory.reduce((sum, item) => {
    return sum+item[2] * item[3]}, 0)

const lowInvStock = inventory.filter(item => item[3] <= 100)

const invPriceList = inventory.map(item => {
    return `${item[0]} - $${item[2]}`
})

console.log(`$${totalInvValue}`)
console.log(lowInvStock)
console.log(`${invPriceList[0]} | ${invPriceList[1]} | ${invPriceList[2]} | ${invPriceList[3]}`)