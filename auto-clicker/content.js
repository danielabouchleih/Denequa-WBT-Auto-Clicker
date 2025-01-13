window.onload = function () {
  // Prüfe den Zustand der Automatisierung
  chrome.storage.local.get('isRunning', (data) => {
    if (data.isRunning) {
      simulierenButtonClick();
    }
  });

  // Überwacht Änderungen an chrome.storage.local
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.isRunning) {
      if (changes.isRunning.newValue) {
        simulierenButtonClick();
      }
    }
  });
};

function simulierenButtonClick() {
  const button = document.querySelector("#btnNext");
  if (button) {
    button.click();
    console.log("Button wurde geklickt.");
  } else {
    console.log("Button wurde nicht gefunden.");
  }
}
