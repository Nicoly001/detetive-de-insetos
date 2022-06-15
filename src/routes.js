import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { Home, Perguntas, Resultado } from './pages'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="detetive-de-insetos/" element={<Home />} />
            <Route path="detetive-de-insetos/perguntas" element={<Perguntas />} />
            <Route path="detetive-de-insetos/resultado" element={<Resultado />} />
        </Routes>
    )
}
