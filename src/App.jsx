import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { DialogProvider } from './components/DialogContent';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div  className={`p-10   ${darkMode ? 'dark-mode' : 'white-mode'}`}> 
    <DialogProvider>
    <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
    </DialogProvider>
    </div>
  )
}

export default App
