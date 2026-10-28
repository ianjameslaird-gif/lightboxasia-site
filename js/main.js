document.getElementById('y').textContent=new Date().getFullYear();
const nav=document.querySelector('nav');document.querySelector('.burger').onclick=()=>nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const lb=document.querySelector('.lb'),li=lb.querySelector('img'),lc=lb.querySelector('.lb-count'),gs=[...document.querySelectorAll('.g')];let ci=0,lastFocus=null;
function show(i){ci=(i+gs.length)%gs.length;li.classList.remove('in');li.src=gs[ci].dataset.src;lc.textContent=(ci+1)+' / '+gs.length;li.onload=()=>li.classList.add('in')}
function openLb(i){lastFocus=document.activeElement;lb.hidden=false;document.body.style.overflow='hidden';show(i);requestAnimationFrame(()=>lb.classList.add('open'));lb.querySelector('.lb-x').focus()}
function closeLb(){lb.classList.remove('open');document.body.style.overflow='';setTimeout(()=>{lb.hidden=true;li.removeAttribute('src')},200);if(lastFocus)lastFocus.focus()}
gs.forEach((b,i)=>b.onclick=()=>openLb(i));
lb.onclick=e=>{if(!e.target.closest('.lb-box'))closeLb()};
lb.querySelector('.lb-x').onclick=closeLb;
lb.querySelector('.lb-prev').onclick=()=>show(ci-1);lb.querySelector('.lb-next').onclick=()=>show(ci+1);
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')show(ci-1);if(e.key==='ArrowRight')show(ci+1)});
let sx=null;lb.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{if(sx===null)return;const d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>50)show(ci+(d<0?1:-1))});
document.getElementById('enq').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
const t=`Hi Lightbox Singapore, I'd like to enquire.\nName: ${f.get('name')}\nCompany: ${f.get('company')}\nInterested in: ${f.get('type')} (${f.get('mode')})\nEvent & dates: ${f.get('event')}\nDetails: ${f.get('msg')}`;
window.open('https://wa.me/6593423910?text='+encodeURIComponent(t),'_blank')};

/* neon letter effect on hero headline */
(function(){
const h=document.querySelector('.hero h1')||document.querySelector('h1');if(!h)return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const letters=[];
(function wrap(n){[...n.childNodes].forEach(c=>{
 if(c.nodeType===3){const f=document.createDocumentFragment();
  [...c.textContent].forEach(ch=>{if(ch===' '){f.appendChild(document.createTextNode(' '));return}
   const s=document.createElement('span');s.className='nl';s.textContent=ch;f.appendChild(s);letters.push(s)});
  c.replaceWith(f)}
 else if(c.nodeType===1&&!c.classList.contains('h1s'))wrap(c)})})(h);
const neon=['#ff2bd6','#00f0ff','#39ff14','#fff01f','#ff6a00','#b026ff','#ff3131'];
let k=0;
function hit(x,y){letters.forEach(s=>{const r=s.getBoundingClientRect();
 const dx=x-(r.left+r.width/2),dy=y-(r.top+r.height/2);
 if(Math.hypot(dx,dy)<Math.max(48,r.height*.7)){
  const c=neon[(k++)%neon.length];
  s.style.color=c;s.style.textShadow='0 0 8px '+c+',0 0 22px '+c+',0 0 44px '+c;
  clearTimeout(s._t);s._t=setTimeout(()=>{s.style.color='';s.style.textShadow=''},1100)}})}
h.addEventListener('pointermove',e=>hit(e.clientX,e.clientY));
h.addEventListener('touchmove',e=>{const t=e.touches[0];hit(t.clientX,t.clientY)},{passive:true});
})();
