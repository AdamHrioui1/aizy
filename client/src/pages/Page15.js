import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContextApi } from '../ContextApi';

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function Page15() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie

    const [Item, setItem] = useState('')
    const [History, setHistory] = useState([])
    
    let array = new Array(15).fill(1)
    let params = useParams()

    useEffect(() => {
        setItem(params.id)
        if(params?.id) {
            let getDrugHistory = async () => {
                try {
                    let res = await axios.get(`http://localhost:5000/api/drug/${params?.id?.toLocaleLowerCase()}`, {
                        headers: {
                            'Authorization': UserCookie
                        }
                    })

                    setHistory(res?.data?.data?.historique)
                } catch (error) {
                    console.log(error)
                }
            }
            getDrugHistory()
        }
    }, [params])
    
    return (
        <div className="big-container page-1">
            <div className='header-container' style={{ marginTop: 10 }}>
                <Link to={'/p14'}>←  Back</Link>
            </div>

            <span>VACCIN: {Item}</span>
            <h1>Suivie de stock</h1>

            <div className="table-container">
            </div>
            {
                History.length !== 0 ?
                <table className='normal'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Stock reçu</th>
                            <th>Rest</th>
                            <th>Vaccin utilisé</th>
                            {/* <th>Stock finale</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {
                            History.map(item => {
                                return (
                                    <tr key={item?.id}>
                                        {/* <td>{formatDate(item?.date)} - {item?.date.slice(11, 16)}</td>
                                        <td>{ (i-1 < 0 ? 0 : parseInt(History[i-1]?.quantite)) + (i-1 < 0 ? 0 : parseInt(History[i-1]?.rest)) } + {item?.quantite} = { (i-1 < 0 ? 0 : parseInt(History[i-1]?.quantite)) + (i-1 < 0 ? 0 : parseInt(History[i-1]?.rest)) + parseInt(item?.quantite) } </td>
                                        <td>{item?.rest ? item?.rest : 0}</td>
                                        <td>{(i-1 < 0 ? 0 : parseInt(History[i-1]?.quantite) + parseInt(i-1 < 0 ? 0 : History[i-1]?.rest) - parseInt(item?.rest ? item?.rest : 0))}</td>
                                        <td>{ parseInt(item?.quantite) + parseInt(item?.rest) } </td> */}

                                        
                                        <td>{formatDate(item?.date)} - {item?.date.slice(11, 16)}</td>
                                        <td>{ parseInt(item?.quantite) }</td>
                                        <td>{ item?.rest }</td>
                                        <td>{ item?.used ? item?.used : '-' }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> :
                <h1 style={{ marginTop: 20, marginLeft: 0 }}>Loading...</h1>
            }

            <Link to={'/p14'} className="valid-btn">retour</Link>
        </div>
    )
}

export default Page15