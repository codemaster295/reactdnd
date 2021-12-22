
import React from 'react'
import ReactDOM from 'react-dom'
import Example from './components/Example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './style/tailwind.css'

function App() {
    return (
        <div className="App bg-purple-200 h-screen">
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
