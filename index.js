const container = document.querySelector(".container");
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke__btn");
jokeBtn.addEventListener("click", generateJoke)

generateJoke()


function generateJoke() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }
    
    fetch('https://icanhazdadjoke.com', config).
    then(res=> res.json())
    .then ((data) =>{
        jokeEl.innerHTML= data.joke

    })

        };

