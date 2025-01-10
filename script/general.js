// DOM elementlarni olish
const links = document.querySelectorAll(".navbar-link");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const watsapBtn = document.querySelector(".watsap-btn");
const modalCard = document.querySelector(".modal-card");
const cabinentBtn = document.querySelector(".cabinent-btn");

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
  modal.classList.remove("active");
}

// Modalni ochish funksiyasi
function openModal(content) {
  modalCard.innerHTML = content;
  modal.classList.add("active");
}

// Cabinent tugmasi bosilganda modalni ochish
cabinentBtn?.addEventListener("click", () => {
  const content = `
    <div class="modal-title">
      Выйти из Личного кабинета?
    </div>
    <div class="modal-btns">
      <button class="yes-btn">Да</button>
      <button class="no-btn">Нет</button>
    </div>
  `;
  openModal(content);
});

// Whatsapp tugmasi bosilganda modalni ochish
watsapBtn?.addEventListener("click", () => {
  const content = `
    <div class="modal-title">
      Написать нам в Whatsapp
    </div>
    <div class="modal-btns">
      <button class="wats-btn">
        <span>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8184 14.6445L15.6934 13.082C15.5704 13.0207 15.4334 12.993 15.2962 13.0015C15.159 13.0101 15.0265 13.0547 14.9121 13.1309L13.4776 14.0879C12.819 13.7259 12.2771 13.1839 11.9151 12.5254L12.8721 11.0908C12.9482 10.9764 12.9928 10.8439 13.0014 10.7068C13.01 10.5696 12.9822 10.4326 12.9209 10.3096L11.3584 7.18457C11.2937 7.05378 11.1936 6.94375 11.0694 6.86694C10.9453 6.79013 10.8022 6.74962 10.6563 6.75C9.62027 6.75 8.6267 7.16155 7.89413 7.89411C7.16157 8.62668 6.75002 9.62025 6.75002 10.6562C6.7526 12.9347 7.65884 15.119 9.26992 16.7301C10.881 18.3412 13.0654 19.2474 15.3438 19.25C15.8567 19.25 16.3647 19.149 16.8386 18.9527C17.3126 18.7563 17.7432 18.4686 18.1059 18.1059C18.4686 17.7432 18.7564 17.3125 18.9527 16.8386C19.149 16.3647 19.25 15.8567 19.25 15.3438C19.2501 15.1986 19.2098 15.0563 19.1336 14.9328C19.0573 14.8093 18.9482 14.7095 18.8184 14.6445ZM15.3438 17.6875C13.4796 17.6854 11.6924 16.944 10.3742 15.6258C9.05604 14.3076 8.31459 12.5204 8.31252 10.6562C8.31237 10.1144 8.49998 9.58919 8.84344 9.17006C9.1869 8.75093 9.66497 8.46377 10.1963 8.35742L11.3174 10.6035L10.3633 12.0234C10.292 12.1304 10.2482 12.2533 10.2358 12.3812C10.2233 12.5091 10.2426 12.6382 10.292 12.7568C10.851 14.0853 11.9078 15.1422 13.2363 15.7012C13.3554 15.7527 13.4854 15.7738 13.6146 15.7626C13.7439 15.7513 13.8682 15.7081 13.9766 15.6367L15.4033 14.6855L17.6494 15.8066C17.5423 16.3386 17.2538 16.8169 16.8334 17.1599C16.4129 17.5029 15.8864 17.6894 15.3438 17.6875ZM13 2.84375C11.2466 2.84337 9.52289 3.29696 7.99675 4.16038C6.47061 5.0238 5.19401 6.26763 4.2912 7.7708C3.3884 9.27397 2.89014 10.9853 2.84493 12.7381C2.79972 14.491 3.2091 16.2257 4.03322 17.7734L2.92482 21.0986C2.83301 21.3739 2.81969 21.6694 2.88635 21.9518C2.953 22.2343 3.09701 22.4926 3.30222 22.6978C3.50743 22.903 3.76574 23.047 4.04819 23.1137C4.33064 23.1803 4.62608 23.167 4.90139 23.0752L8.22658 21.9668C9.58866 22.6913 11.0979 23.0959 12.6397 23.15C14.1815 23.2041 15.7154 22.9062 17.1249 22.279C18.5344 21.6518 19.7825 20.7117 20.7744 19.5302C21.7664 18.3486 22.4761 16.9565 22.8498 15.4597C23.2234 13.9629 23.2511 12.4006 22.9308 10.8914C22.6105 9.3823 21.9506 7.96595 21.0012 6.74992C20.0518 5.53388 18.8379 4.55012 17.4515 3.8733C16.0651 3.19647 14.5428 2.84438 13 2.84375ZM13 21.5938C11.4893 21.5948 10.005 21.1969 8.69729 20.4404C8.60154 20.3849 8.49509 20.3504 8.38498 20.3391C8.27488 20.3278 8.16363 20.34 8.05861 20.375L4.40627 21.5938L5.62404 17.9414C5.65915 17.8365 5.67155 17.7252 5.66044 17.6151C5.64933 17.505 5.61495 17.3986 5.55959 17.3027C4.6123 15.665 4.23196 13.7603 4.47759 11.8843C4.72321 10.0083 5.58107 8.26584 6.91807 6.92714C8.25508 5.58844 9.9965 4.72839 11.8722 4.48039C13.7479 4.2324 15.653 4.61033 17.2919 5.55555C18.9309 6.50078 20.2122 7.96046 20.9369 9.70816C21.6616 11.4559 21.7894 13.3939 21.3002 15.2216C20.8111 17.0493 19.7326 18.6645 18.2318 19.8166C16.7311 20.9688 14.892 21.5934 13 21.5938Z" fill="white" />
          </svg>
        </span>
        Связаться
      </button>
    </div>
  `;
  openModal(content);
});

// Modalni yopish
modalClose?.addEventListener("click", closeModal);

// Modal ichidagi tugmalar uchun hodisalar
modalCard?.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("yes-btn") ||
    e.target.classList.contains("no-btn") ||
    e.target.classList.contains("wats-btn")
  ) {
    closeModal();
  }
});
