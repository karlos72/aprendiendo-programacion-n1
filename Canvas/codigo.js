var d=document.getElementById("dibujito");
var Lienzo = d.getContext("2d");
var contador =0;
var lineas =50;
var contadorx,contadory=0;


while(contador< lineas)
{
    contadory=10*contador;
    contadorx=10*(contador+1);
    dibujarLinea("blue",0,contadory,contadorx,500);
    
    console.log("linea"+contador);
    contador = contador+1;
}

var contadorxi=0;//aumenta
var contadoryf=500;//dismuye
contador=0;

while(contador<lineas)
{
    contadorxi=contadorxi+10;
    contadoryf=contadoryf-10;
    dibujarLinea("Green",contadorxi,500,500,contadoryf)
    contador=contador+1;

}

var contadorxi=0;//aumenta
var contadoryf=500;//dismuye
contador=0;

while(contador<lineas)
{
    contadorxi=contadorxi+10;
    contadoryf=contadoryf-10;
    dibujarLinea("Green",contadorxi,500,500,contadoryf)
    contador=contador+1;

}


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
    {
        Lienzo.beginPath();
    Lienzo.strokeStyle=color;
    Lienzo.moveTo(xinicial,yinicial);
    Lienzo.lineTo(xfinal,yfinal);
    Lienzo.stroke();
    Lienzo.closePath();

    }