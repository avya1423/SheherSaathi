// --- Complete Application State Engine ---

// Unified Mock Databases
let pgsDatabase = [
    { name: "Shiv Residency", city: "Bhopal", price: 5500, gender: "Boys", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80" },
    { name: "Patliputra Safe Rooms", city: "Patna", price: 4500, gender: "Boys", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80" },
    { name: "Delhi Elite Stay", city: "Delhi", price: 8500, gender: "Girls", img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=400&q=80" }
];

const foodFitnessDatabase = {
    tiffin: [
        { name: "Maa Annapurna Tiffin Network", metric: "Pure Veg / Gym Diet Active", sub: "Bhopal, MP Nagar", action: "Call: 9876543210" },
        { name: "Sinha Kitchens", metric: "High-Protein Options available", sub: "Patna, Boring Road", action: "Call: 8765432109" }
    ],
    gym: [
        { name: "Iron Paradise Fitness Club", metric: "₹800/month Student Offer", sub: "Indrapuri Sector C", action: "Locate Gym" },
        { name: "Gold Standard Gym", metric: "₹1000/month Cardio included", sub: "Kankarbagh Arena", action: "Locate Gym" }
    ]
};

const flatmatesDatabase = [
    { name: "Vivek Kumar", detail: "B.Tech CSE student | Non-smoker", badge: "Coding-focused" },
    { name: "Piyush Sharma", detail: "Fitness oriented | Strict Gym Routines", badge: "Early Bird" }
];

const marketplaceDatabase = [
    { title: "Student Room Cooler (Voltas)", price: "₹1,800", sub: "Excellent Condition | Bhopal" },
    { title: "B.Tech 1st Year Reference Books", price: "₹500", sub: "Complete Set | Patna" }
];

let expenseLedger = [];

// --- Global Core Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initThemeEngine();
    renderPGsGrid(pgsDatabase);
    toggleDirectory('tiffin');
    renderFlatmates();
    renderMarketplace();
    updateChecklistProgress();
});

// Tab Router
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    
    // Toggle active layout button color state
    const btnIndex = ['pg-finder', 'fare-calc', 'tiffin-gym', 'expense-tracker', 'flatmate-matcher', 'marketplace', 'academic-hub', 'checklist', 'emergency'].indexOf(tabId);
    if(btnIndex !== -1) {
        document.querySelectorAll('.sidebar-btn')[btnIndex].classList.add('active');
    }
}

// Dark Mode Controller
function initThemeEngine() {
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        toggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
}

// --- 1. Accommodation Engine ---
function renderPGsGrid(data) {
    const grid = document.getElementById('pg-grid');
    grid.innerHTML = data.length ? '' : '<p class="text-muted">No specific rooms found matching criteria.</p>';
    data.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.img}" class="card-img" alt="Room View">
                <h3 class="card-title">${item.name}</h3>
                <span class="card-subtitle"><i class="fa-solid fa-map-marker-alt"></i> ${item.city} Area</span>
                <div class="card-footer">
                    <span class="card-price">₹${item.price}<small>/mo</small></span>
                    <span class="badge">${item.gender}</span>
                </div>
                <button class="btn btn-outline w-100 style-top" onclick="alert('Connecting with trusted listing verification team...')">Contact Owner</button>
            </div>`;
    });
}

function filterPGs() {
    const city = document.getElementById('city-select').value;
    const budget = document.getElementById('budget-select').value;
    const gender = document.getElementById('gender-select').value;
    
    let filtered = pgsDatabase.filter(item => {
        return (city === "All" || item.city === city) &&
               (budget === "All" || item.price <= parseInt(budget)) &&
               (gender === "All" || item.gender === gender);
    });
    renderPGsGrid(filtered);
}

// --- 2. Live Transit Calculator Engine ---
function runFareCalculation() {
    const pick = document.getElementById('pickup-loc').value.trim();
    const drop = document.getElementById('drop-loc').value.trim();
    if(!pick || !drop) return alert("Please fill structural route paths.");

    const distanceModifier = Math.floor(Math.random() * 8) + 4; // 4 to 12 KM simulation
    document.getElementById('fare-bike').innerText = `₹${distanceModifier * 9}`;
    document.getElementById('fare-auto').innerText = `₹${distanceModifier * 16}`;
    document.getElementById('fare-cab').innerText = `₹${distanceModifier * 26}`;
    document.getElementById('fare-dashboard').style.display = 'grid';
}

// --- 3. Directory Management System ---
function toggleDirectory(type) {
    const btnContainer = document.querySelectorAll('.directory-toggle .btn');
    if (type === 'tiffin') {
        btnContainer[0].className = "btn btn-primary"; btnContainer[1].className = "btn btn-outline";
    } else {
        btnContainer[0].className = "btn btn-outline"; btnContainer[1].className = "btn btn-primary";
    }
    
    const grid = document.getElementById('directory-grid');
    grid.innerHTML = '';
    foodFitnessDatabase[type].forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <h3 class="card-title">${item.name}</h3>
                <span class="badge style-top">${item.metric}</span>
                <span class="card-subtitle style-top"><i class="fa-solid fa-location-arrow"></i> ${item.sub}</span>
                <button class="btn btn-outline w-100 style-top" onclick="alert('Connecting...')">${item.action}</button>
            </div>`;
    });
}

// --- 4. Live Ledger Split Engine ---
function addNewExpense() {
    const title = document.getElementById('exp-title').value.trim();
    const amount = parseFloat(document.getElementById('exp-amount').value);
    const splitCount = parseInt(document.getElementById('exp-split').value);

    if(!title || isNaN(amount)) return alert("Please provide valid ledger metadata.");

    expenseLedger.push({ title, amount, splitCount });
    document.getElementById('exp-title').value = '';
    document.getElementById('exp-amount').value = '';
    
    recalculateExpenseDashboard();
}

function recalculateExpenseDashboard() {
    const tbody = document.getElementById('expense-tbody');
    tbody.innerHTML = '';
    let totalSpend = 0;
    let splitShare = 0;

    expenseLedger.forEach(item => {
        totalSpend += item.amount;
        splitShare += (item.amount / item.splitCount);
        tbody.innerHTML += `<tr><td>${item.title}</td><td>₹${item.amount}</td><td>${item.splitCount > 1 ? 'Split / ' + item.splitCount : 'Personal'}</td></tr>`;
    });

    document.getElementById('total-spend').innerText = `₹${Math.round(totalSpend)}`;
    document.getElementById('split-share').innerText = `₹${Math.round(splitShare)}`;
}

// --- 5 & 6. Remaining Sub-views Population ---
function renderFlatmates() {
    const grid = document.getElementById('matcher-grid');
    flatmatesDatabase.forEach(item => {
        grid.innerHTML += `<div class="card"><h3>${item.name}</h3><span class="badge style-top">${item.badge}</span><p class="text-muted text-sm style-top">${item.detail}</p><button class="btn btn-primary w-100 style-top" onclick="alert('Match Request Transmitted.')">Send Match Request</button></div>`;
    });
}

function renderMarketplace() {
    const grid = document.getElementById('market-grid');
    marketplaceDatabase.forEach(item => {
        grid.innerHTML += `<div class="card"><h3>${item.title}</h3><h2 class="card-price style-top">${item.price}</h2><span class="card-subtitle style-top">${item.sub}</span><button class="btn btn-outline w-100" onclick="alert('Notifying senior student vendor...')">Chat with Seller</button></div>`;
    });
}

// --- 7. Checklist Action Milestones Engine ---
function updateChecklistProgress() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    let checkedCount = 0;
    checkboxes.forEach(chk => { if(chk.checked) checkedCount++; });
    const percent = (checkedCount / checkboxes.length) * 100;
    document.getElementById('checklist-progress').style.width = `${percent}%`;
}

// --- 8. Modal Utilities System ---
function openModal(id) {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById(id).style.display = 'block';
}
function closeAllModals() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}
function submitNewPGListing() {
    const name = document.getElementById('new-pg-name').value;
    const city = document.getElementById('new-pg-city').value;
    const price = parseInt(document.getElementById('new-pg-price').value);
    const gender = document.getElementById('new-pg-gender').value;

    if(!name || isNaN(price)) return alert("Complete verification data fields first.");

    pgsDatabase.unshift({ name, city, price, gender, img: "https://images.unsplash.com/photo-1598928506311-c55dd18a68b4?auto=format&fit=crop&w=400&q=80" });
    renderPGsGrid(pgsDatabase);
    closeAllModals();
    switchTab('pg-finder');
}
