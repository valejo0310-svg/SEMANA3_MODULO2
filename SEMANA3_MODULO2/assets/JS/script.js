const abrir = document.getElementById("abrirContacto");
const cerrar = document.getElementById("cerrarContacto");
const modal = document.getElementById("contacto");

abrir.onclick = () => modal.classList.add("activo");
cerrar.onclick = () => modal.classList.remove("activo");

window.onclick = (e) => {
  if (e.target == modal) {
    modal.classList.remove("activo");
  }
}


function hidden_menu(){

    var btn = document.getElementById('menuBtn');
    var menu = document.getElementsByClassName('navegacion');

    if (menu[0].classList.contains('active')){  
        btn.innerText = '≡'
    }else{
        btn.innerText = 'X'
    }
    menu[0].classList.toggle('active')
}