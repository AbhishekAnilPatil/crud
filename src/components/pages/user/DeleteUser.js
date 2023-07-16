import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function DeleteUser() {
    const {userId} = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const fetchUser = async()=>{
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:5000/users/${userId}`);
        navigate('/user/show')
    }

    useEffect(()=>{
        fetchUser();
    }, [])

  return (
    <>
        <div className='container'>
            <center><h1>DELETE CONFIRMATION</h1></center>
            <form onSubmit={(event)=>onFormSubmit(event)}>
                <h3>Do you want to really delete <span style={{"color":"red"}}>{user.eid}---{user.fn}---{user.ln}---{user.add}---{user.city}---{user.state}</span> record?</h3>
                <input type='submit' value='YES' className='btn btn-outline-warning col-6 btn-lg'/>
                <NavLink to='/user/show'><button type='button' className='btn btn-outline-success col-6 btn-lg'>NO</button></NavLink>
            </form>
        </div>
    </>
  )
}

export default DeleteUser