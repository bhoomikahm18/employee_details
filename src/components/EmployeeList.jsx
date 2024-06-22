import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function EmployeeList(props) {
    return (
        <Card
            sx={{
                margin: 2,
                width: 180,
                height: "auto",
                borderRadius: 5,
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                },
            }}>
            <CardContent>
                <Typography gutterBottom variant="h6" >
                    ID: {props.EmployeeId}
                </Typography>
                <Typography gutterBottom variant="h6" >
                    Name: {props.EmployeeName}
                </Typography>
                <Typography gutterBottom variant="h6" >
                    Departmet: {props.Department}
                </Typography>
                <Typography gutterBottom variant="h6" >
                    Salary: {props.Salary}
                </Typography>

            </CardContent>

        </Card>
    )
}

export default EmployeeList