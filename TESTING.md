# Testing — Days Calendar

## 1. Unit tests

Unit tests are in `common.test.mjs`.

The tests cover the shared date calculation function, `getDateForOccurrence()`, from `common.mjs`.

The tests verify:
- Ada Lovelace Day in October 2024.
- Ada Lovelace Day in October 2025.
- International Binturong Day in May 2030.
- World Lemur Day in October 2024.
- Rejection of an invalid weekday.

Run the tests from the project directory using:

```bash
npm test
```

**Result:** All unit tests passed.

## 2. Calendar display and navigation

The website displays the current month when it loads.

The calendar is generated dynamically using JavaScript and displays the days of the selected month in a seven-column grid, with Sunday as the first column.

The following checks passed:
- The current month is displayed when the page loads.
- Every day of the selected month is displayed.
- The first day of the month appears under the correct weekday.
- Each row represents one week.
- Empty cells are only added when needed to align the calendar.
- The Previous Month and Next Month buttons work correctly.
- Repeated clicks move correctly across month and year boundaries.
- The month and year selectors allow navigation to a specific month.

## 3. Commemorative day dates

The commemorative days are loaded from `days.json`.

The website uses the shared `getDateForOccurrence()` function to calculate their dates. The dates are not hard-coded into the calendar.

The following dates were verified:

| Month displayed | Expected result | Result |
|---|---|---|
| October 2020 | Ada Lovelace Day on October 13 and World Lemur Day on October 30 | Passed |
| October 2024 | Ada Lovelace Day on October 8 and World Lemur Day on October 25 | Passed |
| October 2025 | Ada Lovelace Day on October 14 | Passed |
| May 2030 | International Binturong Day on May 11 | Passed |

The following additional months were checked to verify that the calendar starts and ends on the correct days without unnecessary rows:
- December 2024
- February 2025
- May 2025
- February 2026

The calendar also works for years such as 1900 and 2050.

## 4. Dynamic data

The calendar uses `days.json` to determine which commemorative days to display.

The implementation calculates dates dynamically and does not contain hard-coded logic for individual commemorative days.

The shared date calculation function supports the first, second, third, fourth, fifth and last occurrences of a weekday.

Invalid weekdays and occurrences are rejected with errors rather than silently returning incorrect dates.

## 5. iCal generation

The iCal generator is `generate-ical.mjs`.

Run it from the project directory using:

```bash
node generate-ical.mjs
```

**Result:** The script generated `days.ics` successfully.

The generated file contains individual events for the configured commemorative days for every year from 2020 through 2030 inclusive.

The following checks passed:
- Events use the correct dates.
- Events are individual events, not recurring events.
- Events are whole-day events without start or end times.
- Event summaries contain the correct commemorative day names.
- The file follows the iCalendar format.
- The website and iCal generator use the same date calculation logic.

The generated file was imported into a test Google Calendar, and the displayed dates matched the website.

## 6. Accessibility

The website was checked using Lighthouse in Desktop mode.

The following accessibility checks passed:
- Form controls have associated labels.
- Buttons and form controls can be operated using a keyboard.
- Keyboard focus is visible.
- The calendar controls have meaningful labels.
- Text has sufficient contrast.
- Empty calendar cells are hidden from assistive technologies.

**Result:** Lighthouse accessibility score: 100%.

The accessibility checks were completed for the required calendar views.

## 7. Deployment

The website is hosted on the internet and configured for automatic deployment when changes are merged into the GitHub repository.

The following checks passed:
- The repository contains the project source files and unit tests.
- The deployment workflow completed successfully.
- The deployed website loaded correctly.
- The calendar and navigation controls worked on the deployed website.

## 8. Test command summary

Run the unit tests:

```bash
npm test
```

Generate the iCal file:

```bash
node generate-ical.mjs
```

**Overall result:** The unit tests and project verification checks passed. The calendar displays commemorative days dynamically, supports month navigation and date selection, and generates an iCal file containing individual all-day events for 2020–2030. The project meets the tested calendar, iCal and accessibility requirements for the two-person version.

