
import {   useState } from "react";
import { Star } from "./Star";

type STAR ={
    pos: {x: number, y:number},
    width: number 
}

function renderStar( ){
        const elGrid = {
            minX: 0,
            maxX: window.innerWidth,
            minY: 0,
            maxY: window.innerHeight
        }
        const randomX = Math.floor(Math.random() * elGrid.maxX) - Math.floor(Math.random() * elGrid.minX)
        const randomY = Math.floor(Math.random() * elGrid.maxY) - Math.floor(Math.random() * elGrid.minY)
        const randomW = Math.floor(Math.random() * 5)
        return {
            pos: {x:randomX , y:randomY},
            width: randomW
        }
    

}

export const StarBg = (
) =>{
    let stars : STAR[] = []
    stars =[renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), 
        renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),
        renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),renderStar(), 
        renderStar(),renderStar(), renderStar(),renderStar(), renderStar(),
     ]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [bgStars, setBgStar] = useState<STAR[]>(stars)

    return(
        <div className=" absolute z-0 inset-0  bg-zinc-900">
            {bgStars?.map((star, i)=>{
                const left = `${star.pos.x>0? star.pos.x: star.pos.x + 400}px` 
                const top = `${star.pos.y>0? star.pos.y: star.pos.y +400}px`
                const width = `${star.width}px`;
                return(
                        <Star key={i} left={left} width={width} top={top} />
                )
            })}
        </div>
    )
}