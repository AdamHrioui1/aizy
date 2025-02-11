import React, { useState } from 'react'
import './Page11.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContextApi } from '../ContextApi'

function Page11() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie
    
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)
    const [ShowPopup, setShowPopup] = useState(false)
    const [ClickedItem, setClickedItem] = useState('BCG')
    const [Quantite, setQuantite] = useState('0')
    const [Rest, setRest] = useState('0')
    const [Used, setUsed] = useState('0')
    
    let showPopup = item => {
        setShowPopup(true)
        setClickedItem(item)
    }

    let vaccins = ['BCG', 'HB', 'HPV', 'VPI', 'VPO', 'PENTA', 'ROTA', 'RR', 'DTC', 'PNEUMO', 'VITA', 'VITD']

    let submitHandler = async e => {
        e.preventDefault()
        try {
            let res = await axios.put(`http://localhost:5000/api/drug/${ClickedItem.toLocaleLowerCase()}`, {
                nom: ClickedItem.toLocaleLowerCase(),
                quantite: Quantite,
                rest: Rest,
                used: Used
            }, {
                headers: {
                    'Authorization': UserCookie
                }
            })

            if(res.data.success) {
                setShowPopup(false)
                setQuantite(0)
                setRest(0)
                setAddedSuccessfully(true)
                setTimeout(() => {
                    setAddedSuccessfully(false)
                }, 1000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='page-11-container'>
            <h1>Stock reçu dans la délégation</h1>
            <div className="grid">
                {
                    vaccins.map(item => <div onClick={() => showPopup(item)} className="grid-item" key={item}>{item}</div>)
                }
            </div>

            <Link to={'/p14'} className='suivie-de-stock-btn'>Suivie de Stock</Link>

            {
                ShowPopup ?
                <div className="page11-absolute-wrapper">
                    <form onSubmit={submitHandler}>
                        <span className='x-times' onClick={() => setShowPopup(false)}>&times;</span>
                        <div>
                            <h2>AJOUTER AU STOCK</h2>
                            <h1>VACCIN: <span>{ClickedItem}</span></h1>
                        </div>

                        <span className='label'>Stock reçu dans la délégation</span>
                        <input type="number" onChange={e => setQuantite(e.target.value)} value={Quantite} required />

                        <span className='label'>Stock qui reste</span>
                        <input type="number" onChange={e => setRest(e.target.value)} value={Rest} required />

                        <span className='label'>Stock qui est utilisé</span>
                        <input type="number" onChange={e => setUsed(e.target.value)} value={Used} required />
                        <button>Ajouter</button>
                    </form>
                </div>
                : <></>
            }
            
            <div className={`ajouter-avec-succee ${AddedSuccessfully ? 'active' : ''}`}>
                <h1>AJOUTER AVEC SUCCÉES</h1>
                <button>×</button>
            </div>
        </div>
    )
}

export default Page11