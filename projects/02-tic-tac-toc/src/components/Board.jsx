import { Square } from "./Square"

export const Board = ({ board, updateBoard }) => {
  return (
    <div className="game">
          {board?.map((_, index) => {
              return (
                  <Square
                      key={index}
                      index={index}
                      updateBoard={updateBoard}
                  >
                      {board[index]}
                  </Square>
              )
          })}
    </div>
  )
}
