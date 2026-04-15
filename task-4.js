let yourScore = 85;
let frientScore = 75;

if(yourScore > 80){
    if(frientScore > 80){
        console.log('Go for a lunch')
    }
    else if(frientScore <80 && frientScore >= 60){
        console.log('Good luck next time')
    }
    else if(frientScore < 60 && frientScore >= 40){
        console.log('Keep your friends message unseen')
    }
    else{
        console.log('Block your friend')
    }
}
else{
    console.log('Go home, sleep and act sad')
}