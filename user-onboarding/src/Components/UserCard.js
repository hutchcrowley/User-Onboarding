import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardImg } from 'react-bootstrap'

const UserCard = props => {
  return (
    <Card className='user-card' key={props.id}>
      <Card.Title>{props.name}</Card.Title>
      <Card.Body>
        <CardImg variant='top' src={props.avatar} />
        <p>{props.email}</p>
      </Card.Body>
    </Card>
  )
}

export default UserCard

UserCard.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
  avatar: PropTypes.string
}
