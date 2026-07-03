function getAppleMapsQueryFromCard(card){
  if(!card) return 'Asheville NC';
  const id=card.dataset.id;
  const place=Array.isArray(window.places)?window.places.find((item)=>item.id===id):null;
  if(place&&place.mapQuery) return place.mapQuery;
  const title=card.querySelector('h2')?.textContent?.trim()||'Asheville';
  const location=card.querySelector('.detailLine')?.textContent?.replace('Location','')?.trim()||'Asheville NC';
  return `${title} ${location}`;
}

function appleMapsUrl(query){
  return `http://maps.apple.com/?q=${encodeURIComponent(query)}`;
}

function convertMapLinksToAppleMaps(){
  document.querySelectorAll('#places .card').forEach((card)=>{
    const links=Array.from(card.querySelectorAll('.cardActions a.linkBtn'));
    const mapLink=links.find((link)=>{
      const text=link.textContent.trim().toLowerCase();
      const href=link.getAttribute('href')||'';
      return text==='map'||text==='apple maps'||href.includes('google.com/maps')||href.includes('maps.apple.com');
    });

    if(!mapLink) return;

    const query=getAppleMapsQueryFromCard(card);
    mapLink.href=appleMapsUrl(query);
    mapLink.textContent='Apple Maps';
    mapLink.setAttribute('aria-label',`Open ${query} in Apple Maps`);
    mapLink.removeAttribute('target');
    mapLink.removeAttribute('rel');
  });
}

document.addEventListener('click',(event)=>{
  const link=event.target.closest('#places .cardActions a.linkBtn');
  if(!link||link.textContent.trim()!=='Apple Maps') return;
  const card=link.closest('.card');
  const query=getAppleMapsQueryFromCard(card);
  link.href=appleMapsUrl(query);
});

convertMapLinksToAppleMaps();
const appleMapsList=document.getElementById('places');
if(appleMapsList){
  const observer=new MutationObserver(()=>window.requestAnimationFrame(convertMapLinksToAppleMaps));
  observer.observe(appleMapsList,{childList:true,subtree:true});
}
