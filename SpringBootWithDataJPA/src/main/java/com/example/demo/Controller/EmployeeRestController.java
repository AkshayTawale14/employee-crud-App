package com.example.demo.Controller;

import org.slf4j.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Employee;
import com.example.demo.Repository.EmployeeRepository;
import com.example.demo.Service.EmployeeService;
@CrossOrigin("*")
@RestController
@RequestMapping("/employee")
public class EmployeeRestController {
	
	@Autowired
	EmployeeService empService;
	
	@Autowired
	EmployeeRepository empRepo;
	
	//Logger in the application to monitor, understanding behavior and track the issues in the code
	Logger logger = LoggerFactory.getLogger(EmployeeRestController.class);
	
	@PostMapping("/save")
	public String saveEmployee(@RequestBody Employee employee) {
		boolean b = empService.isSaveEmployee(employee);		
		return b?"Employee Added Success":"some problem is there";	
	}
	
	@GetMapping("/view")
	public List<Employee> getAllEmployees(){
		return empService.getAllEmployee();
	}
	
	@GetMapping("/getByDesc")
	public List<Employee> getEmployeeByDesc(){
		return empService.getEmployeeByDesc();
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateEmployeeName(@RequestBody Employee e ,@PathVariable Integer id) {
		int value  = empService.updateEmployee(e.getName(),e.getSalary(),id);
		if(value==1) {
			return ResponseEntity.ok("student updated successfuly....");
		}
		else {
			return ResponseEntity.status(404).body("student not found");
			
		}
	}
	
	   @DeleteMapping("/delete/{id}")
	   public void deleteEmployee(@PathVariable Integer id) {
	      empService.deleteEmployeeById(id);
	   }
	
	@GetMapping("/GetByName/{startName}")
	public List<Employee> findByEmployeeName(@PathVariable String startName){
		return empService.FindEmployeeByName(startName);
	}
	
	@GetMapping("/getNamesByStart/{start}")
	public List<Employee> getEmployees(@PathVariable String start){
		return empService.getEmployees(start);
	}
	
	@GetMapping("/getTop3")
	public List<Employee> getTopSalaryEmployee(){
		return empService.getTopSalary();
	}

}
