import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as yup from "yup"
const FormValidation = () => {

  const defaultValue={
    name:"",
    email:"",
    password:""
  }
 const updatedValue=yup.object({
    name:yup.string().required("please enter name"),
    email:yup.string().required("please enter email"),
    password:yup.string().required("please enter password")
 })

 const handleSubmit=(values)=>{
    console.log("values" ,values)
 }

  return (
    <div className='flex flex-col justify-center '>
      <h1 className=' mt-5 text-center font-extrabold'>Form Validation</h1>
      <Formik initialValues={defaultValue} validationSchema={updatedValue} onSubmit={handleSubmit}>
        <Form >
      
      <Field type="text" name="name" placeholder="Enter your name" className="flex ml-7  border-2 border-black"/>
      <label className='text-red-800'>
        <ErrorMessage name='name'/>
      </label>
      
      <Field type="text" name="email" placeholder="Enter your email" className="flex ml-7 mt-4 border-2 border-black"/>
      <label className='text-red-800'>
        <ErrorMessage name='email'/>
      </label>
      
      <Field type="text" name="password" placeholder="Enter your password" className="flex ml-7  mt-4 border-2 border-black"/>

      <label className='text-red-800'>
        <ErrorMessage name='password'/>
      </label>
      <button className='ml-20 mt-4 rounded-lg w-16 bg-blue-600 text-white' type='submit' >submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormValidation
