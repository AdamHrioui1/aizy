import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useContextApi } from '../ContextApi'

function Navbar() {
    let state = useContextApi()
    let [IsLogin] = state.IsLogin
    let [IsAdmin] = state.IsAdmin
    const [BurgerToggle, setBurgerToggle] = useState(false)
    let navigate = useNavigate()
    let closeToggle = () => setBurgerToggle(!BurgerToggle)

    let logout = () => {
        closeToggle()
        const cookies = new Cookies(null, { path: '/' })
        cookies.remove('sante-accesstoken', { path: '/' })
        window.location.href = '/'
    }

    return (
        <nav className='navbar'>
            <h2 className="logo">
                <Link to={'/'}>AIZY</Link>
            </h2>
            <div className={`burger ${BurgerToggle ? 'active' : ''}`} onClick={closeToggle}>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-slider ${BurgerToggle ? 'active' : ''}`}>
                <li><Link onClick={closeToggle} to="/p1">Acceuil</Link></li>
                { !IsLogin && <li><Link onClick={closeToggle} to="/Login">Login</Link></li> }
                { (IsLogin && IsAdmin) ? <li><Link onClick={closeToggle} to="/register">Ajouter infermier</Link></li> : null }
                { (IsLogin && IsAdmin) ? <li><Link onClick={closeToggle} to="/p16">BD des infermiers et Admins</Link></li> : null }
                
                { IsLogin ? <li><Link onClick={closeToggle} to="/p2">Vaccination</Link></li> : null}
                { IsLogin ? <li><Link onClick={closeToggle} to="/p17">Ajouter Température</Link></li> : null}
                { IsLogin ? <li><Link onClick={closeToggle} to="/p18">BD de Température</Link></li> : null}

                { IsLogin ? <li><Link onClick={closeToggle} to="/p2">Vaccination</Link></li> : null}
                { IsLogin ? <li><Link onClick={closeToggle} to="/p8">Base de donnée de patiens</Link></li> : null}
                { IsLogin ? <li><Link onClick={closeToggle} to="/p10">Stock</Link></li> : null}
                { IsLogin ? <li><span onClick={logout}>Déconnecter</span></li> : null }
            </ul>
        </nav>
    )
}

export default Navbar