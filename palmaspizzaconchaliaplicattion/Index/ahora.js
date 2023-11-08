function borrarpedidoitaliana() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputitalianaprecio= parseFloat(document.getElementById("input-italiana-precio").value) || 0;
   
 document.getElementById("total").value = total - inputitalianaprecio;

    document.getElementById("input-italiana-pizza").value = '';
    document.getElementById("input-italiana-tamaño").value = '';
    document.getElementById("input-italiana-cantidad").value = '';
    document.getElementById("input-italiana-precio").value = '';
    document.getElementById("input-italiana-masa").value = '';
    document.getElementById("inputs-italiana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-italiana").hidden = true; 
    document.getElementById("medianaitaliana").disabled = false;
    document.getElementById("familiaritaliana").disabled = false;  
    document.getElementById("familiaritaliana").style.background = "#fff"
    document.getElementById("familiaritaliana").style.color = "#ff7700"
    document.getElementById("familiaritaliana").style.fontSize = "150%"
    document.getElementById("familiaritaliana").style.border = "4px solid #ff7700"
    document.getElementById("medianaitaliana").style.background = "#fff"
    document.getElementById("medianaitaliana").style.color = "#ff7700"
    document.getElementById("medianaitaliana").style.fontSize = "150%"
    document.getElementById("medianaitaliana").style.border = "4px solid #ff7700"
            // -italiana-
document.getElementById("1italianafamiliares").hidden = false;
document.getElementById("1italianafamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  precioitaliana = parseFloat(document.getElementById("input-italiana-precio").value) || 0;

  document.getElementById("total").value = total - precioitaliana;
}
catch (e) {}


  }
    