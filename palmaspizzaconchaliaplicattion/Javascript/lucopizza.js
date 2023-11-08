// Luco Pizza



function cambiarcolorfamiliarlucopizza(){
  document.getElementById("familiarlucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarlucopizza").style.color = "#fff"
  document.getElementById("familiarlucopizza").style.fontSize = "180%"
  document.getElementById("medianalucopizza").style.background = "#fff"
  document.getElementById("medianalucopizza").style.color = "#ff7700"
  document.getElementById("medianalucopizza").style.fontSize = "150%"
  document.getElementById("input-lucopizza-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-lucopizza").hidden = false;

}

function cambiarcolormedianalucopizza(){
  document.getElementById("medianalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianalucopizza").style.color = "#fff"
  document.getElementById("medianalucopizza").style.fontSize = "180%"
  document.getElementById("familiarlucopizza").style.background = "#fff"
  document.getElementById("familiarlucopizza").style.color = "#ff7700"
  document.getElementById("familiarlucopizza").style.fontSize = "150%"
  document.getElementById("input-lucopizza-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-lucopizza").hidden = false;
}



function cambiarcolorsalsapizzalucopizza(){
  document.getElementById("salsapizzalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzalucopizza").style.color = "#fff"
  document.getElementById("salsapizzalucopizza").style.fontSize = "180%"
  document.getElementById("salsabbqlucopizza").style.background = "#fff"
  document.getElementById("salsabbqlucopizza").style.color = "#ff7700"
  document.getElementById("salsabbqlucopizza").style.fontSize = "150%"

}

function cambiarcolorsalsabbqlucopizza(){
  document.getElementById("salsabbqlucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqlucopizza").style.color = "#fff"
  document.getElementById("salsabbqlucopizza").style.fontSize = "180%"
  document.getElementById("salsapizzalucopizza").style.background = "#fff"
  document.getElementById("salsapizzalucopizza").style.color = "#ff7700"
  document.getElementById("salsapizzalucopizza").style.fontSize = "150%"
}









function cambiarcolormasatradicionallucopizza(){
  document.getElementById("masadelgadalucopizza").style.background = "#fff"
  document.getElementById("masadelgadalucopizza").style.color = "#ff7700"
  document.getElementById("masadelgadalucopizza").style.fontSize = "150%"
  document.getElementById("masatradicionallucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionallucopizza").style.color = "#fff"
  document.getElementById("masatradicionallucopizza").style.fontSize = "180%"
  document.getElementById("input-lucopizza-masa").value = 'MASA TRADICIONAL';
  document.getElementById("finalizarpedido-lucopizza").hidden = false;

}

function cambiarcolormasadelgadalucopizza(){
  document.getElementById("masatradicionallucopizza").style.background = "#fff"
  document.getElementById("masatradicionallucopizza").style.color = "#ff7700"
  document.getElementById("masatradicionallucopizza").style.fontSize = "150%"
  document.getElementById("masadelgadalucopizza").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadalucopizza").style.color = "#fff"
  document.getElementById("masadelgadalucopizza").style.fontSize = "180%"
  document.getElementById("input-lucopizza-masa").value = 'MASA DELGADA';
  document.getElementById("finalizarpedido-lucopizza").hidden = false;

}






function lucopizzabuttonoff() {
  document.getElementById("medianalucopizza").disabled = true;
  document.getElementById("medianalucopizza").style.background = "#fff"
  document.getElementById("medianalucopizza").style.color = "#b8b8b8"
  document.getElementById("medianalucopizza").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarlucopizza").disabled = true;
  document.getElementById("familiarlucopizza").style.background = "#fff"
  document.getElementById("familiarlucopizza").style.color = "#b8b8b8"
  document.getElementById("familiarlucopizza").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-lucopizza").disabled = true;
document.getElementById("borraryvolver-lucopizza").style.background = "#fff"
document.getElementById("borraryvolver-lucopizza").style.color = "#b8b8b8"
document.getElementById("borraryvolver-lucopizza").style.border = "4px solid #b8b8b8"
document.getElementById("spanlucopizza").style.color = "#b8b8b8"

}






function lucopizzamedianas() {
  document.getElementById("input-lucopizza-precio").value = '8990';
  document.getElementById("input-lucopizza-cantidad").value = '1';
  document.getElementById("input-lucopizza-tamaño").value = 'MEDIANA';
  document.getElementById("input-lucopizza-pizza").value = 'LUCO PIZZA';

  
// -italiana-
document.getElementById("1italianamedianas").hidden = false;
document.getElementById("1italianamedianasuno").hidden = true;

// -----------------------------------------------------------
// -hawaiana-
document.getElementById("1hawaianamedianas").hidden = true;
document.getElementById("1hawaianamedianasuno").hidden = false;

// -napolitana-
document.getElementById("1napolitanamedianas").hidden = true;
document.getElementById("1napolitanamedianasuno").hidden = false;

// -super-pepperoni-
document.getElementById("1superpepperonimedianas").hidden = true;
document.getElementById("1superpepperonimedianasuno").hidden = false;

// -vegetariana-
document.getElementById("1vegetarianamedianas").hidden = true;
document.getElementById("1vegetarianamedianasuno").hidden = false;

// -luco-pizza-
document.getElementById("1lucopizzamedianas").hidden = true;
document.getElementById("1lucopizzamedianasuno").hidden = false;

// -pollo-bbq-
document.getElementById("1pollobbqmedianas").hidden = true;
document.getElementById("1pollobbqmedianasuno").hidden = false;

// -chillian-
document.getElementById("1chillianmedianas").hidden = true;
document.getElementById("1chillianmedianasuno").hidden = false;
  
  }


function lucopizzamedianasuno() {
document.getElementById("input-lucopizza-precio").value = '6000';
document.getElementById("input-lucopizza-cantidad").value = '1';
document.getElementById("input-lucopizza-tamaño").value = 'MEDIANA';
document.getElementById("input-lucopizza-pizza").value = 'LUCO PIZZA';

// -italiana-
document.getElementById("1italianamedianas").hidden = true;
document.getElementById("1italianamedianasuno").hidden = false;

// -----------------------------------------------------------
// -hawaiana-
document.getElementById("1hawaianamedianas").hidden = false;
document.getElementById("1hawaianamedianasuno").hidden = true;

// -napolitana-
document.getElementById("1napolitanamedianas").hidden = false;
document.getElementById("1napolitanamedianasuno").hidden = true;

// -super-pepperoni-
document.getElementById("1superpepperonimedianas").hidden = false;
document.getElementById("1superpepperonimedianasuno").hidden = true;

// -vegetariana-
document.getElementById("1vegetarianamedianas").hidden = false;
document.getElementById("1vegetarianamedianasuno").hidden = true;

// -luco-pizza-
document.getElementById("1lucopizzamedianas").hidden = false;
document.getElementById("1lucopizzamedianasuno").hidden = true;

// -pollo-bbq-
document.getElementById("1pollobbqmedianas").hidden = false;
document.getElementById("1pollobbqmedianasuno").hidden = true;

// -chillian-
document.getElementById("1chillianmedianas").hidden = false;
document.getElementById("1chillianmedianasuno").hidden = true;

}

function lucopizzamedianasdos() {
document.getElementById("input-lucopizza-precio").value = '14990';
document.getElementById("input-lucopizza-cantidad").value = '2';


}

function lucopizzamedianastres() {
document.getElementById("input-lucopizza-precio").value = '23980';
document.getElementById("input-lucopizza-cantidad").value = '3';

}

function lucopizzamedianascuatro() {
document.getElementById("input-lucopizza-precio").value = '29980';
document.getElementById("input-lucopizza-cantidad").value = '4';

}


function lucopizzafamiliaresuno() {
  document.getElementById("input-lucopizza-precio").value = '7000';
  document.getElementById("input-lucopizza-cantidad").value = '1';
  document.getElementById("input-lucopizza-tamaño").value = 'FAMILIAR';
  document.getElementById("input-lucopizza-pizza").value = 'Luco Pizza';
  // -italiana-
document.getElementById("1italianafamiliares").hidden = false;
document.getElementById("1italianafamiliaresuno").hidden = true;

// -----------------------------------------------------------
// -hawaiana-
document.getElementById("1hawaianafamiliares").hidden = false;
document.getElementById("1hawaianafamiliaresuno").hidden = true;

// -napolitana-
document.getElementById("1napolitanafamiliares").hidden = false;
document.getElementById("1napolitanafamiliaresuno").hidden = true;

// -super-pepperoni-
document.getElementById("1superpepperonifamiliares").hidden = false;
document.getElementById("1superpepperonifamiliaresuno").hidden = true;

// -vegetariana-
document.getElementById("1vegetarianafamiliares").hidden = false;
document.getElementById("1vegetarianafamiliaresuno").hidden = true;

// -luco-pizza-
document.getElementById("1lucopizzafamiliares").hidden = false;
document.getElementById("1lucopizzafamiliaresuno").hidden = true;

// -pollo-bbq-
document.getElementById("1pollobbqfamiliares").hidden = false;
document.getElementById("1pollobbqfamiliaresuno").hidden = true;

// -chillian-
document.getElementById("1chillianfamiliares").hidden = false;
document.getElementById("1chillianfamiliaresuno").hidden = true;
  }



function lucopizzafamiliares() {
document.getElementById("input-lucopizza-precio").value = '10990';
document.getElementById("input-lucopizza-cantidad").value = '1';
document.getElementById("input-lucopizza-tamaño").value = 'FAMILIAR';
document.getElementById("input-lucopizza-pizza").value = 'Luco Pizza';
// -italiana-
document.getElementById("1italianafamiliares").hidden = true;
document.getElementById("1italianafamiliaresuno").hidden = false;
// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;

// -----------------------------------------------------------
// -hawaiana-
document.getElementById("1hawaianafamiliares").hidden = true;
document.getElementById("1hawaianafamiliaresuno").hidden = false;

// -napolitana-
document.getElementById("1napolitanafamiliares").hidden = true;
document.getElementById("1napolitanafamiliaresuno").hidden = false;

// -super-pepperoni-
document.getElementById("1superpepperonifamiliares").hidden = true;
document.getElementById("1superpepperonifamiliaresuno").hidden = false;

// -vegetariana-
document.getElementById("1vegetarianafamiliares").hidden = true;
document.getElementById("1vegetarianafamiliaresuno").hidden = false;

// -luco-pizza-
document.getElementById("1lucopizzafamiliares").hidden = true;
document.getElementById("1lucopizzafamiliaresuno").hidden = false;

// -pollo-bbq-
document.getElementById("1pollobbqfamiliares").hidden = true;
document.getElementById("1pollobbqfamiliaresuno").hidden = false;

// -chillian-
document.getElementById("1chillianfamiliares").hidden = true;
document.getElementById("1chillianfamiliaresuno").hidden = false;
// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;
  
}

function lucopizzafamiliaresdos() {
document.getElementById("input-lucopizza-precio").value = '17990';
document.getElementById("input-lucopizza-cantidad").value = '2';
}

function lucopizzafamiliarestres() {
document.getElementById("input-lucopizza-precio").value = '28990';
document.getElementById("input-lucopizza-cantidad").value = '3';
}

function lucopizzafamiliarescuatro() {
document.getElementById("input-lucopizza-precio").value = '35980';
document.getElementById("input-lucopizza-cantidad").value = '4';
}



function lucopizzapizza() {
  document.getElementById("input-lucopizza-pizza").value = 'LUCO PIZZAS';
  document.getElementById("volver-lucopizza-html").hidden = true; 
  }



  function borrarpedidolucopizza() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputlucopizzaprecio= parseFloat(document.getElementById("input-lucopizza-precio").value) || 0;
   
 document.getElementById("total").value = total - inputlucopizzaprecio;

    document.getElementById("input-lucopizza-pizza").value = '';
    document.getElementById("input-lucopizza-tamaño").value = '';
    document.getElementById("input-lucopizza-cantidad").value = '';
    document.getElementById("input-lucopizza-precio").value = '';
    document.getElementById("input-lucopizza-masa").value = '';
    document.getElementById("inputs-lucopizza").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-lucopizza").hidden = true; 
    document.getElementById("medianalucopizza").disabled = false;
    document.getElementById("familiarlucopizza").disabled = false;  
    document.getElementById("familiarlucopizza").style.background = "#fff"
    document.getElementById("familiarlucopizza").style.color = "#ff7700"
    document.getElementById("familiarlucopizza").style.fontSize = "150%"
    document.getElementById("familiarlucopizza").style.border = "4px solid #ff7700"
    document.getElementById("medianalucopizza").style.background = "#fff"
    document.getElementById("medianalucopizza").style.color = "#ff7700"
    document.getElementById("medianalucopizza").style.fontSize = "150%"
    document.getElementById("medianalucopizza").style.border = "4px solid #ff7700"
    document.getElementById("spanlucopizza").style.color = "#ff5500"
            // -lucopizza-
document.getElementById("1lucopizzafamiliares").hidden = false;
document.getElementById("1lucopizzafamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciolucopizza = parseFloat(document.getElementById("input-lucopizza-precio").value) || 0;

  document.getElementById("total").value = total - preciolucopizza;
}
catch (e) {}


  }
    










    function agregaralpedidolucopizzax() {
      document.getElementById("inputs-lucopizza").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-lucopizza").value;
      document.getElementById("input-lucopizza-instrucciones").value= nota;
      document.getElementById("volver-lucopizza-html").hidden = true; 



      

      document.getElementById("audio");
      audio.play();
      
      setTimeout(() => {
        alert("Puedes ver y completar tu pedido en el carrito de compras en la parte superior");
      }, "1000");


      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "2000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "2500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "3000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "3500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "4000");

      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "4500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "5000");


      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "5500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "6000");

    }





    




    function agregaralpedidolucopizza() {
      document.getElementById("inputs-lucopizza").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-lucopizza").value;
      document.getElementById("input-lucopizza-instrucciones").value= nota;
      document.getElementById("volver-lucopizza-html").hidden = true; 

        
      document.getElementById("audio");
      audio.play();
      
      setTimeout(() => {
        alert("Puedes ver y completar tu pedido en el carrito de compras en la parte superior");
      }, "1000");


      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "2000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "2500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "3000");
      
      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "3500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "4000");

      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "4500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "5000");


      setTimeout(() => {
        document.getElementById("total").style.color = "black"
        document.getElementById("total").style.background = "#ff7700"
      }, "5500");

      setTimeout(() => {
        document.getElementById("total").style.background = "#fff"
        document.getElementById("total").style.color = "#ff7700"
      }, "6000");

    }



      

    function volverlucopizza() {
      document.getElementById("volver-lucopizza-html").hidden = false; 
    }

    // FIN Luco Pizza 


    




























