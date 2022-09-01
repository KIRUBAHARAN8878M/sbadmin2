import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewStudent() {
    const params = useParams();
    console.log(params);
    
    const [studentData, setStudentData] = useState({})
    useEffect(() => {
        loadStudent()
    }, [])
    let loadStudent = async () => {
        try {
            let student = await axios.get(`https://628209e19fac04c6540df59f.mockapi.io/students/${params.id}`)
            setStudentData(student.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 mx-auto'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={studentData.image} class="card-img-top offset-6 py-2 mt-3 mx-auto rounded-circle" alt="..." style={{ borderRadius: '50%', width: '8rem', height: '8rem' }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">{studentData.name}</h5>

                            </div>
                            <ul class="list-group list-group-flush">
                                <div className=''>
                                    <li class="list-group-item">Student Id<span className='mx-1'>:&nbsp;</span>{studentData.id}</li>
                                </div>
                                <div>
                                    <li class="list-group-item">Gender <span className='offset-1 '>:&nbsp;</span>{studentData.gender}</li>
                                </div>
                                <div>
                                    <li class="list-group-item">Age<span className='offset-2'>&nbsp;&nbsp;:&nbsp;</span>{studentData.age}</li>
                                </div>
                                <div>
                                    <li class="list-group-item">City<span className='offset-2'>&nbsp;&nbsp;:&nbsp;</span>{studentData.city}</li>
                                </div>
                                <div>
                                    <li class="list-group-item">Number<span className='offset-1'>:&nbsp;</span>{studentData.number}
                                    </li></div>
                                <div>
                                    <li class="list-group-item">Course<span className='offset-1'>&nbsp;&nbsp;:&nbsp;</span>{studentData.course}
                                    </li></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewStudent;