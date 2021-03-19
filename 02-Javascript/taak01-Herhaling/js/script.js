let strNaam;
strNaam = prompt ("Hoe heet je?");

let boolNaamKlopt;
boolNaamKlopt = confirm("Heet je " + strNaam + "?");

if(boolNaamKlopt == true){ 
    alert("Welkom "+strNaam +"!");
}
else { 
    strNaam = prompt("Nog een keer, hoe heet je?");
    boolNaamKlopt = confirm("Heet je "+strNaam+"?");
    if(boolNaamKlopt == true){ 
    alert("Welkom "+strNaam +"!");
    }
    else{
    alert("Ok, alsnog welkom !");   
    }
}

