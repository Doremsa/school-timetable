const dictionary = {
  ru: {
    title: "Школьное расписание",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    lesson1: "1 урок",
    lesson2: "2 урок",
    lesson3: "3 урок",
    lesson4: "4 урок",
    lesson5: "5 урок",
    lesson6: "6 урок",
    lesson7: "7 урок",
    math: "Математика",
    homeroom: "Классный час",
    art: "Изобразительное искусство",
    biology: "Биология",
    russian: "Русский язык",
    history: "История",
    geography: "География",
    finance: "Финансовая грамотность",
    literature: "Литература",
    it: "Информатика",
    english: "Английский язык",
    crafts: "Труды",
    pe: "Физическая культура",
    music: "Музыка",
    "class-info": "6А класс 2025-2026",
  },
  en: {
    title: "School Timetable",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    lesson1: "Period 1",
    lesson2: "Period 2",
    lesson3: "Period 3",
    lesson4: "Period 4",
    lesson5: "Period 5",
    lesson6: "Period 6",
    lesson7: "Period 7",
    math: "Mathematics",
    homeroom: "Homeroom",
    art: "Art",
    biology: "Biology",
    russian: "Russian Language",
    history: "History",
    geography: "Geography",
    finance: "Financial Literacy",
    literature: "Literature",
    it: "Computer Science",
    english: "English Language",
    crafts: "Crafts / Tech",
    pe: "Physical Education",
    music: "Music",
    "class-info": "Class 6A 2025-2026",
  },
  sk: {
    title: "Rozvrh hodín",
    monday: "Pondelok",
    tuesday: "Utorok",
    wednesday: "Streda",
    thursday: "Štvrtok",
    friday: "Piatok",
    saturday: "Sobota",
    lesson1: "1. hodina",
    lesson2: "2. hodina",
    lesson3: "3. hodina",
    lesson4: "4. hodina",
    lesson5: "5. hodina",
    lesson6: "6. hodina",
    lesson7: "7. hodina",
    math: "Matematika",
    homeroom: "Triednická hodina",
    art: "Výtvarná výchova",
    biology: "Biológia",
    russian: "Ruský jazyk",
    history: "Dejepis",
    geography: "Geografia",
    finance: "Finančná gramotnosť",
    literature: "Literatúra",
    it: "Informatika",
    english: "Anglický jazyk",
    crafts: "Technické práce",
    pe: "Telesná výchova",
    music: "Hudobná výchova",
    "class-info": "Trieda 6.A 2025-2026",
  },
};

const buttons = document.querySelectorAll(".lang-btn");
const elements = document.querySelectorAll("[data-lang]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetLang = button.getAttribute("data-btn-lang");

    elements.forEach((element) => {
      const key = element.getAttribute("data-lang");

      if (dictionary[targetLang] && dictionary[targetLang][key]) {
        element.textContent = dictionary[targetLang][key];
      }
    });
  });
});
