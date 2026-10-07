function addItem(cart, item, quantity){
    if (quantity <= 0){
        console.log(`Invalid quantity: ${quantity}`)
        return cart
    }
    if(Object.keys(cart).includes(item)){
        cart[item] += quantity
    }else{
        cart[item] = quantity
    }
    console.log(`${quantity} ${item}${quantity != 1 ? "s":""} added to cart`)
    return cart
}
function removeItem(cart, item, quantity){
    if (!Object.keys(cart).includes(item)){
        console.log("Item not found in cart")
        return cart
    }
    if (cart[item] <= quantity){
        delete cart[item]
        console.log(`All ${item}s removed from cart`)
        return cart
    }
    cart[item] -= quantity
    console.log(`${quantity} ${item}${quantity != 1 ? "s":""} removed from cart`)
    return cart
}
function getTotalItems(cart){
    // I staunchly refuse to use reduce out of principle
    let total = 0
    for (let amount of Object.values(cart)){
        total += Number(amount)
    }
    return total
}

export {addItem, removeItem, getTotalItems}