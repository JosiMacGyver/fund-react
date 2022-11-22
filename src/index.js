import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/básicos/Primeiro'

const tag = <strong> Hello World!</strong>

ReactDOM.render(
    <>
        <Primeiro/>
    </>,
    document.getElementById('root')
)