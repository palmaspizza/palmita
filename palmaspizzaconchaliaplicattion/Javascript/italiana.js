// ITALIANA


function cambiarcolorfamiliaritaliana(){
  document.getElementById("familiaritaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiaritaliana").style.color = "#fff"
  document.getElementById("familiaritaliana").style.fontSize = "180%"
  document.getElementById("medianaitaliana").style.background = "#fff"
  document.getElementById("medianaitaliana").style.color = "#ff7700"
  document.getElementById("medianaitaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-italiana").hidden = false;
  

}

function cambiarcolormedianaitaliana(){
  document.getElementById("medianaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianaitaliana").style.color = "#fff"
  document.getElementById("medianaitaliana").style.fontSize = "180%"
  document.getElementById("familiaritaliana").style.background = "#fff"
  document.getElementById("familiaritaliana").style.color = "#ff7700"
  document.getElementById("familiaritaliana").style.fontSize = "150%"
  document.getElementById("input-italiana-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-italiana").hidden = false;
}



function cambiarcolorsalsapizzaitaliana(){
  document.getElementById("salsapizzaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzaitaliana").style.color = "#fff"
  document.getElementById("salsapizzaitaliana").style.fontSize = "180%"
  document.getElementById("salsabbqitaliana").style.background = "#fff"
  document.getElementById("salsabbqitaliana").style.color = "#ff7700"
  document.getElementById("salsabbqitaliana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqitaliana(){
  document.getElementById("salsabbqitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqitaliana").style.color = "#fff"
  document.getElementById("salsabbqitaliana").style.fontSize = "180%"
  document.getElementById("salsapizzaitaliana").style.background = "#fff"
  document.getElementById("salsapizzaitaliana").style.color = "#ff7700"
  document.getElementById("salsapizzaitaliana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalitaliana(){
  document.getElementById("masadelgadaitaliana").style.background = "#fff"
  document.getElementById("masadelgadaitaliana").style.color = "#ff7700"
  document.getElementById("masadelgadaitaliana").style.fontSize = "150%"
  document.getElementById("masatradicionalitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalitaliana").style.color = "#fff"
  document.getElementById("masatradicionalitaliana").style.fontSize = "180%"
  document.getElementById("input-italiana-masa").value = 'MASA TRADICIONAL';
  document.getElementById("finalizarpedido-italiana").hidden = false;

}

function cambiarcolormasadelgadaitaliana(){
  document.getElementById("masatradicionalitaliana").style.background = "#fff"
  document.getElementById("masatradicionalitaliana").style.color = "#ff7700"
  document.getElementById("masatradicionalitaliana").style.fontSize = "150%"
  document.getElementById("masadelgadaitaliana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadaitaliana").style.color = "#fff"
  document.getElementById("masadelgadaitaliana").style.fontSize = "180%"
  document.getElementById("input-italiana-masa").value = 'MASA DELGADA';
  document.getElementById("finalizarpedido-italiana").hidden = false;

}






// 
function italianabuttonoff() {
  document.getElementById("medianaitaliana").disabled = true;
  document.getElementById("medianaitaliana").style.background = "#fff"
  document.getElementById("medianaitaliana").style.color = "#b8b8b8"
  document.getElementById("medianaitaliana").style.border = "4px solid #b8b8b8"
  document.getElementById("familiaritaliana").disabled = true;
  document.getElementById("familiaritaliana").style.background = "#fff"
  document.getElementById("familiaritaliana").style.color = "#b8b8b8"
  document.getElementById("familiaritaliana").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-italiana").disabled = true;
  document.getElementById("borraryvolver-italiana").style.background = "#fff"
  document.getElementById("borraryvolver-italiana").style.color = "#b8b8b8"
  document.getElementById("borraryvolver-italiana").style.border = "4px solid #b8b8b8"
  document.getElementById("spanitaliana").style.color = "#b8b8b8"



}



function italianamedianasuno() {
  document.getElementById("input-italiana-precio").value = '6000';
  document.getElementById("input-italiana-cantidad").value = '1';
  document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
  document.getElementById("input-italiana-pizza").value = 'ITALIANA';
  
// -italiana-
document.getElementById("1italianamedianas").hidden = false;
document.getElementById("1italianamedianasuno").hidden = true;

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






function italianamedianas() {
document.getElementById("input-italiana-precio").value = '8990';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';

// -italiana-
document.getElementById("1italianamedianas").hidden = true;
document.getElementById("1italianamedianasuno").hidden = false;

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

function italianamedianasdos() {
document.getElementById("input-italiana-precio").value = '14990';
document.getElementById("input-italiana-cantidad").value = '2';


}

function italianamedianastres() {
document.getElementById("input-italiana-precio").value = '23980';
document.getElementById("input-italiana-cantidad").value = '3';

}

function italianamedianascuatro() {
document.getElementById("input-italiana-precio").value = '29980';
document.getElementById("input-italiana-cantidad").value = '4';

}


function italianafamiliaresuno() {
  document.getElementById("input-italiana-precio").value = '7000';
  document.getElementById("input-italiana-cantidad").value = '1';
  document.getElementById("input-italiana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-italiana-pizza").value = 'ITALIANA';

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



function italianafamiliares() {
document.getElementById("input-italiana-precio").value = '10990';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'FAMILIAR';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';

// -italiana-
document.getElementById("1italianafamiliares").hidden = true;
document.getElementById("1italianafamiliaresuno").hidden = false;

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


}

function italianafamiliaresdos() {
document.getElementById("input-italiana-precio").value = '17990';
document.getElementById("input-italiana-cantidad").value = '2';
}

function italianafamiliarestres() {
document.getElementById("input-italiana-precio").value = '28990';
document.getElementById("input-italiana-cantidad").value = '3';
}

function italianafamiliarescuatro() {
document.getElementById("input-italiana-precio").value = '35980';
document.getElementById("input-italiana-cantidad").value = '4';
}



function italianapizza() {
  document.getElementById("input-italiana-pizza").value = 'ITALIANAS';
  document.getElementById("volver-italiana-html").hidden = true; 
  }



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
    document.getElementById("spanitaliana").style.color = "#ff5500"
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
    










    function agregaralpedidoitalianax() {
      document.getElementById("inputs-italiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-italiana").value;
      document.getElementById("input-italiana-instrucciones").value= nota;
      document.getElementById("volver-italiana-html").hidden = true; 




     





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





    
function italianamedianas() {
  document.getElementById("input-italiana-precio").value = '8990';
  document.getElementById("input-italiana-cantidad").value = '1';
  document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
  document.getElementById("input-italiana-pizza").value = 'ITALIANA';

  
// -italiana-
document.getElementById("1italianamedianas").hidden = true;
document.getElementById("1italianamedianasuno").hidden = false;

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

// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;
  
  }


function italianamedianasuno() {
document.getElementById("input-italiana-precio").value = '6000';
document.getElementById("input-italiana-cantidad").value = '1';
document.getElementById("input-italiana-tamaño").value = 'MEDIANA';
document.getElementById("input-italiana-pizza").value = 'ITALIANA';

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

// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;

}



    




    function agregaralpedidoitaliana() {
      document.getElementById("inputs-italiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-italiana").value;
      document.getElementById("input-italiana-instrucciones").value= nota;
      document.getElementById("volver-italiana-html").hidden = true; 

       

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



      

    function volveritaliana() {
      document.getElementById("volver-italiana-html").hidden = false; 
    }

    // FIN ITALIANA 


    



    function canceloconx() {
      document.getElementById("cancelocon").value = '*Cancelo con:*';
    }
  
    function nocanceloconx() {
      document.getElementById("cancelocon").value = '';
    }
  























