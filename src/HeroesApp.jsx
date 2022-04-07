import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const HeroesApp = () => {

    /* AuthContext va a proveer de información al componente AppRouter y a todos sus hijos. En otro fichero he definido el 
    componente AuthContext, que simplemente genera un contexto. Luego lo puedo instanciar o usarlo en otro componente para
    extraer el contexto a través de useContect(AuthContext)
    En este caso estamos usando un reducer porque queremos tener un state que mute a través de una acción, lanzada a través
    de un dispacher */

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        if (!user) return
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default HeroesApp