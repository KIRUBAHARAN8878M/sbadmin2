import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

function Students() {

    const [students, setStudents] = useState([]);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let students = await axios.get("https://628209e19fac04c6540df59f.mockapi.io/students");
        setStudents(students.data);
        setLoading(false);
    }

    let studentDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
            if (ask) {
                await axios.delete(`https://628209e19fac04c6540df59f.mockapi.io/students/${id}`);
            }
            loadData();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Students</h1>
                <Link to="/portal/create-student" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <FontAwesomeIcon className="fal mx-2 fa-sm text-white-50" icon={faUsers} />
                    Create Student</Link>
            </div>
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Student Data Details</h6>
                        </div>
                        <div className="card-body">


                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            <th>City</th>
                                            <th>Number</th>
                                            <th>Course</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            <th>City</th>
                                            <th>Number</th>
                                            <th>Course</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            students.map((student, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.gender}</td>
                                                    <td>{student.age}</td>
                                                    <td>{student.city}</td>
                                                    <td>{student.number}</td>
                                                    <td>{student.course}</td>
                                                    <td>
                                                        <Link to={`/portal/students/${student.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>

                                                        <Link to={`/portal/students/edit/${student.id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>

                                                        <button onClick={() => {
                                                            studentDelete(student.id)
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

export default Students;