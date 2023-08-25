let purpleBTN = document.querySelector(".purple-button");

// Input Fields
let dayInputField = document.querySelector(".day-input-field");
let monthInputField = document.querySelector(".month-input-field");
let yearInputField = document.querySelector(".year-input-field");
// Span Results
let daySpan = document.querySelector(".day-result");
let monthSpan = document.querySelector(".month-result");
let yearSpan = document.querySelector(".year-result");

//Date Variables
let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth() + 1;
let totalMonths = 12;
let currentYear = new Date().getFullYear();

//Label Variables
let dayLabel = document.querySelector(".day");
let monthLabel = document.querySelector(".month");
let yearLabel = document.querySelector(".year");

purpleBTN.addEventListener("click", () => {
  //ERROR CHECKERS!!
  let withinDayRangeError = document.querySelector(".error-day");
  let withinMonthRangeError = document.querySelector(".error-month");
  let withinYearRangeError = document.querySelector(".error-year");
  //INPUT HAS BLANK VARIABLES
  let dayEmptyError = document.querySelector(".error-day-empty");
  let monthEmptyError = document.querySelector(".error-month-empty");
  let yearEmptyError = document.querySelector(".error-year-empty");

  //ERROR WHEN DAY IS NOT WITHIN 1-31
  let dayNotBetween =
    Number(dayInputField.value) < 1 || Number(dayInputField.value > 31);
  if (dayNotBetween) {
    dayLabel.style.color = "var(--Lightred)";
    dayInputField.style.border = "1px solid var(--Lightred)";
    withinDayRangeError.style.display = "flex";
  } else {
    dayLabel.style.color = "var(--Smokeygrey)";
    dayInputField.style.border = "1px solid var(--Lightgrey)";
    withinDayRangeError.style.display = "none";
  }

  //ERROR WHEN MONTH IS NOT WITHIN 1-12
  let monthNotBetween =
    Number(monthInputField.value) < 1 || Number(monthInputField.value > 12);
  if (monthNotBetween) {
    monthLabel.style.color = "var(--Lightred)";
    monthInputField.style.border = "1px solid var(--Lightred)";
    withinMonthRangeError.style.display = "flex";
  } else {
    monthLabel.style.color = "var(--Smokeygrey)";
    monthInputField.style.border = "1px solid var(--Lightgrey)";
    withinMonthRangeError.style.display = "none";
  }

  //ERROR WHEN YEAR IS ABOVE THE CURRENT YEAR
  let yearNotBetween =
    Number(yearInputField.value) > currentYear ||
    Number(yearInputField.value) < 1000;
  if (yearNotBetween) {
    yearLabel.style.color = "var(--Lightred)";
    withinYearRangeError.style.display = "flex";
    yearInputField.style.border = "1px solid var(--Lightred)";
  } else {
    yearLabel.style.color = "var(--Smokeygrey)";
    yearInputField.style.border = "1px solid var(--Lightgrey)";
    withinYearRangeError.style.display = "none";
  }

  //ERROR WHEN THE YEAR IS EMPTY
  let yearEmptyCheck = yearInputField.value === "";
  if (yearEmptyCheck) {
    yearLabel.style.color = "var(--Lightred)";

    withinYearRangeError.style.display = "none";
    yearEmptyError.style.display = "flex";
  } else {
    yearEmptyError.style.display = "none";
  }

  //ERROR WHEN THE MONTH IS EMPTY
  let monthEmptyCheck = monthInputField.value === "";
  if (monthEmptyCheck) {
    withinMonthRangeError.style.display = "none";
    monthEmptyError.style.display = "flex";
  } else {
    monthEmptyError.style.display = "none";
  }

  //ERROR WHEN THE DAY IS EMPTY
  let dayEmptyCheck = dayInputField.value === "";
  if (dayEmptyCheck) {
    withinDayRangeError.style.display = "none";
    dayEmptyError.style.display = "flex";
  } else {
    dayEmptyError.style.display = "none";
  }
  // END OF ERROR SECTION

  //ONLY RUN IF USER VALIDATION TESTS ARE PASSED
  if (
    !dayEmptyCheck &&
    !monthEmptyCheck &&
    !yearEmptyCheck &&
    !yearNotBetween &&
    !monthNotBetween &&
    !dayNotBetween
  ) {
    // START OF CALCULATION SECTION
    // If Birthday
    if (
      Number(dayInputField.value) === currentDay &&
      Number(monthInputField.value) === currentMonth &&
      Number(yearInputField.value) === currentYear
    ) {
      daySpan.innerHTML = 0;
      monthSpan.innerHTML = 0;
      yearSpan.innerHTML = 0;
    }
    if (Number(monthInputField.value) < currentMonth) {
      // Year Calculations
      let yearResult = currentYear - Number(yearInputField.value);
      yearSpan.innerHTML = yearResult;
    }

    if (Number(monthInputField.value) > currentMonth) {
      let yearResult = currentYear - Number(yearInputField.value) - 1;
      yearSpan.innerHTML = yearResult;
    }

    if (Number(monthInputField.value) === currentMonth) {
      if (Number(dayInputField.value) < currentDay) {
        let yearResult = currentYear - Number(yearInputField.value);
        yearSpan.innerHTML = yearResult;
      }

      if (Number(dayInputField.value) > currentDay) {
        let yearResult = currentYear - Number(yearInputField.value) - 1;
        yearSpan.innerHTML = yearResult;
      }
      if (Number(dayInputField.value) === currentDay) {
        let yearResult = currentYear - Number(yearInputField.value);
        yearSpan.innerHTML = yearResult;
      }
    }

    //Month Calculations
    if (Number(monthInputField.value) === currentMonth) {
      let monthResult = 0;
      monthSpan.innerHTML = monthResult;
    }

    if (Number(monthInputField.value) > currentMonth) {
      let monthResult = totalMonths - (monthInputField.value - currentMonth);
      monthSpan.innerHTML = monthResult;
    }

    if (Number(monthInputField.value) < currentMonth) {
      let monthResult = currentMonth - monthInputField.value;
      monthSpan.innerHTML = monthResult;
    }

    //Day Calculations
    if (Number(dayInputField.value) === currentDay) {
      let dayResult = 0;
      daySpan.innerHTML = dayResult;
    }

    if (dayInputField.value > currentDay) {
      let dayResult = 30 - (Number(dayInputField.value) - currentDay - 1);
      daySpan.innerHTML = dayResult;
    }

    if (dayInputField.value < currentDay) {
      let dayResult = currentDay - dayInputField.value;
      daySpan.innerHTML = dayResult;
    }
  } else {
    daySpan.innerHTML = "--";
    monthSpan.innerHTML = "--";
    yearSpan.innerHTML = "--";
  }
});
//END OF CALCULATION SECTION

// START OF MAX INPUT LENGTH
function limitInputLength(inputField, maxLength) {
  inputField.addEventListener("input", () => {
    if (inputField.value.length > maxLength) {
      inputField.value = inputField.value.slice(0, maxLength);
    }
  });
}

limitInputLength(dayInputField, 2);
limitInputLength(monthInputField, 2);
limitInputLength(yearInputField, 4);
//END OF MAX INPUT LENGTH
