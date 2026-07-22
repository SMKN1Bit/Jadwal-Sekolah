/**
 * app.js — Logika aplikasi Jadwal Pelajaran SMK Negeri 1 Bitung.
 * Bergantung pada data.js (majorsData, scheduleData, funFactsData) yang
 * dimuat sebelumnya.
 */

/* ===================================================================
   0. IKON (inline SVG, tanpa dependensi font/CDN eksternal)
   =================================================================== */
const ICONS = {
  chart: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17.2" cy="9" r="2.6"/><path d="M16 13.2c2.6.5 4.6 2.5 4.6 4.8"/></svg>',
  bookOpen: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5C10 4 6.5 3.5 4 4v15c2.5-.5 6 0 8 1.5 2-1.5 5.5-2 8-1.5V4c-2.5-.5-6 0-8 1.5z"/><path d="M12 5.5v15"/></svg>',
  graduation: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l10-4 10 4-10 4-10-4z"/><path d="M6 10.3V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.7"/><path d="M22 8v6"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.4 2"/></svg>',
  chevronRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
};
const FACT_ICONS = [ICONS.chart, ICONS.users, ICONS.bookOpen, ICONS.graduation, ICONS.clock];

/* ===================================================================
   0b. IKON SERAGAM HARIAN (Senin–Jumat)
   Memakai sprite <clipPath>/<linearGradient>/<pattern> bersama yang
   didefinisikan sekali di index.html (id: uniformClip, uniformRabuGradient,
   uniformBatik) supaya markup tiap instance ikon tetap ringan.
   - Senin & Selasa : seragam nasional putih & abu-abu
   - Rabu           : identitas jurusan, warna bergradasi berjalan pelan
   - Kamis          : batik sekolah (putih + biru pastel + biru)
   - Jumat          : olahraga, kombinasi biru tua & biru pastel
   =================================================================== */
const UNIFORM_SHAPE_OUTER = 'M16,23 L8,29 L8,38 L21,38 L21,55 L43,55 L43,38 L56,38 L56,29 L48,23 L40,17 L32,24 L24,17 Z';
const UNIFORM_COLLAR = 'M24,17 L19.5,21 L27.5,23.5 M40,17 L44.5,21 L36.5,23.5';
const UNIFORM_HANGER_HOOK = 'M34,4 C37,4 38.5,6.2 36.8,8.3 C35.5,9.9 33,10.6 32,12';
const UNIFORM_HANGER_WIRE = 'M32,12 L16,23 M32,12 L48,23';

const UNIFORM_CONFIG = {
  SENIN: { shirtClass: 'uniform-shirt-putih', pantsClass: 'uniform-pants-abu', shirtFill: null },
  SELASA: { shirtClass: 'uniform-shirt-putih', pantsClass: 'uniform-pants-abu', shirtFill: null },
  RABU: { shirtClass: 'uniform-shirt-gradient', pantsClass: 'uniform-pants-netral', shirtFill: null },
  KAMIS: { shirtClass: '', pantsClass: 'uniform-pants-gelap', shirtFill: 'url(#uniformBatik)' },
  JUMAT: { shirtClass: 'uniform-shirt-navy', pantsClass: 'uniform-pants-pastel', shirtFill: null },
};

function uniformIconSVG(dayKey) {
  const cfg = UNIFORM_CONFIG[dayKey];
  if (!cfg) return '';
  const fillAttr = cfg.shirtFill ? ` fill="${cfg.shirtFill}"` : '';
  return `<svg viewBox="0 0 64 60" role="img" aria-label="Seragam hari ${DAY_LABELS[dayKey] || ''}">
    <g clip-path="url(#uniformClip)">
      <rect x="0" y="10" width="64" height="29" class="${cfg.shirtClass}"${fillAttr}></rect>
      <rect x="0" y="38" width="64" height="20" class="${cfg.pantsClass}"></rect>
    </g>
    <path class="uniform-outline" d="${UNIFORM_SHAPE_OUTER}"></path>
    <path class="uniform-outline" d="${UNIFORM_COLLAR}"></path>
    <path class="uniform-hanger" d="${UNIFORM_HANGER_HOOK}"></path>
    <path class="uniform-hanger" d="${UNIFORM_HANGER_WIRE}"></path>
  </svg>`;
}

/* ===================================================================
   1. UTIL: tanggal & hari (Bahasa Indonesia, tanpa Intl agar konsisten
      di semua browser/WebView tanpa bergantung pada data locale).
   =================================================================== */
const DAY_KEYS = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT'];
const DAY_LABELS = { SENIN: 'Senin', SELASA: 'Selasa', RABU: 'Rabu', KAMIS: 'Kamis', JUMAT: 'Jumat' };
const DAY_FULL = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTH_FULL = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function todayDayKey() {
  const map = { 1: 'SENIN', 2: 'SELASA', 3: 'RABU', 4: 'KAMIS', 5: 'JUMAT' };
  return map[new Date().getDay()] || null;
}

/**
 * Mencari data jurusan (nama lengkap, singkatan, daftar rombel) dari
 * majorsData berdasarkan tingkat kelas & kunci jurusan.
 */
function getMajorInfo(kelas, majorKey) {
  const list = majorsData && majorsData[kelas];
  if (!list) return null;
  return list.find((m) => m.key === majorKey) || null;
}

function getMondayOfWeek(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getWeekDates() {
  const monday = getMondayOfWeek(new Date());
  const map = {};
  DAY_KEYS.forEach((key, idx) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + idx);
    map[key] = d;
  });
  return map;
}

function parseTimeRange(str) {
  const m = String(str || '').match(/(\d{1,2})[.:](\d{2})\s*-\s*(\d{1,2})[.:](\d{2})/);
  if (!m) return null;
  return [parseInt(m[1], 10) * 60 + parseInt(m[2], 10), parseInt(m[3], 10) * 60 + parseInt(m[4], 10)];
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ===================================================================
   2. WARNA MATA PELAJARAN
   =================================================================== */
const SUBJECT_COLOR_MAP = [
  ['Matematika', '--subj-matematika'],
  ['IPAS', '--subj-ipa'],
  ['Bahasa Indonesia', '--subj-bindo'],
  ['Bahasa Inggris', '--subj-binggris'],
  ['Bahasa Jepang', '--subj-mulok'],
  ['Seni Budaya', '--subj-senibudaya'],
  ['Sejarah', '--subj-sejarah'],
  ['Informatika', '--subj-informatika'],
  ['Agama', '--subj-agama'],
  ['Olahraga', '--subj-pjok'],
  ['Kewirausahaan', '--subj-wirausaha'],
  ['Mata Pelajaran Pilihan', '--subj-mulok'],
  ['Profil Pelajar Pancasila', '--subj-lainnya'],
  ['Istirahat', '--subj-istirahat'],
  ['Upacara', '--subj-lainnya'],
  ['Ibadah', '--subj-lainnya'],
];

function getSubjectColorVar(subject) {
  for (const [key, varName] of SUBJECT_COLOR_MAP) {
    if (subject.includes(key)) return varName;
  }
  // Mata pelajaran konsentrasi/produktif jurusan (mis. Dasar-Dasar TJKT,
  // Akuntansi Keuangan, dst.) memakai warna aksen sekolah agar menonjol.
  return '--subj-produktif';
}

/* ===================================================================
   3. TEMA — deteksi otomatis, simpan pilihan terakhir, default terang.
   =================================================================== */
const THEME_KEY = 'jp-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  if (meta && bg) meta.setAttribute('content', bg);
}

function setTheme(theme, persist) {
  applyTheme(theme);
  if (persist) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage unavailable */ }
  }
}

function initTheme() {
  // Atribut data-theme sudah diset secara sinkron oleh skrip di <head>
  // (sebelum render pertama) agar tidak ada kedipan tema. Di sini kita
  // hanya menyinkronkan meta theme-color & memasang listener.
  applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark', true);
    });
  }

  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        let saved = null;
        try { saved = localStorage.getItem(THEME_KEY); } catch (err) { /* noop */ }
        if (saved === 'light' || saved === 'dark') return; // pilihan manual selalu diutamakan
        setTheme(e.matches ? 'dark' : 'light', false);
      });
    } catch (e) { /* matchMedia change listener unsupported — abaikan */ }
  }
}

/* ===================================================================
   4. STATE & NAVIGASI (dengan riwayat browser agar tombol back
      perangkat / gesture iOS bekerja seperti aplikasi native)
   =================================================================== */
let currentState = {
  selectedClass: null,
  selectedMajor: null,
  selectedRombel: null,
  selectedDay: null,
  currentScreen: 'mainMenu',
};

const SCREEN_IDS = ['mainMenu', 'jurusanSelection', 'rombelSelection', 'daySelection', 'scheduleDisplay', 'funFactsDisplay'];

function setActiveScreen(screenName, direction) {
  SCREEN_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active', 'enter-right', 'enter-left');
  });
  const target = document.getElementById(screenName);
  if (target) {
    target.classList.add('active');
    if (direction === 'forward') target.classList.add('enter-right');
    if (direction === 'backward') target.classList.add('enter-left');
  }
  currentState.currentScreen = screenName;

  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.hidden = screenName === 'mainMenu';

  updateBreadcrumb();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function pushHistory(screenName) {
  const state = Object.assign({}, currentState, { currentScreen: screenName });
  try { history.pushState(state, '', '#' + screenName); } catch (e) { /* noop */ }
}

function goToScreen(screenName, opts) {
  opts = opts || {};
  const push = opts.push !== false;
  const direction = opts.direction || 'forward';

  switch (screenName) {
    case 'mainMenu':
      updateCurrentDate();
      renderContinueCard();
      break;
    case 'jurusanSelection':
      renderJurusanGrid(currentState.selectedClass);
      break;
    case 'rombelSelection':
      renderRombelGrid(currentState.selectedClass, currentState.selectedMajor);
      break;
    case 'daySelection':
      renderDaySelection();
      break;
    case 'scheduleDisplay':
      renderSchedule(currentState.selectedDay);
      break;
    case 'funFactsDisplay':
      renderFunFacts();
      break;
  }

  setActiveScreen(screenName, direction);
  if (push) pushHistory(screenName);
}

/* ===================================================================
   5. BREADCRUMB
   =================================================================== */
function updateBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  const { currentScreen, selectedClass, selectedMajor, selectedRombel, selectedDay } = currentState;

  if (currentScreen === 'mainMenu') {
    bc.hidden = true;
    bc.innerHTML = '';
    return;
  }

  const segments = [{ label: 'Beranda', onClick: () => goToScreen('mainMenu') }];
  const major = getMajorInfo(selectedClass, selectedMajor);

  if (currentScreen === 'funFactsDisplay') {
    segments.push({ label: 'Fun Facts', current: true });
  } else {
    segments.push({
      label: `Kelas ${selectedClass}`,
      current: currentScreen === 'jurusanSelection',
      onClick: currentScreen !== 'jurusanSelection' ? () => goToScreen('jurusanSelection') : null,
    });
    if (currentScreen === 'rombelSelection' || currentScreen === 'daySelection' || currentScreen === 'scheduleDisplay') {
      const hasMultipleRombel = major && major.rombels.length > 1;
      segments.push({
        label: major ? major.short : '',
        current: currentScreen === 'rombelSelection',
        onClick: currentScreen !== 'rombelSelection' && hasMultipleRombel ? () => goToScreen('rombelSelection') : null,
      });
    }
    if (currentScreen === 'daySelection' || currentScreen === 'scheduleDisplay') {
      segments.push({
        label: `${major ? major.short : ''} ${selectedRombel}`,
        current: currentScreen === 'daySelection',
        onClick: currentScreen !== 'daySelection' ? () => goToScreen('daySelection') : null,
      });
    }
    if (currentScreen === 'scheduleDisplay') {
      segments.push({ label: DAY_LABELS[selectedDay] || '', current: true });
    }
  }

  bc.innerHTML = '';
  segments.forEach((seg, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'crumb-sep';
      sep.innerHTML = ICONS.chevronRight;
      bc.appendChild(sep);
    }
    if (seg.current || !seg.onClick) {
      const span = document.createElement('span');
      span.className = 'crumb';
      span.textContent = seg.label;
      if (seg.current) span.setAttribute('aria-current', 'true');
      bc.appendChild(span);
    } else {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'crumb';
      btn.textContent = seg.label;
      btn.addEventListener('click', seg.onClick);
      bc.appendChild(btn);
    }
  });
  bc.hidden = false;
}

/* ===================================================================
   6. BERANDA — tanggal & kartu "lanjutkan"
   =================================================================== */
function updateCurrentDate() {
  const now = new Date();
  const text = `${DAY_FULL[now.getDay()]}, ${now.getDate()} ${MONTH_FULL[now.getMonth()]} ${now.getFullYear()}`;
  const el = document.getElementById('currentDate');
  if (el) el.textContent = text;
}

function getLastRombel() {
  try {
    const raw = localStorage.getItem('jp-last-rombel');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed && parsed.kelas && parsed.jurusan && parsed.rombel &&
      scheduleData[parsed.kelas] &&
      scheduleData[parsed.kelas][parsed.jurusan] &&
      scheduleData[parsed.kelas][parsed.jurusan][parsed.rombel]
    ) {
      return parsed;
    }
  } catch (e) { /* noop */ }
  return null;
}

function saveLastRombel(kelas, jurusan, rombel) {
  try { localStorage.setItem('jp-last-rombel', JSON.stringify({ kelas, jurusan, rombel })); } catch (e) { /* noop */ }
}

function renderContinueCard() {
  const card = document.getElementById('continueCard');
  if (!card) return;
  const last = getLastRombel();
  if (!last) { card.hidden = true; return; }

  const majorInfo = getMajorInfo(last.kelas, last.jurusan);
  const majorShort = majorInfo ? majorInfo.short : last.jurusan;

  const todayKey = todayDayKey();
  const labelEl = document.getElementById('continueLabel');
  const targetEl = document.getElementById('continueTarget');

  if (todayKey) {
    labelEl.textContent = 'Lihat Jadwal Hari Ini';
    targetEl.textContent = `${majorShort} ${last.rombel} · Kelas ${last.kelas} • ${DAY_LABELS[todayKey]}`;
  } else {
    labelEl.textContent = 'Lanjutkan';
    targetEl.textContent = `${majorShort} ${last.rombel} · Kelas ${last.kelas}`;
  }

  card.hidden = false;
  card.onclick = () => {
    currentState.selectedClass = last.kelas;
    currentState.selectedMajor = last.jurusan;
    currentState.selectedRombel = last.rombel;
    if (todayKey) {
      currentState.selectedDay = todayKey;
      goToScreen('scheduleDisplay');
    } else {
      goToScreen('daySelection');
    }
  };
}

/* ===================================================================
   7. RENDER: PILIH JURUSAN & PILIH ROMBEL
   =================================================================== */
function renderJurusanGrid(kelas) {
  const titleEl = document.getElementById('jurusanTitle');
  if (titleEl) titleEl.textContent = `Pilih Jurusan — Kelas ${kelas}`;

  const grid = document.getElementById('jurusanGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const majors = majorsData[kelas];
  if (!majors || !majors.length) {
    grid.innerHTML = '<p class="no-data">Tidak ada data jurusan untuk kelas ini.</p>';
    return;
  }

  const frag = document.createDocumentFragment();
  majors.forEach((m, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'jurusan-btn stagger-item';
    btn.style.animationDelay = `${i * 30}ms`;
    btn.dataset.jurusan = m.key;
    const rombelCount = m.rombels.length;
    btn.innerHTML = `
      <span class="jurusan-badge">${escapeHtml(m.short)}</span>
      <span class="jurusan-info">
        <span class="jurusan-name">${escapeHtml(m.name)}</span>
        <span class="jurusan-sub">${rombelCount} rombel</span>
      </span>
      <svg class="icon chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    `;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

function renderRombelGrid(kelas, jurusanKey) {
  const major = getMajorInfo(kelas, jurusanKey);
  const titleEl = document.getElementById('rombelTitle');
  if (titleEl) titleEl.textContent = major ? `Pilih Kelas — ${major.name}` : 'Pilih Kelas';

  const grid = document.getElementById('rombelGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const data = scheduleData[kelas] && scheduleData[kelas][jurusanKey];
  if (!data || !major) {
    grid.innerHTML = '<p class="no-data">Tidak ada data untuk jurusan ini.</p>';
    return;
  }

  const rombels = Object.keys(data).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const frag = document.createDocumentFragment();
  rombels.forEach((r, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rombel-btn stagger-item';
    btn.style.animationDelay = `${i * 25}ms`;
    btn.dataset.rombel = r;
    btn.textContent = `${major.short} ${r}`;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

/* ===================================================================
   8. RENDER: PILIH HARI (dengan tanggal asli minggu ini + badge "Hari ini")
   =================================================================== */
function renderDaySelection() {
  const { selectedClass, selectedMajor, selectedRombel } = currentState;
  const major = getMajorInfo(selectedClass, selectedMajor);

  const titleEl = document.getElementById('dayTitle');
  if (titleEl) titleEl.textContent = major ? `${major.short} ${selectedRombel} — Kelas ${selectedClass}` : 'Pilih Hari';

  const grid = document.getElementById('dayGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const weekDates = getWeekDates();
  const todayKey = todayDayKey();
  const frag = document.createDocumentFragment();

  DAY_KEYS.forEach((key, i) => {
    const d = weekDates[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'day-btn stagger-item' + (key === todayKey ? ' is-today' : '');
    btn.style.animationDelay = `${i * 35}ms`;
    btn.dataset.day = key;
    btn.innerHTML = `
      <span class="day-date-badge"><span class="dnum">${d.getDate()}</span><span class="dmon">${MONTH_SHORT[d.getMonth()]}</span></span>
      <span class="day-info">
        <span class="day-name">${DAY_LABELS[key]}</span>
        ${key === todayKey ? '<span class="day-today-tag">Hari ini</span>' : ''}
      </span>
      <span class="day-uniform-icon">${uniformIconSVG(key)}</span>
    `;
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}

/* ===================================================================
   9. RENDER: JADWAL (dengan penanda "Sekarang" bila relevan)
   =================================================================== */
function renderSchedule(day) {
  currentState.selectedDay = day;
  const { selectedClass, selectedMajor, selectedRombel } = currentState;
  const major = getMajorInfo(selectedClass, selectedMajor);

  const titleEl = document.getElementById('scheduleTitle');
  if (titleEl) {
    titleEl.textContent = major
      ? `${DAY_LABELS[day] || day} — ${major.short} ${selectedRombel} (Kelas ${selectedClass})`
      : `${DAY_LABELS[day] || day}`;
  }

  const iconEl = document.getElementById('scheduleUniformIcon');
  if (iconEl) iconEl.innerHTML = uniformIconSVG(day);

  const list = document.getElementById('scheduleList');
  if (!list) return;
  list.innerHTML = '';

  const schedule = scheduleData[selectedClass] && scheduleData[selectedClass][selectedMajor] && scheduleData[selectedClass][selectedMajor][selectedRombel]
    ? scheduleData[selectedClass][selectedMajor][selectedRombel][day]
    : null;

  const isViewingToday = day === todayDayKey();
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  if (schedule && schedule.length) {
    const frag = document.createDocumentFragment();
    schedule.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = 'schedule-item stagger-item';
      row.style.animationDelay = `${i * 25}ms`;

      let isNow = false;
      if (isViewingToday) {
        const range = parseTimeRange(item.time);
        if (range && nowMinutes >= range[0] && nowMinutes < range[1]) isNow = true;
      }
      if (isNow) row.classList.add('is-now');

      const colorVar = getSubjectColorVar(item.subject || '');
      row.innerHTML = `
        <span class="time-slot">${escapeHtml(item.time || '')}</span>
        <span class="subject-cell">
          <span class="subject-dot" style="--subject-color: var(${colorVar})"></span>
          <span class="subject-name">${escapeHtml(item.subject || '')}</span>
          ${isNow ? '<span class="now-tag">Sekarang</span>' : ''}
        </span>
      `;
      frag.appendChild(row);
    });
    list.appendChild(frag);
  } else {
    list.innerHTML = '<div class="no-data">Tidak ada jadwal untuk hari ini.</div>';
  }
}

/* ===================================================================
   10. RENDER: FUN FACTS
   =================================================================== */

/**
 * Memecah satu baris teks fun fact menjadi pasangan label/nilai bila
 * memungkinkan, supaya tampil rapi seperti daftar (label di kiri,
 * nilai di kanan) alih-alih satu kalimat panjang yang "ditempel".
 * Mengembalikan baris: { label, value } (label null jika tidak ada pola).
 */
function splitFactLabelValue(text) {
  let idx = text.indexOf(': ');
  if (idx !== -1) {
    return { label: text.slice(0, idx).trim(), value: text.slice(idx + 2).trim() };
  }
  idx = text.indexOf(' = ');
  if (idx !== -1) {
    return { label: text.slice(0, idx).trim(), value: text.slice(idx + 3).trim() };
  }
  idx = text.indexOf(' — ');
  if (idx !== -1) {
    return { label: text.slice(0, idx).trim(), value: text.slice(idx + 3).trim() };
  }
  return { label: null, value: text.trim() };
}

function parseFactEntry(raw) {
  const rows = [];
  String(raw)
    .split(/\s+·\s+/)
    .forEach((part) => {
      part = part.trim();
      if (!part) return;
      // Dua pasangan "label: nilai" yang digabung dengan em dash, mis.
      // "Guru perempuan: 47 orang — Guru laki-laki: 21 orang" → 2 baris.
      const dashParts = part.split(/\s+—\s+/);
      if (dashParts.length === 2 && dashParts[0].includes(': ') && dashParts[1].includes(': ')) {
        dashParts.forEach((p) => rows.push(splitFactLabelValue(p)));
        return;
      }
      rows.push(splitFactLabelValue(part));
    });
  return rows;
}

function renderFunFacts() {
  const container = document.getElementById('factsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!funFactsData || !funFactsData.length) {
    container.innerHTML = '<p class="no-data">Tidak ada data fun facts tersedia.</p>';
    return;
  }

  const frag = document.createDocumentFragment();
  funFactsData.forEach((fact, i) => {
    const card = document.createElement('div');
    card.className = 'card stagger-item';
    card.style.animationDelay = `${i * 45}ms`;

    const itemsHtml = (fact.items || [])
      .flatMap((it) => parseFactEntry(it))
      .map((row) => {
        if (row.label) {
          return `<li class="fact-item fact-item--pair">
            <span class="fact-item-label">${escapeHtml(row.label)}</span>
            <span class="fact-item-value">${escapeHtml(row.value)}</span>
          </li>`;
        }
        return `<li class="fact-item fact-item--plain">${escapeHtml(row.value)}</li>`;
      })
      .join('');

    card.innerHTML = `
      <div class="fact-card-head">
        ${FACT_ICONS[i % FACT_ICONS.length]}
        <h3>${escapeHtml(fact.title)}</h3>
      </div>
      <ul class="fact-list">${itemsHtml}</ul>
    `;
    frag.appendChild(card);
  });
  container.appendChild(frag);
}

/* ===================================================================
   11. INSTALL APP (PWA) — Android/Chrome via beforeinstallprompt,
       iOS via tutorial khusus, browser lain via fallback umum.
   =================================================================== */
let deferredInstallPrompt = null;

function isStandaloneDisplay() {
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}

function isIOSDevice() {
  const ua = window.navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/* Di iOS, "Add to Home Screen" cuma ada di menu Share Safari. Kalau
   halaman dibuka lewat browser lain (atau in-app browser medsos),
   pengguna perlu diarahkan buka dulu di Safari — deteksi dari
   penanda user-agent khas tiap browser/in-app browser tsb. */
function detectNonSafariIOSBrowser() {
  if (!isIOSDevice()) return null;
  const ua = window.navigator.userAgent || '';
  if (/CriOS/i.test(ua)) return 'Chrome';
  if (/FxiOS/i.test(ua)) return 'Firefox';
  if (/EdgiOS/i.test(ua)) return 'Edge';
  if (/OPiOS/i.test(ua)) return 'Opera';
  if (/DuckDuckGo/i.test(ua)) return 'DuckDuckGo';
  if (/GSA/i.test(ua)) return 'Google App';
  if (/FBAN|FBAV/i.test(ua)) return 'Facebook';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/Line\//i.test(ua)) return 'LINE';
  return null; // default: anggap Safari
}

function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.hidden = false;
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.hidden = true;
}

function initModals() {
  const bindClose = (closeId, overlayId) => {
    const closeBtn = document.getElementById(closeId);
    const overlay = document.getElementById(overlayId);
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(overlayId));
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(overlayId); });
  };
  bindClose('iosModalClose', 'iosModalOverlay');
  bindClose('genericModalClose', 'genericModalOverlay');

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeModal('iosModalOverlay');
    closeModal('genericModalOverlay');
  });
}

function initInstallUI() {
  const card = document.getElementById('installCard');
  const action = document.getElementById('installAction');
  const dismiss = document.getElementById('installDismiss');
  if (!card || !action || !dismiss) return;

  if (isStandaloneDisplay()) { card.hidden = true; return; }

  let dismissed = false;
  try { dismissed = localStorage.getItem('jp-install-dismissed') === '1'; } catch (e) { /* noop */ }
  card.hidden = dismissed;

  dismiss.addEventListener('click', (e) => {
    e.stopPropagation();
    card.hidden = true;
    try { localStorage.setItem('jp-install-dismissed', '1'); } catch (err) { /* noop */ }
  });

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!dismissed) card.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    card.hidden = true;
    deferredInstallPrompt = null;
  });

  action.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      try {
        const choice = await deferredInstallPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') card.hidden = true;
      } catch (e) { /* noop */ }
      deferredInstallPrompt = null;
    } else if (isIOSDevice()) {
      const otherBrowser = detectNonSafariIOSBrowser();
      const notice = document.getElementById('iosBrowserNotice');
      const nameEl = document.getElementById('iosBrowserName');
      if (notice) {
        if (otherBrowser) {
          if (nameEl) nameEl.textContent = otherBrowser;
          notice.hidden = false;
        } else {
          notice.hidden = true;
        }
      }
      openModal('iosModalOverlay');
    } else {
      openModal('genericModalOverlay');
    }
  });
}

/* ===================================================================
   12. PROTEKSI ASET GAMBAR
   Mencegah cara unduh kasual (klik-kanan "Simpan Gambar Sebagai...",
   tap-tahan di mobile, drag keluar halaman) KHUSUS pada elemen
   bergambar (logo sekolah & elemen bertanda .protected-img/
   .protected-bg untuk pemakaian di masa depan). Listener sengaja
   dibatasi ke elemen ini saja — klik-kanan & seleksi teks di bagian
   lain halaman (mis. untuk menyalin jadwal) tetap berfungsi normal.

   Catatan jujur: ini hanya menghalangi jalur unduh yang umum/kasual.
   Tidak ada teknik front-end yang benar-benar kedap terhadap pengguna
   yang membuka DevTools atau mengambil screenshot — itu di luar
   jangkauan proteksi sisi-klien mana pun.
   =================================================================== */
const PROTECTED_IMAGE_SELECTOR = 'img, .protected-img, .protected-bg, .school-logo, .logo-shield';

function initImageProtection() {
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest && e.target.closest(PROTECTED_IMAGE_SELECTOR)) e.preventDefault();
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.closest && e.target.closest(PROTECTED_IMAGE_SELECTOR)) e.preventDefault();
  });
}

/* ===================================================================
   13. SERVICE WORKER (dukungan offline)
   =================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((err) => {
        console.error('Pendaftaran service worker gagal:', err);
      });
    });
  }
}

/* ===================================================================
   14. EVENT LISTENERS (delegasi pada kontainer yang persisten)
   =================================================================== */
function initEventListeners() {
  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.addEventListener('click', () => history.back());

  const gradeGrid = document.getElementById('gradeGrid');
  if (gradeGrid) {
    gradeGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.grade-btn');
      if (!btn) return;
      currentState.selectedClass = btn.dataset.class;
      currentState.selectedMajor = null;
      currentState.selectedRombel = null;
      goToScreen('jurusanSelection');
    });
  }

  const jurusanGrid = document.getElementById('jurusanGrid');
  if (jurusanGrid) {
    jurusanGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.jurusan-btn');
      if (!btn) return;
      const jurusanKey = btn.dataset.jurusan;
      currentState.selectedMajor = jurusanKey;
      currentState.selectedRombel = null;

      const major = getMajorInfo(currentState.selectedClass, jurusanKey);
      if (major && major.rombels.length === 1) {
        // Hanya ada 1 rombel di jurusan ini — langsung lompat ke pilih hari.
        currentState.selectedRombel = major.rombels[0];
        saveLastRombel(currentState.selectedClass, jurusanKey, currentState.selectedRombel);
        goToScreen('daySelection');
      } else {
        goToScreen('rombelSelection');
      }
    });
  }

  const rombelGrid = document.getElementById('rombelGrid');
  if (rombelGrid) {
    rombelGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.rombel-btn');
      if (!btn) return;
      currentState.selectedRombel = btn.dataset.rombel;
      saveLastRombel(currentState.selectedClass, currentState.selectedMajor, currentState.selectedRombel);
      goToScreen('daySelection');
    });
  }

  const dayGrid = document.getElementById('dayGrid');
  if (dayGrid) {
    dayGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.day-btn');
      if (!btn) return;
      currentState.selectedDay = btn.dataset.day;
      goToScreen('scheduleDisplay');
    });
  }

  const funFactsBtn = document.getElementById('funFactsBtn');
  if (funFactsBtn) funFactsBtn.addEventListener('click', () => goToScreen('funFactsDisplay'));

  window.addEventListener('popstate', (e) => {
    const state = e.state;
    if (!state) {
      currentState = { selectedClass: null, selectedMajor: null, selectedRombel: null, selectedDay: null, currentScreen: 'mainMenu' };
      goToScreen('mainMenu', { push: false, direction: 'backward' });
      return;
    }
    currentState = Object.assign({}, state);
    goToScreen(state.currentScreen, { push: false, direction: 'backward' });
  });
}

/* ===================================================================
   15. INISIALISASI
   =================================================================== */
function init() {
  initTheme();
  updateCurrentDate();
  renderContinueCard();
  initInstallUI();
  initModals();
  initImageProtection();
  initServiceWorker();
  initEventListeners();

  try {
    history.replaceState(Object.assign({}, currentState, { currentScreen: 'mainMenu' }), '', '#mainMenu');
  } catch (e) { /* noop */ }

  setActiveScreen('mainMenu', null);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
