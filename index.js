const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
let lengthConvert = document.getElementById("length-convert")
let volumeConvert = document.getElementById("volume-convert")
let massConvert = document.getElementById("mass-convert")

convertBtn.addEventListener("click", function(){
conversion() 
})


function conversion(){
    let convertedFeet = input.value*3.281
    let convertedMeters = input.value / 3.281
    let convertedLiters = input.value * 0.264
    let convertedGallons = input.value / 0.264
    let convertedPounds = input.value * 2.204
    let convertedKilograms = input.value / 2.204
    lengthConvert.textContent = `${input.value} meters = ${convertedFeet.toFixed(3)} feet | ${input.value} feet = ${convertedMeters.toFixed(3)} meters`
    volumeConvert.textContent = `${input.value} liters = ${convertedLiters.toFixed(3)} gallons | ${input.value} gallons = ${convertedGallons.toFixed(3)} liters`
    lengthConvert.textContent = `${input.value} meters = ${convertedFeet.toFixed(3)} feet | ${input.value} feet = ${convertedMeters.toFixed(3)} meters`
    massConvert.textContent = `${input.value} kilos = ${convertedPounds.toFixed(3)} pounds | ${input.value} pounds = ${convertedKilograms.toFixed(3)} kilos`
}

