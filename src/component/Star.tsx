import { useEffect, useRef } from "react"

interface StarProps {
  left: string
  top: string
  width: string
}
export const Star = ({left, top, width}: StarProps) => {
    const starRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if(starRef.current == null)return;
        starRef.current.style.left = `${left}`
        starRef.current.style.top = `${top}`
        starRef.current.style.width = `${width}`
    }, [left, top, width, starRef])


  return(
    <div ref={starRef} className={`aspect-square absolute rounded-full bg-white shadow-2xl ring-lg ring-blue-800 shadow-white`}>

    </div>
  )
}
