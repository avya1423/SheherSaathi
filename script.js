// Database Mock
const flatsData = [
    { name: "Premium Indrapuri Flat", city: "Bhopal", price: 12000, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80" },
    { name: "MP Nagar Private PG", city: "Bhopal", price: 7500, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80" },
    { name: "Boring Road Independent", city: "Patna", price: 9000, img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&w=400&q=80" }
];

const fitnessFood = {
    tiffin: [
        { name: "Sattu & Protein Meals", loc: "Bhopal & Patna", tag: "High Protein" },
        { name: "Home Style Kitchen", loc: "Local Network", tag: "Daily Needs" }
    ],
    gym: [
        { name: "Iron Core Fitness", loc: "Bhopal", tag: "Heavy Weights" },
        { name: "Pro-Fit Gym", loc: "Patna", tag: "Cardio & Strength" }
    ]
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    checkLoginState();
    renderFlats(flatsData);
    toggleDirectory('tiffin');
    loadExpenses();
});

// --- UI Navigation ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- Theme Logic ---
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
}

// --- Modals & Login Simulation (Using LocalStorage) ---
function openModal(id) {
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById(id).style.display = 'block';
}

function closeAllModals() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

function handleLogin() {
    const name = document.getElementById('login-name').value.trim();
    if(!name) return alert("Please enter your name!");
    
    // Save to browser
    localStorage.setItem('sheherSaathi_user', name);
    closeAllModals();
    checkLoginState();
}

function checkLoginState() {
    const user = localStorage.getItem('sheherSaathi_user');
    const authSection = document.getElementById('auth-section');
    
    if(user) {
        authSection.innerHTML = `<span class="user-profile"><i class="fa-solid fa-circle-user"></i> ${user} <button class="btn btn-outline" style="padding: 5px 10px; margin-left:10px;" onclick="handleLogout()">Logout</button></span>`;
    } else {
        authSection.innerHTML = `<button class="btn btn-outline" onclick="openModal('login-modal')">Login</button>`;
    }
}

function handleLogout() {
    localStorage.removeItem('sheherSaathi_user');
    checkLoginState();
}

// --- Core Features ---
function renderFlats(data) {
    const grid = document.getElementById('pg-grid');
    grid.innerHTML = data.length ? '' : '<p class="text-muted">No flats found.</p>';
    data.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.img}" class="card-img">
                <h3>${item.name}</h3>
                <p class="text-muted mb-10"><i class="fa-solid fa-location-dot"></i> ${item.city}</p>
                <h2 style="color: var(--primary);">₹${item.price}<small style="font-size:14px; color:var(--text-muted);">/mo</small></h2>
                <button class="btn btn-outline w-100 mt-15">View Details</button>
            </div>`;
    });
}

function filterPGs() {
    const city = document.getElementById('city-select').value;
    const budget = document.getElementById('budget-select').value;
    
    let filtered = flatsData.filter(item => {
        return (city === "All" || item.city === city) && (budget === "All" || item.price <= parseInt(budget));
    });
    renderFlats(filtered);
}

function runFareCalculation() {
    document.getElementById('fare-bike').innerText = `₹${Math.floor(Math.random() * 30) + 40}`;
    document.getElementById('fare-auto').innerText = `₹${Math.floor(Math.random() * 50) + 70}`;
    document.getElementById('fare-cab').innerText = `₹${Math.floor(Math.random() * 100) + 150}`;
    document.getElementById('fare-dashboard').style.display = 'grid';
}

function toggleDirectory(type) {
    const grid = document.getElementById('directory-grid');
    grid.innerHTML = '';
    fitnessFood[type].forEach(item => {
        grid.innerHTML += `<div class="card"><h3>${item.name}</h3><span class="text-muted d-block mb-10">${item.loc}</span><span style="background:var(--border); padding:5px 10px; border-radius:5px; font-size:12px;">${item.tag}</span></div>`;
    });
}

// --- Persistent Expense Tracker (LocalStorage) ---
let expenses = JSON.parse(localStorage.getItem('sheherSaathi_expenses')) || [];

function addNewExpense() {
    const title = document.getElementById('exp-title').value;
    const amount = parseInt(document.getElementById('exp-amount').value);
    
    if(!title || isNaN(amount)) return alert("Enter valid details");
    
    expenses.push({ title, amount });
    localStorage.setItem('sheherSaathi_expenses', JSON.stringify(expenses)); // Save permanently
    
    document.getElementById('exp-title').value = '';
    document.getElementById('exp-amount').value = '';
    loadExpenses();
}

function loadExpenses() {
    const tbody = document.getElementById('expense-tbody');
    tbody.innerHTML = '';
    let total = 0;
    
    expenses.forEach(item => {
        total += item.amount;
        tbody.innerHTML += `<tr><td>${item.title}</td><td style="font-weight:bold;">₹${item.amount}</td></tr>`;
    });
    
    document.getElementById('total-spend').innerText = `₹${total}`;
}

function clearExpenses() {
    if(confirm("Are you sure you want to clear your budget data?")) {
        expenses = [];
        localStorage.removeItem('sheherSaathi_expenses');
        loadExpenses();
    }
}
