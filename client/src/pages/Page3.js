import React, { useEffect, useState } from 'react'
import './Page3.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContextApi } from '../ContextApi'

function Page3() {
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)
    let [Nom, setNom] = useState('')
    let [Prenom, setPrenom] = useState('')
    let [DateNaissance, setDateNaissance] = useState('')
    let [Address, setAddress] = useState('')
    let [Location, setLocation] = useState('')
    let [Telephone, setTelephone] = useState('')
    let [Sexe, setSexe] = useState(false)
    let [Maternite, setMaternite] = useState(false)
    let [RattrapageVaccinale, setRattrapageVaccinale] = useState(false)
    let [Premature, setPremature] = useState(false)
    let [NeeProteger, setNeeProteger] = useState(false)
    let [CombienDose, setCombienDose] = useState(0)

    let state = useContextApi()
    let [UserCookie] = state.UserCookie

    let navigate = useNavigate()

    let createPatient = async e => {
        e.preventDefault()
        try {
            let res = await axios.post('http://localhost:5000/api/patient/', {
                nom: Nom,
                prenom: Prenom,
                date_naissance: DateNaissance,
                address: Address,
                telephone: Telephone,
                sexe: Sexe === true ? 'female' : 'male',
                maternite: Maternite,
                rattrapage_vaccinale: RattrapageVaccinale,
                premature: Premature,
                nee_proteger: NeeProteger,
                combien_dose: CombienDose,
            }, {
                headers: {
                    'Authorization': UserCookie
                }
            })

            console.log(res)
            if(res) setAddedSuccessfully(true)
            setAddedSuccessfully(true)
            setTimeout(() => {
                navigate(`/p5/${res.data.data.smi}`)
            }, 1000)
            
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    return (
        <div className="page-3-container">
            <form className="form" onSubmit={createPatient}>
                <h2>NOUVEAU CAS</h2>

                <div className="inputs-container">
                    <div className="left">
                        <div className="input-label">
                            <label htmlFor="">Prénom</label>
                            <input type="text" onChange={e => setNom(e.target.value)} value={Nom} required />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Nom</label>
                            <input type="text" onChange={e => setPrenom(e.target.value)} value={Prenom} required />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Date de Naissance</label>
                            <input type="date" onChange={e => setDateNaissance(e.target.value)} value={DateNaissance} required />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Adresse</label>
                            <input type="text" onChange={e => setAddress(e.target.value)} value={Address} required />
                        </div>
                        <div className="input-label">
                            <label htmlFor="">Téléphone</label>
                            <input type="tel" onChange={e => setTelephone(e.target.value)} value={Telephone} required />
                        </div>
                    </div>

                    <div className="right">
                        <div className="label-two-radios">
                            <span>Le sexe</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="le-sexe" id="female" onChange={e => setSexe(true)} required />
                                    <label htmlFor="female">Féminin</label>
                                </div>
                                <div>
                                    <input type="radio" name="le-sexe" id="male" onChange={e => setSexe(false)} required />
                                    <label htmlFor="male">Masculin</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Enfant né au nivau de matérnité</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="born" id="born-yes" onChange={e => setMaternite(true)} required />
                                    <label htmlFor="born-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="born" id="born-no" onChange={e => setMaternite(false)} required />
                                    <label htmlFor="born-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Rattrapage vaccinale</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="rattrapage-vaccinale" id="rattrapage-vaccinale-yes" onChange={e => setRattrapageVaccinale(true)} required />
                                    <label htmlFor="rattrapage-vaccinale-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="rattrapage-vaccinale" id="rattrapage-vaccinale-no" onChange={e => setRattrapageVaccinale(false)} required />
                                    <label htmlFor="rattrapage-vaccinale-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Enfant prématuré</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="enfant-premature" id="enfant-premature-yes" onChange={e => setPremature(true)} required />
                                    <label htmlFor="enfant-premature-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="enfant-premature" id="enfant-premature-no" onChange={e => setPremature(false)} required />
                                    <label htmlFor="enfant-premature-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="label-two-radios">
                            <span>Enfant né protéger (VAT)</span>
                            <div className="radios">
                                <div>
                                    <input type="radio" name="enfant-ne-protéger" id="enfant-ne-protéger-yes" onChange={e => setNeeProteger(true)} required />
                                    <label htmlFor="enfant-ne-protéger-yes">OUI</label>
                                </div>
                                <div>
                                    <input type="radio" name="enfant-ne-protéger" id="enfant-ne-protéger-no" onChange={e => setNeeProteger(false)} required />
                                    <label htmlFor="enfant-ne-protéger-no">NON</label>
                                </div>
                            </div>
                        </div>
                        
                        {
                            NeeProteger ?
                            <div className="label-two-radios">
                                <label htmlFor='combien-dose'>Si oui, combien de doses?</label>
                                <select id='combien-dose' onChange={e => setCombienDose(e.target.value)} value={CombienDose} required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div> :
                            <></>
                        }
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

export default Page3