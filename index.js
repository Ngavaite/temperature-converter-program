const textbox = document.getElementById('textbox');
const toFah = document.getElementById('toFah');
const toCel = document.getElementById('toCel');
const result = document.getElementById('result');
let Temp;

function convert(){

    if(toCel.checked){
        Temp = Number(textbox.value);
        Temp = (Temp-32) * (5/9);
        result.textContent = Temp +  "C"
    }
    else if(toFah.checked){
        Temp = Number(textbox.value);
        Temp = Temp * (9/5) + 32;
        result.textContent = Temp +  "F"
    }
    else{
        result.textContent = 'Select a unit';
    }
}