var huidigeKleur = "white";
var score = 0; 

let getal1;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();

let getal2;

function makeRandomNumber2(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber2(){
    let randomGetal = makeRandomNumber2()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

getal2 = showRandomNumber2();

function gameScore(){
     let antwoordScore = score ;
     antwoordScore = (score * 1) + 1;
    return antwoordScore;

}
score = gameScore();

function gameScore2(){
    let antwoordScore = score ;
    antwoordScore = (score * 1) - 1;
   return antwoordScore;

}
score = gameScore2();

function geefAntwoord(Antwoord){
    getal1 = document.querySelector(".getal1").innerHTML;
    getal2 = document.querySelector(".getal2").innerHTML;
    score = document.querySelector(".score").innerHTML;
    if(getal1 > getal2&&Antwoord=='hoger'){
        score =  gameScore(); 
        document.querySelector(".score").innerHTML= score;
        document.querySelector("body").style.backgroundColor = "Green" ;
        getal1 = document.querySelector(".getal1").innerHTML = showRandomNumber1();
        getal2 = document.querySelector(".getal2").innerHTML = showRandomNumber2();
    } else if(getal1<getal2&&Antwoord=='hoger'){
        score = gameScore2() ; 
        document.querySelector(".score").innerHTML= score;
        document.querySelector("body").style.backgroundColor = "Red" ;
        getal1 = document.querySelector(".getal1").innerHTML = showRandomNumber1();
        getal2 = document.querySelector(".getal2").innerHTML = showRandomNumber2(); 
    }
    if(getal1<getal2&&Antwoord=='lager'){
        score = gameScore() ; 
        document.querySelector(".score").innerHTML= score;
        document.querySelector("body").style.backgroundColor = "Green" ;
        getal1 = document.querySelector(".getal1").innerHTML = showRandomNumber1();
        getal2 = document.querySelector(".getal2").innerHTML = showRandomNumber2(); 
    }
    else if(getal1>getal2&&Antwoord == 'lager'){
        score = gameScore2() ; 
        document.querySelector(".score").innerHTML= score;
        document.querySelector("body").style.backgroundColor = "Red" ;
        getal1 = document.querySelector(".getal1").innerHTML = showRandomNumber1();
        getal2 = document.querySelector(".getal2").innerHTML = showRandomNumber2(); 
    }
    
}







