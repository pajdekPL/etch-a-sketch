class GameGrid {
  gameGridDiv = document.querySelector('.game-grid');
  size = 16;
  resizeButton = document.querySelector('#resizeGame');
  blockInitColor = 'white';

  clearGameGrid() {
    while (this.gameGridDiv.firstChild) {
      this.gameGridDiv.removeChild(this.gameGridDiv.firstChild);
    }
  }

  createGameBoard() {
    this.clearGameGrid();
    for (let i = 0; i < this.size; i++) {
      const singleRow = document.createElement('div');
      singleRow.setAttribute('class', 'single-row');
      for (let i = 0; i < this.size; i++) {
        const singleBlock = document.createElement('div');
        this.setBlockAttributes(singleBlock);
        this.addBlockEvents(singleBlock);
        singleRow.appendChild(singleBlock);
      }
      this.gameGridDiv.appendChild(singleRow);
    }
  }

  addBlockEvents(block: HTMLDivElement) {
    block.addEventListener('mouseenter', () =>
      this.changeBackgroundOnHove(block)
    );
    block.addEventListener('mouseleave', () =>
      this.changeBackgroundOnHove(block)
    );
  }

  setBlockAttributes(block: HTMLDivElement) {
    block.setAttribute('class', 'single-block');
    block.style.background = this.blockInitColor;
  }

  changeBackgroundOnHove(element: HTMLDivElement) {
    element.style.background = `#${this.generateRandomColor()}`;
    let opacity = element.style.opacity;
    opacity = String(0.1 + +opacity);
    element.style.opacity = +opacity <= 1 ? opacity : '1';
  }

  generateRandomColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  takeInputFromResize() {
    let data = prompt('Please type number of blocks - 100 is MAX');
    while (Number.isInteger(data) && +data <= 100) {
      data = prompt('Please type number of blocks - 100 is MAX');
    }
    return +data;
  }

  createResizeHandling() {
    this.resizeButton.addEventListener('click', () => {
      this.size = this.takeInputFromResize();
      console.log('size: ', this.size);
      this.createGameBoard();
    });
  }

  startGame() {
    this.createGameBoard();
    this.createResizeHandling();
  }
}

const gameGrid = new GameGrid();
gameGrid.startGame();
