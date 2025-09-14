const btn  = document.getElementById('btn-open');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const btn_close = document.getElementById('btn-close')
const modal = document.getElementById('msg-modal')
const btn_modal = document.getElementById('mdl_btn')
const btn_exit = document.getElementById('btn-exit')
const card3 = document.getElementById('card-3')



btn_exit.addEventListener('click', () => {
    const showCard3 = () => {
        if (!card2.classList.contains('d-none')) card2.classList.add('d-none');
        card3.classList.remove('d-none');
        card3.classList.add('card--enter');
        card3.classList.add('bg-light');
        card3.addEventListener('animationend', () => {
            card3.classList.remove('card--enter');
        }, { once: true });
    };
    const onEnd = (e) => {
        if (e.animationName === 'scale-out-left') {
            card2.removeEventListener('animationend', onEnd);
            showCard3();
        }
    };
    card2.addEventListener('animationend', onEnd);
  
    
    // Intento 2 (fallback): por si `animationend` no dispara
    setTimeout(showCard3, 500); // debe ser >= duración de .45s
})

btn.addEventListener('click', () => {
    // Confeti
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.4 } });
    
    btn.disabled = true;
    card1.classList.add('card--exit');
    
    // Función que realmente cambia de tarjetas
    const showCard2 = () => {
        if (!card1.classList.contains('d-none')) card1.classList.add('d-none');
        card2.classList.remove('d-none');
        card2.classList.add('card--enter');
        card2.classList.add('bg-light');
        card2.addEventListener('animationend', () => {
            card2.classList.remove('card--enter');
        }, { once: true });
    };
    
    // Intento 1: esperar el fin de la animación
    const onEnd = (e) => {
        if (e.animationName === 'scale-out-left') {
            card1.removeEventListener('animationend', onEnd);
            showCard2();
        }
    };
    card1.addEventListener('animationend', onEnd);
    
    // Intento 2 (fallback): por si `animationend` no dispara
    setTimeout(showCard2, 500); // debe ser >= duración de .45s
});



// btn_close.addEventListener('click', () => {
    
    
    
//     modal.classList.add('modal-out')

    
// })

// btn_modal.addEventListener('click', () => {
//     if (modal.classList.contains('modal-out')) {
//         modal.classList.remove('modal-out')
//     }
//     modal.classList.add('card--enter')
    

// })
const musica = document.getElementById("bg-music");

document.addEventListener(
  "click",
  () => {
    if (musica.paused) {
      musica.play();
    }
  },
  { once: true }
);