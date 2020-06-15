

// FIGURING OUT HOW TO WORK THE DROPDOWNS WITH SEMANTIC UI
<div class="inline field">
<label>Select Topics</label>

<select name="skills" multiple="" class="label ui selection fluid dropdown">
  <option value="">All</option>
  <option value="1">Change Methodology</option>
  <option value="2">Cognitive Computing & AI</option>
  <option value="3">Connectivity & Collaboration</option>
  </div>


  Jquery: 

$('.label.ui.dropdown')
  .dropdown();

$('.no.label.ui.dropdown')
  .dropdown({
  useLabels: false
});

$('.ui.button').on('click', function () {
  $('.ui.dropdown')
    .dropdown('restore defaults')
})
