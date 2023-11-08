// NAPOLITANA



function cambiarcolorfamiliarhawaiana(){
  document.getElementById("familiarhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarhawaiana").style.color = "#fff"
  document.getElementById("familiarhawaiana").style.fontSize = "170%"
  document.getElementById("medianahawaiana").style.background = "#fff"
  document.getElementById("medianahawaiana").style.color = "#ff7700"
  document.getElementById("medianahawaiana").style.fontSize = "150%"
  document.getElementById("input-hawaiana-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-hawaiana").hidden = false;

}

function cambiarcolormedianahawaiana(){
  document.getElementById("medianahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianahawaiana").style.color = "#fff"
  document.getElementById("medianahawaiana").style.fontSize = "170%"
  document.getElementById("familiarhawaiana").style.background = "#fff"
  document.getElementById("familiarhawaiana").style.color = "#ff7700"
  document.getElementById("familiarhawaiana").style.fontSize = "150%"
  document.getElementById("input-hawaiana-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-hawaiana").hidden = false;
}



function cambiarcolorsalsapizzahawaiana(){
  document.getElementById("salsapizzahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzahawaiana").style.color = "#fff"
  document.getElementById("salsapizzahawaiana").style.fontSize = "170%"
  document.getElementById("salsabbqhawaiana").style.background = "#fff"
  document.getElementById("salsabbqhawaiana").style.color = "#ff7700"
  document.getElementById("salsabbqhawaiana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqhawaiana(){
  document.getElementById("salsabbqhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqhawaiana").style.color = "#fff"
  document.getElementById("salsabbqhawaiana").style.fontSize = "170%"
  document.getElementById("salsapizzahawaiana").style.background = "#fff"
  document.getElementById("salsapizzahawaiana").style.color = "#ff7700"
  document.getElementById("salsapizzahawaiana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalhawaiana(){
  document.getElementById("masadelgadahawaiana").style.background = "#fff"
  document.getElementById("masadelgadahawaiana").style.color = "#ff7700"
  document.getElementById("masadelgadahawaiana").style.fontSize = "150%"
  document.getElementById("masatradicionalhawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalhawaiana").style.color = "#fff"
  document.getElementById("masatradicionalhawaiana").style.fontSize = "170%"
  document.getElementById("input-hawaiana-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-hawaiana").hidden = false;
}

function cambiarcolormasadelgadahawaiana(){
  document.getElementById("masatradicionalhawaiana").style.background = "#fff"
  document.getElementById("masatradicionalhawaiana").style.color = "#ff7700"
  document.getElementById("masatradicionalhawaiana").style.fontSize = "150%"
  document.getElementById("masadelgadahawaiana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadahawaiana").style.color = "#fff"
  document.getElementById("masadelgadahawaiana").style.fontSize = "170%"
  document.getElementById("input-hawaiana-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-hawaiana").hidden = false;
}



function hawaianamedianasuno() {
  document.getElementById("input-hawaiana-precio").value = '6000';
  document.getElementById("input-hawaiana-cantidad").value = '1';
  document.getElementById("input-hawaiana-tamaño").value = 'MEDIANA';
  document.getElementById("input-hawaiana-pizza").value = 'ITALIANA';

  
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



  function hawaianabuttonoff() {
    document.getElementById("medianahawaiana").disabled = true;
    document.getElementById("medianahawaiana").style.background = "#fff"
    document.getElementById("medianahawaiana").style.color = "#b8b8b8"
    document.getElementById("medianahawaiana").style.border = "4px solid #b8b8b8"
    document.getElementById("familiarhawaiana").disabled = true;
    document.getElementById("familiarhawaiana").style.background = "#fff"
    document.getElementById("familiarhawaiana").style.color = "#b8b8b8"
    document.getElementById("familiarhawaiana").style.border = "4px solid #b8b8b8"
    document.getElementById("spanhawaiana").style.color = "#b8b8b8"
    
    
  
  }





function hawaianamedianas() {
document.getElementById("input-hawaiana-precio").value = '8990';
document.getElementById("input-hawaiana-cantidad").value = '1';
document.getElementById("input-hawaiana-tamaño").value = 'MEDIANA';
document.getElementById("input-hawaiana-pizza").value = 'ITALIANA';

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


function hawaianamedianasdos() {
document.getElementById("input-hawaiana-precio").value = '14990';
document.getElementById("input-hawaiana-cantidad").value = '2';


}

function hawaianamedianastres() {
document.getElementById("input-hawaiana-precio").value = '23980';
document.getElementById("input-hawaiana-cantidad").value = '3';

}

function hawaianamedianascuatro() {
document.getElementById("input-hawaiana-precio").value = '29980';
document.getElementById("input-hawaiana-cantidad").value = '4';

}


function hawaianafamiliaresuno() {
  document.getElementById("input-hawaiana-precio").value = '7000';
  document.getElementById("input-hawaiana-cantidad").value = '1';
  document.getElementById("input-hawaiana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-hawaiana-pizza").value = 'HAWAIANA';
  }



function hawaianafamiliares() {
document.getElementById("input-hawaiana-precio").value = '10990';
document.getElementById("input-hawaiana-cantidad").value = '1';
document.getElementById("input-hawaiana-tamaño").value = 'FAMILIAR';
document.getElementById("input-hawaiana-pizza").value = 'HAWAIANA';
}

function hawaianafamiliaresdos() {
document.getElementById("input-hawaiana-precio").value = '17990';
document.getElementById("input-hawaiana-cantidad").value = '2';
}

function hawaianafamiliarestres() {
document.getElementById("input-hawaiana-precio").value = '28990';
document.getElementById("input-hawaiana-cantidad").value = '3';
}

function hawaianafamiliarescuatro() {
document.getElementById("input-hawaiana-precio").value = '35980';
document.getElementById("input-hawaiana-cantidad").value = '4';
}



function hawaianapizza() {
  document.getElementById("input-hawaiana-pizza").value = 'NAPOLITANAS';
  document.getElementById("volver-hawaiana-html").hidden = true; 
  }



  function borrarpedidohawaiana() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputhawaianaprecio= parseFloat(document.getElementById("input-hawaiana-precio").value) || 0;
   
 document.getElementById("total").value = total - inputhawaianaprecio;

    document.getElementById("input-hawaiana-pizza").value = '';
    document.getElementById("input-hawaiana-tamaño").value = '';
    document.getElementById("input-hawaiana-cantidad").value = '';
    document.getElementById("input-hawaiana-precio").value = '';
    document.getElementById("input-hawaiana-masa").value = '';
    document.getElementById("inputs-hawaiana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-hawaiana").hidden = true; 
    document.getElementById("medianahawaiana").disabled = false;
    document.getElementById("familiarhawaiana").disabled = false;  
    document.getElementById("familiarhawaiana").style.background = "#fff"
    document.getElementById("familiarhawaiana").style.color = "#ff7700"
    document.getElementById("familiarhawaiana").style.fontSize = "150%"
    document.getElementById("familiarhawaiana").style.border = "4px solid #ff7700"
    document.getElementById("medianahawaiana").style.background = "#fff"
    document.getElementById("medianahawaiana").style.color = "#ff7700"
    document.getElementById("medianahawaiana").style.fontSize = "150%"
    document.getElementById("medianahawaiana").style.border = "4px solid #ff7700"
    document.getElementById("spanhawaiana").style.color = "#ff5500"
            // -hawaiana-
document.getElementById("1hawaianafamiliares").hidden = false;
document.getElementById("1hawaianafamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciohawaiana = parseFloat(document.getElementById("input-hawaiana-precio").value) || 0;

  document.getElementById("total").value = total - preciohawaiana;
}
catch (e) {}


  }
    







    function agregaralpedidohawaianax() {
      document.getElementById("inputs-hawaiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-hawaiana").value;
      document.getElementById("input-hawaiana-instrucciones").value= nota;
      document.getElementById("volver-hawaiana-html").hidden = true; 



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





    




    function agregaralpedidohawaiana() {
      document.getElementById("inputs-hawaiana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-hawaiana").value;
      document.getElementById("input-hawaiana-instrucciones").value= nota;
      document.getElementById("volver-hawaiana-html").hidden = true; 
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



      

    function volverhawaiana() {
      document.getElementById("volver-hawaiana-html").hidden = false; 
    }

    // FIN NAPOLITANA 


    




























