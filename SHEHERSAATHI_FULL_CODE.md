# SHEHERSAATHI FULL CODE — Copy/Paste Reference

Bro, is file me final code alag-alag sections me diya hai. GitHub me har section ko uske matching file me hi paste karna hai.

## Copy-paste rules

1. `SECTION 1 — index.html` ka code sirf `index.html` me paste karo.
2. `SECTION 2 — style.css` ka code sirf `style.css` me paste karo.
3. `SECTION 3 — script.js` ka code sirf `script.js` me paste karo.
4. `SECTION 4 — data.js` ka code sirf `data.js` me paste karo.
5. Saara code ek hi file me paste mat karna.

## GitHub steps

1. GitHub repository open karo.
2. File open karo, jaise `index.html`.
3. Pencil/Edit icon dabao.
4. Purana code select all karke delete/replace karo.
5. Matching section ka code paste karo.
6. Commit changes karo.
7. Baaki files ke liye repeat karo.

## SECTION 1 — index.html

File name: `index.html`
# Full code to copy into GitHub

Copy each section into the matching file in your GitHub repository. Do not paste all sections into one file.

Files included:

- `index.html`
- `style.css`
- `script.js`
- `data.js`

## How to use

1. Open the matching file on GitHub.
2. Click the pencil icon to edit.
3. Select all old code.
4. Paste the code from the matching section below.
5. Commit changes.
6. Repeat for every file.

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SheherSaathi — Your City Companion</title>
<meta name="description" content="Find verified PGs and flats, tiffin services, gyms, expenses, marketplace, city fares, AI help, and emergency support across Indian cities.">
<meta name="description" content="Find verified PGs, compare budgets, calculate city fares, and access emergency help across Indian cities.">
<meta name="theme-color" content="#0f172a">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- LOADER -->
<div id="loader">
  <div class="loader-box">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="16" fill="white" fill-opacity="0.15"/>
      <path d="M30 8L38 20H22L30 8Z" fill="white"/>
      <rect x="18" y="20" width="24" height="22" rx="2" fill="white"/>
      <rect x="24" y="28" width="5" height="14" fill="#e8460a"/>
      <rect x="31" y="28" width="5" height="10" fill="#e8460a" opacity="0.7"/>
    </svg>
    <div class="loader-name">SheherSaathi</div>
    <div class="loader-bar"><div class="loader-fill"></div></div>
    <div class="loader-sub" id="loaderSub">Your City Companion</div>
  </div>
</div>

<!-- NAVBAR -->
<nav class="navbar">
  <div class="nav-brand">
    <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="14" fill="url(#brandGrad)"/>
      <path d="M30 8L38 20H22L30 8Z" fill="white"/>
      <rect x="18" y="20" width="24" height="22" rx="2" fill="white"/>
      <rect x="24" y="28" width="5" height="14" fill="#e8460a"/>
      <rect x="31" y="28" width="5" height="10" fill="#e8460a" opacity="0.7"/>
      <defs><linearGradient id="brandGrad" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#e8460a"/><stop offset="1" stop-color="#b83208"/></linearGradient></defs>
    </svg>
    <span class="brand-text">Sheher<span>Saathi</span></span>
  </div>

  <div class="nav-center">
    <div class="nav-search-wrap">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input id="navSearch" placeholder="Search city or PG..." onkeyup="quickSearch(this.value)">
    </div>
  </div>

  <div class="nav-right">
    <button class="icon-btn notif-btn" onclick="toggleNotif()" title="Notifications">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <span class="notif-dot" id="notifDot"></span>
    </button>
    <div id="notifPanel" class="notif-panel hidden">
      <div class="notif-header"><strong>Notifications</strong><span id="notifClear" onclick="clearNotifs()">Clear all</span></div>
      <div id="notifList"></div>
    </div>

    <button class="icon-btn" onclick="toggleDark()" title="Toggle Dark Mode">
      <svg id="darkIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>

    <div class="profile-wrap" onclick="toggleProfileMenu(event)">
      <div class="profile-avatar" id="profileAvatar">
        <img id="profilePic" src="" alt="Profile" onerror="this.style.display='none'" style="display:none">
        <span id="profileInitial">?</span>
      </div>
      <div id="profileMenu" class="profile-menu">
        <div class="pm-header">
          <div class="pm-avatar-big" id="pmAvatarBig">
            <img id="pmPic" src="" alt="" onerror="this.style.display='none'" style="display:none">
            <span id="pmInitial">?</span>
          </div>
          <div class="pm-info">
            <strong id="pmName">Guest</strong>
            <span id="pmEmail">Not logged in</span>
          </div>
        </div>
        <div class="pm-divider"></div>
        <button class="pm-item" onclick="openModal('editProfileModal')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Edit Profile
        </button>
        <button class="pm-item" onclick="openModal('savedPGModal')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Saved PGs
        </button>
        <button class="pm-item" onclick="switchLang()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span id="langBtnText">Switch to Hindi</span>
        </button>
        <div class="pm-divider"></div>
        <button class="pm-item danger" onclick="logout()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Logout
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- HERO -->
<header class="hero hero-v2">
  <div class="hero-aurora aurora-one"></div>
  <div class="hero-aurora aurora-two"></div>
  <div class="hero-noise"></div>

  <div class="hero-inner hero-v2-inner">
    <section class="hero-v2-copy">
      <div class="hero-kicker">⚡ New city setup in minutes</div>
      <h1 id="heroTitle">Move to a new city<br><em>without the confusion.</em></h1>
      <p class="hero-sub" id="heroSub">Find PGs, compare rent, estimate fares, plan budget and get safety help from one clean dashboard.</p>

      <div class="hero-search hero-v2-search">
        <div class="hero-search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8460a" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input id="heroSearchInput" placeholder="Try: Girls PG under 7000 in Pune" onkeyup="heroSearch(this.value)" onkeydown="if(event.key==='Enter')doHeroSearch()">
          <button onclick="doHeroSearch()">Search</button>
        </div>
        <div class="smart-chips" aria-label="Popular quick searches">
          <button onclick="runSmartSearch('PG under 7000')">PG under ₹7k</button>
          <button onclick="runSmartSearch('Girls PG')">Girls PG</button>
          <button onclick="switchTab('budget',document.querySelector('[data-tab=budget]'))">Budget</button>
          <button onclick="switchTab('ai',document.querySelector('[data-tab=ai]'))">Ask AI</button>
        </div>
      </div>

      <div class="hero-actions">
        <button class="hero-action primary" onclick="switchTab('pg',document.querySelector('[data-tab=pg]'))">Explore PGs</button>
        <button class="hero-action" onclick="switchTab('checklist',document.querySelector('[data-tab=checklist]'))">Start Checklist</button>
      </div>

      <div class="city-selector city-selector-v2">
        <button class="city-btn active" onclick="switchCity('Bhopal',this)">Bhopal</button>
        <button class="city-btn" onclick="switchCity('Delhi',this)">Delhi</button>
        <button class="city-btn" onclick="switchCity('Mumbai',this)">Mumbai</button>
        <button class="city-btn" onclick="switchCity('Pune',this)">Pune</button>
        <button class="city-btn" onclick="switchCity('Patna',this)">Patna</button>
      </div>
    </section>

    <section class="city-console" aria-label="SheherSaathi city dashboard preview">
      <div class="console-topbar">
        <span></span><span></span><span></span>
        <strong>SheherSaathi OS</strong>
      </div>
      <div class="console-grid">
        <article class="console-card console-card-main">
          <small>Recommended stay</small>
          <h3>Lake View Girls PG</h3>
          <p>₹6,500/mo · WiFi · Meals · Security</p>
          <button onclick="runSmartSearch('Lake View Girls PG')">View match</button>
        </article>
        <article class="console-card">
          <span>🚕</span>
          <strong>Fare check</strong>
          <p>Station → MP Nagar<br>₹80–120</p>
        </article>
        <article class="console-card">
          <span>🆘</span>
          <strong>Safety</strong>
          <p>112 · Police · Hospital</p>
        </article>
        <article class="console-card wide">
          <span>🤖</span>
          <strong>AI tip</strong>
          <p>“Search by budget + gender for faster PG shortlisting.”</p>
        </article>
      </div>
    </section>
  </div>
</header>

<section class="quick-strip" aria-label="Platform highlights">
  <button onclick="switchTab('pg',document.querySelector('[data-tab=pg]'))"><strong id="statPGs">18+</strong><span>PG leads</span></button>
  <button onclick="switchTab('fare',document.querySelector('[data-tab=fare]'))"><strong>Fare</strong><span>Auto, cab, bike</span></button>
  <button onclick="switchTab('budget',document.querySelector('[data-tab=budget]'))"><strong>Budget</strong><span>Monthly planner</span></button>
  <button onclick="switchTab('helpline',document.querySelector('[data-tab=helpline]'))"><strong>SOS</strong><span>112 + local help</span></button>
</section>

<section class="intent-hub" aria-label="What do you want to do on SheherSaathi">
  <div class="intent-heading">
    <span>Choose your task</span>
    <h2>Everything you need in a new city</h2>
    <p>Quick actions for PG search, city navigation, food, transport, roommates, emergency help and AI guidance.</p>
  </div>
  <div class="intent-grid">
    <button class="intent-card" onclick="handleIntent('pg')"><span>🏠</span><strong>Find PG</strong><small>Budget, gender and area filters</small></button>
    <button class="intent-card" onclick="handleIntent('navigate')"><span>🧭</span><strong>Navigate city</strong><small>Arrival guide and nearby places</small></button>
    <button class="intent-card" onclick="handleIntent('ai')"><span>🤖</span><strong>Ask AI for help</strong><small>Ask about PGs, fares and safety</small></button>
    <button class="intent-card" onclick="handleIntent('food')"><span>🍱</span><strong>Find food</strong><small>Tiffin, mess and local meals</small></button>
    <button class="intent-card" onclick="handleIntent('fitness')"><span>💪</span><strong>Find gym</strong><small>Student gyms and fitness studios</small></button>
    <button class="intent-card" onclick="handleIntent('transport')"><span>🚕</span><strong>Get transport guidance</strong><small>Fare calculator and travel tips</small></button>
    <button class="intent-card" onclick="handleIntent('expense')"><span>💸</span><strong>Split expenses</strong><small>Track and split flatmate bills</small></button>
    <button class="intent-card" onclick="handleIntent('roommates')"><span>👥</span><strong>Connect with roommates</strong><small>Post your roommate preference</small></button>
    <button class="intent-card" onclick="handleIntent('market')"><span>🛒</span><strong>Student marketplace</strong><small>Buy and sell used essentials</small></button>
    <button class="intent-card" onclick="handleIntent('tech')"><span>💻</span><strong>CSE tech hub</strong><small>Notes, projects and interview prep</small></button>
    <button class="intent-card" onclick="handleIntent('food')"><span>🍽️</span><strong>Find food</strong><small>Local food spots and essentials</small></button>
    <button class="intent-card" onclick="handleIntent('transport')"><span>🚕</span><strong>Get transport guidance</strong><small>Fare calculator and travel tips</small></button>
    <button class="intent-card" onclick="handleIntent('roommates')"><span>👥</span><strong>Connect with roommates</strong><small>Post your roommate preference</small></button>
    <button class="intent-card danger" onclick="handleIntent('emergency')"><span>🆘</span><strong>Access emergency help</strong><small>Police, ambulance and SOS numbers</small></button>
  </div>
</section>

<!-- TAB NAV -->
<div class="tab-nav-wrap">
  <div class="tab-nav">
    <button class="tab-btn active" onclick="switchTab('pg',this)" data-tab="pg" data-en="🏠 PG Finder" data-hi="🏠 PG खोजें">🏠 PG Finder</button>
    <button class="tab-btn" onclick="switchTab('fare',this)" data-tab="fare" data-en="🚗 Fare Calc" data-hi="🚗 किराया">🚗 Fare Calc</button>
    <button class="tab-btn" onclick="switchTab('guide',this)" data-tab="guide" data-en="🗺️ City Guide" data-hi="🗺️ सिटी गाइड">🗺️ City Guide</button>
    <button class="tab-btn" onclick="switchTab('helpline',this)" data-tab="helpline" data-en="📞 Helplines" data-hi="📞 हेल्पलाइन">📞 Helplines</button>
    <button class="tab-btn" onclick="switchTab('nearby',this)" data-tab="nearby" data-en="📍 Nearby" data-hi="📍 पास में">📍 Nearby</button>
    <button class="tab-btn" onclick="switchTab('tiffin',this)" data-tab="tiffin" data-en="🍱 Tiffin" data-hi="🍱 टिफिन">🍱 Tiffin</button>
    <button class="tab-btn" onclick="switchTab('fitness',this)" data-tab="fitness" data-en="💪 Fitness" data-hi="💪 फिटनेस">💪 Fitness</button>
    <button class="tab-btn" onclick="switchTab('expense',this)" data-tab="expense" data-en="💸 Expenses" data-hi="💸 खर्च">💸 Expenses</button>
    <button class="tab-btn" onclick="switchTab('market',this)" data-tab="market" data-en="🛒 Market" data-hi="🛒 मार्केट">🛒 Market</button>
    <button class="tab-btn" onclick="switchTab('tech',this)" data-tab="tech" data-en="💻 CSE Hub" data-hi="💻 CSE हब">💻 CSE Hub</button>
    <button class="tab-btn" onclick="switchTab('compare',this)" data-tab="compare" data-en="⚖️ Compare" data-hi="⚖️ तुलना">⚖️ Compare</button>
    <button class="tab-btn" onclick="switchTab('budget',this)" data-tab="budget" data-en="💰 Budget" data-hi="💰 बजट">💰 Budget</button>
    <button class="tab-btn" onclick="switchTab('checklist',this)" data-tab="checklist" data-en="✅ Checklist" data-hi="✅ चेकलिस्ट">✅ Checklist</button>
    <button class="tab-btn" onclick="switchTab('ai',this)" data-tab="ai" data-en="🤖 AI Assistant" data-hi="🤖 AI सहायक">🤖 AI Assistant</button>
  </div>
</div>

<!-- MAIN -->
<main class="main">

  <!-- PG FINDER -->
  <div id="tab-pg" class="tab-panel active">
    <div class="panel-header">
      <div>
        <h2 id="pg-heading">PGs in Bhopal</h2>
        <p id="pg-count" class="panel-sub"></p>
      </div>
      <button onclick="openModal('addPGModal')" class="btn-sm">+ Add Your PG</button>
    </div>

    <div class="filter-bar">
      <div class="filter-search">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input id="pgSearch" placeholder="Search city, PG, flat, area or amenity..." onkeyup="renderPGs()">
      </div>
      <select id="pgCity" class="sel" onchange="renderPGs()">
        <option value="Bhopal">Bhopal</option>
      </select>
      <select id="pgType" class="sel" onchange="renderPGs()">
        <option value="">PG + Flats</option>
        <option value="PG">PG / Hostel</option>
        <option value="Private Flat">Private Flat</option>
      </select>
        <input id="pgSearch" placeholder="Search PG name..." onkeyup="renderPGs()">
      </div>
      <select id="pgGender" class="sel" onchange="renderPGs()">
        <option value="">All Genders</option>
        <option value="Boys">Boys</option>
        <option value="Girls">Girls</option>
        <option value="Both">Both</option>
      </select>
      <select id="pgPrice" class="sel" onchange="renderPGs()">
        <option value="">Any Budget</option>
        <option value="5000">Under ₹5,000</option>
        <option value="7000">Under ₹7,000</option>
        <option value="10000">Under ₹10,000</option>
      </select>
      <select id="pgSort" class="sel" onchange="renderPGs()">
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>

    <div id="pgGrid" class="pg-grid"></div>

  </div>

  <!-- FARE CALCULATOR -->
  <div id="tab-fare" class="tab-panel">
    <div class="panel-header">
      <div>
        <h2 id="fare-heading">Fare Calculator</h2>
        <p class="panel-sub" id="fare-sub">Check transport fares across the city</p>
      </div>
    </div>
    <div class="fare-layout">
      <div class="fare-left">
        <div class="fare-box">
          <div class="fare-box-title">Where are you going?</div>
          <label class="lbl">From</label>
          <select id="fareFrom" class="sel full" onchange="calcFare()"><option value="">Select source...</option></select>
          <label class="lbl" style="margin-top:14px">To</label>
          <select id="fareTo" class="sel full" onchange="calcFare()"><option value="">Select destination...</option></select>

          <div id="fareResult" style="display:none;margin-top:20px">
            <div class="fare-meta-row">
              <div class="fare-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span id="f-time"></span>
              </div>
              <div class="fare-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                <span id="f-dist"></span>
              </div>
            </div>
            <div class="fare-cards">
              <div class="fare-card-item"><div class="fci-icon">🛺</div><div class="fci-label">Auto</div><div class="fci-price" id="f-auto"></div></div>
              <div class="fare-card-item best"><div class="fci-best">Best</div><div class="fci-icon">🚕</div><div class="fci-label">Cab</div><div class="fci-price" id="f-cab"></div></div>
              <div class="fare-card-item"><div class="fci-icon">🛵</div><div class="fci-label">Bike</div><div class="fci-price" id="f-bike"></div></div>
              <div class="fare-card-item"><div class="fci-icon">⚡</div><div class="fci-label">E-Rick</div><div class="fci-price" id="f-erick"></div></div>
            </div>
            <div class="fare-note-box" id="f-note"></div>
          </div>
        </div>
      </div>
      <div class="fare-right">
        <div class="tips-card">
          <div class="tips-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Travel Smart
          </div>
          <div class="tip-row">📌 Always fix auto fare before boarding</div>
          <div class="tip-row">📱 Use Ola/Uber for transparent pricing</div>
          <div class="tip-row">🌙 Prefer cab at night for safety</div>
          <div class="tip-row">🎫 Use prepaid auto booth at stations</div>
          <div class="tip-row">💳 Pay via UPI — avoid change issues</div>
          <div class="tip-row">📷 Note vehicle number before boarding</div>
        </div>
      </div>
    </div>
  </div>

  <!-- CITY GUIDE -->
  <div id="tab-guide" class="tab-panel">
    <div class="panel-header">
      <div>
        <h2 id="guide-heading">City Guide</h2>
        <p class="panel-sub">Just arrived? Follow these steps</p>
      </div>
    </div>
    <div id="guideSteps" class="guide-wrap"></div>
  </div>

  <!-- HELPLINES -->
  <div id="tab-helpline" class="tab-panel">
    <div class="panel-header">
      <div>
        <h2>Emergency Helplines</h2>
        <p class="panel-sub">Save these numbers — they could save your life</p>
      </div>
    </div>
    <div class="sos-grid">
      <a href="tel:100" class="sos-card"><div class="sos-num">100</div><div class="sos-name">Police</div><div class="sos-call">Call Now</div></a>
      <a href="tel:108" class="sos-card"><div class="sos-num">108</div><div class="sos-name">Ambulance</div><div class="sos-call">Call Now</div></a>
      <a href="tel:101" class="sos-card"><div class="sos-num">101</div><div class="sos-name">Fire</div><div class="sos-call">Call Now</div></a>
      <a href="tel:112" class="sos-card red"><div class="sos-num">112</div><div class="sos-name">All Emergency</div><div class="sos-call">Call Now</div></a>
    </div>
    <h3 class="sub-title" style="margin:24px 0 12px">City-Specific Numbers</h3>
    <div id="helplineItems" class="helpline-list"></div>
  </div>

  <!-- NEARBY -->
  <div id="tab-nearby" class="tab-panel">
    <div class="panel-header">
      <div>
        <h2 id="nearby-heading">Nearby Places</h2>
        <p class="panel-sub" id="nearby-sub">Important places near you</p>
      </div>
    </div>
    <div class="nearby-cats">
      <button class="cat-btn active" onclick="showCategory('hospital',this)">🏥 Hospital</button>
      <button class="cat-btn" onclick="showCategory('police',this)">🚔 Police</button>
      <button class="cat-btn" onclick="showCategory('atm',this)">🏧 ATM</button>
      <button class="cat-btn" onclick="showCategory('food',this)">🍽️ Food</button>
      <button class="cat-btn" onclick="showCategory('transport',this)">🚌 Transport</button>
    </div>
    <div id="nearbyItems" class="nearby-list"></div>
  </div>

  <!-- TIFFIN & MESS -->
  <div id="tab-tiffin" class="tab-panel">
    <div class="panel-header"><div><h2>🍱 Tiffin & Mess Directory</h2><p class="panel-sub">Daily meals, protein diets and student-friendly plans</p></div></div>
    <div id="tiffinGrid" class="service-grid"></div>
  </div>

  <!-- FITNESS -->
  <div id="tab-fitness" class="tab-panel">
    <div class="panel-header"><div><h2>💪 Gym & Fitness Directory</h2><p class="panel-sub">Nearby gyms, facilities, student plans and contact links</p></div></div>
    <div id="fitnessGrid" class="service-grid"></div>
  </div>

  <!-- EXPENSE TRACKER -->
  <div id="tab-expense" class="tab-panel">
    <div class="panel-header"><div><h2>💸 Expense & Split Bill Tracker</h2><p class="panel-sub">Add personal/shared expenses and split with flatmates</p></div><button class="btn-sm" onclick="resetExpenses()" style="background:var(--input);color:var(--text)">Reset Ledger</button></div>
    <div class="expense-layout">
      <div class="expense-form-card">
        <div class="budget-card-title">Add Expense</div>
        <input id="expTitle" class="m-input" placeholder="Expense title e.g. Electricity bill">
        <input id="expAmount" type="number" class="m-input" placeholder="Amount ₹">
        <select id="expType" class="m-input"><option value="Personal">Personal</option><option value="Shared">Shared</option></select>
        <select id="expPeople" class="m-input"><option value="2">Split between 2</option><option value="3">Split between 3</option><option value="4">Split between 4</option></select>
        <button class="btn-full" onclick="addExpense()">Add to Ledger</button>
      </div>
      <div class="expense-summary-card"><div id="expenseSummary"></div><div id="expenseLedger" class="expense-ledger"></div></div>
    </div>
  </div>

  <!-- STUDENT MARKETPLACE -->
  <div id="tab-market" class="tab-panel">
    <div class="panel-header"><div><h2>🛒 Student Marketplace</h2><p class="panel-sub">Buy/sell coolers, bedding, books, electronics and kitchen items</p></div></div>
    <div class="market-form">
      <input id="marketItem" class="m-input" placeholder="Item name e.g. Study table">
      <select id="marketCategory" class="m-input"><option>Coolers & Bedding</option><option>Mattresses & Furniture</option><option>Books & Study Materials</option><option>Electronics</option><option>Kitchen Items</option></select>
      <input id="marketPrice" type="number" class="m-input" placeholder="Price ₹">
      <button onclick="addMarketItem()">List Item</button>
    </div>
    <div id="marketGrid" class="service-grid"></div>
  </div>

  <!-- CSE TECH HUB -->
  <div id="tab-tech" class="tab-panel">
    <div class="panel-header"><div><h2>💻 CSE Tech Hub</h2><p class="panel-sub">Programming resources, notes, project templates, ML and interview prep</p></div></div>
    <div id="techGrid" class="service-grid"></div>
  </div>

  <!-- COMPARE TAB -->
  <div id="tab-compare" class="tab-panel">
    <div class="panel-header">
      <div><h2>⚖️ Compare PGs</h2><p class="panel-sub">Select up to 3 PGs and compare side by side</p></div>
    </div>
    <div class="compare-search-bar">
      <input id="compareSearch" class="m-input" placeholder="Search PG to add..." onkeyup="searchCompare(this.value)" style="margin:0">
      <div id="compareDropdown" class="compare-dropdown hidden"></div>
    </div>
    <div id="compareSelected" class="compare-selected-pills"></div>
    <div id="compareTable" class="compare-table-wrap"></div>
  </div>

  <!-- BUDGET PLANNER TAB -->
  <div id="tab-budget" class="tab-panel">
    <div class="panel-header">
      <div><h2>💰 Budget Planner</h2><p class="panel-sub">Plan your monthly expenses in a new city</p></div>
    </div>
    <div class="budget-layout">
      <div class="budget-left">
        <div class="budget-card">
          <div class="budget-card-title">Select City</div>
          <div class="city-btns-small">
            <button class="cbs active" onclick="setBudgetCity('Bhopal',this)">Bhopal</button>
            <button class="cbs" onclick="setBudgetCity('Delhi',this)">Delhi</button>
            <button class="cbs" onclick="setBudgetCity('Mumbai',this)">Mumbai</button>
            <button class="cbs" onclick="setBudgetCity('Pune',this)">Pune</button>
            <button class="cbs" onclick="setBudgetCity('Patna',this)">Patna</button>
          </div>
          <div class="budget-card-title" style="margin-top:18px">Your Monthly Income / Budget (₹)</div>
          <input type="number" id="budgetIncome" class="m-input" placeholder="e.g. 15000" oninput="calcBudget()" style="margin-bottom:0">
        </div>
        <div class="budget-card" style="margin-top:14px">
          <div class="budget-card-title">Adjust Expenses</div>
          <div class="budget-slider-row">
            <label>PG / Rent</label>
            <input type="range" id="bPG" min="2000" max="20000" step="500" oninput="calcBudget()">
            <span id="bPGVal">₹0</span>
          </div>
          <div class="budget-slider-row">
            <label>Food & Meals</label>
            <input type="range" id="bFood" min="1000" max="10000" step="200" oninput="calcBudget()">
            <span id="bFoodVal">₹0</span>
          </div>
          <div class="budget-slider-row">
            <label>Transport</label>
            <input type="range" id="bTransport" min="500" max="5000" step="100" oninput="calcBudget()">
            <span id="bTransportVal">₹0</span>
          </div>
          <div class="budget-slider-row">
            <label>Internet / Mobile</label>
            <input type="range" id="bInternet" min="200" max="1000" step="50" oninput="calcBudget()">
            <span id="bInternetVal">₹0</span>
          </div>
          <div class="budget-slider-row">
            <label>Entertainment</label>
            <input type="range" id="bEntertain" min="0" max="5000" step="200" oninput="calcBudget()">
            <span id="bEntertainVal">₹0</span>
          </div>
          <div class="budget-slider-row">
            <label>Miscellaneous</label>
            <input type="range" id="bMisc" min="0" max="5000" step="200" oninput="calcBudget()">
            <span id="bMiscVal">₹0</span>
          </div>
        </div>
      </div>
      <div class="budget-right">
        <div class="budget-result-card">
          <div class="budget-result-title">Monthly Summary</div>
          <div class="budget-city-tag" id="budgetCityTag">📍 Bhopal</div>
          <div id="budgetBreakdown" class="budget-breakdown"></div>
          <div class="budget-total-row">
            <span>Total Expenses</span>
            <strong id="budgetTotal">₹0</strong>
          </div>
          <div class="budget-savings-row" id="budgetSavings"></div>
          <div id="budgetTip" class="budget-tip"></div>
        </div>
        <div class="budget-avg-card" id="budgetAvgCard"></div>
      </div>
    </div>
  </div>

  <!-- CHECKLIST TAB -->
  <div id="tab-checklist" class="tab-panel">
    <div class="panel-header">
      <div><h2>✅ New City Checklist</h2><p class="panel-sub">Complete these steps when you arrive in a new city</p></div>
      <button onclick="resetChecklist()" class="btn-sm" style="background:var(--input);color:var(--text)">Reset</button>
    </div>
    <div class="checklist-progress-wrap">
      <div class="checklist-progress-bar"><div id="checkProgressFill" class="checklist-progress-fill"></div></div>
      <span id="checkProgressText" class="checklist-progress-text">0 / 0 completed</span>
    </div>
    <div id="checklistItems" class="checklist-wrap"></div>
  </div>

  <!-- AI ASSISTANT TAB -->
  <div id="tab-ai" class="tab-panel">
    <div class="panel-header">
      <div><h2>🤖 AI City Assistant</h2><p class="panel-sub">Ask anything about your city — PG, transport, food, tips</p></div>
    </div>
    <div class="ai-chat-wrap">
      <div id="aiMessages" class="ai-messages">
        <div class="ai-msg bot">
          <div class="ai-avatar">🤖</div>
          <div class="ai-bubble">Hi! I'm your SheherSaathi AI Assistant. I can help you find PGs, check fares, learn about the city, and much more. What would you like to know? 😊</div>
        </div>
      </div>
      <div class="ai-suggestions">
        <button class="ai-suggestion" onclick="askAI(this.textContent)">Find PGs under ₹6000 in Bhopal</button>
        <button class="ai-suggestion" onclick="askAI(this.textContent)">What are the best areas to stay in Delhi?</button>
        <button class="ai-suggestion" onclick="askAI(this.textContent)">How much does it cost to live in Mumbai?</button>
        <button class="ai-suggestion" onclick="askAI(this.textContent)">Tips for a student arriving in Pune</button>
      </div>
      <div class="ai-input-row">
        <input id="aiInput" class="m-input" placeholder="Ask me anything about your city..." style="margin:0" onkeydown="if(event.key==='Enter')sendAIMessage()">
        <button onclick="sendAIMessage()" class="ai-send-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  </div>
</main>

<!-- FOOTER -->
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand-col">
      <div class="footer-logo">
        <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
          <rect width="60" height="60" rx="14" fill="url(#fGrad)"/>
          <path d="M30 8L38 20H22L30 8Z" fill="white"/>
          <rect x="18" y="20" width="24" height="22" rx="2" fill="white"/>
          <rect x="24" y="28" width="5" height="14" fill="#e8460a"/>
          <rect x="31" y="28" width="5" height="10" fill="#e8460a" opacity="0.7"/>
          <defs><linearGradient id="fGrad" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#e8460a"/><stop offset="1" stop-color="#7c1c04"/></linearGradient></defs>
        </svg>
        <span>Sheher<em>Saathi</em></span>
      </div>
      <p>Your trusted companion in every new city. Find PGs, check fares, get emergency help — all in one place.</p>
      <div class="footer-cities">🏛️ Bhopal &nbsp;·&nbsp; 🗼 Delhi &nbsp;·&nbsp; 🌆 Mumbai &nbsp;·&nbsp; 🎓 Pune &nbsp;·&nbsp; 🏞️ Patna</div>
    </div>
    <div class="footer-links-col">
      <div class="footer-col">
        <div class="footer-col-title">Quick Links</div>
        <a href="index.html">Home</a>
        <a href="#" onclick="switchTab('pg',document.querySelector('[data-tab=pg]'));return false">PG Finder</a>
        <a href="#" onclick="switchTab('fare',document.querySelector('[data-tab=fare]'));return false">Fare Calculator</a>
        <a href="#" onclick="switchTab('guide',document.querySelector('[data-tab=guide]'));return false">City Guide</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Support</div>
        <a href="contact.html">Contact Us</a>
        <a href="policy.html">Privacy Policy</a>
        <a href="#" onclick="openModal('addPGModal');return false">List Your PG</a>
        <a href="tel:9534196255">Call Support</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Emergency</div>
        <a href="tel:100">Police — 100</a>
        <a href="tel:108">Ambulance — 108</a>
        <a href="tel:101">Fire — 101</a>
        <a href="tel:112">Emergency — 112</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 SheherSaathi. Made with ❤️ for students across India.</p>
    <div class="footer-bottom-links">
      <a href="contact.html">Contact</a>
      <a href="policy.html">Privacy Policy</a>
    </div>
  </div>
</footer>

<!-- ===== MODALS ===== -->

<!-- LOGIN MODAL -->
<div id="loginModal" class="overlay">
  <div class="modal auth-modal">
    <div class="auth-logo">
      <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
        <rect width="60" height="60" rx="14" fill="url(#aGrad)"/>
        <path d="M30 8L38 20H22L30 8Z" fill="white"/>
        <rect x="18" y="20" width="24" height="22" rx="2" fill="white"/>
        <rect x="24" y="28" width="5" height="14" fill="#e8460a"/>
        <rect x="31" y="28" width="5" height="10" fill="#e8460a" opacity="0.7"/>
        <defs><linearGradient id="aGrad" x1="0" y1="0" x2="60" y2="60"><stop stop-color="#e8460a"/><stop offset="1" stop-color="#7c1c04"/></linearGradient></defs>
      </svg>
    </div>
    <h2 class="auth-title">Welcome Back</h2>
    <p class="auth-sub">Login with a quick OTP — no password needed</p>
    <div id="loginTab" class="auth-tabs">
      <button class="auth-tab active" onclick="showAuthTab('login')">OTP Login</button>
      <button class="auth-tab" onclick="showAuthTab('register')">Create Profile</button>
    </div>

    <!-- OTP LOGIN FORM -->
    <div id="loginForm">
      <div class="input-group">
        <label>Full Name</label>
        <input id="loginName" type="text" placeholder="Enter your name" class="m-input" autocomplete="name">
      </div>
      <div class="input-group">
        <label>Email or Phone</label>
        <input id="loginEmail" type="text" placeholder="Email or 10-digit mobile number" class="m-input" autocomplete="email">
      </div>
      <button onclick="doLogin()" class="btn-full" id="sendOtpBtn">Send OTP</button>
      <div id="otpBox" class="otp-box hidden">
        <div class="otp-status" id="otpStatus">OTP sent.</div>
        <div class="otp-input-row">
          <input id="loginOtp" type="text" inputmode="numeric" maxlength="6" placeholder="Enter 6-digit OTP" class="m-input" autocomplete="one-time-code">
          <button onclick="verifyOTP()" class="otp-verify-btn">Verify</button>
        </div>
        <button onclick="resendOTP()" class="otp-resend" id="resendOtpBtn">Resend OTP</button>
      </div>
      <button onclick="doGuest()" class="btn-full btn-ghost" style="margin-top:8px">Continue as Guest</button>
    </div>

    <!-- REGISTER FORM -->
    <div id="registerForm" style="display:none">
      <div class="input-group">
        <label>Full Name *</label>
        <input id="regName" type="text" placeholder="Your full name" class="m-input">
      </div>
      <div class="input-group">
        <label>Email Address *</label>
        <input id="regEmail" type="email" placeholder="Your email" class="m-input">
      </div>
      <div class="input-group">
        <label>Phone Number</label>
        <input id="regPhone" type="tel" placeholder="Your phone (optional)" class="m-input">
      </div>
      <div class="input-group">
        <label>Password *</label>
        <div class="pass-wrap">
          <input id="regPass" type="password" placeholder="Create password (min 6 chars)" class="m-input">
          <button class="eye-btn" onclick="togglePass('regPass')">👁️</button>
        </div>
      </div>
      <div class="input-group">
        <label>Confirm Password *</label>
        <div class="pass-wrap">
          <input id="regPass2" type="password" placeholder="Repeat password" class="m-input">
          <button class="eye-btn" onclick="togglePass('regPass2')">👁️</button>
        </div>
      </div>
      <button onclick="doRegister()" class="btn-full">Create Account</button>
    </div>
  </div>
</div>

<!-- EDIT PROFILE MODAL -->
<div id="editProfileModal" class="overlay hidden">
  <div class="modal">
    <div class="modal-top">
      <h3>Edit Profile</h3>
      <button class="close-btn" onclick="closeModal('editProfileModal')">✕</button>
    </div>
    <div class="profile-pic-edit">
      <div class="profile-pic-big" id="editAvatar"></div>
      <label class="upload-label-btn">
        📷 Change Photo
        <input type="file" accept="image/*" onchange="changeDP(event)">
      </label>
    </div>
    <div class="input-group">
      <label>Full Name</label>
      <input id="editName" class="m-input" placeholder="Your name">
    </div>
    <div class="input-group">
      <label>Email</label>
      <input id="editEmail" class="m-input" placeholder="Your email" type="email">
    </div>
    <div class="input-group">
      <label>Phone</label>
      <input id="editPhone" class="m-input" placeholder="Phone number" type="tel">
    </div>
    <div class="input-group">
      <label>New Password (leave blank to keep current)</label>
      <div class="pass-wrap">
        <input id="editPass" class="m-input" placeholder="New password" type="password">
        <button class="eye-btn" onclick="togglePass('editPass')">👁️</button>
      </div>
    </div>
    <div class="modal-btns">
      <button onclick="saveProfile()">Save Changes</button>
      <button class="btn-ghost" onclick="closeModal('editProfileModal')">Cancel</button>
    </div>
  </div>
</div>

<!-- SAVED PGS MODAL -->
<div id="savedPGModal" class="overlay hidden">
  <div class="modal">
    <div class="modal-top">
      <h3>❤️ Saved PGs</h3>
      <button class="close-btn" onclick="closeModal('savedPGModal')">✕</button>
    </div>
    <div id="savedPGList"></div>
  </div>
</div>

<!-- ADD PG MODAL -->
<div id="addPGModal" class="overlay hidden">
  <div class="modal">
    <div class="modal-top">
      <h3>List Your PG — Free!</h3>
      <button class="close-btn" onclick="closeModal('addPGModal')">✕</button>
    </div>
    <div class="input-group"><label>PG Name *</label><input id="newPGName" class="m-input" placeholder="e.g. Sunrise Boys Hostel"></div>
    <div class="input-group"><label>City *</label>
      <select id="newPGCity" class="m-input">
        <option>Bhopal</option><option>Delhi</option><option>Mumbai</option><option>Pune</option><option>Patna</option>
      </select>
    </div>
    <div class="input-group"><label>Monthly Rent (₹) *</label><input id="newPGPrice" class="m-input" type="number" placeholder="e.g. 6000"></div>
    <div class="input-group"><label>For</label>
      <select id="newPGGender" class="m-input">
        <option value="Boys">Boys Only</option>
        <option value="Girls">Girls Only</option>
        <option value="Both">Both</option>
      </select>
    </div>
    <div class="input-group"><label>Contact Number *</label><input id="newPGContact" class="m-input" type="tel" placeholder="Your phone number"></div>
    <div class="input-group"><label>Full Address</label><input id="newPGAddress" class="m-input" placeholder="Street, Area, City"></div>
    <div class="input-group"><label>Amenities</label><input id="newPGAmen" class="m-input" placeholder="e.g. WiFi, AC, Meals, Parking"></div>
    <div class="modal-btns">
      <button onclick="addNewPG()">✅ Submit Listing</button>
      <button class="btn-ghost" onclick="closeModal('addPGModal')">Cancel</button>
    </div>
  </div>
</div>

<!-- ROOMMATE CONNECT MODAL -->
<div id="roommateModal" class="overlay hidden">
  <div class="modal">
    <div class="modal-top">
      <h3>👥 Connect with Roommates</h3>
      <button class="close-btn" onclick="closeModal('roommateModal')">✕</button>
    </div>
    <p class="modal-note">Share your city, budget and preference. This saves locally on your device for now.</p>
    <div class="input-group"><label>Your Name</label><input id="roommateName" class="m-input" placeholder="e.g. Avya"></div>
    <div class="input-group"><label>City</label>
      <select id="roommateCity" class="m-input"><option>Bhopal</option><option>Delhi</option><option>Mumbai</option><option>Pune</option><option>Patna</option></select>
    </div>
    <div class="input-group"><label>Budget / Preference</label><input id="roommatePref" class="m-input" placeholder="e.g. Boys PG under ₹7000 near MP Nagar"></div>
    <div class="modal-btns">
      <button onclick="saveRoommatePost()">Post Interest</button>
      <button class="btn-ghost" onclick="closeModal('roommateModal')">Close</button>
    </div>
    <div id="roommateList" class="roommate-list"></div>
  </div>
</div>

<!-- PG DETAIL MODAL -->
<div id="pgDetailModal" class="overlay hidden">
  <div class="modal detail-modal">
    <div class="modal-top">
      <h3>PG Details</h3>
      <button class="close-btn" onclick="closeModal('pgDetailModal')">✕</button>
    </div>
    <div id="pgDetailBody"></div>
  </div>
</div>

<script src="data.js"></script>
<script src="script.js"></script>
</body>
</html>
```

## SECTION 2 — style.css

File name: `style.css`

```

## style.css

```css
:root {
  --brand: #e8460a;
  --brand-dark: #b83208;
  --brand-light: #fff3ee;
  --text: #1c1917;
  --muted: #6b7280;
  --bg: #f8f7f5;
  --card: #ffffff;
  --input: #f3f2f0;
  --border: rgba(0,0,0,0.08);
  --radius: 16px;
  --radius-sm: 10px;
  --shadow: 0 2px 16px rgba(0,0,0,0.07);
  --shadow-lg: 0 12px 40px rgba(232,70,10,0.18);
  --navbar: rgba(248,247,245,0.96);
}
.dark {
  --text: #f5f4f0;
  --muted: #9ca3af;
  --bg: #0d0c0a;
  --card: #1a1814;
  --input: #252218;
  --border: rgba(255,255,255,0.07);
  --navbar: rgba(13,12,10,0.96);
  --brand-light: #2a1200;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; color: var(--text); background: var(--bg); transition: background .3s, color .3s; min-height: 100vh; }
a { text-decoration: none; }
img { max-width: 100%; }

/* LOADER */
#loader { position: fixed; inset: 0; z-index: 9999; background: linear-gradient(145deg,#e8460a,#7c1c04); display: flex; align-items: center; justify-content: center; transition: opacity .6s; }
.loader-box { text-align: center; color: #fff; }
.loader-box svg { animation: floatUp 1.2s ease-in-out infinite; margin-bottom: 14px; }
.loader-name { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; margin-bottom: 20px; letter-spacing: -0.5px; }
.loader-bar { width: 160px; height: 3px; background: rgba(255,255,255,0.25); border-radius: 3px; overflow: hidden; margin: 0 auto 12px; }
.loader-fill { height: 100%; background: #fff; border-radius: 3px; animation: loadBar 1.5s ease forwards; }
.loader-sub { font-size: 13px; opacity: 0.7; }
@keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes loadBar { from{width:0} to{width:100%} }

/* NAVBAR */
.navbar { position: sticky; top: 0; z-index: 200; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 20px; background: var(--navbar); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
.nav-brand { display: flex; align-items: center; gap: 9px; flex-shrink: 0; }
.brand-text { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); letter-spacing: -0.5px; }
.brand-text span { color: var(--brand); }
.nav-center { flex: 1; max-width: 360px; margin: 0 16px; }
.nav-search-wrap { display: flex; align-items: center; gap: 8px; background: var(--input); border: 1px solid var(--border); border-radius: 50px; padding: 8px 14px; transition: border-color .2s; }
.nav-search-wrap:focus-within { border-color: var(--brand); }
.nav-search-wrap svg { color: var(--muted); flex-shrink: 0; }
.nav-search-wrap input { border: none; background: transparent; color: var(--text); font-size: 13px; outline: none; width: 100%; font-family: 'Inter', sans-serif; }
.nav-right { display: flex; align-items: center; gap: 8px; }
.icon-btn { width: 38px; height: 38px; border-radius: 50%; border: none; background: var(--input); color: var(--text); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all .2s; position: relative; }
.icon-btn:hover { background: var(--brand-light); color: var(--brand); }
.notif-dot { position: absolute; top: 7px; right: 7px; width: 7px; height: 7px; background: var(--brand); border-radius: 50%; border: 1.5px solid var(--navbar); display: none; }
.notif-dot.show { display: block; }

/* NOTIFICATION PANEL */
.notif-panel { position: absolute; top: 56px; right: 60px; width: 300px; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); z-index: 300; overflow: hidden; }
.notif-panel.hidden { display: none; }
.notif-header { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; border-bottom: 1px solid var(--border); font-size: 14px; }
.notif-header span { font-size: 12px; color: var(--brand); cursor: pointer; }
.notif-item { padding: 12px 16px; border-bottom: 1px solid var(--border); font-size: 13px; color: var(--muted); }
.notif-empty { padding: 24px 16px; text-align: center; font-size: 13px; color: var(--muted); }

/* PROFILE */
.profile-wrap { position: relative; cursor: pointer; }
.profile-avatar { width: 38px; height: 38px; border-radius: 50%; border: 2.5px solid var(--brand); overflow: hidden; background: linear-gradient(135deg,#e8460a,#b83208); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: #fff; position: relative; }
.profile-avatar img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }

.profile-menu { display: none; position: absolute; right: 0; top: 50px; width: 230px; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: 0 8px 32px rgba(0,0,0,0.15); z-index: 300; overflow: hidden; }
.pm-header { display: flex; align-items: center; gap: 12px; padding: 16px; background: linear-gradient(135deg,#e8460a,#b83208); color: #fff; }
.pm-avatar-big { width: 42px; height: 42px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px; overflow: hidden; flex-shrink: 0; position: relative; }
.pm-avatar-big img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.pm-info strong { font-size: 14px; display: block; margin-bottom: 2px; }
.pm-info span { font-size: 11px; opacity: 0.8; }
.pm-divider { height: 1px; background: var(--border); }
.pm-item { width: 100%; display: flex; align-items: center; gap: 10px; padding: 11px 16px; font-size: 13px; color: var(--text); background: transparent; border: none; cursor: pointer; text-align: left; transition: background .15s; border-radius: 0; box-shadow: none; font-family: 'Inter', sans-serif; }
.pm-item:hover { background: var(--input); transform: none; box-shadow: none; }
.pm-item svg { color: var(--muted); flex-shrink: 0; }
.pm-item.danger { color: #dc2626; }
.pm-item.danger svg { color: #dc2626; }

/* HERO */
.hero { background: linear-gradient(145deg,#e8460a 0%,#c23a08 40%,#7c1c04 100%); color: #fff; padding: 56px 20px 80px; text-align: center; position: relative; overflow: hidden; }
.hero::before { content:''; position:absolute; inset:0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
.hero-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
.hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.25); padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 500; margin-bottom: 20px; backdrop-filter: blur(8px); }
.hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(28px,6vw,54px); font-weight: 800; line-height: 1.08; margin-bottom: 14px; letter-spacing: -1px; }
.hero h1 em { font-style: normal; color: #fde68a; }
.hero-sub { font-size: 15px; opacity: 0.85; margin-bottom: 30px; letter-spacing: 0.3px; }

.hero-search { max-width: 540px; margin: 0 auto 28px; }
.hero-search-box { display: flex; align-items: center; gap: 10px; background: #fff; border-radius: 50px; padding: 6px 6px 6px 18px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
.hero-search-box svg { flex-shrink: 0; }
.hero-search-box input { flex: 1; border: none; outline: none; font-size: 15px; color: #1c1917; background: transparent; font-family: 'Inter', sans-serif; }
.hero-search-box button { padding: 10px 22px; border-radius: 50px; font-size: 14px; white-space: nowrap; }

.city-selector { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 28px; }
.city-btn { padding: 8px 18px; border-radius: 50px; font-size: 13px; font-weight: 500; border: 1.5px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.1); color: #fff; cursor: pointer; transition: all .2s; }
.city-btn:hover, .city-btn.active { background: #fff; color: var(--brand); border-color: #fff; transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.2); }
.hero-stats { display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; }
.h-stat { text-align: center; padding: 0 20px; }
.h-stat strong { display: block; font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: #fde68a; }
.h-stat span { font-size: 12px; opacity: 0.75; }
.h-stat-div { width: 1px; height: 30px; background: rgba(255,255,255,0.2); }
.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; line-height: 0; }
.hero-wave svg { width: 100%; display: block; height: 44px; }

/* TABS */
.tab-nav-wrap { background: var(--card); border-bottom: 1px solid var(--border); position: sticky; top: 63px; z-index: 100; }
.tab-nav { display: flex; overflow-x: auto; scrollbar-width: none; max-width: 900px; margin: 0 auto; }
.tab-nav::-webkit-scrollbar { display: none; }
.tab-btn { flex: none; padding: 14px 20px; font-size: 13px; font-weight: 500; border-bottom: 2.5px solid transparent; background: none; color: var(--muted); cursor: pointer; white-space: nowrap; border-radius: 0; transition: all .2s; font-family: 'Inter', sans-serif; letter-spacing: 0.2px; }
.tab-btn:hover { color: var(--text); transform: none; box-shadow: none; }
.tab-btn.active { color: var(--brand); border-bottom-color: var(--brand); }

/* MAIN */
.main { max-width: 900px; margin: 0 auto; padding: 28px 16px 80px; }
.tab-panel { display: none; animation: fadeSlide .22s ease; }
.tab-panel.active { display: block; }
@keyframes fadeSlide { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
.panel-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 22px; flex-wrap: wrap; }
.panel-header h2 { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; margin-bottom: 3px; }
.panel-sub { font-size: 14px; color: var(--muted); }
.sub-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 600; }
.btn-sm { padding: 9px 18px; font-size: 13px; border-radius: 50px; white-space: nowrap; border: none; background: linear-gradient(135deg,var(--brand),var(--brand-dark)); color: #fff; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500; transition: all .2s; }
.btn-sm:hover { transform: translateY(-1px); box-shadow: 0 4px 14px rgba(232,70,10,.35); }

/* FILTER BAR */
.filter-bar { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 22px; }
.filter-search { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 10px 14px; transition: border-color .2s; }
.filter-search:focus-within { border-color: var(--brand); }
.filter-search svg { color: var(--muted); flex-shrink: 0; }
.filter-search input { border: none; background: transparent; color: var(--text); font-size: 14px; outline: none; width: 100%; font-family: 'Inter', sans-serif; }
.sel { padding: 10px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: var(--card); color: var(--text); font-size: 13px; outline: none; cursor: pointer; font-family: 'Inter', sans-serif; }
.sel.full { width: 100%; }

/* PG GRID */
.pg-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(268px,1fr)); gap: 16px; margin-bottom: 24px; }
.pg-card { background: var(--card); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); cursor: pointer; transition: transform .25s, box-shadow .25s; }
.pg-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.pg-img-wrap { position: relative; overflow: hidden; }
.pg-img-wrap img { width: 100%; height: 170px; object-fit: cover; display: block; transition: transform .4s; }
.pg-card:hover .pg-img-wrap img { transform: scale(1.05); }
.pg-badges { position: absolute; top: 10px; left: 10px; display: flex; gap: 5px; }
.pg-badge { padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; }
.b-boys { background: rgba(37,99,235,.85); color: #fff; }
.b-girls { background: rgba(219,39,119,.85); color: #fff; }
.b-both { background: rgba(5,150,105,.85); color: #fff; }
.pg-rating-badge { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); color: #fde68a; padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; backdrop-filter: blur(4px); }
.pg-body { padding: 14px 16px; }
.pg-body h3 { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pg-city-tag { font-size: 12px; color: var(--muted); margin-bottom: 6px; display: flex; align-items: center; gap: 4px; }
.pg-rent { font-size: 22px; font-weight: 700; color: var(--brand); margin-bottom: 4px; font-family: 'Syne', sans-serif; }
.pg-rent span { font-size: 12px; color: var(--muted); font-weight: 400; }
.pg-amenities { font-size: 11px; color: var(--muted); margin-bottom: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pg-stars { display: flex; align-items: center; gap: 4px; margin-bottom: 12px; }
.pg-stars small { font-size: 12px; color: var(--muted); }
.pg-btns { display: flex; gap: 6px; }
.pg-btns button { flex: 1; font-size: 12px; padding: 8px 6px; border-radius: 8px; border: none; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500; transition: all .2s; }
.pg-btns button:hover { transform: translateY(-1px); }
.bcall { background: linear-gradient(135deg,#16a34a,#15803d) !important; color: #fff !important; }
.bmap { background: linear-gradient(135deg,#2563eb,#1e40af) !important; color: #fff !important; }
.bfav { background: var(--input) !important; color: var(--text) !important; box-shadow: none !important; }
.no-results { text-align: center; padding: 60px 20px; color: var(--muted); grid-column: 1/-1; }
.no-results svg { margin-bottom: 12px; opacity: 0.3; }


/* FARE */
.fare-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; }
@media(max-width:620px){ .fare-layout{grid-template-columns:1fr} }
.fare-box, .tips-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; }
.fare-box-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; margin-bottom: 16px; }
.lbl { font-size: 12px; color: var(--muted); margin-bottom: 6px; display: block; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
.fare-meta-row { display: flex; gap: 10px; margin-bottom: 16px; }
.fare-meta-item { display: flex; align-items: center; gap: 6px; background: var(--input); padding: 6px 12px; border-radius: 20px; font-size: 13px; color: var(--muted); }
.fare-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
.fare-card-item { background: var(--input); border-radius: 12px; padding: 14px 10px; text-align: center; border: 1.5px solid transparent; position: relative; }
.fare-card-item.best { border-color: var(--brand); background: var(--brand-light); }
.dark .fare-card-item.best { background: #2a1200; }
.fci-best { position: absolute; top: -9px; left: 50%; transform: translateX(-50%); background: var(--brand); color: #fff; font-size: 10px; font-weight: 600; padding: 2px 10px; border-radius: 20px; white-space: nowrap; }
.fci-icon { font-size: 24px; margin-bottom: 5px; }
.fci-label { font-size: 11px; color: var(--muted); margin-bottom: 5px; font-weight: 500; }
.fci-price { font-size: 14px; font-weight: 700; color: var(--text); }
.fare-note-box { background: #fef9c3; color: #78350f; border-radius: 10px; padding: 11px 14px; font-size: 13px; line-height: 1.5; }
.dark .fare-note-box { background: #1c1500; color: #fbbf24; }
.tips-title { display: flex; align-items: center; gap: 8px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 16px; }
.tip-row { font-size: 13px; color: var(--muted); padding: 9px 0; border-bottom: 1px solid var(--border); line-height: 1.5; }
.tip-row:last-child { border-bottom: none; }

/* GUIDE */
.guide-wrap { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.g-step { display: flex; gap: 16px; padding: 18px 20px; border-bottom: 1px solid var(--border); }
.g-step:last-child { border-bottom: none; }
.g-num { width: 32px; height: 32px; min-width: 32px; border-radius: 50%; background: linear-gradient(135deg,var(--brand),var(--brand-dark)); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; margin-top: 1px; }
.g-body { flex: 1; }
.g-title { font-size: 14px; font-weight: 600; margin-bottom: 5px; }
.g-desc { font-size: 13px; color: var(--muted); line-height: 1.65; }
.g-tip { display: inline-block; margin-top: 8px; background: #dcfce7; color: #166534; font-size: 12px; padding: 4px 11px; border-radius: 6px; font-weight: 500; }
.dark .g-tip { background: #14532d; color: #86efac; }

/* HELPLINES */
.sos-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 24px; }
@media(max-width:500px){ .sos-grid{grid-template-columns:1fr 1fr} }
.sos-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 12px; text-align: center; text-decoration: none; transition: all .2s; display: block; }
.sos-card:hover { transform: translateY(-3px); border-color: #dc2626; box-shadow: 0 8px 24px rgba(220,38,38,0.15); }
.sos-card.red { background: #fff5f5; border-color: rgba(220,38,38,0.2); }
.dark .sos-card.red { background: #1f0a0a; }
.sos-num { font-family: 'Syne', sans-serif; font-size: 30px; font-weight: 800; color: #dc2626; margin-bottom: 4px; }
.sos-name { font-size: 12px; color: var(--muted); margin-bottom: 12px; font-weight: 500; }
.sos-call { display: inline-block; padding: 6px 16px; background: #dc2626; color: #fff; border-radius: 20px; font-size: 12px; font-weight: 500; }
.helpline-list { display: flex; flex-direction: column; gap: 8px; }
.h-item { display: flex; align-items: center; gap: 13px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; transition: all .2s; }
.h-item:hover { border-color: var(--brand); }
.h-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--input); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.h-info { flex: 1; }
.h-info strong { font-size: 14px; display: block; margin-bottom: 2px; }
.h-info span { font-size: 12px; color: var(--muted); }
.h-call { padding: 7px 14px; border: 1.5px solid var(--brand); color: var(--brand); background: transparent; border-radius: 20px; font-size: 12px; white-space: nowrap; font-weight: 500; text-decoration: none; transition: all .2s; }
.h-call:hover { background: var(--brand); color: #fff; }

/* NEARBY */
.nearby-cats { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
.cat-btn { padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border); background: var(--card); color: var(--muted); font-size: 13px; cursor: pointer; transition: all .2s; font-family: 'Inter', sans-serif; font-weight: 500; }
.cat-btn.active, .cat-btn:hover { background: var(--brand); color: #fff; border-color: var(--brand); }
.nearby-list { display: flex; flex-direction: column; gap: 10px; }
.n-item { display: flex; align-items: center; gap: 13px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; transition: all .2s; }
.n-item:hover { border-color: var(--brand); }
.n-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--input); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.n-info { flex: 1; min-width: 0; }
.n-info strong { font-size: 14px; display: block; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.n-info span { font-size: 12px; color: var(--muted); }
.n-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.n-dist { font-size: 12px; font-weight: 600; color: var(--brand); }
.n-map { padding: 6px 12px; background: #eff6ff; color: #1d4ed8; border: none; border-radius: 20px; font-size: 12px; cursor: pointer; font-weight: 500; text-decoration: none; display: inline-block; transition: all .2s; }
.dark .n-map { background: #1e3a5f; color: #93c5fd; }

/* FOOTER */
.site-footer { background: #100e0b; color: #9ca3af; padding: 48px 20px 0; margin-top: 60px; }
.footer-inner { display: grid; grid-template-columns: 1.2fr 2fr; gap: 48px; max-width: 900px; margin: 0 auto 40px; }
@media(max-width:640px){ .footer-inner{grid-template-columns:1fr} }
.footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.footer-logo span { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #fff; }
.footer-logo em { color: var(--brand); font-style: normal; }
.footer-brand-col p { font-size: 13px; line-height: 1.7; margin-bottom: 14px; }
.footer-cities { font-size: 12px; color: #6b7280; }
.footer-links-col { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
@media(max-width:480px){ .footer-links-col{grid-template-columns:1fr 1fr} }
.footer-col-title { font-size: 12px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 13px; color: #9ca3af; text-decoration: none; margin-bottom: 9px; transition: color .2s; }
.footer-col a:hover { color: var(--brand); }
.footer-bottom { border-top: 1px solid #1f1c18; padding: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; max-width: 900px; margin: 0 auto; font-size: 12px; }
.footer-bottom-links { display: flex; gap: 18px; }
.footer-bottom-links a { color: #6b7280; font-size: 12px; }
.footer-bottom-links a:hover { color: var(--brand); }

/* GLOBAL BUTTONS */
button { padding: 10px 18px; border: none; border-radius: 10px; background: linear-gradient(135deg,var(--brand),var(--brand-dark)); color: #fff; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; transition: transform .15s, box-shadow .15s; }
button:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(232,70,10,.3); }
.btn-ghost { background: var(--input) !important; color: var(--text) !important; box-shadow: none !important; }
.btn-ghost:hover { box-shadow: none !important; }
.btn-full { width: 100%; padding: 13px !important; font-size: 15px !important; }

/* MODALS */
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.65); z-index: 999; display: flex; align-items: center; justify-content: center; padding: 16px; backdrop-filter: blur(6px); }
.overlay.hidden { display: none; }
.modal { background: var(--card); border-radius: 20px; padding: 26px; width: 100%; max-width: 430px; max-height: 92vh; overflow-y: auto; }
.detail-modal { max-width: 500px; }
.modal-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.modal-top h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; }
.close-btn { width: 32px; height: 32px; border-radius: 50% !important; padding: 0 !important; font-size: 14px; background: var(--input) !important; color: var(--text) !important; box-shadow: none !important; display: flex; align-items: center; justify-content: center; }
.input-group { margin-bottom: 14px; }
.input-group label { font-size: 12px; font-weight: 600; color: var(--muted); display: block; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.4px; }
.m-input { width: 100%; padding: 11px 14px; border: 1.5px solid var(--border); border-radius: 10px; background: var(--input); color: var(--text); font-size: 14px; outline: none; font-family: 'Inter', sans-serif; transition: border-color .2s; display: block; }
.m-input:focus { border-color: var(--brand); }
select.m-input { cursor: pointer; }
.pass-wrap { position: relative; }
.pass-wrap .m-input { padding-right: 44px; }
.eye-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: transparent !important; color: var(--muted) !important; padding: 4px !important; font-size: 16px; box-shadow: none !important; }
.eye-btn:hover { transform: translateY(-50%) !important; box-shadow: none !important; }
.modal-btns { display: flex; gap: 10px; margin-top: 6px; }
.modal-btns button { flex: 1; }

/* AUTH MODAL */
.auth-modal { text-align: center; }
.auth-logo { margin-bottom: 16px; }
.auth-title { font-family: 'Syne', sans-serif; font-size: 24px; font-weight: 800; margin-bottom: 6px; }
.auth-sub { color: var(--muted); font-size: 14px; margin-bottom: 20px; }
.auth-tabs { display: flex; background: var(--input); border-radius: 10px; padding: 4px; margin-bottom: 20px; }
.auth-tab { flex: 1; padding: 9px; font-size: 13px; font-weight: 600; border-radius: 8px; background: transparent; color: var(--muted); transition: all .2s; box-shadow: none !important; transform: none !important; }
.auth-tab.active { background: var(--card); color: var(--brand); box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important; }
.auth-modal .input-group { text-align: left; }

/* PROFILE EDIT */
.profile-pic-edit { text-align: center; margin-bottom: 20px; }
.profile-pic-big { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg,var(--brand),var(--brand-dark)); margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 700; color: #fff; overflow: hidden; position: relative; }
.profile-pic-big img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.upload-label-btn { display: inline-block; padding: 8px 18px; background: var(--input); border-radius: 20px; font-size: 13px; cursor: pointer; color: var(--text); transition: all .2s; }
.upload-label-btn input { display: none; }
.upload-label-btn:hover { background: var(--brand-light); color: var(--brand); }

/* DETAIL MODAL */
.detail-img { width: 100%; border-radius: 12px; height: 200px; object-fit: cover; margin-bottom: 16px; }
.detail-facts { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; background: var(--input); border-radius: 12px; padding: 14px; }
.detail-fact-row { display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
.detail-fact-row span:first-child { color: var(--muted); }
.detail-fact-row span:last-child { font-weight: 600; }
.detail-action-row { display: flex; gap: 8px; margin-bottom: 20px; }
.detail-action-row button { flex: 1; }
.rev-title { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 12px; }
.star-row { display: flex; gap: 8px; margin-bottom: 12px; }
.star-row span { font-size: 24px; cursor: pointer; opacity: .3; transition: all .15s; filter: grayscale(1); }
.star-row span.on { opacity: 1; transform: scale(1.2); filter: none; }
.rev-input-row { display: flex; gap: 8px; margin-bottom: 14px; }
.rev-input-row .m-input { flex: 1; margin: 0; }
.rev-input-row button { padding: 11px 16px; white-space: nowrap; }
.rev-list { max-height: 160px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; }
.rev-item { background: var(--input); border-radius: 10px; padding: 11px 13px; }
.rev-user { font-size: 13px; font-weight: 600; color: var(--brand); margin-bottom: 2px; }
.rev-stars-text { font-size: 12px; color: #f59e0b; margin-bottom: 3px; }
.rev-body { font-size: 13px; color: var(--text); line-height: 1.5; }

/* SAVED PGS */
.saved-pg-item { display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--input); border-radius: 12px; margin-bottom: 8px; cursor: pointer; transition: all .2s; }
.saved-pg-item:hover { background: var(--brand-light); }
.saved-pg-img { width: 50px; height: 50px; border-radius: 10px; object-fit: cover; }
.saved-pg-info strong { font-size: 14px; display: block; }
.saved-pg-info span { font-size: 12px; color: var(--muted); }
.saved-empty { text-align: center; padding: 40px 20px; color: var(--muted); font-size: 14px; }

/* MOBILE */
@media(max-width:620px){
  .nav-center { display: none; }
  .hero { padding: 40px 14px 68px; }
  .hero h1 { letter-spacing: -0.5px; }
  .main { padding: 18px 12px 60px; }
  .pg-grid { grid-template-columns: 1fr; }
  .h-stat { padding: 0 12px; }
}

/* ===================== COMPARE ===================== */
.compare-search-bar { position: relative; margin-bottom: 14px; }
.compare-dropdown { position: absolute; top: 100%; left: 0; right: 0; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-sm); box-shadow: var(--shadow); z-index: 50; max-height: 220px; overflow-y: auto; margin-top: 4px; }
.compare-dropdown.hidden { display: none; }
.compare-drop-item { padding: 11px 14px; font-size: 14px; cursor: pointer; border-bottom: 1px solid var(--border); transition: background .15s; }
.compare-drop-item:hover { background: var(--input); }
.compare-selected-pills { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; min-height: 40px; }
.compare-pill { display: flex; align-items: center; gap: 8px; background: var(--brand-light); border: 1px solid rgba(232,70,10,.2); color: var(--brand); padding: 7px 14px; border-radius: 50px; font-size: 13px; font-weight: 500; }
.dark .compare-pill { background: #2a1200; }
.compare-pill button { background: transparent !important; color: var(--brand) !important; padding: 0 !important; font-size: 16px; box-shadow: none !important; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; }
.compare-table-wrap { overflow-x: auto; }
.compare-table { width: 100%; border-collapse: collapse; background: var(--card); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
.compare-table th { padding: 14px 16px; text-align: left; background: var(--input); font-size: 13px; font-weight: 600; color: var(--muted); }
.compare-table td { padding: 14px 16px; font-size: 14px; border-top: 1px solid var(--border); vertical-align: top; }
.compare-table tr:hover td { background: var(--input); }
.compare-table .pg-name-cell { font-weight: 700; font-family: 'Syne', sans-serif; }
.compare-table .best-cell { color: #16a34a; font-weight: 700; }
.compare-empty { text-align: center; padding: 60px 20px; color: var(--muted); }

/* ===================== BUDGET ===================== */
.budget-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media(max-width:640px){ .budget-layout { grid-template-columns: 1fr; } }
.budget-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; }
.budget-card-title { font-size: 12px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
.city-btns-small { display: flex; gap: 6px; flex-wrap: wrap; }
.cbs { padding: 6px 14px; border-radius: 20px; font-size: 12px; border: 1px solid var(--border); background: var(--input); color: var(--muted); cursor: pointer; font-family: 'Inter', sans-serif; transition: all .2s; }
.cbs.active { background: var(--brand); color: #fff; border-color: var(--brand); }
.budget-slider-row { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.budget-slider-row label { font-size: 13px; color: var(--text); width: 130px; flex-shrink: 0; }
.budget-slider-row input[type=range] { flex: 1; accent-color: var(--brand); cursor: pointer; }
.budget-slider-row span { font-size: 13px; font-weight: 600; color: var(--brand); width: 70px; text-align: right; flex-shrink: 0; }
.budget-result-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; margin-bottom: 14px; }
.budget-result-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; margin-bottom: 6px; }
.budget-city-tag { font-size: 13px; color: var(--muted); margin-bottom: 16px; }
.budget-breakdown { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.budget-row { display: flex; justify-content: space-between; align-items: center; font-size: 14px; padding: 8px 0; border-bottom: 1px solid var(--border); }
.budget-row:last-child { border-bottom: none; }
.budget-row-label { color: var(--muted); display: flex; align-items: center; gap: 6px; }
.budget-row-val { font-weight: 600; }
.budget-total-row { display: flex; justify-content: space-between; align-items: center; padding: 14px 0 8px; border-top: 2px solid var(--border); font-size: 15px; }
.budget-total-row strong { font-size: 22px; font-family: 'Syne', sans-serif; color: var(--brand); }
.budget-savings-row { text-align: center; padding: 10px; border-radius: 10px; font-size: 14px; font-weight: 600; margin-top: 10px; }
.savings-positive { background: #dcfce7; color: #166534; }
.savings-negative { background: #fee2e2; color: #991b1b; }
.dark .savings-positive { background: #14532d; color: #86efac; }
.dark .savings-negative { background: #450a0a; color: #fca5a5; }
.budget-tip { background: #fef9c3; color: #78350f; border-radius: 10px; padding: 12px 14px; font-size: 13px; margin-top: 12px; line-height: 1.6; }
.dark .budget-tip { background: #1c1500; color: #fbbf24; }
.budget-avg-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; }
.avg-row { display: flex; justify-content: space-between; font-size: 13px; padding: 7px 0; border-bottom: 1px solid var(--border); }
.avg-row:last-child { border-bottom: none; }

/* ===================== CHECKLIST ===================== */
.checklist-progress-wrap { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
.checklist-progress-bar { flex: 1; height: 8px; background: var(--input); border-radius: 4px; overflow: hidden; }
.checklist-progress-fill { height: 100%; background: linear-gradient(90deg, var(--brand), #f59e0b); border-radius: 4px; transition: width .4s ease; }
.checklist-progress-text { font-size: 13px; font-weight: 600; color: var(--muted); white-space: nowrap; }
.checklist-wrap { display: flex; flex-direction: column; gap: 10px; }
.checklist-category { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.checklist-cat-header { padding: 14px 18px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; background: var(--input); display: flex; align-items: center; gap: 10px; }
.checklist-item { display: flex; align-items: flex-start; gap: 12px; padding: 13px 18px; border-top: 1px solid var(--border); cursor: pointer; transition: background .15s; }
.checklist-item:hover { background: var(--input); }
.checklist-item.done .ci-text { text-decoration: line-through; color: var(--muted); }
.ci-check { width: 22px; height: 22px; min-width: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 12px; transition: all .2s; background: var(--input); }
.checklist-item.done .ci-check { background: #16a34a; border-color: #16a34a; color: white; }
.ci-body { flex: 1; }
.ci-text { font-size: 14px; font-weight: 500; margin-bottom: 2px; }
.ci-sub { font-size: 12px; color: var(--muted); line-height: 1.5; }
.checklist-celebration { text-align: center; padding: 30px; font-size: 28px; display: none; }

/* ===================== AI CHAT ===================== */
.ai-chat-wrap { display: flex; flex-direction: column; height: 560px; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.ai-messages { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 14px; scroll-behavior: smooth; }
.ai-msg { display: flex; gap: 10px; align-items: flex-start; }
.ai-msg.user { flex-direction: row-reverse; }
.ai-avatar { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg,var(--brand),var(--brand-dark)); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.ai-msg.user .ai-avatar { background: linear-gradient(135deg,#2563eb,#1d4ed8); }
.ai-bubble { background: var(--input); padding: 12px 16px; border-radius: 16px; border-top-left-radius: 4px; max-width: 80%; font-size: 14px; line-height: 1.65; color: var(--text); }
.ai-msg.user .ai-bubble { background: linear-gradient(135deg,var(--brand),var(--brand-dark)); color: white; border-top-right-radius: 4px; border-top-left-radius: 16px; }
.ai-typing { display: flex; gap: 5px; padding: 4px 0; }
.ai-typing span { width: 7px; height: 7px; background: var(--muted); border-radius: 50%; animation: typing .9s infinite; }
.ai-typing span:nth-child(2) { animation-delay: .2s; }
.ai-typing span:nth-child(3) { animation-delay: .4s; }
@keyframes typing { 0%,60%,100%{transform:translateY(0);opacity:.4} 30%{transform:translateY(-6px);opacity:1} }
.ai-suggestions { display: flex; gap: 8px; flex-wrap: wrap; padding: 10px 16px; border-top: 1px solid var(--border); background: var(--bg); }
.ai-suggestion { padding: 7px 14px; border-radius: 20px; font-size: 12px; font-weight: 500; background: var(--card); border: 1px solid var(--border); color: var(--text); cursor: pointer; transition: all .2s; white-space: nowrap; }
.ai-suggestion:hover { background: var(--brand-light); color: var(--brand); border-color: var(--brand); box-shadow: none; transform: none; }
.ai-input-row { display: flex; gap: 10px; padding: 14px 16px; border-top: 1px solid var(--border); background: var(--card); }
.ai-send-btn { width: 44px; height: 44px; border-radius: 50%; padding: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

/* ===================== 2026 UI REFRESH ===================== */
:root {
  --brand: #ff6b35;
  --brand-dark: #d9480f;
  --brand-2: #2563eb;
  --brand-3: #14b8a6;
  --brand-light: #fff4ed;
  --text: #111827;
  --muted: #64748b;
  --bg: #f6f8fb;
  --card: rgba(255,255,255,.86);
  --input: #f1f5f9;
  --border: rgba(15,23,42,.09);
  --radius: 22px;
  --radius-sm: 14px;
  --shadow: 0 18px 55px rgba(15,23,42,.09);
  --shadow-lg: 0 28px 80px rgba(255,107,53,.22);
  --navbar: rgba(255,255,255,.78);
}
.dark {
  --text: #f8fafc;
  --muted: #a7b2c5;
  --bg: #090d18;
  --card: rgba(15,23,42,.78);
  --input: rgba(30,41,59,.9);
  --border: rgba(148,163,184,.17);
  --navbar: rgba(9,13,24,.82);
  --brand-light: rgba(255,107,53,.14);
}
html { scroll-behavior: smooth; }
body {
  background:
    radial-gradient(circle at 8% 10%, rgba(37,99,235,.12), transparent 28rem),
    radial-gradient(circle at 90% 0%, rgba(255,107,53,.14), transparent 30rem),
    linear-gradient(180deg, #fbfdff 0%, var(--bg) 45%, #eef4ff 100%);
  overflow-x: hidden;
}
.dark body, body.dark {
  background:
    radial-gradient(circle at 8% 10%, rgba(37,99,235,.24), transparent 30rem),
    radial-gradient(circle at 88% 6%, rgba(255,107,53,.22), transparent 28rem),
    linear-gradient(180deg, #060915 0%, var(--bg) 100%);
}
.navbar {
  top: 14px;
  width: min(1180px, calc(100% - 28px));
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: 999px;
  box-shadow: 0 18px 45px rgba(15,23,42,.08);
}
.nav-brand svg, .footer-logo svg, .auth-logo svg { filter: drop-shadow(0 10px 18px rgba(255,107,53,.28)); }
.nav-search-wrap, .icon-btn, .profile-avatar, .city-btn, .tab-btn, button, .sel, .m-input { transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease; }
.icon-btn:hover, .city-btn:hover, .tab-btn:hover, .hero-feature-card:hover { transform: translateY(-2px); }
.hero {
  position: relative;
  isolation: isolate;
  min-height: 690px;
  padding: 92px 20px 94px;
  color: #fff;
  background:
    linear-gradient(135deg, rgba(15,23,42,.96), rgba(15,23,42,.78)),
    url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=80') center/cover;
  overflow: hidden;
}
.hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 34%;
  background: linear-gradient(180deg, transparent, rgba(246,248,251,.95));
  z-index: -1;
}
.dark .hero::after { background: linear-gradient(180deg, transparent, rgba(9,13,24,.95)); }
.hero-gridlines {
  position: absolute;
  inset: 0;
  opacity: .16;
  background-image: linear-gradient(rgba(255,255,255,.24) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.24) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, #000, transparent 78%);
  z-index: -1;
}
.hero-orb { position: absolute; border-radius: 999px; filter: blur(10px); z-index: -1; }
.hero-orb-one { width: 300px; height: 300px; left: 7%; top: 13%; background: rgba(37,99,235,.32); animation: floatUp 4s ease-in-out infinite; }
.hero-orb-two { width: 260px; height: 260px; right: 10%; top: 24%; background: rgba(255,107,53,.34); animation: floatUp 5.2s ease-in-out infinite reverse; }
.hero-inner { max-width: 1040px; }
.hero-badge {
  width: fit-content;
  margin: 0 auto 18px;
  padding: 9px 15px;
  border: 1px solid rgba(255,255,255,.24);
  border-radius: 999px;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(14px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.18);
}
.hero h1 { font-size: clamp(46px, 8vw, 96px); line-height: .92; letter-spacing: -4px; text-wrap: balance; }
.hero h1 em { color: transparent; background: linear-gradient(90deg,#ffd166,#ff6b35,#74f6d6); -webkit-background-clip: text; background-clip: text; font-style: normal; }
.hero-sub { max-width: 760px; margin: 20px auto 0; color: rgba(255,255,255,.82); font-size: clamp(16px, 2vw, 21px); }
.hero-actions { display:flex; justify-content:center; gap:12px; margin: 24px 0 4px; flex-wrap: wrap; }
.hero-action { border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.1); color:#fff; border-radius:999px; padding: 12px 20px; font-weight: 800; box-shadow:none; }
.hero-action.primary { background: linear-gradient(135deg,var(--brand),#f59e0b); border-color: transparent; box-shadow: 0 18px 35px rgba(255,107,53,.28); }
.hero-search { max-width: 750px; margin: 24px auto 18px; }
.hero-search-box {
  background: rgba(255,255,255,.94);
  border: 1px solid rgba(255,255,255,.42);
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(0,0,0,.22);
  padding: 8px;
}
.hero-search-box input { min-height: 52px; font-size: 16px; }
.hero-search-box button, .btn-sm, .btn-full, .modal-btns button, .ai-send-btn {
  background: linear-gradient(135deg,var(--brand),#f59e0b);
  color: #fff;
  border: 0;
  box-shadow: 0 12px 28px rgba(255,107,53,.25);
}
.city-selector { margin-top: 18px; gap: 10px; }
.city-btn {
  border: 1px solid rgba(255,255,255,.18);
  color: #fff;
  background: rgba(255,255,255,.11);
  backdrop-filter: blur(12px);
  border-radius: 999px;
}
.city-btn.active { background: #fff; color: #0f172a; box-shadow: 0 16px 35px rgba(255,255,255,.2); }
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0,1fr));
  gap: 12px;
  max-width: 900px;
  margin: 28px auto 0;
  background: transparent;
  border: 0;
}
.h-stat {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.18);
  backdrop-filter: blur(14px);
}
.h-stat strong { color:#fff; font-size: 24px; }
.h-stat span { color: rgba(255,255,255,.72); }
.hero-feature-grid { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:12px; max-width: 900px; margin: 14px auto 0; }
.hero-feature-card {
  text-align:left;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(255,255,255,.13);
  color:#fff;
  backdrop-filter: blur(14px);
  box-shadow: none;
}
.hero-feature-card span { display:block; font-size: 24px; margin-bottom: 8px; }
.hero-feature-card strong { display:block; font-family:'Syne',sans-serif; font-size:16px; }
.hero-feature-card small { color: rgba(255,255,255,.72); }
.hero-wave { display:none; }
.tab-nav-wrap { position: sticky; top: 86px; z-index: 150; background: transparent; border:0; padding: 0 16px; margin-top: -42px; }
.tab-nav {
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px;
  background: var(--navbar);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 18px 45px rgba(15,23,42,.09);
  backdrop-filter: blur(16px);
}
.tab-btn { border-radius: 16px; color: var(--muted); }
.tab-btn.active { background: linear-gradient(135deg,var(--brand),#f59e0b); color:#fff; box-shadow: 0 10px 24px rgba(255,107,53,.24); }
.main { max-width: 1160px; padding: 36px 20px 70px; }
.tab-panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 30px;
  padding: clamp(18px, 3vw, 30px);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}
.panel-header { align-items: center; margin-bottom: 22px; }
.panel-header h2 { font-size: clamp(24px,3vw,34px); letter-spacing: -1px; }
.filter-bar, .fare-box, .tips-card, .budget-card, .budget-result-card, .budget-avg-card, .ai-chat-wrap, .checklist-category, .compare-table {
  background: rgba(255,255,255,.72);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(15,23,42,.05);
}
.dark .filter-bar, .dark .fare-box, .dark .tips-card, .dark .budget-card, .dark .budget-result-card, .dark .budget-avg-card, .dark .ai-chat-wrap, .dark .checklist-category, .dark .compare-table { background: rgba(15,23,42,.62); }
.pg-grid { grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); }
.pg-card {
  border: 1px solid var(--border);
  border-radius: 26px;
  overflow: hidden;
  background: var(--card);
  box-shadow: 0 14px 38px rgba(15,23,42,.08);
}
.pg-card:hover { transform: translateY(-7px); box-shadow: 0 26px 70px rgba(15,23,42,.14); }
.pg-img-wrap { height: 188px; }
.pg-img-wrap::after { content:''; position:absolute; inset:0; background: linear-gradient(180deg, rgba(15,23,42,.1), rgba(15,23,42,.56)); pointer-events:none; }
.pg-badge, .pg-rating-badge { backdrop-filter: blur(12px); }
.pg-body h3 { font-size: 18px; letter-spacing: -.3px; }
.pg-rent { font-size: 24px; color: var(--brand); }
.pg-btns button { border-radius: 14px; }
.sos-card, .nearby-item, .helpline-item, .guide-step, .fare-card-item, .compare-drop-item, .compare-pill {
  border-radius: 22px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 28px rgba(15,23,42,.05);
}
.sos-card.red, .sos-card:hover { background: linear-gradient(135deg,#ef4444,#f97316); }
.modal {
  border-radius: 28px;
  border: 1px solid var(--border);
  box-shadow: 0 32px 90px rgba(15,23,42,.24);
  background: var(--card);
  backdrop-filter: blur(20px);
}
.overlay { backdrop-filter: blur(10px); background: rgba(15,23,42,.48); }
.site-footer {
  margin-top: 24px;
  background: linear-gradient(135deg,#0f172a,#111827 55%,#431407);
  border-top: 0;
}
.footer-inner, .footer-bottom { max-width: 1160px; }
@media (max-width: 860px) {
  .navbar { top: 8px; width: calc(100% - 16px); border-radius: 24px; flex-wrap: wrap; }
  .nav-center { order: 3; max-width: none; width: 100%; margin: 0; }
  .hero { padding-top: 70px; min-height: 760px; }
  .hero h1 { letter-spacing: -2px; }
  .hero-stats, .hero-feature-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .tab-nav-wrap { top: 104px; overflow-x: auto; }
  .tab-nav { width: max-content; min-width: 100%; }
  .fare-layout, .budget-layout { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .hero-stats, .hero-feature-grid { grid-template-columns: 1fr; }
  .hero-search-box { flex-direction: column; border-radius: 22px; }
  .hero-search-box button { width: 100%; }
  .panel-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .filter-bar { grid-template-columns: 1fr; }
  .main { padding-left: 12px; padding-right: 12px; }
}

/* ===================== OTP + SMART SEARCH UPGRADES ===================== */
.hidden { display: none !important; }
.otp-box {
  margin-top: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--input);
}
.otp-status {
  font-size: 12px;
  line-height: 1.55;
  color: var(--muted);
  text-align: left;
  margin-bottom: 10px;
}
.otp-status.success { color: #15803d; }
.otp-status.warn { color: #b45309; }
.otp-status.error { color: #b91c1c; }
.dark .otp-status.success { color: #86efac; }
.dark .otp-status.warn { color: #fbbf24; }
.dark .otp-status.error { color: #fca5a5; }
.otp-input-row { display: flex; gap: 8px; align-items: center; }
.otp-input-row .m-input { margin-bottom: 0; text-align: center; letter-spacing: 4px; font-weight: 800; }
.otp-verify-btn {
  min-width: 92px;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
}
.otp-resend {
  width: 100%;
  margin-top: 10px;
  padding: 9px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  box-shadow: none;
}
.otp-resend:disabled { opacity: .55; cursor: not-allowed; transform: none; }
.smart-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.smart-chips button {
  border: 1px solid rgba(255,255,255,.22);
  background: rgba(255,255,255,.13);
  color: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
  box-shadow: none;
  backdrop-filter: blur(12px);
}
.smart-chips button:hover { transform: translateY(-2px); background: rgba(255,255,255,.22); }
@media (max-width: 560px) {
  .otp-input-row { flex-direction: column; }
  .otp-verify-btn { width: 100%; }
}

/* ===================== FRESH APP-LIKE UI POLISH ===================== */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -2;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(255,107,53,.12), transparent 22rem),
    radial-gradient(circle at 78% 30%, rgba(37,99,235,.12), transparent 24rem),
    radial-gradient(circle at 50% 85%, rgba(20,184,166,.12), transparent 26rem);
}
.hero {
  min-height: 760px;
  display: flex;
  align-items: center;
  padding-top: 110px;
  background:
    linear-gradient(135deg, rgba(5,10,25,.97), rgba(13,23,52,.88) 52%, rgba(74,21,8,.78)),
    radial-gradient(circle at 15% 30%, rgba(255,107,53,.3), transparent 28rem),
    url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=80') center/cover;
}
.hero-inner { width: min(1180px, 100%); }
.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(330px, .72fr);
  gap: clamp(28px, 5vw, 70px);
  align-items: center;
}
.hero-copy { text-align: left; }
.hero-copy .hero-badge,
.hero-copy .hero-search,
.hero-copy .hero-stats,
.hero-copy .hero-feature-grid { margin-left: 0; margin-right: 0; }
.hero-copy .hero-actions,
.hero-copy .city-selector,
.hero-copy .smart-chips { justify-content: flex-start; }
.hero-copy .hero-sub { margin-left: 0; }
.hero-copy h1 { max-width: 760px; }
.hero-device {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
}
.phone-shell {
  position: relative;
  width: min(350px, 86vw);
  min-height: 590px;
  padding: 28px 20px 22px;
  border-radius: 44px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.96), rgba(241,245,249,.94)),
    radial-gradient(circle at 40% 0%, rgba(255,107,53,.2), transparent 12rem);
  border: 9px solid rgba(15,23,42,.9);
  box-shadow: 0 45px 110px rgba(0,0,0,.48), inset 0 0 0 1px rgba(255,255,255,.6);
  transform: rotateY(-10deg) rotateX(5deg);
  overflow: hidden;
}
.dark .phone-shell { background: linear-gradient(180deg, rgba(15,23,42,.98), rgba(30,41,59,.96)); }
.phone-notch {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 116px;
  height: 24px;
  border-radius: 0 0 18px 18px;
  background: rgba(15,23,42,.95);
}
.phone-top { margin-top: 20px; color: #0f172a; }
.dark .phone-top { color: #f8fafc; }
.phone-top span { display:block; font-size: 12px; color: var(--muted); font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
.phone-top strong { display:block; font-family:'Syne',sans-serif; font-size: 26px; letter-spacing: -1px; margin-top: 4px; }
.phone-search {
  margin: 18px 0;
  padding: 14px 16px;
  border-radius: 20px;
  background: #fff;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(15,23,42,.08);
}
.dark .phone-search { background: rgba(15,23,42,.85); color: #e2e8f0; }
.phone-card {
  padding: 18px;
  border-radius: 24px;
  color: #fff;
  background: linear-gradient(135deg, #ff6b35, #f59e0b);
  box-shadow: 0 24px 45px rgba(255,107,53,.28);
}
.phone-card small { display:block; opacity:.82; font-weight:700; margin-bottom:6px; }
.phone-card strong { display:block; font-family:'Syne',sans-serif; font-size:20px; }
.phone-card span { display:block; margin-top:8px; font-size:12px; opacity:.9; }
.phone-card-row { display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0; }
.mini-card {
  padding: 16px;
  border-radius: 22px;
  background: rgba(255,255,255,.84);
  color: #0f172a;
  box-shadow: 0 12px 28px rgba(15,23,42,.07);
}
.dark .mini-card { background: rgba(15,23,42,.72); color: #f8fafc; }
.mini-card strong { display:block; margin:8px 0 2px; font-size:13px; }
.mini-card span { color: var(--muted); font-size:12px; }
.phone-ai {
  display:flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(37,99,235,.12), rgba(20,184,166,.12));
  color: #0f172a;
}
.dark .phone-ai { color: #f8fafc; }
.ai-dot {
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 13px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  color:#fff;
  font-size: 12px;
  font-weight: 900;
}
.phone-ai p { margin:0; font-size: 13px; line-height: 1.55; font-weight: 600; }
.phone-nav { position:absolute; left:30px; right:30px; bottom:18px; display:flex; justify-content:space-around; }
.phone-nav span { width:34px; height:5px; border-radius:20px; background: rgba(15,23,42,.14); }
.dark .phone-nav span { background: rgba(255,255,255,.2); }
.floating-card {
  position: absolute;
  padding: 12px 16px;
  border-radius: 18px;
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.22);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 45px rgba(0,0,0,.22);
}
.fc-one { top: 64px; right: 6px; animation: floatUp 4.8s ease-in-out infinite; }
.fc-two { bottom: 90px; left: 0; animation: floatUp 5.4s ease-in-out infinite reverse; }
.trust-strip {
  width: min(1120px, calc(100% - 32px));
  margin: -46px auto 0;
  position: relative;
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background: rgba(255,255,255,.84);
  border: 1px solid var(--border);
  box-shadow: 0 22px 65px rgba(15,23,42,.12);
  backdrop-filter: blur(18px);
}
.dark .trust-strip { background: rgba(15,23,42,.82); }
.trust-strip div { padding: 14px 16px; border-radius: 20px; background: var(--input); }
.trust-strip strong { display:block; font-family:'Syne',sans-serif; font-size:15px; color: var(--text); }
.trust-strip span { display:block; margin-top:4px; font-size:12px; color: var(--muted); }
.pg-card, .budget-card, .fare-box, .tips-card, .ai-chat-wrap, .checklist-category, .nearby-item, .helpline-item {
  position: relative;
  overflow: hidden;
}
.pg-card::before, .budget-card::before, .fare-box::before, .tips-card::before, .ai-chat-wrap::before, .checklist-category::before {
  content:'';
  position:absolute;
  inset:0 0 auto;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #f59e0b, #14b8a6, #2563eb);
  opacity:.9;
}
@media (max-width: 980px) {
  .hero-layout { grid-template-columns: 1fr; }
  .hero-copy, .hero-copy .hero-sub { text-align: center; margin-left:auto; margin-right:auto; }
  .hero-copy .hero-badge,
  .hero-copy .hero-search,
  .hero-copy .hero-stats,
  .hero-copy .hero-feature-grid { margin-left:auto; margin-right:auto; }
  .hero-copy .hero-actions, .hero-copy .city-selector, .hero-copy .smart-chips { justify-content:center; }
  .hero-device { min-height: 420px; }
  .phone-shell { transform: none; min-height: 520px; }
  .trust-strip { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: -28px; }
}
@media (max-width: 560px) {
  .hero { padding-top: 118px; }
  .hero-device { display:none; }
  .trust-strip { grid-template-columns: 1fr; }
}

/* ===================== CLEAN V2 REDESIGN OVERRIDES ===================== */
.hero-v2 {
  min-height: 740px;
  padding: 120px 20px 120px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 8% 18%, rgba(99,102,241,.35), transparent 24rem),
    radial-gradient(circle at 88% 12%, rgba(20,184,166,.26), transparent 22rem),
    linear-gradient(135deg, #07111f 0%, #10213d 46%, #20133b 100%);
}
.hero-v2::after { display: none; }
.hero-aurora {
  position: absolute;
  border-radius: 999px;
  filter: blur(28px);
  opacity: .65;
  pointer-events: none;
}
.aurora-one { width: 380px; height: 380px; left: -80px; top: 100px; background: #ff6b35; }
.aurora-two { width: 420px; height: 420px; right: -110px; bottom: 40px; background: #2563eb; }
.hero-noise {
  position: absolute;
  inset: 0;
  opacity: .18;
  background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at center, #000, transparent 78%);
}
.hero-v2-inner {
  position: relative;
  z-index: 2;
  width: min(1180px, 100%);
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, .95fr);
  gap: clamp(28px, 6vw, 76px);
  align-items: center;
}
.hero-v2-copy { text-align: left; }
.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.14);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: .02em;
  backdrop-filter: blur(16px);
}
.hero-v2 h1 {
  margin-top: 22px;
  max-width: 780px;
  font-size: clamp(48px, 7vw, 92px);
  line-height: .93;
  letter-spacing: -4px;
  text-align: left;
}
.hero-v2 h1 em {
  display: inline-block;
  color: transparent;
  background: linear-gradient(90deg, #fef3c7 0%, #fb923c 42%, #67e8f9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  font-style: normal;
}
.hero-v2 .hero-sub {
  margin: 20px 0 0;
  max-width: 620px;
  text-align: left;
  color: rgba(226,232,240,.84);
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.7;
}
.hero-v2-search { max-width: 690px; margin: 28px 0 0; }
.hero-v2 .hero-search-box {
  border-radius: 22px;
  background: rgba(255,255,255,.98);
  border: 1px solid rgba(255,255,255,.55);
  box-shadow: 0 30px 80px rgba(0,0,0,.25);
}
.hero-v2 .smart-chips { justify-content: flex-start; }
.hero-v2 .hero-actions { justify-content: flex-start; margin: 24px 0 0; }
.city-selector-v2 { justify-content: flex-start; margin-top: 18px; }
.city-selector-v2 .city-btn {
  padding: 10px 14px;
  color: rgba(255,255,255,.88);
  background: rgba(255,255,255,.1);
}
.city-selector-v2 .city-btn.active { color: #08111f; background: #fff; }
.city-console {
  position: relative;
  padding: 16px;
  border-radius: 34px;
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 40px 110px rgba(0,0,0,.34);
  backdrop-filter: blur(24px);
}
.city-console::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,.7), rgba(255,255,255,.04), rgba(20,184,166,.6));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.console-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 16px;
  color: rgba(255,255,255,.72);
  font-size: 12px;
  font-weight: 900;
}
.console-topbar span { width: 10px; height: 10px; border-radius: 50%; background: #fb7185; }
.console-topbar span:nth-child(2) { background: #fbbf24; }
.console-topbar span:nth-child(3) { background: #34d399; }
.console-topbar strong { margin-left: auto; letter-spacing: .08em; text-transform: uppercase; }
.console-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.console-card {
  min-height: 156px;
  padding: 18px;
  border-radius: 26px;
  background: rgba(255,255,255,.92);
  color: #0f172a;
  box-shadow: 0 20px 50px rgba(0,0,0,.14);
}
.console-card-main {
  grid-column: 1 / -1;
  min-height: 200px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.95), rgba(255,247,237,.92)),
    radial-gradient(circle at 100% 0%, rgba(255,107,53,.24), transparent 14rem);
}
.console-card small {
  display: inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  background: #ffedd5;
  color: #c2410c;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .07em;
}
.console-card h3 { margin: 18px 0 8px; font-family: 'Syne', sans-serif; font-size: 30px; letter-spacing: -1px; }
.console-card p { margin: 0; color: #64748b; font-size: 13px; line-height: 1.7; }
.console-card button { margin-top: 18px; border-radius: 999px; }
.console-card span { display: block; font-size: 26px; margin-bottom: 12px; }
.console-card strong { display:block; font-family:'Syne',sans-serif; font-size: 18px; margin-bottom: 8px; }
.console-card.wide { grid-column: 1 / -1; min-height: 126px; display: grid; grid-template-columns: auto 1fr; column-gap: 14px; align-items: start; }
.console-card.wide span { grid-row: span 2; margin: 0; }
.quick-strip {
  width: min(1120px, calc(100% - 32px));
  margin: -58px auto 0;
  position: relative;
  z-index: 80;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 12px;
  border-radius: 30px;
  background: rgba(255,255,255,.9);
  border: 1px solid rgba(15,23,42,.08);
  box-shadow: 0 24px 70px rgba(15,23,42,.14);
  backdrop-filter: blur(20px);
}
.dark .quick-strip { background: rgba(15,23,42,.88); }
.quick-strip button {
  text-align: left;
  padding: 16px;
  border-radius: 22px;
  color: var(--text);
  background: var(--input);
  box-shadow: none;
}
.quick-strip button:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.quick-strip strong { display:block; font-family:'Syne',sans-serif; font-size: 18px; color: var(--text); }
.quick-strip span { display:block; margin-top: 4px; color: var(--muted); font-size: 12px; }
@media (max-width: 980px) {
  .hero-v2-inner { grid-template-columns: 1fr; }
  .hero-v2-copy, .hero-v2 h1, .hero-v2 .hero-sub { text-align: center; margin-left: auto; margin-right: auto; }
  .hero-v2 .hero-actions, .hero-v2 .smart-chips, .city-selector-v2 { justify-content: center; }
  .hero-v2-search { margin-left: auto; margin-right: auto; }
  .quick-strip { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: -38px; }
}
@media (max-width: 620px) {
  .hero-v2 { padding-top: 136px; padding-bottom: 82px; }
  .hero-v2 h1 { letter-spacing: -2px; }
  .city-console { display: none; }
  .quick-strip { grid-template-columns: 1fr; }
}

/* ===================== INTENT HUB REDESIGN ===================== */
.intent-hub {
  width: min(1160px, calc(100% - 32px));
  margin: 28px auto 0;
  padding: clamp(22px, 4vw, 36px);
  border-radius: 34px;
  background: linear-gradient(135deg, rgba(255,255,255,.92), rgba(248,250,252,.78));
  border: 1px solid var(--border);
  box-shadow: 0 24px 70px rgba(15,23,42,.1);
  backdrop-filter: blur(18px);
}
.dark .intent-hub { background: linear-gradient(135deg, rgba(15,23,42,.86), rgba(30,41,59,.66)); }
.intent-heading { max-width: 720px; margin-bottom: 22px; }
.intent-heading span {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: var(--brand);
  background: var(--brand-light);
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.intent-heading h2 { margin: 12px 0 8px; font-family: 'Syne', sans-serif; font-size: clamp(28px, 4vw, 44px); letter-spacing: -1.5px; }
.intent-heading p { color: var(--muted); line-height: 1.7; }
.intent-grid { display: grid; grid-template-columns: repeat(7, minmax(130px, 1fr)); gap: 12px; }
.intent-card {
  min-height: 168px;
  padding: 18px;
  text-align: left;
  border-radius: 26px;
  color: var(--text);
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: 0 14px 34px rgba(15,23,42,.06);
}
.intent-card:hover { transform: translateY(-6px); box-shadow: 0 24px 54px rgba(15,23,42,.12); }
.intent-card span { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 16px; background: var(--input); font-size: 21px; margin-bottom: 14px; }
.intent-card strong { display: block; font-family: 'Syne', sans-serif; font-size: 16px; color: var(--text); margin-bottom: 7px; }
.intent-card small { display: block; color: var(--muted); font-size: 12px; line-height: 1.55; }
.intent-card.danger span { background: #fee2e2; }
.intent-card.danger strong { color: #dc2626; }
.modal-note { color: var(--muted); font-size: 13px; line-height: 1.6; margin: -8px 0 16px; }
.roommate-list { margin-top: 16px; display: grid; gap: 10px; }
.roommate-item, .roommate-empty { padding: 12px 14px; border-radius: 16px; background: var(--input); border: 1px solid var(--border); }
.roommate-item strong { display: block; font-size: 14px; margin-bottom: 3px; }
.roommate-item span, .roommate-empty { color: var(--muted); font-size: 12px; line-height: 1.5; }
@media (max-width: 1180px) { .intent-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }
@media (max-width: 760px) { .intent-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
@media (max-width: 480px) { .intent-grid { grid-template-columns: 1fr; } .intent-card { min-height: auto; } }

/* ===================== FEATURE MODULES: FOOD, FITNESS, EXPENSE, MARKET, TECH ===================== */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.service-card {
  position: relative;
  overflow: hidden;
  min-height: 220px;
  padding: 20px;
  border-radius: 26px;
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: 0 14px 36px rgba(15,23,42,.07);
}
.service-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #14b8a6, #2563eb);
}
.service-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 16px; }
.service-icon { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 16px; background: var(--input); font-size: 22px; }
.service-tag { padding: 7px 10px; border-radius: 999px; background: var(--brand-light); color: var(--brand); font-size: 11px; font-weight: 900; }
.service-card h3 { font-family: 'Syne', sans-serif; font-size: 20px; margin-bottom: 8px; letter-spacing: -.4px; }
.service-card p { color: var(--muted); font-size: 13px; line-height: 1.65; margin-bottom: 18px; }
.service-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: auto; }
.service-meta strong { color: var(--brand); font-size: 16px; }
.service-meta a { color: #fff; background: linear-gradient(135deg,var(--brand),#f59e0b); border-radius: 999px; padding: 8px 12px; font-size: 12px; font-weight: 800; }
.expense-layout { display: grid; grid-template-columns: minmax(260px,.8fr) 1.2fr; gap: 16px; }
.expense-form-card, .expense-summary-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 12px 32px rgba(15,23,42,.06);
}
.expense-total { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--border); }
.expense-total span { color: var(--muted); }
.expense-total strong { color: var(--brand); font-family: 'Syne', sans-serif; font-size: 24px; }
.expense-ledger { display: grid; gap: 10px; margin-top: 14px; }
.ledger-row { display: grid; grid-template-columns: 1fr auto auto; gap: 10px; align-items: center; padding: 12px 14px; border: 1px solid var(--border); border-radius: 16px; background: var(--input); }
.ledger-row strong { display: block; font-size: 14px; }
.ledger-row span, .ledger-row small { color: var(--muted); font-size: 12px; }
.ledger-row b { color: var(--text); }
.market-form { display: grid; grid-template-columns: 1.2fr 1fr .7fr auto; gap: 10px; margin-bottom: 18px; }
.market-form .m-input { margin: 0; }
@media (max-width: 820px) {
  .expense-layout, .market-form { grid-template-columns: 1fr; }
  .ledger-row { grid-template-columns: 1fr; }
}
```

## SECTION 3 — script.js

File name: `script.js`
```

## script.js

```javascript
// =====================================================
//  SheherSaathi v4 — Complete Script
// =====================================================

let activeCity   = 'Bhopal';
let activeCat    = 'hospital';
let selRating    = 0;
let currentPG    = null;
let currentLang  = 'en';

// =====================================================
//  TRANSLATIONS
// =====================================================
const T = {
  en: {
    heroTitle: 'Move to a new city<br><em>without the confusion.</em>',
    heroSub: 'Find PGs, compare rent, estimate fares, plan budget and get safety help from one clean dashboard.',
    searchPlaceholder: 'Try: Girls PG under 7000 in Pune',
    pgHeading: city => `PGs in ${city}`,
    fareHeading: city => `${city} Fare Calculator`,
    guideHeading: city => `${city} City Guide`,
    nearbyHeading: city => `Nearby Places in ${city}`,
    langBtn: 'Switch to Hindi',
    fromLabel: 'From',
    toLabel: 'To',
    callBtn: '📞 Call',
    mapBtn: '📍 Map',
    saveBtn: '❤️',
    bestTag: 'Best',
    selectSource: 'Select source...',
    selectDest: 'Select destination...',
    noResults: 'No PGs found. Try different filters.',
    reviewPosted: 'Review posted! Thank you.',
    reviewError: 'Please write a review and select a rating.',
    saved: 'Saved to favourites ❤️',
    alreadySaved: 'Already saved 👍',
    loginSuccess: name => `Welcome, ${name}!`,
    registerSuccess: 'Account created! Please sign in.',
    profileSaved: 'Profile updated successfully!',
    pgAdded: 'Your PG has been listed successfully!',
    pgError: 'Please fill all required fields.',
    loginError: 'Please enter your name, email and password.',
    passError: 'Passwords do not match.',
    passTooShort: 'Password must be at least 6 characters.',
    invalidEmail: 'Please enter a valid email address.',
    wrongPass: 'Incorrect password. Please try again.',
    userNotFound: 'No account found. Please register first.',
  },
  hi: {
    heroTitle: 'नए शहर में शिफ्ट हों<br><em>बिना कन्फ्यूजन के।</em>',
    heroSub: 'PG खोजें, किराया तुलना करें, fare estimate करें, budget plan करें और safety help पाएं।',
    searchPlaceholder: 'Try: Pune में Girls PG under 7000',
    pgHeading: city => `${city} में PG`,
    fareHeading: city => `${city} किराया कैलकुलेटर`,
    guideHeading: city => `${city} सिटी गाइड`,
    nearbyHeading: city => `${city} के पास`,
    langBtn: 'English पर जाएं',
    fromLabel: 'कहाँ से',
    toLabel: 'कहाँ जाना है',
    callBtn: '📞 कॉल',
    mapBtn: '📍 मैप',
    saveBtn: '❤️',
    bestTag: 'बेस्ट',
    selectSource: 'कहाँ से चुनें...',
    selectDest: 'कहाँ जाना है...',
    noResults: 'कोई PG नहीं मिला। फ़िल्टर बदलें।',
    reviewPosted: 'रिव्यू पोस्ट हो गया! धन्यवाद।',
    reviewError: 'रिव्यू लिखें और स्टार चुनें।',
    saved: 'फेवरेट में सेव हो गया ❤️',
    alreadySaved: 'पहले से सेव है 👍',
    loginSuccess: name => `स्वागत है, ${name}!`,
    registerSuccess: 'अकाउंट बन गया! साइन इन करें।',
    profileSaved: 'प्रोफाइल अपडेट हो गई!',
    pgAdded: 'आपका PG लिस्ट हो गया!',
    pgError: 'सभी जरूरी फ़ील्ड भरें।',
    loginError: 'नाम, ईमेल और पासवर्ड डालें।',
    passError: 'पासवर्ड मेल नहीं खाते।',
    passTooShort: 'पासवर्ड कम से कम 6 अक्षर का हो।',
    invalidEmail: 'सही ईमेल डालें।',
    wrongPass: 'गलत पासवर्ड।',
    userNotFound: 'अकाउंट नहीं मिला। पहले रजिस्टर करें।',
  }
};

function t(key, ...args) {
  const val = T[currentLang][key];
  return typeof val === 'function' ? val(...args) : val;
}

function getListingType(pg) {
  const label = [pg.type, pg.name, pg.address].filter(Boolean).join(' ').toLowerCase();
  return label.includes('flat') || label.includes('apartment') ? 'Private Flat' : 'PG';
}

function getListingPrice(pg) {
  return parseInt(String(pg.price || '').replace(/[^0-9]/g, '')) || 0;
}

function normalizePGData() {
  if (!Array.isArray(pgData)) return;
  pgData.forEach((pg, index) => {
    pg.type = pg.type || getListingType(pg);
    pg.verified = pg.verified !== false;
    pg.image = pg.image || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2';
    pg.contact = pg.contact || '9876543210';
    pg.amenities = pg.amenities || 'WiFi, Meals, Security';
    pg.id = pg.id || `${pg.city || 'city'}-${index}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  });
}

function populatePGCityFilter() {
  const citySelect = document.getElementById('pgCity');
  if (!citySelect || !Array.isArray(pgData)) return;
  const cities = [...new Set(pgData.map(p => p.city).filter(Boolean))].sort();
  const current = citySelect.value || activeCity;
  citySelect.innerHTML = '<option value="">All Cities</option>' + cities.map(city => `<option value="${escapeHTML(city)}">${escapeHTML(city)}</option>`).join('');
  citySelect.value = cities.includes(current) ? current : activeCity;
}

// =====================================================
//  CITY DATA
// =====================================================
const cityData = {
  Bhopal: {
    fareFrom: [
      {val:'bj',label:'Bhopal Junction (Main Station)'},
      {val:'rk',label:'Rani Kamlapati Station'},
      {val:'isbt',label:'ISBT Bus Stand'},
      {val:'aprt',label:'Raja Bhoj Airport'},
    ],
    fareTo: [
      {val:'mpn',label:'MP Nagar'},{val:'nm',label:'New Market'},
      {val:'ac',label:'Arera Colony'},{val:'tt',label:'TT Nagar'},
      {val:'kol',label:'Kolar Road'},{val:'man',label:'MANIT / University'},
      {val:'aim',label:'AIIMS Bhopal'},{val:'dbc',label:'DB City Mall'},
      {val:'ham',label:'Hamidia Hospital'},{val:'ob',label:'Old Bhopal / Chowk'},
    ],
    fares: {
      bj:{mpn:{d:'6 km',t:'20 min',a:'₹80–120',c:'₹100–150',b:'₹60–90',e:'₹40–60',n:'Prepaid auto booth at main gate (right side)'},nm:{d:'3 km',t:'12 min',a:'₹50–80',c:'₹70–100',b:'₹40–70',e:'₹30–50',n:'Route passes through Old Bhopal'},ac:{d:'7 km',t:'22 min',a:'₹100–140',c:'₹120–160',b:'₹80–110',e:'N/A',n:'Quiet residential area'},tt:{d:'3 km',t:'12 min',a:'₹50–70',c:'₹60–90',b:'₹40–65',e:'₹30–50',n:'Government offices area'},kol:{d:'12 km',t:'35 min',a:'₹150–200',c:'₹180–250',b:'₹120–170',e:'N/A',n:'Far area, cab recommended'},man:{d:'5 km',t:'18 min',a:'₹80–120',c:'₹100–140',b:'₹65–95',e:'₹40–60',n:'Popular student area'},aim:{d:'9 km',t:'28 min',a:'₹120–160',c:'₹150–200',b:'₹100–140',e:'N/A',n:'Near Saket Nagar'},dbc:{d:'6 km',t:'20 min',a:'₹80–110',c:'₹100–140',b:'₹65–95',e:'N/A',n:'Near MP Nagar'},ham:{d:'1 km',t:'5 min',a:'₹30–50',c:'₹50–70',b:'₹25–40',e:'₹20–30',n:'Can walk from station'},ob:{d:'2 km',t:'8 min',a:'₹40–60',c:'₹60–90',b:'₹35–55',e:'₹25–40',n:'Expect traffic at Chowk area'}},
      rk:{mpn:{d:'3 km',t:'12 min',a:'₹50–80',c:'₹70–100',b:'₹40–70',e:'₹30–50',n:'Metro also available from Rani Kamlapati'},nm:{d:'5 km',t:'18 min',a:'₹70–100',c:'₹90–130',b:'₹55–85',e:'N/A',n:''},ac:{d:'4 km',t:'14 min',a:'₹60–90',c:'₹80–110',b:'₹50–75',e:'N/A',n:''},tt:{d:'5 km',t:'16 min',a:'₹70–100',c:'₹90–120',b:'₹55–85',e:'N/A',n:''},kol:{d:'9 km',t:'28 min',a:'₹120–160',c:'₹150–200',b:'₹100–140',e:'N/A',n:''},man:{d:'6 km',t:'20 min',a:'₹80–120',c:'₹100–140',b:'₹65–100',e:'N/A',n:''},aim:{d:'6 km',t:'20 min',a:'₹90–130',c:'₹110–160',b:'₹70–110',e:'N/A',n:''},dbc:{d:'3 km',t:'12 min',a:'₹50–80',c:'₹70–100',b:'₹40–70',e:'₹30–50',n:''},ham:{d:'7 km',t:'22 min',a:'₹90–130',c:'₹110–150',b:'₹75–110',e:'N/A',n:''},ob:{d:'6 km',t:'20 min',a:'₹80–120',c:'₹100–140',b:'₹65–100',e:'N/A',n:''}},
      isbt:{mpn:{d:'5 km',t:'18 min',a:'₹70–100',c:'₹90–130',b:'₹55–85',e:'₹40–60',n:'ISBT Nadra Bus Stand'},nm:{d:'4 km',t:'14 min',a:'₹60–90',c:'₹80–110',b:'₹50–75',e:'₹35–55',n:''},ac:{d:'6 km',t:'20 min',a:'₹80–120',c:'₹100–140',b:'₹65–100',e:'N/A',n:''},tt:{d:'2 km',t:'8 min',a:'₹40–60',c:'₹60–80',b:'₹30–50',e:'₹25–40',n:''},kol:{d:'11 km',t:'32 min',a:'₹140–190',c:'₹170–230',b:'₹115–160',e:'N/A',n:''},man:{d:'4 km',t:'14 min',a:'₹60–90',c:'₹80–110',b:'₹50–75',e:'N/A',n:''},aim:{d:'8 km',t:'25 min',a:'₹110–150',c:'₹140–190',b:'₹90–130',e:'N/A',n:''},dbc:{d:'5 km',t:'18 min',a:'₹70–100',c:'₹90–130',b:'₹55–85',e:'N/A',n:''},ham:{d:'3 km',t:'12 min',a:'₹50–70',c:'₹70–90',b:'₹40–65',e:'₹30–50',n:''},ob:{d:'3 km',t:'12 min',a:'₹50–70',c:'₹70–90',b:'₹40–65',e:'₹30–50',n:''}},
      aprt:{mpn:{d:'11 km',t:'32 min',a:'₹180–240',c:'₹220–300',b:'N/A',e:'N/A',n:'Ola/Uber prepaid recommended at airport'},nm:{d:'14 km',t:'40 min',a:'₹200–280',c:'₹260–350',b:'N/A',e:'N/A',n:''},ac:{d:'12 km',t:'35 min',a:'₹180–250',c:'₹230–310',b:'N/A',e:'N/A',n:''},tt:{d:'13 km',t:'38 min',a:'₹190–260',c:'₹240–320',b:'N/A',e:'N/A',n:''},kol:{d:'8 km',t:'25 min',a:'₹130–180',c:'₹160–220',b:'N/A',e:'N/A',n:''},man:{d:'10 km',t:'30 min',a:'₹160–220',c:'₹200–270',b:'N/A',e:'N/A',n:''},aim:{d:'7 km',t:'22 min',a:'₹110–160',c:'₹150–200',b:'N/A',e:'N/A',n:''},dbc:{d:'11 km',t:'32 min',a:'₹170–230',c:'₹210–280',b:'N/A',e:'N/A',n:''},ham:{d:'16 km',t:'45 min',a:'₹230–300',c:'₹280–380',b:'N/A',e:'N/A',n:''},ob:{d:'15 km',t:'42 min',a:'₹220–290',c:'₹270–360',b:'N/A',e:'N/A',n:''}},
    },
    guide:[
      {title:'Exit the Platform',desc:'Follow exit boards. Bhopal Junction has Exit Gate 1 (Main) and Gate 2. Rani Kamlapati also has Metro connectivity.',tip:'Fix coolie rate before handing bags'},
      {title:'Prepaid Auto Counter',desc:'A prepaid auto booth is available outside the main gate (right side). Fixed rates — no bargaining needed. Safest option for first-timers.',tip:'Look for the green booth at the main gate'},
      {title:'Get a SIM Card',desc:'Airtel and Jio shops are available inside and outside the station. Carry your Aadhaar card for new SIM activation. Jio and Airtel both have strong networks in Bhopal.',tip:''},
      {title:'ATM & Cash',desc:'SBI, HDFC, and PNB ATMs are available inside and outside the station. Use the indoor ATM at night — safer option.',tip:''},
      {title:'Food & Water',desc:'IRCTC stalls and private food stalls are available. Bhopal is famous for Poha-Jalebi — try it right outside the station! Always buy sealed water bottles.',tip:'Must try: Poha-Jalebi — Bhopal\'s signature breakfast!'},
      {title:'If You Need Help',desc:'RPF (Railway Police Force) office is inside the station. Approach them for any issue. Railway helpline: 139. City police: 100.',tip:'Avoid staying alone at the station at night'},
    ],
    helplines:[
      {icon:'🚂',name:'Railway Helpline',num:'139',desc:'Train info, emergency, lost & found'},
      {icon:'🚔',name:'Bhopal City Police',num:'0755-2443573',desc:'Local police helpline'},
      {icon:'🏥',name:'Hamidia Hospital',num:'0755-2540222',desc:'Govt hospital, 24x7 emergency'},
      {icon:'👩',name:'Women Helpline',num:'1091',desc:'24x7 Toll Free'},
      {icon:'🧒',name:'Child Helpline',num:'1098',desc:'Toll Free, 24x7'},
      {icon:'🗺️',name:'MP Tourism Helpline',num:'1800-233-3232',desc:'Toll Free tourist assistance'},
    ],
    nearby:{
      hospital:[{name:'Hamidia Hospital',dist:'1.5 km',desc:'Largest govt hospital — 24x7 emergency'},{name:'AIIMS Bhopal',dist:'9 km',desc:'Premier govt hospital, Saket Nagar'},{name:'Bhopal Memorial Hospital',dist:'6 km',desc:'Bhopal Gas Tragedy hospital'},{name:'Bansal Hospital',dist:'7 km',desc:'Top private hospital, MP Nagar'}],
      police:[{name:'Bhopal Junction GRP',dist:'At Station',desc:'Railway police — inside premises'},{name:'TT Nagar Police Station',dist:'3 km',desc:'Near government offices'},{name:'MP Nagar Police Station',dist:'7 km',desc:'Commercial zone police'},{name:'Kotwali Police Station',dist:'2 km',desc:'Old Bhopal area'}],
      atm:[{name:'SBI ATM',dist:'Inside Station',desc:'24x7, reliable'},{name:'HDFC ATM — New Market',dist:'3 km',desc:'Near shopping area'},{name:'PNB ATM — TT Nagar',dist:'3.5 km',desc:'Near government offices'},{name:'ICICI ATM — MP Nagar',dist:'7 km',desc:'Commercial zone'}],
      food:[{name:'Chatori Gali — New Market',dist:'3 km',desc:'Famous street food — Poha, Jalebi, Bhutte ka Kees'},{name:'DB Mall Food Court',dist:'6 km',desc:'All cuisines, air-conditioned'},{name:'Manohar Dairy',dist:'2 km',desc:'Famous sweets and snacks'},{name:'Under the Mango Tree',dist:'8 km',desc:'Popular rooftop cafe, MP Nagar'}],
      transport:[{name:'Bhopal Junction',dist:'0 km',desc:'Main station — trains to all cities'},{name:'ISBT Bus Stand',dist:'3 km',desc:'Buses — MP, UP, Rajasthan'},{name:'Rani Kamlapati Station',dist:'5 km',desc:'Modern station with Metro'},{name:'Raja Bhoj Airport',dist:'12 km',desc:'IndiGo, Air India, SpiceJet'}],
    },
  },
  Delhi: {
    fareFrom:[{val:'ndls',label:'New Delhi Railway Station'},{val:'nizm',label:'Nizamuddin Station'},{val:'igt',label:'IGI Airport (T3)'},{val:'isbt',label:'Kashmere Gate ISBT'}],
    fareTo:[{val:'cp',label:'Connaught Place'},{val:'krol',label:'Karol Bagh'},{val:'lajp',label:'Lajpat Nagar'},{val:'dwrk',label:'Dwarka'},{val:'noid',label:'Noida Sector 18'},{val:'grgn',label:'Gurugram (Gurgaon)'}],
    fares:{
      ndls:{cp:{d:'3 km',t:'15 min',a:'₹60–100',c:'₹80–120',b:'₹50–80',e:'₹30–50',n:'Take Metro — Yellow Line to Rajiv Chowk'},krol:{d:'2 km',t:'10 min',a:'₹50–80',c:'₹70–100',b:'₹40–70',e:'₹30–50',n:''},lajp:{d:'8 km',t:'25 min',a:'₹120–160',c:'₹140–190',b:'₹90–130',e:'N/A',n:''},dwrk:{d:'18 km',t:'45 min',a:'₹250–350',c:'₹300–420',b:'N/A',e:'N/A',n:'Metro preferred — Blue Line'},noid:{d:'22 km',t:'55 min',a:'₹300–400',c:'₹350–480',b:'N/A',e:'N/A',n:'Take Metro — Yellow + Blue line'},grgn:{d:'30 km',t:'70 min',a:'₹400–550',c:'₹450–650',b:'N/A',e:'N/A',n:'Cab recommended'}},
      nizm:{cp:{d:'6 km',t:'20 min',a:'₹100–140',c:'₹120–160',b:'₹80–120',e:'N/A',n:''},krol:{d:'8 km',t:'25 min',a:'₹120–160',c:'₹150–200',b:'₹100–140',e:'N/A',n:''},lajp:{d:'4 km',t:'15 min',a:'₹70–100',c:'₹90–130',b:'₹55–85',e:'₹35–55',n:''},dwrk:{d:'20 km',t:'50 min',a:'₹280–380',c:'₹330–450',b:'N/A',e:'N/A',n:''},noid:{d:'18 km',t:'45 min',a:'₹250–340',c:'₹300–400',b:'N/A',e:'N/A',n:''},grgn:{d:'28 km',t:'65 min',a:'₹380–520',c:'₹430–600',b:'N/A',e:'N/A',n:''}},
      igt:{cp:{d:'16 km',t:'40 min',a:'₹350–480',c:'₹400–550',b:'N/A',e:'N/A',n:'Airport Express Metro is most convenient'},krol:{d:'18 km',t:'45 min',a:'₹380–520',c:'₹440–600',b:'N/A',e:'N/A',n:''},lajp:{d:'14 km',t:'35 min',a:'₹300–420',c:'₹360–490',b:'N/A',e:'N/A',n:''},dwrk:{d:'8 km',t:'22 min',a:'₹160–220',c:'₹200–280',b:'N/A',e:'N/A',n:''},noid:{d:'38 km',t:'80 min',a:'₹500–700',c:'₹600–850',b:'N/A',e:'N/A',n:''},grgn:{d:'14 km',t:'35 min',a:'₹300–420',c:'₹360–490',b:'N/A',e:'N/A',n:''}},
      isbt:{cp:{d:'5 km',t:'18 min',a:'₹80–120',c:'₹100–140',b:'₹65–95',e:'₹40–60',n:'Metro: Yellow Line from Kashmere Gate'},krol:{d:'5 km',t:'16 min',a:'₹80–120',c:'₹100–140',b:'₹65–95',e:'₹40–60',n:''},lajp:{d:'11 km',t:'30 min',a:'₹160–220',c:'₹190–260',b:'N/A',e:'N/A',n:''},dwrk:{d:'23 km',t:'55 min',a:'₹320–440',c:'₹380–520',b:'N/A',e:'N/A',n:''},noid:{d:'25 km',t:'60 min',a:'₹350–480',c:'₹410–560',b:'N/A',e:'N/A',n:''},grgn:{d:'33 km',t:'75 min',a:'₹450–620',c:'₹520–720',b:'N/A',e:'N/A',n:''}},
    },
    guide:[
      {title:'Exit New Delhi Station',desc:'There are 3 exits — Paharganj side, Ajmeri Gate, and Sadar Bazaar. Paharganj side is best for budget hotels.',tip:'CSMT and Hazrat Nizamuddin are different stations — don\'t get confused'},
      {title:'Take the Metro',desc:'Delhi Metro is India\'s best public transport. Metro entry is right at the station. Buy a single journey token or Day Pass. Airport Express is also available.',tip:'Avoid rush hours: 9–11am and 6–9pm'},
      {title:'Auto / Cab',desc:'Delhi autos run on meter officially. Ola/Uber are very reliable in Delhi. Prepaid taxi booth is available outside New Delhi Station.',tip:'Use app cabs for transparent pricing'},
      {title:'Cash & SIM',desc:'ATMs are available inside the station. Airtel/Jio stores are nearby. Carry your Aadhaar card for SIM activation.',tip:''},
      {title:'Find Accommodation',desc:'Paharganj has budget hotels (₹500–1500/night). Karol Bagh has mid-range options. Use SheherSaathi for PG listings.',tip:'Be careful in Paharganj — it\'s a busy tourist area'},
      {title:'In an Emergency',desc:'RPF is available inside the station. Delhi Police: 100. Women helpline: 1091.',tip:'Avoid travelling alone at night — use cabs'},
    ],
    helplines:[{icon:'🚂',name:'Railway Helpline',num:'139',desc:'24x7'},{icon:'🚔',name:'Delhi Police',num:'011-23490000',desc:'City helpline'},{icon:'🏥',name:'AIIMS Delhi',num:'011-26588500',desc:'Top govt hospital'},{icon:'👩',name:'Women Helpline',num:'1091',desc:'Toll Free 24x7'},{icon:'🚇',name:'Delhi Metro',num:'155370',desc:'Metro info helpline'}],
    nearby:{
      hospital:[{name:'AIIMS Delhi',dist:'8 km from NDLS',desc:'Top government hospital'},{name:'RML Hospital',dist:'4 km',desc:'Govt hospital near CP'},{name:'Safdarjung Hospital',dist:'7 km',desc:'Large govt hospital'},{name:'Apollo Hospital',dist:'10 km',desc:'Top private hospital'}],
      police:[{name:'NDLS Railway GRP',dist:'At Station',desc:'Railway police inside NDLS'},{name:'Connaught Place PS',dist:'4 km',desc:'Central Delhi'},{name:'Paharganj PS',dist:'1 km',desc:'Near budget hotel area'}],
      atm:[{name:'SBI ATM — NDLS',dist:'Inside',desc:'24x7'},{name:'HDFC — Connaught Place',dist:'4 km',desc:'Multiple ATMs'},{name:'PNB — Paharganj',dist:'1 km',desc:'Near hotels'}],
      food:[{name:'Paranthe Wali Gali',dist:'2 km',desc:'Famous Old Delhi street food'},{name:"Karim's — Jama Masjid",dist:'5 km',desc:'Iconic Mughlai restaurant'},{name:'CP Food Street',dist:'4 km',desc:'All cuisines available'}],
      transport:[{name:'New Delhi Metro',dist:'At NDLS',desc:'Yellow Line — Airport Express'},{name:'IGI Airport',dist:'16 km',desc:'All major airlines'},{name:'Kashmere Gate ISBT',dist:'5 km',desc:'Buses to all states'}],
    },
  },
  Mumbai:{
    fareFrom:[{val:'cst',label:'CSMT (Chhatrapati Shivaji)'},{val:'lr',label:'LTT (Lokmanya Tilak Terminus)'},{val:'bdr',label:'Bandra Terminus'},{val:'csia',label:'Mumbai Airport (CSIA)'}],
    fareTo:[{val:'ddr',label:'Dadar'},{val:'andr',label:'Andheri'},{val:'bonn',label:'Borivali'},{val:'thne',label:'Thane'},{val:'bkc',label:'BKC / Bandra'},{val:'navi',label:'Navi Mumbai'}],
    fares:{
      cst:{ddr:{d:'5 km',t:'25 min',a:'₹80–120',c:'₹100–150',b:'₹65–95',e:'N/A',n:'Local train is fastest and cheapest in Mumbai'},andr:{d:'18 km',t:'60 min',a:'₹200–280',c:'₹250–350',b:'N/A',e:'N/A',n:'Western local train is much faster'},bonn:{d:'35 km',t:'90 min',a:'₹400–550',c:'₹500–700',b:'N/A',e:'N/A',n:'Local train strongly recommended'},thne:{d:'34 km',t:'85 min',a:'₹380–520',c:'₹450–650',b:'N/A',e:'N/A',n:'Central line local train is best'},bkc:{d:'12 km',t:'40 min',a:'₹150–200',c:'₹180–250',b:'₹120–170',e:'N/A',n:''},navi:{d:'25 km',t:'65 min',a:'₹300–420',c:'₹360–500',b:'N/A',e:'N/A',n:'Harbour line local available'}},
      lr:{ddr:{d:'8 km',t:'30 min',a:'₹120–160',c:'₹150–210',b:'₹95–135',e:'N/A',n:''},andr:{d:'12 km',t:'40 min',a:'₹150–200',c:'₹190–260',b:'₹120–170',e:'N/A',n:''},bonn:{d:'28 km',t:'75 min',a:'₹320–440',c:'₹400–560',b:'N/A',e:'N/A',n:''},thne:{d:'20 km',t:'55 min',a:'₹240–330',c:'₹290–400',b:'N/A',e:'N/A',n:''},bkc:{d:'5 km',t:'20 min',a:'₹80–120',c:'₹100–150',b:'₹65–95',e:'N/A',n:''},navi:{d:'18 km',t:'50 min',a:'₹220–300',c:'₹270–380',b:'N/A',e:'N/A',n:''}},
      bdr:{ddr:{d:'7 km',t:'25 min',a:'₹110–150',c:'₹140–190',b:'₹90–130',e:'N/A',n:''},andr:{d:'8 km',t:'25 min',a:'₹120–160',c:'₹150–200',b:'₹95–135',e:'N/A',n:''},bonn:{d:'22 km',t:'60 min',a:'₹270–370',c:'₹330–460',b:'N/A',e:'N/A',n:''},thne:{d:'25 km',t:'65 min',a:'₹300–410',c:'₹360–500',b:'N/A',e:'N/A',n:''},bkc:{d:'2 km',t:'10 min',a:'₹50–80',c:'₹70–100',b:'₹40–65',e:'N/A',n:'BKC is very close to Bandra'},navi:{d:'25 km',t:'65 min',a:'₹300–420',c:'₹360–500',b:'N/A',e:'N/A',n:''}},
      csia:{ddr:{d:'12 km',t:'35 min',a:'₹200–280',c:'₹250–340',b:'N/A',e:'N/A',n:'Book Ola/Uber prepaid at airport'},andr:{d:'4 km',t:'15 min',a:'₹80–120',c:'₹100–150',b:'₹65–95',e:'N/A',n:'Airport is very close to Andheri'},bonn:{d:'20 km',t:'55 min',a:'₹260–360',c:'₹320–440',b:'N/A',e:'N/A',n:''},thne:{d:'22 km',t:'60 min',a:'₹280–380',c:'₹340–470',b:'N/A',e:'N/A',n:''},bkc:{d:'10 km',t:'30 min',a:'₹160–220',c:'₹200–280',b:'N/A',e:'N/A',n:''},navi:{d:'30 km',t:'75 min',a:'₹380–520',c:'₹460–640',b:'N/A',e:'N/A',n:''}},
    },
    guide:[
      {title:'CSMT or LTT?',desc:'CSMT (VT) is in South Mumbai. LTT in Kurla is for long-distance trains. Both have prepaid taxi booths and auto stands.',tip:'Black-yellow taxis and autos are available outside CSMT'},
      {title:'Mumbai Local Train',desc:'The lifeline of Mumbai! Cheap and fast. Western, Central, Harbour lines cover entire Mumbai. Travel anywhere for ₹5–15.',tip:'Rush hours (8–11am, 6–9pm) are extremely crowded'},
      {title:'Auto & Taxi',desc:'Mumbai autos and black-yellow taxis run on meter officially. Ola/Uber are very popular. AC cabs cost slightly more.',tip:'Auto meter uses revised rates — check the fare card'},
      {title:'Find Accommodation',desc:'Dadar, Andheri, and Thane are best for budget stays. Near CST is expensive. Use SheherSaathi for PG listings.',tip:''},
      {title:'Must Try Food',desc:'Vada Pav is Mumbai\'s national food — ₹15–20 everywhere. Also try Pav Bhaji and Misal Pav. All very affordable.',tip:'Must eat: Vada Pav!'},
      {title:'In an Emergency',desc:'Mumbai Police: 100. GRP is available at the station. Women helpline: 1091.',tip:''},
    ],
    helplines:[{icon:'🚂',name:'Railway Helpline',num:'139',desc:'24x7'},{icon:'🚔',name:'Mumbai Police',num:'022-22620111',desc:'City police'},{icon:'🏥',name:'KEM Hospital',num:'022-24107000',desc:'Main govt hospital'},{icon:'👩',name:'Women Helpline',num:'1091',desc:'Toll Free 24x7'},{icon:'🚦',name:'Traffic Helpline',num:'022-24934400',desc:'Traffic issues'}],
    nearby:{
      hospital:[{name:'KEM Hospital',dist:'Near Parel',desc:'Top government hospital Mumbai'},{name:'Tata Memorial',dist:'Parel',desc:'World class cancer hospital'},{name:'Hinduja Hospital',dist:'Mahim',desc:'Top private hospital'}],
      police:[{name:'CSMT GRP',dist:'At Station',desc:'Railway police'},{name:'Azad Maidan PS',dist:'2 km',desc:'South Mumbai'},{name:'Dadar PS',dist:'5 km',desc:'Central area'}],
      atm:[{name:'SBI — CSMT',dist:'Inside',desc:'24x7'},{name:'HDFC — Dadar',dist:'5 km',desc:''},{name:'ICICI — Andheri',dist:'18 km',desc:''}],
      food:[{name:'Juhu Beach Food Stalls',dist:'20 km',desc:'Famous Mumbai street food hub'},{name:'Mohammed Ali Road',dist:'3 km',desc:'Biryani and Iftar food street'},{name:'Chowpatty Beach',dist:'8 km',desc:'Bhel puri, Pav Bhaji'}],
      transport:[{name:'CSMT',dist:'0 km',desc:'Main railway station'},{name:'Mumbai Airport',dist:'25 km from CSMT',desc:'International + Domestic'},{name:'Dadar Bus Depot',dist:'5 km',desc:'State buses'}],
    },
  },
  Pune:{
    fareFrom:[{val:'pnst',label:'Pune Railway Station'},{val:'shiv',label:'Shivajinagar Station'},{val:'pnap',label:'Pune Airport'},{val:'swrg',label:'Swargate Bus Stand'}],
    fareTo:[{val:'korc',label:'Koregaon Park'},{val:'bner',label:'Baner / Balewadi'},{val:'hnjw',label:'Hinjawadi (IT Hub)'},{val:'koth',label:'Kothrud'},{val:'vman',label:'Viman Nagar'},{val:'pcmc',label:'Pimpri-Chinchwad'}],
    fares:{
      pnst:{korc:{d:'4 km',t:'15 min',a:'₹60–90',c:'₹80–110',b:'₹50–75',e:'₹35–55',n:'Koregaon Park has heavy traffic'},bner:{d:'15 km',t:'40 min',a:'₹180–240',c:'₹220–300',b:'₹150–200',e:'N/A',n:''},hnjw:{d:'22 km',t:'55 min',a:'₹280–380',c:'₹340–460',b:'N/A',e:'N/A',n:'IT hub — extra time during morning rush'},koth:{d:'8 km',t:'25 min',a:'₹110–150',c:'₹140–190',b:'₹90–130',e:'N/A',n:''},vman:{d:'8 km',t:'25 min',a:'₹110–150',c:'₹140–190',b:'₹90–130',e:'N/A',n:'Near the airport'},pcmc:{d:'18 km',t:'45 min',a:'₹220–300',c:'₹270–370',b:'N/A',e:'N/A',n:''}},
      shiv:{korc:{d:'3 km',t:'12 min',a:'₹50–80',c:'₹70–100',b:'₹40–70',e:'₹30–50',n:''},bner:{d:'12 km',t:'35 min',a:'₹150–200',c:'₹190–260',b:'₹120–170',e:'N/A',n:''},hnjw:{d:'19 km',t:'50 min',a:'₹240–330',c:'₹300–410',b:'N/A',e:'N/A',n:''},koth:{d:'7 km',t:'22 min',a:'₹100–140',c:'₹130–170',b:'₹80–120',e:'N/A',n:''},vman:{d:'10 km',t:'28 min',a:'₹130–175',c:'₹160–220',b:'₹105–145',e:'N/A',n:''},pcmc:{d:'17 km',t:'42 min',a:'₹210–285',c:'₹260–355',b:'N/A',e:'N/A',n:''}},
      pnap:{korc:{d:'7 km',t:'22 min',a:'₹100–140',c:'₹130–175',b:'₹80–120',e:'N/A',n:'Book Ola/Uber at airport'},bner:{d:'12 km',t:'35 min',a:'₹150–200',c:'₹190–260',b:'N/A',e:'N/A',n:''},hnjw:{d:'18 km',t:'45 min',a:'₹230–315',c:'₹285–390',b:'N/A',e:'N/A',n:''},koth:{d:'12 km',t:'35 min',a:'₹150–200',c:'₹190–260',b:'N/A',e:'N/A',n:''},vman:{d:'3 km',t:'12 min',a:'₹50–80',c:'₹70–100',b:'₹40–65',e:'N/A',n:'Viman Nagar is very close to airport'},pcmc:{d:'25 km',t:'60 min',a:'₹310–425',c:'₹380–520',b:'N/A',e:'N/A',n:''}},
      swrg:{korc:{d:'6 km',t:'20 min',a:'₹90–130',c:'₹110–155',b:'₹70–105',e:'₹40–60',n:''},bner:{d:'17 km',t:'45 min',a:'₹210–285',c:'₹260–355',b:'N/A',e:'N/A',n:''},hnjw:{d:'24 km',t:'60 min',a:'₹300–410',c:'₹370–510',b:'N/A',e:'N/A',n:''},koth:{d:'5 km',t:'18 min',a:'₹75–110',c:'₹95–135',b:'₹60–90',e:'₹35–55',n:''},vman:{d:'10 km',t:'28 min',a:'₹130–175',c:'₹160–220',b:'N/A',e:'N/A',n:''},pcmc:{d:'18 km',t:'45 min',a:'₹225–305',c:'₹280–385',b:'N/A',e:'N/A',n:''}},
    },
    guide:[
      {title:'Exit Pune Station',desc:'Main exit is on the Shivajinagar side. Auto and cab stands are clearly marked outside. PMPML city bus is also available.',tip:'Autos outside Pune station may quote high — always bargain'},
      {title:'Auto / Cab',desc:'Pune autos officially run on meter. Ola/Uber are very active. Bike taxi is popular especially for IT areas like Hinjawadi.',tip:'For Hinjawadi, use Ola/Uber — autos often refuse to go there'},
      {title:'PMPML City Bus',desc:'Pune\'s affordable transport — ₹8–30 anywhere. Swargate and Shivajinagar are main bus hubs.',tip:''},
      {title:'Find Accommodation',desc:'Shivajinagar and Deccan area are best for budget stays. For IT jobs, find PG near Baner or Hinjawadi. Koregaon Park is premium.',tip:''},
      {title:'Must Try Food',desc:'Misal Pav and Vada Pav are very famous in Pune. FC Road and JM Road have lots of food options.',tip:'Must eat: Misal Pav — Punekars\' favourite breakfast!'},
      {title:'In an Emergency',desc:'Pune Railway Police is inside the station. City police: 100.',tip:''},
    ],
    helplines:[{icon:'🚂',name:'Railway Helpline',num:'139',desc:'24x7'},{icon:'🚔',name:'Pune City Police',num:'020-26122880',desc:'City helpline'},{icon:'🏥',name:'Sassoon Hospital',num:'020-26128000',desc:'Main govt hospital'},{icon:'👩',name:'Women Helpline',num:'1091',desc:'Toll Free 24x7'},{icon:'🚌',name:'PMPML Bus',num:'020-24501500',desc:'City bus info'}],
    nearby:{
      hospital:[{name:'Sassoon Hospital',dist:'Near Pune Station',desc:'Main government hospital'},{name:'Ruby Hall Clinic',dist:'Sangamvadi',desc:'Top private hospital'},{name:'KEM Hospital Pune',dist:'Rasta Peth',desc:'Government hospital'}],
      police:[{name:'Pune Railway GRP',dist:'At Station',desc:'Railway police'},{name:'Shivajinagar PS',dist:'2 km',desc:'Main area'},{name:'Deccan PS',dist:'4 km',desc:'Near FC Road'}],
      atm:[{name:'SBI — Pune Station',dist:'Inside',desc:'24x7'},{name:'HDFC — FC Road',dist:'4 km',desc:''},{name:'Axis — JM Road',dist:'4 km',desc:''}],
      food:[{name:'FC Road Food Stalls',dist:'4 km',desc:'Student area — affordable and tasty'},{name:'JM Road Restaurants',dist:'4 km',desc:'All cuisines'},{name:'Deccan Khau Galli',dist:'5 km',desc:'Famous street food lane'}],
      transport:[{name:'Pune Station',dist:'0 km',desc:'Main railway station'},{name:'Pune Airport',dist:'8 km',desc:'Domestic flights'},{name:'Swargate Bus Stand',dist:'6 km',desc:'State buses'}],
    },
  },
  Patna:{
    fareFrom:[{val:'pnbe',label:'Patna Junction'},{val:'rjpb',label:'Rajendra Nagar Station'},{val:'pnap',label:'Patna Airport'},{val:'pnbs',label:'Mithapur Bus Stand'}],
    fareTo:[{val:'borc',label:'Boring Road'},{val:'bori',label:'Bailey Road'},{val:'kank',label:'Kankarbagh'},{val:'rjnd',label:'Rajendra Nagar'},{val:'dnak',label:'Danapur'},{val:'frzr',label:'Frazer Road'}],
    fares:{
      pnbe:{borc:{d:'5 km',t:'18 min',a:'₹60–90',c:'₹80–120',b:'₹50–75',e:'₹35–55',n:'Autos in Patna mostly run on bargaining'},bori:{d:'6 km',t:'20 min',a:'₹70–100',c:'₹90–130',b:'₹55–85',e:'₹40–60',n:''},kank:{d:'7 km',t:'22 min',a:'₹80–120',c:'₹100–140',b:'₹65–95',e:'₹40–60',n:'Kankarbagh is a busy area'},rjnd:{d:'8 km',t:'25 min',a:'₹90–130',c:'₹115–155',b:'₹70–105',e:'₹45–65',n:''},dnak:{d:'15 km',t:'40 min',a:'₹170–230',c:'₹210–285',b:'N/A',e:'N/A',n:'Via highway'},frzr:{d:'2 km',t:'8 min',a:'₹40–60',c:'₹55–80',b:'₹30–50',e:'₹25–40',n:'Very close to station'}},
      rjpb:{borc:{d:'3 km',t:'12 min',a:'₹50–75',c:'₹65–95',b:'₹40–65',e:'₹30–50',n:''},bori:{d:'3 km',t:'12 min',a:'₹50–75',c:'₹65–95',b:'₹40–65',e:'₹30–50',n:''},kank:{d:'5 km',t:'18 min',a:'₹65–95',c:'₹85–120',b:'₹50–80',e:'₹35–55',n:''},rjnd:{d:'2 km',t:'8 min',a:'₹40–60',c:'₹55–80',b:'₹30–50',e:'₹25–40',n:''},dnak:{d:'12 km',t:'35 min',a:'₹140–190',c:'₹175–240',b:'N/A',e:'N/A',n:''},frzr:{d:'6 km',t:'20 min',a:'₹70–105',c:'₹90–130',b:'₹55–85',e:'₹40–60',n:''}},
      pnap:{borc:{d:'8 km',t:'25 min',a:'₹100–140',c:'₹130–175',b:'₹80–115',e:'N/A',n:'Book Ola/Uber at airport'},bori:{d:'7 km',t:'22 min',a:'₹90–130',c:'₹115–155',b:'₹70–105',e:'N/A',n:''},kank:{d:'10 km',t:'30 min',a:'₹120–165',c:'₹150–205',b:'₹95–135',e:'N/A',n:''},rjnd:{d:'9 km',t:'27 min',a:'₹110–150',c:'₹140–190',b:'₹85–125',e:'N/A',n:''},dnak:{d:'20 km',t:'50 min',a:'₹240–330',c:'₹300–410',b:'N/A',e:'N/A',n:''},frzr:{d:'8 km',t:'25 min',a:'₹100–140',c:'₹130–175',b:'N/A',e:'N/A',n:''}},
      pnbs:{borc:{d:'3 km',t:'12 min',a:'₹50–75',c:'₹65–95',b:'₹40–65',e:'₹30–50',n:''},bori:{d:'4 km',t:'15 min',a:'₹55–80',c:'₹72–105',b:'₹45–70',e:'₹30–50',n:''},kank:{d:'5 km',t:'18 min',a:'₹65–95',c:'₹85–120',b:'₹50–80',e:'₹35–55',n:''},rjnd:{d:'6 km',t:'20 min',a:'₹75–110',c:'₹95–135',b:'₹60–90',e:'₹38–58',n:''},dnak:{d:'13 km',t:'38 min',a:'₹155–210',c:'₹195–265',b:'N/A',e:'N/A',n:''},frzr:{d:'3 km',t:'12 min',a:'₹50–75',c:'₹65–95',b:'₹40–65',e:'₹30–50',n:''}},
    },
    guide:[
      {title:'Exit Patna Junction',desc:'Auto stand and e-rickshaw stand are clearly available outside the main exit. RPF police post is inside the station.',tip:'Beware of touts outside — negotiate auto fare yourself'},
      {title:'Auto & E-Rickshaw',desc:'Patna autos do not run on meter — bargaining is necessary. E-rickshaw is cheap for local areas. Ola/Uber is available.',tip:'Confirm the destination first — some drivers don\'t know far areas'},
      {title:'Cash & SIM',desc:'Airtel/Jio stores are near the station. SBI ATM is available inside the station. UPI is widely accepted everywhere.',tip:''},
      {title:'Find Accommodation',desc:'Budget stays available in Fraser Road and Kankarbagh area. For students, PGs near Rajendra Nagar and Bailey Road are great.',tip:''},
      {title:'Must Try Food',desc:'Litti-Chokha is Patna\'s most famous dish — must try! Also try Satu Paratha. Good dhabas are available right outside the station.',tip:'Must eat: Litti-Chokha — Bihar\'s signature dish!'},
      {title:'In an Emergency',desc:'Patna Junction GRP is available at the station. City police: 100. PMCH is the main government hospital.',tip:''},
    ],
    helplines:[{icon:'🚂',name:'Railway Helpline',num:'139',desc:'24x7'},{icon:'🚔',name:'Patna Police',num:'0612-2201977',desc:'City helpline'},{icon:'🏥',name:'PMCH Hospital',num:'0612-2300015',desc:'Patna Medical College'},{icon:'👩',name:'Women Helpline',num:'1091',desc:'Toll Free 24x7'},{icon:'🚑',name:'Bihar Ambulance',num:'0612-2216000',desc:'State emergency'}],
    nearby:{
      hospital:[{name:'PMCH Patna',dist:'Near Station',desc:'Patna Medical College — main govt hospital'},{name:'IGIMS',dist:'7 km',desc:'Indira Gandhi Institute of Medical Sciences'},{name:'Paras HMRI',dist:'6 km',desc:'Top private hospital Patna'}],
      police:[{name:'Patna Junction GRP',dist:'At Station',desc:'Railway police'},{name:'Kotwali PS',dist:'2 km',desc:'Old Patna area'},{name:'Gardanibagh PS',dist:'4 km',desc:''}],
      atm:[{name:'SBI — Patna Junction',dist:'Inside',desc:'24x7'},{name:'HDFC — Fraser Road',dist:'3 km',desc:''},{name:'PNB — Kankarbagh',dist:'7 km',desc:''}],
      food:[{name:'Ashiana Market Food Stalls',dist:'6 km',desc:'Famous Litti-Chokha stalls'},{name:'Fraser Road Restaurants',dist:'3 km',desc:'All cuisines available'},{name:'Sone ki Nagri Sweets',dist:'2 km',desc:'Famous sweet shop'}],
      transport:[{name:'Patna Junction',dist:'0 km',desc:'Main railway station'},{name:'Patna Airport',dist:'8 km',desc:'IndiGo, Air India, Vistara'},{name:'Mithapur Bus Stand',dist:'3 km',desc:'State buses Bihar'}],
    },
  },
};

// =====================================================
//  NOTIFICATIONS
// =====================================================
let notifications = JSON.parse(localStorage.getItem('ss_notifs')||'[]');
function addNotif(msg){ notifications.unshift({msg,time:new Date().toLocaleTimeString()}); if(notifications.length>10) notifications.pop(); localStorage.setItem('ss_notifs',JSON.stringify(notifications)); renderNotifs(); }
function renderNotifs(){ const el=document.getElementById('notifList'); if(!el) return; if(!notifications.length){ el.innerHTML='<div class="notif-empty">No notifications yet</div>'; document.getElementById('notifDot').classList.remove('show'); return; } el.innerHTML=notifications.map(n=>`<div class="notif-item">🔔 ${n.msg} <span style="font-size:11px;opacity:.6">· ${n.time}</span></div>`).join(''); document.getElementById('notifDot').classList.add('show'); }
function toggleNotif(){ const p=document.getElementById('notifPanel'); p.classList.toggle('hidden'); renderNotifs(); }
function clearNotifs(){ notifications=[]; localStorage.removeItem('ss_notifs'); renderNotifs(); document.getElementById('notifPanel').classList.add('hidden'); }

// =====================================================
//  INIT
// =====================================================
window.onload = function(){
  // Loader
  setTimeout(()=>{ const l=document.getElementById('loader'); l.style.opacity='0'; setTimeout(()=>l.style.display='none',500); },1600);

  // Dark mode
  if(localStorage.getItem('ss_dark')==='1') document.body.classList.add('dark');

  // Language
  currentLang = localStorage.getItem('ss_lang')||'en';
  applyLang();

  // User check
  const user = localStorage.getItem('ss_user');
  if(user){
    document.getElementById('loginModal').style.display='none';
    updateProfileUI();
  }

  // DP
  const dp = localStorage.getItem('ss_dp');
  if(dp){ setProfilePics(dp); }

  normalizePGData();
  populatePGCityFilter();

  const statPGs = document.getElementById('statPGs');
  if(statPGs) statPGs.textContent = `${pgData.length}+`;

  loadCity('Bhopal');
  renderNotifs();

  // Init new features
  setTimeout(() => {
    renderChecklist();
    renderCompare();
    setBudgetCity('Bhopal', document.querySelector('.cbs'));
    renderStudentServices();
    renderExpenses();
    renderMarketplace();
  }, 500);
};

// =====================================================
//  LANGUAGE
// =====================================================
function applyLang(){
  document.getElementById('heroTitle').innerHTML = t('heroTitle');
  document.getElementById('heroSub').textContent = t('heroSub');
  document.getElementById('heroSearchInput').placeholder = t('searchPlaceholder');
  const langBtn = document.getElementById('langBtnText');
  if(langBtn) langBtn.textContent = t('langBtn');
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn=>{ const key = currentLang==='en'?'en':'hi'; if(btn.dataset[key]) btn.textContent=btn.dataset[key]; });
  if(activeCity) loadCity(activeCity);
}

function switchLang(){
  currentLang = currentLang==='en'?'hi':'en';
  localStorage.setItem('ss_lang',currentLang);
  applyLang();
  const profileMenu = document.getElementById('profileMenu'); if(profileMenu) profileMenu.style.display='none';
}

// =====================================================
//  DARK MODE
// =====================================================
function toggleDark(){
  document.body.classList.toggle('dark');
  localStorage.setItem('ss_dark',document.body.classList.contains('dark')?'1':'0');
}

// =====================================================
//  PROFILE UI
// =====================================================
function updateProfileUI(){
  const name  = localStorage.getItem('ss_user')||'Guest';
  const email = localStorage.getItem('ss_email')||localStorage.getItem('ss_phone')||'';
  const dp    = localStorage.getItem('ss_dp')||'';
  const init  = name.charAt(0).toUpperCase();

  document.getElementById('profileInitial').textContent  = init;
  document.getElementById('pmInitial').textContent       = init;
  document.getElementById('pmName').textContent          = name;
  document.getElementById('pmEmail').textContent         = email||'Guest user';

  if(dp){ setProfilePics(dp); }
}

function setProfilePics(src){
  ['profilePic','pmPic'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){ el.src=src; el.style.display='block'; }
  });
}

function toggleProfileMenu(event){
  if(event && event.target.closest('.profile-menu')) return;
  const m=document.getElementById('profileMenu');
  if(!m) return;
  m.style.display=m.style.display==='block'?'none':'block';
}

// =====================================================
//  AUTH — static OTP demo login
// =====================================================
let otpState = { code: '', contact: '', name: '', expiresAt: 0, timer: null };

function showAuthTab(tab){
  document.getElementById('loginForm').style.display    = tab==='login'?'block':'none';
  document.getElementById('registerForm').style.display = tab==='register'?'block':'none';
  document.querySelectorAll('.auth-tab').forEach((b,i)=>{
    b.classList.toggle('active', (i===0&&tab==='login')||(i===1&&tab==='register'));
  });
}

function normalizeContact(value){
  return (value || '').trim().toLowerCase();
}

function isValidContact(contact){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) || /^[6-9]\d{9}$/.test(contact.replace(/\D/g,''));
}

function maskContact(contact){
  if(contact.includes('@')){
    const [name, domain] = contact.split('@');
    return `${name.slice(0,2)}***@${domain}`;
  }
  const digits = contact.replace(/\D/g,'');
  return digits.length >= 10 ? `******${digits.slice(-4)}` : contact;
}

function generateOTP(){
  return String(Math.floor(100000 + Math.random() * 900000));
}

function setOtpStatus(message, type='info'){
  const el = document.getElementById('otpStatus');
  if(!el) return;
  el.className = 'otp-status ' + type;
  el.textContent = message;
}

function startOtpTimer(){
  clearInterval(otpState.timer);
  const resendBtn = document.getElementById('resendOtpBtn');
  otpState.timer = setInterval(()=>{
    const left = Math.max(0, Math.ceil((otpState.expiresAt - Date.now()) / 1000));
    if(resendBtn){
      resendBtn.disabled = left > 90;
      resendBtn.textContent = left > 0 ? `Resend OTP (${left}s)` : 'Resend OTP';
    }
    if(left <= 0){
      clearInterval(otpState.timer);
      if(resendBtn) resendBtn.disabled = false;
      setOtpStatus('OTP expired. Please resend a new OTP.', 'warn');
    }
  }, 500);
}

function doLogin(){
  const name = (document.getElementById('loginName').value || '').trim();
  const contact = normalizeContact(document.getElementById('loginEmail').value);

  if(!name || !contact){ alert('Please enter your name and email/phone.'); return; }
  if(!isValidContact(contact)){ alert('Please enter a valid email or 10-digit Indian mobile number.'); return; }

  otpState = { ...otpState, code: generateOTP(), contact, name, expiresAt: Date.now() + 120000 };
  const otpBox = document.getElementById('otpBox');
  const otpInput = document.getElementById('loginOtp');
  if(otpBox) otpBox.classList.remove('hidden');
  if(otpInput){ otpInput.value = ''; setTimeout(()=>otpInput.focus(), 100); }

  // Static GitHub Pages cannot send real SMS/email. Show demo OTP for verification.
  setOtpStatus(`Demo OTP for ${maskContact(contact)}: ${otpState.code}. It expires in 2 minutes.`, 'success');
  startOtpTimer();
}

function resendOTP(){
  if(!otpState.contact){ doLogin(); return; }
  otpState.code = generateOTP();
  otpState.expiresAt = Date.now() + 120000;
  const otpInput = document.getElementById('loginOtp');
  if(otpInput) otpInput.value = '';
  setOtpStatus(`New demo OTP for ${maskContact(otpState.contact)}: ${otpState.code}.`, 'success');
  startOtpTimer();
}

function verifyOTP(){
  const entered = (document.getElementById('loginOtp').value || '').trim();
  if(!otpState.code){ alert('Please send OTP first.'); return; }
  if(Date.now() > otpState.expiresAt){ setOtpStatus('OTP expired. Please resend OTP.', 'warn'); return; }
  if(entered !== otpState.code){ setOtpStatus('Incorrect OTP. Check the 6-digit code and try again.', 'error'); return; }

  const users = JSON.parse(localStorage.getItem('ss_users')||'{}');
  const existing = users[otpState.contact] || {};
  users[otpState.contact] = { ...existing, name: otpState.name, email: otpState.contact.includes('@') ? otpState.contact : (existing.email || ''), phone: otpState.contact.includes('@') ? (existing.phone || '') : otpState.contact, otpLogin: true };
  localStorage.setItem('ss_users', JSON.stringify(users));
  localStorage.setItem('ss_user', otpState.name);
  if(otpState.contact.includes('@')) localStorage.setItem('ss_email', otpState.contact);
  else localStorage.setItem('ss_phone', otpState.contact);

  clearInterval(otpState.timer);
  document.getElementById('loginModal').style.display='none';
  updateProfileUI();
  addNotif(`Welcome, ${otpState.name}! OTP login successful.`);
  loadCity(activeCity);
}

function doRegister(){
  const name  = (document.getElementById('regName').value||'').trim();
  const email = (document.getElementById('regEmail').value||'').trim().toLowerCase();
  const phone = (document.getElementById('regPhone').value||'').trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;

  if(!name||!email||!pass){ alert(t('pgError')); return; }
  if(!email.includes('@')){ alert(t('invalidEmail')); return; }
  if(pass.length<6){ alert(t('passTooShort')); return; }
  if(pass!==pass2){ alert(t('passError')); return; }

  const users = JSON.parse(localStorage.getItem('ss_users')||'{}');
  users[email] = { name, email, phone, pass: btoa(pass) };
  localStorage.setItem('ss_users',JSON.stringify(users));

  alert('Profile created! You can now login with OTP.');
  showAuthTab('login');
  document.getElementById('loginName').value  = name;
  document.getElementById('loginEmail').value = email;
}

function doGuest(){
  localStorage.setItem('ss_user','Guest');
  localStorage.removeItem('ss_email');
  localStorage.removeItem('ss_phone');
  document.getElementById('loginModal').style.display='none';
  updateProfileUI();
  loadCity(activeCity);
}

function logout(){
  localStorage.removeItem('ss_user');
  localStorage.removeItem('ss_email');
  localStorage.removeItem('ss_phone');
  localStorage.removeItem('ss_dp');
  location.reload();
}

function togglePass(id){
  const el=document.getElementById(id);
  el.type=el.type==='password'?'text':'password';
}

// =====================================================
//  EDIT PROFILE
// =====================================================
function openModal(id){
  const modal = document.getElementById(id);
  if(!modal) return;
  modal.classList.remove('hidden');
  modal.style.display='flex';
  if(id==='editProfileModal'){ populateEditProfile(); }
  if(id==='savedPGModal'){ renderSavedPGs(); }
  if(id==='roommateModal'){
    const name = document.getElementById('roommateName');
    const city = document.getElementById('roommateCity');
    if(name && !name.value) name.value = localStorage.getItem('ss_user') || '';
    if(city) city.value = activeCity;
    renderRoommatePosts();
  }
  const profileMenu = document.getElementById('profileMenu'); if(profileMenu) profileMenu.style.display='none';
}

function closeModal(id){
  const modal = document.getElementById(id);
  if(!modal) return;
  modal.classList.add('hidden');
  modal.style.display='none';
}

function populateEditProfile(){
  document.getElementById('editName').value  = localStorage.getItem('ss_user')||'';
  document.getElementById('editEmail').value = localStorage.getItem('ss_email')||'';
  document.getElementById('editPhone').value = localStorage.getItem('ss_phone')||'';
  const dp=localStorage.getItem('ss_dp');
  const av=document.getElementById('editAvatar');
  const init=(localStorage.getItem('ss_user')||'?').charAt(0).toUpperCase();
  if(dp){ av.innerHTML=`<img src="${dp}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%">`; }
  else { av.textContent=init; }
}

function saveProfile(){
  const name  = (document.getElementById('editName').value||'').trim();
  const email = (document.getElementById('editEmail').value||'').trim();
  const phone = (document.getElementById('editPhone').value||'').trim();
  const pass  = document.getElementById('editPass').value;

  if(!name){ alert('Name cannot be empty'); return; }

  localStorage.setItem('ss_user',name);
  if(email) localStorage.setItem('ss_email',email);
  if(phone) localStorage.setItem('ss_phone',phone);

  if(pass){
    if(pass.length<6){ alert(t('passTooShort')); return; }
    const users=JSON.parse(localStorage.getItem('ss_users')||'{}');
    const em=email||localStorage.getItem('ss_email')||'';
    if(em) users[em]={...users[em],pass:btoa(pass)};
    localStorage.setItem('ss_users',JSON.stringify(users));
  }

  updateProfileUI();
  closeModal('editProfileModal');
  addNotif('Profile updated successfully!');
  alert(t('profileSaved'));
}

function changeDP(e){
  if(!e.target.files || !e.target.files[0]) return;
  const r=new FileReader();
  r.onload=ev=>{
    localStorage.setItem('ss_dp',ev.target.result);
    setProfilePics(ev.target.result);
    const av=document.getElementById('editAvatar');
    if(av) av.innerHTML=`<img src="${ev.target.result}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%">`;
  };
  r.readAsDataURL(e.target.files[0]);
}

// =====================================================
//  CITY SWITCH
// =====================================================
function switchCity(city,btn){
  activeCity=city;
  document.querySelectorAll('.city-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  loadCity(city);
}

function loadCity(city){
  activeCity=city;
  const pgCitySelect = document.getElementById('pgCity');
  if(pgCitySelect && [...pgCitySelect.options].some(o => o.value === city)) pgCitySelect.value = city;
  document.getElementById('pg-heading').textContent      = t('pgHeading',city);
  document.getElementById('fare-heading').textContent    = t('fareHeading',city);
  document.getElementById('guide-heading').textContent   = t('guideHeading',city);
  document.getElementById('nearby-heading').textContent  = t('nearbyHeading',city);
  document.getElementById('nearby-sub').textContent      = `Important places in ${city}`;
  renderPGs();
  loadFareDropdowns(city);
  loadGuide(city);
  loadHelplines(city);
  loadNearby(city,activeCat);
  renderStudentServices();
  renderMarketplace();
}

// =====================================================
//  TAB SWITCH
// =====================================================
function switchTab(tab,btn,options={}){
  const panel = document.getElementById('tab-'+tab);
  if(!panel) return;
  const tabBtn = btn || document.querySelector(`[data-tab="${tab}"]`);
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  panel.classList.add('active');
  if(tabBtn) tabBtn.classList.add('active');
  if(options.scroll !== false) panel.scrollIntoView({behavior:'smooth', block:'start'});
}

// =====================================================
//  PG FINDER
// =====================================================
function renderPGs(){
  const search  = (document.getElementById('pgSearch')?.value||'').toLowerCase();
  const cityFilter = document.getElementById('pgCity')?.value || '';
  const typeFilter = document.getElementById('pgType')?.value || '';
  const gender  = document.getElementById('pgGender')?.value||'';
  const maxPr   = parseInt(document.getElementById('pgPrice')?.value||'999999');
  const sortBy  = document.getElementById('pgSort')?.value||'';

  let list = pgData.filter(p=>{
    const price = getListingPrice(p);
    const type = getListingType(p);
    return (!cityFilter || p.city===cityFilter) &&
      (!typeFilter || type===typeFilter) &&
      (!search||[p.name,p.city,p.address,p.amenities,p.gender,type].filter(Boolean).join(' ').toLowerCase().includes(search)) &&
    const price=parseInt(p.price.replace(/[^0-9]/g,''));
    return p.city===activeCity &&
      (!search||[p.name,p.city,p.address,p.amenities,p.gender].filter(Boolean).join(' ').toLowerCase().includes(search)) &&
      (!gender||p.gender===gender) &&
      price<=(maxPr||999999);
  });

  if(sortBy==='price_asc')  list.sort((a,b)=>getListingPrice(a)-getListingPrice(b));
  if(sortBy==='price_desc') list.sort((a,b)=>getListingPrice(b)-getListingPrice(a));
  if(sortBy==='rating')     list.sort((a,b)=>avgRating(b.name)-avgRating(a.name));

  const heading=document.getElementById('pg-heading');
  if(heading) heading.textContent = cityFilter ? `Accommodation in ${cityFilter}` : 'Verified PGs & Flats';
  const count=document.getElementById('pg-count');
  if(count) count.textContent=`${list.length} verified propert${list.length===1?'y':'ies'} found${typeFilter ? ' · '+typeFilter : ''}`;
  if(sortBy==='price_asc')  list.sort((a,b)=>parseInt(a.price.replace(/\D/g,''))-parseInt(b.price.replace(/\D/g,'')));
  if(sortBy==='price_desc') list.sort((a,b)=>parseInt(b.price.replace(/\D/g,''))-parseInt(a.price.replace(/\D/g,'')));
  if(sortBy==='rating')     list.sort((a,b)=>avgRating(b.name)-avgRating(a.name));

  const count=document.getElementById('pg-count');
  if(count) count.textContent=`${list.length} PG${list.length!==1?'s':''} found`;

  const grid=document.getElementById('pgGrid');
  if(!grid) return;

  if(!list.length){
    grid.innerHTML=`<div class="no-results"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><br>${t('noResults')}</div>`;
    return;
  }

  grid.innerHTML=list.map((pg,i)=>{
    const price   = getListingPrice(pg);
    const type    = getListingType(pg);
    const price   = parseInt(pg.price.replace(/[^0-9]/g,''));
    const reviews = getReviews(pg.name);
    const avg     = avgRating(pg.name);
    const gClass  = pg.gender==='Boys'?'b-boys':pg.gender==='Girls'?'b-girls':'b-both';
    const gEmoji  = pg.gender==='Boys'?'👦':pg.gender==='Girls'?'👧':'👥';
    const amenities = pg.amenities||'WiFi, Meals, Laundry';
    return `
    <div class="pg-card" style="animation-delay:${i*.05}s" onclick="openPGDetail('${pg.name.replace(/'/g,"\\'")}')">
      <div class="pg-img-wrap">
        <img src="${pg.image}?w=400" loading="lazy" alt="${pg.name}" onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'">
        <div class="pg-badges">
          <span class="pg-badge ${gClass}">${gEmoji} ${pg.gender}</span>
          <span class="pg-badge verified">✅ Verified</span>
          <span class="pg-badge type">${type}</span>
          ${i<2?'<span class="pg-badge" style="background:rgba(234,179,8,.9);color:#fff">⭐ Top Pick</span>':''}
        </div>
        ${avg>0?`<div class="pg-rating-badge">★ ${avg.toFixed(1)}</div>`:''}
      </div>
      <div class="pg-body">
        <h3>${pg.name}</h3>
        <div class="pg-city-tag"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${pg.city} · ${type}</div>
        <div class="pg-city-tag"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${pg.city}</div>
        <div class="pg-rent">₹${price.toLocaleString()} <span>/ month</span></div>
        <div class="pg-amenities">✓ ${amenities}</div>
        <div class="pg-stars">${starsHTML(avg)}<small>(${reviews.length})</small></div>
        <div class="pg-btns">
          <button class="bcall" onclick="event.stopPropagation();callPG('${pg.contact}')">📞 Call</button>
          <button class="bmap" onclick="event.stopPropagation();mapPG('${pg.name}','${pg.city}')">📍 Map</button>
          <button class="bfav" onclick="event.stopPropagation();savePG('${pg.name}')">❤️</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// PG Detail
function openPGDetail(pgName){
  const pg=pgData.find(p=>p.name===pgName);
  if(!pg) return;
  currentPG=pg;
  const price=parseInt(pg.price.replace(/[^0-9]/g,''));
  const reviews=getReviews(pg.name);
  const avg=avgRating(pg.name);
  document.getElementById('pgDetailBody').innerHTML=`
    <img class="detail-img" src="${pg.image}?w=500" onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500'" alt="${pg.name}">
    <h3 style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-bottom:8px">${pg.name}</h3>
    <div style="margin-bottom:14px">${starsHTML(avg)} <small style="color:var(--muted)">(${reviews.length} reviews${avg>0?' · ★'+avg.toFixed(1):''})</small></div>
    <div class="detail-facts">
      <div class="detail-fact-row"><span>📍 City</span><span>${pg.city}</span></div>
      <div class="detail-fact-row"><span>💰 Rent</span><span>₹${price.toLocaleString()} / month</span></div>
      <div class="detail-fact-row"><span>👥 For</span><span>${pg.gender||'All'}</span></div>
      <div class="detail-fact-row"><span>📞 Contact</span><span>${pg.contact}</span></div>
      ${pg.address?`<div class="detail-fact-row"><span>🏠 Address</span><span>${pg.address}</span></div>`:''}
      ${pg.amenities?`<div class="detail-fact-row"><span>✓ Amenities</span><span>${pg.amenities}</span></div>`:''}
    </div>
    <div class="detail-action-row">
      <button class="bcall" onclick="callPG('${pg.contact}')">📞 Call Now</button>
      <button class="bmap" onclick="mapPG('${pg.name}','${pg.city}')">📍 Directions</button>
    </div>
    <div class="rev-title">Reviews & Ratings</div>
    <div class="star-row" id="starRow">${[1,2,3,4,5].map(n=>`<span onclick="setStar(${n})" id="star${n}">⭐</span>`).join('')}</div>
    <div class="rev-input-row">
      <input class="m-input" id="revText" placeholder="Write your review..." style="margin:0">
      <button onclick="postReview()">Post</button>
    </div>
    <div class="rev-list">${reviews.length?reviews.map(r=>`<div class="rev-item"><div class="rev-user">${r.user}</div><div class="rev-stars-text">${'⭐'.repeat(r.rating)}</div><div class="rev-body">${r.text}</div></div>`).join(''):'<p style="color:var(--muted);font-size:13px;padding:8px 0">No reviews yet — be the first!</p>'}</div>`;
  selRating=0;
  openModal('pgDetailModal');
}

// Reviews
function getReviews(name){ return JSON.parse(localStorage.getItem('rev_'+name)||'[]'); }
function avgRating(name){ const r=getReviews(name); return r.length?r.reduce((s,x)=>s+x.rating,0)/r.length:0; }
function starsHTML(avg){ return[1,2,3,4,5].map(i=>`<span style="color:${i<=Math.round(avg)?'#f59e0b':'#d1d5db'};font-size:14px">★</span>`).join(''); }
function setStar(n){ selRating=n; [1,2,3,4,5].forEach(i=>{const el=document.getElementById('star'+i);if(el){el.classList.toggle('on',i<=n);}}); }

function postReview(){
  if(!currentPG) return;
  const text=(document.getElementById('revText').value||'').trim();
  const user=localStorage.getItem('ss_user')||'Guest';
  if(!text||!selRating){ alert(t('reviewError')); return; }
  const reviews=getReviews(currentPG.name);
  reviews.unshift({user,text,rating:selRating,date:new Date().toLocaleDateString('en-IN')});
  localStorage.setItem('rev_'+currentPG.name,JSON.stringify(reviews));
  addNotif(`Review posted for ${currentPG.name}`);
  alert(t('reviewPosted'));
  openPGDetail(currentPG.name);
}

function callPG(num){ window.location.href='tel:'+num; }
function mapPG(name,city){ window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name+' PG '+city+' India')}`,'_blank'); }

function savePG(name){
  let favs=JSON.parse(localStorage.getItem('ss_favs')||'[]');
  if(!favs.includes(name)){ favs.push(name); localStorage.setItem('ss_favs',JSON.stringify(favs)); addNotif(`${name} saved to favourites!`); alert(t('saved')); }
  else alert(t('alreadySaved'));
}

function renderSavedPGs(){
  const favs=JSON.parse(localStorage.getItem('ss_favs')||'[]');
  const el=document.getElementById('savedPGList');
  if(!favs.length){ el.innerHTML='<div class="saved-empty">❤️<br>No saved PGs yet.<br>Tap the heart icon to save PGs.</div>'; return; }
  el.innerHTML=favs.map(name=>{
    const pg=pgData.find(p=>p.name===name);
    if(!pg) return '';
    const price=parseInt(pg.price.replace(/[^0-9]/g,''));
    return `<div class="saved-pg-item" onclick="closeModal('savedPGModal');openPGDetail('${name.replace(/'/g,"\\'")}')">
      <img class="saved-pg-img" src="${pg.image}?w=100" onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100'" alt="${name}">
      <div class="saved-pg-info"><strong>${name}</strong><span>₹${price.toLocaleString()}/mo · ${pg.city}</span></div>
    </div>`;
  }).join('');
}

function addNewPG(){
  const name    =(document.getElementById('newPGName').value||'').trim();
  const city    = document.getElementById('newPGCity').value;
  const price   = document.getElementById('newPGPrice').value;
  const gender  = document.getElementById('newPGGender').value;
  const contact =(document.getElementById('newPGContact').value||'').trim();
  const address =(document.getElementById('newPGAddress').value||'').trim();
  const amen    =(document.getElementById('newPGAmen').value||'').trim();
  if(!name||!contact){ alert(t('pgError')); return; }
  pgData.push({name,city,price:'₹'+(parseInt(price)||5000),gender,contact,address,amenities:amen||'WiFi, Meals',image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'});
  addNotif(`New PG listed: ${name}`);
  alert(t('pgAdded'));
  closeModal('addPGModal');
  ['newPGName','newPGPrice','newPGContact','newPGAddress','newPGAmen'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  renderPGs();
}

// =====================================================
//  FARE CALCULATOR
// =====================================================
function loadFareDropdowns(city){
  const data=cityData[city];
  if(!data) return;
  document.getElementById('fareFrom').innerHTML='<option value="">'+t('selectSource')+'</option>'+data.fareFrom.map(f=>`<option value="${f.val}">${f.label}</option>`).join('');
  document.getElementById('fareTo').innerHTML='<option value="">'+t('selectDest')+'</option>'+data.fareTo.map(f=>`<option value="${f.val}">${f.label}</option>`).join('');
  document.getElementById('fareResult').style.display='none';
}

function calcFare(){
  const from=document.getElementById('fareFrom').value;
  const to=document.getElementById('fareTo').value;
  const res=document.getElementById('fareResult');
  if(!from||!to){res.style.display='none';return;}
  const data=cityData[activeCity];
  const fare=data&&data.fares[from]&&data.fares[from][to];
  if(!fare){res.style.display='none';return;}
  document.getElementById('f-dist').textContent=fare.d;
  document.getElementById('f-time').textContent=fare.t;
  document.getElementById('f-auto').textContent=fare.a;
  document.getElementById('f-cab').textContent=fare.c;
  document.getElementById('f-bike').textContent=fare.b;
  document.getElementById('f-erick').textContent=fare.e;
  document.getElementById('f-note').textContent=fare.n||'Book cabs after 10 PM for safety.';
  res.style.display='block';
}

// =====================================================
//  CITY GUIDE
// =====================================================
function loadGuide(city){
  const steps=(cityData[city]||{}).guide||[];
  document.getElementById('guideSteps').innerHTML=steps.map((s,i)=>`
    <div class="g-step">
      <div class="g-num">${i+1}</div>
      <div class="g-body">
        <div class="g-title">${s.title}</div>
        <div class="g-desc">${s.desc}</div>
        ${s.tip?`<span class="g-tip">💡 ${s.tip}</span>`:''}
      </div>
    </div>`).join('');
}

// =====================================================
//  HELPLINES
// =====================================================
function loadHelplines(city){
  const list=(cityData[city]||{}).helplines||[];
  document.getElementById('helplineItems').innerHTML=list.map(h=>`
    <div class="h-item">
      <div class="h-icon">${h.icon}</div>
      <div class="h-info"><strong>${h.name}</strong><span>${h.desc}</span></div>
      <a href="tel:${h.num.replace(/[^0-9+]/g,'')}" class="h-call">📞 ${h.num}</a>
    </div>`).join('');
}

// =====================================================
//  NEARBY
// =====================================================
function showCategory(cat,btn){
  activeCat=cat;
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  loadNearby(activeCity,cat);
}

function loadNearby(city,cat){
  const data=(cityData[city]||{}).nearby||{};
  const items=data[cat]||[];
  document.getElementById('nearbyItems').innerHTML=items.map(n=>`
    <div class="n-item">
      <div class="n-icon">${catIcon(cat)}</div>
      <div class="n-info"><strong>${n.name}</strong><span>${n.desc}</span></div>
      <div class="n-right">
        <span class="n-dist">${n.dist}</span>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.name+' '+city)}" target="_blank" class="n-map">📍 Map</a>
      </div>
    </div>`).join('');
}

function catIcon(cat){ return{hospital:'🏥',police:'🚔',atm:'🏧',food:'🍽️',transport:'🚌'}[cat]||'📍'; }

// =====================================================
//  SEARCH
// =====================================================
function cityButtonFor(city){
  return Array.from(document.querySelectorAll('.city-btn')).find(btn => btn.textContent.toLowerCase().includes(city.toLowerCase()));
}

function findBestCityForQuery(query){
  const q = query.toLowerCase();
  const exactCity = Object.keys(cityData).find(c => c.toLowerCase() === q);
  if(exactCity) return { city: exactCity, exactCity: true };
  const partialCity = Object.keys(cityData).find(c => c.toLowerCase().includes(q) || q.includes(c.toLowerCase()));
  if(partialCity) return { city: partialCity, exactCity: false };
  const pgMatch = pgData.find(p => [p.name,p.city,p.address,p.amenities,p.gender].filter(Boolean).join(' ').toLowerCase().includes(q));
  return pgMatch ? { city: pgMatch.city, exactCity: false } : null;
}

function runSmartSearch(value, source='nav'){
  const query = (value || '').trim();
  const pgSearch = document.getElementById('pgSearch');
  if(!query){
    if(pgSearch) pgSearch.value = '';
    switchTab('pg',document.querySelector('[data-tab=pg]'), {scroll: false});
    renderPGs();
    return;
  }

  const match = findBestCityForQuery(query);
  if(match && match.city !== activeCity){
    switchCity(match.city, cityButtonFor(match.city) || document.querySelector('.city-btn'));
  }

  const genderEl = document.getElementById('pgGender');
  if(genderEl){
    if(/\bgirls?\b|female|women/i.test(query)) genderEl.value = 'Girls';
    else if(/\bboys?\b|male|men/i.test(query)) genderEl.value = 'Boys';
  }

  const priceEl = document.getElementById('pgPrice');
  const budget = getBudgetFromText(query);
  if(priceEl && budget){
    priceEl.value = budget <= 5000 ? '5000' : budget <= 7000 ? '7000' : budget <= 10000 ? '10000' : '';
  }

  const cleanedQuery = query
    .replace(/\b(pg|hostel|room|rooms|under|below|less than|upto|up to|budget|rs|₹)\b/ig, '')
    .replace(/\d{4,5}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if(pgSearch) pgSearch.value = (match?.exactCity || budget || /\b(girls?|boys?|female|male|women|men)\b/i.test(query)) ? cleanedQuery : query;
  switchTab('pg',document.querySelector('[data-tab=pg]'), {scroll: source !== 'nav'});
  renderPGs();

  const count = document.getElementById('pg-count')?.textContent || '';
  if(source === 'hero' && count) addNotif(`Search updated: ${count}`);
}

function quickSearch(val){ runSmartSearch(val, 'nav'); }

function heroSearch(val){
  const query = (val || '').trim();
  const input = document.getElementById('heroSearchInput');
  if(!input) return;
  const match = query ? findBestCityForQuery(query) : null;
  input.title = match ? `Will search in ${match.city}` : 'Search PG, area, amenity, or city';
}

function doHeroSearch(){
  const val=document.getElementById('heroSearchInput').value.trim();
  runSmartSearch(val, 'hero');
}

// =====================================================
//  CLOSE ON OVERLAY CLICK
// =====================================================
document.addEventListener('click',e=>{
  if(e.target.classList.contains('overlay')&&e.target.id!=='loginModal'){
    e.target.classList.add('hidden');
    e.target.style.display='none';
  }
  if(!e.target.closest('.profile-wrap')){ const m=document.getElementById('profileMenu'); if(m) m.style.display='none'; }
  if(!e.target.closest('.notif-btn')&&!e.target.closest('.notif-panel')){ const p=document.getElementById('notifPanel'); if(p) p.classList.add('hidden'); }
});

// =====================================================
//  COMPARE PGs
// =====================================================
let compareList = [];

function searchCompare(val) {
  const dd = document.getElementById('compareDropdown');
  if (!val.trim()) { dd.classList.add('hidden'); return; }
  const results = pgData.filter(p =>
    p.city === activeCity &&
    p.name.toLowerCase().includes(val.toLowerCase()) &&
    !compareList.find(c => c.name === p.name)
  ).slice(0, 6);
  if (!results.length) { dd.classList.add('hidden'); return; }
  dd.innerHTML = results.map(p =>
    `<div class="compare-drop-item" onclick="addToCompare('${p.name.replace(/'/g,"\\'")}')">
      ${p.name} — ₹${parseInt(p.price.replace(/\D/g,'')).toLocaleString()}/mo · ${p.gender}
    </div>`
  ).join('');
  dd.classList.remove('hidden');
}

function addToCompare(name) {
  if (compareList.length >= 3) { alert('Maximum 3 PGs can be compared at once.'); return; }
  const pg = pgData.find(p => p.name === name);
  if (!pg || compareList.find(c => c.name === name)) return;
  compareList.push(pg);
  document.getElementById('compareSearch').value = '';
  document.getElementById('compareDropdown').classList.add('hidden');
  renderCompare();
}

function removeFromCompare(name) {
  compareList = compareList.filter(p => p.name !== name);
  renderCompare();
}

function renderCompare() {
  const pillsEl = document.getElementById('compareSelected');
  const tableEl = document.getElementById('compareTable');

  pillsEl.innerHTML = compareList.map(pg =>
    `<div class="compare-pill">${pg.name}
      <button onclick="removeFromCompare('${pg.name.replace(/'/g,"\\'")}')">×</button>
    </div>`
  ).join('');

  if (!compareList.length) {
    tableEl.innerHTML = '<div class="compare-empty">🔍<br>Search and add PGs above to compare them side by side.</div>';
    return;
  }

  const fields = [
    { label: 'PG Name', key: 'name', bold: true },
    { label: 'City', key: 'city' },
    { label: 'Monthly Rent', key: 'price' },
    { label: 'For', key: 'gender' },
    { label: 'Amenities', key: 'amenities' },
    { label: 'Contact', key: 'contact' },
    { label: 'Rating', key: '_rating' },
  ];

  const prices = compareList.map(p => parseInt(p.price.replace(/\D/g, '')));
  const minPrice = Math.min(...prices);
  const ratings = compareList.map(p => avgRating(p.name));
  const maxRating = Math.max(...ratings);

  let html = `<table class="compare-table"><thead><tr><th>Feature</th>`;
  compareList.forEach(pg => { html += `<th>${pg.name}</th>`; });
  html += `</tr></thead><tbody>`;

  fields.forEach(f => {
    html += `<tr><td style="font-weight:600;font-size:13px;color:var(--muted)">${f.label}</td>`;
    compareList.forEach((pg, i) => {
      let val = '';
      if (f.key === '_rating') {
        const r = avgRating(pg.name);
        val = r > 0 ? `★ ${r.toFixed(1)}` : 'No ratings';
        const isBest = r === maxRating && r > 0;
        html += `<td class="${isBest ? 'best-cell' : ''}">${val}</td>`;
      } else {
        val = pg[f.key] || '—';
        const isBestPrice = f.key === 'price' && parseInt(pg.price.replace(/\D/g,'')) === minPrice;
        html += `<td class="${f.bold ? 'pg-name-cell' : ''} ${isBestPrice ? 'best-cell' : ''}">${val}</td>`;
      }
    });
    html += `</tr>`;
  });

  html += `<tr><td style="font-weight:600;font-size:13px;color:var(--muted)">Action</td>`;
  compareList.forEach(pg => {
    html += `<td><button class="bcall" style="width:100%;font-size:12px;padding:7px" onclick="callPG('${pg.contact}')">📞 Call</button></td>`;
  });
  html += `</tr></tbody></table>`;
  tableEl.innerHTML = html;
}

// =====================================================
//  BUDGET PLANNER
// =====================================================
let budgetCity = 'Bhopal';

const cityAvgCost = {
  Bhopal:  { pg: 6000, food: 3000, transport: 1500, internet: 400, entertain: 1000, misc: 800 },
  Delhi:   { pg: 9000, food: 4500, transport: 2500, internet: 500, entertain: 2000, misc: 1500 },
  Mumbai:  { pg: 11000, food: 5000, transport: 2000, internet: 500, entertain: 2500, misc: 1500 },
  Pune:    { pg: 8000, food: 4000, transport: 2000, internet: 400, entertain: 1500, misc: 1000 },
  Patna:   { pg: 5500, food: 2500, transport: 1200, internet: 350, entertain: 800, misc: 600 },
};

function setBudgetCity(city, btn) {
  budgetCity = city;
  document.querySelectorAll('.cbs').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.getElementById('budgetCityTag').textContent = '📍 ' + city;
  const avg = cityAvgCost[city];
  document.getElementById('bPG').value       = avg.pg;
  document.getElementById('bFood').value     = avg.food;
  document.getElementById('bTransport').value = avg.transport;
  document.getElementById('bInternet').value = avg.internet;
  document.getElementById('bEntertain').value = avg.entertain;
  document.getElementById('bMisc').value     = avg.misc;
  calcBudget();
}

function calcBudget() {
  const pg        = parseInt(document.getElementById('bPG').value) || 0;
  const food      = parseInt(document.getElementById('bFood').value) || 0;
  const transport = parseInt(document.getElementById('bTransport').value) || 0;
  const internet  = parseInt(document.getElementById('bInternet').value) || 0;
  const entertain = parseInt(document.getElementById('bEntertain').value) || 0;
  const misc      = parseInt(document.getElementById('bMisc').value) || 0;
  const income    = parseInt(document.getElementById('budgetIncome').value) || 0;

  document.getElementById('bPGVal').textContent        = '₹' + pg.toLocaleString();
  document.getElementById('bFoodVal').textContent      = '₹' + food.toLocaleString();
  document.getElementById('bTransportVal').textContent = '₹' + transport.toLocaleString();
  document.getElementById('bInternetVal').textContent  = '₹' + internet.toLocaleString();
  document.getElementById('bEntertainVal').textContent = '₹' + entertain.toLocaleString();
  document.getElementById('bMiscVal').textContent      = '₹' + misc.toLocaleString();

  const total = pg + food + transport + internet + entertain + misc;
  const savings = income - total;

  const rows = [
    { icon: '🏠', label: 'PG / Rent', val: pg },
    { icon: '🍽️', label: 'Food & Meals', val: food },
    { icon: '🚌', label: 'Transport', val: transport },
    { icon: '📱', label: 'Internet / Mobile', val: internet },
    { icon: '🎬', label: 'Entertainment', val: entertain },
    { icon: '🛍️', label: 'Miscellaneous', val: misc },
  ];

  document.getElementById('budgetBreakdown').innerHTML = rows.map(r =>
    `<div class="budget-row">
      <span class="budget-row-label">${r.icon} ${r.label}</span>
      <span class="budget-row-val">₹${r.val.toLocaleString()}</span>
    </div>`
  ).join('');

  document.getElementById('budgetTotal').textContent = '₹' + total.toLocaleString();

  const savEl = document.getElementById('budgetSavings');
  if (income > 0) {
    const cls = savings >= 0 ? 'savings-positive' : 'savings-negative';
    const msg = savings >= 0
      ? `✅ You save ₹${savings.toLocaleString()} per month`
      : `⚠️ Budget shortfall of ₹${Math.abs(savings).toLocaleString()}`;
    savEl.className = 'budget-savings-row ' + cls;
    savEl.textContent = msg;
  } else {
    savEl.className = 'budget-savings-row';
    savEl.textContent = '';
  }

  const avg = cityAvgCost[budgetCity];
  const avgTotal = Object.values(avg).reduce((a,b) => a + b, 0);
  const tipEl = document.getElementById('budgetTip');
  if (total > avgTotal * 1.2) tipEl.textContent = `💡 Tip: Average monthly cost in ${budgetCity} is ₹${avgTotal.toLocaleString()}. You're spending ${Math.round((total/avgTotal-1)*100)}% more than average.`;
  else if (total < avgTotal * 0.8) tipEl.textContent = `✅ Great! Your budget is below the ${budgetCity} city average of ₹${avgTotal.toLocaleString()}.`;
  else tipEl.textContent = `📊 Your budget is close to the ${budgetCity} city average of ₹${avgTotal.toLocaleString()}/month.`;

  const avgCard = document.getElementById('budgetAvgCard');
  avgCard.innerHTML = `
    <div class="budget-card-title">City Average Costs — ${budgetCity}</div>
    ${Object.entries(avg).map(([k,v]) => {
      const labels = {pg:'🏠 PG/Rent',food:'🍽️ Food',transport:'🚌 Transport',internet:'📱 Internet',entertain:'🎬 Entertainment',misc:'🛍️ Misc'};
      return `<div class="avg-row"><span>${labels[k]||k}</span><span style="font-weight:600">₹${v.toLocaleString()}</span></div>`;
    }).join('')}
    <div class="avg-row" style="border-top:2px solid var(--border);padding-top:10px;margin-top:4px"><span style="font-weight:700">Total Average</span><span style="font-weight:700;color:var(--brand)">₹${Object.values(avg).reduce((a,b)=>a+b,0).toLocaleString()}</span></div>`;
}

// Budget initialized in main onload

// =====================================================
//  CHECKLIST
// =====================================================
const checklistData = [
  {
    category: '🚉 Arriving at the Station',
    items: [
      { id: 'c1', text: 'Exit the platform safely', sub: 'Follow exit boards — ask RPF if confused' },
      { id: 'c2', text: 'Collect all luggage', sub: 'Double-check overhead racks and under your seat' },
      { id: 'c3', text: 'Use prepaid auto/cab booth', sub: 'Fixed rates, no bargaining — safest option' },
      { id: 'c4', text: 'Note vehicle number before boarding', sub: 'Share with family/friends for safety' },
    ]
  },
  {
    category: '📱 First Things to Do',
    items: [
      { id: 'c5', text: 'Buy/activate a local SIM card', sub: 'Carry Aadhaar for new SIM. Jio/Airtel recommended.' },
      { id: 'c6', text: 'Withdraw some cash from ATM', sub: 'Keep ₹2000–3000 cash for initial expenses' },
      { id: 'c7', text: 'Save emergency numbers', sub: 'Police: 100, Ambulance: 108, Railway: 139' },
      { id: 'c8', text: 'Install Ola/Uber app', sub: 'For safe and transparent cab bookings' },
    ]
  },
  {
    category: '🏠 Finding a Place to Stay',
    items: [
      { id: 'c9', text: 'Search PGs on SheherSaathi', sub: 'Filter by city, budget, and gender preference' },
      { id: 'c10', text: 'Visit PG before paying advance', sub: 'Check room, bathroom, kitchen, and security' },
      { id: 'c11', text: 'Read rental agreement carefully', sub: 'Check lock-in period, notice period, and charges' },
      { id: 'c12', text: 'Click photos of the room condition', sub: 'Useful for getting deposit back later' },
    ]
  },
  {
    category: '🏙️ Settling in the City',
    items: [
      { id: 'c13', text: 'Learn local transport routes', sub: 'Metro, buses, auto routes near your area' },
      { id: 'c14', text: 'Find nearest grocery store', sub: 'Also check Blinkit/Zepto/Swiggy for delivery' },
      { id: 'c15', text: 'Locate nearest hospital/clinic', sub: 'Important for any medical emergency' },
      { id: 'c16', text: 'Open a bank account or link UPI', sub: 'Makes transactions much easier' },
      { id: 'c17', text: 'Connect with local community', sub: 'Join college WhatsApp groups, local Facebook groups' },
      { id: 'c18', text: 'Update your address with family', sub: 'Share PG address with at least 2 family members' },
    ]
  }
];

function renderChecklist() {
  const done = JSON.parse(localStorage.getItem('ss_checklist') || '[]');
  const total = checklistData.reduce((s, c) => s + c.items.length, 0);
  const completed = done.length;

  const fill = document.getElementById('checkProgressFill');
  const text = document.getElementById('checkProgressText');
  if (fill) fill.style.width = (total ? (completed/total*100) : 0) + '%';
  if (text) text.textContent = `${completed} / ${total} completed`;

  const wrap = document.getElementById('checklistItems');
  if (!wrap) return;

  wrap.innerHTML = checklistData.map(cat => `
    <div class="checklist-category">
      <div class="checklist-cat-header">${cat.category}</div>
      ${cat.items.map(item => `
        <div class="checklist-item ${done.includes(item.id) ? 'done' : ''}" onclick="toggleCheck('${item.id}')">
          <div class="ci-check">${done.includes(item.id) ? '✓' : ''}</div>
          <div class="ci-body">
            <div class="ci-text">${item.text}</div>
            <div class="ci-sub">${item.sub}</div>
          </div>
        </div>`).join('')}
    </div>`).join('');

  if (completed === total && total > 0) {
    wrap.innerHTML += `<div class="checklist-celebration">🎉<br><strong>All done! You're all set in your new city!</strong></div>`;
    document.querySelector('.checklist-celebration').style.display = 'block';
  }
}

function toggleCheck(id) {
  let done = JSON.parse(localStorage.getItem('ss_checklist') || '[]');
  if (done.includes(id)) done = done.filter(d => d !== id);
  else { done.push(id); addNotif('Checklist item completed! ✅'); }
  localStorage.setItem('ss_checklist', JSON.stringify(done));
  renderChecklist();
}

function resetChecklist() {
  if (!confirm('Reset all checklist items?')) return;
  localStorage.removeItem('ss_checklist');
  renderChecklist();
}

// =====================================================
//  AI ASSISTANT — smart local assistant for GitHub Pages
// =====================================================
let aiHistory = [];

async function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const msg = (input.value || '').trim();
  if (!msg) return;
  input.value = '';
  askAI(msg);
}

async function askAI(msg) {
  appendAIMessage(msg, 'user');
  showAITyping();
  aiHistory.push({ role: 'user', content: msg });

  setTimeout(() => {
    hideAITyping();
    const reply = getSmartFallback(msg);
    aiHistory.push({ role: 'assistant', content: reply });
    appendAIMessage(reply, 'bot');
  }, 450);
}

function detectCityFromMessage(message){
  const q = message.toLowerCase();
  return Object.keys(cityData).find(city => q.includes(city.toLowerCase())) || activeCity;
}

function rupee(num){ return '₹' + Number(num || 0).toLocaleString('en-IN'); }

function getTopPGs(city, maxBudget){
  return pgData
    .filter(p => p.city === city)
    .filter(p => !maxBudget || parseInt(p.price.replace(/\D/g,'')) <= maxBudget)
    .sort((a,b) => parseInt(a.price.replace(/\D/g,'')) - parseInt(b.price.replace(/\D/g,'')))
    .slice(0, 4);
}

function getBudgetFromText(text){
  const match = text.match(/(?:under|below|less than|upto|up to|₹|rs\.?\s*)\s*(\d{4,5})/i) || text.match(/(\d{4,5})/);
  return match ? parseInt(match[1], 10) : null;
}

function formatPGList(city, maxBudget){
  const pgs = getTopPGs(city, maxBudget);
  if(!pgs.length) return `I could not find PGs${maxBudget ? ` under ${rupee(maxBudget)}` : ''} in ${city}. Try increasing budget or checking nearby areas.`;
  return `${maxBudget ? `PGs under ${rupee(maxBudget)}` : 'Top budget PGs'} in ${city} 🏠:\n\n${pgs.map(p => `• **${p.name}** — ${p.price}/month, ${p.gender}, ${p.address}\n  Amenities: ${p.amenities} | Call: ${p.contact}`).join('\n')}`;
}

function getFareSummary(city){
  const data = cityData[city];
  if(!data) return `Use the 🚗 Fare Calc tab to estimate auto, cab, bike, and e-rickshaw prices.`;
  const firstFrom = data.fareFrom?.[0];
  const firstTo = data.fareTo?.[0];
  const sample = firstFrom && firstTo && data.fares?.[firstFrom.val]?.[firstTo.val];
  return sample
    ? `Use 🚗 Fare Calc for exact routes in ${city}. Sample: **${firstFrom.label} → ${firstTo.label}** is about ${sample.d}, ${sample.t}; auto ${sample.a}, cab ${sample.c}. Tip: confirm fare before boarding and share vehicle details at night.`
    : `Use the 🚗 Fare Calc tab for ${city}; select From and To to compare auto, cab, bike and e-rickshaw fares.`;
}

function getNearbySummary(city, type){
  const nearby = cityData[city]?.nearby || {};
  const key = type || 'hospital';
  const items = nearby[key] || nearby.hospital || [];
  if(!items.length) return `Open the 📍 Nearby tab to find hospitals, police stations, ATMs, food and transport points in ${city}.`;
  return `Useful ${key} places in ${city} 📍:\n\n${items.slice(0,4).map(x => `• **${x.name}** — ${x.dist}${x.desc ? ` (${x.desc})` : ''}`).join('\n')}\n\nOpen the Nearby tab for more categories.`;
}

function getGuideSummary(city){
  const steps = cityData[city]?.guide || [];
  if(!steps.length) return `Use the 🗺️ City Guide tab for arrival steps and local safety tips in ${city}.`;
  return `First-day plan for ${city} 🗺️:\n\n${steps.slice(0,5).map((s,i)=>`${i+1}. **${s.title}** — ${s.desc}${s.tip ? `\n   Tip: ${s.tip}` : ''}`).join('\n')}\n\nAlso complete the ✅ Checklist tab after arrival.`;
}

function getBudgetSummary(city){
  const avg = cityAvgCost[city];
  if(!avg) return `Use the 💰 Budget Planner tab to customize rent, food, transport and savings.`;
  const total = Object.values(avg).reduce((a,b)=>a+b,0);
  return `Average monthly budget for ${city} 💰:\n\n• PG/Rent: ${rupee(avg.pg)}\n• Food: ${rupee(avg.food)}\n• Transport: ${rupee(avg.transport)}\n• Internet: ${rupee(avg.internet)}\n• Extra/Misc: ${rupee(avg.entertain + avg.misc)}\n\nEstimated total: **${rupee(total)}/month**. Use the Budget Planner tab to adjust it to your income.`;
}

function getChecklistSummary(){
  return `New city checklist ✅:\n\n1. Share live location with family.\n2. Use prepaid auto/cab or verified ride apps.\n3. Visit PG before paying advance.\n4. Save emergency numbers: 112, 100, 108, 101.\n5. Keep ID proof, cash, charger and water handy.\n\nOpen the Checklist tab to track every step.`;
}

function getSmartFallback(msg) {
  const m = msg.toLowerCase();
  const city = detectCityFromMessage(msg);
  const budget = getBudgetFromText(msg);

  if (m.includes('pg') || m.includes('hostel') || m.includes('room') || m.includes('rent')) {
    return `${formatPGList(city, budget)}\n\nWant a faster shortlist? Tell me your budget, gender preference, and area (example: “girls PG under 8000 in Pune”).`;
  }

  if (m.includes('fare') || m.includes('auto') || m.includes('cab') || m.includes('taxi') || m.includes('transport') || m.includes('station')) {
    return getFareSummary(city);
  }

  if (m.includes('budget') || m.includes('cost') || m.includes('expensive') || m.includes('money') || m.includes('monthly')) {
    return getBudgetSummary(city);
  }

  if (m.includes('food') || m.includes('eat') || m.includes('restaurant')) {
    const foods = { Bhopal: 'Poha-Jalebi, Bhutte ka Kees, and lake-side snacks', Delhi: 'Paranthe Wali Gali, momos, chole bhature, and Karim\'s', Mumbai: 'Vada Pav, Pav Bhaji, misal and cutting chai', Pune: 'Misal Pav, FC Road cafes, and Maharashtrian thali', Patna: 'Litti-Chokha, Sattu Paratha, and local sweets' };
    return `Must-try food in ${city} 🍽️: **${foods[city] || 'popular local street food'}**. For nearby options, open the 📍 Nearby tab and choose Food.`;
  }

  if (m.includes('hospital') || m.includes('police') || m.includes('atm') || m.includes('nearby')) {
    const type = m.includes('police') ? 'police' : m.includes('atm') ? 'atm' : m.includes('food') ? 'food' : m.includes('transport') ? 'transport' : 'hospital';
    return getNearbySummary(city, type);
  }

  if (m.includes('emergency') || m.includes('help') || m.includes('unsafe') || m.includes('sos')) {
    return `Emergency help for ${city} 🆘:\n\n• All India Emergency: **112**\n• Police: **100**\n• Ambulance: **108**\n• Fire: **101**\n• Railway: **139**\n\nIf you feel unsafe, move to a public place, call 112, and share your live location. The Helplines tab has city-specific numbers.`;
  }

  if (m.includes('guide') || m.includes('arrive') || m.includes('first day') || m.includes('new city') || m.includes('tips')) {
    return getGuideSummary(city);
  }

  if (m.includes('checklist') || m.includes('documents') || m.includes('carry')) {
    return getChecklistSummary();
  }

  const variants = [
    `I can help with ${city} PGs, fares, budgets, nearby places and safety. Try asking: “PG under 7000 in ${city}” or “fare from station in ${city}”.`,
    `For ${city}, I can make a PG shortlist, estimate monthly cost, suggest arrival steps, or show emergency contacts. What do you want first?`,
    `Tell me your city + need, for example: “best areas in ${city}”, “girls PG under 9000”, “monthly budget”, or “nearby hospital”.`
  ];
  return variants[aiHistory.length % variants.length];
}

function escapeHTML(value){
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function appendAIMessage(text, type) {
  const el = document.getElementById('aiMessages');
  if (!el) return;
  const formatted = escapeHTML(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  const div = document.createElement('div');
  div.className = `ai-msg ${type}`;
  div.innerHTML = `
    <div class="ai-avatar">${type === 'bot' ? '🤖' : '👤'}</div>
    <div class="ai-bubble">${formatted}</div>`;
  el.appendChild(div);
  el.scrollTop = el.scrollHeight;
}

function showAITyping() {
  const el = document.getElementById('aiMessages');
  if (!el) return;
  hideAITyping();
  const div = document.createElement('div');
  div.className = 'ai-msg bot';
  div.id = 'aiTyping';
  div.innerHTML = `<div class="ai-avatar">🤖</div><div class="ai-bubble"><div class="ai-typing"><span></span><span></span><span></span></div></div>`;
  el.appendChild(div);
  el.scrollTop = el.scrollHeight;
}

function hideAITyping() {
  const el = document.getElementById('aiTyping');
  if (el) el.remove();
}

// =====================================================
//  INIT NEW FEATURES — handled in main window.onload
// =====================================================

// Close compare dropdown on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.compare-search-bar')) {
    const dd = document.getElementById('compareDropdown');
    if (dd) dd.classList.add('hidden');
  }
});


// =====================================================
//  STUDENT SERVICES: TIFFIN, FITNESS, EXPENSES, MARKET, TECH
// =====================================================
const tiffinServices = [
  {city:'Bhopal', name:'Protein Bowl Tiffins', price:'₹3,200/mo', tag:'High Protein', desc:'Paneer, dal, eggs add-on, student lunch/dinner plans', contact:'9876543201'},
  {city:'Bhopal', name:'MP Nagar Mess Club', price:'₹2,600/mo', tag:'Budget', desc:'Home-style veg thali, monthly student mess', contact:'9876543202'},
  {city:'Delhi', name:'North Campus Tiffin Co.', price:'₹3,800/mo', tag:'Student Plan', desc:'Veg/non-veg meals with weekly menu rotation', contact:'9876543203'},
  {city:'Mumbai', name:'Andheri Meal Box', price:'₹4,500/mo', tag:'Local Food', desc:'Maharashtrian meals, breakfast add-on available', contact:'9876543204'},
  {city:'Pune', name:'Hinjawadi Fit Meals', price:'₹4,200/mo', tag:'Gym Diet', desc:'Protein meals, calorie counted subscriptions', contact:'9876543205'},
  {city:'Patna', name:'Litti Lunch Service', price:'₹2,400/mo', tag:'Local', desc:'Bihari home food, sattvik and regular thali', contact:'9876543206'},
];

const fitnessServices = [
  {city:'Bhopal', name:'MP Nagar Fitness Hub', price:'₹999/mo', tag:'Student Discount', desc:'Cardio, weights, trainers, evening batches', contact:'9876500101'},
  {city:'Delhi', name:'Karol Bagh Iron Club', price:'₹1,499/mo', tag:'Weights', desc:'Strength floor, cardio, locker facility', contact:'9876500102'},
  {city:'Mumbai', name:'Andheri Studio Fit', price:'₹1,999/mo', tag:'Classes', desc:'Zumba, yoga, HIIT and personal training', contact:'9876500103'},
  {city:'Pune', name:'Hinjawadi Active Gym', price:'₹1,299/mo', tag:'Tech Park', desc:'Flexible timings for students and interns', contact:'9876500104'},
  {city:'Patna', name:'Kankarbagh Fitness Point', price:'₹899/mo', tag:'Budget', desc:'Weights, cardio and basic trainer support', contact:'9876500105'},
];

const techResources = [
  {name:'DSA Starter Pack', tag:'Programming', desc:'Arrays, strings, recursion, DP roadmap and practice links'},
  {name:'Semester Notes Vault', tag:'Notes', desc:'DBMS, OS, CN, OOP summaries for quick revision'},
  {name:'Mini Project Templates', tag:'Projects', desc:'Portfolio, hostel finder, expense tracker and API templates'},
  {name:'ML Beginner Kit', tag:'AI/ML', desc:'Python notebooks, datasets, regression/classification basics'},
  {name:'Placement Prep Board', tag:'Interview', desc:'Resume checklist, HR questions, coding round plan'},
];

function serviceCard(item, icon){
  return `<div class="service-card">
    <div class="service-top"><span class="service-icon">${icon}</span><span class="service-tag">${escapeHTML(item.tag)}</span></div>
    <h3>${escapeHTML(item.name)}</h3>
    <p>${escapeHTML(item.desc)}</p>
    <div class="service-meta"><strong>${escapeHTML(item.price || 'Free')}</strong>${item.contact ? `<a href="tel:${item.contact}">Contact</a>` : '<a href="#" onclick="return false">Open</a>'}</div>
  </div>`;
}

function renderStudentServices(){
  const tiffinGrid = document.getElementById('tiffinGrid');
  if(tiffinGrid){
    const list = tiffinServices.filter(x => x.city === activeCity || !x.city).slice(0, 6);
    tiffinGrid.innerHTML = list.map(x => serviceCard(x, '🍱')).join('') || '<div class="no-results">No tiffin services added for this city yet.</div>';
  }
  const fitnessGrid = document.getElementById('fitnessGrid');
  if(fitnessGrid){
    const list = fitnessServices.filter(x => x.city === activeCity || !x.city).slice(0, 6);
    fitnessGrid.innerHTML = list.map(x => serviceCard(x, '💪')).join('') || '<div class="no-results">No fitness services added for this city yet.</div>';
  }
  const techGrid = document.getElementById('techGrid');
  if(techGrid) techGrid.innerHTML = techResources.map(x => serviceCard(x, '💻')).join('');
}

function getExpenses(){ return JSON.parse(localStorage.getItem('ss_expenses') || '[]'); }
function renderExpenses(){
  const summary = document.getElementById('expenseSummary');
  const ledger = document.getElementById('expenseLedger');
  if(!summary || !ledger) return;
  const items = getExpenses();
  const total = items.reduce((s,x)=>s+x.amount,0);
  const shared = items.filter(x=>x.type==='Shared').reduce((s,x)=>s+x.amount,0);
  summary.innerHTML = `<div class="expense-total"><span>Total Spent</span><strong>₹${total.toLocaleString()}</strong></div><div class="expense-total"><span>Shared Bills</span><strong>₹${shared.toLocaleString()}</strong></div>`;
  ledger.innerHTML = items.length ? items.map(x => `<div class="ledger-row"><div><strong>${escapeHTML(x.title)}</strong><span>${x.type} · ${x.people} people · ${new Date(x.time).toLocaleDateString('en-IN')}</span></div><b>₹${x.amount.toLocaleString()}</b><small>₹${Math.ceil(x.amount/x.people).toLocaleString()}/person</small></div>`).join('') : '<div class="roommate-empty">No expenses yet. Add your first bill.</div>';
}
function addExpense(){
  const title = (document.getElementById('expTitle')?.value || '').trim();
  const amount = parseInt(document.getElementById('expAmount')?.value || '0');
  const type = document.getElementById('expType')?.value || 'Personal';
  const people = parseInt(document.getElementById('expPeople')?.value || '1');
  if(!title || !amount){ alert('Please enter expense title and amount.'); return; }
  const items = getExpenses();
  items.unshift({title, amount, type, people: type==='Shared'?people:1, time: Date.now()});
  localStorage.setItem('ss_expenses', JSON.stringify(items.slice(0,50)));
  ['expTitle','expAmount'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  renderExpenses();
}
function resetExpenses(){ if(confirm('Reset expense ledger?')){ localStorage.removeItem('ss_expenses'); renderExpenses(); } }

function getMarketItems(){
  const saved = JSON.parse(localStorage.getItem('ss_market') || '[]');
  return saved.concat([
    {item:'Desert Cooler', category:'Coolers & Bedding', price:2200, city:activeCity},
    {item:'Study Table', category:'Mattresses & Furniture', price:1200, city:activeCity},
    {item:'Engineering Books Set', category:'Books & Study Materials', price:900, city:activeCity},
    {item:'Induction Cooktop', category:'Kitchen Items', price:1500, city:activeCity},
  ]);
}
function renderMarketplace(){
  const grid = document.getElementById('marketGrid');
  if(!grid) return;
  grid.innerHTML = getMarketItems().slice(0,12).map(x => serviceCard({name:x.item, tag:x.category, price:'₹'+Number(x.price).toLocaleString(), desc:`Available in ${x.city}. Contact seller from marketplace listing.`, contact:''}, '🛒')).join('');
}
function addMarketItem(){
  const item = (document.getElementById('marketItem')?.value || '').trim();
  const category = document.getElementById('marketCategory')?.value || 'General';
  const price = parseInt(document.getElementById('marketPrice')?.value || '0');
  if(!item || !price){ alert('Please add item name and price.'); return; }
  const saved = JSON.parse(localStorage.getItem('ss_market') || '[]');
  saved.unshift({item, category, price, city: activeCity});
  localStorage.setItem('ss_market', JSON.stringify(saved.slice(0,30)));
  ['marketItem','marketPrice'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  renderMarketplace();
}

// =====================================================
//  INTENT HUB + ROOMMATE CONNECT
// =====================================================
function handleIntent(type){
  const routes = { pg:'pg', navigate:'guide', ai:'ai', food:'tiffin', fitness:'fitness', transport:'fare', expense:'expense', market:'market', tech:'tech', emergency:'helpline' };
  const tab = document.querySelector(`[data-tab=${type === 'transport' ? 'fare' : type === 'emergency' ? 'helpline' : type === 'navigate' || type === 'food' ? 'nearby' : type === 'roommates' ? 'pg' : type}]`);
  if(type === 'pg'){
    switchTab('pg', document.querySelector('[data-tab=pg]'));
    document.getElementById('pgSearch')?.focus();
    return;
  }
  if(type === 'roommates'){
    openModal('roommateModal');
    return;
  }
  const tab = routes[type];
  if(tab) switchTab(tab, document.querySelector(`[data-tab=${tab}]`));
  if(type === 'ai'){
    const input = document.getElementById('aiInput');
    if(input){ input.value = 'Help me settle in ' + activeCity; input.focus(); }
  }
}


  if(type === 'navigate'){
    switchTab('guide', document.querySelector('[data-tab=guide]'));
    return;
  }
  if(type === 'ai'){
    switchTab('ai', document.querySelector('[data-tab=ai]'));
    const input = document.getElementById('aiInput');
    if(input){ input.value = 'Help me settle in ' + activeCity; input.focus(); }
    return;
  }
  if(type === 'food'){
    switchTab('nearby', document.querySelector('[data-tab=nearby]'));
    const btn = Array.from(document.querySelectorAll('.cat-btn')).find(b => b.textContent.toLowerCase().includes('food'));
    showCategory('food', btn || document.querySelector('.cat-btn'));
    return;
  }
  if(type === 'transport'){
    switchTab('fare', document.querySelector('[data-tab=fare]'));
    return;
  }
  if(type === 'roommates'){
    openModal('roommateModal');
    return;
  }
  if(type === 'emergency'){
    switchTab('helpline', document.querySelector('[data-tab=helpline]'));
    return;
  }
  if(tab) switchTab(type, tab);
}

function getRoommatePosts(){
  return JSON.parse(localStorage.getItem('ss_roommates') || '[]');
}

function renderRoommatePosts(){
  const el = document.getElementById('roommateList');
  if(!el) return;
  const posts = getRoommatePosts();
  if(!posts.length){
    el.innerHTML = '<div class="roommate-empty">No roommate posts yet. Be the first to add one.</div>';
    return;
  }
  el.innerHTML = posts.slice(0, 6).map(p => `
    <div class="roommate-item">
      <strong>${escapeHTML(p.name)}</strong>
      <span>${escapeHTML(p.city)} · ${escapeHTML(p.pref)}</span>
    </div>`).join('');
}

function saveRoommatePost(){
  const name = (document.getElementById('roommateName')?.value || localStorage.getItem('ss_user') || 'Guest').trim();
  const city = document.getElementById('roommateCity')?.value || activeCity;
  const pref = (document.getElementById('roommatePref')?.value || '').trim();
  if(!pref){ alert('Please add your roommate preference or budget.'); return; }
  const posts = getRoommatePosts();
  posts.unshift({ name, city, pref, time: Date.now() });
  localStorage.setItem('ss_roommates', JSON.stringify(posts.slice(0, 20)));
  document.getElementById('roommatePref').value = '';
  addNotif('Roommate interest posted locally 👥');
  renderRoommatePosts();
}
```

## SECTION 4 — data.js

File name: `data.js`

```

## data.js

```javascript
const pgData = [
  {name:"Shri Ram Boys Hostel",city:"Bhopal",price:"₹5000",contact:"8123869239",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",address:"Near Hamidia Hospital, Bhopal",amenities:"WiFi, Meals, Laundry"},
  {name:"City Boys Hostel",city:"Bhopal",price:"₹6000",contact:"9876543210",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",address:"MP Nagar Zone 1, Bhopal",amenities:"WiFi, Parking, Security"},
  {name:"Lake View Girls PG",city:"Bhopal",price:"₹6500",contact:"9111111111",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",address:"Near Upper Lake, Bhopal",amenities:"WiFi, Meals, AC, Security"},
  {name:"MP Nagar Comfort PG",city:"Bhopal",price:"₹5500",contact:"9222222222",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Boys",address:"MP Nagar Zone 2, Bhopal",amenities:"WiFi, Meals, Laundry"},
  {name:"Arera Colony PG",city:"Bhopal",price:"₹7000",contact:"9300011122",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",address:"Arera Colony E-7, Bhopal",amenities:"WiFi, AC, Meals, Gym"},
  {name:"Patna City Boys PG",city:"Patna",price:"₹5000",contact:"9333333333",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",address:"Fraser Road, Patna",amenities:"WiFi, Meals, Security"},
  {name:"Girls Comfort Patna",city:"Patna",price:"₹6000",contact:"9444444444",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",address:"Bailey Road, Patna",amenities:"WiFi, Meals, AC, Laundry"},
  {name:"Kankarbagh Hostel",city:"Patna",price:"₹5500",contact:"9555555555",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Boys",address:"Kankarbagh Colony, Patna",amenities:"WiFi, Parking, Security"},
  {name:"Patna Premium PG",city:"Patna",price:"₹7000",contact:"9666666666",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Girls",address:"Rajendra Nagar, Patna",amenities:"WiFi, AC, Meals, CCTV"},
  {name:"Delhi Comfort PG",city:"Delhi",price:"₹8000",contact:"9812345678",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Boys",address:"Karol Bagh, New Delhi",amenities:"WiFi, AC, Meals, Laundry"},
  {name:"North Delhi Boys Hostel",city:"Delhi",price:"₹7000",contact:"9898989898",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Boys",address:"Paharganj, New Delhi",amenities:"WiFi, Meals, Security"},
  {name:"Lajpat Nagar Girls PG",city:"Delhi",price:"₹9000",contact:"9711223344",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",address:"Lajpat Nagar Part 2, Delhi",amenities:"WiFi, AC, Meals, CCTV, Laundry"},
  {name:"Mumbai Stay PG",city:"Mumbai",price:"₹10000",contact:"9765432109",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Boys",address:"Andheri West, Mumbai",amenities:"WiFi, AC, Meals, Gym"},
  {name:"Andheri Girls PG",city:"Mumbai",price:"₹9000",contact:"9988776655",image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5",gender:"Girls",address:"Andheri East, Mumbai",amenities:"WiFi, AC, Meals, Security, CCTV"},
  {name:"Dadar Boys Hostel",city:"Mumbai",price:"₹8500",contact:"9870011223",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",address:"Dadar West, Mumbai",amenities:"WiFi, Meals, Parking"},
  {name:"Pune City Hostel",city:"Pune",price:"₹7000",contact:"8877665544",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Boys",address:"Shivajinagar, Pune",amenities:"WiFi, Meals, Laundry"},
  {name:"Girls Comfort PG Pune",city:"Pune",price:"₹8000",contact:"7766554433",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Girls",address:"Koregaon Park, Pune",amenities:"WiFi, AC, Meals, CCTV"},
  {name:"Hinjawadi Tech PG",city:"Pune",price:"₹9000",contact:"9922334455",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",address:"Hinjawadi Phase 1, Pune",amenities:"WiFi, AC, Meals, Gym, Parking"},
  {name:"CityNest Private Flat",city:"Bengaluru",price:"₹12000",contact:"9000010001",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Both",type:"Private Flat",address:"BTM Layout, Bengaluru",amenities:"Furnished, WiFi, Kitchen, Security"},
  {name:"Koramangala Student PG",city:"Bengaluru",price:"₹9500",contact:"9000010002",image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5",gender:"Girls",type:"PG",address:"Koramangala, Bengaluru",amenities:"Meals, WiFi, Laundry, CCTV"},
  {name:"Ameerpet Budget PG",city:"Hyderabad",price:"₹7500",contact:"9000010003",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",type:"PG",address:"Ameerpet, Hyderabad",amenities:"WiFi, Meals, Study Table"},
  {name:"Hitech City Flat Share",city:"Hyderabad",price:"₹11000",contact:"9000010004",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",type:"Private Flat",address:"Hitech City, Hyderabad",amenities:"AC, Furnished, WiFi, Kitchen"},
  {name:"Anna Nagar Girls PG",city:"Chennai",price:"₹8500",contact:"9000010005",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",type:"PG",address:"Anna Nagar, Chennai",amenities:"Meals, WiFi, Laundry, Security"},
  {name:"Salt Lake Boys Hostel",city:"Kolkata",price:"₹7000",contact:"9000010006",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",type:"PG",address:"Salt Lake, Kolkata",amenities:"WiFi, Meals, Parking"},
  {name:"Sector 62 Tech PG",city:"Noida",price:"₹8000",contact:"9000010007",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Both",type:"PG",address:"Sector 62, Noida",amenities:"WiFi, AC, Meals, CCTV"},
  {name:"Cyber City Flat",city:"Gurugram",price:"₹13500",contact:"9000010008",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Both",type:"Private Flat",address:"DLF Phase 3, Gurugram",amenities:"Furnished, AC, Kitchen, Security"},
  {name:"Malviya Nagar PG",city:"Jaipur",price:"₹6500",contact:"9000010009",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Girls",type:"PG",address:"Malviya Nagar, Jaipur",amenities:"Meals, WiFi, Laundry"},
  {name:"SG Highway Student Flat",city:"Ahmedabad",price:"₹9000",contact:"9000010010",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",type:"Private Flat",address:"SG Highway, Ahmedabad",amenities:"Furnished, WiFi, Kitchen"},
  {name:"Hazratganj Comfort PG",city:"Lucknow",price:"₹6000",contact:"9000010011",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",type:"PG",address:"Hazratganj, Lucknow",amenities:"Meals, WiFi, Security"},
  {name:"Lanka Boys Hostel",city:"Varanasi",price:"₹4500",contact:"9000010012",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",type:"PG",address:"Lanka, Varanasi",amenities:"WiFi, Meals, Study Room"},
  {name:"Kalinga Nagar PG",city:"Bhubaneswar",price:"₹6500",contact:"9000010013",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Both",type:"PG",address:"Patia, Bhubaneswar",amenities:"WiFi, Meals, AC"},
  {name:"Indrapuri Student PG",city:"Indore",price:"₹5500",contact:"9000010014",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",type:"PG",address:"Indrapuri, Indore",amenities:"Meals, WiFi, Parking"},
  {name:"Civil Lines Girls PG",city:"Nagpur",price:"₹6500",contact:"9000010015",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",type:"PG",address:"Civil Lines, Nagpur",amenities:"WiFi, Meals, CCTV"},
  {name:"Phase 7 Shared Flat",city:"Chandigarh",price:"₹9500",contact:"9000010016",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Both",type:"Private Flat",address:"Mohali Phase 7, Chandigarh",amenities:"Furnished, Kitchen, WiFi"},
  {name:"Kankarbagh Private Flat",city:"Patna",price:"₹8500",contact:"9000010017",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Both",type:"Private Flat",address:"Kankarbagh, Patna",amenities:"Furnished, Kitchen, WiFi, Balcony"},
  {name:"Karol Bagh Shared Flat",city:"Delhi",price:"₹12000",contact:"9000010018",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",type:"Private Flat",address:"Karol Bagh, Delhi",amenities:"Furnished, AC, WiFi, Kitchen"},
  {name:"Vesu Student PG",city:"Surat",price:"₹6500",contact:"9000010019",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Both",type:"PG",address:"Vesu, Surat",amenities:"WiFi, Meals, Laundry"},
  {name:"Kakkanad Tech Flat",city:"Kochi",price:"₹9000",contact:"9000010020",image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb",gender:"Both",type:"Private Flat",address:"Kakkanad, Kochi",amenities:"Furnished, WiFi, Kitchen"},
  {name:"Peelamedu Boys Hostel",city:"Coimbatore",price:"₹6000",contact:"9000010021",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",gender:"Boys",type:"PG",address:"Peelamedu, Coimbatore",amenities:"WiFi, Meals, Study Room"},
  {name:"Rajpur Road Girls PG",city:"Dehradun",price:"₹7000",contact:"9000010022",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",type:"PG",address:"Rajpur Road, Dehradun",amenities:"Meals, WiFi, Security"},
  {name:"Lalpur Comfort PG",city:"Ranchi",price:"₹5500",contact:"9000010023",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",gender:"Both",type:"PG",address:"Lalpur, Ranchi",amenities:"WiFi, Meals, Parking"},
  {name:"GS Road Shared Flat",city:"Guwahati",price:"₹8000",contact:"9000010024",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",gender:"Both",type:"Private Flat",address:"GS Road, Guwahati",amenities:"Furnished, Kitchen, WiFi"},
  {name:"Kota Road Student PG",city:"Raipur",price:"₹6000",contact:"9000010025",image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511",gender:"Boys",type:"PG",address:"Kota Road, Raipur",amenities:"WiFi, Meals, Laundry"},
  {name:"Napier Town Girls PG",city:"Jabalpur",price:"₹5200",contact:"9000010026",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",gender:"Girls",type:"PG",address:"Napier Town, Jabalpur",amenities:"Meals, WiFi, CCTV"},
];
];

```
