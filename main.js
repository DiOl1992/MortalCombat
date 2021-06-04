//Задание 0
const player1 = {
    name: 'Diana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['меч', 'лук', 'пистолет'],
    attack: function () {
        console.log(`${this.name} Fight...`)
    }
};

const player2 = {
    name: 'Alex',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['дубинка', 'лук', 'арбалет'],
    attack: function () {
        console.log(`${this.name} Fight...`)
    }
};




//Задание 1
const arenas = document.querySelector('.arenas');

let createPlayer = (classNamePlayer, obj) => {
    const player = document.createElement('div');
    player.classList.add(classNamePlayer);
    arenas.appendChild(player);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    
    const character = document.createElement('div');
    character.classList.add('character');
    player.appendChild(progressbar);
    player.appendChild(character);

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = `${obj.hp}%`;
    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = obj.name;
    const img = document.createElement('img');
    img.src = obj.img;


    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
}

createPlayer('player1', player1);
createPlayer('player2', player2);


