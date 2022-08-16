import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateNewOverlayContent = () => {

  const formik = useFormik({
    initialValues: {
      roomName: "",
      roomDescription: ""
    },
    validationSchema: Yup.object({
      roomName: Yup.string().required('Required!')
        .min(3, "Too short!")
        .max(25, "Too long")
        .matches(/^[A-Za-z0-9 _]+$/, "Special characters not allowed!")
        .matches(/^[A-Za-z]/, "First character must be alphabet"),
      roomDescription: Yup.string().max(500, "Max 500 characters allowed")
        .matches(/^[A-Za-z]/, "First character must be alphabet")
    }),
    onSubmit: (values) => {
      //remember to trim
      console.log(values)
    }
  })



  return (
    <div className="createRoom__container">
      <h2 className="createRoom__heading">Create Room</h2>
      <form className="createRoom__form" onSubmit={formik.handleSubmit}>
        <input autoComplete="off" type="text" className="createRoom__form--input" placeholder="Name" {...formik.getFieldProps('roomName')} />
        {
          formik.errors.roomName && formik.touched.roomName ?
            <div className="createRoom__form--input-error createRoom__form--input-error-visible">{formik.errors.roomName}</div>
            : <div className="createRoom__form--input-error">Possible errors</div>
        }
        <textarea autoComplete="off" type="text" className="createRoom__form--input createRoom__form--textarea" rows="3" placeholder="Description" {...formik.getFieldProps('roomDescription')} />
        {
          formik.errors.roomDescription && formik.touched.roomDescription ?
            <div className="createRoom__form--input-error createRoom__form--input-error-visible">{formik.errors.roomDescription}</div>
            : <div className="createRoom__form--input-error">Possible errors</div>
        }
        {
          ((formik.errors.roomName && formik.touched.roomName) || (formik.errors.roomDescription && formik.touched.roomDescription)) ?
            <button className="createRoom__form--button createRoom__form--button-error" type="submit">Enter</button> :
            <button className="createRoom__form--button" type="submit" >Enter</button>
        }


      </form>
    </div >
  )
}

export default CreateNewOverlayContent;