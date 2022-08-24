import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { signInUserApi } from "../../store/api/userApi";

import { historyObject } from "../../AppRoutes";

const LoginPage = ({ socket }) => {

  const userReducer = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required!')
        .min(3, "Username is too short!")
        .max(30, "Username is too long")
        .matches(/^[A-Za-z0-9_]+$/, "Only alphabets, numbers and underscore allowed!")
        .matches(/^[A-Za-z]/, "First character must be alphabet")
    }),
    onSubmit: (values) => {
      handleSubmit(values, socket);
    }
  })

  const handleSubmit = (values, socket) => {
    dispatch(signInUserApi(values.username, socket.id));
  }

  useEffect(() => {
    if (userReducer && userReducer.username) {
      historyObject.replace("/rooms")
    }
  }, [userReducer])

  return (
    <div className="login-container">
      <div className="login__left">
        <div className="login__left--container">
          <h1 className="login__heading">chaiit</h1>
        </div>
      </div>
      <div className="login__right">
        <div className="login__right--container">
          <h2 className="login__right--heading">Choose Username</h2>
          <form onSubmit={formik.handleSubmit}>
            {formik.errors.username && formik.touched.username ?
              (
                <>
                  <div className="login__error">{formik.errors.username}</div>
                  <input autoComplete="off" type="text" className="login__input login__input--error" placeholder="Username..." {...formik.getFieldProps('username')} />
                  <button className="login__button login__button--error" type="submit">Enter</button>
                </>
              )
              :
              (
                <>
                  <div className="login__error login__error--hidden"></div>
                  <input autoComplete="off" className="login__input" placeholder="Username..." {...formik.getFieldProps('username')} />
                  <button className="login__button" type="submit">Enter</button>
                </>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;