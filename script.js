// =========================================================
// SheherSaathi - Core Application Logic
// =========================================================

// --- Initial Mock Data (Tailored for Students & Private Flats) ---
let flatsData = JSON.parse(localStorage.getItem("ss_flats")) || [
    { name: "Premium 2BHK Flat (Shared)", city: "Bhopal", loc: "Indrapuri Sector C", price: 8500, ac: true, wifi: true, food: false, brokerFree: true, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" },
    { name: "Independent Studio Flat", city: "Bhopal", loc: "MP Nagar Zone 2", price: 11000, ac: true, wifi: true, food: false, brokerFree: true, img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=600&q=80" },
    { name: "Student Room (Private)", city: "Patna", loc: "Boring Road", price: 6500, ac: false, wifi: true, food: true, brokerFree: false, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" }
];

const tiffinsData = [
    { name: "FitDiet Meals", desc: "High-protein chicken/paneer diets for bodybuilding & gym routines.", loc: "Bhopal", price: "₹3500/mo" },
    { name: "Maa Annapurna Tiffin", desc: "Classic home-style vegetarian daily meals.", loc: "Bhopal", price: "₹2200/mo" }
];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initThemeControl();
    renderFlatsGrid(flatsData);
    renderSimpleGrids();
    initExpenseTracker();
    initChecklist();
    animateStats();
});

// --- Tab & Navigation System ---
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none'; // Force hide for Tailwind compatibility
    });
    // Remove active state from all sidebar buttons
    document.querySelectorAll('.sidebar-btn').forEach(el => {
        el.classList.remove('active', 'bg-brand-50', 'text-brand-600');
        el.classList.add('text-slate-600');
    });

    // Show target tab
    const targetTab = document.getElementById(tabId);
    if(targetTab) {
        targetTab.classList.add('active');
        targetTab.style.display = 'block';
    }

    // Highlight clicked button (if triggered by event)
    if (window.event && window.event.currentTarget) {
        const btn = window.event.currentTarget;
        btn.classList.add('active', 'bg-brand-50', 'text-brand-600');
        btn.classList.remove('text-slate-600');
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Theme Controller (Dark/Light Mode) ---
function initThemeControl() {
    const btn = document.getElementById('theme-toggle');
    if(!btn) return;
    
    const saved = localStorage.getItem('ss_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun text-lg"></i>' : '<i class="fas fa-moon text-lg"></i>';
    
    btn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('ss_theme', next);
        btn.innerHTML = isDark ? '<i class="fas fa-moon text-lg"></i>' : '<i class="fas fa-sun text-lg"></i>';
    });
}

// --- Flat/PG Rendering & Filtering ---
function renderFlatsGrid(data) {
    const container = document.getElementById('pg-grid');
    if(!container) return;
    
    container.innerHTML = data.length ? '' : '<div class="col-span-full text-center py-10 text-slate-500">No flats match your current filters.</div>';
    
    data.forEach(item => {
        // Build Amenity Tags
        let tags = '';
        if(item.wifi) tags += `<span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-wifi mr-1"></i> WiFi</span>`;
        if(item.ac) tags += `<span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-snowflake mr-1"></i> AC</span>`;
        if(item.brokerFree) tags += `<span class="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-handshake-slash mr-1"></i> No Broker</span>`;

        container.innerHTML += `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div class="h-48 bg-slate-200 relative">
                    <img src="${item.img}" alt="Flat Image" class="w-full h-full object-cover">
                    <span class="absolute top-3 right-3 bg-white/90 backdrop-blur text-brand-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        <i class="fa-solid fa-shield-check"></i> Verified
                    </span>
                </div>
                <div class="p-5">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-lg text-slate-800 line-clamp-1">${item.name}</h3>
                        <span class="font-bold text-brand-600 whitespace-nowrap ml-2">₹${item.price}<span class="text-xs text-slate-500 font-normal">/mo</span></span>
                    </div>
                    <p class="text-slate-500 text-sm mb-4"><i class="fa-solid fa-location-dot mr-1"></i> ${item.loc}, ${item.city}</p>
                    <div class="flex flex-wrap gap-2 mb-5">${tags}</div>
                    <button class="w-full bg-brand-50 text-brand-700 font-semibold py-2.5 rounded-xl hover:bg-brand-600 hover:text-white transition" onclick="alert('Connecting to owner of ${item.name}...')">Contact Owner</button>
                </div>
            </div>`;
    });
}

function filterPGs() {
    const searchVal = document.getElementById('search-pg')?.value.toLowerCase() || "";
    const city = document.getElementById('city-select')?.value || "All";
    const budget = document.getElementById('budget-select')?.value || "All";

    const filtered = flatsData.filter(item => {
        let match = true;
        if(city !== "All" && item.city !== city) match = false;
        if(budget !== "All" && item.price > parseInt(budget)) match = false;
        if(searchVal && !item.loc.toLowerCase().includes(searchVal) && !item.name.toLowerCase().includes(searchVal)) match = false;
        return match;
    });
    
    renderFlatsGrid(filtered);
}

// Attach Search Listener
document.getElementById("search-pg")?.addEventListener("input", filterPGs);

// --- Add Custom Property (List Your Flat) ---
function submitCustomListing() {
    const name = document.getElementById('add-name').value;
    const city = document.getElementById('add-city').value;
    const price = document.getElementById('add-price').value;
    
    if(!name || !price) return alert("Please fill in the flat name and price.");
    
    const newFlat = {
        name: name, city: city, loc: "New Listing", price: parseInt(price),
        ac: false, wifi: true, food: false, brokerFree: true,
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
    };
    
    flatsData.unshift(newFlat); // Add to beginning of array
    localStorage.setItem("ss_flats", JSON.stringify(flatsData));
    
    renderFlatsGrid(flatsData);
    closeAllModals();
    alert("Property listed successfully!");
    
    // Clear inputs
    document.getElementById('add-name').value = '';
    document.getElementById('add-price').value = '';
}


// --- Expense Tracker System (with Local Storage) ---
let expenses = JSON.parse(localStorage.getItem("ss_expenses")) || [];

function initExpenseTracker() {
    updateExpenseUI();
}

function addNewExpense() {
    const title = document.getElementById('exp-title').value;
    const amount = parseFloat(document.getElementById('exp-amount').value);
    const splitType = parseInt(document.getElementById('exp-split').value);
    
    if(!title || isNaN(amount)) return alert("Please enter a valid expense name and amount.");
    
    expenses.push({ title, amount, split: splitType });
    localStorage.setItem("ss_expenses", JSON.stringify(expenses));
    
    document.getElementById('exp-title').value = '';
    document.getElementById('exp-amount').value = '';
    
    updateExpenseUI();
}

function updateExpenseUI() {
    const tbody = document.getElementById('expense-tbody');
    const totalEl = document.getElementById('total-spend');
    const shareEl = document.getElementById('split-share');
    if(!tbody) return;

    tbody.innerHTML = '';
    let totalSpend = 0;
    let myShare = 0;

    expenses.forEach((exp, index) => {
        totalSpend += exp.amount;
        myShare += (exp.amount / exp.split);
        
        let splitText = exp.split === 1 ? 'Personal' : `Split by ${exp.split}`;
        
        tbody.innerHTML += `
            <tr class="hover:bg-slate-50 transition">
                <td class="px-6 py-4 font-medium text-slate-800">${exp.title}</td>
                <td class="px-6 py-4 font-bold text-brand-600">₹${exp.amount.toFixed(2)}</td>
                <td class="px-6 py-4">
                    <span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">${splitText}</span>
                    <i class="fa-solid fa-trash text-red-400 ml-4 cursor-pointer hover:text-red-600" onclick="deleteExpense(${index})"></i>
                </td>
            </tr>
        `;
    });

    if(expenses.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" class="px-6 py-8 text-center text-slate-400">No expenses logged yet. Add your rent, groceries, or Groww SIPs above.</td></tr>`;
    }

    totalEl.innerText = `₹${totalSpend.toFixed(0)}`;
    shareEl.innerText = `₹${myShare.toFixed(0)}`;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("ss_expenses", JSON.stringify(expenses));
    updateExpenseUI();
}

function clearExpenses() {
    if(confirm("Are you sure you want to reset the entire ledger?")) {
        expenses = [];
        localStorage.removeItem("ss_expenses");
        updateExpenseUI();
    }
}

// --- Transit Fare Calculator ---
function runFareCalculation() {
    const p = document.getElementById('pickup-loc').value;
    const d = document.getElementById('drop-loc').value;
    if(!p || !d) return alert("Please enter both Pickup and Drop locations.");
    
    // Simulate API delay
    const btn = window.event.currentTarget;
    const originalText = btn.innerText;
    btn.innerText = "Calculating...";
    
    setTimeout(() => {
        document.getElementById('fare-dashboard').style.display = 'grid';
        // Basic length-based randomizer for realism
        const distanceFactor = Math.abs(p.length - d.length) + 3; 
        document.getElementById('fare-bike').innerText = `₹${Math.floor(distanceFactor * 7) + 20}`;
        document.getElementById('fare-auto').innerText = `₹${Math.floor(distanceFactor * 12) + 40}`;
        document.getElementById('fare-cab').innerText = `₹${Math.floor(distanceFactor * 25) + 80}`;
        btn.innerText = originalText;
    }, 600);
}

// --- Day 1 Checklist System ---
function initChecklist() {
    const savedState = JSON.parse(localStorage.getItem('ss_checklist')) || {};
    [1,2,3,4].forEach(i => {
        const chk = document.getElementById('c'+i);
        if(chk) {
            chk.checked = savedState['c'+i] || false;
            chk.addEventListener('change', updateChecklist);
        }
    });
    updateChecklist();
}

function updateChecklist() {
    let checked = 0;
    const state = {};
    [1,2,3,4].forEach(i => {
        const chk = document.getElementById('c'+i);
        if(chk) {
            state['c'+i] = chk.checked;
            if(chk.checked) checked++;
        }
    });
    
    localStorage.setItem('ss_checklist', JSON.stringify(state));
    const bar = document.getElementById('chk-progress');
    if(bar) bar.style.width = `${(checked / 4) * 100}%`;
}


// --- Modals & Authentication ---
function openModal(id) { 
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById(id).classList.add('active'); 
}
function closeAllModals() { 
    document.getElementById('modal-overlay').classList.remove('active');
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active')); 
}

function handleRealLogin() { 
    const email = document.getElementById('login-email').value;
    if(!email) return;
    localStorage.setItem('ss_active_session_user', email); 
    closeAllModals(); 
    alert(`Welcome back, ${email.split('@')[0]}!`); 
}


// --- Utility & Animations ---
function renderSimpleGrids() {
    const tg = document.getElementById('tiffin-grid');
    if(tg) {
        tg.innerHTML = '';
        tiffinsData.forEach(t => {
            tg.innerHTML += `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-lg text-slate-800">${t.name}</h3>
                    <span class="text-sm font-bold text-brand-600">${t.price}</span>
                </div>
                <p class="text-slate-500 text-sm mt-3">${t.desc}</p>
                <div class="mt-4 inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-location-dot mr-1"></i> ${t.loc}</div>
            </div>`;
        });
    }
}

function animateStats() {
    const stats = document.querySelectorAll(".stats-section h2");
    stats.forEach(stat => {
        const target = parseInt(stat.innerText.replace(/\D/g,''));
        if(isNaN(target)) return;
        let count = 0;
        const speed = target / 40;
        const timer = setInterval(() => {
            count += speed;
            if(count >= target){
                count = target;
                clearInterval(timer);
            }
            // Add k for thousands to match HTML formatting
            stat.innerText = target >= 1000 ? Math.floor(count/1000) + "k+" : Math.floor(count) + "+";
        }, 30);
    });
}
