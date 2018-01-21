import Cell from './cell';
import ShipsSet from './ships_set';


const GameField = () => {
    const field = document.createElement('div');
    field.className = "field";
    const shipSet = new ShipsSet();
    shipSet.generateSeveralShips(20);
    shipSet.shipsPlacement.forEach((row) => {
        row.forEach((cell) => {
            field.append(Cell(cell));
          
        })
    })

    return field;
  
}

export default GameField;