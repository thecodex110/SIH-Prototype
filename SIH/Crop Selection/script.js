function showCropSelection() {
  const count = document.getElementById("cropCount").value;
  const area = document.getElementById("cropSelectionArea");
  area.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    area.innerHTML += `
      <div class="crop-box">
        <label for="crop${i}">🌾 Select Crop ${i}:</label>
        <select id="crop${i}" onchange="updateOptions()">
          <option value="">-- Select Crop --</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
          <option value="Sugarcane">Sugarcane</option>
          <option value="Cotton">Cotton</option>
        </select>
      </div>
    `;
  }
}

function updateOptions() {
  // Collect selected crops
  const count = document.getElementById("cropCount").value;
  let selected = [];

  for (let i = 1; i <= count; i++) {
    let val = document.getElementById("crop" + i).value;
    if (val) selected.push(val);
  }

  // Disable selected crops in other dropdowns
  for (let i = 1; i <= count; i++) {
    let select = document.getElementById("crop" + i);
    for (let option of select.options) {
      if (selected.includes(option.value) && option.value !== select.value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    }
  }
}

function submitForm() {
  const name = document.getElementById("farmerName").value;
  const count = document.getElementById("cropCount").value;
  let crops = [];

  for (let i = 1; i <= count; i++) {
    let crop = document.getElementById("crop" + i).value;
    if (crop) crops.push(crop);
  }

  if (!name || crops.length === 0) {
    alert("⚠️ Please enter your name and select crops.");
    return;
  }

  const resultBox = document.getElementById("resultBox");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>✅ Submission Successful!</h3>
    <p><b>Farmer:</b> ${name}</p>
    <p><b>Selected Crops:</b> ${crops.join(", ")}</p>
  `;
}