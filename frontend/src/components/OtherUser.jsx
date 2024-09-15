import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch =  useDispatch();
 const {selectedUser, onlineUsers} = useSelector(store=>store.user);
 const isOnline = onlineUsers?.includes(user._id);

    const selectedUserHandler = (user) =>{
       
        dispatch(setSelectedUser(user))
        

    }
  return (
    <>
      <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id === user?._id ? 'bg-zinc-300 text-zinc-800' : ''} flex gap-2 items-center  text-gray-200 hover:text-[#000] hover:bg-zinc-300 rounded p-2 cursor-pointer`}>
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-10 rounded-full">
            <img
              src={user?.profilePhoto}
              alt="image-profile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between  gap-2 ">
            <p>{user?.fullName}</p>
          
          </div>
        </div>
      </div>
      <div className="my-0 divider py-0 h-1"></div>
    </>
  )
}

export default OtherUser
