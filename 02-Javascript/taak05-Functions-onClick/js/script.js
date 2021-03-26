var huidigeKleur = "white";

function toonAlert(){
    alert("Je hebt op de knop gedrukt!");
}

function maakGroen(){
    document.querySelector("body").style.backgroundColor = "Green";
}

//TODO: maak 2 functies genaamd maakBlauw en maakRood
function maakBlauw(){
    document.querySelector("body").style.backgroundColor = "Blue";
}

function maakRood(){
    document.querySelector("body").style.backgroundColor = "Red";
}

kleur1 = "Green"; 
kleur2 = "Blue";
kleur3 = "Red";
function veranderKleur(kleur1, kleur2,kleur3){
    document.querySelector("body").style.backgroundColor = kleur1, kleur2, kleur3;
    //TODO: verander de achtergrond kleur op basis van de meegegeven waarde in de kleur parameter
    
    
}
