import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

function Teachers() {

    const [teachers, setTeachers] = useState([]);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let teachers = await axios.get("https://628209e19fac04c6540df59f.mockapi.io/kirubaharan");
        setTeachers(teachers.data);
        setLoading(false);
    }

    let teacherDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
            if (ask) {
                await axios.delete(`https://628209e19fac04c6540df59f.mockapi.io/kirubaharan/${id}`);
            }
            let index = teachers.findIndex((obj) => obj.id === id);
            teachers.splice(index, 1);
            setTeachers([...teachers]);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Teachers</h1>
                <Link to="/portal/create-teacher" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <FontAwesomeIcon className="fal mx-2 fa-sm text-white-50" icon={faUsers} />
                    Create Teacher</Link>
            </div>
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Teacher Data Details</h6>
                        </div>
                        <div className="card-body">


                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>E-mail</th>
                                            <th>City</th>
                                            <th>Subject</th>
                                            <th>Experience</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>E-mail</th>
                                            <th>City</th>
                                            <th>Subject</th>
                                            <th>Experience</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            teachers.map((teacher, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{teacher.name}</td>
                                                    <td>{teacher.email}</td>
                                                    <td>{teacher.city}</td>
                                                    <td>{teacher.subject}</td>
                                                    <td>{teacher.experience} Years</td>
                                                    <td>${teacher.salary}</td>
                                                    <td>
                                                        <Link to={`/portal/teachers/${teacher.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>

                                                        <Link to={`/portal/teachers/edit/${teacher.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>

                                                        <button onClick={() => {
                                                            teacherDelete(teacher.id)
                                                        }} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                )
            }

        </div>
    )
}

export default Teachers;