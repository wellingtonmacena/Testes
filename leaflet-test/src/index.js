import React from 'react'
import {render} from 'react-dom'
import App from './App'
import cors from 'cors'

cors()

render(<App/>, document.getElementById('app'))