let player1 = {
    name: 'Scorpion',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Кунай', 'Меч', 'Ниндзято'],
    attack: function() {
        console.log (this.name + ' Fight...');
    }
}



let player2 = {
    name: 'Kitana',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Стальные веера', 'Летящий клинок'],
    attack: function() {
        console.log (this.name + ' Fight...');
    }
}

player1.attack();
player2.attack();



function createPlayer(playerClass, playerName) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerName.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerName.name;

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = playerName.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    
    arenas.appendChild($player);


}

const arenas = document.querySelector('.arenas');

createPlayer('player1', player1);
createPlayer('player2', player2);

