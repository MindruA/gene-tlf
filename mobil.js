  if (window.matchMedia("(max-width: 901px)").matches) {
  console.log("Incarc site-ul de mobil");
  // Toată logica mobil aici

async function incarcaSVG2() {
  // SVG #1 – background principal
  const responseIntrotlf = await fetch("Vectori/iPhone16Pro2.svg");
  const svgIntrotlf = await responseIntrotlf.text();
  document.getElementById("backmaintlf").innerHTML = svgIntrotlf;


  // SVG #1 – background principal
  const responseIntrotlf2 = await fetch("Vectori/curgerepetlf.svg");
  const svgIntrotlf2 = await responseIntrotlf2.text();
  document.getElementById("lichiddesus").innerHTML = svgIntrotlf2;

  const backs=document.getElementById("backmaintlf");
  const curgerepetlf=document.getElementById("curgerepetlf");
  curgerepetlf.style.transform="translateY(-100%)";

   const pf2 = document.getElementById("pf2telefon");
  const pozagene = document.getElementById("pozagene");

  const scrismicro=document.getElementById("Micropigmentationtlf");
  const scrislash=document.getElementById("Lash_extensionstlf");


  // Așteaptă 3 secunde după ce primul SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 1500));
 // SVG #3 – mentiune
  const responseMentiunetlf = await fetch("Vectori/gruptelefonpartea4.svg");
  const svgMentiunetlf = await responseMentiunetlf.text();
  document.getElementById("mentiune2").innerHTML = svgMentiunetlf;

  const cercuri = [
    { id: "cerc1", y: -100, start: "top 85%", end: "top 50%" },
    { id: "cerc2", y: -60, start: "top 90%", end: "top 40%" },
    { id: "cerc3", y: -60, start: "top 95%", end: "top 30%" },
    { id: "cerc4", y: -110, start: "top 92%", end: "top 35%" },
    { id: "cerc5", y: -5, start: "top 88%", end: "top 42%" },
    
    { id: "cerc7", y: -40, start: "top 89%", end: "top 39%" },
  ];

  const trz = document.getElementById("mentiune2");

  cercuri.forEach(({ id, y }) => {
    const elem = document.getElementById(id);
    if (elem) {
      gsap.fromTo(elem,
        { y: 0 },
        {
          y: y,
          scrollTrigger: {
            trigger: trz,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
          ease: "sine.inOut",
          duration: 3,
        }
      );
    }
  });

  // Animația liniei
  const path = document.getElementById("linie");
  if (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }



}
document.addEventListener("DOMContentLoaded", () => {
incarcaSVG2();



 document.documentElement.style.overflow = "hidden";
 document.body.style.overflow = "hidden"; // important și body uneori
 
  
const logo_inceput2 = document.getElementById("logomob");
 const full3=document.getElementById("fullscreen-tlf");

  const halfR2=document.getElementsByClassName("right-half-tlf")[0];
   const halfl2=document.getElementsByClassName("left-half-tlf")[0];
  const linie2=document.getElementsByClassName("line-orizontala")[0];
 const logodiv=document.getElementById("logocentratmob");
const backgroundsvg=document.getElementById("backmaintlf");
const backsvg2=document.getElementById("totsvg2");

   setTimeout(()=>{
     full3.style.display = "block";         // fă-l vizibil
  void full3.offsetWidth;                // forțează browserul să "vadă" starea inițială
  full3.classList.add("apare");          // adaugă clasa cu tranziție
    backgroundsvg.style.backgroundColor="black";
    backsvg2.style.backgroundColor="black";
    // Asta face fade-in
backgroundsvg.classList.add("apare");
document.body.style.backgroundColor = "black";





  },1600);

  setTimeout(()=>{

  halfR2.style.display = "none";
  halfl2.style.display = "none";
  linie2.style.display = "none";
  logo_inceput2.style.display = "none";
  logodiv.style.display = "none";
  },2000);




setTimeout(() => {
  let triggered = false;
  ["touchstart", "touchmove"].forEach(eventType => {
    if (eventType === "touchstart") {
      document.getElementById("pf2telefon")?.addEventListener("touchstart", handler, { once: true });
    } else {
      window.addEventListener("touchmove", handler, { passive: true });
    }
  });

  function handler() {
    if (triggered) return; // ca să nu se repete
    triggered = true;
    document.body.style.backgroundColor = "white";

    const curgere = document.getElementById("curgerepetlf");
    const totsvg3 = document.getElementById("totsvg2");
    totsvg3.style.backgroundColor = "white";


    gsap.to(curgere, {
      y: 0,
      duration: 1.7,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(totsvg3, {
          opacity: 0,
          duration: 0.8,
        });
      }
    });

    setTimeout(() => {
      const logocentratmob = document.getElementById("logocentratmob");
      document.documentElement.style.overflowY = "auto";
       document.body.style.overflowY = "auto";
        const sh1tlf = document.getElementById("sh1_tlf");
  const sh2tlf = document.getElementById("sh2_tlf");
  
      totsvg3.style.display = "none";
      logocentratmob.style.display = "none";
  ScrollTrigger.refresh();
      // 🔥 ANIMAȚIA FRUMOASĂ DE APARIȚIE:
      const header = document.querySelector(".headertlf");
      const logo = document.getElementById("logo_headertlf");
      const meniu = document.getElementById("meniutlf");
      const pf1tlfb=document.getElementById("pf1tlf");
      gsap.fromTo(header, { y: -100, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      });

      gsap.fromTo(logo, { scale: 0, opacity: 0 }, { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        ease: "back.out(1.7)", 
        delay: 0.2 
      });

      gsap.fromTo(meniu, { y: 50, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out", 
        delay: 0.4 
      });
 gsap.fromTo(sh1tlf, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );
   gsap.fromTo(pf1tlfb, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );

  gsap.fromTo(sh2tlf, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.2 }
  );



    }, 1000);
  }

}, 2200);



  gsap.registerPlugin(ScrollTrigger);

const cerculet = document.getElementById("cerculetheadtlf");
const overlay = document.getElementById("overlaymenu");
const closebtn = document.getElementById("closebtn");



const logoMenu = document.getElementById("logo_meniul");
const meniuh1 = document.querySelectorAll("#menulist h1");

cerculet.addEventListener("click", () => {
  overlay.style.display = "flex";

  gsap.fromTo(overlay, { opacity: 0 }, { 
    opacity: 1, 
    duration: 0.8, 
    ease: "power2.out",
     onStart: () => {
      // Resetăm logo și meniul înainte de animație
      gsap.set(logoMenu, { opacity: 0, y: 50,x:-17, });
      gsap.set(meniuh1, { opacity: 0, y: 50 });
    },
    onComplete: () => {
      // Animatie logo overlay
    gsap.to(logoMenu, {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

gsap.to(meniuh1, {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

    }
  });
});

closebtn.addEventListener("click", () => {
  gsap.to(overlay, {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      overlay.style.display = "none";
    }
  });
});

const pozaparalax=document.getElementById("pf1tlf");
gsap.set(pozaparalax, {
y:20,
    scale: 1.1
  });
gsap.to(pozaparalax,{
y:-40,
scale:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#sh2_tlf",
start:"top 50%",

scrub:2,

}



});




gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector("#imaginile");
const items = [
  document.getElementById("primaimg"),
  document.getElementById("adouapoza"),
  document.getElementById("a3apoza")
];

// Poziționez imaginile de la al doilea încolo, în afara ecranului pe verticală
items.forEach((item, index) => {
  if (index !== 0) {
    gsap.set(item, { yPercent: 100 });
  }
});

// Timeline-ul GSAP cu ScrollTrigger
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    pin: true,
   start: "top center-=50",
    end: () => `+=${items.length * 50}%`,
    scrub: 3,
    invalidateOnRefresh: true,
    
  },
  defaults: { ease: "none" }
});

// Animație pentru fiecare imagine
items.forEach((item, index) => {
  timeline.to(item, { scale: 0.8,borderRadius: "5%"
});
  if (items[index + 1]) {
    timeline.to(items[index + 1], { yPercent: 0 }, "<");
  }

    timeline.to(item,{opacity:0});
  
});









});//load


}
