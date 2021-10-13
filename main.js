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
    img: `https://www.notion.so/HomeWork-2-62f1032b84e14b84bf2027d2ed6717d4#:~:text=http%3A//reactmarathon-api.herokuapp.com/assets/kitana.gif`,
    weapon: ['katana', 'fan', 'charm'],
    attack: function() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Dominik',
    hp: 100,
    img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
    weapon: ['poison', 'quick attack', 'death grip'],
    attack: function() {
        console.log(`${player2.name} Fight...`);
    }
}