let result = document.getElementsByClassName("visAmount")[0]
let carbon = 0;
addCarbon();

function addCarbon(){
    carbon += 117.5;
    result.textContent = Math.trunc(carbon);
    setTimeout(addCarbon, 100);
}