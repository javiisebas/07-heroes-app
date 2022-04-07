import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'

import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'



export const AppRouter = () => {
    return (
        /* En BrowserRouter tendremos tanto la vista como la lógica. Para agragar la funcionalidad nos ayudaremos del paquete
        react-router-dom. Este nos dará la posibilidad de definir las routas (path - elemento/componente), junto con definir 
        la barra de navegación que nos permite renderizar estos componentes en nuestro SPA */
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />
                <Route path='/*' element={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>
                } />
            </Routes>

        </BrowserRouter>
    )
}