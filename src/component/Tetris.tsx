import {  useTetris } from "@/hooks/useTetris"
import { MainBoard } from "./MainBoard"
import { HighScore } from "./HighScore"
import { UpcomingBlocks } from "./UpcomingBlocks"
import { StarBg } from "./StarBg"

export const Tetris = () => {
    const {board, startGame, rows, isPlaying,   score, upcomingBlocks} = useTetris()
    return(
        <>
        <div className={`h-screen relative z-0 ${!isPlaying && "opacity-50"}`}>
            <StarBg/>
            <h1 className="relative z-40">Tetris</h1>
            <div className="h-3/4 relative z-40 min-h-[650px] bg-white/25 py-5 w-[800px] px-3 flex flex-row gap-2">
                <UpcomingBlocks nextBlocks={upcomingBlocks}/>
                
                <MainBoard currentBoard={board} />

                <div className="grid grid-rows-2 gap-4">
                    <HighScore />
                    <div className="board-right w-[200px]  flex flex-col gap-4 uppercase text-white/75">
                        <div>
                            <h6>Score:</h6>
                            <span className="score-result">{score}</span>
                        </div>
                        <div>
                            <h6>Lines: </h6>
                            <span className="line-result">{rows}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {!isPlaying&&
            <div className="w-full h-[30vh] flex flex-col items-center justify-center gap-4 bg-blue-900/75 shadow-2xl shadow-white fixed top-[35vh] left-0 z-50">
                <p className="text-xl text-white">
                    {score ===0 && rows === 0 && ""}
                    {score > 0 && rows > 0 && `You scored ${score}! Try again` }
                </p>
                <button onClick={()=>startGame()} className="bg-white/5  cursor-pointer transition flex items-center justify-center  
                    w-1/3  py-[1em] rounded-full text-white  hover:bg-white/50 hover:shadow-lg border border-white/50">
                    Start Game
                </button>
            </div>}
        </>
    )
}
