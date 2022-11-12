import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import SelectDropDownnnn from "../../components/SelectDropDown/SelectDropDownnnn";
import Calendar from "../../components/Calendar/Calendar";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const employees = useSelector((state) => state.employees);
  const states = useSelector((state) => state.states);
  const department = useSelector((state) => state.department);
  const dispatch = useDispatch();

  const saveEmployee = (employee) => {
    dispatch({ type: "saveEmployee", employee: employee });
  };

  const functionCloseBtn = () => {
    setOpenModal(false);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const employee = {
      firstName: e.target[0].value || "",
      lastName: e.target[1].value || "",
      dateOfBirth: e.target[2].value || "",
      startDate: e.target[3].value || "",
      street: e.target[5].value || "",
      city: e.target[6].value || "",
      state: e.target[7].value || "",
      zipCode: e.target[8].value || "",
      department: e.target[9].value || "",
    };
    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.dateOfBirth === "" ||
      employee.startDate === "" ||
      employee.street === "" ||
      employee.city === "" ||
      employee.state === "" ||
      employee.zipCode === "" ||
      employee.department === ""
    ) {
      alert("un ou plusieurs champs ne sont pas remplis");
    } else {
      e.preventDefault();
      // alert('ouiiiiiiiiiiiiii ça part')
      setOpenModal(true);
      // console.log(employee)
      saveEmployee(employee);
      localStorage.setItem("employees", JSON.stringify(employees));
      console.log(employees);
    }
  };
  return (
    <div className={"home"}>
      <Helmet>
        <title>HRnet | Home</title>
      </Helmet>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        functionCloseBtn={functionCloseBtn}
      >
        Employé enregistré
      </Modal>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={"/Employee"}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form
          onSubmit={(e) => handlerSubmit(e)}
          action="#"
          id="create-employee"
        >
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          {/*<label htmlFor="date-of-birth">Date of Birth</label>*/}
          {/*<input id="date-of-birth" type="text"/>*/}
          <Calendar
            language={"fr-FR"}
            label={"Date of Birth"}
            htmlFor={"start-date"}
          />

          <Calendar
            language={"en-US"}
            label={"Start Date"}
            htmlFor={"start-date"}
          />

          {/*<label htmlFor="start-date">Start Date</label>*/}
          {/*<input id="start-date" type="text"/>*/}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <SelectDropDownnnn
              data={states}
              htmlFor={"state"}
              label={"State"}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>
          <SelectDropDownnnn
            data={department}
            htmlFor={"department"}
            label={"Department"}
          />
          <div className={"containerBtn"}>
            <button style={{ margin: "auto" }}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
