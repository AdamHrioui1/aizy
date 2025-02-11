import React from 'react'
import { Link } from 'react-router-dom'

function Page6() {
    return (
        
        <div className="page-2-container">
            <h1>RATTRAPAGE VACCINALE</h1>
            <div className="cards-container">
                <div className="card-3">
                    <h2>Moin de 12 mois</h2>
                    <p>Si l'enfant a <strong>moins de 12 mois</strong> avec un rattrapge vaccinale</p>
                    <Link to={`/p6-ajouter/0`} >Ajouter</Link>
                </div>

                <div className="card-3">
                    <h2>Entre 1 et 3 ans</h2>
                    <p>Si l'enfant a <strong>plus de 12 mois et moins de 3 ans</strong> avec un rattrapge vaccinale</p>
                    <Link to={`/p6-ajouter/3`} >Ajouter</Link>
                </div>
                
                <div className="card-3">
                    <h2>Entre 3 et 6 ans</h2>
                    <p>Si l'enfant a <strong>plus de 3 ans et moins de 6 ans</strong> avec un rattrapge vaccinale</p>
                    <Link to={`/p6-ajouter/6`} >Ajouter</Link>
                </div>
            </div>
        </div>
    )
}

export default Page6