import { Box, Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div >
            <Box display={"flex"} padding={5} margin={"auto"} variant="h1" >
                <Button LinkComponent={Link} to="/list" variant='outlined' sx={{ margin: "auto", width: "30%", color: "#2b2d42" }}>View All Employees</Button>
            </Box>
            <Box display={"flex"} padding={5} margin={"auto"}>
                <Button LinkComponent={Link} to="/add" variant='outlined' sx={{ margin: "auto", width: "30%", color: "#2b2d42" }}>Add Employees</Button>
            </Box>
        </div>
    )
}

export default HomePage