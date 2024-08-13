// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id

clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
  clonedBtn.innerText = "Привет, кликни на меня, согрей";
  clonedBtn.classList.add("second-btn");
  clonedBtn.style.color = "rgb(255, 255, 255)";
  clonedBtn.style.backgroundColor = "#a78b71";

  document.body.appendChild(clonedBtn);
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
});

clonedBtn.addEventListener("click", () => {
  console.log(clonedBtn.style.backgroundColor);
  if (clonedBtn.style.backgroundColor === "red") {
    clonedBtn.style.backgroundColor = "blue";
    clonedBtn.innerText = "Я голубая, спасибо, мне не жарко :)";
  }

  if (clonedBtn.style.backgroundColor === "rgb(167, 139, 113)") {
    clonedBtn.style.backgroundColor = "red";
    clonedBtn.innerText = "Я покраснела, мне жарко, сделай меня голубой";
  }
});

// здесь можете создать EventListener для второй кнопки
