import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:9090/employee';
export const listEmployee = ()=>{
    return axios.get(`${REST_API_BASE_URL}/view`);
}

export const createEmployee = (employee)=> axios.post(`${REST_API_BASE_URL}/save`,employee);

export const deleteEmployee = (empId)=> {
    console.log("Employee id :",empId);
     axios.delete(`${REST_API_BASE_URL}/delete/${empId}`);
    
}

//axios.put(`http://localhost:8080/employee/update/${id}`, formValues)