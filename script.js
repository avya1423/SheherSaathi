/* =========================================================
   SHEHERSAATHI - CORE LOGIC
   ========================================================= */

// Global State
let currentCity = 'Bhopal';
let roommates = [];
let expenses = [];

window.onload = () => {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.display = 'none';
    }, 500);

    // Initialize UI
    switchCity(currentCity, document.querySelector('.city-btn.active'));
};

/* --- NAVIGATION & CORE UI --- */
function switchTab(tabId, btnElement) {
    // Update Tab Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');

    // Update Tab Panels
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
}

function switchCity(cityName, btnElement) {
    currentCity = cityName;
    
    // Update active city button
    if(btnElement) {
        document.querySelectorAll('.city-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }

    // Re-render specific city components
    renderPGs();
    renderTiffins();
    renderMarket();
    renderRoutes();
    
    // Update static labels
    const routeTitle = document.getElementById('routeCityName');
    if(routeTitle) routeTitle.textContent = currentCity;
    const pgHeading = document.getElementById('pg-heading');
    if(pgHeading) pgHeading.textContent = `PGs in ${currentCity}`;
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

/* --- PG FINDER (Existing logic adapted for new CSS) --- */
function renderPGs() {
    const grid = document.getElementById('pgGrid');
    if(!grid) return;
    
    const search = document.getElementById('pgSearch')?.value.toLowerCase() || '';
    const gender = document.getElementById('pgGender')?.value || '';
    const price = document.getElementById('pgPrice')?.value || '';
    
    let filtered = pgData.filter(pg => {
        return pg.city === currentCity &&
               pg.name.toLowerCase().includes(search) &&
               (gender === '' || pg.gender === gender || pg.gender === 'Both') &&
               (price === '' || parseInt(pg.price.replace(/\D/g,'')) <= parseInt(price));
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-sub);">No PGs found in ${currentCity} matching criteria.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(pg => `
        <div class="item-card">
            <img src="${pg.image}" class="item-img" alt="${pg.name}">
            <div class="item-body">
                <div><span class="item-badge badge-blue">${pg.gender}</span></div>
                <div class="item-title">${pg.name}</div>
                <div class="item-desc">📍 ${pg.address} <br>✨ ${pg.amenities}</div>
                <div class="item-price">${pg.price} <span style="font-size:0.8rem;color:var(--text-sub);font-weight:normal">/mo</span></div>
                <a href="tel:${pg.contact}" class="item-btn">📞 Contact Owner</a>
            </div>
        </div>
    `).join('');
    
    const count = document.getElementById('pg-count');
    if(count) count.textContent = `Showing ${filtered.length} verified listings`;
}

/* --- 🍲 TIFFIN TRACKER --- */
function renderTiffins() {
    const grid = document.getElementById('tiffinGrid');
    if(!grid) return;

    const type = document.getElementById('tiffinType')?.value || '';
    const budget = document.getElementById('tiffinBudget')?.value || '';

    let filtered = tiffinData.filter(t => {
        return t.city === currentCity &&
               (type === '' || t.type === type || t.type === 'Both') &&
               (budget === '' || t.price <= parseInt(budget));
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-sub);">No Tiffin services found in ${currentCity}.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(t => `
        <div class="item-card">
            <div class="item-body">
                <div><span class="item-badge ${t.type === 'Veg' ? 'badge-green' : 'badge-blue'}">${t.type}</span></div>
                <div class="item-title">${t.name}</div>
                <div class="item-desc">📍 Area: ${t.area} <br>⏱️ ${t.meals}<br>⭐ ${t.rating} Rating</div>
                <div class="item-price">₹${t.price} <span style="font-size:0.8rem;color:var(--text-sub);font-weight:normal">/mo</span></div>
                <a href="tel:${t.contact}" class="item-btn">📞 Subscribe</a>
            </div>
        </div>
    `).join('');
}

/* --- 🛍️ STUDENT MARKETPLACE --- */
function renderMarket() {
    const grid = document.getElementById('marketGrid');
    if(!grid) return;

    const cat = document.getElementById('marketCat')?.value || '';

    let filtered = marketData.filter(m => {
        return m.city === currentCity && (cat === '' || m.category === cat);
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-sub);">No items for sale in ${currentCity} right now. Be the first to list!</div>`;
        return;
    }

    grid.innerHTML = filtered.map(m => `
        <div class="item-card">
            <div class="item-body">
                <div><span class="item-badge badge-blue">${m.category}</span></div>
                <div class="item-title">${m.title}</div>
                <div class="item-desc">👤 By: ${m.postedBy} <br>🛠️ Condition: ${m.condition}</div>
                <div class="item-price">₹${m.price}</div>
                <a href="tel:${m.contact}" class="item-btn">💬 Contact Seller</a>
            </div>
        </div>
    `).join('');
}

function addNewMarketItem() {
    const title = document.getElementById('newItemTitle').value;
    const cat = document.getElementById('newItemCat').value;
    const price = document.getElementById('newItemPrice').value;

    if(!title || !price) return alert('Please fill title and price!');

    marketData.push({
        id: Date.now(), title: title, city: currentCity, price: parseInt(price), 
        category: cat, condition: "Used", postedBy: "You", contact: "N/A"
    });

    closeModal('addItemModal');
    document.getElementById('newItemTitle').value = '';
    document.getElementById('newItemPrice').value = '';
    renderMarket();
}

/* --- 💸 EXPENSE SPLITTER --- */
function addRoommate() {
    const nameInput = document.getElementById('splitName');
    const name = nameInput.value.trim();
    if(!name || roommates.includes(name)) return;
    
    roommates.push(name);
    nameInput.value = '';
    updateSplitterUI();
}

function addExpense() {
    const desc = document.getElementById('expenseDesc').value;
    const amt = parseFloat(document.getElementById('expenseAmt').value);
    const payer = document.getElementById('expensePayer').value;

    if(!desc || !amt || !payer || roommates.length === 0) return alert('Fill all details and add roommates first.');

    expenses.push({ desc, amt, payer });
    document.getElementById('expenseDesc').value = '';
    document.getElementById('expenseAmt').value = '';
    calculateSplit();
}

function updateSplitterUI() {
    // Update Chips
    document.getElementById('roommateList').innerHTML = roommates.map(r => `<span class="smart-chip">${r}</span>`).join('');
    // Update Dropdown
    const select = document.getElementById('expensePayer');
    select.innerHTML = '<option value="">Paid by...</option>' + roommates.map(r => `<option value="${r}">${r}</option>`).join('');
    calculateSplit();
}

function calculateSplit() {
    const resBox = document.getElementById('splitResults');
    if(roommates.length === 0 || expenses.length === 0) {
        resBox.innerHTML = "Add roommates and expenses to see calculations.";
        return;
    }

    let balances = {};
    roommates.forEach(r => balances[r] = 0);
    
    let totalSpent = 0;

    expenses.forEach(ex => {
        totalSpent += ex.amt;
        const splitAmt = ex.amt / roommates.length;
        roommates.forEach(r => {
            if(r === ex.payer) balances[r] += (ex.amt - splitAmt); // Payer gets back
            else balances[r] -= splitAmt; // Others owe
        });
    });

    let html = `<div style="margin-bottom:10px; font-size:0.9rem; color:var(--text-sub)">Total Spent: ₹${totalSpent.toFixed(2)}</div>`;
    
    let debts = [];
    // Greedy settle up algorithm (simplified)
    for(let r1 of roommates) {
        if(balances[r1] < -0.01) {
            for(let r2 of roommates) {
                if(balances[r2] > 0.01) {
                    let amount = Math.min(Math.abs(balances[r1]), balances[r2]);
                    balances[r1] += amount;
                    balances[r2] -= amount;
                    debts.push(`<strong>${r1}</strong> owes <strong>${r2}</strong>: ₹${amount.toFixed(2)}`);
                }
            }
        }
    }

    if(debts.length === 0) html += `<div class="split-result-item">Everyone is settled up! 🎉</div>`;
    else html += debts.map(d => `<div class="split-result-item">${d}</div>`).join('');

    resBox.innerHTML = html;
}

function resetSplitter() {
    roommates = [];
    expenses = [];
    updateSplitterUI();
}

/* --- 🚌 TRANSIT ROUTES --- */
function renderRoutes() {
    const list = document.getElementById('routeList');
    if(!list) return;

    let localRoutes = transitData.filter(r => r.city === currentCity);
    
    if(localRoutes.length === 0) {
        list.innerHTML = `<div style="padding: 10px; color: var(--text-sub);">No major route data available for ${currentCity} yet.</div>`;
        return;
    }

    list.innerHTML = localRoutes.map(r => `
        <div class="route-item">
            <div class="route-icon">${r.type === 'Metro' ? '🚇' : '🚍'}</div>
            <div class="route-details">
                <div class="route-name">${r.route} (${r.type})</div>
                <div class="route-path">${r.from} ➔ ${r.to}</div>
            </div>
            <div class="route-freq">${r.freq}</div>
        </div>
    `).join('');
}

/* --- 🤖 AI CHAT & VOICE --- */
function sendAIMessage(forcedText = null) {
    const input = document.getElementById('aiInput');
    const text = forcedText || input.value.trim();
    if(!text) return;

    const chat = document.getElementById('aiMessages');
    chat.innerHTML += `<div class="ai-msg user"><div class="ai-bubble">${text}</div></div>`;
    input.value = '';

    // Mock AI response
    setTimeout(() => {
        chat.innerHTML += `
            <div class="ai-msg bot">
                <div class="ai-avatar">🤖</div>
                <div class="ai-bubble">I'm still a mock AI, but I understood you asked about "${text}" in ${currentCity}. I will get smarter soon!</div>
            </div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

function startAIVoice() {
    const btn = document.getElementById('aiVoiceBtn');
    
    // Check Web Speech API Support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) {
        alert("Voice recognition is not supported in your browser.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // English-India
    recognition.interimResults = false;

    recognition.onstart = function() {
        btn.classList.add('bg-danger');
        btn.innerHTML = '🛑';
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('aiInput').value = transcript;
        sendAIMessage(); // Auto-send
    };

    recognition.onspeechend = function() {
        recognition.stop();
        btn.classList.remove('bg-danger');
        btn.innerHTML = '🎤';
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error", event.error);
        btn.classList.remove('bg-danger');
        btn.innerHTML = '🎤';
    };

    recognition.start();
}
