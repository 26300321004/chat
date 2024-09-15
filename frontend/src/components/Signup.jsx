import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [user, setUser]= useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  });
  const handleCheckbox = (gender)=>{
    setUser({...user, gender})
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try{
            const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user,{
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            });
            if (res.data.success) {
              navigate("/login");
              toast.success(res.data.message);
            }
          } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
          }
          setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
          })
        }
  return (
    <div className="min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-red-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-rose-300">
        <h1 className="text-3xl font-bold text-center ">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
            value={user.fullName}
            onChange={(e)=>setUser({...user,fullName:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Fullname"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="password"
            />
          </div>{" "}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
            value={user.confirmPassword}
            onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="confirmPassword"
            />
          </div>
          <div className="flex items-center my-4 gap-2">
            <div className="flex items-center ">
              <p className="">Male</p>
              <input
                type="checkbox"
                defaultChecked
                onChange={() => handleCheckbox("male")}
                checked={user.gender === "male"}
                className="checkbox checkbox-secondary"
              />
            </div>
            <div className="flex items-center">
              <p className="">Female</p>
              <input
                type="checkbox"
                defaultChecked
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox checkbox-secondary"
              />
            </div>
          </div>
          <p className='text-center my-2'>Already have an account? <Link to="/login"> login </Link></p>
          <div>
            <button type='submit' className='btn btn-active w-full btn-sm mt-2 border border-slate-700'>Singup</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
