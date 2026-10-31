/* CINEMALAND : bandeau commun aux quatre pages mondiales. */
(()=>{
 const track=document.getElementById('mondial-tapis-track');
 if(!track)return;
 const load=()=>{
  const all=window.CINEMALAND_CATALOGUE;
  if(!Array.isArray(all)){setTimeout(load,150);return;}
  const items=all.filter(x=>x&&x.poster&&x.title).map(x=>{
   let src=String(x.poster);
   if(src.startsWith('/'))src='https://image.tmdb.org/t/p/w185'+src;
   if(!/^(https?:\/\/|[\w.-]+\.(?:png|jpe?g|webp)(?:\?|$)|\.\/)/i.test(src))return null;
   const isSerie=/s[eé]rie|tv/i.test(String(x.kind||x.type||''));
   return {src,title:String(x.title),year:String(x.year||''),page:isSerie?'series-mondial.html':'films-mondial.html'};
  }).filter(Boolean);
  if(!items.length)return;
  for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]];}
  const selection=items.slice(0,Math.min(35,items.length));
  const add=()=>{for(const item of selection){
   const a=document.createElement('a');a.className='mondial-tapis-item';
   a.href=item.page+'?affiche='+encodeURIComponent(item.title);a.title=item.title+(item.year?' ('+item.year+')':'');
   const img=document.createElement('img');img.src=item.src;img.alt='Affiche : '+item.title;img.loading='lazy';
   a.append(img);track.append(a);
  }};
  add();add();
  // Même distance pour les deux moitiés : animation continue sans saut.
  track.style.animationDuration=Math.max(50,selection.length*3)+'s';
 };
 load();
 // Sur les pages Films/Séries, retrouver le titre cliqué et ouvrir sa fiche.
 const chosen=new URLSearchParams(location.search).get('affiche');
 if(chosen){let n=0;const find=()=>{
  const input=document.getElementById('search');
  if(!input){if(++n<35)setTimeout(find,200);return;}
  input.value=chosen;input.dispatchEvent(new Event('input',{bubbles:true}));
  setTimeout(()=>{const cards=[...document.querySelectorAll('.card')];const card=cards.find(c=>c.querySelector('.card-title')?.textContent.trim().toLocaleLowerCase('fr')===chosen.toLocaleLowerCase('fr'));
   const poster=card?.querySelector('.poster');if(poster)poster.click();else card?.scrollIntoView({block:'center'});
  },250);
 };setTimeout(find,250);}
})();