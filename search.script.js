document.addEventListener("DOMContentLoaded", (event) => {
  const searchInput = document.querySelector(".search__input");
  const resultsList = document.querySelector(".search__results");

  const data = [
    "Яблоко",
    "Яблоко",

    "Яблоко",

    "Апельсин",
    "Банан",
    "Груша",
    "Виноград",
    "Киви",
    "Манго",
    "Персик",
  ];

  searchInput.addEventListener("input", function () {
    const query = this.value.trim();

    // Валидация: проверка на минимум 3 символа
    if (query.length < 3) {
      resultsList.style.display = "none";
      return;
    }

    // Фильтрация данных
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    // Отображение результатов
    resultsList.innerHTML = ""; // Очистка предыдущих результатов
    if (filteredData.length > 0) {
      filteredData.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
          searchInput.value = item; // Заполнение input выбранным значением
          resultsList.style.display = "none"; // Скрытие списка
        });
        resultsList.appendChild(li);
      });
      resultsList.style.display = "block"; // Показать результаты
    } else {
      resultsList.style.display = "none"; // Скрыть, если нет результатов
    }
  });

  // Скрытие списка при клике вне него
  document.addEventListener("click", function (event) {
    if (
      !searchInput.contains(event.target) &&
      !resultsList.contains(event.target)
    ) {
      resultsList.style.display = "none";
    }
  });
});
