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
