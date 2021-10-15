const player1 = {
    player: 1,
    name: 'Asja',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['katana', 'fan', 'charm'],
    attack: function() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    player: 2,
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

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $divProgressbar = createElement('div','progressbar');
    const $divLife = createElement('div','life');
    const $divName = createElement('div', 'name');
    const $divCharacter = createElement('div', 'character');
    const $characterImg = createElement('img');

    $player.append($divProgressbar);
    $divLife.style.width = playerObj.hp +'%';
    $divProgressbar.append($divLife);
    $divName.textContent = playerObj.name;
    $divProgressbar.append($divName);

    $player.append($divCharacter);
    $characterImg.src = playerObj.img;
    $divCharacter.append($characterImg);

    return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));