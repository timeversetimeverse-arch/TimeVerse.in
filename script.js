/* ══════════════════════════════════════════════════════
   TimeVerse.in — Main JavaScript
   © 2024 TimeVerse.in | Mumbai, India
══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────
   PRODUCT DATA (with real watchworld.in images)
───────────────────────────────────────────────────── */
const WW = 'https://watchworld.in/cdn/shop/files/';
const WC = 'https://watchworld.in/cdn/shop/collections/';

const PRODS = [
  { id: 1,  brand: 'Invicta',    name: 'Classic Gold Dial Men\'s Watch',                op: 2599, img: WW + 'IMG_20240813_203626_769_jpg.webp',                                   cat: 'men',     tags: ['bestseller'], feats: ['Gold Dial', 'Stainless Steel Case', 'Mineral Crystal', 'Water Resistant'] },
  { id: 2,  brand: 'Rado',       name: 'Swiss Time Black Diamond Dial Men\'s Watch',    op: 2199, img: WW + 'WhatsAppImage2025-01-30at13.43.53_d72eed76.jpg',                      cat: 'men',     tags: ['new'],        feats: ['Diamond Dial', 'Swiss Movement', 'Stainless Steel', '50m WR'] },
  { id: 3,  brand: 'Invicta',    name: 'Premium Men\'s Watch White Dial',               op: 2599, img: WW + '69789613-6679-4c60-98d9-0721206053c8-compressed.jpg',                 cat: 'men',     tags: ['bestseller'], feats: ['White Dial', 'Premium Case', 'Date Display', 'Quartz Movement'] },
  { id: 4,  brand: 'Rado',       name: 'Swiss Time Gold Diamond Dial Men\'s Watch',     op: 2199, img: WW + 'WhatsAppImage2025-01-30at13.43.23_d754e226.jpg',                      cat: 'men',     tags: [],             feats: ['Gold Diamond Dial', 'Swiss Movement', '50m WR', 'Analog Display'] },
  { id: 5,  brand: 'Rado',       name: 'Diastar Gold Chronograph Men\'s Watch',         op: 3749, img: WW + 'rn-image-picker_lib_temp_8d250b24-2b96-4b09-a698-6e9ffa2f91fa.jpg',  cat: 'premium', tags: ['bestseller'], feats: ['Chronograph', 'Gold Dial', 'Stainless Steel', 'Tachymeter Scale'] },
  { id: 6,  brand: 'Rado',       name: 'Swiss Time White Diamond Dial Men\'s Watch',    op: 2199, img: WW + 'WhatsAppImage2025-01-30at13.44.52_8d3adca9.jpg',                      cat: 'men',     tags: ['new'],        feats: ['White Diamond Dial', 'Swiss Movement', 'Analog Display', '50m WR'] },
  { id: 7,  brand: 'Invicta',    name: 'Black Gold Elite Men\'s Watch',                 op: 2599, img: WW + '68317aeb6b78b2.jpg',                                                  cat: 'men',     tags: ['bestseller'], feats: ['Black Gold Dial', 'PVD Coated Case', 'Mineral Crystal', '50m WR'] },
  { id: 8,  brand: 'Diesel',     name: 'Gold Dial New Model Men\'s Watch',              op: 2099, img: WW + 'f80bdc_89ddd5017cca4498987a7cd0adf47a63_mv2.webp',                   cat: 'men',     tags: [],             feats: ['Gold Dial', 'Oversized Case', 'Date Display', 'Leather Strap'] },
  { id: 9,  brand: 'Rolex',      name: 'Cosmograph Daytona Sky Blue Automatic',         op: 3999, img: WW + 'WhatsAppImage2026-02-16at9.24.16PM.jpg',                              cat: 'premium', tags: ['new', 'bestseller'], feats: ['Automatic Movement', 'Sapphire Crystal', 'Tachymetre Bezel', 'Oyster Bracelet'] },
  { id: 10, brand: 'Tag Heuer',  name: 'Grand Carrera 1887 Black Dial Men\'s Watch',    op: 2649, img: WW + '1_c8dec71f-8eaa-4867-8080-456371aad6a0.jpg',                          cat: 'premium', tags: ['new'],        feats: ['Black Dial', 'Swiss Automatic', 'Chronograph', '100m WR'] },
  { id: 11, brand: 'Tag Heuer',  name: 'Grand Carrera 1887 Green Dial Men\'s Watch',    op: 2649, img: WW + 'WhatsAppImage2026-02-12at5.18.46PM_8dbbea2c-8077-45ef-bf70-eb2d8d5b5f5d.jpg', cat: 'premium', tags: [], feats: ['Green Dial', 'Swiss Automatic', 'Tachymetre Bezel', 'Stainless Steel'] },
  { id: 12, brand: 'Gucci',      name: 'Chemin Des Tourelles Gold Dial Watch',          op: 2299, img: WW + 'WhatsAppImage2026-02-16at7.48.53PM.jpg',                              cat: 'premium', tags: ['new'],        feats: ['Gold Dial', 'Italian Luxury', 'Sapphire Crystal', 'Swiss Quartz'] },
  { id: 13, brand: 'Gucci',      name: 'Chemin Des Tourelles Black Dial Watch',         op: 2299, img: WW + '2_8893b644-7bc1-41b4-a0d1-9df2dfddb822.jpg',                         cat: 'men',     tags: [],             feats: ['Black Dial', 'Italian Design', 'GG Logo', 'Swiss Quartz'] },
  { id: 14, brand: 'Rado',       name: 'Automatic Jubilee Red Dial Men\'s Watch',       op: 2399, img: WW + '2_9059fc86-9c7b-4b51-a111-14a380c9b4f9.jpg',                         cat: 'premium', tags: ['bestseller'], feats: ['Red Jubilee Dial', 'Automatic Movement', 'Stainless Steel', 'Date Window'] },
  { id: 15, brand: 'Rado',       name: 'Automatic Jubilee Black Diamond Dial Watch',    op: 2399, img: WW + '1_041fd4a4-fa53-42dc-8bc4-688496587899.jpg',                         cat: 'premium', tags: [],             feats: ['Diamond Dial', 'Swiss Automatic', 'Jubilee Bracelet', 'Sapphire Crystal'] },
  { id: 16, brand: 'Rado',       name: 'Automatic Jubilee Black Dial Men\'s Watch',     op: 2399, img: WW + '2_b66f8ed5-6d12-43ce-9ee6-abd70e78115b.jpg',                         cat: 'men',     tags: ['new'],        feats: ['Black Dial', 'Automatic Movement', 'Date Display', 'Stainless Steel'] },
];

const BRANDS = [
  { n: 'Rolex',            img: WC + 'Ellipse_31.png' },
  { n: 'Rado',             img: WC + 'Ellipse_30.png' },
  { n: 'Invicta',          img: WC + 'Ellipse_23.png' },
  { n: 'Edifice',          img: WC + 'Ellipse_14.png' },
  { n: 'Tissot',           img: WC + 'Ellipse_4.png'  },
  { n: 'Fossil',           img: WC + 'Ellipse_17.png' },
  { n: 'Diesel',           img: WC + 'Ellipse_13.png' },
  { n: 'Hublot',           img: WC + 'Ellipse_22.png' },
  { n: 'Patek Philippe',   img: WC + 'Ellipse_29.png' },
  { n: 'Daniel Wellington',img: WC + 'Ellipse_12.png' },
  { n: 'Emporio Armani',   img: WC + 'Ellipse_15.png' },
  { n: 'Versace',          img: WC + 'Ellipse_34.png' },
];

/* ─────────────────────────────────────────────────────
   PRICE CALCULATION
   Rules: ₹1,499 → ₹999 (save ₹500)
          ₹2,000+ → subtract ₹800
───────────────────────────────────────────────────── */
function calcPrice(op) {
  if (op === 1499) return { cur: 999, save: 500 };
  if (op >= 2000)  return { cur: op - 800, save: 800 };
  return { cur: op, save: 0 };
}

const fmt    = n => '₹' + n.toLocaleString('en-IN');
const dpct   = (o, c) => Math.round((o - c) / o * 100);

/* ─────────────────────────────────────────────────────
   APP STATE
───────────────────────────────────────────────────── */
const S = {
  cart: [],
  user: null,
  page: 'home',
  filter: 'all',
  orders: [],
};

/* ─────────────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────────────── */
const curEl = document.getElementById('cur');
const curREl = document.getElementById('curR');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  curEl.style.left = mx + 'px';
  curEl.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  curREl.style.left = rx + 'px';
  curREl.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.addEventListener('mouseover', e => {
  if (e.target.matches('a, button, [onclick], .pcard, .brand-item, .coll-banner')) {
    curEl.classList.add('hov');
    curREl.classList.add('hov');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.matches('a, button, [onclick], .pcard, .brand-item, .coll-banner')) {
    curEl.classList.remove('hov');
    curREl.classList.remove('hov');
  }
});

/* ─────────────────────────────────────────────────────
   HEADER SCROLL EFFECT
───────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('hdr').classList.toggle('sc', window.scrollY > 60);
});

/* ─────────────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────────────── */
let mobOpen = false;
function toggleMob() {
  mobOpen = !mobOpen;
  document.getElementById('mobMenu').classList.toggle('open', mobOpen);
}

/* ─────────────────────────────────────────────────────
   PAGE ROUTING
───────────────────────────────────────────────────── */
function nav(page, data = null) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  const target = document.getElementById('pg-' + page);
  if (!target) return;
  target.classList.add('on');
  S.page = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update nav active states
  document.querySelectorAll('.nav-a').forEach(a => {
    a.classList.toggle('active', a.dataset.pg === page);
  });

  // Close mobile menu if open
  if (mobOpen) toggleMob();

  // Page-specific init
  if (page === 'detail'   && data !== null) renderDetail(data);
  if (page === 'checkout')  renderCheckout();
  if (page === 'account')   renderAccount();
  if (page === 'products')  renderAllProds();
  if (page === 'home')    { renderFeatured(); initStats(); }

  setTimeout(initReveal, 100);
}

/* ─────────────────────────────────────────────────────
   SEARCH
───────────────────────────────────────────────────── */
function openSrch() {
  document.getElementById('srchOv').classList.add('on');
  setTimeout(() => document.getElementById('srchInp').focus(), 300);
}
function closeSrch() {
  document.getElementById('srchOv').classList.remove('on');
  document.getElementById('srchInp').value = '';
  document.getElementById('srchRes').innerHTML = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSrch(); });

document.getElementById('srchInp').addEventListener('input', function () {
  const q   = this.value.toLowerCase().trim();
  const res = document.getElementById('srchRes');
  if (!q) { res.innerHTML = ''; return; }

  const hits = PRODS.filter(p =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
  );

  if (!hits.length) {
    res.innerHTML = '<p style="color:var(--tx-m);text-align:center;padding:16px">No results found</p>';
    return;
  }

  res.innerHTML = hits.slice(0, 6).map(p => {
    const { cur } = calcPrice(p.op);
    return `<div class="srch-item" onclick="closeSrch(); nav('detail', ${p.id})">
      <img class="srch-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div>
        <div class="srch-name">${p.brand} — ${p.name}</div>
        <div class="srch-price">${fmt(cur)}</div>
      </div>
    </div>`;
  }).join('');
});

/* ─────────────────────────────────────────────────────
   PRODUCT CARD RENDERER
───────────────────────────────────────────────────── */
function pCard(p) {
  const { cur, save } = calcPrice(p.op);
  const pct  = dpct(p.op, cur);
  const badge = p.tags.includes('bestseller')
    ? '<span class="pbadge">Bestseller</span>'
    : p.tags.includes('new')
    ? '<span class="pbadge new-b">New</span>'
    : '';

  return `
    <div class="pcard rv" onclick="nav('detail', ${p.id})">
      <div class="pcard-img-w">
        <img class="pcard-img" src="${p.img}" alt="${p.name}" loading="lazy">
        ${badge}
        ${pct > 0 ? `<span class="pbadge sale-b">-${pct}%</span>` : ''}
        <div class="pcard-ov">
          <button class="qadd" onclick="event.stopPropagation(); addCart(${p.id})">
            Quick Add to Cart
          </button>
        </div>
      </div>
      <div class="pinfo">
        <div class="pbrand">${p.brand}</div>
        <div class="pname">${p.name}</div>
        <div class="pprice">
          ${save > 0 ? `<span class="price-o">${fmt(p.op)}</span>` : ''}
          <span class="price-c">${fmt(cur)}</span>
          ${save > 0 ? `<span class="price-d">Save ${fmt(save)}</span>` : ''}
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────
   FEATURED PRODUCTS (Home Page)
───────────────────────────────────────────────────── */
function renderFeatured() {
  const el = document.getElementById('featProds');
  if (el) {
    el.innerHTML = PRODS.slice(0, 8).map(pCard).join('');
    initReveal();
  }
}

/* ─────────────────────────────────────────────────────
   BRAND LOGOS MARQUEE
───────────────────────────────────────────────────── */
function renderBrands() {
  const el = document.getElementById('brandsTrack');
  if (!el) return;
  const doubled = [...BRANDS, ...BRANDS]; // duplicate for infinite loop
  el.innerHTML = doubled.map(b => `
    <div class="brand-item" onclick="nav('products')">
      <img class="brand-logo-img" src="${b.img}" alt="${b.n}"
           onerror="this.style.background='var(--dk4)'">
      <span class="brand-name">${b.n}</span>
    </div>`).join('');
}

/* ─────────────────────────────────────────────────────
   ALL PRODUCTS PAGE
───────────────────────────────────────────────────── */
function renderAllProds() {
  renderFilters();
  const el = document.getElementById('allProds');
  if (!el) return;

  const filtered = S.filter === 'all'
    ? PRODS
    : S.filter === 'bestseller'
    ? PRODS.filter(p => p.tags.includes('bestseller'))
    : S.filter === 'new'
    ? PRODS.filter(p => p.tags.includes('new'))
    : PRODS.filter(p => p.cat === S.filter);

  el.innerHTML = filtered.length
    ? filtered.map(pCard).join('')
    : '<p style="color:var(--tx-m);text-align:center;padding:60px">No watches found in this category.</p>';

  initReveal();
}

function renderFilters() {
  const cats = [
    { v: 'all',        l: 'All Watches' },
    { v: 'men',        l: "Men's" },
    { v: 'ladies',     l: 'Ladies' },
    { v: 'couple',     l: 'Couple' },
    { v: 'sport',      l: 'Sport' },
    { v: 'premium',    l: 'Premium' },
    { v: 'new',        l: 'New Arrivals' },
    { v: 'bestseller', l: 'Bestsellers' },
  ];
  const el = document.getElementById('filterBar');
  if (!el) return;
  el.innerHTML = cats.map(c =>
    `<button class="fbtn ${S.filter === c.v ? 'on' : ''}" onclick="setFilter('${c.v}')">${c.l}</button>`
  ).join('') + `<span style="flex:1"></span><span style="font-size:11px;color:var(--tx-m)">${PRODS.length} watches</span>`;
}

function setFilter(f) {
  S.filter = f;
  renderAllProds();
}

/* ─────────────────────────────────────────────────────
   PRODUCT DETAIL PAGE
───────────────────────────────────────────────────── */
function renderDetail(id) {
  const p = PRODS.find(x => x.id === id);
  if (!p) return;

  const { cur, save } = calcPrice(p.op);
  const pct = dpct(p.op, cur);

  document.getElementById('pdCt').innerHTML = `
    <div class="pd-layout">
      <div class="pd-gallery">
        <div class="pd-main">
          <img src="${p.img}" alt="${p.name}" id="mainImg">
          <div class="pd-genuine">100% Genuine ✓</div>
        </div>
        <div class="pd-thumbs">
          ${[0, 1, 2].map((_, idx) =>
            `<div class="pd-thumb ${idx === 0 ? 'on' : ''}">
               <img src="${p.img}" alt="${p.name}">
             </div>`
          ).join('')}
        </div>
      </div>

      <div class="pd-info">
        <div class="pd-brand-l">${p.brand}</div>
        <h1 class="pd-h">${p.name}</h1>
        <div class="pd-rate">
          <span class="stars">★★★★★</span>
          <span class="rc">(${42 + p.id} reviews)</span>
        </div>

        <div class="pd-price">
          <span class="pp-c">${fmt(cur)}</span>
          ${save > 0 ? `<span class="pp-o">${fmt(p.op)}</span>
          <span class="pp-s">SAVE ${fmt(save)}</span>` : ''}
        </div>

        <div class="pd-feats">
          <h4>Key Features</h4>
          <div class="feats-l">
            ${p.feats.map(f => `<div class="feat-i">${f}</div>`).join('')}
          </div>
        </div>

        <div class="pd-actions">
          <div class="qty-sel">
            <button class="qb" onclick="adjQ(-1)">−</button>
            <input class="qi" id="qi" value="1" min="1" max="10" type="number" readonly>
            <button class="qb" onclick="adjQ(1)">+</button>
          </div>
          <button class="atc-btn" onclick="addCart(${p.id}); toast('✅ ${p.brand} watch added to cart!')">
            Add to Cart
          </button>
        </div>

        <button class="bn-btn" onclick="addCart(${p.id}); nav('checkout')">
          Buy Now — Cash on Delivery ⚡
        </button>

        <div class="pd-meta">
          <div>Brand: <span>${p.brand}</span></div>
          <div>Category: <span>${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</span></div>
          <div>Shipping: <span style="color:var(--green)">FREE Pan-India ✓</span></div>
          <div>Payment: <span>Cash on Delivery Available ✓</span></div>
          <div>Delivery: <span>3–7 Business Days</span></div>
        </div>

        <div class="no-ref-box">
          <strong>⚠️ Non-Returnable & Non-Refundable</strong>
          At TimeVerse.in, all purchases are non-returnable and non-refundable. Please review all product details before completing your purchase. Once an order is confirmed and shipped, it cannot be cancelled, returned, or refunded.
          For queries: <a href="mailto:timeversetimeverse@gmail.com" style="color:var(--gold)">timeversetimeverse@gmail.com</a>
        </div>
      </div>
    </div>`;

  initReveal();
}

function adjQ(d) {
  const el = document.getElementById('qi');
  if (el) el.value = Math.max(1, Math.min(10, +el.value + d));
}

/* ─────────────────────────────────────────────────────
   CART MANAGEMENT
───────────────────────────────────────────────────── */
function addCart(id) {
  const p  = PRODS.find(x => x.id === id);
  if (!p) return;
  const { cur } = calcPrice(p.op);
  const ex = S.cart.find(x => x.id === id);
  if (ex) {
    ex.qty++;
  } else {
    S.cart.push({ id, qty: 1, price: cur, op: p.op, name: p.name, brand: p.brand, img: p.img });
  }
  updCart();
}

function rmCart(id) {
  S.cart = S.cart.filter(x => x.id !== id);
  updCart();
  renderCartDr();
}

function updQCart(id, d) {
  const item = S.cart.find(x => x.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + d);
    updCart();
    renderCartDr();
  }
}

function updCart() {
  const total = S.cart.reduce((s, x) => s + x.qty, 0);
  const el    = document.getElementById('cc');
  el.textContent = total;
  el.classList.toggle('on', total > 0);
}

function toggleCart() {
  const ov = document.getElementById('cartOv');
  ov.classList.toggle('on');
  if (ov.classList.contains('on')) renderCartDr();
}

function renderCartDr() {
  const ci = document.getElementById('cartItems');
  const ft = document.getElementById('cartFt');

  if (!S.cart.length) {
    ci.innerHTML = `
      <div class="cart-empty-s">
        <div style="font-size:56px">🛒</div>
        <div>Your cart is empty</div>
        <button class="btn-o" style="margin-top:12px" onclick="toggleCart(); nav('products')">
          Start Shopping
        </button>
      </div>`;
    ft.innerHTML = '';
    return;
  }

  ci.innerHTML = S.cart.map(item => `
    <div class="ci">
      <div class="ci-img">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div style="flex:1">
        <div class="ci-br">${item.brand}</div>
        <div class="ci-nm">${item.name}</div>
        <div class="ci-pr">${fmt(item.price)}</div>
        <div class="ci-qty">
          <button class="cqb" onclick="updQCart(${item.id}, -1)">−</button>
          <span style="font-size:13px;font-weight:600;min-width:18px;text-align:center">${item.qty}</span>
          <button class="cqb" onclick="updQCart(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="ci-rm" onclick="rmCart(${item.id})">✕</button>
    </div>`).join('');

  const sub = S.cart.reduce((s, x) => s + x.price * x.qty, 0);
  ft.innerHTML = `
    <div class="cart-ft">
      <div class="cart-sub"><span>Subtotal</span><span>${fmt(sub)}</span></div>
      <div class="cart-sub"><span>Shipping</span><span style="color:var(--green)">FREE</span></div>
      <div class="cart-tot"><span>Total</span><span>${fmt(sub)}</span></div>
      <button class="ck-btn" onclick="toggleCart(); nav('checkout')">
        Checkout — COD Available
      </button>
    </div>`;
}

/* ─────────────────────────────────────────────────────
   CHECKOUT PAGE
───────────────────────────────────────────────────── */
function renderCheckout() {
  const el  = document.getElementById('ckCt');
  const sub = S.cart.reduce((s, x) => s + x.price * x.qty, 0);

  if (!S.cart.length) {
    el.innerHTML = `
      <div style="padding:120px 40px;text-align:center">
        <div style="font-size:60px;margin-bottom:20px">🛒</div>
        <h2 style="font-family:var(--ff-d);font-size:30px;margin-bottom:12px">Your cart is empty</h2>
        <button class="btn-g" onclick="nav('products')">Browse Watches</button>
      </div>`;
    return;
  }

  el.innerHTML = `
    <div class="ck-layout">
      <div class="ck-form">
        <h2>Checkout</h2>

        <div class="fs">
          <h3>Contact Information</h3>
          <div class="fg"><label>Full Name *</label><input class="fc" id="ck1" placeholder="Your full name" value="${S.user ? S.user.name : ''}"></div>
          <div class="fr">
            <div class="fg"><label>Email *</label><input class="fc" id="ck2" type="email" placeholder="email@example.com" value="${S.user ? S.user.email : ''}"></div>
            <div class="fg"><label>Phone Number *</label><input class="fc" id="ck3" type="tel" placeholder="+91 98765 43210"></div>
          </div>
        </div>

        <div class="fs">
          <h3>Shipping Address</h3>
          <div class="fg"><label>Address Line 1 *</label><input class="fc" id="ck4" placeholder="House/Flat No., Street Name"></div>
          <div class="fg"><label>Address Line 2</label><input class="fc" id="ck5" placeholder="Area, Landmark (optional)"></div>
          <div class="fr">
            <div class="fg"><label>City *</label><input class="fc" id="ck6" placeholder="Mumbai"></div>
            <div class="fg"><label>State *</label><input class="fc" id="ck7" placeholder="Maharashtra"></div>
          </div>
          <div class="fr">
            <div class="fg"><label>PIN Code *</label><input class="fc" id="ck8" placeholder="400001"></div>
            <div class="fg"><label>Country</label><input class="fc" value="India 🇮🇳" readonly></div>
          </div>
        </div>

        <div class="fs">
          <h3>Payment Method</h3>
          <div class="pay-opts">
            <div class="po sel">
              <div class="pr sel"></div>
              <div>
                <div class="pl">💰 Cash on Delivery (COD)</div>
                <div class="pd-desc">Pay when your order arrives. Available pan-India at no extra charge.</div>
              </div>
            </div>
            <div class="po" style="opacity:.5;cursor:not-allowed">
              <div class="pr"></div>
              <div>
                <div class="pl">💳 Online Payment</div>
                <div class="pd-desc" style="color:rgba(255,255,255,.3)">UPI / Cards / Net Banking — Coming Soon</div>
              </div>
            </div>
          </div>
          <div style="background:rgba(201,168,76,.05);border:1px solid rgba(201,168,76,.15);border-radius:3px;padding:14px;margin-top:12px;font-size:12px;color:var(--tx-m);line-height:1.7">
            ⚠️ <strong style="color:var(--gold)">Non-Refundable:</strong> All purchases are non-returnable and non-refundable once confirmed and shipped.
          </div>
        </div>
      </div>

      <div class="ord-sum">
        <h3>Order Summary</h3>
        <div style="margin-bottom:18px">
          ${S.cart.map(i => `
            <div class="si">
              <div style="display:flex;align-items:center;gap:7px;flex:1">
                <div class="si-img"><img src="${i.img}" alt="${i.name}"></div>
                <span class="si-nm">${i.brand} ${i.name} ×${i.qty}</span>
              </div>
              <span style="color:var(--gold);font-weight:600">${fmt(i.price * i.qty)}</span>
            </div>`).join('')}
        </div>
        <div class="sl"><span>Subtotal</span><span>${fmt(sub)}</span></div>
        <div class="sl"><span>Shipping</span><span style="color:var(--green)">FREE</span></div>
        <div class="sl"><span>COD Charges</span><span style="color:var(--green)">₹0</span></div>
        <div class="st"><span>Total</span><span>${fmt(sub)}</span></div>
        <button class="po-btn" onclick="placeOrder()">Place Order — COD ⚡</button>
        <p style="font-size:10px;color:var(--tx-m);text-align:center;margin-top:10px">
          You'll pay ${fmt(sub)} when your order arrives
        </p>
      </div>
    </div>`;
}

function placeOrder() {
  const v = id => document.getElementById(id)?.value.trim();
  const [n, e, ph, a1, ct, st, pn] = [v('ck1'), v('ck2'), v('ck3'), v('ck4'), v('ck6'), v('ck7'), v('ck8')];

  if (!n || !e || !ph || !a1 || !ct || !st || !pn) {
    toast('⚠️ Please fill all required fields', 'w'); return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    toast('⚠️ Please enter a valid email address', 'w'); return;
  }

  const oid   = 'TV' + Date.now().toString().slice(-8);
  const sub   = S.cart.reduce((s, x) => s + x.price * x.qty, 0);
  const order = {
    oid, n, e, ph,
    addr:  `${a1}, ${v('ck5') || ''}, ${ct}, ${st} - ${pn}, India`,
    items: [...S.cart],
    total: sub,
    date:  new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
    pay:   'Cash on Delivery',
  };

  S.orders.push(order);
  if (S.user) { S.user.orders = S.user.orders || []; S.user.orders.push(order); }

  sendOrderEmail(order);

  S.cart = [];
  updCart();

  document.getElementById('ckCt').innerHTML = `
    <div class="succ-wrap">
      <div class="succ">
        <div class="succ-icon">✓</div>
        <h2>Order Placed!</h2>
        <p>
          Thank you <strong style="color:var(--gold)">${n}</strong>!<br>
          Order <strong style="color:var(--gold)">#${oid}</strong> confirmed.<br>
          Delivery in 3–7 business days. Pay <strong>${fmt(sub)}</strong> on arrival.
        </p>
        <div class="ord-box">
          <div class="odr"><span>Order ID</span><span>#${oid}</span></div>
          <div class="odr"><span>Total</span><span style="color:var(--gold);font-weight:700">${fmt(sub)}</span></div>
          <div class="odr"><span>Payment</span><span>Cash on Delivery</span></div>
          <div class="odr"><span>Delivery To</span><span>${ct}, ${st}</span></div>
          <div class="odr"><span>ETA</span><span>3–7 Business Days</span></div>
          <div class="odr"><span>Confirmation sent to</span><span>${e}</span></div>
        </div>
        <div class="succ-actions">
          <button class="btn-g" onclick="nav('home')">Continue Shopping</button>
          ${S.user ? '<button class="btn-o" onclick="nav(\'account\')">View My Orders</button>' : ''}
        </div>
        <p class="succ-note">Order details have been sent to timeversetimeverse@gmail.com</p>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────
   ORDER EMAIL NOTIFICATION
   Uses Formspree — replace form ID with yours from formspree.io
───────────────────────────────────────────────────── */
async function sendOrderEmail(order) {
  try {
    const body = `
ORDER NOTIFICATION — TimeVerse.in
==================================
Order ID : ${order.oid}
Date     : ${order.date}
Customer : ${order.n}
Email    : ${order.e}
Phone    : ${order.ph}
Address  : ${order.addr}

ITEMS:
${order.items.map(i => `  - ${i.brand} ${i.name} x${i.qty} @ ${fmt(i.price)}`).join('\n')}

TOTAL    : ${fmt(order.total)}
PAYMENT  : ${order.pay}
==================================
`;
    // ⚠️ Replace 'xdkondno' with your Formspree form ID
    await fetch('https://formspree.io/f/xdkondno', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _to:          'timeversetimeverse@gmail.com',
        _subject:     `🛒 New Order #${order.oid} — TimeVerse.in`,
        message:      body,
        customer_name:  order.n,
        customer_email: order.e,
        customer_phone: order.ph,
        total:          fmt(order.total),
      }),
    });
  } catch (err) {
    console.log('Email notification error:', err);
  }
}

/* ─────────────────────────────────────────────────────
   AUTH — LOGIN / REGISTER
───────────────────────────────────────────────────── */
function switchTab(t) {
  document.getElementById('loginF').style.display    = t === 'login'    ? 'block' : 'none';
  document.getElementById('registerF').style.display = t === 'register' ? 'block' : 'none';
  document.getElementById('lt').classList.toggle('on', t === 'login');
  document.getElementById('rt').classList.toggle('on', t === 'register');
}

function doLogin() {
  const e = document.getElementById('le').value.trim();
  const p = document.getElementById('lp').value;
  if (!e || !p) { toast('⚠️ Please fill all fields', 'w'); return; }

  const u = (window._USERS || {})[e];
  if (!u || u.pw !== p) { toast('❌ Invalid email or password', 'e'); return; }

  S.user = { ...u };
  toast('✅ Welcome back, ' + u.name + '!');
  nav('account');
}

function doReg() {
  const n = document.getElementById('rn').value.trim();
  const e = document.getElementById('re').value.trim();
  const p = document.getElementById('rp').value;

  if (!n || !e || !p) { toast('⚠️ Please fill all fields', 'w'); return; }
  if (p.length < 6)   { toast('⚠️ Password must be at least 6 characters', 'w'); return; }

  window._USERS = window._USERS || {};
  if (window._USERS[e]) { toast('⚠️ Account already exists with this email', 'w'); return; }

  window._USERS[e] = { name: n, email: e, pw: p, orders: [] };
  S.user = { name: n, email: e, orders: [] };
  toast('✅ Account created! Welcome, ' + n + '!');
  nav('account');
}

function doLogout() {
  S.user = null;
  toast('👋 Signed out successfully');
  nav('home');
}

/* ─────────────────────────────────────────────────────
   ACCOUNT PAGE
───────────────────────────────────────────────────── */
function renderAccount() {
  if (!S.user) { nav('login'); return; }
  const orders = S.user.orders || S.orders || [];
  const el = document.getElementById('accCt');

  el.innerHTML = `
    <div class="acc-profile">
      <div class="acc-avatar">${S.user.name[0].toUpperCase()}</div>
      <div>
        <div class="acc-name">${S.user.name}</div>
        <div class="acc-email">${S.user.email}</div>
        <div class="acc-badge">TimeVerse Member ✦</div>
      </div>
    </div>

    <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px">
      Order History
    </div>

    ${orders.length === 0
      ? `<div style="text-align:center;padding:56px 20px;color:var(--tx-m)">
           <div style="font-size:46px;margin-bottom:14px">📦</div>
           <div style="font-size:15px;margin-bottom:6px">No orders yet</div>
           <div style="font-size:12px;margin-bottom:22px">Your order history will appear here after your first purchase</div>
           <button class="btn-g" onclick="nav('products')">Start Shopping</button>
         </div>`
      : `<div class="orders-l">
           ${orders.map(o => `
             <div class="oc">
               <div class="oc-hd">
                 <div>
                   <div class="oid">#${o.oid || o.orderId}</div>
                   <div class="odt">${o.date}</div>
                 </div>
                 <span class="ost">Confirmed</span>
               </div>
               <div class="oit-p">
                 ${o.items.slice(0, 4).map(i => `
                   <div class="oit-t"><img src="${i.img}" alt="${i.name}"></div>`).join('')}
                 ${o.items.length > 4
                   ? `<div style="width:58px;height:70px;background:var(--dk3);border:1px solid rgba(201,168,76,.1);border-radius:2px;display:flex;align-items:center;justify-content:center;color:var(--tx-m);font-size:12px">+${o.items.length - 4}</div>`
                   : ''}
               </div>
               <div class="otot">${fmt(o.total)} · ${o.pay || o.payment}</div>
               <div class="o-addr">📍 ${o.addr || o.address}</div>
             </div>`).join('')}
         </div>`}`;
}

/* ─────────────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────────────── */
function submitContact() {
  const n = document.getElementById('cnName')?.value.trim();
  const e = document.getElementById('cnEmail')?.value.trim();
  const m = document.getElementById('cnMsg')?.value.trim();
  if (!n || !e || !m) { toast('⚠️ Please fill all fields', 'w'); return; }
  toast('✅ Message sent! We\'ll reply within 24 hours.');
  ['cnName', 'cnEmail', 'cnSubj', 'cnMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

/* ─────────────────────────────────────────────────────
   TOAST NOTIFICATIONS
───────────────────────────────────────────────────── */
function toast(msg, type = 's') {
  const ct = document.getElementById('toastCt');
  const t  = document.createElement('div');
  t.className = 'toast' + (type === 'w' ? ' warn' : type === 'e' ? ' err' : '');
  t.innerHTML = `
    <span class="toast-i">${type === 's' ? '✓' : type === 'w' ? '⚠️' : '❌'}</span>
    <span class="toast-t">${msg}</span>`;
  ct.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('on')));
  setTimeout(() => { t.classList.remove('on'); setTimeout(() => t.remove(), 400); }, 3500);
}

/* ─────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv:not(.vis)').forEach(el => obs.observe(el));
}

/* ─────────────────────────────────────────────────────
   STAT COUNTERS (animated count-up)
───────────────────────────────────────────────────── */
function initStats() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +el.dataset.t;
          const suffix = target > 999 ? 'K+' : '+';
          const display = target > 999 ? Math.floor(target / 1000) : target;
          const start = performance.now();

          (function update(now) {
            const progress = Math.min((now - start) / 1800, 1);
            const eased    = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * display) + (progress >= 1 ? suffix : '');
            if (progress < 1) requestAnimationFrame(update);
          })(performance.now());

          obs.unobserve(el);
        }
      });
    }, { threshold: .5 });
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────────────────
   INITIALISE ON DOM READY
───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderBrands();
  renderFeatured();
  initStats();
  initReveal();

  // Pre-populate demo account for testing
  window._USERS = window._USERS || {};
  window._USERS['demo@timeverse.in'] = {
    name:   'Demo User',
    email:  'demo@timeverse.in',
    pw:     'demo123',
    orders: [{
      oid:   'TV12345678',
      date:  'January 15, 2025',
      n:     'Demo User',
      e:     'demo@timeverse.in',
      ph:    '+91 98765 43210',
      addr:  '123 Marine Drive, Colaba, Mumbai, Maharashtra - 400001, India',
      items: [{ ...PRODS[8], qty: 1, price: calcPrice(PRODS[8].op).cur }],
      total: calcPrice(PRODS[8].op).cur,
      pay:   'Cash on Delivery',
    }],
  };
});
