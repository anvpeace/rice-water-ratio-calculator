// the app will take the value of what the client inputs and multiply it by 2 if the value is a whole number

// 

let water = 0
let rice = 0 
let waterCalc= false
let riceCalc = false
//on click of convert button waterEl gets value client put in 
//that value will get added to the water variable
const waterAmount= document.getElementById("water-amount")
const waterConvert= document.getElementById("water-convert")
const calculation = document.getElementById("return-conversion")
const riceAmount = document.getElementById("rice-amount")
const riceConvert = document.getElementById("rice-convert")


// once added to the water variable a function will be preformed to multiply the value by 2 


waterConvert.addEventListener("click", function (){
    water= waterAmount.value
    rice = water / 2   
    waterCalc= true
    if(waterCalc === true){
        calculation.innerHTML= (`<h1 style= "color: #F4DAFC;"> ${rice} cup(s) of rice are needed for your ${water} cup(s) of water!</h1>`)
   }else{
        waterCalc= false
        clearQuantities()

    }
        //input a function that sets quantities to zero
        //   clearQuantities()


})



riceConvert.addEventListener("click", function(){
    rice= riceAmount.value
    water = rice * 2
    riceCalc = true
    console.log(`water needed: ${water} cup(s)`)
   
    if(riceCalc === true){
        calculation.innerHTML= (`<h1 style= "color: #F4DAFC;"> ${water} cup(s) of water are needed for your ${rice} cup(s) of rice!</h1>`)
     
   }else{
        riceCalc= false
        clearQuantities()
    }
        //   clearQuantities()
})



function clearQuantities(){
    water = 0
    rice = 0 
    waterCalc = false
    riceCalc = false

}

// if(waterCalc === true){
//      calculation.innerHTML = (`<h1> ${rice} cup(s) of rice are needed for your ${water} cup(s) of water!</h1>`)
//     // clearQuantities()
// }else if(riceCalc === true){
//     calculation.innerHTML = (`<h1> ${water} cup(s) of rice are needed for your ${rice} cup(s) of water!</h1>`)
//     // clearQuantities()
// }



