document.getElementById("btn-confeti").addEventListener("click", () => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.4}
      });
    });