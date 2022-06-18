import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { Home, Perguntas, Resultado } from './pages'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perguntas" element={<Perguntas />} />
            <Route path="/resultado" element={<Resultado />} />
        </Routes>
    )
}
