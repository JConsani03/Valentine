const botones = document.getElementsByName("boton");
const img_foto = document.getElementById("img_foto"); 
const h1_mensaje = document.getElementById("h1_mensaje");
const audio = document.getElementById("audio");
audio.volume = 0.01;

const fotos = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/tite.jpg"];
const mensajes = ["¿Quieres ser mi valentine? 💌", "segura?", "povafo", "😭"];
h1_mensaje.innerHTML = mensajes[0]; 

let i = 1;

botones.forEach(function(btn){
    btn.addEventListener("mousedown", cambiarImagen);
})

function deshabilitar(){
    botones.forEach(function(btn){
        btn.disabled = true;
    })
}

function cambiarImagen(btn){
    if(i == 1) audio.play();
    if(btn.target.id == 'no'){
        img_foto.src = fotos[i];
        h1_mensaje.innerHTML = mensajes[i];
        i++;
        if(i == 4) deshabilitar();
    } else if(btn.target.id == 'si'){
        deshabilitar();
        img_foto.src = "./img/feli.gif";
        h1_mensaje.innerHTML = "💖";
    }
}