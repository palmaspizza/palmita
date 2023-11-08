const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});



function borrarformadepago() {
  document.getElementById("formadepago").value = "";
  document.getElementById("pagacon").value = "";
}


function inputtransferencia() {
  document.getElementById("formadepago").value = "📱Transferencia📱";
  document.getElementById("transferencia").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("transferencia").style.color = "#fff"
  document.getElementById("efectivo").style.background = "#fff"
  document.getElementById("efectivo").style.color = "#ff7700"
  document.getElementById("efectivo").style.fontSize = "150%"
}

function inputefectivo() {
  document.getElementById("formadepago").value = "💵Efectivo💵";
  document.getElementById("efectivo").style.background = "linear-gradient(#ff8900, #ff7700, rgb(255, 55, 0))"
  document.getElementById("efectivo").style.color = "#fff"
  document.getElementById("transferencia").style.background = "#fff"
  document.getElementById("transferencia").style.color = "#ff7700"
  document.getElementById("transferencia").style.fontSize = "150%"
}









