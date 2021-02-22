const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke()
const config = {
      headers: {
            'Accept': 'application/json'
      }
}


function generateJoke(){
      fetch('https://icanhazdadjoke.com', config)
}


