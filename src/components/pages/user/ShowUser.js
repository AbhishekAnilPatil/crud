import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function ShowUser() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {
        const result = await axios.get('http://localhost:5000/users/',users);

        setUsers(result.data);
    }

    useEffect(()=>{
        fetchAllUsers();
    }, [])

  return (
    <div>
    <center><b><h1>USER INFORMATION</h1></b></center>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Employee id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(obj=>{
                    return(
                        <tr>
                         <td>{obj.eid}</td>
                         <td>{obj.fn}</td>
                         <td>{obj.ln}</td>
                         <td>{obj.city}</td>
                         <td>{obj.state}</td>
                         <td>
                            <NavLink to={`/user/view/${obj.id}`}><button className='btn btn-outline-primary me-3'>VIEW</button></NavLink>
                            <NavLink to={`/user/update/${obj.id}`}><button className='btn btn-outline-warning me-3 mx-1'>UPDATE</button></NavLink>
                            <NavLink to={`/user/delete/${obj.id}`}><button className='btn btn-outline-danger me-3'>DELETE</button></NavLink>
                         </td>
                        </tr>
                    );
                })
            
            }
        </tbody>
    </table>
    </div>
  )
}

export default ShowUser