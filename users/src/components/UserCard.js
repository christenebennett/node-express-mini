import React, { Component } from 'react';

const UserCard = props => {
  return (
  <div className="user-card">
      <div>{props.name}</div>
      <div>{props.bio}</div>
      <button>Delete</button>
  </div>
  )
}

export default UserCard;