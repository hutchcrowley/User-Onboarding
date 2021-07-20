import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import UserCard from './Components/UserCard'
import UsersList from './Components/UsersList'
import SearchForm from './Components/SearchForm'
import Spinner from './Components/Spinner'
import PropTypes from 'prop-types'

import axios from 'axios'
import { Route, Link } from 'react-router-dom'

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then(res => {
        setIsLoading(false)
        setUsers(res.data)
        console.log('server response: ', res.data)
      })
      .catch(err => {
        console.log('Error: the data was not returned from the server', err)
        setIsLoading(true)
      })
  }, [setUsers, setIsLoading])

  //   const searchResultDisplay = search => {
  //     const searchResults = users.filter(user => user.name.toLowerCase() === search.toLowerCase());
  //     setUsers(searchResults);
  //   };

  return (
    <div className='App'>
      <div className='nav-bar'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/users' className='nav-link'>
          Users
        </Link>
        <Link to='/users/search' className='nav-link'>
          Search
        </Link>
      </div>
      <div className='app-body'>
        <h1>Hello, welcome to user onboarding!</h1>
        {isLoading === true ? (
          <Spinner />
        ) : (
          <Route exact path='/' render={props => <Form {...props} />} />
        )}
        <Route
          exact
          path='/users'
          render={props => <UsersList {...props} users={users} />}
        />
        <Route path='/users/:username' component={UserCard} />
        <Route path='/users/search' component={SearchForm} />
      </div>
    </div>
  )
}

export default App

App.propTypes = {
  isLoading: PropTypes.bool
}
