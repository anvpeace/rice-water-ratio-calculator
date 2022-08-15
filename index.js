// the app will take the value of what the client inputs and multiply it by 2 if the value is a whole number

// 

let water = 0;
let rice = 0;
// let waterCalc= false
// let riceCalc = false
let isRice= true;
let isWater = true;

// A FUNCTION IS NEEDED THAT TAKES IN THE VALUE OF THE INGREDIENT SELECTED AND THE VALUE OF AMOUNT OF SELECTED INGREDIENT AND MULTIPLIES BUT PROPER RATIO


// GRAB THE NECESSARY ELEMENTS TO GET THEIR INPUT 
const conversionBtn= document.getElementById("conversion");
const ingredientAmount= document.getElementById("ingredient-amount");
let ingredient = document.getElementById("ingredient");

const calculation = document.getElementById("return-conversion")






conversionBtn.addEventListener("click", function(){
    let value = ingredient.options[ingredient.selectedIndex].value;
    
    if(value === "rice"){
       
                let selectedAmt= ingredientAmount.value
                let waterSum = selectedAmt * 2
                water = waterSum
                console.log(selectedAmt)
                console.log(waterSum)
                
               calculation.innerHTML= (`<h1 style= "color: #F4DAFC;"> ${water} cup(s) of water are needed for your ${selectedAmt} cup(s) of rice!</h1>`) 

            }else if(value === "water"){
                let selectedAmt= ingredientAmount.value
                let riceSum = selectedAmt / 2
                rice += riceSum
                calculation.innerHTML= (`<h1 style= "color: #F4DAFC;"> ${rice} cup(s) of rice are needed for your ${selectedAmt} cup(s) of water!</h1>`)


            }
    clearQuantities()
})







//on click of convert button waterEl gets value client put in 
//that value will get added to the water variable
// const waterAmount= document.getElementById("ingredient-amount")
// const waterConvert= document.getElementById("water-convert")



// const calculation = document.getElementById("return-conversion")
// const riceAmount = document.getElementById("rice-amount")
// const riceConvert = document.getElementById("rice-convert")


// once added to the water variable a function will be preformed to multiply the value by 2 


// waterConvert.addEventListener("click", function (){
//     water= waterAmount.value
//     rice = water / 2   
//     waterCalc= true
//     if(waterCalc === true){
//         calculation.innerHTML= (`<h1 style= "color: #F4DAFC;"> ${rice} cup(s) of rice are needed for your ${water} cup(s) of water!</h1>`)
//    }else{
//         waterCalc= false
//         clearQuantities()

//     }
//         //input a function that sets quantities to zero
//         //   clearQuantities()


// })



// riceConvert.addEventListener("click", function(){
//     rice= riceAmount.value
//     water = rice * 2
//     riceCalc = true
//     console.log(`water needed: ${water} cup(s)`)
   
//     if(riceCalc === true){
//         calculation.innerHTML= (`<h1 style= "color: #F4DAFC;"> ${water} cup(s) of water are needed for your ${rice} cup(s) of rice!</h1>`)
     
//    }else{
//         riceCalc= false
//         clearQuantities()
//     }
// })



function clearQuantities(){
    water = 0
    rice = 0 
    waterCalc = false
    riceCalc = false

}





