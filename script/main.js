let records = [
  {
    id: 1,
    name: "Superb A7 A111TB777",
    date: "29 августа 13:00",
    address: "проспект Стачек, 106",
  },
  {
    id: 2,
    name: "Octavia A7 A111TB777",
    date: "29 августа 21:00",
    address: "проспект Стачек, 106",
  },
];

// Konteyner elementni tanlash
let cardsContainer = document.querySelector(".cards");

// Kartalarni render qilish funksiyasi
const renderCards = () => {
  // Avval eski kontentni tozalash
  cardsContainer.innerHTML = "";

  // Kartalarni yaratish
  records.forEach((record) => {
    const cardElement = document.createElement("div");
    cardElement.className = "main-card";
    cardElement.innerHTML = `
        <div class="content">
          <div>
            <h5>${record.name}</h5>
            <h3>${record.date}</h3>
            <address>${record.address}</address>
          </div>
          <button class="delete">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#282C27"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
  
        <button class="address">
          <span>
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.25 6.875C0.25 3.14697 3.27197 0.125 7 0.125C10.728 0.125 13.75 3.14697 13.75 6.875C13.75 8.73834 12.995 10.4255 11.7739 11.6469C11.4552 11.9658 11.0237 12.3219 10.557 12.7071C9.23516 13.798 7.63096 15.1219 7.50625 16.4937C7.48095 16.7721 7.27945 17 7 17C6.72055 17 6.51905 16.7721 6.49375 16.4937C6.36904 15.1219 4.76484 13.798 3.44305 12.7071C2.97632 12.3219 2.5448 11.9658 2.22606 11.6469C1.00499 10.4255 0.25 8.73834 0.25 6.875ZM9.36292 6.87516C9.36292 8.17993 8.30521 9.23766 7.00044 9.23766C5.69568 9.23766 4.63794 8.17993 4.63794 6.87516C4.63794 5.57039 5.69568 4.51266 7.00044 4.51266C8.30521 4.51266 9.36292 5.57039 9.36292 6.87516Z"
                  fill="#FF4433"
                />
              </svg>
            </span>
            Построить маршрут
          </button>
      `;

    // O'chirish tugmachasi uchun event listener qo'shish
    cardElement
      .querySelector(".delete")
      .addEventListener("click", () => deleteRecord(record.id));

    // Kartani konteynerga qo'shish
    cardsContainer.appendChild(cardElement);
  });
};

// Karta o'chirish funksiyasi
const deleteRecord = (id) => {
  records = records.filter((record) => record.id !== id);
  renderCards(); // DOMni qayta render qilish
};

// Kartalarni birinchi marta render qilish
renderCards();
