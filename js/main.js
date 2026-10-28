document.getElementById('y').textContent=new Date().getFullYear();
const nav=document.querySelector('nav');document.querySelector('.burger').onclick=()=>nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const lb=document.querySelector('.lb'),li=lb.querySelector('img');
document.querySelectorAll('.g').forEach(b=>b.onclick=()=>{li.src=b.dataset.src;lb.hidden=false});
lb.onclick=e=>{if(e.target!==li)lb.hidden=true};document.onkeydown=e=>{if(e.key==='Escape')lb.hidden=true};
document.getElementById('enq').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
const t=`Hi Lightbox Singapore, I'd like to enquire.\nName: ${f.get('name')}\nCompany: ${f.get('company')}\nInterested in: ${f.get('type')} (${f.get('mode')})\nEvent & dates: ${f.get('event')}\nDetails: ${f.get('msg')}`;
window.open('https://wa.me/6593423910?text='+encodeURIComponent(t),'_blank')};
