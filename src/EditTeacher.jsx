import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditTeacher() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      subject: "",
      experience: "",
      salary: ""
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter Name "
      }

      if (values.name.length < 5) {
        errors.name = "Please enter Name less than 5 letters"
      }
      if (values.email === "") {
        errors.age = "Please enter email"
      }
      if (values.city === "") {
        errors.age = "Please enter city"
      }
      return errors;
    },
    onSubmit: async (values) => {
     await axios.put(`https://628209e19fac04c6540df59f.mockapi.io/kirubaharan/${params.id}`,values)
     
     navigate('/portal/teachers')
    }
  });

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let teacher = await axios.get(`https://628209e19fac04c6540df59f.mockapi.io/kirubaharan/${params.id}`)
      formik.setValues(
        {
          name: teacher.data.name,
          email:teacher.data.email,
          city: teacher.data.city,
          subject: teacher.data.subject,
          experience: teacher.data.experience,
          salary: teacher.data.salary
        }
      )


    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-center mb-4">
          <h1 className="h3 mb-0 text-dark-800">Edit Teacher Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <label>Name</label>
              <input
                className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className='col-lg-6'>
              <label>E-mail</label>
              <input
                className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
              />
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            </div>
            <div className='col-lg-6'>
              <label>City</label>
              <input
                className={`form-control ${formik.errors.city ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.city}
                onChange={formik.handleChange}
                name="city"
              />
               <span style={{ color: "red" }}>{formik.errors.city}</span>
            </div>
            <div className='col-lg-6'>
              <label>Subject</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.subject}
                onChange={formik.handleChange}
                name="subject"
              />
            </div>
            <div className='col-lg-6'>
              <label>Experience</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.experience}
                onChange={formik.handleChange}
                name="experience"
              />
            </div>
            <div className='col-lg-6'>
              <label>Salary</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
            </div>
            <div className='col-lg-6 mt-2'>

              <input
                className='btn-primary'
                type={'submit'}
                value='Submit'
                disabled={!formik.isValid}
              />

            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default EditTeacher;