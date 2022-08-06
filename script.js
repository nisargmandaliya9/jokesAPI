const jokeElement = document.getElementById('joke');
const getJoke = document.getElementById('getJoke');

getJoke.addEventListener('click', getMeJoke);

async function getMeJoke() {

    const aJoke = await fetch('https://icanhazdadjoke.com',{
        headers: {
            'Accept': 'application/json'
        }
    });
    const joke = await aJoke.json();
    
    console.log(joke);
    console.log(joke.joke);
    jokeElement.innerHTML = joke.joke;
}

getMeJoke();