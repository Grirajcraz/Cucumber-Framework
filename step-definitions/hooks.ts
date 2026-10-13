import { Before, After } from "@cucumber/cucumber";

Before (async function () {
   console.log("before") 
})

After (async function () {
    console.log('after')
    
})