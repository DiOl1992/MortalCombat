const arenas = document.querySelector('.arenas'),
      randomBtn = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Diana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['меч', 'лук', 'пистолет'],
    attack: function () {
        console.log(`${this.name} Fight...`)
    }
};

const player2 = {
    player: 2,
    name: 'Alex',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['дубинка', 'лук', 'арбалет'],
    attack: function () {
        console.log(`${this.name} Fight...`)
    }
};



function createEl(tag, className) {
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(obj){
    const player = createEl('div', 'player'+obj.player);
    const progressbar = createEl('div', 'progressbar');
    const character = createEl('div', 'character');
    const life = createEl('div', 'life');
    const name = createEl('div', 'name');
    const img = createEl('img');

    life.style.width = `${obj.hp}%`; 
    name.innerHTML = obj.name;
    img.src = obj.img;
    
    player.appendChild(progressbar);
    player.appendChild(character);  
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);

    return player;
}

function randomizer() {
   let randomNumber = Math.floor(Math.random()*20);
   console.log(randomNumber);
   return randomNumber;
} 


function changeHP(player) {
    const playerLife = document.querySelector(`.player${player.player} .life`);
    player.hp -= randomizer();
    playerLife.style.width = player.hp + '%';

    if (player.hp <=0){
        // arenas.appendChild(playerLose(player.name));
        player.hp = 0;
        playerLife.style.width = 0;
        randomBtn.disabled = true;
                
    }
    console.log(player1.hp, player2.hp);

}

// function playerLose(name) {
//     const loseTitle = createEl('div', 'loseTitle');
//     loseTitle.innerText = `${name} Wins!`;

//     return loseTitle;
// }



randomBtn.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);

})


function ShowWinMassage(player) {
    const loseTitle = createEl('div', 'loseTitle');
    if(player.hp>0){
        loseTitle.innerText = `${player.name} Wins!`;
    }

    arenas.appendChild(loseTitle);
}

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

console.log(player1.hp, player2.hp)
