function relabelInfoLinks(){document.querySelectorAll('#places .cardActions a.linkBtn').forEach((link)=>{if(link.textContent.trim()==='Official / info link'){link.textContent='Info source';link.setAttribute('aria-label','Open information source');}})}
relabelInfoLinks();
const infoLinkList=document.getElementById('places');
if(infoLinkList){const observer=new MutationObserver(()=>window.requestAnimationFrame(relabelInfoLinks));observer.observe(infoLinkList,{childList:true,subtree:true});}
