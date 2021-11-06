// const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const LOGS = {
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

function createPlayer({ player, hp, name, img }) {
    const $player = createElement('div', `player${player}`);
    const $progressbar = createElement('div','progressbar');
    const $life = createElement('div','life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $characterImg = createElement('img');

    $player.append($progressbar);
    $life.style.width = hp +'%';
    $progressbar.append($life);
    $name.textContent = name;
    $progressbar.append($name);

    $player.append($character);
    $characterImg.src = img;
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
    return document.querySelector(`.player${this.player} .life`);
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
    if(player2.hp === 0 || player1.hp ===0){
        $randomButton.disabled = true;
        createReloadButton();
    } 
            
    if (player1.hp === 0 && player1.hp < player2.hp){
        $arenas.appendChild(playerWins(player2.name));
        generateLog('end', player2, player1);
    }else if (player2.hp === 0 && player2.hp < player1.hp){
        $arenas.appendChild(playerWins(player1.name));
        generateLog('end', player1, player2);
    }else if (player1.hp === 0 && player2.hp === 0){
        $arenas.appendChild(playerWins());
        generateLog('draw');
    }     
}

function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}

function getTextLog(type, playerName1, playerName2){
    switch (type){
        case 'start':
            return LOGS[type]
                .replace('[player1]', playerName1.name)
                .replace('[player2]', playerName2.name)
                .replace('[time]', getTime());
            break;

        case 'hit':
            return LOGS[type][getRandom(LOGS[type].length-1)-1]
            .replace('[playerKick]', playerName1.name)
            .replace('[playerDefence]', playerName2.name);
            break;

        case 'defence':
            return LOGS[type][getRandom(LOGS[type].length-1)-1]
            .replace('[playerKick]', playerName2.name)
            .replace('[playerDefence]', playerName1.name);
            break;

        case 'draw':
            return LOGS[type];
            break;

        case 'default':
            return 'Что-то пошло не так!';
            break;
    }
}

function generateLog(type, { name } = {}, { name: playerName2, hp } = {}, valueAttack){
    let text = getTextLog(type, name, playerName2);

    switch(type) {
        case 'hit':
            text = `${getTime()} ${text} -${valueAttack} [${player2.hp}/100]`;
            break;
        case 'defence':
        case 'end':
        case 'draw':
            text = `${getTime()} ${text}`;
            break;
    }
    const el = `<p>${getTextLog()}</p>`
    $chat.insertAdjacentHTML('afterbegin', el);

}

$formFight.addEventListener('submit', function(event){
    event.preventDefault();
    const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = enemyAttack();
    const { hit, defence, value } = playerAttack();

    if(defence !== hitEnemy){
        player1.changeHP(valueEnemy);
        player1.renderHP();
        generateLog('hit', player2, player1, valueEnemy);
    }else {
        generateLog('defense', player2, player1);

    }

    if(defenceEnemy !== hit){
        player2.changeHP(valueEnemy);
        player2.renderHP();
        generateLog('hit', player1, player2, value)
    }else {
        generateLog('defence', player1, player2);

    }

    showResult();
});

