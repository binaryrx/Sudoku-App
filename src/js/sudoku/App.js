class Cell{
    constructor(value,index){
        this.value = value || null
        this.row = Math.floor(index/9)+1 || null;
        this.column = Math.floor(index%9)+1 || null;
        this.subgrid = Math.ceil((index+1)/9) || null;
        this.element = this.createElement(value,index,this.row,this.column)
        this.selected = false;
        this.index = index;
    }

        createElement = (val,i,row,column) => {
            const el = document.createElement('div')
                  el.classList.add('sudoku__cell')
                  el.setAttribute('data-index',i)
                  el.setAttribute('data-cell-value',val)
                  el.textContent = val !== 0 ? val : "";
                  el.addEventListener('click',()=>{

                      if(this.selected ){
                        this.element.classList.remove('selected');
                        this.selected = false;
                      }else{
                        this.element.classList.add('selected');
                        this.selected = true;
                      }

                  })

                if(row -1 % 3 === 0) {
                    el.classList.add('sudoku__cell--border-top');
                }
                if(row  % 3 === 0) {
                    el.classList.add('sudoku__cell--border-bottom');
                }
                if(column -1 % 3 === 0) {
                    el.classList.add('sudoku__cell--border-left');
                }
                if(column % 3 === 0) {
                    el.classList.add('sudoku__cell--border-right');
                }
            return el
        }


}

class Grid{
    constructor(puzzleArray){
        this.cells = [...puzzleArray.map( (val,i) => new Cell(val,i)) ]
    }
}
export default class Sudoku{

    constructor(puzzleArr,sudokuElem){
        this.grid = new Grid(puzzleArr,sudokuElem)
        this.sudokuElem = sudokuElem;
    }

    logPuzzle = () => console.log(this.grid.cells)

    render = () => {
        this.grid.cells.map( cell => this.sudokuElem.appendChild(cell.element)) 
        
    }


}