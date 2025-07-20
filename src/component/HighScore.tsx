import { getHighScores } from "@/hooks/useTetris"


export const HighScore = () => {
    const highScores = getHighScores().slice(0, 5);
    if(highScores.length === 0){
        return (
            <div className="w-[200px]  flex flex-col items-center justify-start gap-4 rounded-[5px] border border-white/50">
                <h6 className="w-full text-center bg-white/25 py-2">High Scores</h6>
                <p className="text-sm italic">no high scores yet</p>
            </div>
        )
    }
  return(
    <div className=" w-[200px] text-white flex flex-col items-center justify-start gap-4 rounded-[5px] border border-white/50">
        <h6  className="w-full text-center bg-white/25 py-2">High Scores</h6>
        <ol className="">
            {highScores.map((score: number, i: number)=>{
                return (
                    <li className="list-disc" key={i}>{score}</li>
                )
            })}
        </ol>
    </div>
  )
}
