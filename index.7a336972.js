const t=document.createElement("button");t.textContent="Back to top",t.classList.add("back-button"),t.classList.add("is-hidden"),document.body.appendChild(t),t.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(async()=>{const t=Math.floor(10*Math.random())+1;currentPage=t,window.fetchImages&&await window.fetchImages()}));
//# sourceMappingURL=index.7a336972.js.map