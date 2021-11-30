//grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

window.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.querySelector('#dropBtn');
    const dropdown = document.querySelector('#dropdown')
    dropBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
        dropdown.classList.toggle('flex');
    })
    
    const dropBtnM = document.querySelector('#dropBtnM');
    const dropdownM = document.querySelector('#dropdownM')
    dropBtnM.addEventListener('click', () => {
        dropdownM.classList.toggle('hidden');
        dropdownM.classList.toggle('flex');
    })
    
})

window.onclick = function(e) {
    if (!e.target.matches('.dropBtn')) {
        var myDropdown = document.getElementById("dropdown");
        if (myDropdown.classList.contains('flex')) {
            myDropdown.classList.remove('flex');
            myDropdown.classList.add('hidden');
        }
    }
    if (!e.target.matches('.dropBtnM')) {
        var myDropdown = document.getElementById("dropdownM");
        if (myDropdown.classList.contains('flex')) {
            myDropdown.classList.remove('flex');
            myDropdown.classList.add('hidden');
        }
    }
}