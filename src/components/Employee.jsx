import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import EmployeeList from './EmployeeList';

function Employee() {
    const [employees, setEmployees] = useState();

    async function getEmployeeList() {
        //Using axios to send request and get respose from the backend
        const res = await axios.get("/list") //get() method is used to get all data from database
            .catch((err) => console.log(err));

        //Checking error when no data found at database
        if (res.status !== 200) {
            return console.log("No Data");
        }

        let data = null;
        if (res) {
            data = await res.data;
        }
        return data;
    };

    useEffect(() => {
        getEmployeeList()
            .then(data => setEmployees(data.employees)); //Updates the initial state value, Once data retrieved
    }, []);

    return (
        <Box margin={"auto"} marginTop={4}>
            <Typography
                margin={"auto"}
                variant="h4"
                padding={2}
                width="40%"
                bgcolor={"#900C3F"}
                color="white"
                textAlign={"center"}
            >
                Employee List
            </Typography>
            <Box
                width={"100%"}
                margin="auto"
                marginTop={4}
                display={"flex"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
            >
                {employees &&
                    employees.map((Employee, index) => (

                        <EmployeeList
                            key={index}
                            //Retrieving data from database and displaying in the page
                            EmployeeId={Employee.EmployeeId}
                            EmployeeName={Employee.EmployeeName}
                            Department={Employee.Department}
                            Salary={Employee.Salary}
                        />


                    ))}
            </Box>

        </Box>
    )
}

export default Employee