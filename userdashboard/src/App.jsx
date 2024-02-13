import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './pages/Dashboard';
import { Route, Routes, } from 'react-router-dom'
import Settings from './pages/Settings';
import Errorpage from './pages/Errorpage';
import Login from './pages/Login';





function App() {


  return (
    <>
      <Routes >
        <Route path="/" element={<Dashboard />}  errorElement={<Errorpage/>}/>
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
    )
}

export default App
