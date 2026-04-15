let age = 35;
let fare ;
let isStudent = true;

if(age < 10){
    fare = "free";
}
else if(isStudent){
    fare = 400 * 0.5;
}
else if(age >= 60){
    fare = 400 * 0.85;
}
else{
    fare = 400;
}
console.log("Ticket fare is:"+fare);