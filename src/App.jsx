import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div class="bg-pink-200 p-4">Item 1</div>
          <div class="bg-pink-200 p-4">Item 2</div>
          <div class="bg-pink-200 p-4">Item 3</div>

        </div>
      </div>
    </>
  )
}

export default App;