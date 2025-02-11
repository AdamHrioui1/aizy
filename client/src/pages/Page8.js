import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page8.css'
import axios from 'axios'
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

function Page8() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie
    const [Patients, setPatients] = useState([])
    const [Callback, setCallback] = useState(false)
    
    useEffect(() => {
        let getPatients = async () => {
            try {
                let res = await axios.get(`http://localhost:5000/api/patient/`, {
                    headers: {
                        'Authorization': UserCookie
                    }
                })

                setPatients(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        getPatients()
    }, [Callback])
    
    let deletePatient = async (e, id) => {
        e.preventDefault()
        try {
            if(window.confirm("est ce que tu as sure tu veux supprimer ce patient?")) {
                let res = await axios.delete(`http://localhost:5000/api/patient/${id}`, {
                    headers: {
                        'Authorization': UserCookie
                    }
                })

                console.log(res.data.data);
                setCallback(!Callback)
            }
        } catch (error) {
            console.log(error);
        }
    }

    if(Patients.length === 0) return <h1 style={{ marginTop: 100, marginLeft: 40 }}>Loading...</h1>

    return (
        <div className="big-container page-1">
            <div className='header-container'>
                <Link to={'/p2'}>←  Retour</Link>
                <h1>Base de données</h1>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>N° SMI</th>
                            <th>Nom et Prénom</th>
                            <th>DN</th>
                            <th>Adress</th>
                            <th>Age</th>
                            <th>Poid</th>
                            <th>Taille</th>
                            <th>IMC</th>
                            <th>Perimetre Cranien</th>
                            <th>N/R</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Patients.map(p => {
                                return (
                                    <tr key={p?._id}>
                                    <td>
                                        <Link to={`/p5/${p?.smi}`}>{p?.smi}</Link>
                                    </td>
                                        <td>
                                            <Link to={`/p5/${p?.smi}`}>{p?.prenom} {p?.nom}</Link>
                                        </td>
                                        <td>{formatDate(p?.date_naissance)}</td>
                                        <td>{p?.address}</td>
                                        <td>{calculateAge(p?.date_naissance)}</td>
                                        <td>{p?.poid} kg</td>
                                        <td>{p?.taille} cm</td>
                                        <td>{((p?.poid * 10000) / (p?.taille * p?.taille)).toFixed(2)}</td>
                                        <td>{p?.perimetre_cranien ? p?.perimetre_cranien : '-'}</td>
                                        <td
                                            style={{
                                                color: 
                                                p?.rattrapage_vaccinale ? '#f00' : '#09b109'
                                            }}
                                        ><strong>{p?.rattrapage_vaccinale ? 'R' : 'N'}</strong></td>
                                        <td>
                                            <button className='delete' onClick={e => deletePatient(e, p?._id)}>supprimer</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page8