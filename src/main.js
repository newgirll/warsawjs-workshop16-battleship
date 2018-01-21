import GameField from './game_field';
import ShipsSet from './ships_set';
import gameState from './game_state';

const app = document.getElementById('app');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const notification = document.createElement('div');
notification.className = 'notification';


const render = () => {
    wrapper.append(GameField('computer'));
    wrapper.append(GameField('user'));
};

const clear = () => {
    wrapper.innerHTML = '';
};

gameState.reRender = () => {
    clear();
    render();
    notification.innerText = gameState.shootingTurn;
};

const main = () => {
   gameState.startGame();
   notification.innerText = gameState.shootingTurn;
   app.append(notification);
   app.append(wrapper);
   render();

};

main();