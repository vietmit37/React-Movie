import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail, Booking } from '../pages'

const RoutesComponent = () => {

    return (
        <Routes>
            <Route path="/detail/:maPhim" element={<Detail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default RoutesComponent