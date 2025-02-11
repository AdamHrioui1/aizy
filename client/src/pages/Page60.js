import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Page60() {
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)

    let navigate = useNavigate()
    let params = useParams()

    let submitHandler = e => {
        e.preventDefault()
        setAddedSuccessfully(true)
        setTimeout(() => {
            navigate(`/p7-${params.age}`)
        }, 1000)
    }

    return (
        <div className="page-3-container">
            <form className="form" onSubmit={submitHandler}>
                <h2>NOUVEAU CAS DE RATTRAPAGE VACCINALE</h2>

                <div className="inputs-container">
                    <div className="left">
                        <div className="input-label">
                            <label htmlFor="">Nom et Prénom</label>
                            <input type="text" />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Numéro de SMI</label>
                            <input type="number" />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Date de Naissance</label>
                            <input type="date" />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Adresse</label>
                            <input type="text" />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Téléphone</label>
                            <input type="tel" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="label-two-radios">
                            <span>Le sexe</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="le-sexe" id="female" />
                                    <label htmlFor="female">Féminin</label>
                                </div>
                                <div>
                                    <input type="radio" name="le-sexe" id="male" />
                                    <label htmlFor="male">Masculin</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Enfant né au nivau de matérnité</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="born" id="born-yes" />
                                    <label htmlFor="born-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="born" id="born-no" />
                                    <label htmlFor="born-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Rattrapage vaccinale</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="rattrapage-vaccinale" id="rattrapage-vaccinale-yes" />
                                    <label htmlFor="rattrapage-vaccinale-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="rattrapage-vaccinale" id="rattrapage-vaccinale-no" />
                                    <label htmlFor="rattrapage-vaccinale-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Enfant né protéger (VAT)</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="enfant-ne-protéger" id="enfant-ne-protéger-yes" />
                                    <label htmlFor="enfant-ne-protéger-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="enfant-ne-protéger" id="enfant-ne-protéger-no" />
                                    <label htmlFor="enfant-ne-protéger-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <label htmlFor='combien-dose'>Si oui, combien de doses?</label>
                            <select id='combien-dose'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button type='submit'>Ajouter</button>
            </form>

            <div className={`ajouter-avec-succee ${AddedSuccessfully ? 'active' : ''}`}>
                <h1>AJOUTER AVEC SUCCÉES</h1>
                <button onClick={() => setAddedSuccessfully(false)}>×</button>
            </div>
        </div>
    )
}

export default Page60