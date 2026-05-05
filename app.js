// Matches all %%...%% tokens in document order.
const TOKEN_RE = /%%[^%]+%%/g;

const MONTHS_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_ABBR = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Flat list of all phrases across categories, built at render time for indexed lookup.
let flatPhrases = [];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Replaces each %%...%% token with a styled placeholder for display in labels.
function templatePreview(template, tokens) {
  let idx = 0;
  return template.replace(TOKEN_RE, () => {
    const rule = tokens[idx++];
    if (!rule) return '?';
    if (rule.type === 'month')      return `<span class="label-token">Month</span>`;
    if (rule.type === 'month-abbr') return `<span class="label-token">Mth</span>`;
    const len = rule.pad > 0 ? rule.pad : 1;
    return `<span class="label-token">${'#'.repeat(len)}</span>`;
  });
}

// Replaces each %%...%% token in order using the phrase's own rules array.
// Flags are consumed and stripped; only the generated value remains.
function replaceTokens(template, rules) {
  let idx = 0;
  return template.replace(TOKEN_RE, () => {
    const rule = rules[idx++];
    if (!rule) return '';
    if (rule.type === 'month')      return MONTHS_FULL[Math.floor(Math.random() * 12)];
    if (rule.type === 'month-abbr') return MONTHS_ABBR[Math.floor(Math.random() * 12)];
    const val = randInt(rule.min, rule.max);
    if (rule.type === 'hex') {
      const hex = val.toString(16).toUpperCase();
      return rule.pad > 0 ? hex.padStart(rule.pad, '0') : hex;
    }
    return rule.pad > 0 ? String(val).padStart(rule.pad, '0') : String(val);
  });
}

// ── DOM helpers ──────────────────────────────────────────────

function getCheckedPhrases() {
  return Array.from(document.querySelectorAll('#phraseList input[type="checkbox"]'))
    .filter(cb => cb.checked)
    .map(cb => flatPhrases[Number(cb.dataset.index)]);
}

function syncGenerateButton() {
  document.getElementById('generateBtn').disabled = getCheckedPhrases().length === 0;
}

function syncRowHighlight(li, checked) {
  li.classList.toggle('checked', checked);
}

// ── Build list ───────────────────────────────────────────────

function buildPhraseList() {
  const list = document.getElementById('phraseList');
  list.innerHTML = '';
  flatPhrases = [];

  CONFIG.categories.forEach(cat => {
    const header = document.createElement('li');
    header.className = 'category-header';
    header.textContent = cat.name;
    list.appendChild(header);

    cat.phrases.forEach(entry => {
      const i = flatPhrases.length;
      flatPhrases.push(entry);

      const id = `phrase-${i}`;

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.id = id;
      cb.dataset.index = i;
      cb.checked = true;
      cb.addEventListener('change', () => {
        syncRowHighlight(li, cb.checked);
        syncGenerateButton();
      });

      const tpl = document.createElement('span');
      tpl.className = 'label-template';
      tpl.innerHTML = templatePreview(entry.template, entry.tokens);

      const desc = document.createElement('span');
      desc.className = 'label-desc';
      desc.textContent = entry.label;

      const label = document.createElement('label');
      label.htmlFor = id;
      label.appendChild(tpl);
      label.appendChild(desc);

      const li = document.createElement('li');
      li.classList.add('checked');
      li.addEventListener('click', e => {
        if (e.target !== cb) {
          cb.checked = !cb.checked;
          cb.dispatchEvent(new Event('change'));
        }
      });
      li.appendChild(cb);
      li.appendChild(label);
      list.appendChild(li);
    });
  });
}

// ── Generate ─────────────────────────────────────────────────

function generate() {
  const pool = getCheckedPhrases();
  if (pool.length === 0) return;

  const entry = pool[Math.floor(Math.random() * pool.length)];
  const result = replaceTokens(entry.template, entry.tokens);

  const el = document.getElementById('resultText');
  el.textContent = result;
  el.classList.remove('placeholder');

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.disabled = false;
  copyBtn.textContent = 'Copy';
  copyBtn.classList.remove('copied');
}

// ── Copy ─────────────────────────────────────────────────────

function copyResult() {
  const text = document.getElementById('resultText').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1500);
  });
}

// ── Init ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  buildPhraseList();
  syncGenerateButton();

  document.getElementById('selectAll').addEventListener('click', () => {
    document.querySelectorAll('#phraseList input[type="checkbox"]').forEach(cb => {
      cb.checked = true;
      syncRowHighlight(cb.closest('li'), true);
    });
    syncGenerateButton();
  });

  document.getElementById('selectNone').addEventListener('click', () => {
    document.querySelectorAll('#phraseList input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
      syncRowHighlight(cb.closest('li'), false);
    });
    syncGenerateButton();
  });

  document.getElementById('generateBtn').addEventListener('click', generate);
  document.getElementById('copyBtn').addEventListener('click', copyResult);
});
