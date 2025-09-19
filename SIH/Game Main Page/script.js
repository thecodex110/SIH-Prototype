// Level Data
const levels = {
  1: {
    title: "Level 1: Organic Soil Preparation",
    video: "video1.mp4",
    info: "मिट्टी को ऑर्गेनिक तरीके से कैसे तैयार करें।"
  },
  2: {
    title: "Level 2: Seed Selection",
    video: "video2.mp4",
    info: "सही बीज का चुनाव कैसे करें।"
  },
  3: {
    title: "Level 3: Irrigation Basics",
    video: "video3.mp4",
    info: "सिंचाई की सही तकनीक।"
  }
};

// Modal
const modal = document.getElementById("levelModal");
const levelTitle = document.getElementById("levelTitle");
const levelVideo = document.getElementById("levelVideo");
const levelInfo = document.getElementById("levelInfo");
const photoUpload = document.getElementById("photoUpload");
const statusDiv = document.getElementById("status");
const nextBtn = document.getElementById("nextBtn");
const streakCount = document.getElementById("streakCount");

// Open Level
function openLevel(num) {
  if (!levels[num]) return;
  modal.style.display = "flex";
  levelTitle.textContent = levels[num].title;
  levelVideo.src = levels[num].video;
  levelInfo.textContent = levels[num].info;
  statusDiv.textContent = "❌ Task Incomplete";
  statusDiv.className = "status incomplete";
  nextBtn.disabled = true;
  photoUpload.value = "";
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
}

// Upload Photo
photoUpload.addEventListener("change", () => {
  if (photoUpload.files.length > 0) {
    statusDiv.textContent = "✅ Task Complete";
    statusDiv.className = "status complete";
    nextBtn.disabled = false;
    streakCount.textContent = parseInt(streakCount.textContent) + 1;
  }
});