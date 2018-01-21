import Cell from './cell';
// import ShipsSet from './ships_set';
import gameState from './game_state';


const GameField = (type) => {
    const field = document.createElement('div');
    field.className = `field ${type}`;

    const shipSet = gameState.shipsSet[type];
    const cells = gameState.cells[type];

    shipSet.shipsPlacement.forEach((row, x) => {
        row.forEach((cell, y) => {
            field.append(new Cell(x, y, cell, type, cells[x][y].attempted).htmlNode);
          
        })
    })

    return field;
  
}

export default GameField;