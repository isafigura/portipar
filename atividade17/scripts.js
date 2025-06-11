function filtrarGaleria(categoria) {
    const imagens = document.querySelectorAll('.imagem');

    imagens.forEach(img => {
        if (categoria === 'todas') {
            img.classList.remove('escondida');
        } else {
            if (img.classList.contains(categoria)) {
                img.classList.remove('escondida');
            } else {
                img.classList.add('escondida');
            }
        }
    });
}
