import React from "react";

export default function SalaryForm() {
  return (
    <div className="row my-5 mx-5">
      <div className="col-sm-12">
        <form className="row g-3">
          <div className="col-md-12 mt-5">
            <h5 for="colFormLabelSm" className="col-sm-6">
              Gender
            </h5>
          </div>
          <div className="col-7">
            <div className="col-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              ></input>
              <label className="form-check-label h5" for="inlineCheckbox1">
                Male
              </label>
            </div>
            <div className="col-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              ></input>
              <label className="form-check-label h5" for="inlineCheckbox2">
                Female
              </label>
            </div>
            <div className="col-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              ></input>
              <label className="form-check-label h5" for="inlineCheckbox2">
                Other
              </label>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <h5 for="colFormLabelSm" className="col-sm-6">
              Comapny Detail
            </h5>
          </div>

          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Comapny Name"
            ></input>
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Designation/Job Title"
            ></input>
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Department"
            ></input>
          </div>
          <div className="col-5 ml-2">
            <select id="inputState" className="form-select">
              <option selected>Total Experience</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-5">
            <select id="inputState" className="form-select">
              <option selected>Total Work Experience in Company</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-12 mt-5">
            <h5 for="colFormLabelSm" className="col-sm-6">
              Salary Detail
            </h5>
          </div>

          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Fixed Salary"
            ></input>
          </div>

          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Variable Salary"
            ></input>
          </div>

          <div className="button-Class">
            <input
              className="col-4 btn btn-dark"
              type="SUBMIT THE FORM"
              value="SUBMIT ANONYMOUSLY"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
