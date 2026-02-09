let inventory = [["prt22332", "Laptop", 2059.99, 55]] //array created

console.log(`${inventory[0][0]} | ${inventory[0][1]} | $${inventory[0][2]} | Stock:${inventory[0][3]}`)

inventory.push(["ret55343", "Keyboard", 54.99, 102]) //push, pop, update
inventory.pop()
console.log('Removed Keyboard entry')
inventory[0][2] = 1549.99
inventory[0][3] = 80
console.log(inventory)


