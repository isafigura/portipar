const imagens = [
  "https://www.pixartprinting.it/blog/wp-content/uploads/2021/06/1_Mona_Lisa_300ppi.jpg",
  "https://www.pixartprinting.it/blog/wp-content/uploads/2021/06/6_Bacco_jpg0.jpg",
  "https://static.wixstatic.com/media/d61ae6_a9f68cc2a5a04ee0abf1ad39460c0745~mv2.jpg/v1/fill/w_438,h_553,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d61ae6_a9f68cc2a5a04ee0abf1ad39460c0745~mv2.jpg"
];

let cartas = [];
let primeiraCarta = null;
let podeClicar = true;
let pontos = 0;


function iniciarJogo() {
  const todasImagens = imagens.concat(imagens); 
  embaralhar(todasImagens); 
  mostrarCartas();
}


function embaralhar(lista) {
  cartas = lista.sort(() => Math.random() - 0.5).map((img, i) => {
    return {
      id: i,
      imagem: img,
      virada: false,
      elemento: null
    };
  });
}


function mostrarCartas() {
  const tabuleiro = document.getElementById("tabuleiro");
  tabuleiro.innerHTML = "";

  cartas.forEach((carta, i) => {
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/100?text=?";
    img.className = "carta";
    img.onclick = () => virarCarta(i);
    carta.elemento = img;
    tabuleiro.appendChild(img);
  });
}


function virarCarta(indice) {
  if (!podeClicar) return;
  const carta = cartas[indice];
  if (carta.virada) return;

 
  carta.elemento.src = carta.imagem;
  carta.virada = true;

  if (!primeiraCarta) {
    primeiraCarta = carta;
  } else {
    podeClicar = false;

  
    setTimeout(() => {
      if (carta.imagem === primeiraCarta.imagem && carta.id !== primeiraCarta.id) {
        carta.elemento.style.border = "3px solid green";
        primeiraCarta.elemento.style.border = "3px solid green";
        pontos++;
        if (pontos === imagens.length) {
          document.getElementById("resultado").innerText = "Você venceu!";
        }
      } else {
    
        carta.elemento.src = "https://via.placeholder.com/100?text=?";
        primeiraCarta.elemento.src = "https://via.placeholder.com/100?text=?";
        carta.virada = false;
        primeiraCarta.virada = false;
      }

      primeiraCarta = null;
      podeClicar = true;
    }, 1000);
  }
}
window.onload = iniciarJogo;
