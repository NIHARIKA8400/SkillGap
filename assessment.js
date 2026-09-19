/* =========================================================
   SkillGap — assessment.js
   Runs only on assessment.html.

   What it does:
   - Updates the summary bar (chosen role + number of skills)
   - Enables the big button once a role is chosen
   - Keeps duplicate skills in sync ("JavaScript" appears twice)
   - Pre-selects a role from the URL, e.g. assessment.html?role=data
   - Sends the user to the dashboard when they click the button

   The card / chip "selected" looks are done in CSS (style.css),
   so this file only handles the logic.
   ========================================================= */

const roleInputs  = document.querySelectorAll('input[name="role"]');
const skillInputs = document.querySelectorAll('input[name="skill"]');

const roleText   = document.getElementById('summary-role');
const countText  = document.getElementById('summary-count');
const analyzeBtn = document.getElementById('analyze-btn');


/* Refresh everything that depends on what the user has picked */
function updateSummary() {
  // 1. Which role is selected? (null if none)
  const selectedRole = document.querySelector('input[name="role"]:checked');

  roleText.textContent = selectedRole ? selectedRole.value : 'Pick a role above';
  analyzeBtn.disabled = !selectedRole;

  // 2. How many DIFFERENT skills are selected?
  //    A Set ignores duplicates, so JavaScript only counts once.
  const uniqueSkills = new Set();
  skillInputs.forEach(function (input) {
    if (input.checked) {
      uniqueSkills.add(input.value);
    }
  });
  const total = uniqueSkills.size;
  countText.textContent = total + (total === 1 ? ' skill selected' : ' skills selected');

  // 3. Update the "2 of 5" counter in each category
  document.querySelectorAll('.skill-row').forEach(function (row) {
    const boxes = row.querySelectorAll('input[name="skill"]');
    const checked = row.querySelectorAll('input[name="skill"]:checked');
    row.querySelector('.skill-row__count').textContent = checked.length + ' of ' + boxes.length;
  });
}


/* When a role is chosen */
roleInputs.forEach(function (input) {
  input.addEventListener('change', updateSummary);
});

/* When a skill is toggled */
skillInputs.forEach(function (input) {
  input.addEventListener('change', function () {
    // If the same skill exists in another category, copy the checked state to it
    skillInputs.forEach(function (other) {
      if (other.value === input.value) {
        other.checked = input.checked;
      }
    });
    updateSummary();
  });
});


/* Pre-select a role if the URL has ?role=frontend (used by the landing page cards) */
const params = new URLSearchParams(window.location.search);
const roleFromUrl = params.get('role');

if (roleFromUrl) {
  const match = document.querySelector('input[name="role"][data-id="' + roleFromUrl + '"]');
  if (match) {
    match.checked = true;
  }
}


/* The big button */
analyzeBtn.addEventListener('click', function () {
  // LATER: save the chosen role and skills here (for example in localStorage
  // or by sending them to your backend) before moving to the dashboard.
  window.location.href = 'dashboard.html';
});


// Run once on page load so the summary is correct from the start
updateSummary();