/* cursor */
const cur=document.getElementById('cur'),curR=document.getElementById('curR');
document.addEventListener('mousemove',e=>{
  cur.style.left=curR.style.left=e.clientX+'px';
  cur.style.top=curR.style.top=e.clientY+'px';
});

/* theme */
let thm='dark';
function toggleThm(){
  thm=thm==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',thm);
  document.getElementById('tBtn').textContent=thm==='dark'?'☀':'☽';
}

/* mobile */
function togMob(){document.getElementById('mobM').classList.toggle('open');}
function closM(){document.getElementById('mobM').classList.remove('open');}

/* translations */
const T={
  fr:{
    n0:'Accueil',n1:'Services',n2:'Galerie',n3:'Atelier',n4:'Contact',
    t0:'Maison de Couture · Marrakech',t1:'Lalla',t2:'Cooture',
    t3:'Haute Couture Marocaine',
    t4:"L'art de la couture marocaine réinventé avec grâce. Chaque pièce naît du fil, du geste et de la mémoire.",
    t5:'Découvrir',t6:'Rendez-vous',
    s0:'Savoir-Faire',s1:"L'excellence à chaque couture",
    s2:"De la première esquisse à la dernière broderie, chaque création porte l'âme de l'artisanat marocain.",
    s1n:'Modèles Sur Mesure',s1d:"Chaque silhouette mérite une création pensée pour elle seule.",
    s2n:'Stylisme & Design',s2d:"Un regard créatif qui tisse la tradition marocaine à la mode contemporaine.",
    s3n:'Modélisme',s3d:"La rigueur technique comme fondation de la beauté.",
    s4n:'Confection Haute Couture',s4d:"Des pièces d'exception entièrement confectionnées à la main.",
    s5n:'Croquis de Mode',s5d:"Des illustrations de mode qui donnent vie aux idées.",
    g0:'Portfolio',g1:'Nos Créations',
    f0:'Tout',f1:'Couture',f2:'Mariée',f3:'Croquis',
    gl1:'Broderie Traditionnelle',gl2:'Robe de Mariée',gl3:'Caftan Revisité',
    gl4:'Collection Sahara',gl5:'Couture de Mariée',gl6:'Luxe Prêt-à-Porter',
    gl7:'Détail de Couture',gl8:'Croquis Atelier',gl9:'Broderie Sfifa',gl10:'Dessin de Mode',
    a0:'Notre Univers',a1:"L'Atelier Lalla Cooture",
    a2:"Née d'une passion profonde pour l'artisanat marocain, Lalla Cooture est un espace de création où héritage et modernité se rencontrent.",
    a3:"Chaque fil raconte une story, chaque broderie honore un patrimoine millénaire, sublimé pour la femme d'aujourd'hui.",
    a4:'Sur Mesure',a5:'Haute Couture',a6:"Ans de Création",a7:'Prendre Rendez-vous',
    c0:'Nous Rejoindre',c1:'Créons Ensemble',c2:'Votre vision, notre création',
    c3:'Atelier',c4:'Marrakech, Maroc',c5:'Disponibilité',c6:'Sur rendez-vous · Lundi – Samedi',
    c7:'Suivre sur Instagram',
    f_n:'Nom',f_e:'Email',f_s:'Service Souhaité',f_m:'Message',f_b:'Envoyer',
    fp:'© 2025 Lalla Cooture — Tous droits réservés',
    mq:['Haute Couture','Sur Mesure','Marrakech','Modélisme','Stylisme','Broderie','Élégance','Savoir-Faire']
  },
  en:{
    n0:'Home',n1:'Services',n2:'Gallery',n3:'Atelier',n4:'Contact',
    t0:'Fashion House · Marrakech',t1:'Lalla',t2:'Cooture',
    t3:'Moroccan Haute Couture',
    t4:"Moroccan couture art reimagined with grace. Every piece is born from thread, gesture and memory.",
    t5:'Discover',t6:'Book Now',
    s0:'Expertise',s1:"Excellence in every stitch",
    s2:"From the first sketch to the last embroidery, each creation carries the soul of Moroccan craftsmanship.",
    s1n:'Made to Measure',s1d:"Every silhouette deserves a creation designed for it alone.",
    s2n:'Styling & Design',s2d:"A creative eye weaving Moroccan tradition with contemporary fashion.",
    s3n:'Pattern Making',s3d:"Technical precision as the foundation of beauty.",
    s4n:'Haute Couture',s4d:"Exceptional pieces entirely handcrafted with the noblest materials.",
    s5n:'Fashion Sketches',s5d:"Delicate fashion illustrations that bring ideas to life.",
    g0:'Portfolio',g1:'Our Creations',
    f0:'All',f1:'Couture',f2:'Bridal',f3:'Sketches',
    gl1:'Traditional Embroidery',gl2:'Bridal Gown',gl3:'Modern Caftan',
    gl4:'Sahara Collection',gl5:'Bridal Couture',gl6:'Luxury Ready-to-Wear',
    gl7:'Couture Detail',gl8:'Atelier Sketch',gl9:'Sfifa Embroidery',gl10:'Fashion Drawing',
    a0:'Our World',a1:"The Lalla Cooture Atelier",
    a2:"Born from a deep passion for Moroccan craftsmanship, Lalla Cooture is a creative space where heritage and modernity meet.",
    a3:"Every thread tells a story, every embroidery honours a centuries-old heritage, reimagined for the woman of today.",
    a4:'Bespoke',a5:'Haute Couture',a6:'Years of Art',a7:'Book an Appointment',
    c0:'Get in Touch',c1:'Create Together',c2:'Your vision, our creation',
    c3:'Atelier',c4:'Marrakech, Morocco',c5:'Availability',c6:'By appointment · Mon – Sat',
    c7:'Follow on Instagram',
    f_n:'Name',f_e:'Email',f_p:'Phone',f_s:'Desired Service',f_m:'Message',f_b:'Send',
    fp:'© 2025 Lalla Cooture — All rights reserved',
    mq:['Haute Couture','Bespoke','Marrakech','Pattern Making','Styling','Embroidery','Elegance','Craftsmanship']
  },
  ar:{
    n0:'الرئيسية',n1:'خدماتنا',n2:'المعرض',n3:'الأتيليه',n4:'تواصل',
    t0:'دار الأزياء · مراكش',t1:'لالة',t2:'كوتور',
    t3:'الخياطة المغربية الراقية',
    t4:"فن الخياطة المغربية يُعاد اختراعه بأناقة. كل قطعة تولد من الخيط والإيماءة والذاكرة.",
    t5:'اكتشف',t6:'احجز موعدًا',
    s0:'خبراتنا',s1:"التميز في كل غرزة",
    s2:"من أول رسمة إلى آخر تطريزة، كل إبداع يحمل روح الحرفة المغربية.",
    s1n:'التفصيل على المقاس',s1d:"كل تناسق يستحق تصميمًا خُصِّص له وحده.",
    s2n:'التصميم والأسلوب',s2d:"نظرة إبداعية تنسج التقاليد المغربية مع الموضة الدولية.",
    s3n:'رسم الباترون',s3d:"الدقة التقنية أساس الجمال وقصة مثالية.",
    s4n:'الخياطة الراقية',s4d:"قطع استثنائية مخيوطة يدويًا بالكامل.",
    s5n:'رسوم الأزياء',s5d:"رسوم بخطوط رفيعة تمنح الأفكار حياة.",
    g0:'معرض الأعمال',g1:'إبداعاتنا',
    f0:'الكل',f1:'خياطة',f2:'عروس',f3:'رسوم',
    gl1:'تطريز تقليدي',gl2:'فستان عروس',gl3:'قفطان عصري',
    gl4:'مجموعة الصحراء',gl5:'خياطة العروس',gl6:'أزياء فاخرة',
    gl7:'تفاصيل الخياطة',gl8:'رسمة أتيليه',gl9:'تطريز السفيفة',gl10:'رسم الأزياء',
    a0:'عالمنا',a1:"أتيليه لالة كوتور",
    a2:"وُلد لالة كوتور من شغف عميق بالحرف المغربية، فضاء إبداعي تلتقي فيه الأصالة والحداثة.",
    a3:"كل خيط يحكي قصة، وكل تطريز يُكرِّم إرثًا يمتد لقرون.",
    a4:'على المقاس',a5:'خياطة راقية',a6:'سنوات من الإبداع',a7:'احجز موعدًا',
    c0:'تواصل معنا',c1:'لنبدع معًا',c2:'رؤيتك، إبداعنا',
    c3:'الأتيليه',c4:'مراكش، المغرب',c5:'التوفر',c6:'بموعد مسبق · الاثنين – السبت',
    c7:'تابعنا على إنستغرام',
    f_n:'الاسم',f_e:'البريد الإلكتروني',f_p:'الهاتف',f_s:'الخدمة المطلوبة',f_m:'رسالتك',f_b:'إرسال',
    fp:'© 2025 لالة كوتور — جميع الحقوق محفوظة',
    mq:['خياطة راقية','على المقاس','مراكش','باترون','تصميم','تطريز','أناقة','حرفة']
  }
};

let lang='fr';
function setL(l){
  lang=l;
  const t=T[l];
  document.querySelectorAll('[data-k]').forEach(el=>{
    if(t[el.dataset.k]!==undefined) el.textContent=t[el.dataset.k];
  });
  document.documentElement.lang=l;
  document.body.dir=l==='ar'?'rtl':'ltr';
  ['fr','en','ar'].forEach(x=>document.getElementById('b'+x).classList.toggle('on',x===l));
  buildMq(t.mq);
}

function buildMq(words){
  const el=document.getElementById('mT');
  const chunk=words.map(w=>`<span class="mitem">${w}</span><span class="mdot">✦</span>`).join('');
  el.innerHTML=(chunk+chunk+chunk+chunk);
}

/* gallery filter */
document.querySelectorAll('.flt').forEach(b=>{
  b.addEventListener('click',function(){
    document.querySelectorAll('.flt').forEach(x=>x.classList.remove('on'));
    this.classList.add('on');
    const f=this.dataset.f;
    document.querySelectorAll('.gi').forEach(item=>{
      item.style.display=f==='all'||item.dataset.cat===f?'block':'none';
    });
  });
});

/* lightbox */
function oLb(el){
  document.getElementById('lbImg').src=el.querySelector('img').src;
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow='hidden';
}
function cLb(){
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')cLb();});

/* scroll reveal */
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');});
},{threshold:.08});
document.querySelectorAll('.rv,.rvl').forEach(el=>obs.observe(el));

/* form */
function hdSend(e){
  e.preventDefault();
  const f = e.target;
  const s = f.querySelector('button[type="submit"]');
  const d = document.getElementById('formStatus');
  const o = s.innerHTML;
  
  s.disabled = true;
  s.innerHTML = '<span style="opacity:0.6">...</span>';
  
  const dat = new FormData(f);
  
  fetch(f.action, {
    method: "POST",
    body: dat,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    s.disabled = false;
    s.innerHTML = o;
    d.style.display = 'block';
    
    if (res.ok) {
      d.style.color = 'var(--accent)';
      d.innerHTML = `<div style="background:rgba(196,168,130,0.1); border:1px solid var(--accent); padding:15px; border-radius:4px; animation: rise 0.4s ease;">
        <span style="font-size:20px; vertical-align:middle; margin-right:10px;">✧</span>
        ${lang === 'ar' ? 'تم الإرسال بنجاح! سنتصل بك قريباً.' : (lang === 'en' ? 'Sent successfully! We will contact you soon.' : 'Envoyé avec succès ! Nous vous contacterons bientôt.')}
      </div>`;
      f.reset();
      setTimeout(() => d.style.display = 'none', 6000);
    } else {
      throw new Error();
    }
  })
  .catch(err => {
    s.disabled = false;
    s.innerHTML = o;
    d.style.display = 'block';
    d.style.color = '#e74c3c';
    d.innerHTML = `<div style="background:rgba(231,76,60,0.1); border:1px solid #e74c3c; padding:15px; border-radius:4px; animation: rise 0.4s ease;">
        <span style="font-size:20px; vertical-align:middle; margin-right:10px;">✕</span>
        ${lang === 'ar' ? 'حدث خطأ، حاول مرة أخرى.' : (lang === 'en' ? 'Error, please try again.' : 'Erreur, veuillez réessayer.')}
      </div>`;
  });
}

/* init */
document.addEventListener('DOMContentLoaded', () => {
    setL('fr');
    buildMq(T.fr.mq);
});
