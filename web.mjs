let currentDate = new Date();

const calendar = document.querySelector("#calendar");
const currentMonth = document.querySelector("#current-month");
const previousButton = document.querySelector("#previous-month");
const nextButton = document.querySelector("#next-month");

function displayCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Display the current month and year.
  currentMonth.textContent = currentDate.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  // Remove the dates from the previous month.
  while (calendar.children.length > 7) {
    calendar.lastElementChild.remove();
  }

  // Find the first weekday and number of days in the month.
  const firstDay = new Date(year, month, 1).getDay();
  const numberOfDays = new Date(year, month + 1, 0).getDate();

  // Add empty boxes before the first day.
  for (let i = 0; i < firstDay; i++) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "calendar-day";
    calendar.appendChild(emptyBox);
  }

  // Add each day to the calendar.
  for (let day = 1; day <= numberOfDays; day++) {
    const dayBox = document.createElement("div");
    dayBox.className = "calendar-day";
    dayBox.textContent = day;
    calendar.appendChild(dayBox);
  }

  // Add empty boxes after the last day to complete the week.
  const totalBoxes = calendar.children.length - 7;
  const emptyBoxes = (7 - (totalBoxes % 7)) % 7;

  for (let i = 0; i < emptyBoxes; i++) {
    const emptyBox = document.createElement("div");
    emptyBox.className = "calendar-day";
    calendar.appendChild(emptyBox);
  }
}

// Go to the previous month.
previousButton.addEventListener("click", function () {
  currentDate.setDate(1);
  currentDate.setMonth(currentDate.getMonth() - 1);
  displayCalendar();
});

// Go to the next month.
nextButton.addEventListener("click", function () {
  currentDate.setDate(1);
  currentDate.setMonth(currentDate.getMonth() + 1);
  displayCalendar();
});

// Display the current month when the page loads.
displayCalendar();
