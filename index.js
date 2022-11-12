//reference form inputs

let btnUSDtoCAD = document.getElementById("btnUStoCA");
let btnCADtoUSD = document.getElementById("btnCAtoUS");

let btnClear = document.getElementById("btnReset");

let textboxUSD = document.getElementById("USDvalue");
let textboxCAD = document.getElementById("CADvalue");

let amountUSD, amountCAD;

function exchangeUSDtoCAD(amount1){
    amountCAD = amount1 * 1.26;
    textboxCAD.value = amountCAD.toFixed(3);

}

function exchangeCADtoUSD(amount2){
    amountUSD = amount2 * 0.75;
    textboxUSD.value = amountUSD.toFixed(3);
}

btnUSDtoCAD.onclick = function() {exchangeUSDtoCAD(textboxUSD.value);}
btnCADtoUSD.onclick = function() {exchangeCADtoUSD(textboxCAD.value);}

