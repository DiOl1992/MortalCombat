//Задание 0
const player1 = {
    name: 'Diana',
    hp: 29,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['меч', 'лук', 'пистолет'],
    attack: function () {
        console.log(`${this.name} Fight...`)
    }
};

const player2 = {
    name: 'Alex',
    hp: 32,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['дубинка', 'лук', 'арбалет'],
    attack: function () {
        console.log(`${this.name} Fight...`)
    }
};




//Задание 1
let createPlayer = (classNamePlayer, obj) => {
    let player = document.createElement('div');
    player.classList.add(classNamePlayer);
    document.querySelector('.arenas').appendChild(player)

    let progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    
    let character = document.createElement('div');
    character.classList.add('character');
    player.appendChild(progressbar);
    player.appendChild(character);

    let life = document.createElement('div');
    life.classList.add('life');
    life.innerHTML = obj.hp;
    let name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = obj.name;
    let img = document.createElement('img');
    img.src = obj.img;


    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
}

createPlayer('player1', player1);
createPlayer('player2', player2);


