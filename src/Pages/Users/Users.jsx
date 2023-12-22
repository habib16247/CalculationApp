import React from 'react'
import { useLoaderData } from 'react-router-dom'
import user from './User.module.css';
import User from "./User"


const Users = () => {
    const users = useLoaderData()
    console.log(users)
  return (
    <div className={user.cardList}>
        {
            users.map(item => <User key = {item.id} user = {item} />)
        }
    </div>
  )
}

export default Users