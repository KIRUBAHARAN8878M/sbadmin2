import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      age: "",
      city: "",
      number: "",
      course: ""
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter Name "
      }

      if (values.name.length < 5) {
        errors.name = "Please enter Name less than 5 letters"
      }
      if (values.gender === "") {
        errors.age = "Please enter Gender"
      }
      if (values.age === "") {
        errors.age = "Please enter Age"
      }
      return errors;
    },
    onSubmit: async (values) => {
     await axios.put(`https://628209e19fac04c6540df59f.mockapi.io/students/${params.id}`,values)
     
     navigate('/portal/students')
    }
  });

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let student = await axios.get(`https://628209e19fac04c6540df59f.mockapi.io/students/${params.id}`)
      formik.setValues(
        {
          name: student.data.name,
          gender:student.data.gender,
          age: student.data.age,
          city: student.data.city,
          number: student.data.number,
          course: student.data.course
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
        <h1 className="h3 mb-0 text-dark-800">Edit Student Form</h1>
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
            <label>Gender</label>
            <input
              className={`form-control ${formik.errors.gender ? `input-error` : ``}`}
              type={'text'}
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
            />
            <span style={{ color: "red" }}>{formik.errors.gender}</span>
          </div>
          <div className='col-lg-6'>
            <label>Age</label>
            <input
              className={`form-control ${formik.errors.age ? `input-error` : ``}`}
              type={'text'}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
            />
             <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className='col-lg-6'>
            <label>City</label>
            <input
              className='form-control'
              type={'text'}
              value={formik.values.city}
              onChange={formik.handleChange}
              name="city"
            />
          </div>
          <div className='col-lg-6'>
            <label>Number</label>
            <input
              className='form-control'
              type={'text'}
              value={formik.values.number}
              onChange={formik.handleChange}
              name="number"
            />
          </div>
          <div className='col-lg-6'>
            <label>Course</label>
            <input
              className='form-control'
              type={'text'}
              value={formik.values.course}
              onChange={formik.handleChange}
              name="course"
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

export default EditStudent;