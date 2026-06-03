// =====================================================
//  SheherSaathi — Bulletproof Core Logic
// =====================================================

// 1. Defensively load data (prevents crashes if data.js is missing or broken)
let activePgData = (typeof pgData !== 'undefined' && Array.isArray(pgData)) ? pgData : [
    { name: "City Boys Hostel", city: "Bhopal", price: "₹6000", gender: "Boys", address: "MP Nagar Zone 1", amenities: "WiFi, Parking", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", contact: "9876543210" },
    { name: "Lake View Girls PG", city: "Bhopal", price: "₹6500", gender: "Girls", address: "Near Upper Lake", amenities: "WiFi, Meals, AC", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", contact: "9111111111" },
    { name: "Patna Premium PG", city: "Patna", price: "₹7000", gender: "Girls", address: "Rajendra Nagar", amenities: "WiFi, AC, Meals", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", contact: "9666666666" },
    { name: "Kankarbagh Hostel", city: "Patna", price: "₹5500", gender: "Boys", address: "Kankarbagh Colony", amenities: "WiFi, Parking", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", contact: "9555555555" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Run all render functions safely
    try { renderPGs(); } catch (e) { console.error("PG Error:", e); }
    try { renderExpenses(); } catch (e) { console.error("Expense Error:", e); }
    try { renderStudentServices(); } catch (e) { console.error("Services Error:", e); }
    try { renderMarketplace(); } catch (e) { console.error("Marketplace Error:", e); }
    try { renderChecklist(); } catch (e) { console.error("Checklist Error:", e); }
});

// --- UI Navigation ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('block');
    });
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-brand-50', 'text-brand-600');
    });

    const target = document.getElementById('tab-' + tabId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('block');
    }

    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active', 'bg-brand-50', 'text-brand-600');
    }
    
    const sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.classList.replace('translate-x-0', '-translate-x-full');
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.replace('-translate-x-full', 'translate-x-0');
    } else {
        sidebar.classList.replace('translate-x-0', '-translate-x-full');
    }
}

function openModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.classList.replace('hidden', 'flex');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.classList.replace('flex', 'hidden');
}

// --- PG Finder Logic ---
function renderPGs() {
    const grid = document.getElementById('pgGrid');
    if (!grid) return;

    const search = (document.getElementById('pgSearch')?.value || '').toLowerCase();
    const city = document.getElementById('pgCity')?.value || '';
    const gender = document.getElementById('pgGender')?.value || '';

    const filtered = activePgData.filter(p => {
        let match = true;
        if (city && p.city !== city) match = false;
        if (gender && p.gender !== gender) match = false;
        if (search && !`${p.name} ${p.address} ${p.city}`.toLowerCase().includes(search)) match = false;
        return match;
    });

    if (!filtered.length) {
        grid.innerHTML = '<div class="col-span-full py-10 text-center text-slate-500 font-medium">No properties found matching your criteria.</div>';
        return;
    }

    grid.innerHTML = filtered.map(pg => {
        const priceNum = parseInt(String(pg.price).replace(/\D/g, '')) || 5000;
        return `
        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div class="h-48 relative">
                <img src="${pg.image || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'}" class="w-full h-full object-cover">
                <span class="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-green-700 backdrop-blur-sm"><i class="fa-solid fa-shield-check"></i> Verified</span>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg mb-1 truncate">${pg.name}</h3>
                <p class="text-sm text-slate-500 mb-4"><i class="fa-solid fa-location-dot"></i> ${pg.address || pg.city}</p>
                <div class="flex gap-2 mb-4">
                    <span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">${pg.gender || 'Both'}</span>
                    <span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md line-clamp-1">${pg.amenities || 'WiFi, AC'}</span>
                </div>
                <div class="flex justify-between items-center border-t border-slate-100 pt-4 mt-2">
                    <span class="text-xl font-extrabold text-brand-600">₹${priceNum.toLocaleString()}</span>
                    <button class="bg-brand-50 text-brand-700 px-5 py-2 rounded-xl font-bold text-sm hover:bg-brand-600 hover:text-white transition" onclick="alert('Owner Contact: ${pg.contact || '9999999999'}\\nCall them to schedule a visit!')">Contact</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function addNewPG() {
    const nameInput = document.getElementById('newPGName');
    const cityInput = document.getElementById('newPGCity');
    const priceInput = document.getElementById('newPGPrice');

    const name = nameInput ? nameInput.value.trim() : '';
    const city = cityInput ? cityInput.value : 'Bhopal';
    const price = priceInput ? priceInput.value : '';

    if (!name || !price) {
        alert("Please fill all details!");
        return; 
    }

    activePgData.unshift({
        name: name, city: city, price: `₹${price}`, gender: "Both",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        contact: "9999999999", amenities: "WiFi, Food, Laundry", address: city
    });

    closeModal('addPGModal');
    renderPGs();
    
    // Clear inputs
    if(nameInput) nameInput.value = '';
    if(priceInput) priceInput.value = '';
    
    alert("Property listed successfully! It is now live on the portal.");
}

// --- Fare Calculator ---
function runFareCalculation() {
    const pInput = document.getElementById('pickup-loc');
    const dInput = document.getElementById('drop-loc');
    
    const p = pInput ? pInput.value.trim() : '';
    const d = dInput ? dInput.value.trim() : '';
    
    if (!p || !d) return alert("Enter both locations to calculate fares.");
    
    const distFactor = Math.abs(p.length - d.length) + 4;
    const bike = distFactor * 8 + 15;
    const auto = distFactor * 14 + 30;
    const cab = distFactor * 25 + 70;
    
    alert(`📍 Estimated Transparent Fares:\n\n🏍️ Bike Taxi: ₹${bike}\n🛺 Auto/E-Rickshaw: ₹${auto}\n🚕 Premium Cab: ₹${cab}\n\nAlways negotiate auto fares before sitting!`);
}

// --- Expense Tracker ---
function getExpenses() { return JSON.parse(localStorage.getItem('ss_expenses') || '[]'); }
function renderExpenses() {
    const items = getExpenses();
    const total = items.reduce((sum, item) => sum + item.amount, 0);
    const spendEl = document.getElementById('total-spend');
    if(spendEl) spendEl.innerText = `₹${total.toLocaleString()}`;
    
    const ledger = document.getElementById('expenseLedger');
    if (!ledger) return;

    ledger.innerHTML = items.length ? items.map((x, i) => `
        <tr class="hover:bg-slate-50 border-b border-slate-100 last:border-0">
            <td class="px-6 py-4 font-bold text-slate-800">${x.title} <span class="block text-xs font-normal text-slate-400 mt-1">${new Date(x.time).toLocaleDateString()}</span></td>
            <td class="px-6 py-4 font-bold text-brand-600">₹${x.amount.toLocaleString()}</td>
            <td class="px-6 py-4"><span class="bg-slate-100 text-xs px-2 py-1 rounded">${x.split === "1" ? 'Personal' : 'Split by ' + x.split}</span></td>
            <td class="px-6 py-4 text-right"><button onclick="deleteExpense(${i})" class="text-red-400 hover:text-red-600"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `).join('') : `<tr><td colspan="4" class="px-6 py-10 text-center text-slate-400">No expenses logged yet. Add your rent or groceries above!</td></tr>`;
}

function addExpense() {
    const titleInput = document.getElementById('expTitle');
    const amountInput = document.getElementById('expAmount');
    const splitInput = document.getElementById('expSplit');
    
    const title = titleInput ? titleInput.value.trim() : '';
    const amount = amountInput ? parseInt(amountInput.value) : 0;
    const split = splitInput ? splitInput.value : "1";
    
    if (!title || !amount) return alert('Enter title and valid amount.');
    
    const items = getExpenses();
    items.unshift({ title, amount, split, time: Date.now() });
    localStorage.setItem('ss_expenses', JSON.stringify(items));
    
    if(titleInput) titleInput.value = '';
    if(amountInput) amountInput.value = '';
    renderExpenses();
}

function deleteExpense(index) {
    const items = getExpenses();
    items.splice(index, 1);
    localStorage.setItem('ss_expenses', JSON.stringify(items));
    renderExpenses();
}

function clearExpenses() {
    if(confirm("Erase all financial records permanently?")) {
        localStorage.removeItem('ss_expenses');
        renderExpenses();
    }
}

// --- Marketplace ---
function getMarketItems() {
    return JSON.parse(localStorage.getItem('ss_market') || '[{"item":"Symphony Air Cooler","price":2500},{"item":"Study Table & Chair","price":1200},{"item":"B.Tech CSE Books Set","price":800}]');
}
function renderMarketplace() {
    const grid = document.getElementById('marketGrid');
    if (!grid) return;
    grid.innerHTML = getMarketItems().map(x => `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
            <div><h3 class="font-bold text-lg text-slate-800">${x.item}</h3><p class="text-brand-600 font-bold mt-1">₹${x.price.toLocaleString()}</p></div>
            <button class="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200">Buy</button>
        </div>
    `).join('');
}
function addMarketItem() {
    const itemInput = document.getElementById('marketItem');
    const priceInput = document.getElementById('marketPrice');
    
    const item = itemInput ? itemInput.value.trim() : '';
    const price = priceInput ? parseInt(priceInput.value) : 0;
    
    if (!item || !price) return alert("Enter item details and price.");
    
    const items = getMarketItems();
    items.unshift({ item, price });
    localStorage.setItem('ss_market', JSON.stringify(items));
    renderMarketplace();
    
    if(itemInput) itemInput.value = '';
    if(priceInput) priceInput.value = '';
}

// --- Supplementary Directories ---
function renderStudentServices() {
    const tg = document.getElementById('tiffinGrid');
    if (tg) tg.innerHTML = `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><h3 class="font-bold text-lg">Maa Annapurna Tiffin</h3><p class="text-slate-500 text-sm mt-1">Home-style Veg Thali</p><p class="text-brand-600 font-bold mt-3">₹2,200/mo</p></div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><h3 class="font-bold text-lg">FitDiet Protein Box</h3><p class="text-slate-500 text-sm mt-1">High protein gym diets</p><p class="text-brand-600 font-bold mt-3">₹3,500/mo</p></div>`;

    const gg = document.getElementById('gymGrid');
    if (gg) gg.innerHTML = `
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><h3 class="font-bold text-lg">PowerZone Iron Club</h3><p class="text-slate-500 text-sm mt-1">Free weights & Cardio</p><p class="text-brand-600 font-bold mt-3">₹800/mo</p></div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"><h3 class="font-bold text-lg">Elite Crossfit Studio</h3><p class="text-slate-500 text-sm mt-1">Premium training center</p><p class="text-brand-600 font-bold mt-3">₹1,500/mo</p></div>`;

    const tech = document.getElementById('techGrid');
    if (tech) tech.innerHTML = `
        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200"><h3 class="font-bold text-lg text-blue-900"><i class="fa-brands fa-python"></i> ML Starter Kit</h3><p class="text-blue-700 text-sm mt-2">Insurance fraud detection templates & Streamlit UI setups.</p></div>
        <div class="bg-brand-50 p-6 rounded-2xl border border-brand-200"><h3 class="font-bold text-lg text-brand-900"><i class="fa-solid fa-code"></i> Engineering Notes</h3><p class="text-brand-700 text-sm mt-2">C Language, Data Structures, and OOP complete PDFs.</p></div>`;
}

function renderChecklist() {
    const cl = document.getElementById('checklistGrid');
    if(!cl) return;
    const tasks = ["Verify flat electricity meter reading", "Locate nearest 24/7 hospital", "Set up local Wi-Fi connection", "Find a good local tiffin service", "Normalize bank account to local branch"];
    cl.innerHTML = tasks.map((task) => `
        <label class="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl cursor-pointer border border-transparent hover:border-slate-200 transition">
            <input type="checkbox" class="w-6 h-6 text-brand-600 rounded border-slate-300 focus:ring-brand-500 cursor-pointer">
            <span class="text-slate-700 font-medium">${task}</span>
        </label>
    `).join('');
}
