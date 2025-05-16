/* TASK count array values - use reduce method
 * Two friends Anna and Brian, are deciding how to split the bill at a dinner.
 * Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion.
 * You must determine if his calculation is correct.
 * Function should print Bon Appetit if the bill is fairly split.
 * Otherwise, it should print the integer amount of money that Brian owes Anna.

 * bill: an array of integers representing the cost of each item ordered
 * k: an integer representing the zero-based index of the item Anna doesn't eat
 * b: the amount of money that Anna contributed to the bill
 */

function bill(sum, k, b) {
  let summary = [...sum];
  let sharedCosts = (summary.reduce((a, b) => a + b, 0) - summary[k]) / 2;

  if (sharedCosts === b) {
    console.log("Bon Appetit");
  } else console.log("Brian owes Anna " + b - sharedCosts);
}
