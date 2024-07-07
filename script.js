const bt = document.getElementById("bt");
const audio = document.getElementById('son');
const botaoJogar = document.getElementById("b1");
const botaoSobre = document.getElementById("b2");
const containerMenu = document.getElementById("container-menu");
const containerJogo = document.getElementById("container-jogo");
const bateria = document.getElementById('bateria');
const abirCameraBTN = document.getElementById("abirCamera");
const fundoJogo = document.getElementById('ccJogo');
const botaoDasCameras = document.getElementById("btnCamera");
const relogio = document.getElementById("relogio")
const cam1BTN = document.getElementById("cam1BTN")
const cam2BTN = document.getElementById("cam2BTN")
const cam3BTN = document.getElementById("cam3BTN")
const cam4BTN = document.getElementById("cam4BTN")
const voltarBTN = document.getElementById('voltarBTN')
const msgVoltar = document.getElementById("venceu");
const containerSobre = document.getElementById("container-sobre");
const fundoJogoCam = document.getElementById("fundoJogoCam");
const jumpScareImg = document.getElementById("jumpScareImg");
const jumpScareSom = document.getElementById("jumpScareSom");

let horario = 0;
let bateriaPorcentagem = 101;
let cenarioAtual = "c1"
let animatronicsAtual = 100;

let jumpScareBonnie = 100;
let jumpScareChica = 100;
let jumpScareFreddy = 100;
//let jumpScare = 100;

// Enabled
bt.style.display = "block";
containerMenu.style.display = "block";
abirCameraBTN.style.display = "block"
jumpScareImg.style.display = "none"
containerSobre.style.display = "none";
fundoJogoCam.style.display = "none";
voltarBTN.style.display = "none"
containerJogo.style.display = "none";
// fim enabled

//tocar musica
bt.addEventListener("click", () => {
  audio.play();
  bt.style.display = "none";
})

voltarBTN.addEventListener("click", () => {
  location.reload();
});

// iniciar game
botaoJogar.addEventListener("click", () => {
  containerMenu.style.display = "none";
  containerJogo.style.display = "block";

  jumpScareChica = 100;
  jumpScareBonnie = 100
  jumpScareFreddy = 100;
  console.log("chica " + jumpScareChica)
  console.log("bonnie " + jumpScareBonnie)
  console.log("freddy " + jumpScareFreddy)
  audio.remove();
})

// sistema se bateria
function sistemaBateria() {
  // sistema para configurar a quantidade de bateria que vai perder 
  if (containerJogo.style.display == "block") {
    bateriaPorcentagem--;
    bateriaPorcentagem--;
    bateria.innerHTML = bateriaPorcentagem + "%";
    bateria.style.color = "#1DEA27";
  }
  if (fundoJogo.src.includes("imagens/c2.png")) {
    bateriaPorcentagem -= 8;
  }
  if (fundoJogo.src.includes("imagens/c3.png")) {
    bateriaPorcentagem -= 5;
  }
  if (fundoJogo.src.includes("imagens/c4.png")) {
    bateriaPorcentagem -= 11;
  }
  if (fundoJogo.src.includes("imagens/c5.png")) {
    bateriaPorcentagem -= 8;
  }

  // confirandi a bateria em cada momento 

  if (bateriaPorcentagem <= 50) {
    bateria.classList.remove("bi-battery-full");
    bateria.classList.add("bi-battery-half");
    bateria.style.color = "#FFE81C"
  }
  if (bateriaPorcentagem <= 10) {
    bateria.classList.add("bi-battery");
    bateria.classList.remove("bi-battery-half");
    bateria.style.color = "red"
  }
  if (bateriaPorcentagem <= 0) {
    bateria.classList.add("bi-battery");
    bateria.classList.remove("bi-battery-half");
    bateria.innerHTML = "0%";
    bateria.style.color = "darkred";
    fundoJogo.src = "imagens/c6.gif";
    botaoDasCameras.style.display = "none"


  }
  // aqui ele ta verificando se a bateria acabou, se acabou ele ira bloquear de abrir a camera, e vai almentar a chence de dar o jumpScare
  if (fundoJogo.src.includes("imagens/c6.gif")) {
    jumpScare -= 8;
    abirCameraBTN.style.display = "none";
    console.log("a bateria acabou");
  }
}
setInterval(sistemaBateria, 2000);

//SISTEMA para abrir e fechar a camera
abirCameraBTN.addEventListener("click", () => {
  if (cenarioAtual == "c1") {
    fundoJogoCam.src = "imagens/c2.png"
    botaoDasCameras.style.display = "block"
    cenarioAtual = "c2"
    console.log("você abriu o menu de câmeras")
    fundoJogoCam.style.display = "block";
    fundoJogo.style.display = "none"


  } else {
    fundoJogo.src = "imagens/c1.gif"
    botaoDasCameras.style.display = "none"
    cenarioAtual = "c1"
    fundoJogoCam.style.display = "none";
    fundoJogo.style.display = "block"
  }
});

// sistema para abri as outras caneras
cam1BTN.addEventListener("click", () => {
  fundoJogoCam.src = "imagens/c2.png"
});
cam2BTN.addEventListener("click", () => {
  fundoJogoCam.src = "imagens/c3.png"
});
cam3BTN.addEventListener("click", () => {
  fundoJogoCam.src = "imagens/c4.png"
});
cam4BTN.addEventListener("click", () => {
  fundoJogoCam.src = "imagens/c5.png"
});

/*let intervaloId
if (containerMenu.style.display == "block") {
  clearInterval(intervaloId)
  jumpScareBonnie = 100;
  jumpScareChica = 100;
  jumpScareFreddy = 100;
}else{
  if(!intervaloId){
    sistemaAnimatronicAtual()
  }
  
}
*/

//===============
function sistemaAnimatronicAtual() {
  animatronicsAtual--;
  
  if(containerMenu.style.diplay == "none"){

  if (animatronicsAtual <= 90) {
    cam1BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c10.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 90) {
    cam2BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c11.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 90) {
    cam3BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c4.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 90) {
    cam4BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c5.png"
      fundoJogo.style.display = "none"
    });
  }

  //=========
  if (animatronicsAtual <= 70) {
    cam1BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c12.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 70) {
    cam2BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c11.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 70) {
    cam3BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c4.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 70) {
    cam4BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c13.png"
      fundoJogo.style.display = "none"
    });
  }

  //=========
  if (animatronicsAtual <= 50) {
    cam1BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c14.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 50) {
    cam2BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c11.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 50) {
    cam3BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c15.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 50) {
    cam4BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c13.png"
      fundoJogo.style.display = "none"
    });
  }

  //=========
  if (animatronicsAtual <= 25) {
    cam1BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c14.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 25) {
    cam2BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c11.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 25) {
    cam3BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c5.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 25) {
    cam4BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c5.png"
      fundoJogo.style.display = "none"
    });
  }

  //=========
  if (animatronicsAtual <= 10) {
    cam1BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c12.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 10) {
    cam2BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c11.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 10) {
    cam3BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c17.png"
      fundoJogo.style.display = "none"
    });
  }

  if (animatronicsAtual <= 10) {
    cam4BTN.addEventListener("click", () => {
      fundoJogoCam.src = "imagens/c5.png"
      fundoJogo.style.display = "none"
    });
  }
}
}
setInterval(sistemaAnimatronicAtual, 500);

// sistema de jumpScare dos animatronics 
function jumpScareAnimatronics() {

  /* cálculos de jumpScare
  bonnie: a mais rapido
  freddy: pacifico mais também agio
  chica: rapida
  
  chica:
  freddy:
  bonnie:
  
  */
  if(containerMenu.style.display == "none"){
  if (fundoJogoCam.src.includes("imagens/c2.png")) {
    jumpScareChica -= 5;
    jumpScareBonnie -= 5;
    jumpScareFreddy -= 5;

  }
  if (fundoJogoCam.src.includes("imagens/c10.png") || fundoJogoCam.src.includes("imagens/c11")) {
    jumpScareChica -= 1;
    jumpScareBonnie -= 10;
    jumpScareFreddy -= 4;

  }
  if (fundoJogoCam.src.includes("imagens/c12.png") || fundoJogoCam.src.includes("imagens/c13")) {
    jumpScareChica -= 10;
    jumpScareBonnie -= 4;
    jumpScareFreddy -= 3;

  }
  if (fundoJogoCam.src.includes("imagens/c14.png") || fundoJogoCam.src.includes("imagens/c15")) {
    jumpScareChica -= 8;
    jumpScareBonnie -= 4;
    jumpScareFreddy -= 10;

  }
  if (fundoJogoCam.src.includes("imagens/c16.png")) {
    jumpScareChica -= 5;
    jumpScareBonnie -= 9;
    jumpScareFreddy -= 6;

  }
  if (fundoJogoCam.src.includes("imagens/c17.png")) {
    jumpScareChica -= 9;
    jumpScareBonnie -= 6;
    jumpScareFreddy -= 2;

  }
  if (fundoJogo.src.includes("imagens/c1.gif")) {
    jumpScareChica -= 10;
    jumpScareBonnie -= 10;
    jumpScareFreddy -= 12;
  }

  if (jumpScareChica <= 0) {
    relogio.style.display = "none"
    bateria.style.display = "none"
    horario = 12;
    bateriaPorcentagem = 100;

    fundoJogo.src = "jumpScareGif/chica.gif";
    fundoJogoCam.style.display = "none";
    fundoJogo.style.display = "block";
    abirCameraBTN.style.display = "none";
    botaoDasCameras.style.display = "none";
    jumpScareSom.play();
    console.log(jumpScareSom);

    setTimeout(function() {
      location.reload();
    }, 5000);

  }

  if (jumpScareBonnie <= 0) {
    relogio.style.display = "none"
    bateria.style.display = "none"
    horario = 12;
    bateriaPorcentagem = 100;

    fundoJogo.src = "jumpScareGif/bonnie.gif";
    fundoJogoCam.style.display = "none";
    fundoJogo.style.display = "block";
    abirCameraBTN.style.display = "none";
    botaoDasCameras.style.display = "none";
    jumpScareSom.play();
    console.log(jumpScareSom);

    setTimeout(function() {
      location.reload();
    }, 5000);

  }
  if (jumpScareFreddy <= 0) {
    relogio.style.display = "none"
    bateria.style.display = "none"
    horario = 12;
    bateriaPorcentagem = 100;

    fundoJogo.src = "jumpScareGif/freddy.gif";
    fundoJogoCam.style.display = "none";
    fundoJogo.style.display = "block";
    abirCameraBTN.style.display = "none";
    botaoDasCameras.style.display = "none";
    jumpScareSom.play();
    console.log(jumpScareSom);

    setTimeout(function() {
      location.reload();
    }, 5000);

  }
}
}
setInterval(jumpScareAnimatronics, 4000);


//sistema de horario
function sistemaAlarme() {
  if (containerJogo.style.display == "block") {
    horario++;
    relogio.innerHTML = horario + ":00";
  }
  if (horario >= 6) {
    relogio.innerHTML = "6:00";
    fundoJogo.src = "imagens/c7.png"

    abirCameraBTN.style.display = "none"
    bateria.style.display = "none"
    botaoDasCameras.style.display = "none"

    relogio.style.top = "100px"
    relogio.style.right = "320px"
    msgVoltar.style.display = "block"

    voltarBTN.style.display = "block"
    jumpScare = 100
    bateria = 100;
  }
}
setInterval(sistemaAlarme, 50000)

botaoSobre.addEventListener("click", () => {
  containerMenu.style.display = "none";
  containerJogo.style.display = "none";
  containerSobre.style.display = "block";
});