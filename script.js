const msg=`আজকের দিনটা শুধু তোমার জন্মদিন নয়, আমার কাছেও খুব special একটা দিন। কারণ এই দিনেই পৃথিবীতে এসেছিল এমন একজন মানুষ, যে আমার কাছে ভীষণ গুরুত্বপূর্ণ।

তোমার হাসি, তোমার ছোট ছোট কথা, তোমার অভিমান—সবকিছুই আমার কাছে আলাদা। সবসময় হয়তো সুন্দর করে বলতে পারি না, কিন্তু তুমি আমার কাছে সত্যিই অনেক special। 🫶

আজ তোমার জন্য আমার একটাই wish—তুমি সবসময় ভালো থেকো, হাসিখুশি থেকো আর তোমার সব স্বপ্ন পূরণ হোক। ✨

Happy Birthday, Sonu 🎂❤️
Keep smiling, keep shining…
— Golu ❤️`;
function go(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active")}
function openGift(){document.getElementById("giftText").textContent="Opening your surprise... ❤️";setTimeout(()=>go("wish"),900)}
function showMessage(){go("message");let e=document.getElementById("typed"),i=0;e.textContent="";function t(){if(i<msg.length){e.textContent+=msg[i++];setTimeout(t,msg[i-1]==="\n"?180:24)}}t()}
function showFinal(){go("final")}
function loadMusic(input){let f=input.files[0];if(!f)return;let a=document.getElementById("audio");a.src=URL.createObjectURL(f);a.play();document.getElementById("musicBtn").textContent="❚❚"}
function toggleMusic(){let a=document.getElementById("audio"),b=document.getElementById("musicBtn");if(!a.src){alert("আগে একটি audio file যোগ করো ❤️");return}if(a.paused){a.play();b.textContent="❚❚"}else{a.pause();b.textContent="▶"}}