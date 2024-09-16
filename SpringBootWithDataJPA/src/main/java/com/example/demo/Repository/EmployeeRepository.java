package com.example.demo.Repository;

import java.util.List;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Employee;

import jakarta.transaction.Transactional;
@Repository("empRepo")
public interface EmployeeRepository extends JpaRepository<Employee, Integer>  {
	
	//@Query(nativeQuery=true, value="select * from employee1 order by eid desc")
	
	@Query("From Employee e ORDER BY e.id desc")
	public List<Employee> getEmployeeByDescOrder();
	
	@Transactional
	@Modifying
	@Query("update Employee e set e.name = ?1, e.salary= ?2 where e.id= ?3")
	public int updateEmployeeName( String name, Integer salary, Integer id );
	
	// Employee by the name
	public List<Employee> findByName(String startName);
	
	// Employee By the Start letter
	public List<Employee> findByNameStartingWith(String start);
	
	// get top 3 employee By salary
	
	public List<Employee> findTop3ByOrderBySalaryDesc();

}
