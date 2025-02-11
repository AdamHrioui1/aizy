import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page8.css'
import axios from 'axios'
import { useContextApi } from '../ContextApi'

function Page16() {
    let state = useContextApi()
    let [UserCookie] = state.UserCookie
    const [Users, setUsers] = useState([])
    const [Callback, setCallback] = useState(false)
    
    useEffect(() => {
        let getUsers = async () => {
            try {
                let res = await axios.get(`http://localhost:5000/api/user/all`, {
                    headers: {
                        'Authorization': UserCookie
                    }
                })

                setUsers(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        getUsers()
    }, [Callback])
    
    let deleteUser = async (e, id) => {
        e.preventDefault()
        console.log(id);
        try {
            if(window.confirm("est ce que tu as sure tu veux supprimer ce utilisateur?")) {
                let res = await axios.delete(`http://localhost:5000/api/user/delete/${id}`, {
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

    if(Users.length === 0) return <h1 style={{ marginTop: 100, marginLeft: 40 }}>Loading...</h1>

    return (
        <div className="big-container page-1">
            <div className='header-container'>
                <Link to={'/p2'}>←  Retour</Link>
                <h1>Base de données d'utilisateurs</h1>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Users.map(user => {
                                return (
                                    <tr key={user?._id}>
                                        <td>{user?.name}</td>
                                        <td>{user?.lastname}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.role === '1234' ? 'Admin' : 'Inférmier' }</td>
                                        <td>
                                            <button className='delete' onClick={e => deleteUser(e, user?._id)}>supprimer</button>
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

export default Page16