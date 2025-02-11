import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page73 from './pages/Page73'
import Page76 from './pages/Page76'
import Page8 from './pages/Page8'
import Page10 from './pages/Page10'
import Page13 from './pages/Page13'
import Page11 from './pages/Page11'
import Page14 from './pages/Page14'
import Page15 from './pages/Page15'
import Page60 from './pages/Page60'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContextApi } from './ContextApi'
import Page16 from './pages/Page16'
import Page17 from './pages/Page17'
import Page18 from './pages/Page18'

function Routers() {
    let state = useContextApi()
    let [IsLogin] = state.IsLogin
    let [IsAdmin] = state.IsAdmin

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login />} />
                {/* <Route path='/register' element={(IsLogin && IsAdmin) ? <Register /> : <Login />} /> */}
                <Route path='/register' element={(IsLogin && IsAdmin) ? <Register /> : IsLogin && !IsAdmin ? <Page1 /> : <Login />} />
                <Route path='/' element={<Page1 />} />
                <Route path='/p1' element={<Page1 />} />
                <Route path='/p2' element={IsLogin ? <Page2 /> : <Login />} />
                <Route path='/p3' element={IsLogin ? <Page3 /> : <Login />} />
                <Route path='/p4' element={IsLogin ? <Page4 /> : <Login />} />
                <Route path='/p5/:smi' element={IsLogin ? <Page5 /> : <Login />} />
                <Route path='/p6' element={IsLogin ? <Page6 /> : <Login />} />
                <Route path='/p6-ajouter/:age' element={IsLogin ? <Page60 /> : <Login />} />
                <Route path='/p7-0' element={IsLogin ? <Page7 /> : <Login />} />
                <Route path='/p7-3' element={IsLogin ? <Page73 /> : <Login />} />
                <Route path='/p7-6' element={IsLogin ? <Page76 /> : <Login />} />
                <Route path='/p8' element={IsLogin ? <Page8 /> : <Login />} />
                
                <Route path='/p10' element={IsLogin ? <Page10 /> : <Login />} />
                <Route path='/p11' element={IsLogin ? <Page11 /> : <Login />} />
                <Route path='/p13' element={IsLogin ? <Page13 /> : <Login />} />
                <Route path='/p14' element={IsLogin ? <Page14 /> : <Login />} />
                <Route path='/vaccin/:id' element={IsLogin ? <Page15 /> : <Login />} />
                <Route path='/p16' element={IsLogin ? <Page16 /> : <Login />} />
                <Route path='/p17' element={IsLogin ? <Page17 /> : <Login />} />
                <Route path='/p18' element={IsLogin ? <Page18 /> : <Login />} />
            </Routes>
        </Router>
    )
}

export default Routers