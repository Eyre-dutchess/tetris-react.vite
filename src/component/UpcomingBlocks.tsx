import { Block, SHAPES } from "@/types"

interface UpcomingBlocksProps {
  nextBlocks: Block[]
}

export const UpcomingBlocks = ({nextBlocks}: UpcomingBlocksProps) => {

  return(
    <div className=" w-[200px] h-full flex flex-col items-center justify-start gap-4  rounded-[5px] border border-white/50">
        <h6 className="w-full text-center bg-white/25 py-2">Up coming:</h6>
        <div className="next-mino  shadow-inset grid grid-rows-3  gap-4 w-full h-full scale-70 -translate-y-4">
            {nextBlocks.map((block, blockIndex)=>{
                const shape = SHAPES[block].shape.filter((row)=>
                    row.some((cell)=> cell)
                );
                return (
                    <div  key={blockIndex} className=" h-full ">
                        {shape.map((row, rowIndex)=>{
                            return (
                                <div key={rowIndex} className=" flex items-center justify-center" >
                                    {row.map((value, colIndex)=>{
                                        const cellClass = value ? block: "hidden";
                                        return (
                                            <div key={`${blockIndex}- ${rowIndex} - ${colIndex}`}
                                                className={`cell ${cellClass}`}
                                            ></div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
