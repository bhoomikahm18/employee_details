import { Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function AddEmployee() {

    const [inputs, setInputs] = useState({
        EmployeeId: "", EmployeeName: "", Department: "", Salary: "" //Variables declared with initially no values to update values from web page
    })

    //Function to handle changes and update it
    function handleChange(e) {
        setInputs((prevState) => ({
            ...prevState, //Taking or Managing the previous values as it is
            [e.target.name]: e.target.value  //To insert new values
        }));
    }

    //async and await to handle promisees
    async function sendRequest() {
        //Useing axios to send request and get respose from the backend
        const res = await axios.post(`/add`, { //.post is used to insert data to the database
            //Inserting values to the variable to save in database
            EmployeeId: inputs.EmployeeId,
            EmployeeName: inputs.EmployeeName,
            Department: inputs.Department,
            Salary: inputs.Salary,
        }).catch(err => console.log(err))

        const data = await res.data;
        return data;
    }

    function handleSubmit(e) {
        e.preventDefault(); //To control the default actions
        console.log(inputs);
        sendRequest()
            .then(data => console.log(data)) //Prents the inserted data in the console
            .then(() => alert("Employee Added")) //If data added successfully
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Typography
                    //Using CSS properties to style the content of the page
                    margin={"auto"}
                    marginTop={4}
                    variant="h4"
                    padding={2}
                    width="40%"
                    bgcolor={"#900C3F"}
                    color="white"
                    textAlign={"center"}>
                    Add Employee
                </Typography>
                <InputLabel variant='h6'>EmployeeId</InputLabel>
                <TextField name='EmployeeId' onChange={handleChange} value={inputs.EmployeeId} variant='outlined' />
                <InputLabel variant='h6'>EmployeeName</InputLabel>
                <TextField name='EmployeeName' onChange={handleChange} value={inputs.EmployeeName} variant='outlined' />
                <InputLabel variant='h6'>Department</InputLabel>
                <TextField name='Department' onChange={handleChange} value={inputs.Department} variant='outlined' />
                <InputLabel variant='h6'>Salary</InputLabel>
                <TextField name='Salary' onChange={handleChange} value={inputs.Salary} variant='outlined' /><br />
                <Button type="submit" sx={{ mt: 2, borderRadius: 4 }} variant='contained' color='warning'>Submit</Button>
            </form>
        </div>
    )
}

export default AddEmployee