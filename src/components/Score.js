import {useContext} from "react";
import {DataContext} from "../App";
import QuestionsData from "../data/QuestionsData"


const Score = ()=>{
    const {score,setAppState,setScore} = useContext(DataContext)
    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }
    return(
      <div className="score">
        <h1>Final Score</h1>
        <h2>{score} / {QuestionsData.length}</h2>
        <button onClick={restartApp}>Start the quiz again</button>
      </div>
    )
}

export default Score