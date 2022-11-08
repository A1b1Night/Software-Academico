import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';

const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
      <div>
        <div className='Titulo'>
        <h1>Memorama Wazaaa</h1>
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
      </div>
    );
}

export default Board;