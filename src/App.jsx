
import { useState } from 'react';
import './App.css'
import Button from "./components/Button/Button.jsx"
import Display from './components/display/Display.jsx';
useState


function App() {
  const [count, setCount] = useState(0);
      //状態を持たせたい変数、それを更新する関数
  const handleClick = () => {
        setCount(count + 1);
    }   

  return (
    <>
     <h1>hello world</h1>
     <Button type="submit" disabled={false} onClick={handleClick} >
         ボタン
     </Button>
     <Display count={count} />
    </>
  )
}

Display
export default App
