let drop = document.getElementById("myDropdown");

function myfunction() {
    if (drop.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }else{
        drop.className = "show"
    }
}

/////////
let drop2 = document.getElementById("myDropdown2");

function myfunction2() {
    if (drop2.classList.contains('show')) {
        myDropdown2.classList.remove('show');
    }else{
        drop2.className = "show"
    }
    
}

window.onclick = function(e) {
    if (!e.target.matches('.link1')) {   // the click is on .link the word  and ! العكس nice
        if (drop.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.link2')) {   // the click is on .link the word  and ! العكس nice
        if (drop2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
        }
    }
}
