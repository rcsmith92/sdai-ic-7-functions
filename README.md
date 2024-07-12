# Eligibility for Free Shipping with JS

---

## Description

In this assignment, you will create a simple program to determine if a user is eligible for free shipping based on their total purchase amount and membership status. This exercise will help you practice writing and using JavaScript functions with arguments and parameters, and utilizing variables and conditionals within those functions.

**note**: Since we are just focusing on Javascript we're going to not use any HTML file or the browser. Instead we're going to use `node` to run our code. `node` is a runtime environment that allows us to run Javascript outside of the browser. `node` is something that will be further discussed in the extended program but for now we just need to know how to run the file: `node <fileName>` will run the file similarly to how we saw previously by running the code via the browser.

---

## Learning Outcomes

1. Define and use JavaScript functions.
2. Pass arguments to functions and use parameters.
3. Utilize variables within functions.
4. Apply conditionals to control the flow of the program.

---

## Codespaces Guidance 📄
Should you need guidance on how to fork, open, edit, and maintain your codespaces, please use the link below by right clicking and opening in a new tab.  

[GitHub Codespaces Guidance](https://gist.github.com/JohnWP8253/4fff80f43d07a04ee3f1514c0a1d354a)

---

## ToDo list ✅
**Attention**: When you complete a task, put an `x` in the middle of the brackets to mark it off your ToDo list.
Note: all work to be done in the `script.js` file.

[ ] Create a function named `isEligibleForFreeShipping` that accepts two parameters: `purchaseAmount` and `isMember`.
```
function isEligibleForFreeShipping(purchaseAmount, isMember) {
  
}
```
[ ] Inside the function, create a variable named `freeShipping`. Since we don't currently know whether the user will get free shipping or not we don't have to define it right now. Once we determine what the value will be we can reassign it. In that case we should use `let` instead of `const`.
```
function isEligibleForFreeShipping(purchaseAmount, isMember) {
  let freeShipping
}
```
[ ] Use conditionals to determine eligibility for free shipping:
- If the user is a member, set `freeShipping` to `true`.
- If the user is not a member and the purchase amount is $50 or more, set `freeShipping` to `true`.
- If the user is not a member and the purchase amount is less than $50, set `freeShipping` to `false`.
```
if (isMember) {
  freeShipping = true;
} else if (purchaseAmount >= 50) {
    freeShipping = true;
} else {
    freeShipping = false;
}
```
[ ] Output the result using `console.log`:
- If the user is eligible, print "You are eligible for free shipping."
- If the user is not eligible, print "You are not eligible for free shipping."
```
if (freeShipping) {
  console.log("You are eligible for free shipping.");
} else {
  console.log("You are not eligible for free shipping.");
}
```

[ ] Test your function with the provided test cases and add at least two more test cases of your own. Here are the provided test cases:
```
// Test cases
isEligibleForFreeShipping(30, true);  // You are eligible for free shipping.
isEligibleForFreeShipping(60, false); // You are eligible for free shipping.
isEligibleForFreeShipping(40, false); // You are not eligible for free shipping.
isEligibleForFreeShipping(10, true);  // You are eligible for free shipping.
```