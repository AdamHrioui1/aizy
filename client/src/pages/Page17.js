import axios from 'axios'
import React, { useState } from 'react'
import { useContextApi } from '../ContextApi'
import { Link } from 'react-router-dom'

function Page17() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)

    const [Entre, setEntre] = useState(0)
    const [Sortie, setSortie] = useState(0)

    let submitHandler = async e => {
        e.preventDefault()
        try {
            let res = await axios.post(`http://localhost:5000/api/temperature`, {
                entre: Entre,
                sortie: Sortie
            }, {
                headers: {
                    'Authorization': UserCookie
                }
            })

            if(res.data.success) {
                setAddedSuccessfully(true)
                setEntre(0)
                setSortie(0)
                setTimeout(() => {
                    setAddedSuccessfully(false)
                }, 1000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="page11-absolute-wrapper" style={{ zIndex: -1 }}>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>AJOUTER LA TEMPÉRATURE</h2>
                </div>

                <span className='label'>Température d'entrée</span>
                <input type="number" onChange={e => setEntre(e.target.value)} value={Entre} required />

                <span className='label'>Température de sortie</span>
                <input type="number" onChange={e => setSortie(e.target.value)} value={Sortie} required />

                <button>Ajouter</button>
                <Link to={`/p18`}>Voir base de données</Link>
            </form>

            <div className={`ajouter-avec-succee ${AddedSuccessfully ? 'active' : ''}`}>
                <h1>AJOUTER AVEC SUCCÉES</h1>
                <button>×</button>
            </div>
        </div>
    )
}

export default Page17