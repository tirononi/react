import { Link } from "react-router-dom"

function Home (){
    return (
        <>
          <h1>Home</h1>
          <Link to='/sample-page'>Sampleページへ</Link>
       </>
    )
}

export default Home

//1つのファイルに export default は 1つだけ
//import Home from "./Home.jsx" // ← ここで Home を受け取るためにいる