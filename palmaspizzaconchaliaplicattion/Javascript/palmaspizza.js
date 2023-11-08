document.querySelector("#submit").addEventListener("click", e => {e.preventDefault();


  // TOTAL

const total = document.querySelector("#total").value;


// DATOS 
const nombre = document.querySelector("#nombre").value;
const telefono = document.querySelector("#telefono").value;
const formadepago = document.querySelector("#formadepago").value;
const cancelocon = document.querySelector("#cancelocon").value;
const pagacon = document.querySelector("#pagacon").value;
const direccion = document.querySelector("#direccion").value;
const direccionnum = document.querySelector("#direccionnum").value;




// ARMA TU PIZZA
const armatupizzacantidad = document.querySelector("#input-arma-tu-pizza-cantidad").value;
const armatupizzapizza = document.querySelector("#input-arma-tu-pizza-pizza").value;
const armatupizzatamaño = document.querySelector("#input-arma-tu-pizza-tamaño").value;
const armatupizzasalsa = document.querySelector("#input-arma-tu-pizza-salsa").value;
const armatupizzaingredientes = document.querySelector("#input-ingredientes").value;
const textingredientes = document.querySelector("#text-ingredientes").value;
const pizza2 = document.querySelector("#input-pizza-2").value;
const armatupizzasalsa2 = document.querySelector("#2-input-arma-tu-pizza-salsa").value;
const armatupizzaingredientes2 = document.querySelector("#2-input-ingredientes").value;






// PIZZAS 

// ITALIANA 
const italianacantidad = document.querySelector("#input-italiana-cantidad").value;
const italianapizza = document.querySelector("#input-italiana-pizza").value;
const italianatamaño = document.querySelector("#input-italiana-tamaño").value;
const italianamasa = document.querySelector("#input-italiana-masa").value;



// HAWAIANA 
const hawaianacantidad = document.querySelector("#input-hawaiana-cantidad").value;
const hawaianapizza = document.querySelector("#input-hawaiana-pizza").value;
const hawaianatamaño = document.querySelector("#input-hawaiana-tamaño").value;
const hawaianamasa = document.querySelector("#input-hawaiana-masa").value;


//  NAPOLITANA 
const napolitanacantidad = document.querySelector("#input-napolitana-cantidad").value;
const napolitanapizza = document.querySelector("#input-napolitana-pizza").value;
const napolitanatamaño = document.querySelector("#input-napolitana-tamaño").value;
const napolitanamasa = document.querySelector("#input-napolitana-masa").value;




//  SUPER PEPPERONI 
const superpepperonicantidad = document.querySelector("#input-superpepperoni-cantidad").value;
const superpepperonipizza = document.querySelector("#input-superpepperoni-pizza").value;
const superpepperonitamaño = document.querySelector("#input-superpepperoni-tamaño").value;
const superpepperonimasa = document.querySelector("#input-superpepperoni-masa").value;





//  VEGETARIANA 
const vegetarianacantidad = document.querySelector("#input-vegetariana-cantidad").value;
const vegetarianapizza = document.querySelector("#input-vegetariana-pizza").value;
const vegetarianatamaño = document.querySelector("#input-vegetariana-tamaño").value;
const vegetarianamasa = document.querySelector("#input-vegetariana-masa").value;





//  POLLO BBQ 
const pollobbqcantidad = document.querySelector("#input-pollobbq-cantidad").value;
const pollobbqpizza = document.querySelector("#input-pollobbq-pizza").value;
const pollobbqtamaño = document.querySelector("#input-pollobbq-tamaño").value;
const pollobbqmasa = document.querySelector("#input-pollobbq-masa").value;





//  LUCO PIZZA 
const lucopizzacantidad = document.querySelector("#input-lucopizza-cantidad").value;
const lucopizzapizza = document.querySelector("#input-lucopizza-pizza").value;
const lucopizzatamaño = document.querySelector("#input-lucopizza-tamaño").value;
const lucopizzamasa = document.querySelector("#input-lucopizza-masa").value;


//  CHILLIAN 
const chilliancantidad = document.querySelector("#input-chillian-cantidad").value;
const chillianpizza = document.querySelector("#input-chillian-pizza").value;
const chilliantamaño = document.querySelector("#input-chillian-tamaño").value;
const chillianmasa = document.querySelector("#input-chillian-masa").value;

//  CHEESEBURGER
const cheeseburgercantidad = document.querySelector("#input-cheeseburger-cantidad").value;
const cheeseburgerpizza = document.querySelector("#input-cheeseburger-pizza").value;
const cheeseburgertamaño = document.querySelector("#input-cheeseburger-tamaño").value;
const cheeseburgermasa = document.querySelector("#input-cheeseburger-masa").value;





// INSTRUCCIONES


const instruccionesitaliana = document.querySelector("#instrucciones-italiana").value;
const instruccionesnapolitana = document.querySelector("#instrucciones-napolitana").value;
const instruccioneshawaiana = document.querySelector("#instrucciones-hawaiana").value;
const instruccionespollobbq = document.querySelector("#instrucciones-pollobbq").value;
const instruccionescheeseburger = document.querySelector("#instrucciones-cheeseburger").value;
const instruccionesvegetariana = document.querySelector("#instrucciones-vegetariana").value;
const instruccioneschillian = document.querySelector("#instrucciones-chillian").value;
const instruccioneslucopizza = document.querySelector("#instrucciones-lucopizza").value;
const instruccionessuperpepperoni = document.querySelector("#instrucciones-superpepperoni").value;
const resp = document.querySelector("#respuesta");

resp.classList.remove("fail");
resp.classList.remove("send");

const url = `https://api.whatsapp.com/send?phone=56952323555&text=
*🍕==_Palmas Pizza==_🍕*%0A
*👤${nombre}*%0A%0A
*☎️* +56${telefono} %0A%0A
*Forma de Pago:*%0A
*${formadepago}*%0A%0A
${cancelocon} $${pagacon}%0A
---------------------%0A
*🏠* *${direccion} ${direccionnum}*%0A%0A 
"https://www.google.com/maps/dir//*${direccion}%2B${direccionnum}"%0A%0A
--------------------- %0A
🛎️=== *PEDIDO* === 🛎️ %0A*
${italianacantidad} ${italianapizza} ${italianatamaño} ${italianamasa}
${instruccionesitaliana}%0A

${hawaianacantidad} ${hawaianapizza} ${hawaianatamaño} ${hawaianamasa}
${instruccioneshawaiana}%0A

${napolitanacantidad} ${napolitanapizza} ${napolitanatamaño} ${napolitanamasa}
${instruccionesnapolitana}%0A

${superpepperonicantidad} ${superpepperonipizza} ${superpepperonitamaño} ${superpepperonimasa}
${instruccionessuperpepperoni}%0A

${lucopizzacantidad} ${lucopizzapizza} ${lucopizzatamaño} ${lucopizzamasa}
${instruccioneslucopizza}%0A

${vegetarianacantidad} ${vegetarianapizza} ${vegetarianatamaño} ${vegetarianamasa}
${instruccionesvegetariana}%0A

${chilliancantidad} ${chillianpizza} ${chilliantamaño} ${chillianmasa}
${instruccioneschillian}%0A

${cheeseburgercantidad} ${cheeseburgerpizza} ${cheeseburgertamaño} ${cheeseburgermasa}
${instruccionescheeseburger}%0A

${pollobbqcantidad} ${pollobbqpizza} ${pollobbqtamaño} ${pollobbqmasa}
${instruccionespollobbq}%0A*

${armatupizzacantidad} ${armatupizzapizza} ${armatupizzatamaño} ${armatupizzasalsa}%0A
${textingredientes}%0A
${armatupizzaingredientes}
${pizza2}
${armatupizzasalsa2}%0A
${armatupizzaingredientes2}
🛎️======FIN======🛎️
🪙 *Total:* _$${total}_%0A%0A
*Envía Este Mensaje ➡️*`


if (nombre === "" || direccion === "" || formadepago === "" || telefono === "") {
resp.classList.add("fail");
resp.innerHTML = `Parece que faltan algunos datos; `;
return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = ` Pedido de ${nombre} ENVIADO`; 

window.open(url);
});


function activarBotones() {
  var botones = document.querySelectorAll(".boton-activo");
  for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
      var total = document.getElementById("total");
      total.value = parseInt(total.value) + 1000;
    }
  }
}




function sumaring() {
  document.getElementById('cantidading').value++
  var cantidad = document.getElementById("cantidading").value;
  if (cantidad == 3) {
    document.getElementById("more-ing").hidden = false;
  }
}


function restaring2(){
  document.getElementById('2-cantidading').value--
}



function sumaring2() {
  document.getElementById('2-cantidading').value++
  var cantidad = document.getElementById("2-cantidading").value;
  if (cantidad == 3) {
    document.getElementById("2-more-ing").hidden = false;
  }
}


function restaring(){
  document.getElementById('cantidading').value--
}






telefono.addEventListener("keyup",e=>{
  let string = e.target.value
  e.target.value = string.split("+").join("");
  e.target.value = string.split("56").join("");
  e.target.value = string.split("569").join("9");
})





