const panels = document.querySelectorAll('.panel');

// console.log(panels[0]);

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener('click', () => {
    //remove previous active classes
    removeActiveClasses();

    //add class of active
    panel.classList.add('active');
  });
});

let removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

// add pokemon's from pokemon api
const allPokemon = document.getElementById('Pokemon');

let fetchPokemon = async () => {
  for (let i = 1; i <= 15; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const item = await res.json();

    const pokeDiv = document.querySelectorAll('.panel')[i - 1];
    const pokeName = document.querySelectorAll('h3')[i - 1];

    

    const name = item.name[0].toUpperCase() + item.name.slice(1);
    pokeName.innerHTML = `${name}`;

    pokeDiv.style.backgroundImage = `url(${item.sprites.other.dream_world.front_default})`;
    pokeDiv.style.backgroundSize = 'auto 60%';
  }
};

fetchPokemon();
