const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Кунай', 'Меч', 'Ниндзято'],
    attack: function(name) {
        console.log (name + ' Fight...');
    }
}



const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Стальные веера', 'Летящий клинок'],
    attack: function(name) {
        console.log (name + ' Fight...');
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }


    return $tag;
}



function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');


    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;


    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    
   
    return $player;
}

function changeHp(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    if (player.hp <= 0) {
        $playerLife.style.width = '0%';
    }
    $playerLife.style.width = player.hp + '%';
    console.log(player.hp);
}

function hitPlayers() {
    changeHp(player1);
    changeHp(player2);
    if (checkForDraw()) {
        $arenas.appendChild(battleEnd('Draw!'));
        const $player1Img = document.querySelector('.player1 .character img');
        $player1Img.src = 'https://i.pinimg.com/originals/95/d7/bc/95d7bc0a7cd461511c6043d6cb27b672.gif';
        const $player2Img = document.querySelector('.player2 .character img');
        $player2Img.src = 'https://64.media.tumblr.com/b16a7659f65b9ad587ff98e38d2f1466/tumblr_nrk8nbtHBE1u0rseao1_400.gifv';
    } else {
        const winner = checkForWinner();
        if (winner) {
            $arenas.appendChild(battleEnd(winner + ' Wins!'));
        }
    }
}

function checkForWinner() {
    if (player1.hp <= 0) {
        const $player1Img = document.querySelector('.player1 .character img');
        $player1Img.src = 'https://i.pinimg.com/originals/95/d7/bc/95d7bc0a7cd461511c6043d6cb27b672.gif';
        return player2.name;
    }
    if (player2.hp <= 0) {
        const $player2Img = document.querySelector('.player2 .character img');
        $player2Img.src = 'https://64.media.tumblr.com/b16a7659f65b9ad587ff98e38d2f1466/tumblr_nrk8nbtHBE1u0rseao1_400.gifv';
        return player1.name;
    }
}

function checkForDraw() {
    return player1.hp < 0 && player2.hp < 0;
}

function battleEnd(text) {
    const $title = createElement('div', 'winnerTitle');
    $title.innerText = text;
    $randomButton.disabled = true;
    return $title;
}

$randomButton.addEventListener('click', function () {
    hitPlayers();
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));




