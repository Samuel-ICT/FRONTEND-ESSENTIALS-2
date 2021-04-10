topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];



function moveup(nummer){
 bewaren = topFilms[nummer -1];
 verwijderen = topFilms.splice(nummer -1, 1);
 toevoegen = topFilms.splice(nummer -2, 0, bewaren);
 console.log(topFilms);
 beweegButton();
}

function movedown(nummer){
 bewaren = topFilms[nummer -1];
 verwijderen = topFilms.splice(nummer-1,1); 
 toevoegen = topFilms.splice(nummer,0,bewaren);
 beweegButton();
}
function resetList(){
    document.querySelector(".film1-naam").innerHTML = "The Godfather";
    document.querySelector(".film2-naam").innerHTML = "The Shawshank Redemption";
    document.querySelector(".film3-naam").innerHTML = "Schindler's List";
    document.querySelector(".film4-naam").innerHTML = "Raging Bull";
    document.querySelector(".film5-naam").innerHTML = "Casablanca";
}
function beweegButton(){
    document.querySelector(".film1-naam").innerHTML = topFilms[0];
    document.querySelector(".film2-naam").innerHTML = topFilms[1];
    document.querySelector(".film3-naam").innerHTML = topFilms[2];
    document.querySelector(".film4-naam").innerHTML=  topFilms[3];
    document.querySelector(".film5-naam").innerHTML = topFilms[4];  
}