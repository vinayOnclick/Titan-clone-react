import React from "react";
import "../style.scss";
import { Link, Outlet } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "../../Footer/Footer";


const Book = () => {
  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const submitHandler = (e) => {
  e.preventDefault();
  alert("form submitted");
};
const initialValues = {
  name: "",
  number: "",
  state: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(3, "Name must be at least 3 characters"),
  number: Yup.string()
    .matches(phoneRegExp, "Enter a valid mobile number")
    .required("Enter mobile number"),
  state: Yup.string().required("This field is required"),
});
  return (
    <>
     <div className="row book-section">
        <div className="col-md-6 col-sm-12 col-12 left-img">
          <img
            src="https://www.titan.co.in/wps/wcm/connect/titanrt/a600c49f-e324-49b9-8718-7c5151fa31e8/MicrosoftTeams-image+%286%29.png?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-a600c49f-e324-49b9-8718-7c5151fa31e8-o5cEdG9"
            alt="img"
          />
        </div>
        <div className="col-md-6 col-sm-12 col-12">
          <div className="menu-links">
            <Link to="video-call"className="active">Video Call</Link>
            <Link to="visit-store">Visit Store</Link>
            <Link to="service">Service</Link>
            <Outlet />
          </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            <Form onSubmit={submitHandler}>
              <div className="form-group">
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="form-control"
                ></Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="alert alert-danger"
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <Field
                  name="number"
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                ></Field>
                <ErrorMessage
                  name="number"
                  component="div"
                  className="alert alert-danger"
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <Field
                  as="select"
                  name="state"
                  placeholder="State"
                  label="State"
                  className="form-control"
                >
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chattisgarh">Chattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jarkhand">Jarkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerela">Kerela</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Mainpur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telegana">Telegana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttrakhand">Uttrakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </Field>
                <ErrorMessage
                  name="state"
                  component="div"
                  className="alert alert-danger"
                ></ErrorMessage>
                {/* <FormControl>
                  <InputLabel>State</InputLabel>
                  <Select
                    label="State"
                    onChange={handleChange}
                  >
                   
                  </Select>
                </FormControl> */}
              </div>
              <div className="form-group">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  sx={{ fontSize: '1.4rem'}}
                  label="Send notification to my phone"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className='book-para'>
      <h1>Here's How It Works:</h1>
      <p>
        Fill all details in the form pertaining to the video call or store visit
        that you would like to make to the date and time which is convenient for
        you. You will receive a confirmation via email and SMS. Our store
        manager will call you to confirm your video call or store visit and
        guide you.
      </p>
      </div>
     <Footer />
    </>
  );
};

export default Book;
