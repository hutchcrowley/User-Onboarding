import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardImg } from 'react-bootstrap';

const UserCard = props => {
  return (
    <Card className='user-card' key={props.id}>
      <CardImg variant='top' src={props.avatar} />
      <Card.Title>{props.name}</Card.Title>
      <Card.Body>
        <p>{props.email}</p>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

UserCard.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string.isRequired('Please enter your password!'),
  email: PropTypes.string,
  TOS: PropTypes.bool,
  search: PropTypes.string,
  avatar: PropTypes.string
};
