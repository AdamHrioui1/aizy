import React from 'react'
import { Link } from 'react-router-dom'

function Page10() {
    return (
        <div className="page-2-container">
            <div className="cards-container">
                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="153.05" height="153.05" viewBox="0 0 153.05 153.05">
                        <path id="icons8-plus" d="M78.025,3A75.025,75.025,0,1,0,153.05,78.025,75.112,75.112,0,0,0,78.025,3Zm0,11.542A63.483,63.483,0,1,1,14.542,78.025,63.4,63.4,0,0,1,78.025,14.542ZM72.254,43.4V72.254H43.4V83.8H72.254v28.856H83.8V83.8h28.856V72.254H83.8V43.4Z" transform="translate(-1.5 -1.5)" fill="#446ABD" stroke="#446ABD" strokeWidth="3"/>
                    </svg>

                    <h2>AJOUTER AU STOCK</h2>
                    <p>tous produits récement ajouté au stock</p>
                    <Link to={'/p11'}>Ajouter</Link>
                </div>

                
                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150.05" height="150.05" viewBox="0 0 150.05 150.05">
                        <path id="icons8-clock" d="M77.025,2A75.025,75.025,0,1,0,152.05,77.025,75.139,75.139,0,0,0,77.025,2Zm0,15.005a60.02,60.02,0,1,1-60.02,60.02A59.907,59.907,0,0,1,77.025,17.005Zm-7.5,15.005V80.132l32.208,32.208,10.609-10.609L84.528,73.918V32.01Z" transform="translate(-2 -2)" fill="#446ABD"/>
                    </svg>
                    <h2>SUIVIE DE STOCK</h2>
                    <p>tous les produits déjà existe dans le stock</p>
                    <Link to={'/p14'}>Suivant</Link>
                </div>
            </div>
        </div>
    )
}

export default Page10