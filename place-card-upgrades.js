const placeImageQueries={"downtown-asheville":"downtown Asheville North Carolina architecture","biltmore-estate":"Biltmore Estate Asheville gardens","river-arts-district":"River Arts District Asheville murals","blue-ridge-parkway":"Blue Ridge Parkway Asheville overlook mountains","blue-ridge-visitor-center":"Blue Ridge Parkway visitor center Asheville mountains","folk-art-center":"Folk Art Center Blue Ridge Parkway Asheville","nc-arboretum":"North Carolina Arboretum Asheville gardens","wnc-nature-center":"WNC Nature Center Asheville animals","asheville-art-museum":"Asheville Art Museum downtown","asheville-urban-trail":"Asheville Urban Trail downtown sculpture","grove-arcade":"Grove Arcade Asheville","south-slope-breweries":"South Slope Asheville breweries","lazoom-tour":"LaZoom Asheville bus tour","french-broad-greenway":"French Broad River Greenway Asheville","carrier-park":"Carrier Park Asheville French Broad River","craggy-gardens":"Craggy Gardens Blue Ridge Parkway","mount-mitchell":"Mount Mitchell State Park North Carolina summit","thomas-wolfe-memorial":"Thomas Wolfe Memorial Asheville","asheville-pinball-museum":"Asheville Pinball Museum arcade","lexington-glassworks":"Lexington Glassworks Asheville glassblowing","malaprops":"Malaprops bookstore Asheville"};

function getPlaceImageUrl(id,name){
  const query=placeImageQueries[id]||`${name} Asheville North Carolina`;
  return `https://source.unsplash.com/featured/900x520/?${encodeURIComponent(query)}`;
}

function upgradePlaceCards(){
  document.querySelectorAll("#places .card").forEach((card)=>{
    const id=card.dataset.id;
    const title=card.querySelector("h2")?.textContent?.trim()||"Asheville";

    if(!card.querySelector(".placeImage")){
      const imageWrap=document.createElement("div");
      imageWrap.className="placeImage";

      const image=document.createElement("img");
      image.src=getPlaceImageUrl(id,title);
      image.alt=title;
      image.loading="lazy";
      image.decoding="async";
      image.addEventListener("error",()=>{
        imageWrap.classList.add("imageError");
        image.remove();
      });

      const fallback=document.createElement("div");
      fallback.className="placeImageFallback";
      fallback.textContent=title;

      imageWrap.appendChild(image);
      imageWrap.appendChild(fallback);
      card.insertBefore(imageWrap,card.firstChild);
    }

    if(!card.querySelector(".checkWrap")){
      const check=card.querySelector(".check");
      if(check){
        const wrap=document.createElement("label");
        wrap.className="checkWrap";
        wrap.title="Mark completed";
        const visual=document.createElement("span");
        visual.className="checkVisual";
        visual.textContent="✓";
        wrap.appendChild(check);
        wrap.appendChild(visual);
        card.insertBefore(wrap,card.querySelector(".cardTop"));
      }
    }
  });
}

upgradePlaceCards();
const placesList=document.getElementById("places");
if(placesList){
  const observer=new MutationObserver(()=>window.requestAnimationFrame(upgradePlaceCards));
  observer.observe(placesList,{childList:true,subtree:true});
}
