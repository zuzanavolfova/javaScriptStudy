/* TASK print the values of the array
 */

const shoppingCartArray = [
  { name: "banana", qty: 2 },
  { name: "apple", qty: 5 },
  { name: "cherry", qty: 0 },
];

for (let i = 0; i < shoppingCartArray.length; i++) {
  console.log(shoppingCartArray[i].name, shoppingCartArray[i].qty);
}

const shoppingCartArray2 = [
  { key: "banana", val: 2 },
  { apple: "banana", val: 5 },
  { cherry: "banana", val: 0 },
];

for (let i = 0; i < shoppingCartArray.length; i++) {
  console.log(
    shoppingCartArray2[i][Object.keys(shoppingCartArray2[i])[0]],
    shoppingCartArray2[i][Object.keys(shoppingCartArray2[i])[1]]
  );
}
