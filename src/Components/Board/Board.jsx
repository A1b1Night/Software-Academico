import FlechaRegreso from '../FlechaRegreso';
import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';

const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
      <div id="back-board">
        <div className="Titulo">
          <h1>Memorama</h1>
        </div>
        <main className="board">
          {memoBlocks.map((memoBlock, i) => {
            return (
              <MemoBlock
                key={`${i}_${memoBlock.emoji}`}
                animating={animating}
                handleMemoClick={handleMemoClick}
                memoBlock={memoBlock}
              />
            );
          })}
        </main>
        <FlechaRegreso />
      </div>
    );
}

export default Board;