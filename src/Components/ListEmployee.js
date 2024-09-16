
import React, { useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { deleteEmployee, listEmployee } from '../Services/EmployeeService';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function ListEmployee() {

    const [employee, setEmployee] = useState([]);
    const navigator = useNavigate();
    

    useEffect(()=>{
        listEmployee().then((response)=>{
            setEmployee(response.data);
        }).catch((err)=>{
            console.error(err);
        })
    }, [])
    
    function addEmployee(){
       navigator('/add-employee');
    }

    function updateEmployee(id){
        navigator(`/update-emp/${id}`);
    }

    function removeEmployee(id){
        console.log("1");
        deleteEmployee(id).then((response)=>{
            console.log("2");
            console.log(response.data);
            console.log("3");
        }).catch((error)=>{
            console.log("Error is :",error);
            console.log("4");
        })
        
    }

    return (
        <>
            <div className='container text-center'>
                <h2 className='text-center'>Employee List</h2>
                <Button variant="primary my-3" onClick={addEmployee}>Add New Employee</Button>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((emp)=>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>
                            <Button variant="primary m-2" onClick={()=>updateEmployee(emp.id)}>Update</Button>
                            <Button variant="danger" onClick={()=>removeEmployee(emp.id)}>Delete</Button>
                            </td>
                        </tr>             
                        )
                    }      
                </tbody>
            </Table>

            </div>
        </>
    );

}
export default ListEmployee;