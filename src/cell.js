import gameState from './game_state';

class Cell {
    constructor(x, y, ship, fieldType, attempted){
        this.htmlNode = document.createElement('div');
        this.htmlNode.className = `cell ${fieldType === 'computer' ? '' : ship  ? ' has-ship' : ''}`;
        this.htmlNode.className += `${attempted ? (ship ? ' hit': ' miss') : ''}`;
        this.x = x,
        this.y = y,
        this.fieldType = fieldType;

        if(fieldType === 'computer'){
            this.htmlNode.addEventListener('click', this.atemptCell.bind(this))
        }
        this.ship = ship;
    }

    atemptCell() {
        this.htmlNode.className += `${this.ship ? ' hit' : ' miss'}`;
        gameState.shipAttempt(this.x, this.y, this.fieldType);
    }
}


export default Cell;