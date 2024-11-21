import { useState } from 'react'
import './App.css'
import { ContrastForm } from './components/ContrastForm'
import { LeaderBoard } from './components/LeaderBoard'
import { AccessibilityExample } from './components/AccessibilityExample'
import { hex } from "wcag-contrast"

function App() {

  const [colorValues, setColorValues] = useState({
    text: '#112A46',
    background: '#ACC8E5',

})

  const contrast = hex( colorValues.text, colorValues.background)

  return (
    <main className='max-w-5xl mx-auto w-full flex flex-col gap-16'>
      
      <h1>Constrast Checker</h1>
      <ContrastForm colorValues={colorValues} setColorValues={setColorValues} contrast={contrast}  />

      <h2>Resultados</h2>
      <div className='grid item-center gap-8 grid-cols-2'>
        <LeaderBoard
          contrast={contrast}
        />
        <AccessibilityExample
          text={colorValues.text}
          background={colorValues.background}
          />


      </div>
    </main>
  )
}

export default App