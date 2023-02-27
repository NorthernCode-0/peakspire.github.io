function copyTXT(){
    navigator.clipboard.writeText('loadstring(game:HttpGet("https://raw.githubusercontent.com/NorthernCode-0/doomspire/main/Doomspire.lua"))()');
    var notif = document.getElementById('notif');
    notif.style.opacity = 1;
    notif.style.top = '25px';
    setTimeout(function(){notif.style.opacity = 0; notif.style.top = '0px';}, 1000);
}

window.addEventListener('load', function() {
    var element = document.querySelector('.fadein');
    element.classList.add('fade-in');
});