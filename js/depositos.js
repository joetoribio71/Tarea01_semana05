function depositos(){
    var total=parseInt(document.getElementById("totals").value);
    var cantidadT=parseInt(document.getElementById("deposito").value);
    document.getElementById("totals").value=(total+cantidadT);
}