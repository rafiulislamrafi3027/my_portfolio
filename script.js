// Rafiul Islam Rafi – portfolio script
(() => {
const chk='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
const projects=[
 {f:['ai'],cat:'AI / ML · Thesis',st:['Completed','vi'],cv:'plate',t:'Vehicle License Plate Detection and Recognition',d:'An end-to-end system that finds a vehicle\'s license plate in an image and reads its number.',p:['YOLO11s locates the plate; a CRNN + CTC model reads the characters (OCR).','Combined and preprocessed two datasets from Kaggle and Roboflow.','Trained and evaluated both models on Kaggle, with a full thesis report.'],s:['Python','YOLO11s','CRNN + CTC','Kaggle','Roboflow']},
 {f:['ai'],cat:'AI / ML · Health',st:['In progress','on'],cv:'ear',t:'Deep Learning for Otoscopic Image Analysis',d:'Developing deep learning models in Python to analyze otoscopic (ear) medical images.',p:[],s:['Python','Deep Learning','Medical Imaging']},
 {f:['fe','be'],cat:'Full-Stack',st:['Completed','vi'],t:'CampaignHub – Campaign Management System',d:'A full-stack web app for managing social welfare campaigns. I built both the frontend (HTML, CSS, JavaScript) and the backend (Node.js, Express.js, MongoDB).',p:['Role-based dashboards for managers and admins, with campaign cards, status chips and filter tabs.','Campaign workflow: draft, admin approval, active, completion review and completed.','REST API with data models for users, campaigns, tasks, expenses, applications and AI logs.','Secure login with JWT and bcrypt, an admin seeding script, CORS and dotenv configuration.'],s:['HTML','CSS','JavaScript','Node.js','Express.js','MongoDB','JWT']},
 {f:['fe'],cat:'Frontend',st:['Completed','vi'],cv:'web',t:'Figma to Website Conversion',d:'Turned Figma UI designs into pixel-perfect, fully responsive web pages.',p:['Matched layouts, typography, colors and spacing to the original designs.','Added interactive UI elements and tested across browsers.'],s:['HTML','CSS','Tailwind CSS','JavaScript'],l:'https://github.com/rafiulislamrafi3027/b14-web-dev-portfolio'}
];
const filters=[['all','All'],['ai','AI / ML'],['be','Backend'],['fe','Frontend']];
const tabs=document.getElementById('tabs'),grid=document.getElementById('grid');
tabs.innerHTML=filters.map((f,i)=>`<button class="tab${i?'':' on'}" role="tab" aria-selected="${!i}" data-f="${f[0]}">${f[1]} <em>${f[0]==='all'?projects.length:projects.filter(p=>p.f.includes(f[0])).length}</em></button>`).join('');
grid.innerHTML=projects.map(p=>`<article class="pj card" data-f="${p.f.join(' ')}"><div class="pb"><div class="ptag"><span class="cat">${p.cat}</span><span class="chip ${p.st[1]}"><i></i>${p.st[0]}</span></div><h3>${p.t}</h3><p>${p.d}</p>${p.p.length?`<ul>${p.p.map(x=>`<li>${chk}<span>${x}</span></li>`).join('')}</ul>`:''}<div class="pills">${p.s.map(x=>`<span>${x}</span>`).join('')}</div>${p.l?`<div class="acts"><a class="btn" href="${p.l}" target="_blank" rel="noopener">View code on GitHub ↗</a></div>`:''}</div></article>`).join('');
tabs.addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;
 tabs.querySelectorAll('.tab').forEach(t=>{t.classList.toggle('on',t===b);t.setAttribute('aria-selected',t===b)});
 grid.querySelectorAll('.pj').forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.f.split(' ').includes(b.dataset.f)))});

const ic={
 fe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>',
 be:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
 ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><path d="M7 6.8 10.2 11M7 17.2l3.2-4.2M14 12h3"/></svg>',
 tl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.8-.6-.6-2.8z"/></svg>'
};
const skills=[
 {t:'Frontend',c:'linear-gradient(135deg,#22d3ee,#0ea5e9)',i:'fe',d:'Responsive, pixel-perfect interfaces.',l:['HTML5','CSS3','JavaScript (ES6+)','Tailwind CSS','Responsive Design','Figma to Website']},
 {t:'Backend',c:'linear-gradient(135deg,#818cf8,#6366f1)',i:'be',d:'Secure REST APIs and databases.',l:['Node.js','Express.js','REST APIs','MongoDB','Mongoose','JWT','bcrypt','CORS','dotenv']},
 {t:'AI / ML',c:'linear-gradient(135deg,#a78bfa,#f472b6)',i:'ai',d:'Computer vision and deep learning.',l:['Python','Deep Learning','Computer Vision','YOLO11','OCR (CRNN + CTC)','Medical Image Analysis']},
 {t:'Tools',c:'linear-gradient(135deg,#475569,#334155)',i:'tl',d:'What I use every day.',l:['Git','GitHub','VS Code','Nodemon','Kaggle','Roboflow']}
];
document.getElementById('skill-list').innerHTML=skills.map(s=>`<div class="sk card rv"><div class="ic" style="--c:${s.c}">${ic[s.i]}</div><h3>${s.t}</h3><p>${s.d}</p><div class="pills">${s.l.map(x=>`<span>${x}</span>`).join('')}</div></div>`).join('');
document.getElementById('yr').textContent=new Date().getFullYear();

const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
const roles=['Full-Stack Web Developer','Node.js Backend Developer','Computer Vision Builder'];
const tEl=document.getElementById('typed');
if(still)tEl.textContent=roles[0];else{let r=0,ch=0,del=false;const tk=()=>{const w=roles[r];ch+=del?-1:1;tEl.textContent=w.slice(0,ch);let wt=del?40:75;if(!del&&ch===w.length){del=true;wt=1700}else if(del&&ch===0){del=false;r=(r+1)%roles.length;wt=350}setTimeout(tk,wt)};tk()}

const cp=document.getElementById('copy');
cp.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('rafiulislamrafi7651@gmail.com');cp.textContent='Copied ✓'}catch(e){cp.textContent='Email shown below'}setTimeout(()=>cp.textContent='Copy email',1800)});

const els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window&&!still){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
 els.forEach(e=>io.observe(e));
 const links=[...document.querySelectorAll('.bar nav a')];
 const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
 document.querySelectorAll('section[id]').forEach(s=>so.observe(s));
}else els.forEach(e=>e.classList.add('in'));
})();
