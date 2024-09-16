import ListEmployee from "./Components/ListEmployee";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EmployeeComponent from "./Components/EmployeeComponent";
import UpdateEmployee from "./Components/UpdateEmployee";


function App() {
  return (
    <>
      <BrowserRouter>
      <Link to="/">View Employees</Link><br/>
      <Link to="/update-emp/:id">Update Page</Link>
        <HeaderComponent />
        <Routes>
            <Route path="/" element={<ListEmployee />}></Route>
            <Route path="/empList" element={<ListEmployee />}></Route>
            
            <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
            <Route path="/update-emp/:id" element={<UpdateEmployee/>}></Route>
            
        </Routes>
        
        <FooterComponent />
      </BrowserRouter>

    </>
  );
}
export default App;
