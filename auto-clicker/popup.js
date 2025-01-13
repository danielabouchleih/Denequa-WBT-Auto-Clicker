let isRunning = false; // Speichert den Zustand der Automatisierung (Start oder Pause)
const toggleButton = document.getElementById('toggleButton');

// Funktion zum Starten oder Stoppen der Automatisierung
toggleButton.addEventListener('click', () => {
  isRunning = !isRunning; // Zustand umschalten
  if (isRunning) {
    toggleButton.textContent = 'Pause'; // Text ändern
    chrome.storage.local.set({ isRunning: true }); // Zustand speichern
  } else {
    toggleButton.textContent = 'Start'; // Text ändern
    chrome.storage.local.set({ isRunning: false }); // Zustand speichern
  }
});

// Beim Öffnen des Popups den aktuellen Zustand prüfen
chrome.storage.local.get('isRunning', (data) => {
  if (data.isRunning) {
    isRunning = true;
    toggleButton.textContent = 'Pause'; // Text auf "Pause" setzen
  }
});