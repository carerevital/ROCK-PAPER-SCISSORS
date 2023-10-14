const paper=document.getElementById("paper"),scissors=document.getElementById("scissors"),rock=document.getElementById("rock"),main=document.getElementById("main"),score=document.getElementById("score"),zerar=document.getElementById("zerar"),btnRules=document.getElementById("btnRules"),rules=document.getElementById("rules"),btnFecharPopup=document.getElementById("btnFecharPopup"),body=document.getElementById("body");btnRules.addEventListener("click",()=>{rules.removeAttribute("class","ocultarPopup"),rules.setAttribute("class","popup")}),btnFecharPopup.addEventListener("click",()=>{rules.removeAttribute("class","popup"),rules.setAttribute("class","ocultarPopup")}),zerar.addEventListener("click",()=>{localStorage.setItem("numero",0),score.innerHTML=0});let numeroAtual=parseInt(localStorage.getItem("numero"));score.innerHTML=numeroAtual,paper.addEventListener("click",()=>{if(768<=window.innerWidth);else{for(;main.firstChild;)main.removeChild(main.firstChild);main.classList.remove("image-container"),main.classList.add("caixaCentralStep");console.log(1);const e=document.createElement("div");e.setAttribute("class","alinhamentoCaixaCentral"),main.prepend(e);const t=document.createElement("button");t.setAttribute("class","circle-button1Step"),t.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","textStep10"),n.innerHTML="YOU PICKED",e.appendChild(n);const i=document.createElement("div");i.setAttribute("class","espacoStep1"),main.appendChild(i);const s=document.createElement("div");main.appendChild(s);const r=document.createElement("div");r.setAttribute("class","circuloVazio"),s.appendChild(r);const a=document.createElement("div");a.setAttribute("class","textStep11"),a.innerHTML="THE HOUSE PICKED",s.appendChild(a);const l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,3);if(1==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=0,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button1Step"),e.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button1Step"),n.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button1Step"),a.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`DRAW`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}if(2==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e-=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button2Step"),e.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button1Step"),n.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button2Step"),a.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`YOU LOSE`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes"),reiniciar.addEventListener("click",()=>{location.reload()})},2e3)}if(3==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button3Step"),e.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button1Step"),n.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button3Step"),a.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`YOU WIN`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}}if(768>=window.innerWidth);else{for(;main.firstChild;)main.removeChild(main.firstChild);main.classList.remove("image-container"),main.classList.add("caixaCentralStep");console.log(1);const e=document.createElement("div");e.setAttribute("class","alinhamentoCaixaCentral"),main.prepend(e);const t=document.createElement("div");t.setAttribute("class","textStep10"),t.innerHTML="YOU PICKED",e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button1Step"),n.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,e.appendChild(n);const i=document.createElement("div");i.setAttribute("class","espacoStep1"),main.appendChild(i);const s=document.createElement("div");main.appendChild(s);const r=document.createElement("div");r.setAttribute("class","textStep11"),r.innerHTML="THE HOUSE PICKED",s.appendChild(r);const a=document.createElement("div");a.setAttribute("class","circuloVazio"),s.appendChild(a);const l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,3);if(1==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=0,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button1Step"),e.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="DRAW",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button1Step"),n.setAttribute("class","circle-button1StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}if(2==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e-=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button2Step"),e.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="YOU LOSE",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button2Step"),n.setAttribute("class","circle-button1StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}if(3==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button3Step"),e.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="YOU WIN",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button3Step"),n.setAttribute("class","circle-button1StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}}}),scissors.addEventListener("click",()=>{if(768<=window.innerWidth);else{for(;main.firstChild;)main.removeChild(main.firstChild);console.log(2),main.classList.remove("image-container"),main.classList.add("caixaCentralStep");const e=document.createElement("div");e.setAttribute("class","alinhamentoCaixaCentral"),main.prepend(e);const t=document.createElement("button");t.setAttribute("class","circle-button2Step"),t.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","textStep10"),n.innerHTML="YOU PICKED",e.appendChild(n);const i=document.createElement("div");i.setAttribute("class","espacoStep1"),main.appendChild(i);const s=document.createElement("div");main.appendChild(s);const r=document.createElement("div");r.setAttribute("class","circuloVazio"),s.appendChild(r);const a=document.createElement("div");a.setAttribute("class","textStep11"),a.innerHTML="THE HOUSE PICKED",s.appendChild(a);const l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,3);if(console.log(l),1==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button1Step"),e.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button2Step"),n.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button1Step"),a.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`YOU WIN`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}if(2==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=0,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button2Step"),e.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button2Step"),n.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button2Step"),a.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`DRAW`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}if(3==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e-=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button3Step"),e.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button2Step"),n.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button3Step"),a.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`YOU LOSE`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}}if(768>=window.innerWidth);else{for(;main.firstChild;)main.removeChild(main.firstChild);console.log(2),main.classList.remove("image-container"),main.classList.add("caixaCentralStep");const e=document.createElement("div");e.setAttribute("class","alinhamentoCaixaCentral"),main.prepend(e);const t=document.createElement("div");t.setAttribute("class","textStep10"),t.innerHTML="YOU PICKED",e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button2Step"),n.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,e.appendChild(n);const i=document.createElement("div");i.setAttribute("class","espacoStep1"),main.appendChild(i);const s=document.createElement("div");main.appendChild(s);const r=document.createElement("div");r.setAttribute("class","textStep11"),r.innerHTML="THE HOUSE PICKED",s.appendChild(r);const a=document.createElement("div");a.setAttribute("class","circuloVazio"),s.appendChild(a);const l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,3);if(console.log(l),1==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button1Step"),e.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="YOU WIN",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button2Step"),n.setAttribute("class","circle-button2StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}if(2==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=0,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button2Step"),e.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="DRAW",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button2Step"),n.setAttribute("class","circle-button2StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}if(3==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e-=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button3Step"),e.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="YOU LOSE",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button2Step"),n.setAttribute("class","circle-button2StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}}}),rock.addEventListener("click",()=>{if(768<=window.innerWidth);else{for(;main.firstChild;)main.removeChild(main.firstChild);console.log(3),main.classList.remove("image-container"),main.classList.add("caixaCentralStep");const e=document.createElement("div");e.setAttribute("class","alinhamentoCaixaCentral"),main.prepend(e);const t=document.createElement("button");t.setAttribute("class","circle-button3Step"),t.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","textStep10"),n.innerHTML="YOU PICKED",e.appendChild(n);const i=document.createElement("div");i.setAttribute("class","espacoStep1"),main.appendChild(i);const s=document.createElement("div");main.appendChild(s);const r=document.createElement("div");r.setAttribute("class","circuloVazio"),s.appendChild(r);const a=document.createElement("div");a.setAttribute("class","textStep11"),a.innerHTML="THE HOUSE PICKED",s.appendChild(a);const l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,3);if(1==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e-=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button1Step"),e.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button3Step"),n.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button1Step"),a.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`YOU LOSE`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}if(2==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button2Step"),e.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button3Step"),n.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button2Step"),a.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`YOU WIN`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}if(3==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=0,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);setTimeout(function(){s.removeChild(r);const e=document.createElement("button");e.setAttribute("class","circle-button3Step"),e.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,s.prepend(e)},1e3),setTimeout(function(){for(;main.firstChild;)main.removeChild(main.firstChild);main.setAttribute("class","caixaCentralStepRes");const e=document.createElement("div");e.setAttribute("class","buttonRes"),main.prepend(e);const t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button3Step"),n.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,t.prepend(n);const i=document.createElement("div");i.setAttribute("class","textStep10"),i.innerHTML=`YOU PICKED`,t.appendChild(i);const s=document.createElement("div");s.setAttribute("class","espacoRes"),e.appendChild(s);const r=document.createElement("div");e.appendChild(r);const a=document.createElement("button");a.setAttribute("class","circle-button3Step"),a.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","textStep11"),l.innerHTML=`THE HOUSE PICKED`,r.appendChild(l);const d=document.createElement("div");d.setAttribute("class","espacoStep1Res"),main.appendChild(d);const c=document.createElement("div");c.setAttribute("class","textResRes"),c.innerHTML=`DRAW`,d.appendChild(c);const p=document.createElement("button");p.setAttribute("class","botaoResRes"),p.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`,p.setAttribute("id","reiniciar"),d.appendChild(p),btnRules.setAttribute("class","caixaRulesRes");const u=document.getElementById("reiniciar");u.addEventListener("click",()=>{location.reload()})},2e3)}}if(768>=window.innerWidth);else{for(;main.firstChild;)main.removeChild(main.firstChild);console.log(3),main.classList.remove("image-container"),main.classList.add("caixaCentralStep");const e=document.createElement("div");e.setAttribute("class","alinhamentoCaixaCentral"),main.prepend(e);const t=document.createElement("div");t.setAttribute("class","textStep10"),t.innerHTML="YOU PICKED",e.appendChild(t);const n=document.createElement("button");n.setAttribute("class","circle-button3Step"),n.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,e.appendChild(n);const i=document.createElement("div");i.setAttribute("class","espacoStep1"),main.appendChild(i);const s=document.createElement("div");main.appendChild(s);const r=document.createElement("div");r.setAttribute("class","textStep11"),r.innerHTML="THE HOUSE PICKED",s.appendChild(r);const a=document.createElement("div");a.setAttribute("class","circuloVazio"),s.appendChild(a);const l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(1,3);if(console.log(l),1==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e-=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button1Step"),e.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="YOU LOSE",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button3Step"),n.setAttribute("class","circle-button3StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}if(2==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=1,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button2Step"),e.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="YOU WIN",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button3Step"),n.setAttribute("class","circle-button3StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}if(3==l){if(localStorage.getItem("numero",0)){let e=parseInt(localStorage.getItem("numero"));e+=0,setTimeout(function(){score.innerHTML=e},1e3),localStorage.setItem("numero",e)}else localStorage.setItem("numero",1);i.removeAttribute("class","espacoStep1"),i.setAttribute("class","espacoStep1Res"),setTimeout(function(){s.removeChild(a);const e=document.createElement("button");e.setAttribute("class","circle-button3Step"),e.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`,s.appendChild(e)},1e3),setTimeout(function(){const e=document.createElement("div");e.setAttribute("class","textRes"),e.innerHTML="DRAW",i.appendChild(e);const t=document.createElement("button");t.setAttribute("class","botaoRes"),t.setAttribute("id","reiniciar"),t.innerHTML="PLAY AGAIN",i.appendChild(t);const s=document.createElement("div");s.setAttribute("class","espaceBotaoRes"),t.prepend(s);const r=document.createElement("div");r.setAttribute("class","espaceBotaoRes"),t.appendChild(r),n.removeAttribute("class","circle-button3Step"),n.setAttribute("class","circle-button3StepRes");const a=document.getElementById("reiniciar");a.addEventListener("click",()=>{location.reload()})},2e3)}}});