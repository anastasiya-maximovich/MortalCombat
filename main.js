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

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerClass, playerObj) {
    const $divPlayer1 = createElement('div', playerClass);
    const $divProgressbar = createElement('div','progressbar');
    const $divLife = createElement('div','life');
    const $divName = createElement('div', 'name');
    const $divCharacter = createElement('div', 'character');
    const $characterImg = createElement('img');


    $arenas.appendChild($divPlayer1);

    $divPlayer1.append($divProgressbar);
    $divLife.style.width = playerObj.hp +'%';
    $divProgressbar.append($divLife);
    $divName.textContent = playerObj.name;
    $divProgressbar.append($divName);

    $divPlayer1.append($divCharacter);
    $characterImg.src = playerObj.img;
    $divCharacter.append($characterImg);
}

createPlayer('player1', player1);
createPlayer('player2', player2);