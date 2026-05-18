const pgContainer = document.getElementById('pgContainer');

function renderPGs(){

  const city = document.getElementById('cityFilter').value;
  const gender = document.getElementById('genderFilter').value;

  let filtered = pgData.filter(pg=>{

    return (
      (city === '' || pg.city === city) &&
      (gender === '' || pg.gender === gender)
    )

  });

  pgContainer.innerHTML = '';

  filtered.forEach(pg=>{

    pgContainer.innerHTML += `
    <div class="pg-card">
      <img src="${pg.image}">

      <div class="pg-content">
        <h3>${pg.name}</h3>

        <p>${pg.city}</p>

        <div class="price">₹${pg.price}/month</div>

        <div class="features">
          ${pg.features.map(f=>`<div class="feature">${f}</div>`).join('')}
        </div>
      </div>
    </div>
    `;

  });

}

renderPGs();

function searchPG(){

  const value = document.getElementById('searchInput').value.toLowerCase();

  const cards = document.querySelectorAll('.pg-card');

  cards.forEach(card=>{

    if(card.innerText.toLowerCase().includes(value)){
      card.style.display = 'block';
    }else{
      card.style.display = 'none';
    }

  });

}

function calculateBudget(){

  const rent = Number(document.getElementById('rent').value);
  const food = Number(document.getElementById('food').value);
  const travel = Number(document.getElementById('travel').value);

  const total = rent + food + travel;

  document.getElementById('budgetResult').innerText = `Total Monthly Expense: ₹${total}`;

}

function sendMessage(){

  const input = document.getElementById('userMessage');
  const chatBox = document.getElementById('chatBox');

  const userText = input.value;

  if(userText.trim()==='') return;

  chatBox.innerHTML += `<div class="user-msg">${userText}</div>`;

  let reply = "I can help you find PGs, compare rent and guide you in your city 🚀";

  if(userText.toLowerCase().includes('budget')){
    reply = 'Try using our Budget Planner section 💰';
  }

  if(userText.toLowerCase().includes('pg')){
    reply = 'Check the PG section above for verified stays 🏠';
  }

  setTimeout(()=>{
    chatBox.innerHTML += `<div class="bot-msg">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  },500);

  input.value='';

}

const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click',()=>{

  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    darkToggle.innerText='☀️';
  }else{
    darkToggle.innerText='🌙';
  }

});
