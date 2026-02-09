let inventory = [       //array created
    ["prt22332", "Laptop", 2059.99, 55], 
    ["erd24123", "Mouse", 49.99, 126], 
    ["hdf13342", "Charger", 24.99, 58], 
    ["gfe67452", "Monitor", 674.99, 74]
] 

console.log(`${inventory[0][0]} | ${inventory[0][1]} | $${inventory[0][2]} | Stock:${inventory[0][3]}`)
console.log(`${inventory[1][0]} | ${inventory[1][1]} | $${inventory[1][2]} | Stock:${inventory[1][3]}`)
console.log(`${inventory[2][0]} | ${inventory[2][1]} | $${inventory[2][2]} | Stock:${inventory[2][3]}`)
console.log(`${inventory[3][0]} | ${inventory[3][1]} | $${inventory[3][2]} | Stock:${inventory[3][3]}`)

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


