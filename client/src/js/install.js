const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event; // Store the event for later use
    butInstall.classList.toggle('hidden', false); // Remove the hidden class from the button
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    promptEvent.prompt(); // Show the install prompt
    window.deferredPrompt = null; // Reset the deferred prompt variable
    butInstall.classList.toggle('hidden', true); // Hide the install button
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
    console.log('App installed successfully!');
    // Clear the deferredPrompt
    window.deferredPrompt = null;
});