
// import { useState } from 'react';
// import Button from "./components/Button/Button.jsx"
// import Display from './components/display/Display.jsx';
// useState
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SamplePage from './pages/SamplePage'


function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sample-page' element={<SamplePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App






// function App() {
//   const [count, setCount] = useState(0);
//       //状態を持たせたい変数、それを更新する関数
//   const handleClick = () => {
//         setCount(count + 1);
//     }   

     // useEffect(()=>{
  //   console.log('count',count);
  //   if(count > 15){
  //     setCount(0)
  //   }
  // },[count])
  // //countに変更があった時だけ関数実行


// return (
//     <>
//      <h1>hello world</h1>
//      <Button type="submit" disabled={false} onClick={handleClick} >
//          ボタン
//      </Button>
//      <Display count={count} />
//     </>
//   )
// }

// }
