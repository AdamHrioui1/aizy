import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page8.css'
import axios from 'axios'
import { useContextApi } from '../ContextApi'
import TemperatureChart from './TemperatureChart'

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

function Page18() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie
    const [Temperatures, setTemperatures] = useState([])
    const [Callback, setCallback] = useState(false)
    
    useEffect(() => {
        let getTemperatures = async () => {
            try {
                let res = await axios.get(`http://localhost:5000/api/temperature/`, {
                    headers: {
                        'Authorization': UserCookie
                    }
                })
                setTemperatures(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        getTemperatures()
    }, [Callback])
    
    let deleteTemperature = async (e, id) => {
        e.preventDefault()
        try {
            if(window.confirm("est ce que tu as sure tu veux supprimer ce Temperature?")) {
                await axios.delete(`http://localhost:5000/api/temperature/${id}`, {
                    headers: {
                        'Authorization': UserCookie
                    }
                })
                setCallback(!Callback)
            }
        } catch (error) {
            console.log(error);
        }
    }

    if(Temperatures.length === 0) return <h1 style={{ marginTop: 100, marginLeft: 40 }}>Loading...</h1>

    return (
        <div className="big-container page-1">
            <div className='header-container'>
                <Link to={'/p17'}>←  Retour</Link>
                <h1>Base de données</h1>
            </div>

            <TemperatureChart Temperatures={Temperatures} />

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temperature d'entrée</th>
                            <th>Temperature de sortie</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Temperatures?.reverse()?.map(t => {
                                return (
                                    <tr key={t?._id}>
                                        <td>{formatDate(t?.createdAt)} - {t?.createdAt?.slice(11, 16)}</td>
                                        <td>{t?.entre}</td>
                                        <td>{t?.sortie}</td>
                                        <td>
                                            <button className='delete' onClick={e => deleteTemperature(e, t?._id)}>supprimer</button>
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

export default Page18