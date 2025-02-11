import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import Cookies from 'universal-cookie';

export let ContextApi = createContext()

export let ContextProvider = ({ children }) => {
    const [UserCookie, setUserCookie] = useState('')
    const [IsLogin, setIsLogin] = useState(false)
    const [IsAdmin, setIsAdmin] = useState(false)
    
    const cookies = new Cookies(null, { path: '/' })
    
    useEffect(() => {
        let cookie = cookies.get('sante-accesstoken')
        if(cookie && cookie.length > 170) {
            setUserCookie(cookie)
            setIsLogin(true)

            let getUser = async () => {
                try {
                    let res = await axios.get('http://localhost:5000/api/user/userinfo', {
                        headers: {
                            'Authorization': cookie
                        }
                    })

                    if(res?.data?.data?.role === '1234') {
                        setIsAdmin(true)
                    }
                    else {
                        setIsAdmin(false)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            getUser()
        }
    }, [])
    

    let state = {
        UserCookie: [UserCookie, setUserCookie],
        IsLogin: [IsLogin, setIsLogin],
        IsAdmin: [IsAdmin, setIsAdmin],
    }

    return (
        <ContextApi.Provider value={state}>
            { children }
        </ContextApi.Provider>
    )
}

export let useContextApi = () => useContext(ContextApi)