// --- Enhanced Database with Amenity Flags ---
const defaultFlats = [
    { name: "Premium Private Flat Zone-2", city: "Bhopal", price: 11000, ac: true, wifi: true, food: false, brokerFree: true, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80" },
    { name: "Indrapuri Sector C Room", city: "Bhopal", price: 6500, ac: false, wifi: true, food: true, brokerFree: false, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80" },
    { name: "Boring Road Independent", city: "Patna", price: 9500, ac: true, wifi: false, food: false, brokerFree: true, img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=400&q=80" }
];

const defaultTiffins = [{ name: "Maa Annapurna Tiffin", desc: "High Protein Meals", loc: "Bhopal" }];
const defaultFlatmates = [{ name: "Abhishek Sharma", tag: "Tech Focused", bio: "B.Tech CSE" }];

document.addEventListener("DOMContentLoaded", () => {
    initThemeControl();
    const activeFlats = window.flatsData || defaultFlats;
    renderFlatsGrid(activeFlats);
    renderSimpleGrids();
});

// --- Navigation Logic ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if(event && event.currentTarget) event.currentTarget.classList.add('active');
}

function switchTabMobile(tabId, element) {
    switchTab(tabId);
    document.querySelectorAll('.b-nav-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

// --- Theme Controller ---
function initThemeControl() {
    const btn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('ss_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('ss_theme', next);
        btn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
}

// --- Advanced Smart Filtering & Rendering ---
function renderFlatsGrid(data) {
    const container = document.getElementById('pg-grid');
    container.innerHTML = data.length ? '' : '<p class="text-muted">No accommodations matched your filters.</p>';
    
    data.forEach(item => {
        // Generate Amenity Icons
        let icons = '';
        if(item.ac) icons += '<i class="fa-solid fa-snowflake" title="AC"></i>';
        if(item.wifi) icons += '<i class="fa-solid fa-wifi" title="WiFi"></i>';
        if(item.food) icons += '<i class="fa-solid fa-bowl-food" title="Food"></i>';
        if(item.brokerFree) icons += '<i class="fa-solid fa-handshake-slash" title="No Brokerage"></i>';

        container.innerHTML += `
            <div class="card">
                <img src="${item.img || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80'}" class="card-img">
                <div style="display:flex; justify-content:space-between; align-items:start;">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="badge-trust"><i class="fa-solid fa-shield-check"></i> Verified</span>
                </div>
                <span class="text-muted text-sm"><i class="fa-solid fa-map-marker-alt"></i> ${item.city}</span>
                <div class="amenity-icons">${icons}</div>
                <div class="card-footer">
                    <span style="font-size:1.3rem; font-weight:800; color:var(--primary);">₹${item.price}<small style="font-size:12px; color:var(--text-muted);">/mo</small></span>
                    <button class="btn btn-outline" onclick="alert('Owner contact requested.')">Contact</button>
                </div>
            </div>`;
    });
}

function filterPGs() {
    const city = document.getElementById('city-select').value;
    const budget = document.getElementById('budget-select').value;
    
    const reqAC = document.getElementById('chk-ac').checked;
    const reqWiFi = document.getElementById('chk-wifi').checked;
    const reqFood = document.getElementById('chk-food').checked;
    const reqBroker = document.getElementById('chk-broker').checked;

    const baseList = window.flatsData || defaultFlats;
    
    const filtered = baseList.filter(item => {
        let match = true;
        if(city !== "All" && item.city !== city) match = false;
        if(budget !== "All" && item.price > parseInt(budget)) match = false;
        if(reqAC && !item.ac) match = false;
        if(reqWiFi && !item.wifi) match = false;
        if(reqFood && !item.food) match = false;
        if(reqBroker && !item.brokerFree) match = false;
        return match;
    });
    
    renderFlatsGrid(filtered);
}

// --- Utilities ---
function runFareCalculation() {
    const p = document.getElementById('pickup-loc').value;
    if(!p) return alert("Enter locations.");
    document.getElementById('fare-bike').innerText = `₹${Math.floor(Math.random()*40)+30}`;
    document.getElementById('fare-auto').innerText = `₹${Math.floor(Math.random()*60)+60}`;
    document.getElementById('fare-cab').innerText = `₹${Math.floor(Math.random()*100)+150}`;
    document.getElementById('fare-dashboard').style.display = 'grid';
}

function renderSimpleGrids() {
    const tg = document.getElementById('tiffin-grid');
    if(tg) defaultTiffins.forEach(t => tg.innerHTML += `<div class="card"><h3>${t.name}</h3><p class="text-muted text-sm mt-10">${t.desc}</p></div>`);
    const mg = document.getElementById('matcher-grid');
    if(mg) defaultFlatmates.forEach(f => mg.innerHTML += `<div class="card"><h3>${f.name}</h3><p class="text-muted text-sm mt-10">${f.bio}</p></div>`);
}

function openModal(id) { document.getElementById('modal-overlay').style.display = 'block'; document.getElementById(id).style.display = 'block'; }
function closeAllModals() { document.getElementById('modal-overlay').style.display = 'none'; document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); }
function handleRealLogin() { localStorage.setItem('ss_active_session_user', document.getElementById('login-email').value); closeAllModals(); alert("Logged in successfully!"); }
