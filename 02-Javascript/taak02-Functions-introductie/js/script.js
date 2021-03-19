function toonAlertBox(){
    alert("Dit is een alert box");
}
toonAlertBox();

function toonPromptBox(){
    prompt("Is dit een prompt box?");
}
toonPromptBox();

function toonConfirmBox(){
    result=confirm("Is dit een confirm-box");
    
    if (result==true) {
       alert("Ok");
    } 
    else {
      alert ("Dan niet");  
    }
    
}
toonConfirmBox();