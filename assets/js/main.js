function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// 
const titulo = document.querySelector('h1');
typeWriter(titulo);

window.sr = ScrollReveal({ reset: true });
sr.reveal('#sobre', {duration:2000});

sr.reveal('#tecnologias', {duration:2000});

sr.reveal('#projetos', {duration:3000});
// 

