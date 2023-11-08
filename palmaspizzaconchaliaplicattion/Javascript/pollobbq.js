// POLLO BBQ



function cambiarcolorfamiliarpollobbq(){
  document.getElementById("familiarpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarpollobbq").style.color = "#fff"
  document.getElementById("familiarpollobbq").style.fontSize = "180%"
  document.getElementById("medianapollobbq").style.background = "#fff"
  document.getElementById("medianapollobbq").style.color = "#ff7700"
  document.getElementById("medianapollobbq").style.fontSize = "150%"
  document.getElementById("input-pollobbq-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-pollobbq").hidden = false;

}

function cambiarcolormedianapollobbq(){
  document.getElementById("medianapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianapollobbq").style.color = "#fff"
  document.getElementById("medianapollobbq").style.fontSize = "180%"
  document.getElementById("familiarpollobbq").style.background = "#fff"
  document.getElementById("familiarpollobbq").style.color = "#ff7700"
  document.getElementById("familiarpollobbq").style.fontSize = "150%"
  document.getElementById("input-pollobbq-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-pollobbq").hidden = false;
}



function cambiarcolorsalsapizzapollobbq(){
  document.getElementById("salsapizzapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzapollobbq").style.color = "#fff"
  document.getElementById("salsapizzapollobbq").style.fontSize = "180%"
  document.getElementById("salsabbqpollobbq").style.background = "#fff"
  document.getElementById("salsabbqpollobbq").style.color = "#ff7700"
  document.getElementById("salsabbqpollobbq").style.fontSize = "150%"

}

function cambiarcolorsalsabbqpollobbq(){
  document.getElementById("salsabbqpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqpollobbq").style.color = "#fff"
  document.getElementById("salsabbqpollobbq").style.fontSize = "180%"
  document.getElementById("salsapizzapollobbq").style.background = "#fff"
  document.getElementById("salsapizzapollobbq").style.color = "#ff7700"
  document.getElementById("salsapizzapollobbq").style.fontSize = "150%"
}








function cambiarcolormasatradicionalpollobbq(){
  document.getElementById("masadelgadapollobbq").style.background = "#fff"
  document.getElementById("masadelgadapollobbq").style.color = "#ff7700"
  document.getElementById("masadelgadapollobbq").style.fontSize = "150%"
  document.getElementById("masatradicionalpollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalpollobbq").style.color = "#fff"
  document.getElementById("masatradicionalpollobbq").style.fontSize = "180%"
  document.getElementById("input-pollobbq-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-pollobbq").hidden = false;
}

function cambiarcolormasadelgadapollobbq(){
  document.getElementById("masatradicionalpollobbq").style.background = "#fff"
  document.getElementById("masatradicionalpollobbq").style.color = "#ff7700"
  document.getElementById("masatradicionalpollobbq").style.fontSize = "150%"
  document.getElementById("masadelgadapollobbq").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadapollobbq").style.color = "#fff"
  document.getElementById("masadelgadapollobbq").style.fontSize = "180%"
  document.getElementById("input-pollobbq-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-pollobbq").hidden = false;
}



function pollobbqbuttonoff() {
  document.getElementById("medianapollobbq").disabled = true;
  document.getElementById("medianapollobbq").style.background = "#fff"
  document.getElementById("medianapollobbq").style.color = "#b8b8b8"
  document.getElementById("medianapollobbq").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarpollobbq").disabled = true;
  document.getElementById("familiarpollobbq").style.background = "#fff"
  document.getElementById("familiarpollobbq").style.color = "#b8b8b8"
  document.getElementById("familiarpollobbq").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-pollobbq").disabled = true;
document.getElementById("borraryvolver-pollobbq").style.background = "#fff"
document.getElementById("borraryvolver-pollobbq").style.color = "#b8b8b8"
document.getElementById("borraryvolver-pollobbq").style.border = "4px solid #b8b8b8"
document.getElementById("spanpollobbq").style.color = "#b8b8b8"


}



function pollobbqmedianas() {
  document.getElementById("input-pollobbq-precio").value = '8990';
  document.getElementById("input-pollobbq-cantidad").value = '1';
  document.getElementById("input-pollobbq-tamaño").value = 'MEDIANA';
  document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';

  
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


function pollobbqmedianasuno() {
document.getElementById("input-pollobbq-precio").value = '6000';
document.getElementById("input-pollobbq-cantidad").value = '1';
document.getElementById("input-pollobbq-tamaño").value = 'MEDIANA';
document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';

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

function pollobbqmedianasdos() {
document.getElementById("input-pollobbq-precio").value = '14990';
document.getElementById("input-pollobbq-cantidad").value = '2';


}

function pollobbqmedianastres() {
document.getElementById("input-pollobbq-precio").value = '23980';
document.getElementById("input-pollobbq-cantidad").value = '3';

}

function pollobbqmedianascuatro() {
document.getElementById("input-pollobbq-precio").value = '29980';
document.getElementById("input-pollobbq-cantidad").value = '4';

}


function pollobbqfamiliaresuno() {
  document.getElementById("input-pollobbq-precio").value = '7000';
  document.getElementById("input-pollobbq-cantidad").value = '1';
  document.getElementById("input-pollobbq-tamaño").value = 'FAMILIAR';
  document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';
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
// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;
  }



function pollobbqfamiliares() {
document.getElementById("input-pollobbq-precio").value = '10990';
document.getElementById("input-pollobbq-cantidad").value = '1';
document.getElementById("input-pollobbq-tamaño").value = 'FAMILIAR';
document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQ';
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
// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;
}

function pollobbqfamiliaresdos() {
document.getElementById("input-pollobbq-precio").value = '17990';
document.getElementById("input-pollobbq-cantidad").value = '2';
}

function pollobbqfamiliarestres() {
document.getElementById("input-pollobbq-precio").value = '28990';
document.getElementById("input-pollobbq-cantidad").value = '3';
}

function pollobbqfamiliarescuatro() {
document.getElementById("input-pollobbq-precio").value = '35980';
document.getElementById("input-pollobbq-cantidad").value = '4';
}



function pollobbqpizza() {
  document.getElementById("input-pollobbq-pizza").value = 'POLLO BBQS';
  document.getElementById("volver-pollobbq-html").hidden = true; 
  }



  function borrarpedidopollobbq() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputpollobbqprecio= parseFloat(document.getElementById("input-pollobbq-precio").value) || 0;
   
 document.getElementById("total").value = total - inputpollobbqprecio;

    document.getElementById("input-pollobbq-pizza").value = '';
    document.getElementById("input-pollobbq-tamaño").value = '';
    document.getElementById("input-pollobbq-cantidad").value = '';
    document.getElementById("input-pollobbq-precio").value = '';
    document.getElementById("input-pollobbq-masa").value = '';
    document.getElementById("inputs-pollobbq").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-pollobbq").hidden = true; 
    document.getElementById("medianapollobbq").disabled = false;
    document.getElementById("familiarpollobbq").disabled = false;  
    document.getElementById("familiarpollobbq").style.background = "#fff"
    document.getElementById("familiarpollobbq").style.color = "#ff7700"
    document.getElementById("familiarpollobbq").style.fontSize = "150%"
    document.getElementById("familiarpollobbq").style.border = "4px solid #ff7700"
    document.getElementById("medianapollobbq").style.background = "#fff"
    document.getElementById("medianapollobbq").style.color = "#ff7700"
    document.getElementById("medianapollobbq").style.fontSize = "150%"
    document.getElementById("medianapollobbq").style.border = "4px solid #ff7700"
    document.getElementById("spanpollobbq").style.color = "#ff5500"
            // -pollobbq-
document.getElementById("1pollobbqfamiliares").hidden = false;
document.getElementById("1pollobbqfamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciopollobbq = parseFloat(document.getElementById("input-pollobbq-precio").value) || 0;

  document.getElementById("total").value = total - preciopollobbq;
}
catch (e) {}


  }
    









    function agregaralpedidopollobbqx() {
      document.getElementById("inputs-pollobbq").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-pollobbq").value;
      document.getElementById("input-pollobbq-instrucciones").value= nota;
      document.getElementById("volver-pollobbq-html").hidden = true; 



   

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





    




    function agregaralpedidopollobbq() {
      document.getElementById("inputs-pollobbq").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-pollobbq").value;
      document.getElementById("input-pollobbq-instrucciones").value= nota;
      document.getElementById("volver-pollobbq-html").hidden = true; 

        

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



      

    function volverpollobbq() {
      document.getElementById("volver-pollobbq-html").hidden = false; 
    }

    // FIN POLLO BBQ 


    




























