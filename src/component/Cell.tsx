import { CellOptions } from "@/types"

interface CellProps {
  type: CellOptions 
}

export const Cell = ({type}: CellProps) => {
  return(
     <div className={`cell ${type}`} />
  )
}
