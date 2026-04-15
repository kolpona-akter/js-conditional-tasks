let weight = 39;  //kg
let height = 1.524; //meter

 let BMI = weight / (height * height);

 console.log("Your BMI is:"+ BMI.toFixed(3));
 //template string
  //console.log(`Your BMI is: ${BMI.toFixed(2)}`);

if(BMI < 18.5){
    console.log('you are underweight');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('you are normal');
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('you are overweight')
}
else{
    console.log('you are obese')
}