function degFarhenite(degC) 
{
    if (degC >= 0 && degC <= 100) {
        degF = (degC * 9 / 5) + 32;
        console.log("Temp In Farheenite: " + degF)
    } 
    else 
    {
        console.log("Temp Not In Range 0-100 degree Celsius")
    }
}
function degCelsius(degF) 
{
    if (degF >= 32 && degF <= 212) 
    {
        degC = (degF - 32) * 5 / 9;
        console.log("Temp In Celcius: " + degC)
    } 
    else 
    {
        console.log("Temp Not In Range 32-212 degree Farhenite")
    }
}
console.log("1. for Celsius to Farhenite 2. for Farhenite to Celsius")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",num => {     
    console.log(`"the number is:"  ${num}`)             
    number = parseInt(num) 
convTemp(number)
function convTemp(number) 
{
    switch (number) 
    {
        case 1:
              readline.question("enter the number : ",num => {      
                console.log(`"the number is:"  ${num}`)             
                degC = parseInt(num) 
            degFarhenite(degC)
              });
              break;
        case 2:
              readline.question("enter the number : ",num => {      
                console.log(`"the number is:"  ${num}`)             
                degF = parseInt(num) 
            degCelsius(degF)
            
              });
              break;
        default:
            console.log("Error")
    }
}
});