// const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'Asja',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['katana', 'fan', 'charm'],
    attack,
    changeHP,
    elHP,
    renderHP
}

const player2 = {
    player: 2,
    name: 'Dominik',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['poison', 'quick attack', 'death grip'],
    attack,
    changeHP,
    elHP,
    renderHP
}

function attack() {
   return this.name + ' Fight...!';
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

function getRandom(count) {
    return Math.ceil(Math.random() * count);
}

function changeHP(count){
    this.hp -= getRandom(count);

    if(this.hp <= 0){
        this.hp = 0;
    }
    console.log(this.hp)
}

function elHP() {
    return document.querySelector('.player'+ this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function playerWins(name){
    const $winTitle = createElement('div', 'loseTitle');
    if(name) {
            $winTitle.textContent = name + ' win!';
    } else {
        $winTitle.textContent = 'Draw!';
    }

    return $winTitle;
}

// $randomButton.addEventListener('click', function(event){
//     player1.changeHP(randomHP(20));
//     player2.changeHP(randomHP(20));
//     player1.elHP();
//     player2.elHP();
//     player1.renderHP();
//     player2.renderHP();

//     
// })

function createReloadButton() {
    const $restartDiv = createElement('div', 'reloadWrap');
    const $restartButton = createElement('button', 'button');
    $restartButton.textContent = 'Restart';

    $restartButton.addEventListener('click', function(){
        window.location.reload();
    })

    $restartDiv.append($restartButton);
    $arenas.appendChild($restartDiv);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

   return {
       value: getRandom(HIT[hit]),
       hit,
       defence,
   }

}

function playerAttack(){
    const attack = {};

    for(let item of $formFight){
        if(item.checked && item.name === 'hit'){
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if(item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }
    return attack;
}
function showResult() {
    if(player1.hp === 0 || player2.hp ===0){
        $randomButton.disabled = true;
        createReloadButton();
    } 
            
    if (player1.hp === 0 && player1.hp < player2.hp){
        $arenas.appendChild(playerWins(player2.name))
    }else if (player2.hp === 0 && player2.hp < player1.hp){
        $arenas.appendChild(playerWins(player1.name))
    }else if (player1.hp === 0 && player2.hp === 0){
        $arenas.appendChild(playerWins())
    }     
}

$formFight.addEventListener('submit', function(event){
    event.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if(player.defence !== enemy.hit){
        player1.changeHP(enemy.value);
        player1.renderHP();
    }

    if(enemy.defence !== player.hit){
        player2.changeHP(player.value);
        player2.renderHP();
    }

    showResult();
});