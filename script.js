// =========================================================
// SheherSaathi - Core Application Logic
// =========================================================

// --- Initial Mock Data (Tailored for Students & Private Flats) ---
let flatsData = JSON.parse(localStorage.getItem("ss_flats")) || [
    { name: "Premium 2BHK Flat (Shared)", city: "Bhopal", loc: "Indrapuri Sector C", price: 8500, ac: true, wifi: true, food: false, brokerFree: true, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80", contact: "9876543210" },
    { name: "Independent Studio Flat", city: "Bhopal", loc: "MP Nagar Zone 2", price: 11000, ac: true, wifi: true, food: false, brokerFree: true, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80", contact: "9876543211" },
    { name: "Student Room (Private)", city: "Patna", loc: "Boring Road", price: 6500, ac: false, wifi: true, food: true, brokerFree: false, img: "https://images.unsplash.com/photo-1555854877-bab0e5f47500?auto=format&fit=crop&w=600&q=80", contact: "9876543212" }
];

const tiffinsData = [
    { name: "FitDiet Meals", desc: "High-protein chicken/paneer diets for bodybuilding & gym routines.", loc: "Bhopal", price: "₹3,500/month", contact: "9100000001" },
    { name: "Maa Annapurna Tiffin", desc: "Classic home-style vegetarian daily meals.", loc: "Bhopal", price: "₹2,200/month", contact: "9100000002" },
    { name: "Campus Meals Co", desc: "Mixed diets with breakfast included.", loc: "Patna", price: "₹2,800/month", contact: "9100000003" }
];

const gymsData = [
    { name: "PowerZone Gym", desc: "Full body workout | Personal trainers", loc: "Bhopal", price: "₹800/month", contact: "9200000001", features: ["Cardio", "Weights", "Trainers", "24/7"] },
    { name: "Yoga & Wellness Hub", desc: "Yoga classes | Mental wellness", loc: "Bhopal", price: "₹600/month", contact: "9200000002", features: ["Yoga", "Meditation", "Flexibility"] },
    { name: "Elite Fitness Center", desc: "Premium gym with CrossFit", loc: "Patna", price: "₹1,200/month", contact: "9200000003", features: ["CrossFit", "Swimming", "Nutrition"] }
];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initThemeControl();
    initHamburgerMenu();
    renderFlatsGrid(flatsData);
    renderSimpleGrids();
    initExpenseTracker();
    initChecklist();
    animateStats();
    setupFilterListeners();
});

// --- Hamburger Menu Toggle ---
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar-mobile');
    
    if (!hamburger || !sidebar) return;
    
    hamburger.addEventListener('click', toggleSidebar);
}

function toggleSidebar() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar-mobile');
    if (!hamburger || !sidebar) return;
    
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
}

// --- Tab & Navigation System ---
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
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
    
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Close mobile sidebar
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar-mobile');
    if (hamburger && sidebar) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

// --- Theme Controller (Dark/Light Mode) ---
function initThemeControl() {
    const btns = document.querySelectorAll('[id*="theme-toggle"]');
    if(btns.length === 0) return;
    
    const saved = localStorage.getItem('ss_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    
    btns.forEach(btn => {
        btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun text-lg"></i>' : '<i class="fas fa-moon text-lg"></i>';
        btn.addEventListener('click', () => toggleTheme(btns));
    });
}

function toggleTheme(btns) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ss_theme', next);
    const icon = isDark ? '<i class="fas fa-moon text-lg"></i>' : '<i class="fas fa-sun text-lg"></i>';
    btns.forEach(btn => btn.innerHTML = icon);
}

// --- Flat/PG Rendering & Filtering ---
function renderFlatsGrid(data) {
    const container = document.getElementById('pg-grid');
    if(!container) return;
    
    container.innerHTML = data.length ? '' : '<div class="col-span-full text-center py-10 text-slate-500">No flats match your current filters.</div>';
    
    data.forEach(item => {
        let tags = '';
        if(item.wifi) tags += `<span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-wifi mr-1"></i> WiFi</span>`;
        if(item.ac) tags += `<span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-snowflake mr-1"></i> AC</span>`;
        if(item.brokerFree) tags += `<span class="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-handshake-slash mr-1"></i> No Broker</span>`;

        const contactPhone = item.contact || "9999999999";
        container.innerHTML += `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 card-hover">
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
                    <button class="w-full bg-brand-50 text-brand-700 font-semibold py-2.5 rounded-xl hover:bg-brand-600 hover:text-white transition btn-hover" onclick="alert('Owner Contact: ${contactPhone}\\n\\nPlease reach out to verify property details.')">View & Contact</button>
                </div>
            </div>`;
    });
}

function setupFilterListeners() {
    const searchInput = document.getElementById('search-pg');
    const citySelect = document.getElementById('city-select');
    const budgetSelect = document.getElementById('budget-select');
    
    if(searchInput) searchInput.addEventListener('input', filterPGs);
    if(citySelect) citySelect.addEventListener('change', filterPGs);
    if(budgetSelect) budgetSelect.addEventListener('change', filterPGs);
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

// --- Add Custom Property ---
function submitCustomListing() {
    const name = document.getElementById('add-name')?.value;
    const city = document.getElementById('add-city')?.value;
    const price = document.getElementById('add-price')?.value;
    
    if(!name || !price || !city) return alert("Please fill in all fields (name, city, and price).");
    
    const newFlat = {
        name: name, 
        city: city, 
        loc: "New Listing", 
        price: parseInt(price),
        ac: false, 
        wifi: true, 
        food: false, 
        brokerFree: true,
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
        contact: "9999999999"
    };
    
    flatsData.unshift(newFlat);
    localStorage.setItem("ss_flats", JSON.stringify(flatsData));
    
    renderFlatsGrid(flatsData);
    closeAllModals();
    alert("✅ Property listed successfully!");
    
    document.getElementById('add-name').value = '';
    document.getElementById('add-city').value = '';
    document.getElementById('add-price').value = '';
}

// --- Expense Tracker System ---
let expenses = JSON.parse(localStorage.getItem("ss_expenses")) || [];

function initExpenseTracker() {
    updateExpenseUI();
}

function addNewExpense() {
    const title = document.getElementById('exp-title')?.value;
    const amount = parseFloat(document.getElementById('exp-amount')?.value);
    const splitType = parseInt(document.getElementById('exp-split')?.value) || 1;
    
    if(!title || isNaN(amount) || amount <= 0) return alert("Please enter a valid expense name and amount.");
    
    expenses.push({ title, amount, split: splitType });
    localStorage.setItem("ss_expenses", JSON.stringify(expenses));
    
    document.getElementById('exp-title').value = '';
    document.getElementById('exp-amount').value = '';
    
    updateExpenseUI();
    alert("✅ Expense added successfully!");
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
        tbody.innerHTML = `<tr><td colspan="3" class="px-6 py-8 text-center text-slate-400">No expenses logged yet. Add your rent, groceries, or bills above.</td></tr>`;
    }

    if(totalEl) totalEl.innerText = `₹${totalSpend.toFixed(0)}`;
    if(shareEl) shareEl.innerText = `₹${myShare.toFixed(0)}`;
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
        alert("✅ Ledger reset successfully!");
    }
}

// --- Transit Fare Calculator ---
function runFareCalculation() {
    const p = document.getElementById('pickup-loc')?.value.trim();
    const d = document.getElementById('drop-loc')?.value.trim();
    if(!p || !d) return alert("Please enter both Pickup and Drop locations.");
    
    const distanceFactor = Math.abs(p.length - d.length) + 3;
    const bikeFare = Math.floor(distanceFactor * 7) + 20;
    const autoFare = Math.floor(distanceFactor * 12) + 40;
    const cabFare = Math.floor(distanceFactor * 25) + 80;
    
    alert(`📍 Estimated Fares\n\n🏍️ Bike: ₹${bikeFare}\n🚗 Auto: ₹${autoFare}\n🚕 Cab: ₹${cabFare}\n\n✅ These rates help you avoid scams!`);
}

// --- Day 1 Checklist ---
function initChecklist() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    const savedState = JSON.parse(localStorage.getItem('ss_checklist')) || {};
    
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedState[index] || false;
        checkbox.addEventListener('change', () => updateChecklistState());
    });
}

function updateChecklistState() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    const state = {};
    
    checkboxes.forEach((checkbox, index) => {
        state[index] = checkbox.checked;
    });
    
    localStorage.setItem('ss_checklist', JSON.stringify(state));
}

// --- Modals ---
function openModal(id) { 
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById(id);
    if(overlay) overlay.classList.add('active');
    if(modal) modal.classList.add('active'); 
}

function closeAllModals() { 
    const overlay = document.getElementById('modal-overlay');
    if(overlay) overlay.classList.remove('active');
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active')); 
}

// --- Utility & Animations ---
function renderSimpleGrids() {
    const tg = document.getElementById('tiffin-grid');
    if(tg) {
        tg.innerHTML = '';
        tiffinsData.forEach(t => {
            tg.innerHTML += `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 card-hover">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg text-slate-800">${t.name}</h3>
                    <span class="text-sm font-bold text-brand-600">${t.price}</span>
                </div>
                <p class="text-slate-500 text-sm mt-3">${t.desc}</p>
                <div class="mt-4 inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-location-dot mr-1"></i> ${t.loc}</div>
                <div class="mt-3 text-xs text-slate-500"><i class="fa-solid fa-phone mr-1"></i> ${t.contact}</div>
            </div>`;
        });
    }
    
    const gg = document.getElementById('gym-grid');
    if(gg) {
        gg.innerHTML = '';
        gymsData.forEach(g => {
            const features = g.features.map(f => `<span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">${f}</span>`).join('');
            gg.innerHTML += `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 card-hover">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg text-slate-800">${g.name}</h3>
                    <span class="text-sm font-bold text-brand-600">${g.price}</span>
                </div>
                <p class="text-slate-500 text-sm mt-3">${g.desc}</p>
                <div class="flex flex-wrap gap-2 mt-3">${features}</div>
                <div class="mt-3 inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md"><i class="fa-solid fa-location-dot mr-1"></i> ${g.loc}</div>
                <div class="mt-2 text-xs text-slate-500"><i class="fa-solid fa-phone mr-1"></i> ${g.contact}</div>
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
            stat.innerText = target >= 1000 ? Math.floor(count/1000) + "k+" : Math.floor(count) + "+";
        }, 30);
    });
}
