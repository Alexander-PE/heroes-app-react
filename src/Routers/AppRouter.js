import React from 'react'
// import { MarvelScreen } from '../components/Marvel/MarvelScreen'
// import { DcScreen } from '../components/dc/DcScreen'
// import { Search } from '../components/Search/Search'
// import { NavBar } from '../components/ui/NavBar'



import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Router>
            
            <Routes>
                <Route exact path='/login' element={<LoginScreen />} />

                {/* todas las rutas despues del / van a manejarse ahi si no es por login */}
                <Route path='/*' element={<DashboardRoutes />} />
            
            </Routes>
        </Router>
    )
}
