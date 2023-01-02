import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../actions/userAction";
import signup from "../../../Assests/Images/signup.webp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, TextField, Autocomplete } from "@mui/material";
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

const Login = ({ isShowLogin, setIsShowLogin }) => {
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    number: "",
  };

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .matches(phoneRegExp, "Enter a valid mobile number")
      .required("Enter mobile number"),
  });

  const handleNumber = async (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const handleApi = () => {
    console.log({ number });
    localStorage.setItem("number", number);
    setSuccess(true);

    dispatch(registerUser({ number }));
  };
  return (
    <>
      <Modal size="xl" isOpen={isShowLogin} toggle={() => !isShowLogin}>
        <ModalBody>
          <div className="closeBtn" onClick={() => setIsShowLogin(false)}>
            X
          </div>
          <div className="container-login">
            <div className="login-img">
              <img src={signup} alt="signup" />
            </div>
            {success ? (
              <div className="login-section">
                <h2> You are logged in</h2>
                <br />
                <p>
                  <Link to="/brands" onClick={() => setIsShowLogin(false)}>
                    Go To Home
                  </Link>
                </p>
              </div>
            ) : (
              <div className="login-section">
                <div className="login-text">Login or Signup</div>

                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                >
                  <Form>
                    {(option) => option.phone}
                    <div className="form-group">
                      <Autocomplete
                        id="country-select-demo"
                        sx={{
                          width: 130,
                          border: ".1rem solid black",
                          borderRadius: 0,
                        }}
                        options={countries}
                        autoHighlight
                        value={defaultOption}
                        getOptionLabel={(option) => option.phone}
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              alt=""
                              style={{ fontSize: "1.5rem" }}
                            />
                            +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                            style={{ fontSize: "1.5rem" }}
                          />
                        )}
                      />
                      <label htmlFor="number"></label>
                      <Field
                        name="number"
                        type="number"
                        className="form-control"
                        value={number}
                        onChange={handleNumber}
                        style={{ fontSize: "1.5rem" }}
                      ></Field>
                      <div>
                        <ErrorMessage
                          name="number"
                          component="div"
                          className="alert alert-danger"
                          style={{ fontSize: "1.5rem" }}
                        ></ErrorMessage>
                      </div>
                    </div>
                    <p style={{ fontSize: "1.5rem" }}>
                      By continuing, I agree to <Link to="/">Term of Use</Link>{" "}
                      & <Link to="/">Privacy Policies</Link>
                    </p>
                    <button className="btn" type="submit" onClick={handleApi}>
                      CONTINUE
                    </button>
                  </Form>
                </Formik>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Login;

const countries = [
  { code: "IN", label: "India", phone: "91" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "CH", label: "Switzerland", phone: "41" },
];

const defaultOption = {
  code: "IN",
  label: "India",
  phone: "91",
};
