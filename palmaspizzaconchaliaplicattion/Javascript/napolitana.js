// NAPOLITANA



function cambiarcolorfamiliarnapolitana(){
  document.getElementById("familiarnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarnapolitana").style.color = "#fff"
  document.getElementById("familiarnapolitana").style.fontSize = "180%"
  document.getElementById("mediananapolitana").style.background = "#fff"
  document.getElementById("mediananapolitana").style.color = "#ff7700"
  document.getElementById("mediananapolitana").style.fontSize = "150%"
  document.getElementById("input-napolitana-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-napolitana").hidden = false;

}

function cambiarcolormediananapolitana(){
  document.getElementById("mediananapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("mediananapolitana").style.color = "#fff"
  document.getElementById("mediananapolitana").style.fontSize = "180%"
  document.getElementById("familiarnapolitana").style.background = "#fff"
  document.getElementById("familiarnapolitana").style.color = "#ff7700"
  document.getElementById("familiarnapolitana").style.fontSize = "150%"
  document.getElementById("input-napolitana-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-napolitana").hidden = false;
}



function cambiarcolorsalsapizzanapolitana(){
  document.getElementById("salsapizzanapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzanapolitana").style.color = "#fff"
  document.getElementById("salsapizzanapolitana").style.fontSize = "180%"
  document.getElementById("salsabbqnapolitana").style.background = "#fff"
  document.getElementById("salsabbqnapolitana").style.color = "#ff7700"
  document.getElementById("salsabbqnapolitana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqnapolitana(){
  document.getElementById("salsabbqnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqnapolitana").style.color = "#fff"
  document.getElementById("salsabbqnapolitana").style.fontSize = "180%"
  document.getElementById("salsapizzanapolitana").style.background = "#fff"
  document.getElementById("salsapizzanapolitana").style.color = "#ff7700"
  document.getElementById("salsapizzanapolitana").style.fontSize = "150%"
}








function cambiarcolormasatradicionalnapolitana(){
  document.getElementById("masadelgadanapolitana").style.background = "#fff"
  document.getElementById("masadelgadanapolitana").style.color = "#ff7700"
  document.getElementById("masadelgadanapolitana").style.fontSize = "150%"
  document.getElementById("masatradicionalnapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalnapolitana").style.color = "#fff"
  document.getElementById("masatradicionalnapolitana").style.fontSize = "180%"
  document.getElementById("input-napolitana-masa").value = 'MASA TRADICIONAL';
    document.getElementById("finalizarpedido-napolitana").hidden = false;
}

function cambiarcolormasadelgadanapolitana(){
  document.getElementById("masatradicionalnapolitana").style.background = "#fff"
  document.getElementById("masatradicionalnapolitana").style.color = "#ff7700"
  document.getElementById("masatradicionalnapolitana").style.fontSize = "150%"
  document.getElementById("masadelgadanapolitana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadanapolitana").style.color = "#fff"
  document.getElementById("masadelgadanapolitana").style.fontSize = "180%"
  document.getElementById("input-napolitana-masa").value = 'MASA DELGADA';
    document.getElementById("finalizarpedido-napolitana").hidden = false;
}





function napolitanabuttonoff(){
  document.getElementById("mediananapolitana").style.background = "#fff"
  document.getElementById("mediananapolitana").style.color = "#b8b8b8"
  document.getElementById("mediananapolitana").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarnapolitana").disabled = true;
  document.getElementById("familiarnapolitana").style.background = "#fff"
  document.getElementById("familiarnapolitana").style.color = "#b8b8b8"
  document.getElementById("familiarnapolitana").style.border = "4px solid #b8b8b8"
  document.getElementById("mediananapolitana").disabled = true;
  document.getElementById("borraryvolver-napolitana").disabled = true;
  document.getElementById("borraryvolver-napolitana").style.background = "#fff"
  document.getElementById("borraryvolver-napolitana").style.color = "#b8b8b8"
  document.getElementById("borraryvolver-napolitana").style.border = "4px solid #b8b8b8"
  document.getElementById("spannapolitana").style.color = "#ff5500"

}




function napolitanamedianas() {
  document.getElementById("input-napolitana-precio").value = '8990';
  document.getElementById("input-napolitana-cantidad").value = '1';
  document.getElementById("input-napolitana-tamaño").value = 'MEDIANA';
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';

  
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


function napolitanamedianasuno() {
document.getElementById("input-napolitana-precio").value = '6000';
document.getElementById("input-napolitana-cantidad").value = '1';
document.getElementById("input-napolitana-tamaño").value = 'MEDIANA';
document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';

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



function napolitanamedianasdos() {
document.getElementById("input-napolitana-precio").value = '14990';
document.getElementById("input-napolitana-cantidad").value = '2';


}

function napolitanamedianastres() {
document.getElementById("input-napolitana-precio").value = '23980';
document.getElementById("input-napolitana-cantidad").value = '3';

}

function napolitanamedianascuatro() {
document.getElementById("input-napolitana-precio").value = '29980';
document.getElementById("input-napolitana-cantidad").value = '4';

}


function napolitanafamiliaresuno() {
  document.getElementById("input-napolitana-precio").value = '7000';
  document.getElementById("input-napolitana-cantidad").value = '1';
  document.getElementById("input-napolitana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';

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



function napolitanafamiliares() {
document.getElementById("input-napolitana-precio").value = '10990';
document.getElementById("input-napolitana-cantidad").value = '1';
document.getElementById("input-napolitana-tamaño").value = 'FAMILIAR';
document.getElementById("input-napolitana-pizza").value = 'NAPOLITANA';
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

function napolitanafamiliaresdos() {
document.getElementById("input-napolitana-precio").value = '17990';
document.getElementById("input-napolitana-cantidad").value = '2';
}

function napolitanafamiliarestres() {
document.getElementById("input-napolitana-precio").value = '28990';
document.getElementById("input-napolitana-cantidad").value = '3';
}

function napolitanafamiliarescuatro() {
document.getElementById("input-napolitana-precio").value = '35980';
document.getElementById("input-napolitana-cantidad").value = '4';
}



function napolitanapizza() {
  document.getElementById("input-napolitana-pizza").value = 'NAPOLITANAS';
  document.getElementById("volver-napolitana-html").hidden = true; 
  }



  function borrarpedidonapolitana() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputnapolitanaprecio= parseFloat(document.getElementById("input-napolitana-precio").value) || 0;
   
 document.getElementById("total").value = total - inputnapolitanaprecio;

    document.getElementById("input-napolitana-pizza").value = '';
    document.getElementById("input-napolitana-tamaño").value = '';
    document.getElementById("input-napolitana-cantidad").value = '';
    document.getElementById("input-napolitana-precio").value = '';
    document.getElementById("input-napolitana-masa").value = '';
    document.getElementById("inputs-napolitana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-napolitana").hidden = true; 
    document.getElementById("mediananapolitana").disabled = false;
    document.getElementById("familiarnapolitana").disabled = false;  
    document.getElementById("familiarnapolitana").style.background = "#fff"
    document.getElementById("familiarnapolitana").style.color = "#ff7700"
    document.getElementById("familiarnapolitana").style.fontSize = "150%"
    document.getElementById("familiarnapolitana").style.border = "4px solid #ff7700"
    document.getElementById("mediananapolitana").style.background = "#fff"
    document.getElementById("mediananapolitana").style.color = "#ff7700"
    document.getElementById("mediananapolitana").style.fontSize = "150%"
    document.getElementById("mediananapolitana").style.border = "4px solid #ff7700"
    document.getElementById("spannapolitana").style.color = "#ff5500"
            // -napolitana-
document.getElementById("1napolitanafamiliares").hidden = false;
document.getElementById("1napolitanafamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  precionapolitana = parseFloat(document.getElementById("input-napolitana-precio").value) || 0;

  document.getElementById("total").value = total - precionapolitana;
}
catch (e) {}


  }
    









    function agregaralpedidonapolitanax() {
      document.getElementById("inputs-napolitana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-napolitana").value;
      document.getElementById("input-napolitana-instrucciones").value= nota;
      document.getElementById("volver-napolitana-html").hidden = true; 



    



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





    




    function agregaralpedidonapolitana() {
      document.getElementById("inputs-napolitana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-napolitana").value;
      document.getElementById("input-napolitana-instrucciones").value= nota;
      document.getElementById("volver-napolitana-html").hidden = true; 

         

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



      

    function volvernapolitana() {
      document.getElementById("volver-napolitana-html").hidden = false; 
    }

    // FIN NAPOLITANA 


    




























