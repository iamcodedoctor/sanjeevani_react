import '../styles.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/authSlice';
import { Spin } from 'antd';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.clear();
        dispatch(logoutUser());
        navigate('/login');
    }, [])
  return (
    <div className="loading-parent">
    <Spin tip="Logging Out" size="large"></Spin>
</div>
  )
}

export default Logout
