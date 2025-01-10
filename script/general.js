// Navbar linklarni tanlash
const links = document.querySelectorAll('.navbar-link');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const watsapBtn = document.querySelector('.watsap-btn');
const modalCard = document.querySelector('.modal-card');

// Joriy sahifa URL-ni olish
const currentPath = window.location.pathname;

// Navbar havolalarni tekshirish va 'active' klassini qo'shish
links?.forEach((link, index) => {
  // Agar URL "/" bo'lsa, birinchi linkka (0-index) active klassini qo'shish
  if (currentPath === "/" && index === 0) {
    link?.classList.add('active');
  } 
  // Aks holda URL bilan mos keladigan linkka active klassini qo'shish
  else if (link?.getAttribute('href') === currentPath?.slice(1)) {
    link?.classList.add('active');
  }
});

// Modalni yopish funksiyasi
function closeModal() {
  modal.classList.remove('active');
}

// Watsapp tugmasi bosilganda modalni ochish
watsapBtn.addEventListener('click', () => {
  modal.classList.add('active');
  modalCard.innerHTML = `
    <div class="modal-title">
      Выйти из Личного кабинета?
    </div>

    <div class="modal-btns">
      <button class="yes-btn">Да</button>
      <button class="no-btn">Нет</button>
    </div>
  `;
});

// Modalni yopish tugmasi
modalClose.addEventListener('click', () => {
  closeModal();
});

// Modal ichidagi tugmalar uchun hodisalar
modalCard.addEventListener('click', (e) => {
  if (e.target.classList.contains('yes-btn')) {
    closeModal();
  }
  if (e.target.classList.contains('no-btn')) {
    closeModal();
  }
});
