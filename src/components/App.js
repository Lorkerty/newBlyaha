import React from 'react'
import {render} from 'react-dom'
import Creator from './Creator'
import creators from '../fixtures.js'

function App() {
    return (
       <div>
           <h1>App Name</h1>
           <Creator creator = {creators[0]}/>
          
       </div>
     );
   }
   export default App