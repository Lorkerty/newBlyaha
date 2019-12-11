import React from 'react'
import {render} from 'react-dom'
import Creator from './components/Creator'
import creators from './fixtures.js'

function App() {
    return (
       <div>
           <h1>App Name</h1>
           <Creator creator = {creators[0]}/>
           <Creator creator = {creators[1]}/>
           
       </div>
     );
   }
   export default App

render(<App/> ,document.getElementById('root'))