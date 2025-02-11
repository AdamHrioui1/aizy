import React from 'react'
import './Page4.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useContextApi } from '../ContextApi'

function Page4() {
    const [Smi, setSmi] = useState(0)
    let state = useContextApi()
    let [UserCookie] = state.UserCookie

    let navigate = useNavigate()
    let search = async e => {
        e.preventDefault()
        try {
            let res = await axios.get(`http://localhost:5000/api/patient/find/${Smi}`, {
                headers: {
                    'Authorization': UserCookie
                }
            })
            if(res.data.success) navigate(`/p5/${res.data.data.smi}`)
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    return (
        <div className="page-4-container">
            <form onSubmit={search}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81.057" height="81.057" viewBox="0 0 81.057 81.057">
                        <path id="icons8-clock" d="M42.528,2A40.528,40.528,0,1,0,83.057,42.528,40.59,40.59,0,0,0,42.528,2Zm0,8.106A32.423,32.423,0,1,1,10.106,42.528,32.361,32.361,0,0,1,42.528,10.106Zm-4.053,8.106v26l17.4,17.4L61.6,55.874,46.581,40.85V18.211Z" transform="translate(-2 -2)" fill="#446ABD"/>
                    </svg>
                    <h2>ANCIEN CAS</h2>
                </div>

                <h2>Entrer le numéro de SMI</h2>
                <input type="number" onChange={e => setSmi(e.target.value)} value={Smi} />
                <button>Suivant</button>
            </form>
        </div>
    )
}

export default Page4