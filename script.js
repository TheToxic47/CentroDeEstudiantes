function mostrarDatos () {
    event.preventDefault();
    var Nombre = document.getElementById("Nombre").value;



    document.getElementById("mensajeAgradecimiento").innerHTML = `
    <p class="turno-asignado" class="col sectionAgradecimiento bg-dark text-light" style="padding-top:20px;text-align:center">Muchas gracias <strong>${Nombre}</strong> por comentar ♥</p> 
    <br>
    <p style="text-align:center">Se lo enviaremos lo mas rapido al diseñador :)</p>

    <hr>
    <p class="texto-asignado" style="text-align:center">Gracias a vos este perro esta contento</p>
    <br>

    <div class="fotodelperro">
    <img src="img/fotoperro2.jpeg" width="50%" height="30%">
    </div>
    <small class="text-muted" style="text-align:center">por cierto se llama tobey</small>`;
    
    
}

document.querySelectorAll(".text-input").forEach((Element)=>{
    Element.addEventListener("blur", (event)=> {
      if (event.target.value != ""){
        event.target.nextElementSibling.classList.add("filled");
      }
      else{
        event.target.nextElementSibling.classList.remove("filled");
      }
    });
  });
  
  function obtenerValor(){
    let inputValue = document.getElementById("domTextElement").value; 
  
    if (inputValue == "eeta2021"){
      alert("Contraseña correcta.")
      let horarios = window.open('', '_blank');
      horarios.location.href = 'http://thetoxic47.github.io/Horarios';
    }
    else{
    alert("Contraseña incorrecta.");
  }
  
  } 
  
  let myDiv = document.getElementById('dimensions12');
            
            myDiv.addEventListener("click", function(e) {
              let mostrarPassword = document.getElementById("horarios1")
              mostrarPassword.classList.replace("top13","top14")
            });
  

