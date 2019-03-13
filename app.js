//About Section
// Make the pop up box appear (clicking About button)

document.querySelector(".boxAppear1").addEventListener("click", function() {
  document.querySelector(".AboutSection").style.display = "block";
});

//Make the pop up box disappear appear (Clicking the X button)

document.querySelector(".AboutDisappear").addEventListener("click", function() {
  document.querySelector(".AboutSection").style.display = "none";
});

//Project Section
// Make the pop up box appear (clicking About button)

document.querySelector(".boxAppear2").addEventListener("click", function() {
  document.querySelector(".ProjectSection").style.display = "block";
});

//Make the pop up box disappear appear (Clicking the X button)

document
  .querySelector(".ProjectDisappear")
  .addEventListener("click", function() {
    document.querySelector(".ProjectSection").style.display = "none";
  });

//ContactSection
// Make the pop up box appear (clicking About button)

document.querySelector(".boxAppear3").addEventListener("click", function() {
  document.querySelector(".ContactSection").style.display = "block";
});

//Make the pop up box disappear appear (Clicking the X button)

document
  .querySelector(".ContactDisappear")
  .addEventListener("click", function() {
    document.querySelector(".ContactSection").style.display = "none";
  });
