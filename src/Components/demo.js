import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'

function UpdateEmployee() {

    const {id} = useParams(); // getting the id from url
    const navigate = useNavigate();

    const[formValues, SetFormValues] = useState({
        "id" : "",
        "name" : "",
        "salary" : "",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8080/employee/update/${id}`).then(response=>{
            SetFormValues(response.data)
        }).catch(error=>{
            console.log("Error while fetching the data: ",error);
        })
    },[id])

    function handleChange(e){
        const{name, value} = e.target;
        SetFormValues({
            ...formValues,
            [name]:value,
        }
        )

    }

    function handleSubmit(e) {
        e.preventDefault();
        // Update the employee details
        axios.put(`http://localhost:8080/employee/update/${id}`, formValues)
            .then(response => {
                console.log('Employee updated successfully:', response.data);
                navigate('/employees'); // Redirect to employee list page after successful update
            })
            .catch(error => {
                console.error('Error updating the employee:', error);
            });
    }

    return (
        <>
            <div className='container border border-primary m-5'>
            <Navbar.Brand>Update Employee</Navbar.Brand>
                <Form className="m-3" onSubmit={handleChange} >
                    <div className=''>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" placeholder="00" 
                        name="id" value={formValues.id}
                        // onChange={(e)=>setId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        defaultValue=""
                        name="name" value={formValues.name}
                        // onChange={(e)=>setName(e.target.value)}
                    />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="00000" 
                        name="salary" value={formValues.salary}
                        // onChange={(e)=>setSalary(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit" className='my3 justify-center' 
                    // onClick={saveForm}
                    >Update form</Button>
                    </div>
                </Form>
                
            </div>
        </>
    )
}
export default UpdateEmployee;