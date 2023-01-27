import './App.css'
import StartPage from "./components/StartPage.js"
import QuizPage from "./components/QuizPage.js"
import React, {useState} from 'react'

function App() {
  const [changePage, setChangePage] = useState(false)


  function togglePage() {
    setChangePage(true)
  }

  return (
    <div className="App">
      {changePage ? <QuizPage/> : <StartPage togglePage={togglePage}/>}

      <div className="yellow-blob"/>
      <div className="blue-blob"/>
    </div>
  );
}

export default App;
