/* ==========================================
   Makrahat Darul Quran Islamia Madrasa
   File : script.js
   Version : 1.0
========================================== */

/* =========================
   Smooth Scroll
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/* =========================
   Sticky Header
========================= */

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/* =========================
   Counter Animation
========================= */

const counters=document.querySelectorAll(".counter-box h2");

const speed=150;

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.innerText.replace(/\D/g,'');

const count=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/speed);

if(count<target){

const newCount=count+increment;

counter.setAttribute("data-count",newCount);

counter.innerText=newCount+"+";

setTimeout(updateCounter,20);

}else{

counter.innerText=target+"+";

}

};

updateCounter();

});


/* =========================
   Scroll Animation
========================= */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});


/* =========================
   Back To Top Button
========================= */

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* =========================
   Dark Mode
========================= */

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="darkModeBtn";

document.body.appendChild(darkBtn);

darkBtn.onclick=function(){

document.body.classList.toggle("dark-mode");

};


/* =========================
   Image Slider
========================= */

const slides=document.querySelectorAll(".gallery-grid img");

let currentSlide=0;

function autoSlider(){

slides.forEach(img=>{

img.style.display="none";

});

currentSlide++;

if(currentSlide>slides.length){

currentSlide=1;

}

slides[currentSlide-1].style.display="block";

setTimeout(autoSlider,3000);

}

if(slides.length>0){

autoSlider();

}


/* =========================
   Gallery Zoom
========================= */

slides.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.alignItems="center";

overlay.style.justifyContent="center";

overlay.style.cursor="pointer";

const photo=document.createElement("img");

photo.src=img.src;

photo.style.maxWidth="90%";

photo.style.maxHeight="90%";

photo.style.borderRadius="10px";

overlay.appendChild(photo);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});


/* =========================
   Loading Animation
========================= */

window.onload=function(){

document.body.classList.add("loaded");

};


/* =========================
   Console Message
========================= */

console.log("Makrahat Darul Quran Islamia Madrasa Website Loaded Successfully");
