function toggleLandInput() {
  let landOwnership = document.getElementById("landOwnership").value;
  let landDetails = document.getElementById("landDetails");

  if (landOwnership === "yes") {
    landDetails.style.display = "block";
  } else {
    landDetails.style.display = "none";
  }
}

document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Information submitted successfully!");
  // Yahan aap database me save karwa sakte ho
});