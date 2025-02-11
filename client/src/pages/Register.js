import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Register() {
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)
    const [Admin, setAdmin] = useState('non')
    const [Nom, setNom] = useState('')
    const [Prenom, setPrenom] = useState('')
    const [Address, setAddress] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Error, setError] = useState('')

    let submitHandler = async e => {
        e.preventDefault()
        try {
            let res = await axios.post('http://localhost:5000/api/user/register', {
                name: Nom,
                lastname: Prenom,
                address: Address,
                email: Email,
                password: Password,
                role: Admin === 'oui' ? '1234' : '0'
            })
            
            console.log(res)
            if(res) setAddedSuccessfully(true)
            setTimeout(() => {
                setAddedSuccessfully(false)
            }, 1000)
            
            setNom('')
            setPrenom('')
            setAddress('')
            setEmail('')
            setPassword('')
            setAdmin('non')
        } catch (error) {
            console.log(error)
            setError(error?.response?.data?.message)
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={submitHandler}>
                <p style={{ color: '#f00' }}>{Error}</p>
                <div className="login-form-label-input">
                    <label htmlFor="">ajouter comme admin</label>
                    
                    <select value={Admin} onChange={e => setAdmin(e.target.value)} required>
                        <option value={'non'}>non</option>
                        <option value={'oui'}>oui</option>
                    </select>
                </div>
                <div className="login-form-label-input">
                    <label htmlFor="">nom</label>
                    <input type="text" value={Nom} onChange={e => setNom(e.target.value)} required />
                </div>
                <div className="login-form-label-input">
                    <label htmlFor="">prénom</label>
                    <input type="text" value={Prenom} onChange={e => setPrenom(e.target.value)} required />
                </div>
                <div className="login-form-label-input">
                    <label htmlFor="">centre de santé</label>
                    <select value={Address} onChange={e => setAddress(e.target.value)} required >
                        <option value={'la lagune'} >bouhaira</option>
                        <option value={'ghazoua'} >ghazoua</option>
                        <option value={'rural'} >rural</option>
                        <option value={'rahal ben hmed'} >rahal ben ahmed</option>
                        <option value={'ahmed amkil'} >ahmed amkil</option>
                        <option value={'quartier indestruelle'} >quartier indestruelle</option>
                    </select>
                </div>
                <div className="login-form-label-input">
                    <label htmlFor="">nom complete</label>
                    <input type="text" value={Email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="login-form-label-input">
                    <label >mot de passe</label>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <input type="submit" value="save" className='btn' />

                <div className={`ajouter-avec-succee ${AddedSuccessfully ? 'active' : ''}`}>
                    <h1>AJOUTER AVEC SUCCÉES</h1>
                    <button onClick={() => setAddedSuccessfully(false)}>×</button>
                </div>
            </form>
        </div>
    )
}

export default Register