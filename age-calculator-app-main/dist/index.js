const day = document.querySelector("#dayInput");
const month = document.querySelector("#monthInput");
const year = document.querySelector("#yearInput");

const years = document.querySelector("#yearRes");
const months = document.querySelector("#monthRes");
const days = document.querySelector("#dayRes");

const dayText = document.querySelector("form div:first-child p");
const monthText = document.querySelector("form div:nth-child(2) p");
const yearText = document.querySelector("form div:nth-child(3) p");

const dayError = document.querySelector("form div:first-child p:last-child");
const monthError = document.querySelector("form div:nth-child(2) p:last-child");
const yearError = document.querySelector("form div:nth-child(3) p:last-child");

const button = document.querySelector("#submit");

function isValidDate(dayValue, monthValue, yearValue) {
  const daysInMonth = {
    1: 31,
    2:
      yearValue % 4 === 0 && (yearValue % 100 !== 0 || yearValue % 400 === 0)
        ? 29
        : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  return dayValue >= 1 && dayValue <= daysInMonth[monthValue];
}

button.addEventListener("click", () => {
  const dayValue = parseInt(day.value, 10);
  const monthValue = parseInt(month.value, 10);
  const yearValue = parseInt(year.value, 10);

  if (
    isNaN(dayValue) ||
    dayValue < 1 ||
    dayValue > 31 ||
    !isValidDate(dayValue, monthValue, yearValue)
  ) {
    day.classList.add("invalid-input");
    dayText.classList.add("error");
    dayError.classList.add("displayError");
  } else {
    day.classList.remove("invalid-input");
    dayText.classList.remove("error");
    dayError.classList.remove("displayError");
  }

  if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
    month.classList.add("invalid-input");
    monthText.classList.add("error");
    monthError.classList.add("displayError");
  } else {
    month.classList.remove("invalid-input");
    monthText.classList.remove("error");
    monthError.classList.remove("displayError");
  }

  if (isNaN(yearValue) || yearValue > 2023) {
    year.classList.add("invalid-input");
    yearText.classList.add("error");
    yearError.classList.add("displayError");
  } else {
    year.classList.remove("invalid-input");
    yearText.classList.remove("error");
    yearError.classList.remove("displayError");
  }

  if (isValidDate(dayValue, monthValue, yearValue)) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDateOfMonth = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    let ageInYears = currentYear - yearValue;
    const ageInMonths = currentMonth - monthValue;
    const ageInDays = currentDateOfMonth - dayValue;

    if (monthValue >= currentMonth) {
      ageInYears--;
    }

    if (dayValue >= currentDateOfMonth) {
      ageInDays = dayValue;
    }

    document.getElementById("yearRes").textContent = ageInYears;
    document.getElementById("monthRes").textContent = ageInMonths;
    document.getElementById("dayRes").textContent = ageInDays;
  }
});
