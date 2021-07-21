import React, { useState } from 'react'
import UserCard from './UserCard'

const UsersList = props => {
  console.table(props.users)
  const usersList = useState(props.users)
  console.table('usersList: ', usersList)
  return (
    <div className='users-list'>
      {usersList.map(function (user, index) {
        return (
          <div key={index}>
            <UserCard
              id={user.id}
              name={user.name}
              avatar={user.avatar}
              password={user.password}
              email={user.email}
            />
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
