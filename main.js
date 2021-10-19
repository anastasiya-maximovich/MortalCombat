const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');

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
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['poison', 'quick attack', 'death grip'],
    attack: function() {
        console.log(`${player2.name} Fight...`);
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div','progressbar');
    const $life = createElement('div','life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $characterImg = createElement('img');

    $player.append($progressbar);
    $life.style.width = playerObj.hp +'%';
    $progressbar.append($life);
    $name.textContent = playerObj.name;
    $progressbar.append($name);

    $player.append($character);
    $characterImg.src = playerObj.img;
    $character.append($characterImg);

    return $player;
}

function changeHP(player){
    const $playerLife = document.querySelector('.player'+ player.player + ' .life');

    player.hp -= $randomHP();
    $playerLife.style.width = player.hp + '%';

    if(player.hp <= 0){
        player.hp = 0;
    }

}

const $randomHP = () => Math.ceil(Math.random() * 10);

function playerWins(name){
    const $winTitle = createElement('div', 'loseTitle');
    if(name) {
            $winTitle.textContent = name + ' win!';
    } else {
        $winTitle.textContent = 'Draw!';
    }

    return $winTitle;
}

$randomButton.addEventListener('click', function(){
    changeHP(player2);
    changeHP(player1);

    if(player1.hp === 0 || player2.hp ===0){
        $randomButton.disabled = true;
    } 
    
    if (player1.hp === 0 && player1.hp < player2.hp){
        $arenas.appendChild(playerWins(player2.name))
    }else if (player2.hp === 0 && player2.hp < player1.hp){
        $arenas.appendChild(playerWins(player1.name))
    }else if (player1.hp === 0 && player2.hp === 0){
        $arenas.appendChild(playerWins())
    } 

})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));