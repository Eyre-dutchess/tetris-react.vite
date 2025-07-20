import { BoardShape } from "@/types"
import { Cell } from "./Cell"

interface MainBoardProps {
  currentBoard: BoardShape
  // ref: React.RefObject<HTMLDivElement | null> 
}

export const MainBoard = ({currentBoard}: MainBoardProps) => {
  return(
    <div  className="main-board mt-3 w-[400px] h-[600px] border border-white/25 rounded-[5px]">
        {currentBoard.map((row, rowIndex)=>{
            return (
            <div key={rowIndex} className="flex flex-row">
                {row.map((value, colIndex)=>{
                    return (
                    <Cell key={rowIndex - colIndex} type={value}/>
                    )})}
            </div>
        )})}
    </div>
  )
}
