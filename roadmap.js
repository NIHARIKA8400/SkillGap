/* =========================================================
   SkillGap — roadmap.js
   Runs only on roadmap.html.

   What it does:
   - Fills each week's progress bar from its data-progress value
   - "Mark week complete" sets that week to 100% (uncheck goes back)
   - Updates the overall progress card at the top
   ========================================================= */

const weeks = document.querySelectorAll('.week');

const overallBar     = document.getElementById('overall-bar');
const overallPercent = document.getElementById('overall-percent');
const overallCount   = document.getElementById('overall-count');


/* Show one week's progress (0–100) and its status label */
function showWeek(week, value, isDone) {
  week.querySelector('.gapbar').style.setProperty('--value', value);
  week.querySelector('.week__percent').textContent = value + '%';

  // Classes drive the colours in CSS
  week.classList.toggle('is-complete', isDone);
  week.classList.toggle('is-started', !isDone && value > 0);

  // Status text
  const status = week.querySelector('.week__status');
  if (isDone) {
    status.textContent = 'Completed';
  } else if (value > 0) {
    status.textContent = 'In progress';
  } else {
    status.textContent = 'Not started';
  }
}


/* Recalculate the overall card: average of all weeks + count of finished weeks */
function updateOverall() {
  let sum = 0;
  let finished = 0;

  weeks.forEach(function (week) {
    const isDone = week.classList.contains('is-complete');
    const startValue = Number(week.dataset.progress);
    sum += isDone ? 100 : startValue;
    if (isDone) finished++;
  });

  const average = Math.round(sum / weeks.length);

  overallBar.style.setProperty('--value', average);
  overallPercent.textContent = average + '%';
  overallCount.textContent = finished + ' of ' + weeks.length + ' weeks complete';
}


/* Set up every week */
weeks.forEach(function (week) {
  const checkbox = week.querySelector('.week__done input');
  const startValue = Number(week.dataset.progress);

  // Initial display
  showWeek(week, startValue, false);

  // When the checkbox is toggled
  checkbox.addEventListener('change', function () {
    const isDone = checkbox.checked;
    showWeek(week, isDone ? 100 : startValue, isDone);
    updateOverall();
  });
});

updateOverall();