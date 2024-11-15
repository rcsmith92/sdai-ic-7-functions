// Type node script.js in the codespaces console to run this file. Make sure to save before running it. CTRL + ` will open the console if you don't see it.
function isEligibleForFreeShipping(purchaseAmount, isMember) {
  //Is the customer eligible for free shipping?
    let freeShipping
  if (isMember === true) {
    freeShipping = true
  } else if (purchaseAmount >= 50 ) { // not a member & purchse >= 50
    freeShipping = true
  } else{ // not a member & purchase < 50 
    freeShipping = false 
  }

  if (freeShipping === true) {
    console.log("Congrats! you have free shipping")
  } else {
    console.log("You are not eligible for free shipping")
  }
}


// Test cases
isEligibleForFreeShipping(30, true);  // You are eligible for free shipping.
isEligibleForFreeShipping(60, false); // You are eligible for free shipping.
isEligibleForFreeShipping(40, false); // You are not eligible for free shipping.
isEligibleForFreeShipping(10, true);  // You are eligible for free shipping.