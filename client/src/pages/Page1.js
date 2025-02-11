import React from 'react'
import './Page1.css'
import { Link } from 'react-router-dom'

function Page1() {
    return (
        <div className="landing-page">
            <div className="left-side">
                <h1>PROJET <br /> DE FIN D'ÉTUDE</h1>
                <p>Notre projet simplifie le processus de vaccination par l'automatisation, facilitant ainsi la tâche des infirmières et du personnel de santé. En réduisant les tâches manuelles, ce système permet au personnel soignant de se concentrer sur ce qui compte vraiment  fournir des soins de haute qualité avec plus de facilité.</p>
                <Link to={'/p2'}>Suivant</Link>
            </div>
            
            <div className="right-side"></div>
        </div>
    )
}

export default Page1