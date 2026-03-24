import styles from "./Button.module.css"
// import { useState } from "react"
//reactのモジュールからuseStateを持ってくる

function Button(props){
    // const [count, setCount] = useState(0);
    // //状態を持たせたい変数、それを更新する関数
    const { type, disabled, children, onClick} = props;

    // const handleClick = () => {
    //     setCount(count + 1);
    // }
    // const handleClick = () => {
    //     alert("クリックされました")
    // }

    return (
        <button className={styles.button} type={type} disabled={disabled} onClick={onClick} >
            {children}
        </button>

    )
}    
export default Button;