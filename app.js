// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // FOOTER INFO
  // =========================
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lm').textContent = document.lastModified || '—';

  // =========================
  // HERO TYPEWRITER EFFECT
  // =========================
  const subtitles = [
    "We Deliver, You Chop",
    "A mu wa, kí o jẹ",
    "Mu na zo, ku ci",
    "Anyị na-ebunye, ị na-eri",
    "À múnọ̀, í chop",
    "M kpó ékpè, ùtòm"
  ];
  const subtitleEl = document.getElementById("heroSubtitle");
  let index = 0, charIndex = 0;

  function typeEffect() {
    const text = subtitles[index];
    if (charIndex < text.length) {
      subtitleEl.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 80 + Math.random() * 120);
    } else {
      setTimeout(() => {
        index = (index + 1) % subtitles.length;
        charIndex = 0;
        subtitleEl.textContent = "";
        typeEffect();
      }, 2000);
    }
  }
  typeEffect();

  // =========================
  // MOBILE MENU TOGGLE
  // =========================
  const menuToggle = document.getElementById("menuToggle");
  const mobilePanel = document.getElementById("mobilePanel");
  menuToggle.addEventListener("click", () => mobilePanel.classList.toggle("hidden"));

  // =========================
  // HERO SLIDER
  // =========================
  new Swiper(".heroSlider", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
  });
// =========================
// ACTIVE PAGE HIGHLIGHT
// =========================
const navLinks = document.querySelectorAll('.nav-link'); // links should have class "nav-link" and data-page attribute
const currentPage = location.pathname.split('/').pop().replace('.html','') || 'index';

navLinks.forEach(link => {
  if(link.dataset.page === currentPage){
    link.classList.add('text-primary', 'font-bold'); // Highlight active link
  } else {
    link.classList.remove('text-primary', 'font-bold');
  }
});

  // =========================
  // TESTIMONIALS SLIDER
  // =========================
  const TESTIMONIALS = [
  { name: 'Aisha Musa', loc: 'Lagos', text: 'Quick delivery and the shawarma was perfect.', rating: 5, avatar: 'A' },
  { name: 'Michael Obi', loc: 'Abuja', text: 'Great packaging, tasted fresh.', rating: 5, avatar: 'M' },
  { name: 'Ngozi E.', loc: 'Enugu', text: 'I love the app-like feel. It’s so easy to order from anywhere.', rating: 4, avatar: 'N' },
  { name: 'Chinedu K', loc: 'Port Harcourt', text: 'Portions were generous and the food was hot. Highly recommend!', rating: 5, avatar: 'C' },
  { name: 'Fatima H', loc: 'Kano', text: 'Delivery was on time. Very satisfied with the service!', rating: 5, avatar: 'F' },
  { name: 'Samuel T', loc: 'Kaduna', text: 'The jollof rice was authentic and full of flavor. Will order again!', rating: 5, avatar: 'S' },
  { name: 'Rita U', loc: 'Jos', text: 'Snacks were fresh and delicious. Kids loved them!', rating: 4, avatar: 'R' },
  { name: 'Emeka O', loc: 'Enugu', text: 'I tried the suya platter. Best suya I have ever had.', rating: 5, avatar: 'E' },
  { name: 'Blessing A', loc: 'Ibadan', text: 'App is very user-friendly. Loved the fast checkout.', rating: 5, avatar: 'B' }
];

const testsWrapper = document.querySelector('.testsSwiper .swiper-wrapper');

const testsSwiper = new Swiper('.testsSwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: { delay: 4500 },
  breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
});

TESTIMONIALS.forEach(t => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide p-4';
  slide.innerHTML = `
    <div class="bg-white p-6 rounded-3xl shadow-2xl h-full flex flex-col min-h-[220px] transition transform hover:scale-105">
      <div class="flex items-center gap-3">
        <div class="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">${t.avatar}</div>
        <div class="text-left">
          <div class="font-semibold text-gray-900">${t.name}</div>
          <div class="text-sm text-gray-500">${t.loc}</div>
        </div>
      </div>
      <p class="mt-4 text-gray-700 flex-1 break-words">${t.text}</p>
      <div class="mt-4 text-yellow-400 text-lg">${'★'.repeat(t.rating)}</div>
    </div>
  `;
  testsWrapper.appendChild(slide);
});

testsSwiper.update();


  // MENU & CART LOGIC
  // =========================
  const MENU = [
    { id: 1, name: 'Chicken Shawarma', desc: 'Grilled chicken, garlic sauce', price: 1800, category: 'fast-food', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: 'Beef Burger', desc: 'Double patty, cheese', price: 2200, category: 'fast-food', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: 'Mango Smoothie', desc: 'Fresh mango, chilled', price: 900, category: 'drinks', img: 'https://images.unsplash.com/photo-1572441710266-1a5f3e1d1f10?q=80&w=800&auto=format&fit=crop' },
      { id: 4, name: 'Chocolate Cake', desc: 'Rich chocolate slice', price: 1500, category: 'desserts', img: 'https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=800&auto=format&fit=crop' },
    { id: 5, name: 'French Fries', desc: 'Crispy golden fries', price: 700, category: 'fast-food', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop' },
    { id: 6, name: 'Caesar Salad', desc: 'Fresh greens, Caesar dressing', price: 1200, category: 'healthy', img: 'https://images.unsplash.com/photo-1556910103-1e419f4b9f2d?q=80&w=800&auto=format&fit=crop' }
  ];

  let CART = JSON.parse(localStorage.getItem('chop_cart') || '[]');

  const menuGrid = document.getElementById('menuGrid');
  const cartCount = document.getElementById('cartCount');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsEl = document.getElementById('cartItems');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartBtn = document.getElementById('cartBtn');
  const closeCartDrawer = document.getElementById('closeCartDrawer');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const filterCategory = document.getElementById('filterCategory');
  const sortBy = document.getElementById('sortBy');

  /** Render menu items dynamically */
  function renderMenu(list) {
    menuGrid.innerHTML = '';
    list.forEach(item => {
      const cartItem = CART.find(c => c.id === item.id);
      const qty = cartItem ? cartItem.qty : 0;

      const card = document.createElement('article');
      card.className = 'bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition flex flex-col';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="w-full h-44 object-cover">
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-semibold text-lg">${item.name}</h3>
            <p class="text-sm text-gray-500 mt-1">${item.desc}</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div class="font-bold">₦${item.price}</div>
            <div class="flex items-center gap-2">
              <button class="removeBtn bg-red-500 text-white px-3 py-1 rounded-full" data-id="${item.id}">-</button>
              <span class="font-semibold qtyDisplay" data-id="${item.id}">${qty}</span>
              <button class="addBtn bg-primary text-white px-3 py-1 rounded-full" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });
  }

  /** Update the quantity display on menu cards */
  function updateQtyDisplay(id){
    const qtySpan = document.querySelector(`.qtyDisplay[data-id="${id}"]`);
    const cartItem = CART.find(c => c.id === id);
    qtySpan.textContent = cartItem ? cartItem.qty : 0;
  }

  /** Save cart to localStorage and update UI */
  function saveCart() {
    localStorage.setItem('chop_cart', JSON.stringify(CART));
    updateCartUI();
  }

  /** Update cart drawer and header */
  function updateCartUI() {
    // Update header count
    const totalQty = CART.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;

    // Update drawer items
    cartItemsEl.innerHTML = '';
    let subtotal = 0;
    CART.forEach(item => {
      subtotal += item.price * item.qty;
      const div = document.createElement('div');
      div.className = 'flex items-center gap-3';
      div.innerHTML = `
        <img src="${item.img}" class="w-14 h-12 object-cover rounded">
        <div class="flex-1">
          <div class="font-semibold">${item.name}</div>
          <div class="text-sm text-gray-500">₦${item.price} × ${item.qty}</div>
        </div>
        <div class="flex flex-col gap-1">
          <button data-id="${item.id}" class="inc text-sm bg-gray-100 px-2 rounded">+</button>
          <button data-id="${item.id}" class="dec text-sm bg-gray-100 px-2 rounded">-</button>
        </div>
        <button data-id="${item.id}" class="remove text-sm text-red-500 ml-2">Remove</button>
      `;
      cartItemsEl.appendChild(div);
    });
    cartSubtotalEl.textContent = '₦' + subtotal;
    renderMenu(MENU);
  }

  /** Filter & Sort Menu */
  function applyFilterSort() {
    let filtered = [...MENU];
    if(filterCategory.value !== 'all') filtered = filtered.filter(m => m.category === filterCategory.value);
    if(sortBy.value === 'price-asc') filtered.sort((a,b)=>a.price-b.price);
    if(sortBy.value === 'price-desc') filtered.sort((a,b)=>b.price-a.price);
    renderMenu(filtered);
  }

  // =========================
  // EVENT LISTENERS
  // =========================

  // Menu filter & sort
  filterCategory.addEventListener('change', applyFilterSort);
  sortBy.addEventListener('change', applyFilterSort);

  // Cart drawer toggle
  cartBtn.addEventListener('click', ()=> cartDrawer.classList.remove('translate-x-full'));
  closeCartDrawer.addEventListener('click', ()=> cartDrawer.classList.add('translate-x-full'));

  // Checkout & clear cart
  checkoutBtn.addEventListener('click', () => {
    if(CART.length === 0) return alert('Cart is empty');
    alert(`Order placed! Subtotal: ₦${CART.reduce((s,i)=>s+i.price*i.qty,0)}`);
    CART = [];
    saveCart();
    cartDrawer.classList.add('translate-x-full');
  });
  clearCartBtn.addEventListener('click', () => { CART = []; saveCart(); });

  // Delegate add/remove/inc/dec buttons
  document.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id);
    if(!id) return;
    const item = CART.find(c=>c.id===id) || MENU.find(c=>c.id===id);

    if(e.target.classList.contains('addBtn') || e.target.classList.contains('inc')) {
      const found = CART.find(c=>c.id===id);
      found ? found.qty++ : CART.push({...item, qty:1});
      saveCart(); updateQtyDisplay(id);
    }

    if(e.target.classList.contains('removeBtn') || e.target.classList.contains('dec')) {
      const found = CART.find(c=>c.id===id);
      if(found){
        found.qty--;
        if(found.qty <= 0) CART = CART.filter(c => c.id!==id);
        saveCart(); updateQtyDisplay(id);
      }
    }

    if(e.target.classList.contains('remove')) {
      CART = CART.filter(c => c.id!==id);
      saveCart(); updateQtyDisplay(id);
    }
  });

  // =========================
  // INITIAL RENDER
  // =========================
  renderMenu(MENU);
  updateCartUI();

});

// Assuming MENU array exists already

// Listen for restaurant button clicks
document.querySelectorAll('.viewMenuBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const restaurant = btn.dataset.restaurant;

    // Filter menu by restaurant
    const filteredMenu = MENU.filter(item => item.restaurant === restaurant);

    // Render filtered menu
    renderMenu(filteredMenu);

    // Scroll to menu section
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });
});

// "See all" link restores full menu
document.querySelector('#top-restaurants a[href="#menu"]').addEventListener('click', e => {
  e.preventDefault();
  renderMenu(MENU);
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 200;

    const updateCount = () => {
      count += increment;
      if(count < target){
        counter.innerText = Math.ceil(count).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  };

  // Intersection Observer to detect when counter is visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  counters.forEach(counter => observer.observe(counter));
});


const SNACKS = [
  { name: "Plantain Chips + Drink", desc: "Crispy plantain chips paired with an ice-cold refreshment — perfect for a quick bite.", img: "https://images.unsplash.com/photo-1625944230942-0f77a2c63c7d?q=80&w=800&auto=format&fit=crop", price: 600, bg: "bg-gradient-to-r from-yellow-50 to-yellow-100", border: "border-yellow-400", overlay: "bg-yellow-200" },
  { name: "Meat Pie + Juice", desc: "Golden meat pie with a refreshing juice, a classic Nigerian favorite.", img: "https://images.unsplash.com/photo-1600180758895-8b25a97910d2?q=80&w=800&auto=format&fit=crop", price: 700, bg: "bg-gradient-to-r from-red-50 to-red-100", border: "border-red-400", overlay: "bg-red-200" },
  { name: "Akara Balls + Drink", desc: "Spicy fried bean cakes served with a chilled drink, perfect for morning cravings.", img: "https://images.unsplash.com/photo-1604382354936-c70c7a3a1119?q=80&w=800&auto=format&fit=crop", price: 500, bg: "bg-gradient-to-r from-green-50 to-green-100", border: "border-green-400", overlay: "bg-green-200" },
  { name: "Chin Chin + Juice", desc: "Crunchy and sweet Chin Chin with a refreshing juice, snack anytime!", img: "https://images.unsplash.com/photo-1598514982912-bbfc47eec0fc?q=80&w=800&auto=format&fit=crop", price: 550, bg: "bg-gradient-to-r from-purple-50 to-purple-100", border: "border-purple-400", overlay: "bg-purple-200" }
];

const snackWrapper = document.getElementById("snackWrapper");
const snackNameEl = document.getElementById("snackName");
const snackDescEl = document.getElementById("snackDesc");
const snackImgEl = document.getElementById("snackImg");
const snackPriceEl = document.getElementById("snackPrice");
const snackCountdownEl = document.getElementById("snackCountdown");
const snackImageWrapper = document.getElementById("snackImageWrapper");
const snackOverlay = document.getElementById("snackOverlay");
const snackCTA = document.getElementById("snackCTA");
const snackCountdownWrapper = document.getElementById("snackCountdownWrapper");

function setSnack(snack) {
  snackNameEl.textContent = snack.name;
  snackDescEl.textContent = snack.desc;
  snackImgEl.src = snack.img;
  snackPriceEl.textContent = `₦${snack.price}`;
  snackWrapper.className = `max-w-6xl mx-auto px-6 transition-all duration-700 rounded-3xl shadow-2xl overflow-hidden ${snack.bg}`;
  snackImageWrapper.className = `overflow-hidden rounded-3xl shadow-xl animate-float border-8 ${snack.border}`;
  snackOverlay.className = `absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-40 animate-ping transition-colors duration-700 ${snack.overlay}`;

  // Trigger fade-in animation
  [snackNameEl, snackDescEl, snackCTA, snackCountdownWrapper].forEach(el => {
    el.classList.remove('opacity-0','translate-y-4');
    el.classList.add('opacity-100','translate-y-0');
  });
}

// Get snack of the day
function getSnackOfTheDay() {
  const today = new Date().toISOString().split("T")[0]; 
  const storedSnack = JSON.parse(localStorage.getItem("snackOfTheDay"));
  if (storedSnack && storedSnack.date === today) {
    setSnack(storedSnack.snack);
  } else {
    const randomSnack = SNACKS[Math.floor(Math.random() * SNACKS.length)];
    localStorage.setItem("snackOfTheDay", JSON.stringify({ date: today, snack: randomSnack }));
    setSnack(randomSnack);
  }
}

// Countdown timer for next snack
function updateCountdown() {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0); 
  const diff = tomorrow - now;
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  snackCountdownEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

getSnackOfTheDay();
updateCountdown();
setInterval(updateCountdown, 1000);






