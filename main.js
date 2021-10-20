const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'Asja',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['katana', 'fan', 'charm'],
    attack: fight,
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
}

const player2 = {
    player: 2,
    name: 'Dominik',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['poison', 'quick attack', 'death grip'],
    attack: fight,
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
}

function fight() {
   return this.name + ' Fight...!';
}

console.log(player1.attack());
console.log(player2.attack());

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

function randomHP(count) {
    return Math.ceil(Math.random() * count);
}

function changeHP(count){
    this.hp -= randomHP(count);

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

$randomButton.addEventListener('click', function(){
    player1.changeHP(randomHP(20));
    player2.changeHP(randomHP(20));
    player1.elHP();
    player2.elHP();
    player1.renderHP();
    player2.renderHP();

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

function createReloadButton() {
    const $restartDiv = createElement('div', 'reloadWrap');
    const $restartButton = createElement('button', 'button');
    $restartButton.textContent = 'Restart';
    $restartDiv.style.zIndex = '1000';
    $restartDiv.append($restartButton);

    return $restartDiv
}

createReloadButton().addEventListener('click', function(){
    window.location.reload();
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
$arenas.appendChild(createReloadButton());