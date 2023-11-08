// SUPER PEPPERONI



function cambiarcolorfamiliarsuperpepperoni(){
  document.getElementById("familiarsuperpepperoni").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarsuperpepperoni").style.color = "#fff"
  document.getElementById("familiarsuperpepperoni").style.fontSize = "180%"
  document.getElementById("medianasuperpepperoni").style.background = "#fff"
  document.getElementById("medianasuperpepperoni").style.color = "#ff7700"
  document.getElementById("medianasuperpepperoni").style.fontSize = "150%"
  document.getElementById("input-superpepperoni-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-superpepperoni").hidden = false;

}

function cambiarcolormedianasuperpepperoni(){
  document.getElementById("medianasuperpepperoni").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianasuperpepperoni").style.color = "#fff"
  document.getElementById("medianasuperpepperoni").style.fontSize = "180%"
  document.getElementById("familiarsuperpepperoni").style.background = "#fff"
  document.getElementById("familiarsuperpepperoni").style.color = "#ff7700"
  document.getElementById("familiarsuperpepperoni").style.fontSize = "150%"
  document.getElementById("input-superpepperoni-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-superpepperoni").hidden = false;
}



function cambiarcolorsalsapizzasuperpepperoni(){
  document.getElementById("salsapizzasuperpepperoni").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzasuperpepperoni").style.color = "#fff"
  document.getElementById("salsapizzasuperpepperoni").style.fontSize = "180%"
  document.getElementById("salsabbqsuperpepperoni").style.background = "#fff"
  document.getElementById("salsabbqsuperpepperoni").style.color = "#ff7700"
  document.getElementById("salsabbqsuperpepperoni").style.fontSize = "150%"

}

function cambiarcolorsalsabbqsuperpepperoni(){
  document.getElementById("salsabbqsuperpepperoni").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqsuperpepperoni").style.color = "#fff"
  document.getElementById("salsabbqsuperpepperoni").style.fontSize = "180%"
  document.getElementById("salsapizzasuperpepperoni").style.background = "#fff"
  document.getElementById("salsapizzasuperpepperoni").style.color = "#ff7700"
  document.getElementById("salsapizzasuperpepperoni").style.fontSize = "150%"
}








function cambiarcolormasatradicionalsuperpepperoni(){
  document.getElementById("masadelgadasuperpepperoni").style.background = "#fff"
  document.getElementById("masadelgadasuperpepperoni").style.color = "#ff7700"
  document.getElementById("masadelgadasuperpepperoni").style.fontSize = "150%"
  document.getElementById("masatradicionalsuperpepperoni").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalsuperpepperoni").style.color = "#fff"
  document.getElementById("masatradicionalsuperpepperoni").style.fontSize = "180%"
  document.getElementById("input-superpepperoni-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-superpepperoni").hidden = false;
}

function cambiarcolormasadelgadasuperpepperoni(){
  document.getElementById("masatradicionalsuperpepperoni").style.background = "#fff"
  document.getElementById("masatradicionalsuperpepperoni").style.color = "#ff7700"
  document.getElementById("masatradicionalsuperpepperoni").style.fontSize = "150%"
  document.getElementById("masadelgadasuperpepperoni").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadasuperpepperoni").style.color = "#fff"
  document.getElementById("masadelgadasuperpepperoni").style.fontSize = "180%"
  document.getElementById("input-superpepperoni-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-superpepperoni").hidden = false;
}



function superpepperonibuttonoff() {
  document.getElementById("medianasuperpepperoni").disabled = true;
  document.getElementById("medianasuperpepperoni").style.background = "#fff"
  document.getElementById("medianasuperpepperoni").style.color = "#b8b8b8"
  document.getElementById("medianasuperpepperoni").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarsuperpepperoni").disabled = true;
  document.getElementById("familiarsuperpepperoni").style.background = "#fff"
  document.getElementById("familiarsuperpepperoni").style.color = "#b8b8b8"
  document.getElementById("familiarsuperpepperoni").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-superpepperoni").disabled = true;
document.getElementById("borraryvolver-superpepperoni").style.background = "#fff"
document.getElementById("borraryvolver-superpepperoni").style.color = "#b8b8b8"
document.getElementById("borraryvolver-superpepperoni").style.border = "4px solid #b8b8b8"
document.getElementById("spansuperpepperoni").style.color = "#b8b8b8";

}








function superpepperonimedianas() {
  document.getElementById("input-superpepperoni-precio").value = '8990';
  document.getElementById("input-superpepperoni-cantidad").value = '1';
  document.getElementById("input-superpepperoni-tamaño").value = 'MEDIANA';
  document.getElementById("input-superpepperoni-pizza").value = 'SUPER PEPPERONI';

  
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
document.getElementById("1chillianmedianas").hidden = false;
document.getElementById("1chillianmedianasuno").hidden = true;
  }



function superpepperonimedianasuno() {
document.getElementById("input-superpepperoni-precio").value = '6000';
document.getElementById("input-superpepperoni-cantidad").value = '1';
document.getElementById("input-superpepperoni-tamaño").value = 'MEDIANA';
document.getElementById("input-superpepperoni-pizza").value = 'SUPER PEPPERONI';

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

function superpepperonimedianasdos() {
document.getElementById("input-superpepperoni-precio").value = '14990';
document.getElementById("input-superpepperoni-cantidad").value = '2';


}

function superpepperonimedianastres() {
document.getElementById("input-superpepperoni-precio").value = '23980';
document.getElementById("input-superpepperoni-cantidad").value = '3';

}

function superpepperonimedianascuatro() {
document.getElementById("input-superpepperoni-precio").value = '29980';
document.getElementById("input-superpepperoni-cantidad").value = '4';

}


function superpepperonifamiliaresuno() {
  document.getElementById("input-superpepperoni-precio").value = '7000';
  document.getElementById("input-superpepperoni-cantidad").value = '1';
  document.getElementById("input-superpepperoni-tamaño").value = 'FAMILIAR';
  document.getElementById("input-superpepperoni-pizza").value = 'SUPER PEPPERONI';
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
document.getElementById("1pollobbqfamiliares").hidden = false;
document.getElementById("1pollobbqfamiliaresuno").hidden = true;

// -chillian-
document.getElementById("1chillianfamiliares").hidden = false;
document.getElementById("1chillianfamiliaresuno").hidden = true;
// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;

  }



function superpepperonifamiliares() {
document.getElementById("input-superpepperoni-precio").value = '10990';
document.getElementById("input-superpepperoni-cantidad").value = '1';
document.getElementById("input-superpepperoni-tamaño").value = 'FAMILIAR';
document.getElementById("input-superpepperoni-pizza").value = 'SUPER PEPPERONI';
// -italiana-
document.getElementById("1italianafamiliares").hidden = true;
document.getElementById("1italianafamiliaresuno").hidden = true;

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

function superpepperonifamiliaresdos() {
document.getElementById("input-superpepperoni-precio").value = '17990';
document.getElementById("input-superpepperoni-cantidad").value = '2';
}

function superpepperonifamiliarestres() {
document.getElementById("input-superpepperoni-precio").value = '28990';
document.getElementById("input-superpepperoni-cantidad").value = '3';
}

function superpepperonifamiliarescuatro() {
document.getElementById("input-superpepperoni-precio").value = '35980';
document.getElementById("input-superpepperoni-cantidad").value = '4';
}



function superpepperonipizza() {
  document.getElementById("input-superpepperoni-pizza").value = 'SUPER PEPPERONIS';
  document.getElementById("volver-superpepperoni-html").hidden = true; 
  }


  function borrarpedidosuperpepperoni() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputsuperpepperoniprecio= parseFloat(document.getElementById("input-superpepperoni-precio").value) || 0;
   
 document.getElementById("total").value = total - inputsuperpepperoniprecio;

    document.getElementById("input-superpepperoni-pizza").value = '';
    document.getElementById("input-superpepperoni-tamaño").value = '';
    document.getElementById("input-superpepperoni-cantidad").value = '';
    document.getElementById("input-superpepperoni-precio").value = '';
    document.getElementById("input-superpepperoni-masa").value = '';
    document.getElementById("inputs-superpepperoni").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-superpepperoni").hidden = true; 
    document.getElementById("medianasuperpepperoni").disabled = false;
    document.getElementById("familiarsuperpepperoni").disabled = false;  
    document.getElementById("familiarsuperpepperoni").style.background = "#fff"
    document.getElementById("familiarsuperpepperoni").style.color = "#ff7700"
    document.getElementById("familiarsuperpepperoni").style.fontSize = "150%"
    document.getElementById("familiarsuperpepperoni").style.border = "4px solid #ff7700"
    document.getElementById("medianasuperpepperoni").style.background = "#fff"
    document.getElementById("medianasuperpepperoni").style.color = "#ff7700"
    document.getElementById("medianasuperpepperoni").style.fontSize = "150%"
    document.getElementById("medianasuperpepperoni").style.border = "4px solid #ff7700"
    document.getElementById("spansuperpepperoni").style.color = "#ff5500"
            // -superpepperoni-
document.getElementById("1superpepperonifamiliares").hidden = false;
document.getElementById("1superpepperonifamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciosuperpepperoni = parseFloat(document.getElementById("input-superpepperoni-precio").value) || 0;

  document.getElementById("total").value = total - preciosuperpepperoni;
}
catch (e) {}


  }
    






    function agregaralpedidosuperpepperonix() {
      document.getElementById("inputs-superpepperoni").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-superpepperoni").value;
      document.getElementById("input-superpepperoni-instrucciones").value= nota;
      document.getElementById("volver-superpepperoni-html").hidden = true; 



   


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





    




    function agregaralpedidosuperpepperoni() {
      document.getElementById("inputs-superpepperoni").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-superpepperoni").value;
      document.getElementById("input-superpepperoni-instrucciones").value= nota;
      document.getElementById("volver-superpepperoni-html").hidden = true; 

      
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



      

    function volversuperpepperoni() {
      document.getElementById("volver-superpepperoni-html").hidden = false; 
    }

    // FIN SUPER PEPPERONI 


    




























