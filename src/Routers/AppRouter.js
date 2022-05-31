import React from 'react'
// import { MarvelScreen } from '../components/Marvel/MarvelScreen'
// import { DcScreen } from '../components/dc/DcScreen'
// import { Search } from '../components/Search/Search'
// import { NavBar } from '../components/ui/NavBar'



import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <Router>
            
            <Routes>
                {/* <Route exact path='/login' element={<LoginScreen />} /> */}

                <Route path='/login' element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />
                

                {/* todas las rutas despues del / van a manejarse ahi si no es por login */}

                {/* <Route path='/*' element={<DashboardRoutes />} /> */}
                
                {/* lo mismo pero para rutas privadas */}
                <Route path='/*' element={
                    <PrivateRoute>
                        <DashboardRoutes /> {/* al usar esto manda todo lo que este ahi como un prop children */}
                    </PrivateRoute>
                } />
            
            </Routes>
        </Router>
    )
}
