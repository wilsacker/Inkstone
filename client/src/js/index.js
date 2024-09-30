import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// saveButton

// Assuming you have the Editor class and your database.js setup properly

const saveButton = document.getElementById('saveButton'); // Reference to your save button

// Event listener for the save button
saveButton.addEventListener('click', async () => {
  const content = editor.getContent(); // Replace with the method to get content from your editor
  if (content) {
    await putDb(content); // Assuming putDb is the function to save content to IndexedDB
    console.log('Content saved to the database');
  } else {
    console.error('No content to save');
  }
});

// Function to get content from the editor (modify this according to your implementation)
editor.getContent = function () {
  // Implement logic to get the current content from the editor
  // This is just an example; replace it with your actual method to get content
  return document.querySelector('#editor').value; // Replace with your actual editor element
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./dist/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
} else {
  console.error('Service workers are not supported in this browser.');
}