import GameField from './game_field';
import ShipsSet from './ships_set';
const main = () => {

   const app = document.getElementById('app');
   const wrapper = document.createElement('div');
   wrapper.classList.add('wrapper');

   wrapper.append(GameField());
   wrapper.append(GameField());
   app.append(wrapper);
    console.log(GameField());
};

main();