import React from 'react'
import '../../style.scss'
import { Checkbox, FormControlLabel } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from '../../../Footer/Footer';

const Service = () => {
  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const submitHandler = (e) => {
  e.preventDefault();
  alert("form submitted");
};
const initialValues = {
  name: "",
  number: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(3, "Name must be at least 3 characters"),
  number: Yup.string()
    .matches(phoneRegExp, "Enter a valid mobile number")
    .required("Enter mobile number"),
    email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
});
  return (
    <div>
       <div className='row'>
        <div className='col-md-6'>
        <img src='https://www.titan.co.in/wps/wcm/connect/titanrt/20a23c5a-a5bc-4e1c-bbbb-4310abe2511a/MicrosoftTeams-image+%284%29.png?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-20a23c5a-a5bc-4e1c-bbbb-4310abe2511a-o5cCQxa' 
        alt='img'/>
        </div>
        <div className='col-md-6'>
        {/* <div className="menu-links">
            <Link to="video-call">Video Call</Link>
            <Link to="visit-store">Visit Store</Link>
            <Link to="service">Service</Link>
          </div> */}
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
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="form-control"
                ></Field>
                <ErrorMessage
                  name="email"
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
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
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
    </div>
  )
}

export default Service
