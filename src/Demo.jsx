import React, { useState } from "react";

function Demo() {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const nameEventHandler = (e) => {
    setValues({ ...values, fName: e.target.value });
  };
  const passEventHandler = (e) => {
    setValues({ ...values, lName: e.target.value });
  };
  const emailEventHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (values.fName && values.lName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        {submitted && valid ? (
          <div class="alert alert-primary" role="alert">
            Success ! Thank You For Register
          </div>
        ) : null}
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          onChange={nameEventHandler}
          value={values.fName}
          name="fName"
          className="form-control"
          placeholder="Enter email"
        />
        {submitted && !values.lName ? (
          <span className=" alert-danger"> Please Enter Name</span>
        ) : null}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          onChange={passEventHandler}
          value={values.lName}
          name="lName"
          className="form-control"
          placeholder="Password"
        />
        {submitted && !values.lName ? (
          <span className=" alert-danger"> Please Enter Password</span>
        ) : null}
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          onChange={emailEventHandler}
          value={values.email}
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
        {submitted && !values.email ? (
          <span className=" alert-danger"> Please Enter E-mail ID</span>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary  m-4 ">
        Submit
      </button>
    </form>
  );
}

export default Demo;
