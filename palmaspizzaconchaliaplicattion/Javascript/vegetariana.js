// VEGETARIANA



function cambiarcolorfamiliarvegetariana(){
  document.getElementById("familiarvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("familiarvegetariana").style.color = "#fff"
  document.getElementById("familiarvegetariana").style.fontSize = "180%"
  document.getElementById("medianavegetariana").style.background = "#fff"
  document.getElementById("medianavegetariana").style.color = "#ff7700"
  document.getElementById("medianavegetariana").style.fontSize = "150%"
  document.getElementById("input-vegetariana-tamaño").value = 'FAMILIARES';
   document.getElementById("finalizarpedido-vegetariana").hidden = false;

}

function cambiarcolormedianavegetariana(){
  document.getElementById("medianavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("medianavegetariana").style.color = "#fff"
  document.getElementById("medianavegetariana").style.fontSize = "180%"
  document.getElementById("familiarvegetariana").style.background = "#fff"
  document.getElementById("familiarvegetariana").style.color = "#ff7700"
  document.getElementById("familiarvegetariana").style.fontSize = "150%"
  document.getElementById("input-vegetariana-tamaño").value = 'MEDIANAS';
   document.getElementById("finalizarpedido-vegetariana").hidden = false;
}



function cambiarcolorsalsapizzavegetariana(){
  document.getElementById("salsapizzavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsapizzavegetariana").style.color = "#fff"
  document.getElementById("salsapizzavegetariana").style.fontSize = "180%"
  document.getElementById("salsabbqvegetariana").style.background = "#fff"
  document.getElementById("salsabbqvegetariana").style.color = "#ff7700"
  document.getElementById("salsabbqvegetariana").style.fontSize = "150%"

}

function cambiarcolorsalsabbqvegetariana(){
  document.getElementById("salsabbqvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("salsabbqvegetariana").style.color = "#fff"
  document.getElementById("salsabbqvegetariana").style.fontSize = "180%"
  document.getElementById("salsapizzavegetariana").style.background = "#fff"
  document.getElementById("salsapizzavegetariana").style.color = "#ff7700"
  document.getElementById("salsapizzavegetariana").style.fontSize = "150%"
}





function vegetarianabuttonoff() {
  document.getElementById("medianavegetariana").disabled = true;
  document.getElementById("medianavegetariana").style.background = "#fff"
  document.getElementById("medianavegetariana").style.color = "#b8b8b8"
  document.getElementById("medianavegetariana").style.border = "4px solid #b8b8b8"
  document.getElementById("familiarvegetariana").disabled = true;
  document.getElementById("familiarvegetariana").style.background = "#fff"
  document.getElementById("familiarvegetariana").style.color = "#b8b8b8"
  document.getElementById("familiarvegetariana").style.border = "4px solid #b8b8b8"
  document.getElementById("borraryvolver-vegetariana").disabled = true;
  document.getElementById("borraryvolver-vegetariana").style.background = "#fff"
  document.getElementById("borraryvolver-vegetariana").style.color = "#b8b8b8"
  document.getElementById("borraryvolver-vegetariana").style.border = "4px solid #b8b8b8"
  document.getElementById("spanvegetariana").style.color = "#b8b8b8"



}



function cambiarcolormasatradicionalvegetariana(){
  document.getElementById("masadelgadavegetariana").style.background = "#fff"
  document.getElementById("masadelgadavegetariana").style.color = "#ff7700"
  document.getElementById("masadelgadavegetariana").style.fontSize = "150%"
  document.getElementById("masatradicionalvegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masatradicionalvegetariana").style.color = "#fff"
  document.getElementById("masatradicionalvegetariana").style.fontSize = "180%"
  document.getElementById("input-vegetariana-masa").value = 'MASA TRADICIONAL';
  document.getElementById("finalizarpedido-vegetariana").hidden = false;

}

function cambiarcolormasadelgadavegetariana(){
  document.getElementById("masatradicionalvegetariana").style.background = "#fff"
  document.getElementById("masatradicionalvegetariana").style.color = "#ff7700"
  document.getElementById("masatradicionalvegetariana").style.fontSize = "150%"
  document.getElementById("masadelgadavegetariana").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("masadelgadavegetariana").style.color = "#fff"
  document.getElementById("masadelgadavegetariana").style.fontSize = "180%"
  document.getElementById("input-vegetariana-masa").value = 'MASA DELGADA';
  document.getElementById("finalizarpedido-vegetariana").hidden = false;

}




function vegetarianamedianas() {
  document.getElementById("input-vegetariana-precio").value = '8990';
  document.getElementById("input-vegetariana-cantidad").value = '1';
  document.getElementById("input-vegetariana-tamaño").value = 'MEDIANA';
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';

  
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













function vegetarianamedianasuno() {
document.getElementById("input-vegetariana-precio").value = '6000';
document.getElementById("input-vegetariana-cantidad").value = '1';
document.getElementById("input-vegetariana-tamaño").value = 'MEDIANA';
document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';

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




function vegetarianamedianasdos() {
document.getElementById("input-vegetariana-precio").value = '14990';
document.getElementById("input-vegetariana-cantidad").value = '2';


}

function vegetarianamedianastres() {
document.getElementById("input-vegetariana-precio").value = '23980';
document.getElementById("input-vegetariana-cantidad").value = '3';

}

function vegetarianamedianascuatro() {
document.getElementById("input-vegetariana-precio").value = '29980';
document.getElementById("input-vegetariana-cantidad").value = '4';

}


function vegetarianafamiliaresuno() {
  document.getElementById("input-vegetariana-precio").value = '7000';
  document.getElementById("input-vegetariana-cantidad").value = '1';
  document.getElementById("input-vegetariana-tamaño").value = 'FAMILIAR';
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';

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



function vegetarianafamiliares() {
document.getElementById("input-vegetariana-precio").value = '10990';
document.getElementById("input-vegetariana-cantidad").value = '1';
document.getElementById("input-vegetariana-tamaño").value = 'FAMILIAR';
document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANA';

  
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

function vegetarianafamiliaresdos() {
document.getElementById("input-vegetariana-precio").value = '17990';
document.getElementById("input-vegetariana-cantidad").value = '2';
}

function vegetarianafamiliarestres() {
document.getElementById("input-vegetariana-precio").value = '28990';
document.getElementById("input-vegetariana-cantidad").value = '3';
}

function vegetarianafamiliarescuatro() {
document.getElementById("input-vegetariana-precio").value = '35980';
document.getElementById("input-vegetariana-cantidad").value = '4';
}



function vegetarianapizza() {
  document.getElementById("input-vegetariana-pizza").value = 'VEGETARIANAS';
  document.getElementById("volver-vegetariana-html").hidden = true; 
  }


  function borrarpedidovegetariana() {
    
  
    var total= parseFloat(document.getElementById("total").value) || 0,
    inputvegetarianaprecio= parseFloat(document.getElementById("input-vegetariana-precio").value) || 0;
   
 document.getElementById("total").value = total - inputvegetarianaprecio;

    document.getElementById("input-vegetariana-pizza").value = '';
    document.getElementById("input-vegetariana-tamaño").value = '';
    document.getElementById("input-vegetariana-cantidad").value = '';
    document.getElementById("input-vegetariana-precio").value = '';
    document.getElementById("input-vegetariana-masa").value = '';
    document.getElementById("inputs-vegetariana").hidden = true;
    document.getElementById("finalizar-pedido-button").hidden = true; 
    document.getElementById("volver-vegetariana").hidden = true; 
    document.getElementById("medianavegetariana").disabled = false;
    document.getElementById("familiarvegetariana").disabled = false;  
    document.getElementById("familiarvegetariana").style.background = "#fff"
    document.getElementById("familiarvegetariana").style.color = "#ff7700"
    document.getElementById("familiarvegetariana").style.fontSize = "150%"
    document.getElementById("familiarvegetariana").style.border = "4px solid #ff7700"
    document.getElementById("medianavegetariana").style.background = "#fff"
    document.getElementById("medianavegetariana").style.color = "#ff7700"
    document.getElementById("medianavegetariana").style.fontSize = "150%"
    document.getElementById("medianavegetariana").style.border = "4px solid #ff7700"
    document.getElementById("spanvegetariana").style.color = "#ff5500"
            // -vegetariana-
document.getElementById("1vegetarianafamiliares").hidden = false;
document.getElementById("1vegetarianafamiliaresuno").hidden = true;
    // 
try{
  var total = parseFloat(document.getElementById("total").value) || 0,
  preciovegetariana = parseFloat(document.getElementById("input-vegetariana-precio").value) || 0;

  document.getElementById("total").value = total - preciovegetariana;
}
catch (e) {}


  }
    










    function agregaralpedidovegetarianax() {
      document.getElementById("inputs-vegetariana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-vegetariana").value;
      document.getElementById("input-vegetariana-instrucciones").value= nota;
      document.getElementById("volver-vegetariana-html").hidden = true; 



      


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





    




    function agregaralpedidovegetariana() {
      document.getElementById("inputs-vegetariana").hidden = false;
      document.getElementById("finalizar-pedido-button").hidden = false;
      var nota=document.getElementById("instrucciones-vegetariana").value;
      document.getElementById("input-vegetariana-instrucciones").value= nota;
      document.getElementById("volver-vegetariana-html").hidden = true; 

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



      

    function volvervegetariana() {
      document.getElementById("volver-vegetariana-html").hidden = false; 
    }

    // FIN VEGETARIANA 


    




























