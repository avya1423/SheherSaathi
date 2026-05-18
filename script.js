// ==========================================
// 1. INITIAL STATE & GLOBAL VARIABLES
// ==========================================
let currentCity = 'Bhopal';
let currentUser = JSON.parse(localStorage.getItem('ss_user')) || null;
let savedPGs = JSON.parse(localStorage.getItem('ss_saved_pgs')) || [];
let checklistState = JSON.parse(localStorage.getItem('ss_checklist')) || {};

// ==========================================
// ==========================================
// 2. LOADER & APP INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // Hide Loader smoothly after page loads
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.4s ease';
            
            // 400ms baad DOM se completely hata do taaki click ho sake
            setTimeout(() => {
                loader.remove();
            }, 400);
        }
    }, 1200);

    // Initialize UI Component states
    checkAuthStatus();
    initChecklist();
    populateFareDropdowns();
    renderPGs();
    initNearby();
});
// ==========================================
// 3. TAB SWITCHING (SPA LOGIC)
// ==========================================
function goTab(tabId) {
    // Hide all sections
    document.querySelectorAll('.sec').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Show target section
    const targetSec = document.getElementById(`sec-${tabId}`);
    if (targetSec) {
        targetSec.classList.add('active');
    }

    // Auto scroll to tabs view on mobile for better UX
    document.querySelector('.tabbar').scrollIntoView({ behavior: 'smooth' });
}

function setTabActive(button) {
    document.querySelectorAll('.tb').forEach(tab => {
        tab.classList.remove('active');
    });
    button.classList.add('active');
}

// ==========================================
// 4. AUTHENTICATION & MODALS LOGIC
// ==========================================
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function showAuth(type) {
    const tabs = document.querySelectorAll('.atab');
    if (type === 'in') {
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        document.getElementById('formIn').style.display = 'block';
        document.getElementById('formUp').style.display = 'none';
    } else {
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
        document.getElementById('formIn').style.display = 'none';
        document.getElementById('formUp').style.display = 'block';
    }
}

// Password toggle eye button
function tpw(id) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function checkAuthStatus() {
    const loginModal = document.getElementById('loginModal');
    if (!currentUser) {
        if (loginModal) loginModal.classList.remove('overlay-hidden'); // Show if not logged in
    } else {
        if (loginModal) loginModal.classList.add('hidden');
        document.getElementById('pmName').textContent = currentUser.name;
        document.getElementById('pmEmail').textContent = currentUser.email;
        document.getElementById('nbInit').textContent = currentUser.name.charAt(0).toUpperCase();
        document.getElementById('pmInit').textContent = currentUser.name.charAt(0).toUpperCase();
    }
}

function doLogin() {
    const name = document.getElementById('inName').value.trim();
    const email = document.getElementById('inEmail').value.trim();
    if(!name || !email) return alert("Please fill details");

    currentUser = { name: name, email: email, isGuest: false };
    localStorage.setItem('ss_user', JSON.stringify(currentUser));
    checkAuthStatus();
}

function doGuest() {
    currentUser = { name: "Guest User", email: "guest@shehersaathi.com", isGuest: true };
    localStorage.setItem('ss_user', JSON.stringify(currentUser));
    checkAuthStatus();
}

function logout() {
    localStorage.removeItem('ss_user');
    currentUser = null;
    location.reload();
}

// Dropdowns interface toggles
function togglePMenu() { document.getElementById('pMenu').classList.toggle('hidden'); }
function toggleNotif() { document.getElementById('notifPanel').classList.toggle('hidden'); }

// ==========================================
// 5. PG FINDER CORE ENGINE
// ==========================================
function switchCity(cityName, element) {
    currentCity = cityName;
    document.querySelectorAll('.cpill').forEach(pill => pill.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('pgHead').textContent = `PGs in ${cityName}`;
    renderPGs();
    populateFareDropdowns();
    initNearby();
}

function renderPGs() {
    const grid = document.getElementById('pgGrid');
    if (!grid) return;
    grid.innerHTML = "";

    // Fallback if data.js is missing or empty
    const cityData = (typeof pg_database !== 'undefined' && pg_database[currentCity]) ? pg_database[currentCity] : [];
    
    // Filters fetching
    const query = document.getElementById('pgQ').value.toLowerCase();
    const gender = document.getElementById('pgG').value;
    const priceLimit = document.getElementById('pgP').value;
    const sortVal = document.getElementById('pgSrt').value;

    let filtered = cityData.filter(pg => {
        const matchesQuery = pg.name.toLowerCase().includes(query) || pg.address.toLowerCase().includes(query);
        const matchesGender = gender === "" || pg.gender === gender || pg.gender === "Both";
        const matchesPrice = priceLimit === "" || pg.price <= parseInt(priceLimit);
        return matchesQuery && matchesGender && matchesPrice;
    });

    // Sorting Logic
    if (sortVal === "asc") filtered.sort((a,b) => a.price - b.price);
    if (sortVal === "desc") filtered.sort((a,b) => b.price - a.price);
    if (sortVal === "rating") filtered.sort((a,b) => b.rating - a.rating);

    document.getElementById('pgCount').textContent = `${filtered.length} properties found`;

    if(filtered.length === 0) {
        grid.innerHTML = `<p class="cmp-empty">No PGs found matching your criteria.</p>`;
        return;
    }

    filtered.forEach(pg => {
        const isSaved = savedPGs.includes(pg.id);
        const card = document.createElement('div');
        card.className = 'card pg-card';
        card.innerHTML = `
            <div class="pg-img-holder" style="background:#e2e8f0; height:160px; display:flex; align-items:center; justify-content:center; border-radius:8px; position:relative;">
               <span style="font-size:3rem;">🏢</span>
               <button class="fav-btn" onclick="toggleSavePG('${pg.id}', this)" style="position:absolute; top:10px; right:10px; background:white; border:none; border-radius:50%; width:32px; height:32px; cursor:pointer;">${isSaved?'❤️':'🤍'}</button>
            </div>
            <div class="pg-details" style="padding:12px 0 0 0;">
               <span class="chip-gen ${pg.gender.toLowerCase()}">${pg.gender}</span>
               <h4 style="margin:8px 0 4px 0;">${pg.name}</h4>
               <p style="font-size:0.85rem; color:#64748b; margin-bottom:8px;">📍 ${pg.address}</p>
               <div style="display:flex; justify-content:between; align-items:center;">
                  <strong style="color:#2563eb; font-size:1.1rem;">₹${pg.price}/mo</strong>
                  <button class="btn-blue-sm" onclick="showPGDetail('${pg.id}')" style="padding:6px 12px; font-size:0.8rem;">View Details</button>
               </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleSavePG(id, btn) {
    if(savedPGs.includes(id)) {
        savedPGs = savedPGs.filter(i => i !== id);
        btn.textContent = '🤍';
    } else {
        savedPGs.push(id);
        btn.textContent = '❤️';
    }
    localStorage.setItem('ss_saved_pgs', JSON.stringify(savedPGs));
}

function showPGDetail(id) {
    const modal = document.getElementById('pgDetailModal');
    const container = document.getElementById('pgDetail');
    
    // Find PG item from database
    let found = null;
    if (typeof pg_database !== 'undefined') {
        Object.keys(pg_database).forEach(c => {
            let p = pg_database[c].find(i => i.id === id);
            if(p) found = p;
        });
    }

    if(!found) return alert("Details not found!");

    container.innerHTML = `
        <h4>${found.name} (${found.gender})</h4>
        <p><b>Rent:</b> ₹${found.price} per month</p>
        <p><b>Location:</b> ${found.address}, ${currentCity}</p>
        <p><b>Amenities:</b> ${found.amenities || 'WiFi, Power Backup, RO Water, Security'}</p>
        <p><b>Contact Owner:</b> <a href="tel:${found.contact || '9534196255'}">${found.contact || '9534196255'}</a></p>
    `;
    openModal('pgDetailModal');
}

// Add Custom PG Logic
function addPG() {
    const name = document.getElementById('nPGName').value;
    const city = document.getElementById('nPGCity').value;
    const rent = document.getElementById('nPGRent').value;
    const gen = document.getElementById('nPGGen').value;
    const phone = document.getElementById('nPGPhone').value;

    if(!name || !rent || !phone) return alert("Please fill required fields!");

    const newObj = {
        id: "custom_" + Date.now(),
        name: name,
        price: parseInt(rent),
        gender: gen,
        address: document.getElementById('nPGAddr').value || "Local Area",
        contact: phone,
        rating: 4.0
    };

    if(typeof pg_database !== 'undefined') {
        if(!pg_database[city]) pg_database[city] = [];
        pg_database[city].unshift(newObj);
    }
    
    alert("PG Added Successfully!");
    closeModal('addPGModal');
    renderPGs();
}

// ==========================================
// 6. FARE CALCULATOR MODULE
// ==========================================
const routeData = {
    "Bhopal": [
        {from: "MP Nagar", to: "Bhopal Station", dist: 6.5, time: "20 mins"},
        {from: "Habibganj (Rani Kamlapati)", to: "MP Nagar", dist: 3.2, time: "10 mins"},
        {from: "Indrapuri", to: " Lalghati", dist: 12, time: "35 mins"}
    ],
    "Delhi": [
        {from: "New Delhi Railway Station", to: "Connaught Place", dist: 2.1, time: "8 mins"},
        {from: "Laxmi Nagar", to: "IIT Delhi", dist: 16.5, time: "45 mins"}
    ]
};

function populateFareDropdowns() {
    const fromSelect = document.getElementById('fareFrom');
    const toSelect = document.getElementById('fareTo');
    if(!fromSelect || !toSelect) return;

    fromSelect.innerHTML = '<option value="">Select source...</option>';
    toSelect.innerHTML = '<option value="">Select destination...</option>';

    const routes = routeData[currentCity] || [];
    let sources = [...new Set(routes.map(r => r.from))];
    let dests = [...new Set(routes.map(r => r.to))];

    sources.forEach(s => fromSelect.innerHTML += `<option value="${s}">${s}</option>`);
    dests.forEach(d => toSelect.innerHTML += `<option value="${d}">${d}</option>`);
}

function calcFare() {
    const from = document.getElementById('fareFrom').value;
    const to = document.getElementById('fareTo').value;
    const resultBox = document.getElementById('fareResult');

    if(!from || !to) {
        resultBox.classList.add('hidden');
        return;
    }

    const routes = routeData[currentCity] || [];
    const match = routes.find(r => r.from === from && r.to === to);

    resultBox.classList.remove('hidden');

    if(match) {
        const d = match.dist;
        document.getElementById('fDist').textContent = `📏 ${d} km`;
        document.getElementById('fTime').textContent = `⏱️ ${match.time}`;
        document.getElementById('fAuto').textContent = `₹${Math.round(d * 12 + 20)}`;
        document.getElementById('fCab').textContent = `₹${Math.round(d * 18 + 50)}`;
        document.getElementById('fBike').textContent = `₹${Math.round(d * 7 + 15)}`;
        document.getElementById('fErick').textContent = `₹${Math.round(d * 10)}`;
        document.getElementById('fNote').textContent = "Rates may slightly vary based on high-traffic hours and peak night times.";
    } else {
        // Dynamic fallback mockup generation if data doesn't match perfectly
        let randomDist = Math.floor(Math.random() * 10) + 3;
        document.getElementById('fDist').textContent = `📏 ${randomDist} km (Est.)`;
        document.getElementById('fTime').textContent = `⏱️ ${randomDist * 3} mins`;
        document.getElementById('fAuto').textContent = `₹${randomDist * 15}`;
        document.getElementById('fCab').textContent = `₹${randomDist * 22}`;
        document.getElementById('fBike').textContent = `₹${randomDist * 9}`;
        document.getElementById('fErick').textContent = `₹15-30 Shared`;
        document.getElementById('fNote').textContent = "Standard approximation auto-generated for unlisted local routes.";
    }
}

// ==========================================
// 7. BUDGET PLANNER MODULE
// ==========================================
function setBCity(city, btn) {
    document.querySelectorAll('.bcpill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('bCityTag').textContent = city;
    calcBudget();
}

function calcBudget() {
    const income = parseInt(document.getElementById('bInc').value) || 0;
    
    const rent = parseInt(document.getElementById('bRent').value);
    const food = parseInt(document.getElementById('bFood').value);
    const trans = parseInt(document.getElementById('bTrans').value);
    const net = parseInt(document.getElementById('bNet').value);
    const fun = parseInt(document.getElementById('bFun').value);
    const misc = parseInt(document.getElementById('bMisc').value);

    // Update range labels slider dynamically
    document.getElementById('bRentV').textContent = `₹${rent}`;
    document.getElementById('bFoodV').textContent = `₹${food}`;
    document.getElementById('bTransV').textContent = `₹${trans}`;
    document.getElementById('bNetV').textContent = `₹${net}`;
    document.getElementById('bFunV').textContent = `₹${fun}`;
    document.getElementById('bMiscV').textContent = `₹${misc}`;

    const total = rent + food + trans + net + fun + misc;
    document.getElementById('bTotal').textContent = `₹${total}`;

    const savingsBox = document.getElementById('bSavings');
    const tipBox = document.getElementById('bTip');

    if(income === 0) {
        savingsBox.innerHTML = "";
        tipBox.textContent = "Enter monthly allowance/income to calculate prospective savings metrics.";
        return;
    }

    const diff = income - total;
    if(diff >= 0) {
        savingsBox.innerHTML = `<span style="color:#16a34a; font-weight:600;">💰 Monthly Savings: ₹${diff}</span>`;
        tipBox.textContent = "Great job! Your budget is sustainable and well within allocations.";
    } else {
        savingsBox.innerHTML = `<span style="color:#dc2626; font-weight:600;">⚠️ Deficit Risk: -₹${Math.abs(diff)}</span>`;
        tipBox.textContent = "Alert! Expenses cross your targeted parameters. Try minimizing Fun or Rent factors.";
    }
}

// ==========================================
// 8. SYSTEM CHECKLIST TRACKER
// ==========================================
const defaultChecklistItems = [
    "Confirm PG Security deposit rules", "Verify operational Wi-Fi setup speed",
    "Locate closest operational emergency hospital", "Obtain local tiffin vendor reviews",
    "Identify neighborhood laundromat services", "Check mobile signal coverage inside rooms"
];

function initChecklist() {
    const listWrap = document.getElementById('chkList');
    if(!listWrap) return;
    listWrap.innerHTML = "";

    defaultChecklistItems.forEach((item, index) => {
        const isChecked = checklistState[index] ? 'checked' : '';
        const div = document.createElement('div');
        div.className = "chk-item";
        div.style = "display:flex; align-items:center; gap:10px; margin-bottom:10px; font-size:0.95rem;";
        div.innerHTML = `
            <input type="checkbox" id="chk-${index}" ${isChecked} onchange="toggleCheckItem(${index}, this)">
            <label for="chk-${index}" style="text-decoration: ${isChecked?'line-through':'none'}; color: ${isChecked?'#94a3b8':'inherit'}">${item}</label>
        `;
        listWrap.appendChild(div);
    });
    updateChecklistProgress();
}

function toggleCheckItem(index, cb) {
    checklistState[index] = cb.checked;
    localStorage.setItem('ss_checklist', JSON.stringify(checklistState));
    
    // Label status update styling
    const label = cb.nextElementSibling;
    label.style.textDecoration = cb.checked ? 'line-through' : 'none';
    label.style.color = cb.checked ? '#94a3b8' : 'inherit';
    
    updateChecklistProgress();
}

function updateChecklistProgress() {
    const total = defaultChecklistItems.length;
    const done = Object.values(checklistState).filter(Boolean).length;
    const percentage = total > 0 ? (done / total) * 100 : 0;
    
    const fillBar = document.getElementById('chkFill');
    if(fillBar) fillBar.style.width = `${percentage}%`;
    
    const textStatus = document.getElementById('chkText');
    if(textStatus) textStatus.textContent = `${done} / ${total} tasks accomplished`;
}

function resetChecklist() {
    checklistState = {};
    localStorage.removeItem('ss_checklist');
    initChecklist();
}

// ==========================================
// 9. NEARBY & ARTIFICIAL CHATBOT ENGINE (MOCK)
// ==========================================
function initNearby() {
    const list = document.getElementById('nearList');
    if(list) list.innerHTML = `<p class="cmp-empty">Displaying verified infrastructure datasets for ${currentCity}. Select dynamic categories above.</p>`;
}
function showCat(cat, btn) {
    document.querySelectorAll('.catbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const list = document.getElementById('nearList');
    list.innerHTML = `
       <div class="card" style="padding:10px; margin-bottom:8px;">📍 Central ${cat.toUpperCase()} Hub - 1.2 Km away</div>
       <div class="card" style="padding:10px;">📍 Metro Secondary Line Axis - 2.8 Km away</div>
    `;
}

// AI Assistant Response Logic
function sendAI() {
    const inp = document.getElementById('chatQ');
    const text = inp.value.trim();
    if(!text) return;

    appendMsg(text, 'user');
    inp.value = "";

    setTimeout(() => {
        let response = `I processed your request regarding "${text}". In ${currentCity}, it is generally advised to search near university hubs where average PG rates run around ₹5,500/mo inclusive of high speed connectivity.`;
        appendMsg(response, 'bot');
    }, 800);
}

function askAI(promptText) {
    document.getElementById('chatQ').value = promptText;
    sendAI();
}

function appendMsg(text, sender) {
    const container = document.getElementById('chatMsgs');
    const div = document.createElement('div');
    div.className = `cmsg ${sender}`;
    div.innerHTML = `
        <div class="cmsg-av">${sender==='bot'?'🤖':'👤'}</div>
        <div class="cmsg-bub" style="background:${sender==='bot'?'#f1f5f9':'#2563eb'}; color:${sender==='bot'?'#1e293b':'white'}; padding:10px; border-radius:8px; margin-bottom:8px; max-width:80%;">${text}</div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// Global search triggering action
function doSearch() {
    let q = document.getElementById('heroQ').value || document.getElementById('navQ').value || "";
    if(q) {
        goTab('pg');
        setTabActive(document.querySelectorAll('.tb')[0]);
        document.getElementById('pgQ').value = q;
        renderPGs();
    }
}
