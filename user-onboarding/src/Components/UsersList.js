import React from 'react'
import UserCard from 'react'

const UsersList = props => {
  return (
    <div className='users-list'>
      {props.users.map(user => (
        <div className='user' key={user.id}>
          <UserCard
            name={user.name}
            avatar={user.avatar}
            password={user.password}
            email={user.email}
          />
        </div>
      ))}
    </div>
  )
}

export default UsersList
