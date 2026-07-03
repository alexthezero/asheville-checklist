const places = [
  {
    id: "downtown-asheville",
    name: "Downtown Asheville",
    category: "Downtown",
    time: "2–4 hours",
    cost: "Free to $$$",
    location: "Downtown Asheville",
    summary: "A walkable city center with indie shops, restaurants, galleries, breweries, street performers, Pack Square, and Grove Arcade nearby.",
    details: "Start around Pack Square, wander toward Wall Street and Battery Park Avenue, and build the day around food, coffee, shopping, and people-watching. This is the easiest first stop because it gives you the Asheville feel without needing a strict schedule.",
    tips: "Good first-day activity. Parking garages are usually easier than hunting for street parking.",
    bestFor: "First-timers, food, shopping, rainy days",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Downtown Asheville NC"
  },
  {
    id: "biltmore-estate",
    name: "Biltmore Estate",
    category: "Iconic",
    time: "Half day to full day",
    cost: "$$$",
    location: "1 Lodge Street, Asheville, NC",
    summary: "Historic Vanderbilt estate with Biltmore House, gardens, grounds, Antler Hill Village, dining, shopping, and a winery.",
    details: "This is the big-ticket Asheville attraction. Plan enough time for the house tour, gardens, Antler Hill Village, and the winery. It is best treated as a full experience rather than a quick stop.",
    tips: "Buy tickets ahead, check entry times, and wear comfortable shoes.",
    bestFor: "History, architecture, gardens, couples, family photos",
    source: "https://www.biltmore.com/",
    mapQuery: "Biltmore Estate Asheville NC"
  },
  {
    id: "river-arts-district",
    name: "River Arts District",
    category: "Arts",
    time: "2–5 hours",
    cost: "Free to $$",
    location: "River Arts District, Asheville",
    summary: "A creative neighborhood along the French Broad River with working artists, studios, galleries, murals, workshops, and original art for sale.",
    details: "The River Arts District is ideal for browsing studios, watching artists work, buying local pieces, and grabbing food nearby. It is spread out, so plan around specific corridors like Roberts Street, Artful Way, Clingman Avenue, Depot Street, River Arts Place, and Lyman Street.",
    tips: "Some studios keep individual hours. Check before going if there is a specific artist or gallery you want.",
    bestFor: "Art lovers, unique gifts, casual exploring",
    source: "https://www.riverartsdistrict.com/overview/",
    mapQuery: "River Arts District Asheville NC"
  },
  {
    id: "blue-ridge-parkway",
    name: "Blue Ridge Parkway Drive",
    category: "Outdoors",
    time: "1 hour to full day",
    cost: "Free",
    location: "Blue Ridge Parkway near Asheville",
    summary: "A scenic mountain drive with overlooks, trails, picnic stops, visitor centers, and access to some of the best views near Asheville.",
    details: "Use Asheville as a gateway to the Parkway. Go for a short overlook drive, add a hike, or make it a slower half-day scenic route. Road status can change with weather and recovery work, so verify closures before heading out.",
    tips: "Check current NPS road closures before driving. Bring water, layers, and downloaded maps.",
    bestFor: "Views, photography, scenic drives, easy outdoor time",
    source: "https://www.nps.gov/blri/index.htm",
    mapQuery: "Blue Ridge Parkway Asheville NC"
  },
  {
    id: "blue-ridge-visitor-center",
    name: "Blue Ridge Parkway Visitor Center",
    category: "Outdoors",
    time: "30–60 minutes",
    cost: "Free",
    location: "195 Hemphill Knob Road, Asheville, NC",
    summary: "A useful first stop for Parkway maps, exhibits, local context, road information, and recommendations.",
    details: "Go here before a Parkway drive if you want current conditions, route ideas, and a quick orientation to the region.",
    tips: "Pair it with the Folk Art Center or a short Parkway overlook drive.",
    bestFor: "Planning, maps, low-effort stop",
    source: "https://www.nps.gov/blri/planyourvisit/visitorcenters.htm",
    mapQuery: "Blue Ridge Parkway Visitor Center Asheville NC"
  },
  {
    id: "folk-art-center",
    name: "Folk Art Center",
    category: "Arts",
    time: "1–2 hours",
    cost: "Free to browse",
    location: "Milepost 382, Blue Ridge Parkway",
    summary: "A Parkway stop focused on Appalachian craft, folk art, handmade work, exhibitions, and regional artisans.",
    details: "This is an easy culture stop while driving the Parkway. It is especially good if you want local handmade gifts and a break from outdoor-only activities.",
    tips: "Great add-on if you are already near the Blue Ridge Parkway Visitor Center.",
    bestFor: "Crafts, gifts, Appalachian culture",
    source: "https://www.nps.gov/blri/index.htm",
    mapQuery: "Folk Art Center Asheville NC"
  },
  {
    id: "nc-arboretum",
    name: "The North Carolina Arboretum",
    category: "Outdoors",
    time: "2–4 hours",
    cost: "$",
    location: "20 Frederick Law Olmsted Way, Asheville, NC",
    summary: "Cultivated gardens, bonsai, trails, exhibits, and seasonal events set in the Southern Appalachian Mountains.",
    details: "The Arboretum is a strong choice for an easy nature day without committing to a rugged hike. You can walk gardens, explore trails, visit exhibits, and make it as relaxing or active as you want.",
    tips: "Check the site for hours, parking fees, and trail or construction updates before visiting.",
    bestFor: "Gardens, family walks, easy nature, photos",
    source: "https://www.ncarboretum.org/",
    mapQuery: "The North Carolina Arboretum Asheville NC"
  },
  {
    id: "wnc-nature-center",
    name: "WNC Nature Center",
    category: "Family",
    time: "2–3 hours",
    cost: "$",
    location: "75 Gashes Creek Road, Asheville, NC",
    summary: "A wildlife center focused on Southern Appalachian animals, including black bears, wolves, otters, and red pandas.",
    details: "This is one of the better family-friendly picks in Asheville. It gives you wildlife, walking, and educational stops without being an all-day commitment.",
    tips: "Buy tickets ahead during busy weekends. Check last admission time before going.",
    bestFor: "Kids, animals, easy walking",
    source: "https://wildwnc.org/",
    mapQuery: "WNC Nature Center Asheville NC"
  },
  {
    id: "asheville-art-museum",
    name: "Asheville Art Museum",
    category: "Arts",
    time: "1–2 hours",
    cost: "$",
    location: "2 South Pack Square, Asheville, NC",
    summary: "Downtown museum with exhibitions and programs centered on American art, regional work, and creative culture.",
    details: "A strong indoor option, especially if the weather turns. It pairs well with Pack Square, downtown lunch, coffee, and shopping.",
    tips: "Check current exhibitions and hours before you go.",
    bestFor: "Rainy days, art, downtown itinerary",
    source: "https://www.ashevilleart.org/",
    mapQuery: "Asheville Art Museum Asheville NC"
  },
  {
    id: "asheville-urban-trail",
    name: "Asheville Urban Trail",
    category: "Downtown",
    time: "1–2 hours",
    cost: "Free",
    location: "Downtown Asheville",
    summary: "A self-guided walking route through downtown Asheville history, architecture, public art, and local landmarks.",
    details: "Good if you want structure while walking downtown. It turns Asheville into a casual history scavenger hunt and works well before or after lunch.",
    tips: "Wear comfortable shoes and use it as a loose route, not a rigid tour.",
    bestFor: "Walking, history, free activity",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Asheville Urban Trail Asheville NC"
  },
  {
    id: "grove-arcade",
    name: "Grove Arcade",
    category: "Downtown",
    time: "45–90 minutes",
    cost: "Free to browse",
    location: "1 Page Avenue, Asheville, NC",
    summary: "Historic downtown arcade with shops, food, local goods, and nearby street performance areas.",
    details: "This is a convenient indoor/outdoor downtown stop and pairs well with coffee, bookstore browsing, or lunch.",
    tips: "Good rainy-day filler or quick stop while downtown.",
    bestFor: "Shopping, food, architecture, quick stop",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Grove Arcade Asheville NC"
  },
  {
    id: "south-slope-breweries",
    name: "South Slope Brewery District",
    category: "Food & Drink",
    time: "2–4 hours",
    cost: "$$",
    location: "South Slope, Asheville",
    summary: "Walkable brewery-heavy neighborhood with taprooms, food stops, murals, and a lively evening scene.",
    details: "Best as an adult-focused afternoon or evening plan. Pick two or three stops instead of trying to hit everything.",
    tips: "Use rideshare or walk from downtown if drinking.",
    bestFor: "Breweries, friends, evening plans",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "South Slope Asheville NC breweries"
  },
  {
    id: "lazoom-tour",
    name: "LaZoom Comedy Bus Tour",
    category: "Tours",
    time: "1–2 hours",
    cost: "$$",
    location: "Downtown Asheville",
    summary: "A comedy bus tour mixing Asheville history, weird local flavor, jokes, and sightseeing.",
    details: "Good if you want something memorable that is less serious than a normal city tour. It is a classic Asheville-style activity.",
    tips: "Book ahead for weekends or popular time slots.",
    bestFor: "Couples, groups, first-timers, laughs",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "LaZoom Asheville NC"
  },
  {
    id: "french-broad-greenway",
    name: "French Broad River Greenway",
    category: "Outdoors",
    time: "45 minutes–2 hours",
    cost: "Free",
    location: "French Broad River, Asheville",
    summary: "A casual walking and biking area along the river, good for low-key outdoor time near town.",
    details: "Use this when you want fresh air without a mountain drive. It pairs naturally with the River Arts District or Carrier Park.",
    tips: "Good for strollers, dogs, and relaxed walks.",
    bestFor: "Walking, biking, family, dogs",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "French Broad River Greenway Asheville NC"
  },
  {
    id: "carrier-park",
    name: "Carrier Park",
    category: "Family",
    time: "1–2 hours",
    cost: "Free",
    location: "220 Amboy Road, Asheville, NC",
    summary: "Public park near the French Broad River with open space, walking, biking, playground areas, and casual recreation.",
    details: "A practical family stop when you need outdoor time without paying for another attraction.",
    tips: "Pair with the river greenway or a picnic.",
    bestFor: "Kids, parks, casual exercise",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Carrier Park Asheville NC"
  },
  {
    id: "craggy-gardens",
    name: "Craggy Gardens / Craggy Pinnacle",
    category: "Outdoors",
    time: "2–4 hours",
    cost: "Free",
    location: "Blue Ridge Parkway north of Asheville",
    summary: "Popular Parkway-area mountain views and short hikes, especially known for scenic overlooks and seasonal blooms.",
    details: "This is a great choice if you want mountain views without committing to a long hike. Access depends on Parkway road conditions, so check current closures.",
    tips: "Bring layers. Weather can feel very different from downtown Asheville.",
    bestFor: "Views, hiking, photos",
    source: "https://www.nps.gov/blri/index.htm",
    mapQuery: "Craggy Gardens Asheville NC"
  },
  {
    id: "mount-mitchell",
    name: "Mount Mitchell State Park",
    category: "Outdoors",
    time: "Half day",
    cost: "Free",
    location: "Near Burnsville, NC",
    summary: "Highest peak east of the Mississippi River, reachable as a longer scenic trip from Asheville when roads are open.",
    details: "This is a bigger outdoor outing than an in-town stop. On a clear day, the summit area gives huge mountain views with relatively low walking effort.",
    tips: "Check weather and road access before committing. It can be much colder than Asheville.",
    bestFor: "Big views, road trip, bucket-list stop",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Mount Mitchell State Park NC"
  },
  {
    id: "thomas-wolfe-memorial",
    name: "Thomas Wolfe Memorial",
    category: "History",
    time: "1 hour",
    cost: "$",
    location: "52 North Market Street, Asheville, NC",
    summary: "Historic home and museum connected to Asheville-born author Thomas Wolfe.",
    details: "A compact history stop close to downtown. Good when you want something cultural but not too time-consuming.",
    tips: "Pair with downtown lunch or the Asheville Urban Trail.",
    bestFor: "Literature, history, downtown add-on",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Thomas Wolfe Memorial Asheville NC"
  },
  {
    id: "asheville-pinball-museum",
    name: "Asheville Pinball Museum",
    category: "Family",
    time: "1–2 hours",
    cost: "$$",
    location: "1 Battle Square, Asheville, NC",
    summary: "Hands-on arcade/pinball stop downtown with playable machines and nostalgic indoor fun.",
    details: "This is an easy win for families, gamers, rainy days, or killing time downtown.",
    tips: "Check wait times or capacity during busy weekends.",
    bestFor: "Kids, gamers, rainy days",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Asheville Pinball Museum"
  },
  {
    id: "lexington-glassworks",
    name: "Lexington Glassworks",
    category: "Arts",
    time: "30–60 minutes",
    cost: "Free to browse",
    location: "81 South Lexington Avenue, Asheville, NC",
    summary: "Glassblowing studio and gallery where you may be able to watch artists work and browse handmade glass pieces.",
    details: "A short, memorable downtown arts stop. It is especially good if you want something creative but quick.",
    tips: "Check demonstration availability before building the whole plan around it.",
    bestFor: "Art, handmade gifts, quick stop",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Lexington Glassworks Asheville NC"
  },
  {
    id: "malaprops",
    name: "Malaprop’s Bookstore/Café",
    category: "Downtown",
    time: "30–90 minutes",
    cost: "Free to $$",
    location: "55 Haywood Street, Asheville, NC",
    summary: "Long-running independent bookstore and café in downtown Asheville.",
    details: "Great low-pressure stop for book lovers, gifts, coffee, or a slower moment between bigger activities.",
    tips: "Pair with Grove Arcade or downtown wandering.",
    bestFor: "Books, coffee, rainy day, gifts",
    source: "https://www.exploreasheville.com/article/50-things-to-do-asheville-nc",
    mapQuery: "Malaprop's Bookstore Asheville NC"
  }
];

const STORAGE_KEY = "ashevilleChecklist.v1";
const state = { completed: loadCompleted(), search: "", category: "all" };

const placesEl = document.getElementById("places");
const completedCountEl = document.getElementById("completedCount");
const totalCountEl = document.getElementById("totalCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resetBtn = document.getElementById("resetBtn");
const copyCheckedBtn = document.getElementById("copyCheckedBtn");

function loadCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    console.warn("Could not load checklist state.", error);
    return {};
  }
}

function saveCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completed));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildCategoryOptions() {
  const categories = [...new Set(places.map((place) => place.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function matchesFilters(place) {
  const text = [place.name, place.category, place.location, place.summary, place.details, place.tips, place.bestFor].join(" ").toLowerCase();
  const searchMatch = text.includes(state.search.trim().toLowerCase());
  const categoryMatch = state.category === "all" || place.category === state.category;
  return searchMatch && categoryMatch;
}

function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function badge(text, className = "") {
  return `<span class="badge ${className}">${escapeHtml(text)}</span>`;
}

function render() {
  const filtered = places.filter(matchesFilters);
  const completedTotal = places.filter((place) => state.completed[place.id]).length;
  completedCountEl.textContent = completedTotal;
  totalCountEl.textContent = places.length;

  if (filtered.length === 0) {
    placesEl.innerHTML = `<div class="empty"><h2>No places found</h2><p>Try a different search or category.</p></div>`;
    return;
  }

  placesEl.innerHTML = filtered.map((place) => {
    const checked = Boolean(state.completed[place.id]);
    return `
      <article class="card ${checked ? "done" : ""}" data-id="${escapeHtml(place.id)}">
        <div class="cardTop">
          <input class="check" type="checkbox" aria-label="Mark ${escapeHtml(place.name)} as completed" ${checked ? "checked" : ""} />
          <div>
            <h2>${escapeHtml(place.name)}</h2>
            <div class="badges">
              ${badge(place.category)}
              ${badge(place.time, "blue")}
              ${badge(place.cost, "gold")}
            </div>
          </div>
        </div>
        <p class="summary">${escapeHtml(place.summary)}</p>
        <div class="details">
          <p>${escapeHtml(place.details)}</p>
          <div class="detailLine"><strong>Location</strong>${escapeHtml(place.location)}</div>
          <div class="detailLine"><strong>Best for</strong>${escapeHtml(place.bestFor)}</div>
          <div class="detailLine"><strong>Tip</strong>${escapeHtml(place.tips)}</div>
        </div>
        <div class="cardActions">
          <button class="toggleDetails" type="button">Details</button>
          <a class="linkBtn" href="${mapUrl(place.mapQuery)}" target="_blank" rel="noopener">Map</a>
          <a class="linkBtn" href="${escapeHtml(place.source)}" target="_blank" rel="noopener">Official / info link</a>
        </div>
      </article>
    `;
  }).join("");

  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll(".card").forEach((card) => {
    const id = card.dataset.id;
    const checkbox = card.querySelector(".check");
    const detailButton = card.querySelector(".toggleDetails");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.completed[id] = true;
      else delete state.completed[id];
      saveCompleted();
      render();
    });

    detailButton.addEventListener("click", () => {
      card.classList.toggle("open");
      detailButton.textContent = card.classList.contains("open") ? "Hide details" : "Details";
    });
  });
}

function resetChecks() {
  if (!window.confirm("Reset all checked items on this device?")) return;
  state.completed = {};
  saveCompleted();
  render();
}

async function copyCheckedList() {
  const checked = places.filter((place) => state.completed[place.id]);
  if (checked.length === 0) {
    alert("Nothing is checked yet.");
    return;
  }

  const text = checked.map((place, index) => `${index + 1}. ${place.name} — ${place.location}`).join("\n");
  try {
    await navigator.clipboard.writeText(text);
    alert("Checked list copied.");
  } catch (error) {
    prompt("Copy your checked list:", text);
  }
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  render();
});

resetBtn.addEventListener("click", resetChecks);
copyCheckedBtn.addEventListener("click", copyCheckedList);

buildCategoryOptions();
render();
