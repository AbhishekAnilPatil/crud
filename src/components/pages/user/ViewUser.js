import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewUser() {
    const {userId} = useParams();

    const [user, setUser] = useState({});

    const fetchUser = async()=>{
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }

    useEffect(()=>{
        fetchUser();
    }, [])

  return (
    <>
        <div>
            <center><h1>USER DETAILS</h1></center>
            <form>
                <label htmlFor='eid'><b>EID</b></label>
                <input value={user.eid} id='eid' className='form-control' readOnly/>
                <label htmlFor='fn'><b>FIRST NAME</b></label>
                <input value={user.fn} id='fn' className='form-control' readOnly/>
                <label htmlFor='ln'><b>LAST NAME</b></label>
                <input value={user.ln} id='ln' className='form-control' readOnly/>
                <label htmlFor='add'><b>ADDRESS</b></label>
                <input value={user.add} id='add' className='form-control' readOnly/>
                <label htmlFor='city'><b>CITY</b></label>
                <input value={user.city} id='city' className='form-control' readOnly/>
                <label htmlFor='state'><b>STATE</b></label>
                <input value={user.state} id='state' className='form-control' readOnly/>
            </form>
        </div>
    </>
  )
}

export default ViewUser