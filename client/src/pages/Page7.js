import React from 'react'
import './Page7.css'

function Page7() {

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

            <h2 className='age-moin-12'>Age moin de 12 mois</h2>

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

            <button className='ajouter'>Sauvgarder</button>
        </div>
    )
}

export default Page7