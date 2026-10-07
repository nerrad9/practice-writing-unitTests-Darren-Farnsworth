import * as cart from "../cart.js"

describe("add", function() {
   test("Should add entries to object when given a key and value", function() {
       expect(cart.addItem({}, "apple", 1)).toEqual({"apple" : 1})
   })
   //intentionally allowing these to fail
   test("Should add nothing if given a negative value", function() {
       expect(cart.addItem({}, "apple", -1)).toEqual({})
   })
   test("Should add nothing if given a zero value", function() {
       expect(cart.addItem({}, "apple", 0)).toEqual({});
   })
})

describe("remove", function(){
    test("Should decrement value at position", function(){
        expect(cart.removeItem({"banana": 2}, "banana", 1)).toEqual({"banana":1})
    })
    test("Should remove item if value equals total",function(){
        expect(cart.removeItem({"banana": 2}, "banana", 2)).toEqual({})
    })
    test("Should remove item if value exceeds total",function(){
        expect(cart.removeItem({"banana": 2}, "banana", 3)).toEqual({})
    })
})

describe("total", function(){
    test("Should return sum of all values in object", function(){
        expect(cart.getTotalItems({"coconut":3})).toBe(3)
    })
})