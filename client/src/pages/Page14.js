import React, { useState } from 'react'
import './Page11.css'
import { Link } from 'react-router-dom'

function Page14() {

    const [ShowPopup, setShowPopup] = useState(false)
    const [ClickedItem, setClickedItem] = useState('BCG')
    
    let showPopup = item => {
        setShowPopup(true)
        setClickedItem(item)
    }

    let vaccins = ['BCG', 'HB', 'HPV', 'VPI', 'VPO', 'PENTA', 'ROTA', 'RR', 'DTC', 'PNEUMO', 'VITA', 'VITD']

    return (
        <div className='page-11-container'>
            <h1>Suivie de stock</h1>
            <div className="grid">
                {
                    vaccins.map(item => <Link to={`/vaccin/${item}`} onClick={() => showPopup(item)} className="grid-item" key={item}>{item}</Link>)
                }
            </div>
            
            <Link to={'/p11'} className='suivie-de-stock-btn'>Ajouter stock</Link>
        </div>
    )
}

export default Page14