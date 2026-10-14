const PILLARS = [
      {
        id: "fuel",
        title: "Fuel (Nutrition)",
        summary: "Adopt a nutrient-dense, Mediterranean-style pattern. Aim for 50% of each plate from vegetables & fruits.",
        actions: [
          "Mission: Power Your Passion — log vegetables/fruits; target ≥ 50% of plate.",
          "Track in the Red eYe Fuel Tracker (journal/app).",
          "Try: Nightclockers Cold Brew, Moonlight Matcha, Red Zone Vitality Blend."
        ],
        tips: [
          "Batch-cook grains/legumes on Sunday; build bowls fast midweek.",
          "Color rule: 3 colors on every plate → better micronutrient coverage.",
          "Hydration primer: drink a glass of water before every meal."
        ]
      },
      {
        id: "form",
        title: "Form (Movement)",
        summary: "≥150–300 min/week moderate cardio + 2–3 strength days. Log ≥30 min movement daily.",
        actions: [
          "Mission: Flow into Form — earn Red Flame Points for consistency.",
          "Strength x2–3/week; walking/elliptical/HIIT to fill aerobic minutes.",
          "Nightclockers Lo‑Fi Ritual: movement cards + playlist for late sessions."
        ],
        tips: [
          "Use micro-sets (1–2 sets) between desk blocks — accumulate volume.",
          "Walk calls: pace while on the phone; log steps automatically.",
          "Pair strength with a fixed song setlist to anchor the habit."
        ]
      },
      {
        id: "flow",
        title: "Flow (Mind + Mood)",
        summary: "Stress management, sleep hygiene, resilience. 5‑minute breathwork daily; streaks earn rewards.",
        actions: [
          "Mission: Control the Flame — do a 5‑minute breath reset before deep work.",
          "Use the Red Zone Blend roller; F.L.O.W. devotional audio nightly.",
          "Weighted blanket + dark room for quicker downshift."
        ],
        tips: [
          "3‑2‑1 sleep rule: no food 3h, no screens 2h, no work 1h before bed.",
          "Swap bright white bulbs after 8pm for warm lighting.",
          "Use a single focus question to enter flow: ‘What would make this 1 block a win?’"
        ]
      },
      {
        id: "fortify",
        title: "Fortify (Recovery & Resilience)",
        summary: "7–9 hours sleep, hydrate, and minimize toxins. Rest to Rise.",
        actions: [
          "Mission: Rest to Rise — log sleep duration & water intake.",
          "Recovery Box: sleep mask, hydration tracker, magnesium sachets.",
          "Wind-down stack: breathwork → journal → lights out."
        ],
        tips: [
          "Anchor wake time (even on weekends) → stabilizes circadian rhythm.",
          "Morning light exposure ≥5–10 min → better energy later.",
          "Electrolyte pinch (salt + lemon) if training hard or in heat."
        ]
      }
    ];

    // Mood configurations for creative, tactical, reflective and physical states.
    const MOODS = [
      {
        id: "spark",
        name: "Creative Spark",
        cues: [
          "Electric Blue LEDs + a Vivid Red pen on desk.",
          "Diffuse citrus (grapefruit / orange).",
          "Open inspiration board; 5–10 min free-write or mind-map.",
          "Play Spark playlist (cinematic / lo‑fi)."
        ]
      },
      {
        id: "grind",
        name: "Tactical Grind",
        cues: [
          "Clear desk; highlight top‑3 tasks in Neon Green.",
          "Peppermint/eucalyptus cue; start Pomodoro 25/5.",
          "Play low‑tempo lo‑fi or 12 Hz alpha wave focus track.",
          "Wear the Red eYe Reminder wristband to ‘lock in’."
        ]
      },
      {
        id: "reflect",
        name: "Reflective Recharge",
        cues: [
          "Warm light or candle; sandalwood/cedar scent.",
          "Read your daily KJV verse; journal 3 wins + 1 intention.",
          "5‑minute breath prayer or box breathing."
        ]
      },
      {
        id: "beast",
        name: "Physical Activation",
        cues: [
          "Hydrate, dynamic warm‑up, cue ‘Beast’ playlist.",
          "Track key lifts / cardio metrics; cool‑down + breathwork.",
          "Log one performance note to close the loop."
        ]
      }
    ];

    // Missions available for daily tracking.
    const MISSIONS = [
      { id: "veg", label: "Veggies & Fruit ≥ 50% plate", points: 5, pillar: "fuel" },
      { id: "mv30", label: "30+ min movement", points: 10, pillar: "form" },
      { id: "breath5", label: "5‑min breathwork", points: 3, pillar: "flow" },
      { id: "sleep", label: "7–9 hrs sleep", points: 7, pillar: "fortify" },
      { id: "water", label: "Hydration goal met", points: 4, pillar: "fortify" }
    ];

    // Product roadmap entries for capsules and campaigns.
    const ROADMAP = [
        { capsule: "Unleash Your Apex", subBrand: "Apex Achievers", timing: "July–August", includes: "Compression Gear, Oil, Red Zone Planner" },
        { capsule: "Red eYe Ritual Kit", subBrand: "Nightclockers", timing: "August–September", includes: "Hoodie, Playlist Card, Scent Ritual" },
        { capsule: "Antidote 2.0", subBrand: "Zombie Killers", timing: "September", includes: "Mission Deck, Survival Patch, Coin" },
        { capsule: "Faith Over Fear", subBrand: "F.L.O.W.", timing: "October", includes: "Scripture Oil, Flow Band, Journal" }
    ];

    // Logo definitions for local assets. Clicking opens the full image.
    const LOGOS = [
      { src: 'assets/img/apex-mark.png',      alt: 'Apex Achievers mark',    caption: 'Apex Achievers — Mark' },
      { src: 'assets/img/apex-wordmark.png',  alt: 'Apex Achievers wordmark',caption: 'Apex Achievers — Wordmark' },
      { src: 'assets/img/nightowl-logo.png',  alt: 'Nightclockers owl',      caption: 'Nightclockers — Owl' },
      { src: 'assets/img/nightowl-type.png',  alt: 'Nightclockers type',     caption: 'Nightclockers — Wordmark' },
      { src: 'assets/img/rec-eye.png',        alt: 'Red eYe Clique eye',     caption: 'Red eYe Clique — Eye' },
      { src: 'assets/img/rec-wordmark.png',   alt: 'Red eYe Clique wordmark',caption: 'Red eYe Clique — Wordmark' }
    ];
    
    // Resources definition
    const RESOURCES = [
      {title:"3-Minute Ramp Timer",href:"./assets/docs/red-zone-ramp-timer.html",note:"3-minute guided activation timer with start, stop and reset"},
      {title:"Daily Red Zone Journal",href:"./assets/docs/daily-red-zone-journal.html",note:"Record energy, focus blocks, wins and recovery"},
      {title:"Weekly Red Zone Checkup",href:"./assets/docs/weekly-red-zone-recap.html",note:"Review stats, friction and next week’s sprint"},
      {title:"Meal Plan Template",href:"./assets/docs/meal-prep-template.html",note:"7-day editable plan · saves locally · printable"},
      {title:"Health Manual",href:"./assets/docs/health-manual.html",note:"Fuel, Form, Flow and Fortify"},
      {title:"Red Zone Readiness Quiz",href:"./assets/docs/red-zone-readiness-quiz.html",note:"16 questions with results and next steps"}
    ];
(function app(){
"use strict";
const qs=(selector,root=document)=>root.querySelector(selector);
const qsa=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
function showModal(title,message){
 const modal=qs("#modal"),body=qs("#modal-content");
 body.replaceChildren();
 const h=document.createElement("h3");h.id="modal-title";h.textContent=title;
 const p=document.createElement("p");p.textContent=message;
 const btn=document.createElement("button");btn.className="btn btn-primary";btn.type="button";btn.textContent="Close";
 btn.addEventListener("click",()=>{modal.hidden=true});
 body.append(h,p,btn);modal.hidden=false;btn.focus();
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")qs("#modal").hidden=true});
qs("#modal").addEventListener("click",e=>{if(e.target.id==="modal")e.currentTarget.hidden=true});
function copyTextToClipboard(str,feedback){
 const fallback=()=>{const area=document.createElement("textarea");area.value=str;area.style.position="fixed";area.style.left="-9999px";document.body.append(area);area.select();let success=false;try{success=document.execCommand("copy")}catch(e){}area.remove();return success};
 if(navigator.clipboard && window.isSecureContext){
   navigator.clipboard.writeText(str).then(()=>{feedback.textContent="Copied to clipboard."},()=>{if(fallback())feedback.textContent="Copied to clipboard.";else showModal("Copy unavailable","Select the ritual text and copy it manually.")});
 }else{
   if(fallback())feedback.textContent="Copied to clipboard.";
   else showModal("Copy unavailable","Browser clipboard access is unavailable.");
 }
}
function todayKey(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function computeSuggestion(energy,focus,stress){
 if(stress!=="calm")return{id:"reflect",rec:"Fortify / Flow"};
 if(energy==="low" && focus!=="physical")return{id:"reflect",rec:"Fortify / Recovery"};
 if(focus==="physical")return{id:"beast",rec:"Form"};
 if(focus==="admin")return{id:"grind",rec:"Flow / Focus"};
 if(focus==="reflective")return{id:"reflect",rec:"Flow / Reflection"};
 return{id:"spark",rec:"Fuel / Flow"};
}
function renderFinder(){
 const inputs=[qs("#energySel"),qs("#focusSel"),qs("#stressSel")];
 const feedback=qs("#copyState");
 function update(){
  const suggestion=computeSuggestion(inputs[0].value,inputs[1].value,inputs[2].value);
  const mood=MOODS.find(m=>m.id===suggestion.id)||MOODS[0];
  qs("#moodName").textContent=mood.name;
  qs("#moodFocus").textContent="Focus: "+suggestion.rec;
  qs("#moodTag").textContent=mood.id.toUpperCase();
  const list=qs("#moodCues");list.replaceChildren();
  mood.cues.forEach((cue,i)=>{
   const row=document.createElement("div");row.className="cue-item";
   const number=document.createElement("span");number.textContent=String(i+1).padStart(2,"0");
   const text=document.createElement("div");text.textContent=cue;
   row.append(number,text);list.append(row);
  });
  qs("#copyRitualBtn").onclick=()=>copyTextToClipboard(mood.name+" — Ritual\n\n"+mood.cues.map((c,i)=>(i+1)+". "+c).join("\n"),feedback);
  feedback.textContent="";
 }
 inputs.forEach(el=>el.addEventListener("change",update));update();
}
function details(title,values){
 const box=document.createElement("details");box.className="home-details";
 const sum=document.createElement("summary");sum.append(document.createTextNode(title+" "));
 const plus=document.createElement("span");plus.setAttribute("aria-hidden","true");plus.textContent="+";sum.append(plus);
 const content=document.createElement("div");content.className="detail-body";
 const list=document.createElement("ul");
 values.forEach(v=>{const li=document.createElement("li");li.textContent=v;list.append(li)});
 content.append(list);box.append(sum,content);return box;
}
function renderPillars(){
 const root=qs("#pillarsGrid");root.replaceChildren();
 PILLARS.forEach((pillar,i)=>{
  const card=document.createElement("article");card.className="pillar-card";
  const meta=document.createElement("div");meta.className="pillar-head";
  const num=document.createElement("span");num.className="section-index";num.textContent=String(i+1).padStart(2,"0")+" / 04";
  const pill=document.createElement("span");pill.className="pillar-pill";pill.textContent=pillar.id.toUpperCase();
  meta.append(num,pill);
  const h=document.createElement("h3");h.textContent=pillar.title;
  const p=document.createElement("p");p.textContent=pillar.summary;
  card.append(meta,h,p,details("Actions & Missions",pillar.actions),details("Quick Tips",pillar.tips));root.append(card);
 });
}
function renderMissions(){
 const root=qs("#missionsList"),key="rec.missions."+todayKey();
 qs("#todayKey").textContent=todayKey();
 let checked={};
 try{checked=JSON.parse(localStorage.getItem(key)||"{}")||{}}catch(e){checked={}}
 function draw(){
  root.replaceChildren();let pts=0;
  MISSIONS.forEach(m=>{
   const label=document.createElement("label");label.className="mission-item"+(checked[m.id]?" is-checked":"");
   const box=document.createElement("input");box.type="checkbox";box.checked=Boolean(checked[m.id]);box.setAttribute("aria-label",m.label);
   const title=document.createElement("span");title.className="mission-item-text";title.textContent=m.label;
   const points=document.createElement("span");points.className="mission-item-points";points.textContent="+"+m.points+" PTS";
   if(box.checked)pts+=m.points;
   box.addEventListener("change",()=>{
    checked[m.id]=box.checked;
    try{localStorage.setItem(key,JSON.stringify(checked))}catch(e){}
    draw();
   });
   label.append(box,title,points);root.append(label);
  });
  qs("#points").textContent=pts;
 }
 qs("#resetBtn").onclick=()=>{
  if(!window.confirm("Clear today's completed missions?"))return;
  checked={};try{localStorage.removeItem(key)}catch(e){}draw();
 };
 draw();
}
const toolCategories=["ACTIVATION / TIMER","REFLECTION / DAILY","REFLECTION / WEEKLY","FUEL / PLANNING","GUIDANCE / FOUNDATIONS","ASSESSMENT / 16 QUESTIONS"];
function renderResources(){
 const root=qs("#resourcesGrid");root.replaceChildren();
 RESOURCES.forEach((item,i)=>{
  const card=document.createElement("a");card.href=item.href;card.className="resource-card";card.setAttribute("aria-label","Open "+item.title);
  const info=document.createElement("div");
  const eyebrow=document.createElement("div");eyebrow.className="resource-overline";eyebrow.textContent=String(i+1).padStart(2,"0")+" / "+toolCategories[i];
  const h=document.createElement("div");h.className="resource-title";h.textContent=item.title;
  const desc=document.createElement("p");desc.className="resource-note";desc.textContent=item.note;
  info.append(eyebrow,h,desc);
  const link=document.createElement("div");link.className="resource-link";link.append(document.createTextNode("OPEN TOOL"));
  const arrow=document.createElement("b");arrow.textContent="↗";arrow.setAttribute("aria-hidden","true");link.append(arrow);
  card.append(info,link);root.append(card);
 });
}
function renderRoadmap(){
 const root=qs("#roadmapGrid");root.replaceChildren();
 ROADMAP.forEach((item,i)=>{
  const card=document.createElement("article");card.className="roadmap-card";
  const label=document.createElement("div");label.className="section-index";label.textContent="CONCEPT "+String(i+1).padStart(2,"0");
  const h=document.createElement("h3");h.textContent=item.capsule;
  const pill=document.createElement("span");pill.className="pillar-pill";pill.textContent=item.subBrand;
  const meta=document.createElement("p");meta.className="roadmap-meta";
  const strong=document.createElement("strong");strong.textContent="Planning window: ";meta.append(strong,document.createTextNode(item.timing));
  const includes=document.createElement("div");includes.className="roadmap-includes";includes.textContent="Proposed products: "+item.includes;
  card.append(label,h,pill,meta,includes);root.append(card);
 });
}
function renderLogos(){
 const root=qs("#logoGrid");root.replaceChildren();
 LOGOS.forEach(item=>{
  const figure=document.createElement("figure");figure.className="logo-card";
  const a=document.createElement("a");a.href=item.src;a.target="_blank";a.rel="noopener noreferrer";a.setAttribute("aria-label","Open full image: "+item.alt);
  const img=document.createElement("img");img.src=item.src;img.alt=item.alt;img.className="logo-img";img.loading="lazy";
  img.addEventListener("error",()=>{figure.style.display="none"});
  a.append(img);
  const caption=document.createElement("figcaption");caption.textContent=item.caption;
  figure.append(a,caption);root.append(figure);
 });
}
function enableNav(){
 const nav=qsa(".nav-scroll a");
 nav.forEach(a=>a.addEventListener("click",()=>{nav.forEach(x=>x.classList.remove("is-active"));a.classList.add("is-active")}));
 if(typeof IntersectionObserver!=="undefined"){
  const observer=new IntersectionObserver(items=>{
   const visible=items.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
   if(visible.length){const hash="#"+visible[0].target.id;nav.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")===hash))}
  },{rootMargin:"-118px 0px -58% 0px",threshold:[0,.1,.25,.5]});
  qsa(".home-section[id]").forEach(section=>observer.observe(section));
 }
}
document.addEventListener("DOMContentLoaded",()=>{
 qs("#year").textContent=new Date().getFullYear();
 renderFinder();renderPillars();renderMissions();renderResources();renderRoadmap();renderLogos();enableNav();
});
})();