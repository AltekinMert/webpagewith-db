const fs = require('fs');
const fetch = require('node-fetch');

// Replace with your Render API URL
const RENDER_API_URL = 'https://this-should-work-l9hj.onrender.com/comments';
// Path to save the fetched db.json locally
const LOCAL_DB_PATH = './db.json';

async function fetchDatabase() {
  try {
    const response = await fetch(RENDER_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch database: ${response.statusText}`);
    }

    const dbData = await response.json();

    // Write the fetched database to a local file
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(dbData, null, 2));
    console.log('Database fetched and saved to local db.json.');
  } catch (error) {
    console.error('Error fetching database:', error.message);
  }
}

fetchDatabase();
