package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Employee;
import com.example.demo.Repository.EmployeeRepository;

@Service("empService")
public class EmployeeService {
	
	@Autowired
	EmployeeRepository empRepo;
	public boolean isSaveEmployee(Employee employee) {
		
	    Employee emp = empRepo.save(employee);
		return emp !=null?true:false;
	}
	
	public List<Employee> getAllEmployee(){
		return empRepo.findAll();
	}
	
	public List<Employee> getEmployeeByDesc(){
		return empRepo.getEmployeeByDescOrder();
	}
	
	public int updateEmployee(String name,Integer salary, Integer id) {
		int value = empRepo.updateEmployeeName(name, salary, id);
		return value;
	}
	
	public void deleteEmployeeById(Integer id) {
		   empRepo.deleteById(id);
		}
	
	   
	public List<Employee> FindEmployeeByName(String startName){
		return empRepo.findByName(startName);
	}
	
	public List<Employee> getEmployees(String start){
		return empRepo.findByNameStartingWith(start);
	}
	
	
	public List<Employee> getTopSalary(){
		return empRepo.findTop3ByOrderBySalaryDesc();
	}

}
