import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Employes from "./components/Employes";
function App() {
  return (
    <div className="container mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="w-25">Name</th>
            <th className="w-25">Surname</th>
            <th className="w-25">Days</th>
            <th className="w-25">Day's salary</th>
            <th>Salary</th>
          </tr>
        </thead>
      </Table>
      <Employes />
    </div>
  );
}

export default App;
