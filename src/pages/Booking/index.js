import { Box, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'

const Booking = () => {
    const {state} = useLocation()
    console.log(state);

    return (
        <Box height={'800px'}>
            <Typography variant='h1'>Trang Booking</Typography>
        </Box>
    )
}

export default Booking