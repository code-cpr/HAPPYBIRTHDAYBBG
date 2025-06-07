const audio = document.getElementById('audio');
const cards = document.querySelectorAll('.flashcard');
const finalMsg = document.getElementById('finalMessage');
let flippedCount = 0;

cards.forEach((card, i) => {
    setTimeout(() => {
        card.style.opacity = '1';
    }, i * 200);

    card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) return;
        card.classList.add('flipped');
        flippedCount++;
        if (flippedCount === cards.length) {
            finalMsg.style.display = 'block';
        }
    });
});

function ensureAudioPlaying() {
  if (audio.paused) {
    audio.play().catch(() => {
      setTimeout(ensureAudioPlaying, 1000); // retry every second
    });
  }
}

enterBtn.addEventListener('click', () => {
  entryScreen.style.display = 'none';
  audio.play().catch(() => {
      console.log("Autoplay blocked. User must interact with the audio.");
  });
});