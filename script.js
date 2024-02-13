const botones = document.getElementsByName("boton");
const img_foto = document.getElementById("img_foto");
const h1_mensaje = document.getElementById("h1_mensaje");
const audio = document.getElementById("audio");
audio.volume = 0.01;
audio.currentTime = 5.5;

const fotos = ["./img/2.jpg", "./img/3.jpg", "./img/tite.jpg"];
const mensajes = ["segura?", "povafo", "😭"];
const mensajes_btn = [["bueno ta bien", "muy segura"], ["oki acepto", "que no"]];

let i = 0;

botones.forEach(function (btn) {
    btn.addEventListener("mousedown", cambiarImagen);
})

function deshabilitar() {
    botones.forEach(function (btn) {
        btn.style.display = "none";
    })
}

function cambiarImagen(btn) {
    audio.play();
    if (btn.target.id == 'no') {
        img_foto.src = fotos[i];
        h1_mensaje.innerHTML = mensajes[i];
        if (i < 2) {
            botones[0].innerHTML = mensajes_btn[i][0];
            botones[1].innerHTML = mensajes_btn[i][1];
        } else {
            deshabilitar();
        }
        i++;
    } else if (btn.target.id == 'si') {
        deshabilitar();
        img_foto.src = "./img/feli.gif";
        h1_mensaje.innerHTML = "💖";
    }
}