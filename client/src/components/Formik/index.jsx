import React from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
const FormAdd = ({getData}) => {

  async function addProd(values) {
    const res=await axios.post("http://localhost:3000/",values)
    getData()
  }

  return (
    <div className='forma'>
<Formik
      initialValues={{ title: '', image: '', author: '',price: '' ,desc: ''  }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Required'),
        image: Yup.string()
          .required('Required'),
        author: Yup.string().required('Required'),
        price: Yup.number().positive("number must be positive").required('Required'),
        desc: Yup.string().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addProd(values)
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
       <div className='red'> <ErrorMessage name="title" /></div>


        <label htmlFor="image">Image</label>
        <Field name="image" type="text" />
        <div className='red'> <ErrorMessage name="title" /></div>

        <label htmlFor="author">Author</label>
        <Field name="author" type="author" />
        <div className='red'> <ErrorMessage name="title" /></div>

        <label htmlFor="price">Price</label>
        <Field name="price" type="text" />
        <div className='red'> <ErrorMessage name="price" /></div>

        <label htmlFor="desc">Description</label>
        <Field name="desc" type="text" />
        <div className='red'> <ErrorMessage name="desc" /></div>

        <button className='btn' type="submit">Add</button>
      </Form>
    </Formik>
    </div>
  )
}

export default FormAdd

