(function(){
var h=document.querySelector('.hero');
if(h&&!h.querySelector('.gl-rays')){var r=document.createElement('div');r.className='gl-rays';r.setAttribute('aria-hidden','true');h.insertBefore(r,h.firstChild);}
var ss=[].slice.call(document.querySelectorAll('body > section:not(.hero), main > section:not(.hero)'));
ss.forEach(function(s,i){if(i>0){var d=document.createElement('hr');d.className='gl-div';d.setAttribute('aria-hidden','true');s.parentNode.insertBefore(d,s);}});
if(!('IntersectionObserver' in window))return;
document.documentElement.classList.add('gl-js');
var vh=window.innerHeight;
ss.forEach(function(s){var b=s.getBoundingClientRect();if(b.top>vh*0.9)s.classList.add('gl-dim');});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('gl-lit');e.target.classList.remove('gl-dim');io.unobserve(e.target);}});},{rootMargin:'0px 0px -10% 0px',threshold:0.05});
ss.forEach(function(s){if(s.classList.contains('gl-dim'))io.observe(s);});
// safety: anchor jumps / hash nav light everything
function all(){ss.forEach(function(s){s.classList.remove('gl-dim');s.classList.add('gl-lit');});}
window.addEventListener('hashchange',all);
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(a)all();});
})();
