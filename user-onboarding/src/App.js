import React, { useState, useEffect } from 'react';
import Spinner from './Components/Spinner';
import spinner from './Assets/spinner.gif';
import UsersList from './Components/UsersList';
import UserCard from './Components/UserCard';
import Form from './Components/Form';
import SearchForm from './Components/SearchForm';

import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';

const App = props => {
  const [users, setUsers] = useState([]);
  const { results, setResults } = useState('');
  const { isLoading, setIsLoading } = useState(false);

  const addNewUser = user => {
    setUsers({ ...users, user });
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users`)
      .then(res => {
        console.log(res.data);
        setResults(res.data);
        setUsers(results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Error: the data was not returned from the server', err);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className='App'>
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Switch>
        <Route exact path='/' component={Form} />
        <Route exact path='/users' render={props => <UsersList {...props} users={users} addNewUser={addNewUser} />} />
        <Route path='/users/:username' component={UserCard} />
        <Route path='/users/search' component={SearchForm} />
        <Route component={Spinner} />
      </Switch>
      console.log(props.match);
    </div>
  );
};

export default App;
