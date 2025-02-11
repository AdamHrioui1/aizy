import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [Error, setError] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    let navigate = useNavigate()

    let submitHandler = async e => {
        e.preventDefault()
        try {
            let res = await axios.post('http://localhost:5000/api/user/login', {
                email: Email,
                password: Password
            })
            
            const cookies = new Cookies(null, { path: '/', maxAge: 1*60*60*24 })
            cookies.set('sante-accesstoken', res.data.accesstoken)
            console.log(res)
            if(res.data.success) window.location.href = '/p2'
        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message)
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={submitHandler}>
                <p style={{ color: '#f00' }}>{Error}</p>
                <h1>AIZY</h1>
                <div className="login-form-label-input">
                    <label htmlFor="">Nom complete</label>
                    <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="login-form-label-input">
                    <label >Mot de passe</label>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Login" className='btn' />
            </form>
        </div>
    )
}

export default Login