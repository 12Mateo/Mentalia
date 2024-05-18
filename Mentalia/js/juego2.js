const gameContainer = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const bestScoreDisplay = document.getElementById('best-score');
const restartButton = document.getElementById('restart-button');
let score = 0;
let bestScore = localStorage.getItem('bestScore') || 0;

let grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function updateBestScore() {
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    bestScoreDisplay.textContent = `Best Score: ${bestScore}`;
}

function drawGrid() {
    gameContainer.innerHTML = '';
    for (let row of grid) {
        for (let cell of row) {
            let tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = cell === 0 ? '' : cell;
            if (cell !== 0) {
                tile.dataset.value = cell;
            }
            gameContainer.appendChild(tile);
        }
    }
    scoreDisplay.textContent = score;
    updateBestScore();
}

function addRandomTile() {
    let emptyCells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (grid[row][col] === 0) {
                emptyCells.push({row, col});
            }
        }
    }
    if (emptyCells.length > 0) {
        let {row, col} = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[row][col] = Math.random() < 0.9 ? 2 : 8;
    }
}

function slide(row) {
    let arr = row.filter(val => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    for (let i = 3; i > 0; i--) {
        if (arr[i] === arr[i-1]) {
            arr[i] *= 2;
            score += arr[i];
            arr[i-1] = 0;
        }
    }
    arr = arr.filter(val => val);
    missing = 4 - arr.length;
    zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
}

function rotateGrid(grid) {
    let newGrid = grid.map((_, index) => grid.map(row => row[index]));
    return newGrid.map(row => row.reverse());
}

function move(direction) {
    switch(direction) {
        case 'left':
            for (let i = 0; i < 4; i++) {
                grid[i] = slide(grid[i]);
            }
            break;
        case 'right':
            for (let i = 0; i < 4; i++) {
                grid[i] = slide(grid[i].reverse()).reverse();
            }
            break;
        case 'up':
            grid = rotateGrid(grid);
            for (let i = 0; i < 4; i++) {
                grid[i] = slide(grid[i]);
            }
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            break;
        case 'down':
            grid = rotateGrid(grid);
            for (let i = 0; i < 4; i++) {
                grid[i] = slide(grid[i].reverse()).reverse();
            }
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            break;
    }
    addRandomTile();
    drawGrid();
    if (!canMove()) {
        updateBestScore();
        alert("Game Over! Your score is: " + score);
    }
}

function canMove() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (grid[row][col] === 0) return true;
            if (col < 3 && grid[row][col] === grid[row][col + 1]) return true;
            if (row < 3 && grid[row][col] === grid[row + 1][col]) return true;
        }
    }
    return false;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        move('right');
    } else if (event.key === 'ArrowRight') {
        move('left');
    } else if (event.key === 'ArrowUp') {
        move('up');
    } else if (event.key === 'ArrowDown') {
        move('down');
    }
});

restartButton.addEventListener('click', function() {
    grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    score = 0;
    addRandomTile();
    addRandomTile();
    drawGrid();
});

addRandomTile();
addRandomTile();
drawGrid();
