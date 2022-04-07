import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/NavBar'

import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import HeroScreen from '../components/hero/HeroScreen'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container py-5">
                {/* Routes va a renderizar lo componentes en la vista a medida que nos movamos ya sea con Link o con
                useNavigate. Lo que hará será no recargar la página, tan solo imprimirá el componente que se modifica */}
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                    {/* heroId -> Parámetro obligatorio que luego podremos extraer */}
                </Routes>
            </div>

        </>
    )
}

export default DashboardRoutes
