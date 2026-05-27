// --- Core Application State Engine ---

// Secure Backup Database (In case data.js doesn't contain variables)
const defaultFlats = [
    { name: "Premium Private Flat Zone-2", city: "Bhopal", price: 11000, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80" },
    { name: "Indrapuri Sector C Room", city: "Bhopal", price: 6500, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80" },
    { name: "Boring Road Independent House", city: "Patna", price: 9500, img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=400&q=80" }
];

const defaultTiffins = [
    { name: "Maa Annapurna Tiffin Center", desc: "Pure Veg | High Protein Sattu & Egg Packs Available", loc: "Bhopal, Indrapuri" },
    { name: "Sinha Mess Network", desc: "Home Style Rice-Dal & Healthy Student Diet", loc: "Patna, Near Boring Road" }
];

const defaultGyms = [
    { name: "Iron Paradise Fitness Club", desc: "Heavy Dumbbells & Cardio Core Arena | ₹800/Mo", loc: "Bhopal, MP Nagar" },
    { name: "Gold Standard Student Gym", desc: "Full Conditioning Machine Setup | ₹1000/Mo", loc: "Patna, Kankarbagh" }
];

const defaultFlatmates = [
    { name: "Abhishek Sharma", bio: "B.Tech Computer Science | Non-Smoker, Coding-focused environment preferred.", tag: "Tech Focused" },
    { name: "Vivek Kumar", bio: "Gym-goer, maintains strong high-protein diet schedules. Disciplined routine.", tag: "Fitness First" }
];

const defaultMarketplace = [
    { item: "Voltas Student Room Cooler", rate: "₹1,800", details: "Excellent condition, used 1 season. Bhopal pickup." },
    { item: "Core CS & Coding Reference Books", rate: "₹600", details: "Data Structures & Python bundles. Complete clean sets." }
];

// --- Initialize Engine ---
document.addEventListener("DOMContentLoaded", () => {
    initThemeControl();
    initPersistedState();
    
    // Dynamic integration check: Use data from data.js if exists, else fallback to backup defaults
    const activeFlats = window.flatsData || window.pgs || defaultFlats;
    const activeTiffins = window.tiffinData || defaultTiffins;
    const activeGyms = window.gymData || defaultGyms;
    const activeFlatmates = window.flatmatesData || defaultFlatmates;
    const activeMarketplace = window.marketData || defaultMarketplace;

    renderFlatsGrid(activeFlats);
    renderTiffinGrid(activeTiffins);
    renderGymGrid(activeGyms);
    renderFlatmatesGrid(activeFlatmates);
    renderMarketplaceGrid(activeMarketplace);
    
    updateChecklist();
});

// --- Tab Routing ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
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

// --- Dynamic Data Render Subsystems ---
function renderFlatsGrid(data) {
    const container = document.getElementById('pg-grid');
    container.innerHTML = data.length ? '' : '<p class="text-muted">No accommodation matched your active filters.</p>';
    data.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.img || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80'}" class="card-img">
                <h3 class="card-title">${item.name}</h3>
                <span class="text-muted text-sm"><i class="fa-solid fa-map-marker-alt"></i> ${item.city} Region</span>
                <div class="card-footer">
                    <span class="card-price">₹${item.price}<small style="font-size:13px; font-weight:500; color:var(--text-muted);">/mo</small></span>
                    <span class="badge">Verified Flat</span>
                </div>
                <button class="btn btn-outline w-100 style-top" onclick="alert('Routing secure channel to verified property coordinator...')">Contact Owner</button>
            </div>`;
    });
}

function filterPGs() {
    const city = document.getElementById('city-select').value;
    const budget = document.getElementById('budget-select').value;
    const baseList = window.flatsData || window.pgs || defaultFlats;
    
    const filtered = baseList.filter(item => {
        return (city === "All" || item.city === city) && (budget === "All" || item.price <= parseInt(budget));
    });
    renderFlatsGrid(filtered);
}

function renderTiffinGrid(data) {
    const target = document.getElementById('tiffin-grid');
    data.forEach(t => {
        target.innerHTML += `<div class="card"><h3>${t.name}</h3><p class="text-muted text-sm style-top">${t.desc}</p><span class="badge style-top"><i class="fa-solid fa-location-dot"></i> ${t.loc}</span><button class="btn btn-outline w-100 style-top" onclick="alert('Connecting to Tiffin Distribution Desk...')">Order Tiffin Route</button></div>`;
    });
}

function renderGymGrid(data) {
    const target = document.getElementById('gym-grid');
    data.forEach(g => {
        target.innerHTML += `<div class="card"><h3>${g.name}</h3><p class="text-muted text-sm style-top">${g.desc}</p><span class="badge style-top"><i class="fa-solid fa-map-location"></i> ${g.loc}</span><button class="btn btn-primary w-100 style-top" onclick="alert('Student discount token unlocked! Forwarding location...')">Get Location Map</button></div>`;
    });
}

function renderFlatmatesGrid(data) {
    const target = document.getElementById('matcher-grid');
    data.forEach(f => {
        target.innerHTML += `<div class="card"><h3>${f.name}</h3><span class="badge style-top">${f.tag}</span><p class="text-muted text-sm style-top">${f.bio}</p><button class="btn btn-outline w-100 style-top" onclick="alert('Match Request securely pinged over network.')">Connect Habits Profile</button></div>`;
    });
}

function renderMarketplaceGrid(data) {
    const target = document.getElementById('market-grid');
    data.forEach(m => {
        target.innerHTML += `<div class="card"><h3>${m.item}</h3><h2 class="card-price style-top">${m.rate}</h2><p class="text-muted text-sm style-top">${m.details}</p><button class="btn btn-primary w-100 style-top" onclick="alert('Notifying senior vendor to open active chat channel...')">Chat with Seller</button></div>`;
    });
}

// --- Live Scammed-Transit Prevention Matrix ---
function runFareCalculation() {
    const p = document.getElementById('pickup-loc').value.trim();
    const d = document.getElementById('drop-loc').value.trim();
    if(!p || !d) return alert("Please fill standard transit vector path points.");

    const seed = Math.floor(Math.random() * 6) + 4; // Simulated distance modifier
    document.getElementById('fare-bike').innerText = `₹${seed * 8}`;
    document.getElementById('fare-auto').innerText = `₹${seed * 15}`;
    document.getElementById('fare-cab').innerText = `₹${seed * 25}`;
    document.getElementById('fare-dashboard').style.display = 'grid';
}

// --- Persistent Ledger Systems (LocalStorage) ---
let localLedger = JSON.parse(localStorage.getItem('ss_ledger_cache')) || [];

function addNewExpense() {
    const title = document.getElementById('exp-title').value.trim();
    const amount = parseFloat(document.getElementById('exp-amount').value);
    const split = parseInt(document.getElementById('exp-split').value);

    if(!title || isNaN(amount)) return alert("Please populate structural finance fields accurately.");

    localLedger.push({ title, amount, split });
    localStorage.setItem('ss_ledger_cache', JSON.stringify(localLedger));
    
    document.getElementById('exp-title').value = '';
    document.getElementById('exp-amount').value = '';
    refreshLedgerUI();
}

function refreshLedgerUI() {
    const tbody = document.getElementById('expense-tbody');
    tbody.innerHTML = '';
    let aggregateSpend = 0;
    let personalShare = 0;

    localLedger.forEach(item => {
        aggregateSpend += item.amount;
        personalShare += (item.amount / item.split);
        tbody.innerHTML += `<tr><td>${item.title}</td><td style="font-weight:700;">₹${item.amount}</td><td>${item.split > 1 ? 'Split / ' + item.split : 'Personal'}</td></tr>`;
    });

    document.getElementById('total-spend').innerText = `₹${Math.round(aggregateSpend)}`;
    document.getElementById('split-share').innerText = `₹${Math.round(personalShare)}`;
}

function clearExpenses() {
    if(confirm("Confirm action: Empty active local budget data structures?")) {
        localLedger = [];
        localStorage.removeItem('ss_ledger_cache');
        refreshLedgerUI();
    }
}

// --- Milestone Checklists Progress Bars ---
function updateChecklist() {
    const boxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    let dynamicChecked = 0;
    boxes.forEach(b => { if(b.checked) dynamicChecked++; });
    const ratio = (dynamicChecked / boxes.length) * 100;
    document.getElementById('chk-progress').style.width = `${ratio}%`;
}

// --- Original Authenticated Login Logic Frameworks ---
function togglePasswordVisibility() {
    const passInput = document.getElementById('login-pass');
    const eyeIcon = document.querySelector('.toggle-password');
    if(passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.className = "fa-regular fa-eye-slash toggle-password";
    } else {
        passInput.type = "password";
        eyeIcon.className = "fa-regular fa-eye toggle-password";
    }
}

function handleRealLogin() {
    const simulatedEmail = document.getElementById('login-email').value.trim();
    const cleanUserName = simulatedEmail.split('@')[0]; // Extract clean aesthetic nickname
    
    localStorage.setItem('ss_active_session_user', cleanUserName);
    closeAllModals();
    initPersistedState();
}

function initPersistedState() {
    refreshLedgerUI();
    const sessionUser = localStorage.getItem('ss_active_session_user');
    const targetDiv = document.getElementById('auth-section');

    if(sessionUser) {
        targetDiv.innerHTML = `
            <div class="user-badge">
                <i class="fa-solid fa-user-check"></i> Welcome, ${sessionUser}
                <button class="btn btn-outline" style="padding:4px 8px; font-size:11px;" onclick="handleSessionLogout()">Exit</button>
            </div>`;
    } else {
        targetDiv.innerHTML = `<button class="btn btn-outline-nav" onclick="openModal('login-modal')"><i class="fa-regular fa-user"></i> Sign In</button>`;
    }
}

function handleSessionLogout() {
    localStorage.removeItem('ss_active_session_user');
    initPersistedState();
}

// --- Modal Transitions Trigger Handlers ---
function openModal(id) {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById(id).style.display = 'block';
}
function closeAllModals() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}
function submitCustomListing() {
    const n = document.getElementById('add-name').value.trim();
    const c = document.getElementById('add-city').value;
    const p = parseInt(document.getElementById('add-price').value);

    if(!n || isNaN(p)) return alert("Populate verification metrics correctly.");
    
    const referenceList = window.flatsData || window.pgs || defaultFlats;
    referenceList.unshift({ name: n, city: c, price: p, img: "https://images.unsplash.com/photo-1598928506311-c55dd18a68b4?auto=format&fit=crop&w=400&q=80" });
    
    renderFlatsGrid(referenceList);
    closeAllModals();
    switchTab('pg-finder');
}
