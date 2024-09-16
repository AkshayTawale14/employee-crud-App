import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { createEmployee } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

function EmployeeComponent() {

    const[id, setId] = useState()
    const [name, setName] = useState("")
    const [salary, setSalary] = useState()

    const navigator = useNavigate();
    const{eid} = useParams();

    function saveForm (e){
        e.preventDefault();
        const employee = {id,name,salary};
        console.log(employee);
         
        // pass employee object to service
        createEmployee(employee).then((response)=>{
            console.log("Employe data is :",response.data);
            navigator(`/empList/${id}`);
        })
    }

    
    return (
        <>
            <div className='container border border-primary m-5'>
            <Navbar.Brand>Add Employee</Navbar.Brand>
                <Form className="m-3" >
                    <div className=''>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" placeholder="00" 
                        onChange={(e)=>setId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        defaultValue=""
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="00000" 
                        onChange={(e)=>setSalary(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit" className='my3 justify-center' onClick={saveForm}>Submit form</Button>
                    </div>
                </Form>
                
            </div>
        </>
    )
}
export default EmployeeComponent;