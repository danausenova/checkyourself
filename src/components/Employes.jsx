import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const Employes = () => {
  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
  ];

  const [employeeData, setEmployeeData] = useState(employees);

  const handleDayChange = (index, value) => {
    setEmployeeData((prevData) => {
      const newData = [...prevData];
      newData[index].days = value;
      return newData;
    });
  };

  const handleSalaryChange = (index, value) => {
    setEmployeeData((prevData) => {
      const newData = [...prevData];
      newData[index].salaryPerDay = value;
      return newData;
    });
  };

  return (
    <div>
      {employeeData.map((item, index) => (
        <Table striped bordered hover key={index}>
          <tbody>
            <tr>
              <td className="w-25">{item.name}</td>
              <td className="w-25">{item.surname}</td>
              <td className="w-25">
                <input
                  value={item.days}
                  onChange={(e) => handleDayChange(index, e.target.value)}
                />
              </td>
              <td className="w-25">
                <input
                  value={item.salaryPerDay}
                  onChange={(e) => handleSalaryChange(index, e.target.value)}
                />
              </td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default Employes;
