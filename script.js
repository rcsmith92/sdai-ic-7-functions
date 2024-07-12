// Type node script.js in the codespaces console to run this file. 
// Make sure to save before running it. CTRL + ` will open the console if you don't see it.
function isEligibleForFreeShipping(purchaseAmount, isMember) {
    let freeShipping
    if (isMember) {
        freeShipping = true
    } else if (purchaseAmount >= 50) {
        freeShipping = true
    } else {
        freeShipping = false
    }

    if (freeShipping) {
        console.log("Congrats! You are eligible for free shipping!")
    } else {
        console.log("Sorry, you are not eligible for free shipping!")

    }
}

isEligibleForFreeShipping(49, false)