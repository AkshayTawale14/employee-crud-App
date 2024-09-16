import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateEmployee() {
    const { id } = useParams(); // Get the employee ID from the URL
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({   // object values 
        id: '',
        name: '',
        salary: '',
    });

    useEffect(() => {
        // Fetch the existing employee data by ID
        axios.get(`http://localhost:8080/employee/${id}`)
            .then(response => {
                setFormValues(response.data);
            })
            .catch(error => {
                console.log("Error while fetching the data: ", error);
            });
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target; // Correct destructuring of name and value from the input element
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Update the employee details
        axios.put(`http://localhost:8080/employee/update/${id}`, formValues)
            .then(response => {
                console.log('Employee updated successfully:', response.data);
                navigate('/empList'); // Redirect to employee list page after successful update
            })
            .catch(error => {
                console.error('Error updating the employee:', error);
            });
            navigate(`/empList`)

    }

    return (
        <>
            <div className="container border border-primary m-5">
                <Navbar.Brand>Update Employee</Navbar.Brand>
                <Form className="m-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formId">
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="00"
                            name="id"
                            value={formValues.id}
                            onChange={handleChange}
                            readOnly // Make ID field read-only as it shouldn't be updated
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="00000"
                            name="salary"
                            value={formValues.salary}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button type="submit" className="my-3">
                        Update Employee
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default UpdateEmployee;
