import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TableauVaccin from './TableauVaccin'
import axios from 'axios'
import { ImcCalculation } from './ImcCalculation'
import PatientChart from './PatientChart'
import { useContextApi } from '../ContextApi'

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    
    const diffInMilliseconds = currentDate - birthDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    if (diffInDays < 30) {
        return `${diffInDays} jours`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    const remainingDays = diffInDays % 30;
    
    return `${diffInMonths} mois et ${remainingDays} jours`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function Page5() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie
    const [Patient, setPatient] = useState({})
    const [Poid, setPoid] = useState(0)
    const [Taille, setTaille] = useState(0)
    const [PerimetreCranien, setPerimetreCranien] = useState(0)
    const [Status, setStatus] = useState('')
    
    const [AddedSuccessfully, setAddedSuccessfully] = useState(false)
    const [ActiveBtn, setActiveBtn] = useState(0)
    const [CheckedVaccins, setCheckedVaccins] = useState({
        'bcg': 0,
        'hb': 0,
        'vpo': 0,
        'vpi': 0,
        'dtc': 0,
        'pneumo': 0,
        'penta': 0,
        'rota': 0,
        'rr': 0,
        'hpv': 0,
        'vita': 0,
        'vitd': 0,
    })
    const [DateNaissance, setDateNaissance] = useState(new Date('01/01/2025'))
    const [PremiereVisite, setPremiereVisite] = useState(new Date('01/01/2025'))
    const [LastEdit, setLastEdit] = useState(new Date('01/31/2025'))

    let params = useParams()

    let vaccins = [
        {
            name: 'bcg',
            doze: [0],
        },
        {
            name: 'hb',
            doze: [0],
        },
        {
            name: 'vpo',
            doze: [0, 0, 0, 0, 0, 0],
        },
        {
            name: 'vpi',
            doze: [0, 0],
        },
        {
            name: 'dtc',
            doze: [0, 0],
        },
        {
            name: 'pneumo',
            doze: [0, 0],
        },
        {
            name: 'penta',
            doze: [0, 0, 0],
        },
        {
            name: 'rota',
            doze: [0, 0, 0],
        },
        {
            name: 'rr',
            doze: [0, 0, 0],
        },
        {
            name: 'hpv',
            doze: [0, 0],
        },
        {
            name: 'vita',
            doze: [0, 0, 0],
        },
        {
            name: 'vitd',
            doze: [0, 0],
        },
    ]

    let updatePatient = async e => {
        e.preventDefault()
        try {
            let res = await axios.put(`http://localhost:5000/api/patient/find/${params.smi}`, {
                poid: Poid,
                taille: Taille,
                perimetre_cranien: PerimetreCranien,
                bcg: CheckedVaccins.bcg,
                hb: CheckedVaccins.hb,
                vpo: CheckedVaccins.vpo,
                vpi: CheckedVaccins.vpi,
                dtc: CheckedVaccins.dtc,
                pneumo: CheckedVaccins.pneumo,
                penta: CheckedVaccins.penta,
                rota: CheckedVaccins.rota,
                rr: CheckedVaccins.rr,
                hpv: CheckedVaccins.hpv,
                vita: CheckedVaccins.vita,
                vitd: CheckedVaccins.vitd,
            }, {
                headers: {
                    'Authorization': UserCookie
                }
            })

            console.log(res)
            setAddedSuccessfully(true)
            if(res) {
                setTimeout(() => {
                    setAddedSuccessfully(false)
                }, 1000)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let getPatient = async () => {
            try {
                let res = await axios.get(`http://localhost:5000/api/patient/find/${params.smi}`, {
                    headers: {
                        'Authorization': UserCookie
                    }
                })
    
                res = res.data.data
    
                setCheckedVaccins({
                    'bcg': res.bcg,
                    'hb': res.hb,
                    'vpo': res.vpo,
                    'vpi': res.vpi,
                    'dtc': res.dtc,
                    'pneumo': res.pneumo,
                    'penta': res.penta,
                    'rota': res.rota,
                    'rr': res.rr,
                    'hpv': res.hpv,
                    'vita': res.vita,
                    'vitd': res.vitd,
                })
    
                setPatient(res)
                setPoid(res.poid)
                setTaille(res.taille)
                setPerimetreCranien(res.perimetre_cranien)
                setDateNaissance(res.date_naissance)
                setPremiereVisite(res.createdAt)
            } catch (error) {
                console.log(error)
            }
        }

        getPatient()
    }, [params.smi])

    useEffect(() => {
        let status = ImcCalculation(Patient?.sexe, Patient?.date_naissance, Poid, Taille)
        setStatus(status)
    }, [Poid, Taille, Patient])

    if(Object.keys(Patient).length === 0) return <h1 style={{ marginTop: 100, marginLeft: 40 }}>Loading...</h1>
    
    return (
        <div className='big-container page-1'>
            <h1>INFORMATION <span>(Vaccination)</span></h1>

            <div className="patient-infos-container">
                <p>Information du patient:</p>
                <div className="row">
                    <div className="col">
                        <span>Nom & Prénom</span>
                        <p>{Patient?.prenom} {Patient?.nom}</p>
                    </div>
                    <div className="col">
                        <span>Numero de SMI</span>
                        <p>{Patient?.smi}</p>
                    </div>
                    <div className="col">
                        <span>Age</span>
                        <p>{calculateAge(Patient?.date_naissance)}</p>
                    </div>
                    <div className="col">
                        <span>Date de naissance</span>
                        <p>{formatDate(Patient?.date_naissance)}</p>
                    </div>
                    <div className="col">
                        <span>Phone</span>
                        <p>{Patient?.telephone}</p>
                    </div>
                    <div className="col">
                        <span>Prémature</span>
                        <p>{Patient?.premature ? 'OUI' : 'NON'}</p>
                    </div>
                </div>
            </div>

            <div className="patient-infos-container second">
                <p>Suivie du patient:</p>
                <div className="row">
                    <div className="col">
                        <span>Poid*</span>
                        <input type="number" onChange={e => setPoid(e.target.value)} value={Poid} />
                    </div>
                    <div className="col">
                        <span>Taille*</span>
                        <input type="number" onChange={e => setTaille(e.target.value)} value={Taille} />
                    </div>
                    <div className="col">
                        <span>IMC</span>
                        <input type="number" value={((Poid / (Taille * Taille)) * 10000).toFixed(2)} disabled />
                    </div>

                    <div className="col">
                        <span>IMC</span>
                        <h2
                            style={{
                                color: 
                                Status === 'Malnutrition' ? '#4b40dd' :
                                Status === 'Normal' ? '#37c506' :
                                Status === 'Surpoids' ? '#ffba10' :
                                Status === 'Obésité' ? '#f00' : '#000'
                            }}
                        >{Status}</h2>
                    </div>

                    
                    <div className="col">
                        <span>périmetre cranien</span>
                        <input type="number" onChange={e => setPerimetreCranien(e.target.value)} value={PerimetreCranien} />
                    </div>
                </div>
            </div>

            {/* <table className='normal' style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Date de naissance</th>
                        <th>Date de première visite</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{formatDate(Patient?.date_naissance)}</td>
                        <td>{formatDate(Patient?.createdAt)}</td>
                    </tr>
                </tbody>
            </table> */}

            {
                Patient?.rattrapage_vaccinale ? 
                <div className="vaccins-btns" style={{ marginTop: 40 }}>
                    <button className={ActiveBtn === 1 ? 'active' : ''} onClick={() => setActiveBtn(1)}>age ≤  1 ans</button>
                    <button className={ActiveBtn === 2 ? 'active' : ''} onClick={() => setActiveBtn(2)}>1 ans ＜ age ≤  3 ans</button>
                    <button className={ActiveBtn === 3 ? 'active' : ''} onClick={() => setActiveBtn(3)}>3 ans ＜ age ≤  6 ans</button>
                </div> :
                <div className="vaccins-btns" style={{ marginTop: 40 }}>
                    <button className={ActiveBtn === 0 ? 'active' : ''} onClick={() => setActiveBtn(0)}>Normal</button>
                </div>
            }

            <TableauVaccin 
                ActiveBtn={ActiveBtn}
                DateNaissance={DateNaissance}
                PremiereVisite={PremiereVisite}
                LastEdit={LastEdit}
                Patient={Patient}
            />

            <p className='suivi-de-patient-p'>suivi de patient</p>

            <table className='normal'>
                <thead>
                    <tr>
                        <th>Vaccin / Vitamin</th>
                        <th>Dose</th>
                    </tr>
                </thead>

                <tbody>
                    { vaccins.map(v => <Vaccin key={v.name} v={v} CheckedVaccins={CheckedVaccins} setCheckedVaccins={setCheckedVaccins} />) }
                </tbody>
            </table>

            <PatientChart Patient={Patient} />

            <div className={`ajouter-avec-succee ${AddedSuccessfully ? 'active' : ''}`}>
                <h1>AJOUTER AVEC SUCCÉES</h1>
                <button onClick={() => setAddedSuccessfully(false)}>×</button>
            </div>

            <button className='ajouter' onClick={updatePatient} style={{ position: 'fixed', top: 21, right: 90 }} >Mise à jour</button>
            <Link className='ajouter' to={'/p4'} style={{ paddingTop: 15, position: 'fixed', bottom: 20, right: 25 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#00670D' d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </Link>
        </div>
    )
}

let Vaccin = (props) => {
    let [SelectedDoze, setSelectedDoze] = useState(0)
    let { v, CheckedVaccins, setCheckedVaccins } = props

    useEffect(() => {
        setSelectedDoze(CheckedVaccins[v.name])
    }, [v.name])
    
    return (
        <tr key={v.name}>
            <td style={{ textTransform: 'uppercase' }}>{v.name}</td>
            <td>
                {
                    v.doze.map((d, i) => {
                        return (
                            <Checkbox 
                                key={`${v.name} ${i+1}`} 
                                v={v} 
                                dataid={i+1}
                                SelectedDoze={SelectedDoze}
                                setSelectedDoze={setSelectedDoze} 
                                CheckedVaccins={CheckedVaccins}
                                setCheckedVaccins={setCheckedVaccins}
                            />
                        )
                    })
                }
                <span className='cross' onClick={() => setSelectedDoze(0)}>&times;</span>
                
            </td>
        </tr>
    )
}

let Checkbox = (props) => {
    let { v, dataid, SelectedDoze, setSelectedDoze, CheckedVaccins, setCheckedVaccins } = props
    const [Selected, setSelected] = useState(false)

    useEffect(() => {
        if(parseInt(dataid) > parseInt(SelectedDoze)) {
            setSelected(false)
        } else {
            setSelected(true)
        }

        const updatedCheckedVaccins = { ...CheckedVaccins, [v.name]: SelectedDoze };
        setCheckedVaccins(updatedCheckedVaccins);

        // CheckedVaccins[v.name] = SelectedDoze
        // setCheckedVaccins({...CheckedVaccins})
    }, [SelectedDoze])
    

    return (
        <input className={`${v.name}`} data-id={dataid} type="checkbox" checked={Selected} onChange={() => setSelectedDoze(dataid)} />
    )
}

export default Page5