// Create floating emojis in the background and handle button clicks
(function(){
  const EMOJI = ["🍒","💖"];
  const container = document.querySelector('.emoji-bg');

  function rnd(min,max){return Math.random()*(max-min)+min}

  // create 20 floating emojis
  for(let i=0;i<20;i++){
    const el = document.createElement('div');
    el.className='emoji';
    el.textContent = EMOJI[i%EMOJI.length];
    // random start position and duration
    el.style.left = `${rnd(2,96)}vw`;
    el.style.top = `${rnd(80,120)}vh`;
    el.style.fontSize = `${rnd(18,44)}px`;
    el.style.opacity = `${rnd(0.6,0.98)}`;
    el.style.animationDuration = `${rnd(8,18)}s`;
    el.style.animationDelay = `${-rnd(0,18)}s`;
    container.appendChild(el);
  }

  // Button handlers
  const result = document.getElementById('result');
  const responses = {
    hug: '🤗 I will give you the warmest hug and a forehead kiss.',
    dinner: '🍽️ I will cook your favorite or order whatever you want.',
    movie: '🎬 Pajamas, snacks, and your pick — I am in.',
    talk: '🗣️ I am ready to listen. No interruptions, no excuses.',
    time: '⏳ I will give you space and be patient — always.',
    instant: '💖 If you say it, I will treasure your forgiveness forever.'
  };

  document.querySelectorAll('.options button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.option;
      result.innerHTML = `<strong>${responses[key]}</strong>`;
      // small confetti-ish pulse
      btn.animate([{transform:'scale(1)'},{transform:'scale(1.06)'}],{duration:120,iterations:1});
    })
  });
})();
