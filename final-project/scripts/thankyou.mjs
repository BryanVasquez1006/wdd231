// thankyou.mjs

function populateSummary() {
  const params = new URLSearchParams(window.location.search);

  const nameField = document.querySelector("#summaryName");
  const serviceField = document.querySelector("#summaryService");
  const dateField = document.querySelector("#summaryDate");
  const timeField = document.querySelector("#summaryTime");

  if (!nameField || !serviceField || !dateField || !timeField) {
    console.warn("Summary fields not found in the DOM.");
    return;
  }

  nameField.textContent = params.get("fullName") || "Not provided";
  serviceField.textContent = params.get("service") || "Not provided";
  dateField.textContent = params.get("date") || "Not selected";
  timeField.textContent = params.get("time") || "Not selected";
}

populateSummary();
