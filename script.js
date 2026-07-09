/* =========================================================
   DATA
   ========================================================= */
const STATUS = {
  ok:   { label:'مقبول',        color:'#34B37B', dim:'rgba(52,179,123,0.15)',  emoji:'🟢' },
  eval: { label:'تحت التقييم',  color:'#FBBC5B', dim:'rgba(251,188,91,0.16)',  emoji:'🟡' },
  none: { label:'غير مرشح',     color:'#5E7570', dim:'rgba(94,117,112,0.18)',  emoji:'⚫' },
};

const TRACKS = [
  { key:'ic',    name:'التعامل مع الشبهات الفكرية', icon:'🧠', sub:'حالات الشبهات والتفكير النقدي' },
  { key:'adhd',  name:'التعامل مع اضطراب فرط الحركة وتشتت الانتباه (ADHD) وطيف التوحد', icon:'🧩', sub:'دعم ذوي فرط الحركة والتوحد' },
  { key:'teen',  name:'التعامل مع المراهقين (13–19 سنة)', icon:'👨‍🎓', sub:'من 13 إلى 19 سنة' },
  { key:'adult', name:'التعامل مع الكبار (30 سنة فأكثر)', icon:'👨', sub:'30 سنة فأكثر' },
  { key:'child', name:'التعامل مع الأطفال المغصوبين', icon:'👶', sub:'المتعلمون الصغار' },
];

const TEACHERS = [
  { name:'محمد خالد',           tracks:{ic:'ok',   adhd:'none', teen:'ok',   adult:'ok',   child:'none'}, langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:['السعودية','العراقية','السورية'] },
  { name:'محمد حسن',            tracks:{ic:'ok',   adhd:'none', teen:'ok',   adult:'ok',   child:'ok'},   langs:[{n:'الألمانية', lvl:'متوسط'}, {n:'الإنجليزية', lvl:'B2'}], dialects:['المصرية'] },
  { name:'محمود سعيد',          tracks:{ic:'ok',   adhd:'none', teen:'ok',   adult:'ok',   child:'none'}, langs:[{n:'الإنجليزية', lvl:'B2'}], dialects:['المصرية'] },
  { name:'محمد حسني',           tracks:{ic:'ok',   adhd:'ok',   teen:'ok',   adult:'ok',   child:'none'}, langs:[{n:'الإنجليزية', lvl:'B2'}], dialects:['المصرية'] },
  { name:'أحمد عبدالعزيز',      tracks:{ic:'eval', adhd:'ok',   teen:'ok',   adult:'ok',   child:'ok'},   langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:['السورية','الأردنية','الكويتية'] },
  { name:'عبدالله البكري',      tracks:{ic:'eval', adhd:'ok',   teen:'none', adult:'none', child:'none'}, langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:['المصرية'] },
  { name:'محمد أحمد',           tracks:{ic:'none', adhd:'ok',   teen:'none', adult:'none', child:'ok'},   langs:[{n:'الإنجليزية', lvl:'A2'}], dialects:['المصرية'] },
  { name:'محمد عماد',           tracks:{ic:'none', adhd:'eval', teen:'none', adult:'none', child:'none'}, langs:[{n:'الإنجليزية', lvl:'A2'}], dialects:['المصرية'] },
  { name:'عبدالرحمن فوزي',      tracks:{ic:'none', adhd:'none', teen:'ok',   adult:'ok',   child:'ok'},   langs:[{n:'الألمانية', lvl:'غير محدد'}], dialects:['المصرية'] },
  { name:'مصطفى مرزوق',         tracks:{ic:'none', adhd:'none', teen:'ok',   adult:'none', child:'none'}, langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:['المصرية'] },
  { name:'محمد عادل',           tracks:{ic:'none', adhd:'none', teen:'ok',   adult:'ok',   child:'ok'},   langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:['الفلسطينية'] },
  { name:'أحمد إبراهيم',        tracks:{ic:'none', adhd:'none', teen:'ok',   adult:'ok',   child:'ok'},   langs:[{n:'الإنجليزية', lvl:'B2'}], dialects:['المصرية'] },
  { name:'عمر عادل',            tracks:{ic:'none', adhd:'none', teen:'eval', adult:'eval', child:'none'}, langs:[{n:'الألمانية', lvl:'B1'}], dialects:['المصرية'] },
  { name:'مروان',               tracks:{ic:'none', adhd:'none', teen:'eval', adult:'none', child:'none'}, langs:[{n:'الألمانية', lvl:'B1'}], dialects:['السورية','الخليجية'] },
  { name:'حامد',                tracks:{ic:'none', adhd:'none', teen:'none', adult:'eval', child:'none'}, langs:[{n:'الإنجليزية', lvl:'A2'}], dialects:['المصرية'] },
  { name:'عبدالرحمن السندويني', tracks:{ic:'none', adhd:'none', teen:'none', adult:'none', child:'ok'},   langs:[{n:'الإنجليزية', lvl:'A2'}], dialects:['السعودية'] },
  { name:'زياد',                tracks:{ic:'none', adhd:'none', teen:'none', adult:'none', child:'eval'}, langs:[{n:'الإسبانية', lvl:'غير محدد'}], dialects:['المصرية'] },
  { name:'محمود احمد',          tracks:{ic:'none', adhd:'none', teen:'none', adult:'none', child:'none'}, langs:[{n:'الإنجليزية', lvl:'A2'}], dialects:['السورية'] },
  { name:'عبدالرحمن طلبة',      tracks:{ic:'eval', adhd:'eval', teen:'eval', adult:'eval', child:'eval'}, langs:[{n:'الإنجليزية', lvl:'B2'}], dialects:[] },
  { name:'محمد سيد',            tracks:{ic:'ok',   adhd:'ok',   teen:'ok',   adult:'ok',   child:'ok'},   langs:[{n:'الإنجليزية', lvl:'B2'}, {n:'التركية', lvl:'متوسط'}], dialects:['المصرية','الشامية'] },
  { name:'إبراهيم عابد',        tracks:{ic:'eval', adhd:'eval', teen:'eval', adult:'eval', child:'eval'}, langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:['الأردنية'] },
  { name:'إبراهيم أحمد',        tracks:{ic:'ok',   adhd:'none', teen:'ok',   adult:'ok',   child:'eval'}, langs:[{n:'التركية', lvl:'متوسط'}], dialects:[] },
  { name:'عبدالله كمال',        tracks:{ic:'eval', adhd:'eval', teen:'eval', adult:'eval', child:'eval'}, langs:[{n:'الإنجليزية', lvl:'B1'}], dialects:[] },
];

/* =========================================================
   HELPERS
   ========================================================= */
const el = (tag, cls, html) => { const d = document.createElement(tag); if(cls) d.className = cls; if(html!==undefined) d.innerHTML = html; return d; };
const initials = name => name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('');
const supportedCount = t => Object.values(t.tracks).filter(s => s==='ok').length;
function dialectWord(n){
  if(n===0) return 'بدون لهجة محددة';
  if(n===1) return 'لهجة واحدة';
  if(n===2) return 'لهجتان';
  return `${n} لهجات`;
}

function groupBy(arr, fn){
  const map = {};
  arr.forEach(item=>{
    const keys = fn(item);
    (Array.isArray(keys)?keys:[keys]).forEach(k=>{
      if(!map[k]) map[k] = [];
      map[k].push(item);
    });
  });
  return map;
}

/* =========================================================
   KPI ROW
   ========================================================= */
const allLangs = new Set(TEACHERS.flatMap(t=>t.langs.map(l=>l.n)));
const allDialects = new Set(TEACHERS.flatMap(t=>t.dialects));

const kpis = [
  { icon:'👥', label:'إجمالي عدد المعلمين', value:TEACHERS.length, trend:'الكادر' },
  { icon:'🧭', label:'عدد المسارات التعليمية', value:TRACKS.length, trend:'نشطة' },
  { icon:'🌍', label:'اللغات الأجنبية المغطاة', value:allLangs.size, trend:'مغطاة' },
  { icon:'🗣️', label:'اللهجات العربية المغطاة', value:allDialects.size, trend:'مغطاة' },
];

const kpiRow = document.getElementById('kpiRow');
kpis.forEach((k,i)=>{
  const card = el('div','glass kpi-card reveal');
  card.style.animationDelay = (i*90)+'ms';
  card.innerHTML = `
    <div class="kpi-top">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-trend">${k.trend}</div>
    </div>
    <div class="kpi-value" data-target="${k.value}">0</div>
    <div class="kpi-label">${k.label}</div>
  `;
  kpiRow.appendChild(card);
});

function animateCount(node, target, duration=1100){
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now-start)/duration);
    const eased = 1 - Math.pow(1-p, 3);
    node.textContent = Math.round(eased*target);
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('.kpi-value').forEach(node=>{
  animateCount(node, parseInt(node.dataset.target,10));
});

/* =========================================================
   STATUS LEGEND (shared)
   ========================================================= */
function renderLegend(container){
  container.innerHTML = '';
  Object.values(STATUS).forEach(s=>{
    const item = el('div','legend-item');
    item.innerHTML = `<span class="legend-dot" style="background:${s.color}"></span>${s.emoji} ${s.label}`;
    container.appendChild(item);
  });
}
renderLegend(document.getElementById('statusLegend'));
renderLegend(document.getElementById('matrixLegend'));

document.getElementById('tracksMeta').textContent = `${TRACKS.length} مسارات · ${TEACHERS.length} معلمين`;
document.getElementById('directoryMeta').textContent = `${TEACHERS.length} ملفًا`;

/* =========================================================
   TRACKS SECTION
   ========================================================= */
const tracksGrid = document.getElementById('tracksGrid');
TRACKS.forEach((track, idx)=>{
  const byStatus = { ok:[], eval:[], none:[] };
  TEACHERS.forEach(t=>{ byStatus[t.tracks[track.key]].push(t); });

  const total = TEACHERS.length;
  const barSegments = ['ok','eval','none'].map(s=>{
    const pct = (byStatus[s].length/total*100).toFixed(1);
    return `<span style="width:${pct}%;background:${STATUS[s].color}"></span>`;
  }).join('');

  const groupsHTML = ['ok','eval','none'].map(s=>{
    const list = byStatus[s];
    const pills = list.length
      ? list.map(t=>`<span class="pill"><span class="sw" style="background:${STATUS[s].color}"></span>${t.name}</span>`).join('')
      : `<span class="pill-empty">لا يوجد معلمون في هذه الفئة</span>`;
    return `
      <div class="track-group">
        <div class="track-group-title">${STATUS[s].emoji} ${STATUS[s].label} <span class="count">(${list.length})</span></div>
        <div class="pill-row">${pills}</div>
      </div>
    `;
  }).join('');

  const card = el('div','glass track-card reveal');
  card.style.animationDelay = (idx*80)+'ms';
  card.innerHTML = `
    <div class="track-head">
      <div class="track-icon">${track.icon}</div>
      <div>
        <h4>${track.name}</h4>
        <div class="track-sub">${track.sub}</div>
      </div>
    </div>
    <div class="track-bar">${barSegments}</div>
    <div class="track-groups">${groupsHTML}</div>
  `;
  tracksGrid.appendChild(card);
});

/* =========================================================
   TEACHER DIRECTORY
   ========================================================= */
const directoryGrid = document.getElementById('directoryGrid');
TEACHERS.forEach((t, idx)=>{
  const langChips = t.langs.map(l=>`<span class="chip lang">${l.n}${l.lvl?` · ${l.lvl}`:''}</span>`).join('');
  const dialectChips = t.dialects.map(d=>`<span class="chip">${d}</span>`).join('');
  const badges = TRACKS.map(tr=>{
    const s = STATUS[t.tracks[tr.key]];
    return `<span class="badge" data-tip="${tr.name}: ${s.label}" style="background:${s.dim};color:${s.color}">${tr.icon}</span>`;
  }).join('');
  const sc = supportedCount(t);

  const card = el('div','glass teacher-card reveal');
  card.style.animationDelay = (Math.min(idx,10)*45)+'ms';
  card.innerHTML = `
    <div class="teacher-top">
      <div class="avatar">${initials(t.name)}</div>
      <div>
        <div class="teacher-name">${t.name}</div>
        <div class="teacher-tags">${t.langs.map(l=>l.n).join('، ')} · ${dialectWord(t.dialects.length)}</div>
      </div>
    </div>
    <div class="teacher-info-row">${langChips}${dialectChips}</div>
    <div class="badge-row">${badges}</div>
    <div class="teacher-footer">
      <span class="support-count">يدعم <b>${sc}</b> من ${TRACKS.length} مسارات</span>
    </div>
  `;
  directoryGrid.appendChild(card);
});

/* =========================================================
   LANGUAGE COVERAGE — grouped by proficiency level
   ========================================================= */
const langGroups = groupBy(TEACHERS.flatMap(t=>t.langs.map(l=>({t, l}))), x=>x.l.n);
const languageGrid = document.getElementById('languageGrid');
languageGrid.classList.add('languages');
const LANG_ORDER = ['الإنجليزية','الألمانية','التركية','الإسبانية'];
const LEVEL_META = {
  'B2':          { dot:'🟢', color:'var(--green)',   desc:'متقدم' },
  'B1':          { dot:'🟡', color:'var(--gold-500)',desc:'متوسط' },
  'A2':          { dot:'⚪', color:'var(--cream-200)',desc:'أساسي' },
  'متوسط':       { dot:'🟡', color:'var(--gold-500)',desc:'' },
  'فوق المتوسط': { dot:'🔷', color:'var(--teal-300)', desc:'' },
  'غير محدد':    { dot:'⚫', color:'var(--text-muted)', desc:'' },
};
function levelMeta(lvl){
  return LEVEL_META[lvl] || { dot:'⚪', color:'var(--text-muted)', desc:'' };
}
const ENGLISH_LEVEL_ORDER = ['B2','B1','A2'];

LANG_ORDER.forEach((lang, idx)=>{
  const entries = langGroups[lang] || [];
  const scarcity = entries.length<=1 ? ['نادر','scarcity-rare'] : entries.length<=3 ? ['محدود','scarcity-mid'] : ['قوي','scarcity-solid'];

  const byLevel = {};
  entries.forEach(e=>{
    const key = e.l.lvl || 'غير محدد';
    if(!byLevel[key]) byLevel[key] = [];
    byLevel[key].push(e.t);
  });
  const levelOrder = lang==='الإنجليزية' ? ENGLISH_LEVEL_ORDER : Object.keys(byLevel);

  const groupsHTML = levelOrder
    .filter(lvl=>byLevel[lvl] && byLevel[lvl].length)
    .map(lvl=>{
      const meta = levelMeta(lvl);
      const list = byLevel[lvl];
      const label = meta.desc ? `${lvl} — ${meta.desc}` : lvl;
      const pills = list.map(t=>`<span class="pill"><span class="sw" style="background:${meta.color}"></span>${t.name}</span>`).join('');
      return `
        <div class="level-group">
          <div class="level-group-title">${meta.dot} ${label} <span class="count">(${list.length})</span></div>
          <div class="pill-row">${pills}</div>
        </div>
      `;
    }).join('');

  const card = el('div','glass coverage-card reveal');
  card.style.animationDelay = (idx*70)+'ms';
  card.innerHTML = `
    <div class="coverage-head">
      <div>
        <h5>${lang}</h5>
        <span class="coverage-scarcity ${scarcity[1]}">${scarcity[0]}</span>
      </div>
      <div class="coverage-count">${entries.length}</div>
    </div>
    <div class="level-groups">${groupsHTML || `<span class="pill-empty">لا يوجد معلمون</span>`}</div>
  `;
  languageGrid.appendChild(card);
});

/* =========================================================
   DIALECT COVERAGE
   ========================================================= */
const dialectGroups = groupBy(TEACHERS.flatMap(t=>t.dialects.map(d=>({t,d}))), x=>x.d);
const DIALECT_ORDER = ['المصرية','السعودية','السورية','الشامية','الأردنية','الفلسطينية','الكويتية','العراقية','الخليجية'];
const dialectGrid = document.getElementById('dialectGrid');
DIALECT_ORDER.forEach((dialect, idx)=>{
  const entries = dialectGroups[dialect] || [];
  const scarcity = entries.length<=1 ? ['نادر','scarcity-rare'] : entries.length<=3 ? ['محدود','scarcity-mid'] : ['قوي','scarcity-solid'];
  const pills = entries.length
    ? entries.map(e=>`<span class="pill"><span class="sw" style="background:var(--gold-500)"></span>${e.t.name}</span>`).join('')
    : `<span class="pill-empty">لا يوجد معلمون</span>`;
  const card = el('div','glass coverage-card reveal');
  card.style.animationDelay = (idx*55)+'ms';
  card.innerHTML = `
    <div class="coverage-head">
      <div>
        <h5>${dialect}</h5>
        <span class="coverage-scarcity ${scarcity[1]}">${scarcity[0]}</span>
      </div>
      <div class="coverage-count">${entries.length}</div>
    </div>
    <div class="pill-row">${pills}</div>
  `;
  dialectGrid.appendChild(card);
});

/* =========================================================
   CAPABILITY MATRIX
   ========================================================= */
const matrixTable = document.getElementById('matrixTable');
const thead = el('thead');
const headRow = el('tr');
headRow.appendChild(el('th','','المعلم'));
TRACKS.forEach(tr=>{
  headRow.appendChild(el('th','',`${tr.icon}<small>${tr.name}</small>`));
});
thead.appendChild(headRow);
matrixTable.appendChild(thead);

const tbody = el('tbody');
TEACHERS.forEach(t=>{
  const row = el('tr');
  row.appendChild(el('td','',t.name));
  TRACKS.forEach(tr=>{
    const s = STATUS[t.tracks[tr.key]];
    const cell = el('td','', `<span class="circle" style="background:${s.color}" title="${tr.name}: ${s.label}"></span>`);
    row.appendChild(cell);
  });
  tbody.appendChild(row);
});
matrixTable.appendChild(tbody);

/* =========================================================
   EXECUTIVE INSIGHTS (auto-generated)
   ========================================================= */
const insightsGrid = document.getElementById('insightsGrid');

const ranked = [...TEACHERS].sort((a,b)=>supportedCount(b)-supportedCount(a));
const topScore = supportedCount(ranked[0]);
const mostVersatile = ranked.filter(t=>supportedCount(t)===topScore);

const rareLangs = LANG_ORDER.filter(l=>(langGroups[l]||[]).length===1)
  .map(l=>`${l} (${langGroups[l][0].t.name})`);

const rareDialects = DIALECT_ORDER.filter(d=>(dialectGroups[d]||[]).length===1)
  .map(d=>`${d} (${dialectGroups[d][0].t.name})`);

const trackGap = TRACKS.map(tr=>{
  const supported = TEACHERS.filter(t=>t.tracks[tr.key]==='ok').length;
  return { tr, supported, pct: supported/TEACHERS.length };
}).sort((a,b)=>a.pct-b.pct);
const worstGap = trackGap[0];
const secondGap = trackGap[1];

const evalCounts = TRACKS.map(tr=>({
  tr, count: TEACHERS.filter(t=>t.tracks[tr.key]==='eval').length
})).filter(x=>x.count>0).sort((a,b)=>b.count-a.count);

const broadest = [...TEACHERS].sort((a,b)=>{
  const scoreA = supportedCount(a) + a.dialects.length + a.langs.length;
  const scoreB = supportedCount(b) + b.dialects.length + b.langs.length;
  return scoreB - scoreA;
})[0];

const insights = [
  {
    icon:'⭐',
    title:'الأكثر تنوعًا بين المعلمين',
    body:`<span class="names">${mostVersatile.map(t=>t.name).join('، ')}</span> يحملون حالة 🟢 مقبول في <b>${topScore}</b> من أصل ${TRACKS.length} مسارات — أعمق جاهزية للتوظيف عبر مسارات متعددة.`
  },
  {
    icon:'🌐',
    title:'ندرة تغطية اللغات',
    body: rareLangs.length
      ? `معلم واحد فقط يغطي كل لغة من: <span class="names">${rareLangs.join(' · ')}</span>. فقدان أي منهم يعني فقدان اللغة بالكامل من الكادر.`
      : `لا توجد لغات ذات نقطة ضعف واحدة — كل لغة لديها تغطية احتياطية.`
  },
  {
    icon:'🗺️',
    title:'ندرة تغطية اللهجات',
    body: rareDialects.length
      ? `<span class="names">${rareDialects.join(' · ')}</span> يحملها معلم واحد فقط لكل منها — وهي الأضعف تغطية ضمن الكادر.`
      : `تغطية اللهجات موزعة بشكل جيد دون أي نقطة ضعف منفردة.`
  },
  {
    icon:'⚠️',
    title:'فجوات التوظيف',
    body:`<b>${worstGap.tr.name}</b> يملك أضعف تغطية — فقط ${worstGap.supported} من ${TEACHERS.length} معلمين (${Math.round(worstGap.pct*100)}٪) بحالة 🟢 مقبول. يليه <b>${secondGap.tr.name}</b> بنسبة ${Math.round(secondGap.pct*100)}٪.`
  },
  {
    icon:'📋',
    title:'مقترحات التوظيف',
    body:`يُنصح بمنح الأولوية لتوظيف معلمين مؤهلين لمسار <b>${worstGap.tr.name}</b> و<b>${secondGap.tr.name}</b>، إضافة إلى تعزيز إتقان ${rareLangs.length ? rareLangs.map(l=>l.split(' (')[0]).join(' / ') : 'اللغات الأقل تغطية'} لتقليل الاعتماد على معلم واحد.`
  },
  {
    icon:'🎯',
    title:'أولويات التدريب',
    body: evalCounts.length
      ? `توجيه المعلمين الموجودين تحت التقييم نحو التأهيل الكامل — أكبر فرصة في مسار <b>${evalCounts[0].tr.name}</b> (${evalCounts[0].count} معلم${evalCounts[0].count>1?'ين':''} قيد التقييم).`
      : `لا يوجد معلمون عالقون تحت التقييم حاليًا — مسار التأهيل نظيف.`
  },
  {
    icon:'🏆',
    title:'الأوسع قدرة على الإطلاق',
    body:`<span class="names">${broadest.name}</span> يجمع بين ${supportedCount(broadest)} مسارات بحالة مقبول، و${dialectWord(broadest.dialects.length)}، و${broadest.langs.length} لغة أجنبية — الأكثر مرونة ضمن الكادر.`
  },
  {
    icon:'📊',
    title:'تكوين الكادر',
    body:`من أصل ${TEACHERS.length} معلمًا، هناك ${TEACHERS.filter(t=>supportedCount(t)===0).length} لا يدعمون أي مسار بحالة 🟢 مقبول حاليًا — فرصة واضحة للتأهيل أو إعادة التوزيع.`
  },
];

insights.forEach((ins, idx)=>{
  const card = el('div','glass insight-card reveal');
  card.style.animationDelay = (idx*70)+'ms';
  card.innerHTML = `
    <div class="insight-icon">${ins.icon}</div>
    <h5>${ins.title}</h5>
    <p>${ins.body}</p>
  `;
  insightsGrid.appendChild(card);
});

document.getElementById('footerMeta').textContent = `منصة استخبارات الكادر التعليمي — مُولَّدة من بيانات التوظيف الحالية · ${TEACHERS.length} معلمًا · ${TRACKS.length} مسارات`;

/* =========================================================
   SCROLL REVEAL for late sections
   ========================================================= */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.1 });
document.querySelectorAll('.reveal').forEach(node=>{
  node.style.animationPlayState = 'paused';
  observer.observe(node);
});
