// CHEESEBURGER



function cambiarcolorfamiliarcheeseburger(){
  document.getElementById("familiarcheeseburger").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarcheeseburger").style.color = "#fff"
  document.getElementById("familiarcheeseburger").style.fontSize = "180%"
  document.getElementById("medianacheeseburger").style.background = "#fff"
  document.getElementById("medianacheeseburger").style.color = "#ff7700"
  document.getElementById("medianacheeseburger").style.fontSize = "150%"
  document.getElementById("input-cheeseburger-tamaño").value = 'FAMILIARES';
  document.getElementById("finalizarpedido-cheeseburger").hidden = false;

}

function cambiarcolormedianacheeseburger(){
  document.getElementById("medianacheeseburger").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianacheeseburger").style.color = "#fff"
  document.getElementById("medianacheeseburger").style.fontSize = "180%"
  document.getElementById("familiarcheeseburger").style.background = "#fff"
  document.getElementById("familiarcheeseburger").style.color = "#ff7700"
  document.getElementById("familiarcheeseburger").style.fontSize = "150%"
  document.getElementById("input-cheeseburger-tamaño").value = 'MEDIANAS';
  document.getElementById("finalizarpedido-cheeseburger").hidden = false;
}



function cambiarcolorsalsapizzacheeseburger(){
  document.getElementById("salsapizzacheeseburger").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzacheeseburger").style.color = "#fff"
  document.getElementById("salsapizzacheeseburger").style.fontSize = "180%"
  document.getElementById("salsabbqcheeseburger").style.background = "#fff"
  document.getElementById("salsabbqcheeseburger").style.color = "#ff7700"
  document.getElementById("salsabbqcheeseburger").style.fontSize = "150%"

}

function cambiarcolorsalsabbqcheeseburger(){
  document.getElementById("salsabbqcheeseburger").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqcheeseburger").style.color = "#fff"
  document.getElementById("salsabbqcheeseburger").style.fontSize = "180%"
  document.getElementById("salsapizzacheeseburger").style.background = "#fff"
  document.getElementById("salsapizzacheeseburger").style.color = "#ff7700"
  document.getElementById("salsapizzacheeseburger").style.fontSize = "150%"
}








function cambiarcolormasatradicionalcheeseburger(){
  document.getElementById("masadelgadacheeseburger").style.background = "#fff"
  document.getElementById("masadelgadacheeseburger").style.color = "#ff7700"
  document.getElementById("masadelgadacheeseburger").style.fontSize = "150%"
  document.getElementById("masatradicionalcheeseburger").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalcheeseburger").style.color = "#fff"
  document.getElementById("masatradicionalcheeseburger").style.fontSize = "180%"
  document.getElementById("input-cheeseburger-masa").value = 'MASA TRADICIONAL';
  document.getElementById("finalizarpedido-cheeseburger").hidden = false;
}

function cambiarcolormasadelgadacheeseburger(){
  document.getElementById("masatradicionalcheeseburger").style.background = "#fff"
  document.getElementById("masatradicionalcheeseburger").style.color = "#ff7700"
  document.getElementById("masatradicionalcheeseburger").style.fontSize = "150%"
  document.getElementById("masadelgadacheeseburger").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadacheeseburger").style.color = "#fff"
  document.getElementById("masadelgadacheeseburger").style.fontSize = "180%"
  document.getElementById("input-cheeseburger-masa").value = 'MASA DELGADA';
  document.getElementById("finalizarpedido-cheeseburger").hidden = false;
}



function cheeseburgerbuttonoff() {
  document.getElementById("medianacheeseburger").disabled = true;
  document.getElementById("medianacheeseburger").style.background = "#fff"
  document.getElementById("medianacheeseburger").style.color = "#b8b8b8"
  document.getElementById("medianacheeseburger").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarcheeseburger").disabled = true;
  document.getElementById("familiarcheeseburger").style.background = "#fff"
  document.getElementById("familiarcheeseburger").style.color = "#b8b8b8"
  document.getElementById("familiarcheeseburger").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-cheeseburger").disabled = true;
  document.getElementById("borraryvolver-cheeseburger").style.background = "#fff"
  document.getElementById("borraryvolver-cheeseburger").style.color = "#b8b8b8"
  document.getElementById("borraryvolver-cheeseburger").style.border = "4px solid #b8b8b8"
  document.getElementById("spancheeseburger").style.color = "#b8b8b8"

}


function cheeseburgermedianas() {
  document.getElementById("input-cheeseburger-precio").value = '8990';
  document.getElementById("input-cheeseburger-cantidad").value = '1';
  document.getElementById("input-cheeseburger-tamaño").value = 'MEDIANA';
  document.getElementById("input-cheeseburger-pizza").value = 'CHESESEBURGER';

  
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

// -cheeseburger-
document.getElementById("1cheeseburgermedianas").hidden = true;
document.getElementById("1cheeseburgermedianasuno").hidden = false;
  
  }


function cheeseburgermedianasuno() {
document.getElementById("input-cheeseburger-precio").value = '6000';
document.getElementById("input-cheeseburger-cantidad").value = '1';
document.getElementById("input-cheeseburger-tamaño").value = 'MEDIANA';
document.getElementById("input-cheeseburger-pizza").value = 'CHESESEBURGER';

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

// -cheeseburger-
document.getElementById("1cheeseburgermedianas").hidden = true;
document.getElementById("1cheeseburgermedianasuno").hidden = false;

}

function cheeseburgermedianasdos() {
document.getElementById("input-cheeseburger-precio").value = '14990';
document.getElementById("input-cheeseburger-cantidad").value = '2';


}

function cheeseburgermedianastres() {
document.getElementById("input-cheeseburger-precio").value = '23980';
document.getElementById("input-cheeseburger-cantidad").value = '3';

}

function cheeseburgermedianascuatro() {
document.getElementById("input-cheeseburger-precio").value = '29980';
document.getElementById("input-cheeseburger-cantidad").value = '4';

}


function cheeseburgerfamiliaresuno() {
  document.getElementById("input-cheeseburger-precio").value = '7000';
  document.getElementById("input-cheeseburger-cantidad").value = '1';
  document.getElementById("input-cheeseburger-tamaño").value = 'FAMILIAR';
  document.getElementById("input-cheeseburger-pizza").value = 'CHEESEBURGER';
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

// -cheeseburger-
document.getElementById("1cheeseburgerfamiliares").hidden = true;
document.getElementById("1cheeseburgerfamiliaresuno").hidden = false;
  }



function cheeseburgerfamiliares() {
document.getElementById("input-cheeseburger-precio").value = '10990';
document.getElementById("input-cheeseburger-cantidad").value = '1';
document.getElementById("input-cheeseburger-tamaño").value = 'FAMILIAR';
document.getElementById("input-cheeseburger-pizza").value = 'CHEESEBURGER';

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

function cheeseburgerfamiliaresdos() {
document.getElementById("input-cheeseburger-precio").value = '17990';
document.getElementById("input-cheeseburger-cantidad").value = '2';
}

function cheeseburgerfamiliarestres() {
document.getElementById("input-cheeseburger-precio").value = '28990';
document.getElementById("input-cheeseburger-cantidad").value = '3';
}

function cheeseburgerfamiliarescuatro() {
document.getElementById("input-cheeseburger-precio").value = '35980';
document.getElementById("input-cheeseburger-cantidad").value = '4';
}



function cheeseburgerpizza() {
  document.getElementById("input-cheeseburger-pizza").value = 'CHEESEBURGERS';
  document.getElementById("volver-cheeseburger-html").hidden = true; 
  }



  function borrarpedidocheeseburger() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputcheeseburgerprecio= parseFloat(document.getElementById("input-cheeseburger-precio").value) || 0;
   
 document.getElementById("total").value = total - inputcheeseburgerprecio;

    document.getElementById("input-cheeseburger-pizza").value = '';
    document.getElementById("input-cheeseburger-tamaño").value = '';
    document.getElementById("input-cheeseburger-cantidad").value = '';
    document.getElementById("input-cheeseburger-precio").value = '';
    document.getElementById("input-cheeseburger-masa").value = '';
    document.getElementById("inputs-cheeseburger").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-cheeseburger").hidden = true; 
    document.getElementById("medianacheeseburger").disabled = false;
    document.getElementById("familiarcheeseburger").disabled = false;  
    document.getElementById("familiarcheeseburger").style.background = "#fff"
    document.getElementById("familiarcheeseburger").style.color = "#ff7700"
    document.getElementById("familiarcheeseburger").style.fontSize = "150%"
    document.getElementById("familiarcheeseburger").style.border = "4px solid #ff7700"
    document.getElementById("medianacheeseburger").style.background = "#fff"
    document.getElementById("medianacheeseburger").style.color = "#ff7700"
    document.getElementById("medianacheeseburger").style.fontSize = "150%"
    document.getElementById("medianacheeseburger").style.border = "4px solid #ff7700"
    document.getElementById("spancheeseburger").style.color = "#ff5500"
            // -cheeseburger-
    document.getElementById("1cheeseburgerfamiliares").hidden = false;
    document.getElementById("1cheeseburgerfamiliaresuno").hidden = true;
    // 
    try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciocheeseburger = parseFloat(document.getElementById("input-cheeseburger-precio").value) || 0;

  document.getElementById("total").value = total - preciocheeseburger;
    }
    catch (e) {}


  }
    









    function agregaralpedidocheeseburgerx() {
      document.getElementById("inputs-cheeseburger").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-cheeseburger").value;
      document.getElementById("input-cheeseburger-instrucciones").value= nota;
      document.getElementById("volver-cheeseburger-html").hidden = true; 



   

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





    




    function agregaralpedidocheeseburger() {
      document.getElementById("inputs-cheeseburger").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-cheeseburger").value;
      document.getElementById("input-cheeseburger-instrucciones").value= nota;
      document.getElementById("volver-cheeseburger-html").hidden = true; 

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



      

    function volvercheeseburger() {
      document.getElementById("volver-cheeseburger-html").hidden = false; 
    }

    // FIN CHEESEBURGER 


    




























