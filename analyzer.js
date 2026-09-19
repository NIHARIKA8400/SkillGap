/* =========================================================
   SkillGap — analyzer.js
   Runs only on analyzer.html.

   This is a UI-only demo: the results are the static example
   already written in analyzer.html. The JavaScript just shows
   them when the user clicks "Analyze Job".

   LATER: replace the setTimeout below with your real analysis
   (for example a fetch() call to your backend), then fill the
   results section with the data you get back.
   ========================================================= */

const form        = document.getElementById('analyzer-form');
const jobText     = document.getElementById('job-text');
const jobError    = document.getElementById('job-error');
const analyzeJob  = document.getElementById('analyze-job');
const useSample   = document.getElementById('use-sample');
const results     = document.getElementById('results');
const emptyState  = document.getElementById('empty-state');

// Example text for the "Use a sample" button
const SAMPLE_JOB =
  'Frontend Developer (Entry Level)\n\n' +
  'We are looking for a Frontend Developer to help build our customer-facing web app.\n\n' +
  'Requirements:\n' +
  '- Solid knowledge of HTML, CSS and JavaScript\n' +
  '- Experience building interfaces with React\n' +
  '- Comfortable consuming REST APIs\n' +
  '- Familiar with Git and code reviews\n\n' +
  'Nice to have:\n' +
  '- TypeScript\n' +
  '- Interest in web accessibility';


/* "Use a sample" button fills the text area */
useSample.addEventListener('click', function () {
  jobText.value = SAMPLE_JOB;
  jobError.hidden = true;
  jobText.focus();
});


/* "Analyze Job" button */
form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop the page from reloading

  // Nothing pasted? Show a helpful message.
  if (jobText.value.trim() === '') {
    jobError.hidden = false;
    jobText.focus();
    return;
  }
  jobError.hidden = true;

  // Fake a short "analyzing" delay so the button gives feedback
  analyzeJob.disabled = true;
  analyzeJob.textContent = 'Analyzing…';

  setTimeout(function () {
    emptyState.hidden = true;
    results.hidden = false;

    analyzeJob.disabled = false;
    analyzeJob.textContent = 'Analyze Job';

    // Scroll to the results (skip the animation if the user prefers less motion)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    results.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }, 700);
});