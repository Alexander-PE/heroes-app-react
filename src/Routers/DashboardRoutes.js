import { NavBar } from "../components/ui/NavBar"
import {Routes, Route } from 'react-router-dom'

import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { Search } from '../components/Search/Search'
import { Hero } from '../components/Hero/Hero'


export const DashboardRoutes = () => {
  return (
    <>
        <NavBar />
        <div className="container">
            <Routes>
            {/* 
                no tienen / porque ya hay una ruta que se lo va a heredar a esta ruta hijo
                ESTA CONSISTE EN QUE EL NAVBAR SOLAMENTE SE MUESTRE CON ESTAS RUTAS Y NO CON EL LOGIN
            */}
                    <Route path="marvel" element={<MarvelScreen />} /> 
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<Search />} />

                    <Route path="hero/:heroeId" element={<Hero />} /> 

                    <Route path="/" element={<MarvelScreen />} />
            </Routes>

        </div>
    </>
  )
}
