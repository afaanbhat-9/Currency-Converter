const flagMap = {USD:'🇺🇸',EUR:'🇪🇺',GBP:'🇬🇧',INR:'🇮🇳',JPY:'🇯🇵',CAD:'🇨🇦',AUD:'🇦🇺',CHF:'🇨🇭',CNY:'🇨🇳',SGD:'🇸🇬',NZD:'🇳🇿',MXN:'🇲🇽',BRL:'🇧🇷',KRW:'🇰🇷',TRY:'🇹🇷',RUB:'🇷🇺',ZAR:'🇿🇦',SEK:'🇸🇪',NOK:'🇳🇴',DKK:'🇩🇰',PLN:'🇵🇱',THB:'🇹🇭',HKD:'🇭🇰',AED:'🇦🇪',SAR:'🇸🇦',IDR:'🇮🇩',MYR:'🇲🇾',PHP:'🇵🇭',ARS:'🇦🇷',BDT:'🇧🇩',BGN:'🇧🇬',BHD:'🇧🇭',BOB:'🇧🇴',CLP:'🇨🇱',COP:'🇨🇴',CRC:'🇨🇷',CZK:'🇨🇿',DOP:'🇩🇴',DZD:'🇩🇿',EGP:'🇪🇬',GEL:'🇬🇪',GTQ:'🇬🇹',HNL:'🇭🇳',HRK:'🇭🇷',HUF:'🇭🇺',ILS:'🇮🇱',ISK:'🇮🇸',JOD:'🇯🇴',KES:'🇰🇪',KGS:'🇰🇬',KHR:'🇰🇭',KWD:'🇰🇼',KZT:'🇰🇿',LAK:'🇱🇦',LBP:'🇱🇧',LKR:'🇱🇰',MAD:'🇲🇦',MDL:'🇲🇩',MKD:'🇲🇰',MNT:'🇲🇳',MOP:'🇲🇴',MUR:'🇲🇺',MVR:'🇲🇻',MWK:'🇲🇼',NAD:'🇳🇦',NGN:'🇳🇬',NPR:'🇳🇵',OMR:'🇴🇲',PAB:'🇵🇦',PEN:'🇵🇪',PKR:'🇵🇰',QAR:'🇶🇦',RON:'🇷🇴',RSD:'🇷🇸',TND:'🇹🇳',TTD:'🇹🇹',TWD:'🇹🇼',UAH:'🇺🇦',UYU:'🇺🇾',UZS:'🇺🇿',VND:'🇻🇳',XAF:'🌍',XCD:'🏝️',XOF:'🌍',YER:'🇾🇪',ZMW:'🇿🇲'};
const sym = {USD:'$',EUR:'€',GBP:'£',INR:'₹',JPY:'¥',CAD:'C$',AUD:'A$',CHF:'CHF',CNY:'¥',SGD:'S$',NZD:'NZ$',MXN:'MX$',BRL:'R$',KRW:'₩',TRY:'₺',RUB:'₽',ZAR:'R',SEK:'kr',NOK:'kr',DKK:'kr',PLN:'zł',THB:'฿',HKD:'HK$',AED:'د.إ',SAR:'﷼',IDR:'Rp',MYR:'RM',PHP:'₱',ARS:'AR$',BDT:'৳',BGN:'лв',BHD:'.د.ب',BOB:'Bs',CLP:'CL$',COP:'CO$',CRC:'₡',CZK:'Kč',DOP:'RD$',DZD:'د.ج',EGP:'E£',GEL:'₾',GTQ:'Q',HNL:'L',HRK:'kn',HUF:'Ft',ILS:'₪',ISK:'kr',JOD:'د.ا',KES:'KSh',KGS:'сом',KHR:'៛',KWD:'د.ك',KZT:'₸',LAK:'₭',LBP:'ل.ل',LKR:'Rs',MAD:'د.م.',MDL:'L',MKD:'ден',MNT:'₮',MOP:'MOP$',MUR:'₨',MVR:'Rf',MWK:'MK',NAD:'N$',NGN:'₦',NPR:'Rs',OMR:'ر.ع.',PAB:'B/.',PEN:'S/',PKR:'Rs',QAR:'ر.ق',RON:'lei',RSD:'дин',TND:'د.ت',TTD:'TT$',TWD:'NT$',UAH:'₴',UYU:'$U',UZS:'сўм',VND:'₫',XAF:'FCFA',XCD:'EC$',XOF:'CFA',YER:'﷼',ZMW:'ZK'};
const currencies = [{code:'USD',name:'US Dollar'},{code:'EUR',name:'Euro'},{code:'GBP',name:'British Pound'},{code:'INR',name:'Indian Rupee'},{code:'JPY',name:'Japanese Yen'},{code:'CAD',name:'Canadian Dollar'},{code:'AUD',name:'Australian Dollar'},{code:'CHF',name:'Swiss Franc'},{code:'CNY',name:'Chinese Yuan'},{code:'SGD',name:'Singapore Dollar'},{code:'NZD',name:'New Zealand Dollar'},{code:'MXN',name:'Mexican Peso'},{code:'BRL',name:'Brazilian Real'},{code:'KRW',name:'South Korean Won'},{code:'TRY',name:'Turkish Lira'},{code:'RUB',name:'Russian Ruble'},{code:'ZAR',name:'South African Rand'},{code:'SEK',name:'Swedish Krona'},{code:'NOK',name:'Norwegian Krone'},{code:'DKK',name:'Danish Krone'},{code:'PLN',name:'Polish Zloty'},{code:'THB',name:'Thai Baht'},{code:'HKD',name:'Hong Kong Dollar'},{code:'AED',name:'UAE Dirham'},{code:'SAR',name:'Saudi Riyal'},{code:'IDR',name:'Indonesian Rupiah'},{code:'MYR',name:'Malaysian Ringgit'},{code:'PHP',name:'Philippine Peso'},{code:'ARS',name:'Argentine Peso'},{code:'BDT',name:'Bangladeshi Taka'},{code:'BGN',name:'Bulgarian Lev'},{code:'BHD',name:'Bahraini Dinar'},{code:'BOB',name:'Bolivian Boliviano'},{code:'CLP',name:'Chilean Peso'},{code:'COP',name:'Colombian Peso'},{code:'CRC',name:'Costa Rican Colon'},{code:'CZK',name:'Czech Koruna'},{code:'DOP',name:'Dominican Peso'},{code:'DZD',name:'Algerian Dinar'},{code:'EGP',name:'Egyptian Pound'},{code:'GEL',name:'Georgian Lari'},{code:'GTQ',name:'Guatemalan Quetzal'},{code:'HNL',name:'Honduran Lempira'},{code:'HRK',name:'Croatian Kuna'},{code:'HUF',name:'Hungarian Forint'},{code:'ILS',name:'Israeli Shekel'},{code:'ISK',name:'Icelandic Krona'},{code:'JOD',name:'Jordanian Dinar'},{code:'KES',name:'Kenyan Shilling'},{code:'KGS',name:'Kyrgyzstani Som'},{code:'KHR',name:'Cambodian Riel'},{code:'KWD',name:'Kuwaiti Dinar'},{code:'KZT',name:'Kazakhstani Tenge'},{code:'LAK',name:'Lao Kip'},{code:'LBP',name:'Lebanese Pound'},{code:'LKR',name:'Sri Lankan Rupee'},{code:'MAD',name:'Moroccan Dirham'},{code:'MDL',name:'Moldovan Leu'},{code:'MKD',name:'Macedonian Denar'},{code:'MNT',name:'Mongolian Tugrik'},{code:'MOP',name:'Macanese Pataca'},{code:'MUR',name:'Mauritian Rupee'},{code:'MVR',name:'Maldivian Rufiyaa'},{code:'MWK',name:'Malawian Kwacha'},{code:'NAD',name:'Namibian Dollar'},{code:'NGN',name:'Nigerian Naira'},{code:'NPR',name:'Nepalese Rupee'},{code:'OMR',name:'Omani Rial'},{code:'PAB',name:'Panamanian Balboa'},{code:'PEN',name:'Peruvian Sol'},{code:'PKR',name:'Pakistani Rupee'},{code:'QAR',name:'Qatari Riyal'},{code:'RON',name:'Romanian Leu'},{code:'RSD',name:'Serbian Dinar'},{code:'TND',name:'Tunisian Dinar'},{code:'TTD',name:'Trinidad & Tobago Dollar'},{code:'TWD',name:'Taiwan Dollar'},{code:'UAH',name:'Ukrainian Hryvnia'},{code:'UYU',name:'Uruguayan Peso'},{code:'UZS',name:'Uzbekistani Som'},{code:'VND',name:'Vietnamese Dong'},{code:'XAF',name:'Central African CFA'},{code:'XCD',name:'East Caribbean Dollar'},{code:'XOF',name:'West African CFA'},{code:'YER',name:'Yemeni Rial'},{code:'ZMW',name:'Zambian Kwacha'}];
const popularPairs = [{from:'USD',to:'EUR'},{from:'USD',to:'GBP'},{from:'USD',to:'JPY'},{from:'USD',to:'INR'},{from:'EUR',to:'USD'},{from:'GBP',to:'USD'},{from:'EUR',to:'GBP'},{from:'USD',to:'CAD'}];
const fallback = {USD:1,EUR:0.92,GBP:0.79,INR:83.15,JPY:149.5,CAD:1.36,AUD:1.53,CHF:0.88,CNY:7.24,SGD:1.34,NZD:1.64,MXN:17.12,BRL:4.96,KRW:1320,TRY:30.1,RUB:89.5,ZAR:18.7,SEK:10.43,NOK:10.55,DKK:6.88,PLN:4.02,THB:35.8,HKD:7.82,AED:3.67,SAR:3.75,IDR:15600,MYR:4.72,PHP:56.2,ARS:845,BDT:109.5,BGN:1.8,BHD:0.38,BOB:6.91,CLP:880,COP:3900,CRC:515,CZK:22.5,DOP:58.3,DZD:134.5,EGP:30.9,GEL:2.65,GTQ:7.78,HNL:24.7,HRK:6.95,HUF:355,ILS:3.67,ISK:138,JOD:0.71,KES:145,KGS:89.5,KHR:4100,KWD:0.31,KZT:450,LAK:20800,LBP:15000,LKR:305,MAD:10.05,MDL:17.7,MKD:56.8,MNT:3400,MOP:8.06,MUR:45.5,MVR:15.45,MWK:1690,NAD:18.7,NGN:1450,NPR:133,OMR:0.38,PAB:1,PEN:3.72,PKR:278.5,QAR:3.64,RON:4.58,RSD:108,TND:3.12,TTD:6.78,TWD:31.8,UAH:38.5,UYU:39.2,UZS:12500,VND:24500,XAF:605,XCD:2.7,XOF:605,YER:250,ZMW:25.5};

let st = {from:'USD', to:'INR', rates:null, lastUpdate:null, loading:true};
const comicWords = ['WHOOSH!', 'BAM!', 'SHING!', 'ZAP!', 'POW!', 'KABOOM!', 'WHAM!', 'BOOM!', 'ZING!', 'SMASH!', 'KAPOW!', 'SWOOSH!', 'CRACK!', 'THWACK!', 'BLAM!', 'FLASH!', 'BANG!', 'WHAP!'];
const comicIcons = ['💥', '⚡', '🔥', '⭐', '✨', '🗯️', '💢', '🌟', '🎯', '👊', '🔔', '💫', '🌠'];
const dropdownInstances = [];

let soundEnabled = localStorage.getItem('sound') !== 'false';
let popupsEnabled = localStorage.getItem('popups') !== 'false';

function playComicSound(word) {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctx.resume();
    const w = word.toUpperCase().replace(/[^A-Z]/g, '');
    const now = ctx.currentTime;
    const vol = 0.6;

    if (/^(BAM|POW|WHAM|KABOOM|KAPOW|BOOM|SMASH|THUD|DOKOON|KRAK|THWACK|BLAM|BA.DUMP|BANG|KABLAM|WHAP)/.test(w)) {
      const dur = /KAB|BOOM|SMASH|DOKOON/.test(w) ? 0.4 : 0.2;
      const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < buf.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buf.length * 0.08));
      const src = ctx.createBufferSource(); src.buffer = buf;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
      lp.frequency.value = /BOOM|KAB|DOKOON/.test(w) ? 180 : /SMASH|THWACK/.test(w) ? 600 : 400;
      const g = ctx.createGain(); g.gain.value = 0.35 * vol;
      src.connect(lp).connect(g).connect(ctx.destination);
      src.start(now); src.stop(now + dur);
      setTimeout(() => ctx.close(), (dur + 0.3) * 1000);
      return;
    }

    if (/^(WHOOSH|SWOOSH|FWOOOM)/.test(w)) {
      const dur = 0.5;
      const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < buf.length; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / buf.length);
      const src = ctx.createBufferSource(); src.buffer = buf;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 300; bp.Q.value = 1;
      bp.frequency.linearRampToValueAtTime(/FWOOOM/.test(w) ? 800 : 2000, now + dur);
      const g = ctx.createGain(); g.gain.value = 0.15 * vol;
      src.connect(bp).connect(g).connect(ctx.destination);
      src.start(now); src.stop(now + dur);
      setTimeout(() => ctx.close(), 900);
      return;
    }

    if (/^(SHING|ZING)/.test(w)) {
      [600, 900, 1200, 1800].forEach((freq, i) => {
        const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.12 * vol, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.25 + i * 0.06);
        osc.connect(g).connect(ctx.destination);
        osc.start(now); osc.stop(now + 0.5);
      });
      setTimeout(() => ctx.close(), 800);
      return;
    }

    if (/^(ZAP|CRACK)/.test(w)) {
      const dur = 0.15;
      const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < buf.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buf.length * 0.02));
      const src = ctx.createBufferSource(); src.buffer = buf;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 3000;
      const g = ctx.createGain(); g.gain.value = 0.2 * vol;
      src.connect(hp).connect(g).connect(ctx.destination);
      src.start(now); src.stop(now + dur);
      setTimeout(() => ctx.close(), 500);
      return;
    }

    if (/VRROOM/.test(w)) {
      const osc = ctx.createOscillator(); osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(50, now); osc.frequency.linearRampToValueAtTime(180, now + 0.25);
      osc.frequency.linearRampToValueAtTime(30, now + 0.55);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.07 * vol, now); g.gain.linearRampToValueAtTime(0.12 * vol, now + 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 350;
      osc.connect(lp).connect(g).connect(ctx.destination);
      osc.start(now); osc.stop(now + 0.6);
      setTimeout(() => ctx.close(), 1000);
      return;
    }

    if (/NYOOM/.test(w)) {
      const osc = ctx.createOscillator(); osc.type = 'sine';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(3500, now + 0.35);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.08 * vol, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(g).connect(ctx.destination);
      osc.start(now); osc.stop(now + 0.45);
      setTimeout(() => ctx.close(), 800);
      return;
    }

    if (/FLASH/.test(w)) {
      [2000, 2800, 3600, 4600].forEach(freq => {
        const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.05 * vol, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(g).connect(ctx.destination);
        osc.start(now); osc.stop(now + 0.3);
      });
      setTimeout(() => ctx.close(), 600);
      return;
    }

    const dur = 0.15;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < buf.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buf.length * 0.06));
    const src = ctx.createBufferSource(); src.buffer = buf;
    const g = ctx.createGain(); g.gain.value = 0.3 * vol;
    src.connect(g).connect(ctx.destination);
    src.start(now); src.stop(now + dur);
    setTimeout(() => ctx.close(), 500);
  } catch (e) { /* audio not supported */ }
}

function playClickSound() {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) { /* audio not supported */ }
}

function showComicEffect() {
  if (!popupsEnabled) {
    playClickSound();
    return;
  }
  const word = comicWords[Math.floor(Math.random() * comicWords.length)];
  playComicSound(word);
  const el = document.createElement('div');
  const sizeClass = ['lg','md','sm'][Math.floor(Math.random()*3)];
  const colorClass = ['c1','c2','c3','c4'][Math.floor(Math.random()*4)];
  el.className = `comic-effect ${sizeClass} ${colorClass}`;
  const icon = comicIcons[Math.floor(Math.random() * comicIcons.length)];
  el.innerHTML = `<span class="comic-icon">${icon}</span><span class="comic-word">${word}</span>`;
  const side = Math.floor(Math.random() * 4);
  if (side === 0) { el.style.left = '3%'; el.style.top = (12 + Math.random() * 50) + '%'; }
  else if (side === 1) { el.style.left = '72%'; el.style.top = (12 + Math.random() * 50) + '%'; }
  else if (side === 2) { el.style.left = (8 + Math.random() * 55) + '%'; el.style.top = '4%'; }
  else { el.style.left = (8 + Math.random() * 55) + '%'; el.style.top = '76%'; }
  el.style.transform = `rotate(${-15 + Math.random()*30}deg)`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

// --- Stars ---
function makeStars() {
  const c = document.getElementById('stars');
  if (!c) return;
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${2+Math.random()*3}s;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px`;
    c.appendChild(s);
  }
}

// --- Dropdown ---
function buildDropdown(container, selected, onChange) {
  const trigger = document.createElement('div');
  trigger.className = 'custom-select-trigger';
  trigger.innerHTML = `<span class="flag">${flagMap[selected]||'💱'}</span><span class="code">${selected}</span><span class="name">${currencies.find(c=>c.code===selected)?.name||''}</span><span class="arrow">▾</span>`;
  container.innerHTML = '';
  container.appendChild(trigger);

  const menu = document.createElement('div');
  menu.className = 'custom-select-menu';

  const sw = document.createElement('div');
  sw.className = 'search-wrap';
  const si = document.createElement('span');
  si.className = 'search-icon';
  si.innerHTML = '&#x1F50D;';
  const inp = document.createElement('input');
  inp.type = 'text';
  inp.placeholder = 'SEARCH...';
  inp.autocomplete = 'off';
  sw.appendChild(si);
  sw.appendChild(inp);
  menu.appendChild(sw);

  const ow = document.createElement('div');
  ow.className = 'options-wrap';
  menu.appendChild(ow);
  document.body.appendChild(menu);

  let open = false;
  let filter = '';
  let selectedCode = selected;
  let highlightIndex = 0;

  function scrollToHighlight(opts) {
    if (opts && opts[highlightIndex]) opts[highlightIndex].scrollIntoView({ block: 'nearest' });
  }

  function applyHighlight() {
    const opts = ow.querySelectorAll('.custom-select-option');
    opts.forEach((el, i) => el.classList.toggle('highlighted', i === highlightIndex));
  }

  function render() {
    const list = filter ? currencies.filter(c => c.code.includes(filter) || c.name.toUpperCase().includes(filter)) : currencies;
    if (list.length === 0) { ow.innerHTML = '<div class="no-results">NO RESULTS</div>'; return; }
    highlightIndex = 0;
    ow.innerHTML = list.map(c =>
      `<div class="custom-select-option ${c.code===selectedCode?'selected':''}" data-code="${c.code}">
        <span class="flag">${flagMap[c.code]||'💱'}</span>
        <span class="code">${c.code}</span>
        <span class="name">${c.name.toUpperCase()}</span>
        <span class="check">&#x2713;</span>
      </div>`
    ).join('');
    const opts = ow.querySelectorAll('.custom-select-option');
    opts.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        select(el.dataset.code);
      });
    });
    applyHighlight();
  }

  function select(code) {
    selectedCode = code;
    trigger.innerHTML = `<span class="flag">${flagMap[code]||'💱'}</span><span class="code">${code}</span><span class="name">${currencies.find(c=>c.code===code)?.name?.toUpperCase()||''}</span><span class="arrow">▾</span>`;
    close();
    showComicEffect();
    if (onChange) onChange(code);
  }

  function position() {
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom - 10;
    const maxH = Math.min(320, spaceBelow > 280 ? 280 : Math.max(160, spaceBelow));
    const isMobile = window.innerWidth <= 600;
    let left = rect.left;
    let width = rect.width;
    if (isMobile) {
      left = 8;
      width = window.innerWidth - 16;
    } else {
      if (left + width > window.innerWidth - 8) {
        left = Math.max(8, window.innerWidth - width - 8);
      }
    }
    menu.style.cssText = `position:fixed;left:${left}px;top:${rect.bottom + 6}px;width:${width}px;z-index:999999;`;
    ow.style.maxHeight = maxH + 'px';
  }

  function openMenu() {
    dropdownInstances.forEach(d => { if (d !== instance) d.close(); });
    open = true;
    container.classList.add('open');
    position();
    menu.classList.add('open');
    render();
    setTimeout(() => inp.focus(), 50);
  }

  function close() {
    open = false;
    container.classList.remove('open');
    menu.classList.remove('open');
    filter = '';
    inp.value = '';
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (open) close();
    else openMenu();
  });

  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.click(); }
  });

  inp.addEventListener('input', () => { filter = inp.value.toUpperCase().trim(); render(); });
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); close(); }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const opts = ow.querySelectorAll('.custom-select-option');
      if (opts.length > 0) { highlightIndex = Math.min(highlightIndex + 1, opts.length - 1); applyHighlight(); scrollToHighlight(opts); }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const opts = ow.querySelectorAll('.custom-select-option');
      if (opts.length > 0) { highlightIndex = Math.max(highlightIndex - 1, 0); applyHighlight(); scrollToHighlight(opts); }
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const opts = ow.querySelectorAll('.custom-select-option');
      if (opts.length > 0 && opts[highlightIndex]) select(opts[highlightIndex].dataset.code);
    }
  });

  document.addEventListener('click', (e) => {
    if (open && !container.contains(e.target) && !menu.contains(e.target)) {
      close();
    }
  });

  window.addEventListener('scroll', () => { if (open) position(); }, true);
  window.addEventListener('resize', () => { if (open) position(); });

  const instance = {
    setValue: (code) => {
      selectedCode = code;
      trigger.innerHTML = `<span class="flag">${flagMap[code]||'💱'}</span><span class="code">${code}</span><span class="name">${currencies.find(c=>c.code===code)?.name?.toUpperCase()||''}</span><span class="arrow">▾</span>`;
    },
    close: close
  };
  dropdownInstances.push(instance);
  return instance;
}

// --- Main ---
const $ = id => document.getElementById(id);
const amountInput = $('amount');
const amountCurr = $('amountCurrency');
const rateLabel = $('rateLabel');
const rateValueEl = $('rateValue');
const rateSub = $('rateSub');
const rateDir = $('rateDirection');
const rateDisplay = $('rateDisplay');
const swapBtn = $('swapBtn');
const popularGrid = $('popularGrid');
const baseInfo = $('baseInfo');
const fromC = $('fromDropdown');
const toC = $('toDropdown');

let fromDD, toDD;

function updateSym(code) { amountCurr.textContent = sym[code] || '$'; }

async function fetchRates() {
  try {
    const r = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!r.ok) throw Error();
    const d = await r.json();
    st.rates = d.rates;
    baseInfo.textContent = 'USD';
  } catch {
    st.rates = {...fallback};
    baseInfo.textContent = 'USD (OFFLINE)';
  }
  st.lastUpdate = new Date();
}

function triggerImpact() {
  rateValueEl.classList.remove('impact');
  void rateValueEl.offsetWidth;
  rateValueEl.classList.add('impact');
}

function convert() {
  if (st.loading) return;
  const amt = parseFloat(amountInput.value) || 0;
  if (!st.rates) { rateValueEl.innerHTML = '<span class="spinner"></span>'; return; }

  const fr = st.rates[st.from] || 1;
  const tr = st.rates[st.to] || 1;
  const rate = tr / fr;
  const result = amt * rate;

  rateLabel.textContent = `1 ${st.from} = ${rate.toFixed(6)} ${st.to}`;

  const formatted = result.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2});
  rateValueEl.textContent = formatted;
  rateSub.textContent = st.lastUpdate ? `UPDATED ${st.lastUpdate.toLocaleTimeString()}` : '';
  rateDir.className = 'rate-direction';

  triggerImpact();

  document.querySelectorAll('.popular-item').forEach(el => {
    const txt = el.querySelector('.pair')?.textContent;
    if (txt) {
      const p = txt.replace(/[^A-Z/]/g, '').split('/');
      if (p.length === 2 && p[0].length === 3 && p[1].length === 3) {
        const pr = (st.rates[p[1]]||1) / (st.rates[p[0]]||1);
        const re = el.querySelector('.pair-rate');
        if (re) re.textContent = pr.toFixed(4);
      }
    }
  });
}

function init() {
  makeStars();

  const savedFrom = localStorage.getItem('convFrom');
  const savedTo = localStorage.getItem('convTo');
  if (savedFrom && currencies.some(c=>c.code===savedFrom)) st.from = savedFrom;
  if (savedTo && currencies.some(c=>c.code===savedTo)) st.to = savedTo;
  updateSym(st.from);

  fromDD = buildDropdown(fromC, st.from, (code) => { 
    st.from = code; updateSym(code); localStorage.setItem('convFrom', code); 
    rateValueEl.innerHTML = '<span class="spinner"></span>'; setTimeout(() => convert(), 400); 
  });
  toDD = buildDropdown(toC, st.to, (code) => { 
    st.to = code; localStorage.setItem('convTo', code); 
    rateValueEl.innerHTML = '<span class="spinner"></span>'; setTimeout(() => convert(), 400); 
  });

  popularPairs.forEach(p => {
    const div = document.createElement('div');
    div.className = 'popular-item';
    div.innerHTML = `<div class="pair">${flagMap[p.from]}${p.from}/${p.to}</div><div class="pair-rate">-</div>`;
    div.addEventListener('click', () => {
      st.from = p.from; st.to = p.to;
      fromDD.setValue(p.from); toDD.setValue(p.to);
      updateSym(p.from);
      showComicEffect();
      
      rateValueEl.innerHTML = '<span class="spinner"></span>';
      setTimeout(() => convert(), 400);
    });
    popularGrid.appendChild(div);
  });

  st.loading = true;
  rateValueEl.innerHTML = '<span class="spinner"></span>';
  fetchRates().then(() => {
    st.loading = false;
    convert();
  });

  setInterval(() => fetchRates().then(() => convert()), 300000);
}

amountInput.addEventListener('input', convert);

swapBtn.addEventListener('click', () => {
  const tmp = st.from; st.from = st.to; st.to = tmp;
  fromDD.setValue(st.from); toDD.setValue(st.to);
  updateSym(st.from);
  localStorage.setItem('convFrom', st.from);
  localStorage.setItem('convTo', st.to);
  showComicEffect();
  
  rateValueEl.innerHTML = '<span class="spinner"></span>';
  setTimeout(() => convert(), 400);
});

// --- Theme & Sound Toggles ---
const soundToggleBtn = $('soundToggle');
const themeToggleBtn = $('themeToggle');
const popupToggleBtn = $('popupToggle');

if (!soundEnabled) soundToggleBtn.textContent = '🔇';
if (!popupsEnabled) popupToggleBtn.textContent = '💨';

popupToggleBtn.addEventListener('click', () => {
  popupsEnabled = !popupsEnabled;
  localStorage.setItem('popups', popupsEnabled);
  popupToggleBtn.textContent = popupsEnabled ? '💥' : '💨';
  if (popupsEnabled) showComicEffect();
});

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem('sound', soundEnabled);
  soundToggleBtn.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) showComicEffect();
});

let isDark = localStorage.getItem('theme') === 'dark';
if (isDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  showComicEffect();
});

// Prevent scroll outside container (only when dropdowns are closed)
const container = document.querySelector('.container');
container.addEventListener('wheel', (e) => {
  if (e.target.closest('.custom-select-menu')) return;
  e.preventDefault();
}, { passive: false });

init();
