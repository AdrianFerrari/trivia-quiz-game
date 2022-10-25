import './App.css'
import StartPage from "./components/StartPage.js"
import QuizPage from "./components/QuizPage.js"
import React, {useState} from 'react'

function App() {
  /* const [page, setPage] = useState(<StartPage togglePage={togglePage}/>) */
  const [page, setPage] = useState(<QuizPage/>)


  function togglePage() {
    setPage(<QuizPage/>)
  }

  return (
    <div className="App">
      {page}

      <div className="yellow-blob"/>
      <div className="blue-blob"/>
    </div>
  );
}

export default App;
