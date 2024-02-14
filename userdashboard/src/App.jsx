import './assets/styles/App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './pages/Dashboard';
import { Route, Routes, } from 'react-router-dom'
import Settings from './pages/Settings';
import Errorpage from './pages/Errorpage';






function App() {


  return (
    <>
      <Routes >
        <Route path="/" element={<Dashboard />}  errorElement={<Errorpage/>}/>
       
       
      </Routes>
    </>
    )
}

export default App
