import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {

    const {userId} = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const fetchUser = async()=>{
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }

    const onChangeInput = (event) => {
        setUser({...user,[event.target.name]:event.target.value});
    } 

    const onFormSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/users/${userId}`, user);
        navigate('/user/show')
    }

    useEffect(()=>{
        fetchUser();
    }, [])

  return (
    <>
    <div className ="container">
    <center><h1>USER UPDATION FORM</h1></center>
    <form method='post' onSubmit={(event)=>{onFormSubmit(event)}}>
        <div className ="form-group">
            <div className ="form-group col-md-6">
                <label htmlFor="Empid">Employee id</label>
                <input type='number' min={1} className ="form-control" id="Empid" value={user.eid} name='eid' onChange={(event)=>onChangeInput(event)}/>
            </div>
            <div className ="form-group col-md-6">
            <label htmlFor="fname">First Name</label>
            <input type="text" className ="form-control" id="fname" value={user.fn} name='fn' onChange={(event)=>onChangeInput(event)}/>
            </div>
            <div className ="form-group col-md-6">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className ="form-control" id="lname" value={user.ln} name="ln" onChange={(event)=>onChangeInput(event)}/>
            </div>
            <div className ="form-group col-md-6">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className ="form-control" id="inputAddress" value={user.add} name='add' placeholder="1234 Main St" onChange={(event)=>onChangeInput(event)}/>
            </div>
            <div className ="form-group">
            <div className ="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className ="form-control" id="inputCity" value={user.city} name='city' onChange={(event)=>onChangeInput(event)}/>
            </div>
            <div className ="dropdown col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className ="form-control" value={user.state} name='state' defaultValue={'Choose...'} onChange={(event)=>onChangeInput(event)}>
                <option>Choose...</option>
                <option>Andaman and Nicobar Islands</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chandigarh</option>
                <option>Chhattisgarh</option>
                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                <option>Delhi</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Ladakh</option>
                <option>Lakshadweep</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Puducherry</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Union territory</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
            </select>
            
            </div>
        </div>
        </div>
        <input type="submit" value='UPDATE USER' className ="btn btn-primary col-md-4"/>
</form>
</div>
</>
  )
}

export default UpdateUser