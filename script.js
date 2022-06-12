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
