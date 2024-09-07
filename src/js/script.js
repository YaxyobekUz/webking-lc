// import { gallery } from "../data/data";

// comment is not andifayned
const chatId = -1002173135461;
const telegramBotId = "7214628321:AAHVYLKbQ3ZzyFlQq5yXuMp7ngp1EutB9uM";
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// form elements
const elLastName = document.querySelector(".js-last-name");
const elFirstName = document.querySelector(".js-first-name");
const elPhoneNumber = document.querySelector(".js-phone-number");
const elRegisterForm = document.querySelector(".js-register-form");
const elTavsiya = document.querySelector(".js-tavsiya");
const elClassSelect = document.querySelector(".js-class-select");
const elDirectionSelect = document.querySelector(".js-direction-select");

// get input value
const getInputValue = (input) => {
  return input.value.trim();
};

// send request
const sendRequest = (e) => {
  e.preventDefault();

  // message
  const message = `👤 Ismi: ${getInputValue(elFirstName)}
👥 Familiyasi: ${getInputValue(elLastName)}
☎️ Telefon raqami: ${getInputValue(elPhoneNumber)}
🔑 Kimdan eshitdi: ${getInputValue(elTavsiya)}
📚 Sinf: ${getInputValue(elClassSelect)}
📘 Yo'nalish: ${getInputValue(elDirectionSelect)}`;

  // form data
  const formData = {
    chat_id: chatId,
    text: message,
  };

  axios
    .post(url, formData)
    .then(() => {
      alert("So'rov muvaffaqiyatli yuborildi!");
    })
    .catch(() => {
      alert("Nimadir xato ketdi!");
    });

  elFirstName.value = "";
  elLastName.value = "";
  elPhoneNumber.value = "";
  elTavsiya.value = "";
  elClassSelect.value = "";
  elDirectionSelect.value = "";
  elDirectionSelect.disabled = true;
};

// handle class change
const handleClassChange = () => {
  const classValue = elClassSelect.value;
  elDirectionSelect.innerHTML = '<option value="" disabled selected>Yo\'nalishni tanlang</option>';
  
  if (classValue < '5') {
    elDirectionSelect.innerHTML += `
      <option value="O'zbek sinf">O'zbek sinf</option>
      <option value="Rus sinf">Rus sinf</option>
      <option value="Ingliz sinf">Ingliz sinf</option>
    `;
    elDirectionSelect.disabled = false;
  } else if (classValue >= '5' || classValue < 10) {
    elDirectionSelect.innerHTML += `
      <option value="Tibbiyot">Tibbiyot</option>
      <option value="Harbiy">Harbiy</option>
      <option value="Moliya">Moliya</option>
      <option value="Xorijiy til va filalogiya">Xorijiy til va filalogiya</option>
      <option value="Axborot texnalogiyalari">Axborot texnalogiyalari</option>
    `;
    elDirectionSelect.disabled = false;
  } else {
    elDirectionSelect.disabled = true;
  }
};

elClassSelect.addEventListener("change", handleClassChange);
elRegisterForm.addEventListener("submit", sendRequest);

// input masks
IMask(elPhoneNumber, {
  mask: "+{998} (00) 000-00-00",
});

// responsive header menu
const elHamburgerBtn = document.querySelector(".js-hamburger-btn");
const elCloseMenuBtn = document.querySelector(".js-close-menu-btn");
const elResponsiveMenuRegisterBtn = document.querySelector(
  ".js-responsive-menu-register-btn"
);
const elResponsiveHeaderMenu = document.querySelector(
  ".js-responsive-header-menu"
);

elHamburgerBtn.addEventListener("click", () => {
  elResponsiveHeaderMenu.style.display = "block";
});

const closeMenu = () => {
  elResponsiveHeaderMenu.style.display = "none";
};

elCloseMenuBtn.addEventListener("click", closeMenu);
elResponsiveMenuRegisterBtn.addEventListener("click", closeMenu);
