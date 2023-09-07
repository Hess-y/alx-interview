const axios = require('axios');

// Define the URL of the Star Wars API and the movie ID based on the user's input
const baseUrl = 'https://swapi.dev/api/';


// Define the URL of the Star Wars API and the movie ID based on the user's input
const baseUrl = 'https://swapi.dev/api/';
const movieId = process.argv[2]; // Get the movie ID from the command line arguments

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Define a function to fetch and print characters for a given movie
function getCharactersForMovie(movieId) {
  const movieUrl = `${baseUrl}/films/${movieId}/`;

  request(movieUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Error: Status code ${response.statusCode}`);
      return;
    }

    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    console.log(`Characters in the movie "${movieData.title}":`);

    // Fetch and print each character's name
    characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error:', charError);
          return;
        }

        if (charResponse.statusCode !== 200) {
          console.error(`Error: Status code ${charResponse.statusCode}`);
          return;
        }

        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      });
    });
  });
}

// Call the function to fetch and print characters for the specified movie
getCharactersForMovie(movieId);

