import { openDB } from 'idb';

// Initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id' }); // Changed autoIncrement to false since you want to update the same ID
      console.log('jate database created');
    },
  });

// Logic to add content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content }); // Storing content with ID of 1
  const result = await request;
  console.log('Data saved to the database', result);
};

// Logic to get content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1); // Get content with ID of 1
  const result = await request;
  console.log('Data retrieved from the database', result?.value);
  return result?.value; // Return the value if it exists
};

// Initialize the database when the file is loaded
initdb();