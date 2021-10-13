// class GamePlayer {
//     constructor (name, hp, img, weapon, attack) {
//         this.name = name;
//         this.hp = hp;
//         this.img = img;
//         this.weapon = weapon;
//     }
//     getAttack GamePlayer() {
//         return console.log(`${this.name} Fight...!`);
//     }
// }

const player1 = {
    name: 'Asja',
    hp: 100,
    img: `http://reactmarathon-api.herokuapp.com/assets/sonya.gif`,
    weapon: ['katana', 'fan', 'charm'],
    attack: function() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Dominik',
    hp: 80,
    img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
    weapon: ['poison', 'quick attack', 'death grip'],
    attack: function() {
        console.log(`${player2.name} Fight...`);
    }
}

let $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, playerObj) {
    let $divPlayer1 = document.createElement('div');
    $divPlayer1.classList.add(playerClass);
    $arenas.appendChild($divPlayer1);

    let $divProgressbar = document.createElement('div');
    $divProgressbar.classList.add('progressbar');
    $divPlayer1.append($divProgressbar);
        let $divLife = document.createElement('div');
        $divLife.classList.add('life');
        $divLife.style.width = playerObj.hp +'%';
        $divProgressbar.append($divLife);
        let $divName = document.createElement('div');
        $divName.classList.add('name');
        $divName.textContent = playerObj.name;
        $divProgressbar.append($divName);

    let $divCharacter = document.createElement('div');
    $divCharacter.classList.add('character');
    $divPlayer1.append($divCharacter);
        let $characterImg = document.createElement('img');
        $characterImg.src = playerObj.img;
        $divCharacter.append($characterImg);
}

createPlayer('player1', player1);
createPlayer('player2', player2);