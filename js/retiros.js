function retiros(){
    var total=parseInt(document.getElementById("totals").value);
    var cantidadT=parseInt(document.getElementById("retiro").value);
    document.getElementById("totals").value=(total-cantidadT);    
}