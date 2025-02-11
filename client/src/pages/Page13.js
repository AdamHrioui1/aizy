import React from 'react'
import { Link } from 'react-router-dom'

function Page13() {
    return (
        <div className="page-2-container">
            <div className="cards-container">
                <div className="card">
                    <h1>1J</h1>
                    <h2>JOURNALIER</h2>
                    <p>statistique des doses de vaccin faites par jour</p>
                    <Link to={'/p1'}>Ajouter</Link>
                </div>

                
                <div className="card">
                    <h1>+30J</h1>
                    <h2>MENSUELLE</h2>
                    <p>statistique des doses de vaccin faites par mois</p>
                    <Link to={'/p1'}>Suivant</Link>
                </div>
            </div>
        </div>
    )
}

export default Page13