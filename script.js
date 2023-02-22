const btn = document.getElementById("CopyButton");

function copyTXT(){
    navigator.clipboard.writeText('loadstring(game:HttpGet("https://raw.githubusercontent.com/NorthernCode-0/doomspire/main/Doomspire.lua"))()');
    alert("Copied Script To Clipboard"); 
}

window.addEventListener('load', function() {
    var element = document.querySelector('.fadein');
    element.classList.add('fade-in');
});