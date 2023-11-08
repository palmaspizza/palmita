// CHILLIAN



function cambiarcolorfamiliarchillian(){
  document.getElementById("familiarchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarchillian").style.color = "#fff"
  document.getElementById("familiarchillian").style.fontSize = "180%"
  document.getElementById("medianachillian").style.background = "#fff"
  document.getElementById("medianachillian").style.color = "#ff7700"
  document.getElementById("medianachillian").style.fontSize = "150%"
  document.getElementById("input-chillian-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-chillian").hidden = false;

}

function cambiarcolormedianachillian(){
  document.getElementById("medianachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianachillian").style.color = "#fff"
  document.getElementById("medianachillian").style.fontSize = "180%"
  document.getElementById("familiarchillian").style.background = "#fff"
  document.getElementById("familiarchillian").style.color = "#ff7700"
  document.getElementById("familiarchillian").style.fontSize = "150%"
  document.getElementById("input-chillian-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-chillian").hidden = false;
}



function cambiarcolorsalsapizzachillian(){
  document.getElementById("salsapizzachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzachillian").style.color = "#fff"
  document.getElementById("salsapizzachillian").style.fontSize = "180%"
  document.getElementById("salsabbqchillian").style.background = "#fff"
  document.getElementById("salsabbqchillian").style.color = "#ff7700"
  document.getElementById("salsabbqchillian").style.fontSize = "150%"

}

function cambiarcolorsalsabbqchillian(){
  document.getElementById("salsabbqchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqchillian").style.color = "#fff"
  document.getElementById("salsabbqchillian").style.fontSize = "180%"
  document.getElementById("salsapizzachillian").style.background = "#fff"
  document.getElementById("salsapizzachillian").style.color = "#ff7700"
  document.getElementById("salsapizzachillian").style.fontSize = "150%"
}








function cambiarcolormasatradicionalchillian(){
  document.getElementById("masadelgadachillian").style.background = "#fff"
  document.getElementById("masadelgadachillian").style.color = "#ff7700"
  document.getElementById("masadelgadachillian").style.fontSize = "150%"
  document.getElementById("masatradicionalchillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalchillian").style.color = "#fff"
  document.getElementById("masatradicionalchillian").style.fontSize = "180%"
  document.getElementById("input-chillian-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-chillian").hidden = false;
}

function cambiarcolormasadelgadachillian(){
  document.getElementById("masatradicionalchillian").style.background = "#fff"
  document.getElementById("masatradicionalchillian").style.color = "#ff7700"
  document.getElementById("masatradicionalchillian").style.fontSize = "150%"
  document.getElementById("masadelgadachillian").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadachillian").style.color = "#fff"
  document.getElementById("masadelgadachillian").style.fontSize = "180%"
  document.getElementById("input-chillian-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-chillian").hidden = false;
}



function chillianbuttonoff() {
  document.getElementById("medianachillian").disabled = true;
  document.getElementById("medianachillian").style.background = "#fff"
  document.getElementById("medianachillian").style.color = "#b8b8b8"
  document.getElementById("medianachillian").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarchillian").disabled = true;
  document.getElementById("familiarchillian").style.background = "#fff"
  document.getElementById("familiarchillian").style.color = "#b8b8b8"
  document.getElementById("familiarchillian").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-chillian").disabled = true;
document.getElementById("borraryvolver-chillian").style.background = "#fff"
document.getElementById("borraryvolver-chillian").style.color = "#b8b8b8"
document.getElementById("borraryvolver-chillian").style.border = "4px solid #b8b8b8"
document.getElementById("spanchillian").style.color = "#b8b8b8"

}


function chillianmedianas() {
  document.getElementById("input-chillian-precio").value = '8990';
  document.getElementById("input-chillian-cantidad").value = '1';
  document.getElementById("input-chillian-tamaño").value = 'MEDIANA';
  document.getElementById("input-chillian-pizza").value = 'CHILLIAN';

  
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


function chillianmedianasuno() {
document.getElementById("input-chillian-precio").value = '6000';
document.getElementById("input-chillian-cantidad").value = '1';
document.getElementById("input-chillian-tamaño").value = 'MEDIANA';
document.getElementById("input-chillian-pizza").value = 'CHILLIAN';

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

function chillianmedianasdos() {
document.getElementById("input-chillian-precio").value = '14990';
document.getElementById("input-chillian-cantidad").value = '2';


}

function chillianmedianastres() {
document.getElementById("input-chillian-precio").value = '23980';
document.getElementById("input-chillian-cantidad").value = '3';

}

function chillianmedianascuatro() {
document.getElementById("input-chillian-precio").value = '29980';
document.getElementById("input-chillian-cantidad").value = '4';

}


function chillianfamiliaresuno() {
  document.getElementById("input-chillian-precio").value = '7000';
  document.getElementById("input-chillian-cantidad").value = '1';
  document.getElementById("input-chillian-tamaño").value = 'FAMILIAR';
  document.getElementById("input-chillian-pizza").value = 'CHILLIAN';
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



function chillianfamiliares() {
document.getElementById("input-chillian-precio").value = '10990';
document.getElementById("input-chillian-cantidad").value = '1';
document.getElementById("input-chillian-tamaño").value = 'FAMILIAR';
document.getElementById("input-chillian-pizza").value = 'CHILLIAN';

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

function chillianfamiliaresdos() {
document.getElementById("input-chillian-precio").value = '17990';
document.getElementById("input-chillian-cantidad").value = '2';
}

function chillianfamiliarestres() {
document.getElementById("input-chillian-precio").value = '28990';
document.getElementById("input-chillian-cantidad").value = '3';
}

function chillianfamiliarescuatro() {
document.getElementById("input-chillian-precio").value = '35980';
document.getElementById("input-chillian-cantidad").value = '4';
}



function chillianpizza() {
  document.getElementById("input-chillian-pizza").value = 'CHILLIANS';
  document.getElementById("volver-chillian-html").hidden = true; 
  }


  function borrarpedidochillian() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputchillianprecio= parseFloat(document.getElementById("input-chillian-precio").value) || 0;
   
 document.getElementById("total").value = total - inputchillianprecio;

    document.getElementById("input-chillian-pizza").value = '';
    document.getElementById("input-chillian-tamaño").value = '';
    document.getElementById("input-chillian-cantidad").value = '';
    document.getElementById("input-chillian-precio").value = '';
    document.getElementById("input-chillian-masa").value = '';
    document.getElementById("inputs-chillian").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-chillian").hidden = true; 
    document.getElementById("medianachillian").disabled = false;
    document.getElementById("familiarchillian").disabled = false;  
    document.getElementById("familiarchillian").style.background = "#fff"
    document.getElementById("familiarchillian").style.color = "#ff7700"
    document.getElementById("familiarchillian").style.fontSize = "150%"
    document.getElementById("familiarchillian").style.border = "4px solid #ff7700"
    document.getElementById("medianachillian").style.background = "#fff"
    document.getElementById("medianachillian").style.color = "#ff7700"
    document.getElementById("medianachillian").style.fontSize = "150%"
    document.getElementById("medianachillian").style.border = "4px solid #ff7700"
    document.getElementById("spanschillian").style.color = "#ff5500"
            // -chillian-
document.getElementById("1chillianfamiliares").hidden = false;
document.getElementById("1chillianfamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciochillian = parseFloat(document.getElementById("input-chillian-precio").value) || 0;

  document.getElementById("total").value = total - preciochillian;
}
catch (e) {}


  }
    







    function agregaralpedidochillianx() {
      document.getElementById("inputs-chillian").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-chillian").value;
      document.getElementById("input-chillian-instrucciones").value= nota;
      document.getElementById("volver-chillian-html").hidden = true; 



   

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





    




    function agregaralpedidochillian() {
      document.getElementById("inputs-chillian").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-chillian").value;
      document.getElementById("input-chillian-instrucciones").value= nota;
      document.getElementById("volver-chillian-html").hidden = true; 

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



      

    function volverchillian() {
      document.getElementById("volver-chillian-html").hidden = false; 
    }

    // FIN CHILLIAN 


    




























