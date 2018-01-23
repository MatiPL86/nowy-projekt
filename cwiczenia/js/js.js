function Przewijanie(){
    var logo = document.getElementById('logo');
    var pozycjaY = window.pageYOffset;
    if(pozycjaY > 80){
        logo.style.opacity = "0";
    }
    else{
        logo.style.opacity = "1";
    }
}

window.addEventListener("scroll",Przewijanie);