function openChapter(chapterNumber) {
  // Example YouTube links for demonstration
  const videos = {
    1: "https://www.youtube.com/watch?v=abcd1",
    2: "https://www.youtube.com/watch?v=abcd2",
    3: "https://www.youtube.com/watch?v=abcd3",
    4: "https://www.youtube.com/watch?v=abcd4",
    5: "https://www.youtube.com/watch?v=abcd5",
    6: "https://www.youtube.com/watch?v=abcd6",
    7: "https://www.youtube.com/watch?v=abcd7",
    8: "https://www.youtube.com/watch?v=abcd8",
    9: "https://www.youtube.com/watch?v=abcd9",
    10: "https://www.youtube.com/watch?v=abcd10"
  };

  if (videos[chapterNumber]) {
    window.open(videos[chapterNumber], "_blank");
  } else {
    alert("Video not available for Chapter " + chapterNumber);
  }
}
