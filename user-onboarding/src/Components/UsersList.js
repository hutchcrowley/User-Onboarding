import React from 'react';

const UsersList = props => {
  console.log(props);
  return (
    <div clasName='Users-list'>
      {props.users.map(user => (
        <div classname='user' key={user.id}>
          <img src={user.avatar} alt='avatar' className='user-img' />
          <h1>{user.first_name}</h1>
          <h1>{user.last_name}</h1>

          <p>password: {user.password}</p>
          <p>email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
