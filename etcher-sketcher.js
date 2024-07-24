var GameGrid = /** @class */ (function () {
    function GameGrid() {
        this.gameGridDiv = document.querySelector('.game-grid');
        this.size = 16;
        this.resizeButton = document.querySelector('#resizeGame');
        this.blockInitColor = 'white';
    }
    GameGrid.prototype.clearGameGrid = function () {
        while (this.gameGridDiv.firstChild) {
            this.gameGridDiv.removeChild(this.gameGridDiv.firstChild);
        }
    };
    GameGrid.prototype.createGameBoard = function () {
        this.clearGameGrid();
        for (var i = 0; i < this.size; i++) {
            var singleRow = document.createElement('div');
            singleRow.setAttribute('class', 'single-row');
            for (var i_1 = 0; i_1 < this.size; i_1++) {
                var singleBlock = document.createElement('div');
                this.setBlockAttributes(singleBlock);
                this.addBlockEvents(singleBlock);
                singleRow.appendChild(singleBlock);
            }
            this.gameGridDiv.appendChild(singleRow);
        }
    };
    GameGrid.prototype.addBlockEvents = function (block) {
        var _this = this;
        block.addEventListener('mouseenter', function () {
            return _this.changeBackgroundOnHove(block);
        });
        block.addEventListener('mouseleave', function () {
            return _this.changeBackgroundOnHove(block);
        });
    };
    GameGrid.prototype.setBlockAttributes = function (block) {
        block.setAttribute('class', 'single-block');
        block.style.background = this.blockInitColor;
    };
    GameGrid.prototype.changeBackgroundOnHove = function (element) {
        element.style.background = "#".concat(this.generateRandomColor());
        var opacity = element.style.opacity;
        opacity = String(0.1 + +opacity);
        element.style.opacity = +opacity <= 1 ? opacity : '1';
    };
    GameGrid.prototype.generateRandomColor = function () {
        return Math.floor(Math.random() * 16777215).toString(16);
    };
    GameGrid.prototype.takeInputFromResize = function () {
        var data = prompt('Please type number of blocks - 100 is MAX');
        while (Number.isInteger(data) && +data <= 100) {
            data = prompt('Please type number of blocks - 100 is MAX');
        }
        return +data;
    };
    GameGrid.prototype.createResizeHandling = function () {
        var _this = this;
        this.resizeButton.addEventListener('click', function () {
            _this.size = _this.takeInputFromResize();
            console.log('size: ', _this.size);
            _this.createGameBoard();
        });
    };
    GameGrid.prototype.startGame = function () {
        this.createGameBoard();
        this.createResizeHandling();
    };
    return GameGrid;
}());
var gameGrid = new GameGrid();
gameGrid.startGame();
