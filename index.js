// the app will take the value of what the client inputs and multiply it by 2 if the value is a whole number

// 

let water = 0
let rice = 0 
//on click of convert button waterEl gets value client put in 
//that value will get added to the water variable
const waterAmount= document.getElementById("water-amount")
const waterConvert= document.getElementById("water-convert") 

// once added to the water variable a function will be preformed to multiply the value by 2 
function clearQuantities(){
    water = 0
    rice = 0 
}

waterConvert.addEventListener("click", function (){

    let waterConversion = water + waterAmount.value
    rice += waterConversion / 2
    console.log(`rice needed: ${rice} cup(s)`)
    clearQuantities()
//    input a function that sets quantities to zero
})

const riceAmount = document.getElementById("rice-amount")
const riceConvert = document.getElementById("rice-convert")

riceConvert.addEventListener("click", function(){
    let riceConversion = rice + riceAmount.value
    water = riceConversion * 2
    console.log(`water needed: ${water} cup(s)`)
    clearQuantities()

})






