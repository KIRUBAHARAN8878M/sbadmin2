import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewTeacher() {
    const params = useParams();
    console.log(params);

    const [teacherData, setTeacherData] = useState({})
    useEffect(() => {
        loadTeacher()
    }, [])
    let loadTeacher = async () => {
        try {
            let teacher = await axios.get(`https://628209e19fac04c6540df59f.mockapi.io/kirubaharan/${params.id}`)
            setTeacherData(teacher.data)
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
                            <img src={teacherData.image} class="card-img-top offset-6 py-2 mt-3 mx-auto rounded-circle" alt="..." style={{ borderRadius: '50%', width: '8rem', height: '8rem' }} />
                            <div class="card-body">
                                <h5 class="card-title text-center">{teacherData.name}</h5>

                            </div>
                            <ul class="list-group list-group-flush">
                                <div className=''>
                                    <li class="list-group-item">Teacher Id<span className='mx-1'>:&nbsp;</span>{teacherData.id}</li>
                                </div>
                                <div>
                                    <li class="list-group-item">E-mail <span className='offset-1 '>&nbsp;&nbsp;:&nbsp;</span>{teacherData.email}</li>
                                </div>

                                <div>
                                    <li class="list-group-item">City<span className='offset-2'>&nbsp;&nbsp;:&nbsp;</span>{teacherData.city}</li>
                                </div>
                                <div>
                                    <li class="list-group-item">Subject<span className='offset-1'>&nbsp;&nbsp;:&nbsp;</span>{teacherData.subject}
                                    </li></div>
                                <div>
                                    <li class="list-group-item">Eexperience<span className=''>:&nbsp;</span>{teacherData.experience}
                                    </li></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewTeacher;