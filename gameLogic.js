

const startGame = {
    gameBoard: function gameBoard() {
        const rows = 3;
        const columns = 3; 
        const board = []; 

        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(Cell());
            }
        }

        const getBoard = () => board; 
        const placeToken = (column, player) => {
            const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

            if (!availableCells.length) return; 

            const chosenRow = availableCells.findIndex(board);
            board[chosenRow][column].addToken(player); 
        }

        const printBoard = () => {
            const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
            console.log(boardWithCellValues);
        }

        return { getBoard, placeToken, printBoard };
    },

}; 

