// script: typewriter, envelope, gallery, two YES buttons both trigger confetti + modal, particles
(function(){
  // Typewriter effect
  const text = `Dear Cherry,\n\nI am so sorry for letting my anger take over. You mean everything to me — my safe place, my joy, my favorite person. I was foolish and I regret hurting you. I promise to pause, to listen, to learn, and to love you better every single day. Please forgive me and let me show you how much you mean to me.\n\n— vansh`;
  const el = document.getElementById('type-text');
  const cursor = document.querySelector('.cursor');
  let idx = 0;
  function type(){
    if(idx<=text.length){
      el.textContent = text.slice(0, idx).replace(/\n/g,'\n');
      idx++;
      setTimeout(type, 18 + Math.random()*30);
    } else {
      cursor.style.opacity='0';
    }
  }
  setTimeout(type,600);

  // Envelope open
  const envelope = document.getElementById('envelope');
  envelope.addEventListener('click', ()=>{
    const open = envelope.classList.toggle('open');
    envelope.setAttribute('aria-pressed', open? 'true':'false');
  });
  envelope.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); envelope.click(); } });

  // Memories gallery
  const memBtn = document.getElementById('mem-btn');
  const gallery = document.getElementById('gallery');
  memBtn.addEventListener('click', ()=>{
    gallery.classList.toggle('show');
    memBtn.animate([{transform:'scale(1)'},{transform:'scale(1.04)'},{transform:'scale(1)'}],{duration:350});
  });

  // YES buttons: both trigger same behavior
  const yesButtons = document.querySelectorAll('.yes');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-modal');

  function showModal(){ modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); }
  function hideModal(){ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }

  yesButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      localStorage.setItem('cherry_forgave','true');
      showModal();
      burstHearts();
      // small pop animation
      btn.animate([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:200});
    });
  });

  closeModalBtn.addEventListener('click', ()=>{ hideModal(); });

  // Burst heart confetti (DOM hearts)
  function burstHearts(){
    const count = 44;
    for(let i=0;i<count;i++){
      const span = document.createElement('div');
      span.className='heart';
      span.textContent = ['💖','❤️','🍒'][Math.floor(Math.random()*3)];
      span.style.position='fixed';
      span.style.left = (window.innerWidth/2 + (Math.random()-0.5)*200) + 'px';
      span.style.top = (window.innerHeight/2 + (Math.random()-0.5)*60) + 'px';
      span.style.fontSize = (12 + Math.random()*28) + 'px';
      span.style.zIndex = 9999;
      span.style.pointerEvents='none';
      document.body.appendChild(span);
      const dx = (Math.random()-0.5)*900;
      const dy = -(Math.random()*700 + 120);
      span.animate([
        {transform:'translate(0,0) scale(1)', opacity:1},
        {transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*720}deg) scale(0.9)`, opacity:0}
      ],{duration:900+Math.random()*800,easing:'cubic-bezier(.2,.8,.2,1)'}).onfinish = ()=>span.remove();
    }
  }

  // Floating particle background (🍒 💖 ✨)
  const particleBg = document.querySelector('.particle-bg');
  const EMO = ['🍒','💖','✨'];
  for(let i=0;i<26;i++){
    const d = document.createElement('div');
    d.className='particle';
    d.textContent = EMO[i%EMO.length];
    d.style.left = Math.random()*100 + 'vw';
    d.style.top = (80 + Math.random()*40) + 'vh';
    d.style.fontSize = (12 + Math.random()*28) + 'px';
    d.style.opacity = (0.6 + Math.random()*0.35);
    d.style.animationDuration = (8 + Math.random()*16) + 's';
    d.style.animationDelay = (-Math.random()*20) + 's';
    particleBg.appendChild(d);
  }

  // restore modal if already forgiven
  if(localStorage.getItem('cherry_forgave')){
    setTimeout(()=>{ showModal(); },800);
  }

  // small accessibility: close modal on ESC
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ hideModal(); } });
})();
