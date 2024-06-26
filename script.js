let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "./Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "./Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "./Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "./Images/drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon;

let player = {
  name: "Bjarne",
  image: "./Images/pokemonTrainerIdle.png",
  pokemon: [],
};

let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name} </div>
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.image}">
            <div>${player.name}</div>
        </div>

      ${controlContainer()}

    </div>
  </div>
  `;
}

function controlContainer() {
  return `
  <div class="buttonContainer">
  <button onclick="catchPokemon()">Fang</button>    
  <button onclick="updateView()">Finn en annen</button>
  <button onclick="showPokemon()">Vis dine pokemon</button>       
</div>`;
}
function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
    <h1>Du fanget ${player.pokemon[player.pokemon.length - 1].name}</h1>
    <img src="${player.pokemon[player.pokemon.length - 1].image}">

    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  </div>
  `;
}

function catchPokemon() {
  player.pokemon.push(randomPokemon);
  caughtPokemonView();
}

function showPokemon() {
  console.log(player.pokemon);

  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
  <h1>Du fanget : </h1>
  <div class="pokemonContainer">${getCatchedPokemon()}</div>

    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  </div>
  `;
}

function getCatchedPokemon() {
  let playerPokemon = "";
  console.log(player.pokemon);
  for (let pPokemon of player.pokemon) {
    playerPokemon += `<div><p>${pPokemon.name}</p><img src="${pPokemon.image}"></div>`;
  }
  return playerPokemon;
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}
