// Data is loaded from data.js globally

// DOM Elements
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');
const heroTitle = document.getElementById('hero-title');
const countdownContainer = document.getElementById('countdown');
const itineraryContainer = document.getElementById('itinerary-list');
const checklistContainer = document.getElementById('checklist-container');

// State
let activeTab = 'home';

// Init
function init() {
    renderHome();
    renderItinerary();
    renderChecklist();
    setupNavigation();
    startCountdown();
}

// Navigation Logic
function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            switchTab(target);
        });
    });
}

function switchTab(tabId) {
    activeTab = tabId;

    // Update UI
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.target === tabId);
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Functions
function renderHome() {
    heroTitle.textContent = tripDetails.title;
    // Additional dynamic home content can go here
}

function startCountdown() {
    const targetDate = new Date(tripDetails.startDate).getTime();

    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownContainer.innerHTML = "<div class='text-gold font-bold' style='font-size: 1.5rem;'>D-Day 출발일 ✈️</div>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;

        // Add text if not exists
        let label = document.getElementById('countdown-label');
        if (!label) {
            label = document.createElement('div');
            label.id = 'countdown-label';
            label.style.width = '100%';
            label.style.textAlign = 'center';
            label.style.marginTop = '15px';
            label.style.fontSize = '0.9rem';
            label.style.color = 'var(--color-text-muted)';
            label.textContent = '남았습니다';
            countdownContainer.style.flexWrap = 'wrap';
            countdownContainer.appendChild(label);
        }
    }

    update();
    setInterval(update, 1000 * 60); // Update every minute
}

function renderItinerary() {
    const state = getChecklistState(); // Reuse if needed or remove
    itineraryContainer.innerHTML = itinerary.map(day => `
        <div class="card">
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid var(--color-glass-border); padding-bottom:10px;">
                <span class="text-gold font-bold">${day.date}</span>
                <span class="text-muted" style="font-size:0.9rem">${day.city}</span>
            </div>
            <h3 style="margin-bottom:15px;">D-${day.day}: ${day.title}</h3>
            <div class="events">
                ${day.events.map(event => `
                    <div style="display:flex; gap:15px; margin-bottom:12px;">
                        <div style="min-width:50px; font-weight:600; color:var(--color-accent);">${event.time}</div>
                        <div style="flex:1;">
                            <div style="display:flex; justify-content:space-between; align-items:start;">
                                <div style="font-weight:600;">${event.title}</div>
                                ${event.mapQuery ? `
                                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}" 
                                       target="_blank" 
                                       class="btn-map">
                                       <i class="ph ph-map-pin"></i> Go
                                    </a>
                                ` : ''}
                            </div>
                            <div style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:5px;">${event.desc}</div>
                            ${event.image ? `
                                <img src="${event.image}" alt="${event.title}" style="width:100%; border-radius:8px; margin-top:5px; max-height:150px; object-fit:cover;">
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Checkbox Logic
function getChecklistState() {
    const saved = localStorage.getItem('tripChecklist');
    return saved ? JSON.parse(saved) : {};
}

function saveChecklistState(id, isChecked) {
    const state = getChecklistState();
    state[id] = isChecked;
    localStorage.setItem('tripChecklist', JSON.stringify(state));
}

function renderChecklist() {
    const state = getChecklistState();

    checklistContainer.innerHTML = checklistItems.map((cat, catIdx) => `
        <div class="card">
            <h3 style="color:var(--color-primary); margin-bottom:10px;">${cat.category}</h3>
            <ul style="list-style:none;">
                ${cat.items.map((item, itemIdx) => {
        const id = `check-${catIdx}-${itemIdx}`;
        const isChecked = state[id] ? 'checked' : '';
        return `
                    <li style="margin-bottom:8px; display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" id="${id}" ${isChecked} 
                               onchange="saveChecklistState('${id}', this.checked)"
                               style="accent-color:var(--color-primary); width:18px; height:18px;">
                        <label for="${id}">${item}</label>
                    </li>
                    `;
    }).join('')}
            </ul>
        </div>
    `).join('');
}

// Run
document.addEventListener('DOMContentLoaded', init);
