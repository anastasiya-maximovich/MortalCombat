// const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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

function generateLog(type, player1, player2){
    const text = logs[type][getRandom((type.length)-1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
    console.log(text);
}

$formFight.addEventListener('submit', function(event){
    event.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if(player.defence !== enemy.hit){
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLog('hit', player2, player1);
    }

    if(enemy.defence !== player.hit){
        player2.changeHP(player.value);
        player2.renderHP();
        generateLog('defence', player1, player2)
    }

    showResult();
});

