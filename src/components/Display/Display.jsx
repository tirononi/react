import { useEffect, useState } from "react"

function Display(props){

    // const { count } = props

    const [text, setText] = useState("Loading............")

    useEffect(()=> {
        setText(`カウント:${props.count}`)
    },[props.count])

    return(
         <div>
             {text}
         </div>
    )
}

export default Display