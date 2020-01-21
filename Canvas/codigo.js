var d=document.getElementById("dibujito");
var Lienzo = d.getContext("2d");
console.log(Lienzo);
Lienzo.beginPath();
Lienzo.strokeStyle="blue";
Lienzo.moveTo(250,50);
Lienzo.lineTo(0,300);
Lienzo.stroke();
Lienzo.closePath();