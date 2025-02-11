import React, { useState } from 'react'
import './Page7.css'
import { useNavigate } from 'react-router-dom'

function Page73() {
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)

    let navigate = useNavigate()

    let submitHandler = e => {
        e.preventDefault()
        setAddedSuccessfully(true)
        setTimeout(() => {
            navigate('/p8')
        }, 1000)
    }

    return (
        <div className='big-container page-1'>
            <h2>RATTRAPAGE</h2>
            <h1>INFORMATION <span>(Vaccination)</span></h1>

            <div className="patient-infos-container">
                <p>Information du patient:</p>
                <div className="row">
                    <div className="col">
                        <span>Nom & Prénom*</span>
                        <p>Adam Hrioui</p>
                    </div>
                    <div className="col">
                        <span>Numero de SMI*</span>
                        <p>0001</p>
                    </div>
                    <div className="col">
                        <span>Age</span>
                        <p>22 mois</p>
                    </div>
                    <div className="col">
                        <span>Date de naissance*</span>
                        <p>09/12/2001</p>
                    </div>
                    <div className="col">
                        <span>Phone</span>
                        <p>0618240021</p>
                    </div>
                    <div className="col">
                        <span>Prémature</span>
                        <p>OUI</p>
                    </div>
                </div>
            </div>

            <h2 className='age-moin-12'>Age plus que 1 an et moin que 3 ans </h2>

            <p className='suivi-de-patient-p'>suivi de patient</p>

            <table className='normal'>
                <thead>
                    <tr>
                        <th>Vaccin</th>
                        <th>Dose</th>
                        <th>RDV</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>BCG</td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>HB</td>
                        
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>VPO</td>
                        <td>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>VPI</td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>DTC</td>
                        <td></td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>PNEUMO</td>
                        <td>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>PENTA</td>
                        <td>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>ROTA</td>
                        <td>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>RR</td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            
            <table className='normal'>
                <thead>
                    <tr>
                        <th>Vitamine</th>
                        <th>Dose</th>
                        <th>RDV</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>VIT A</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>VIT D</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>

            <button className='ajouter' onClick={submitHandler}>Sauvgarder</button>
        
            <div className={`ajouter-avec-succee ${AddedSuccessfully ? 'active' : ''}`}>
                <h1>SAUVGARDER AVEC SUCCÉES</h1>
                <button onClick={() => setAddedSuccessfully(false)}>×</button>
            </div>
        </div>
    )
}

export default Page73