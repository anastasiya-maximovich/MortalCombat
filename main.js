const player1 = {
    name: 'Asja',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['katana', 'fan', 'charm'],
    attack: function() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Dominik',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['poison', 'quick attack', 'death grip'],
    attack: function() {
        console.log(`${player2.name} Fight...`);
    }
}

const $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, playerObj) {
    const $divPlayer1 = document.createElement('div');
    $divPlayer1.classList.add(playerClass);
    $arenas.appendChild($divPlayer1);

    const $divProgressbar = document.createElement('div');
    $divProgressbar.classList.add('progressbar');
    $divPlayer1.append($divProgressbar);
        const $divLife = document.createElement('div');
        $divLife.classList.add('life');
        $divLife.style.width = playerObj.hp +'%';
        $divProgressbar.append($divLife);
        const $divName = document.createElement('div');
        $divName.classList.add('name');
        $divName.textContent = playerObj.name;
        $divProgressbar.append($divName);

    const $divCharacter = document.createElement('div');
    $divCharacter.classList.add('character');
    $divPlayer1.append($divCharacter);
        const $characterImg = document.createElement('img');
        $characterImg.src = playerObj.img;
        $divCharacter.append($characterImg);
}

createPlayer('player1', player1);
createPlayer('player2', player2);