function openLevel(level) {
  document.getElementById("levelModal").classList.remove("hidden");
  document.getElementById("levelTitle").innerText = "Level " + level + " Details";
}

function closeModal() {
  document.getElementById("levelModal").classList.add("hidden");
}