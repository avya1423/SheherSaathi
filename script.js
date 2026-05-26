// --- Theme Handling ---
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if(theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// --- Dynamic PG Data ---
const pgs = [
    { id: 1, name: "Shiv Residency", city: "Bhopal", location: "MP Nagar Zone 2", price: 6500, gender: "Boys", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Patliputra Safe Homes", city: "Patna", location: "Boring Road", price: 5500, gender: "Both", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Delhi Heights PG", city: "Delhi", location: "Mukherjee Nagar", price: 9000, gender: "Girls", img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Indrapuri Premium", city: "Bhopal", location: "Indrapuri Sector C", price: 7500, gender: "Boys", img: "https://images.unsplash.com/photo-1598928506311-c55dd18a68b4?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Kankarbagh Comforts", city: "Patna", location: "Kankarbagh", price: 4500, gender: "Boys", img: "https://images.unsplash.com/photo-1493809842364-4e81cb094bee?auto=format&fit=crop&w=400&q=80" }
];

function renderPGs(pgList) {
    const container = document.getElementById('pg-container');
    container.innerHTML = '';
    
    if(pgList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No PGs found for this search.</p>';
        return;
    }

    pgList.forEach(pg => {
        const card = document.createElement('div');
        card.className = 'pg-card';
        card.innerHTML = `
            <img src="${pg.img}" alt="${pg.name}" class="pg-img">
            <div class="pg-info">
                <h3 class="pg-title">${pg.name}</h3>
                <span class="pg-location"><i class="fas fa-map-marker-alt"></i> ${pg.location}, ${pg.city}</span>
                <div class="pg-meta">
                    <span class="pg-price">₹${pg.price}<small>/mo</small></span>
                    <span class="badge">${pg.gender}</span>
                </div>
                <button class="btn btn-outline w-100" style="margin-top: 15px;">Contact Owner</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterPGs() {
    const city = document.getElementById('city-select').value;
    const budget = document.getElementById('budget-select').value;
    
    let filtered = pgs;
    
    if(city !== "All") {
        filtered = filtered.filter(pg => pg.city === city);
    }
    
    if(budget !== "All") {
        filtered = filtered.filter(pg => pg.price <= parseInt(budget));
    }
    
    renderPGs(filtered);
}

// Initial Render
renderPGs(pgs);

// --- Fare Calculator ---
function calculateFare() {
    const pickup = document.getElementById('pickup').value.trim();
    const dropoff = document.getElementById('dropoff').value.trim();
    
    if(!pickup || !dropoff) {
        alert("Please enter both Pickup and Drop locations.");
        return;
    }

    // Generate smart random estimates for the sake of functionality
    const baseDistance = Math.floor(Math.random() * 10) + 3; // 3 to 12 km
    
    const bikeCost = baseDistance * 8;
    const autoCost = baseDistance * 15;
    const cabCost = baseDistance * 25;

    document.getElementById('bike-fare').innerText = `₹${bikeCost}`;
    document.getElementById('auto-fare').innerText = `₹${autoCost}`;
    document.getElementById('cab-fare').innerText = `₹${cabCost}`;
    
    document.getElementById('fare-results').style.display = 'grid';
}

// --- Modals ---
const loginBtn = document.getElementById('login-btn');
const modalOverlay = document.getElementById('modal-overlay');
const loginModal = document.getElementById('login-modal');

loginBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    loginModal.style.display = 'block';
});

function closeModals() {
    modalOverlay.style.display = 'none';
    loginModal.style.display = 'none';
}

modalOverlay.addEventListener('click', closeModals);

