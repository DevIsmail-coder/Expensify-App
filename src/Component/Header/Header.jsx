import './Header.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiUserCircle } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const url = 'https://expensify-76dn.onrender.com/api/v1';

const Header = () => {
const navigate = useNavigate()

    const id = localStorage.getItem('userEmail');
    const [user, setUser] = useState({});
  
    const getUser = async () => {
      try {
        const response = await axios.get(`${url}/user/${id}`);
        console.log(response.data.data);
        setUser(response.data.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
  
    useEffect(() => {
      if (id) getUser();
    }, [id]);
  
    // console.log(user);
  return (
    <div className='Headerbody'>
      <main className='Headercontainer1'>
      <h3 className='Headerh3' onClick={() => navigate("/profile")}>Expensify</h3>
      </main>
      <main className='Headercontainer2'>
        <article className='Headercontainer2div'>
         <div className='Headercontainer2span1'>
         <span className='Headercontainer2span1div'>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </span>
          <h3 className='Headercontainer2span1div2'>Owner</h3>
         </div>
         <div className='Headercontainer2span2'>
          <HiUserCircle  className='Headericons'/>
         </div>
        </article>
      </main>
    </div>
  )
}

export default Header
