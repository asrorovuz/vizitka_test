const avtoData = [
  {
    id: 1,
    name: "Superb",
    color: "Серый",
    year: "2011",
    number: "A444TB777",
    vin: "57564756373627645",
  },
  {
    id: 2,
    name: "Octavia A7 Octavia A7 Octavia A7 ",
    color: "Белый",
    year: "2011",
    number: "A444TB777",
    vin: "57564756373627645",
  },
];

const avtoCards = document.querySelector(".avto-cards");

avtoData.forEach((item) => {
  const avtoCard = document.createElement("div");
  avtoCard.className = "avto-card";

  avtoCard.innerHTML = `
        <div class="avto-card-name">
            <h4>${item.name}</h4>
            <p>${item.color}</p>
            <p>${item.year}</p>
        </div>

        <div class="info-content">
            <div class="avto-card-info">
                <p>Гос.номер</p>
                <p>${item.number}</p>
            </div>

            <div class="avto-card-info-content">
                <p>VIN</p>
                <p>${item.vin}</p>
            </div>
        </div>

        <div class="btn-avto">
            Посмотреть обращения
        </div>
    `;

  avtoCards.appendChild(avtoCard);
});

const avtoBtn = document.querySelectorAll(".btn-avto");
const avto = document.querySelector(".avto");
const singleAvto = document.querySelector(".single-avto");
const singleAvtoHead = document.querySelector(".single-avto-head-content");

avtoBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    avto.style.display = "none";
    singleAvto.style.display = "block";

    innerSingleAvtoData(index);
  });
});

const avtoBack = document.querySelector(".single-avto-back");

avtoBack.addEventListener("click", () => {
  avto.style.display = "block";
  singleAvto.style.display = "none";
});

function innerSingleAvtoData(index) {
    singleAvtoHead.innerHTML = "";
  const singleAvtoName = document.createElement("div");
  const singleAvtoInfo = document.createElement("div");

  singleAvtoName.className = "single-avto-name";
  singleAvtoInfo.className = "single-avto-info";

  singleAvtoName.innerHTML = `
    <h1>
        <span>
            <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.16699 11.3333H6.66699M1.66699 7.99992L3.33366 8.83325L4.39253 5.65664C4.61109 5.00096 4.72037 4.67312 4.92307 4.43074C5.10206 4.2167 5.33192 4.05102 5.59158 3.9489C5.88562 3.83325 6.2312 3.83325 6.92235 3.83325H13.0783C13.7695 3.83325 14.115 3.83325 14.4091 3.9489C14.6687 4.05102 14.8986 4.2167 15.0776 4.43074C15.2803 4.67312 15.3896 5.00096 15.6081 5.65664L16.667 8.83325L18.3337 7.99992M13.3337 11.3333H15.8337M5.66699 8.83325H14.3337C15.7338 8.83325 16.4339 8.83325 16.9686 9.10574C17.439 9.34542 17.8215 9.72787 18.0612 10.1983C18.3337 10.7331 18.3337 11.4331 18.3337 12.8333V15.0833C18.3337 15.4705 18.3337 15.6641 18.3016 15.8251C18.1701 16.4862 17.6533 17.003 16.9921 17.1346C16.8311 17.1666 16.6375 17.1666 16.2503 17.1666H15.8337C14.9132 17.1666 14.167 16.4204 14.167 15.4999C14.167 15.2698 13.9804 15.0833 13.7503 15.0833H6.25033C6.02021 15.0833 5.83366 15.2698 5.83366 15.4999C5.83366 16.4204 5.08747 17.1666 4.16699 17.1666H3.75033C3.36311 17.1666 3.16951 17.1666 3.00851 17.1346C2.34736 17.003 1.83053 16.4862 1.69902 15.8251C1.66699 15.6641 1.66699 15.4705 1.66699 15.0833V12.8333C1.66699 11.4331 1.66699 10.7331 1.93948 10.1983C2.17916 9.72787 2.56161 9.34542 3.03202 9.10574C3.5668 8.83325 4.26686 8.83325 5.66699 8.83325Z"
                stroke="#2C9207"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"/>
            </svg>
        </span>${avtoData[index]?.name}
    </h1>
    <p>${avtoData[index]?.color}</p>
    <p>${avtoData[index]?.year}</p>
`;

  singleAvtoInfo.innerHTML = `
    <div>
        <p>Гос.номер</p>
        <p>${avtoData[index]?.number}</p>
    </div>
    <div>
        <p>VIN</p>
        <p>${avtoData[index]?.vin}</p>
    </div>
`;

  singleAvtoHead.appendChild(singleAvtoName);
  singleAvtoHead.appendChild(singleAvtoInfo);
}


const textElement = document.getElementById("text");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  if (textElement.classList.contains("expanded")) {
    textElement.classList.remove("expanded");
    toggleButton.textContent = "Развернуть текст";
  } else {
    textElement.classList.add("expanded");
    toggleButton.textContent = "Свернуть текст";
  }
});

// yillarini tanlash 

const avtoTabs = document.querySelectorAll(".avto-tabs ul li");

// Default holatda birinchi elementga 'active', ikkinchisiga 'active-after' qo'shish
avtoTabs[0].classList.add("active");
if (avtoTabs[1]) {
  avtoTabs[1].classList.add("active-after");
}

avtoTabs.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Barcha elementlardan 'active' va 'active-after' klasslarini olib tashlash
    avtoTabs.forEach((tab) => tab.classList.remove("active", "active-after"));

    // Bosilgan elementga 'active' klassini qo'shish
    item.classList.add("active");

    // Oldingi elementga 'active-after' klassini qo'shish
    if (index > 0) {
      avtoTabs[index - 1].classList.add("active-after");
    }

    // Keyingi elementga 'active-after' klassini qo'shish
    if (index < avtoTabs.length - 1) {
      avtoTabs[index + 1].classList.add("active-after");
    }
  });
});

